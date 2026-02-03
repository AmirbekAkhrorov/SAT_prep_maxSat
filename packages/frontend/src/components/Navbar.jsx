import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Try Demo', href: '#quiz' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) {
    return null; // Don't show navbar on auth pages
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-100/95 dark:bg-navy-900/95 backdrop-blur-md shadow-card'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-navy-900 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-gold-400" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold-500 rounded-full border-2 border-cream-100" />
              </div>
              <span className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
                SAT<span className="text-gold-600 dark:text-gold-400">Prep</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative font-sans text-sm font-medium text-navy-700 dark:text-cream-300 hover:text-navy-900 dark:hover:text-cream-100 transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              {user ? (
                // Logged in state
                <div className="flex items-center gap-4">
                  <Link
                    to="/cabinet"
                    className="px-4 py-2 bg-gold-500 text-navy-900 rounded-lg font-sans text-sm font-medium hover:bg-gold-400 transition-colors"
                  >
                    Go to Dashboard
                  </Link>
                  <div className="flex items-center gap-2 text-navy-700 dark:text-cream-300">
                    <User className="w-4 h-4" />
                    <span className="font-sans text-sm font-medium">{user.username || user.email}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-navy-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Log out"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                // Logged out state
                <>
                  <Link
                    to="/login"
                    className="font-sans text-sm font-medium text-navy-700 dark:text-cream-300 hover:text-navy-900 dark:hover:text-cream-100 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link to="/register" className="btn-primary !py-3 !px-6 !text-sm">
                    Start Free Trial
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-navy-900 dark:text-cream-100 hover:bg-cream-200 dark:hover:bg-navy-700 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-900/20 dark:bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-20 right-0 w-full max-w-sm bg-cream-50 dark:bg-navy-800 shadow-card-hover border-l border-cream-200 dark:border-navy-700"
            >
              <div className="p-6 space-y-6">
                {/* Theme Toggle in Mobile Menu */}
                <div className="flex items-center justify-between pb-4 border-b border-cream-200 dark:border-navy-700">
                  <span className="font-sans text-sm text-navy-600 dark:text-cream-300">Theme</span>
                  <ThemeToggle />
                </div>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-sans text-lg font-medium text-navy-800 dark:text-cream-100 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-6 border-t border-cream-200 dark:border-navy-700 space-y-4">
                  {user ? (
                    <>
                      <Link
                        to="/cabinet"
                        className="w-full btn-primary !py-3 flex items-center justify-center gap-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Go to Dashboard
                      </Link>
                      <div className="flex items-center justify-center gap-2 text-navy-700 dark:text-cream-300 py-2">
                        <User className="w-4 h-4" />
                        <span className="font-sans text-sm font-medium">{user.username || user.email}</span>
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full btn-secondary !py-3 flex items-center justify-center gap-2 text-red-600"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="w-full btn-secondary !py-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="w-full btn-primary !py-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Start Free Trial
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
