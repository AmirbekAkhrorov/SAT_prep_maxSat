from allauth.socialaccount.adapter import DefaultSocialAccountAdapter


class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
    """Custom adapter to handle social account creation."""

    def save_user(self, request, sociallogin, form=None):
        """Save user with custom fields from social login."""
        user = super().save_user(request, sociallogin, form)

        # Set default role for social users
        user.role = "student"

        # Save Google-specific data
        if sociallogin.account.provider == "google":
            user.google_id = sociallogin.account.uid
            extra_data = sociallogin.account.extra_data
            user.avatar_url = extra_data.get("picture", "")

        user.save()
        return user
