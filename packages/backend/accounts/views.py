from django.contrib.auth import authenticate, get_user_model
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import LoginSerializer, RegisterSerializer, UserSerializer

User = get_user_model()


class RegisterView(APIView):
    """Create a new user account."""

    permission_classes = [AllowAny]
    throttle_scope = "auth"  # credential endpoint: rate limit brute force

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response(
                {
                    "user": UserSerializer(user).data,
                    "token": token.key,
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    """Authenticate user and return token."""

    permission_classes = [AllowAny]
    throttle_scope = "auth"  # credential endpoint: rate limit brute force

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            login_id = serializer.validated_data["email"]
            password = serializer.validated_data["password"]
            # Try authenticating by username first, then by email
            user = authenticate(request, username=login_id, password=password)
            if user is None:
                # Lookup username by email and retry
                try:
                    email_user = User.objects.get(email=login_id)
                    user = authenticate(request, username=email_user.username, password=password)
                except User.DoesNotExist:
                    pass
            if user:
                token, _ = Token.objects.get_or_create(user=user)
                return Response(
                    {
                        "user": UserSerializer(user).data,
                        "token": token.key,
                    }
                )
            return Response(
                {"error": "Invalid credentials"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    """Logout user by deleting their token."""

    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response({"message": "Successfully logged out"})


class MeView(APIView):
    """Get current user profile."""

    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response(UserSerializer(request.user).data)


# Google OAuth - Custom implementation using google-auth library
from google.auth.transport import requests as google_requests
from google.oauth2 import id_token

GOOGLE_CLIENT_ID = "21555557010-1v1skvapn1o9ldhu25tv7t3f5q74dtpm.apps.googleusercontent.com"


class GoogleLogin(APIView):
    """Authenticate user via Google ID token."""

    permission_classes = [AllowAny]
    throttle_scope = "auth"  # credential endpoint: rate limit brute force

    def post(self, request):
        credential = request.data.get("access_token") or request.data.get("credential")

        if not credential:
            return Response(
                {"error": "Google credential is required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            # Verify the ID token with Google
            idinfo = id_token.verify_oauth2_token(
                credential,
                google_requests.Request(),
                GOOGLE_CLIENT_ID,
            )

            # Extract user info from token
            google_id = idinfo["sub"]
            email = idinfo["email"]
            first_name = idinfo.get("given_name", "")
            last_name = idinfo.get("family_name", "")
            avatar_url = idinfo.get("picture", "")

            # Find or create user
            user = User.objects.filter(google_id=google_id).first()

            if not user:
                # Check if user exists with this email
                user = User.objects.filter(email=email).first()

                if user:
                    # Link existing account to Google
                    user.google_id = google_id
                    user.avatar_url = avatar_url
                    user.save()
                else:
                    # Create new user
                    # Generate unique username from email
                    base_username = email.split("@")[0]
                    username = base_username
                    counter = 1
                    while User.objects.filter(username=username).exists():
                        username = f"{base_username}{counter}"
                        counter += 1

                    user = User.objects.create(
                        email=email,
                        username=username,
                        google_id=google_id,
                        first_name=first_name,
                        last_name=last_name,
                        avatar_url=avatar_url,
                        role="student",
                    )
                    user.set_unusable_password()
                    user.save()

            # Create/get auth token
            token, _ = Token.objects.get_or_create(user=user)

            return Response(
                {
                    "user": UserSerializer(user).data,
                    "token": token.key,
                }
            )

        except ValueError as e:
            return Response(
                {"error": f"Invalid Google token: {str(e)}"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
