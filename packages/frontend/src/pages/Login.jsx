import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import GoogleSignInButton from '../components/GoogleSignInButton';
import { API_BASE } from '../services/api';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid email or password');
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
      {/* Left Side - Form */}
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

          <h1 className="text-3xl font-bold text-navy-900 dark:text-cream-100 mb-2">Welcome back</h1>
          <p className="text-navy-600 dark:text-cream-300 mb-8">Sign in to continue your SAT preparation journey</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-300">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {/* Google's official button - see components/GoogleSignInButton.jsx */}
          <GoogleSignInButton text="continue_with" onError={setError} onBusyChange={setLoading} busy={loading} />

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cream-300 dark:border-navy-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-cream-100 dark:bg-navy-950 text-navy-500 dark:text-navy-400">or continue with email</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-700 dark:text-cream-300 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-navy-700 dark:text-cream-300">
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-navy-800 border border-cream-300 dark:border-navy-700 rounded-xl text-navy-900 dark:text-cream-100 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary !py-3 !text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <p className="mt-8 text-center text-navy-600 dark:text-cream-300">
            Don't have an account?{' '}
            <Link to="/register" className="text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-medium">
              Start free trial
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex flex-1 bg-navy-900 items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <div className="w-64 h-64 mx-auto mb-8 bg-gold-500/10 rounded-full flex items-center justify-center">
            <GraduationCap className="w-32 h-32 text-gold-400" />
          </div>
          <h2 className="text-3xl font-bold text-cream-100 mb-4">
            Master the SAT with confidence
          </h2>
          <p className="text-navy-300 text-lg">
            Join thousands of students who improved their scores with our adaptive learning platform.
          </p>
        </div>
      </div>
    </div>
  );
}
