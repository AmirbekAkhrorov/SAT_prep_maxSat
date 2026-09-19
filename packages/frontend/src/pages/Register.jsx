import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, Mail, Lock, User, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import { API_BASE } from '../services/api';

const GOOGLE_CLIENT_ID = '21555557010-1v1skvapn1o9ldhu25tv7t3f5q74dtpm.apps.googleusercontent.com';

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    username: location.state?.username || '',
    password1: '',
    password2: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Check if Google script is loaded
    const checkGoogle = () => {
      if (window.google?.accounts) {
        initializeGoogle();
      }
    };

    const timeout = setTimeout(checkGoogle, 1000);
    checkGoogle();

    return () => clearTimeout(timeout);
  }, []);

  const initializeGoogle = () => {
    if (window.google?.accounts) {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
        auto_select: false,
      });
    }
  };

  const handleGoogleResponse = async (response) => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_BASE}/auth/google/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: response.credential }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Google signup failed');
      }

      login(data.user, data.token);
      navigate('/cabinet');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    if (window.google?.accounts) {
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          setError('Google OAuth requires proper domain configuration. Please use email signup or contact administrator.');
        }
      });
    } else {
      setError('Google OAuth is not available. Please use email signup.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password1 !== formData.password2) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password1.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/auth/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password1,
          // Required by RegisterSerializer, which re-checks the match
          // server-side. Omitting it made every signup fail with 400.
          password_confirm: formData.password2,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.email?.[0] || data.username?.[0] || data.password?.[0] || 'Registration failed');
      }

      login(data.user, data.token);
      navigate('/cabinet');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-navy-950 flex">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex flex-1 bg-navy-900 items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <div className="w-64 h-64 mx-auto mb-8 bg-gold-500/10 rounded-full flex items-center justify-center">
            <GraduationCap className="w-32 h-32 text-gold-400" />
          </div>
          <h2 className="text-3xl font-bold text-cream-100 mb-4">
            720 real SAT questions, ready for you
          </h2>
          <p className="text-navy-300 text-lg mb-8">
            Four math domains, three languages, three test modes — all built around the digital SAT format. Free to join, no card needed.
          </p>
          <div className="grid grid-cols-2 gap-4 text-left max-w-sm mx-auto">
            <div className="flex items-center gap-3 text-navy-200">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>Mini · Section · Full tests</span>
            </div>
            <div className="flex items-center gap-3 text-navy-200">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>English · Uzbek · Russian</span>
            </div>
            <div className="flex items-center gap-3 text-navy-200">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>Instant answer explanations</span>
            </div>
            <div className="flex items-center gap-3 text-navy-200">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>Leaderboard &amp; rankings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo and Theme Toggle */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-navy-900 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                <span className="font-display font-black text-base leading-none"><span className="text-cream-100">m</span><span className="text-gold-400">S</span></span>
              </div>
              <span className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                max<span className="text-gold-500 dark:text-gold-400 font-black">SAT</span>
              </span>
            </Link>
            <ThemeToggle />
          </div>

          <h1 className="text-3xl font-bold text-navy-900 dark:text-cream-100 mb-2">Create your account</h1>
          <p className="text-navy-600 dark:text-cream-300 mb-8">Free to join. Start your first SAT test in under a minute.</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-300">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {/* Google Sign Up Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full mb-6 py-3 px-4 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl font-medium text-navy-800 dark:text-cream-200 hover:bg-cream-50 dark:hover:bg-navy-700 transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cream-300 dark:border-navy-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-cream-100 dark:bg-navy-950 text-navy-500 dark:text-navy-400">or create account with email</span>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-navy-700 dark:text-cream-300 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="Choose a username"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-700 dark:text-cream-300 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password1" className="block text-sm font-medium text-navy-700 dark:text-cream-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                <input
                  id="password1"
                  name="password1"
                  type="password"
                  value={formData.password1}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="Create a password (min 8 characters)"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password2" className="block text-sm font-medium text-navy-700 dark:text-cream-300 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  value={formData.password2}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary !py-3 !text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <p className="mt-8 text-center text-navy-600 dark:text-cream-300">
            Already have an account?{' '}
            <Link to="/login" className="text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
