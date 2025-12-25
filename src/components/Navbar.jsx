import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Try Demo', href: '#quiz' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-card'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-navy-900 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-gold-400" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold-500 rounded-full border-2 border-cream-100" />
              </div>
              <span className="font-display text-xl font-semibold text-navy-900">
                SAT<span className="text-gold-600">Prep</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative font-sans text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="font-sans text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors">
                Sign In
              </button>
              <button className="btn-primary !py-3 !px-6 !text-sm">
                Start Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-navy-900 hover:bg-cream-200 rounded-lg transition-colors"
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
              className="absolute inset-0 bg-navy-900/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-20 right-0 w-full max-w-sm bg-cream-50 shadow-card-hover border-l border-cream-200"
            >
              <div className="p-6 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-sans text-lg font-medium text-navy-800 hover:text-gold-600 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-6 border-t border-cream-200 space-y-4">
                  <button className="w-full btn-secondary !py-3">
                    Sign In
                  </button>
                  <button className="w-full btn-primary !py-3">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
