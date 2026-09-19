import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-cream-50 border-t border-cream-200">
      <div className="container-wide mx-auto px-6 md:px-8 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & description */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-11 h-11 bg-navy-900 rounded-xl flex items-center justify-center">
                  <span className="font-display font-black text-base leading-none"><span className="text-cream-100">m</span><span className="text-gold-400">S</span></span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold-500 rounded-full border-2 border-cream-50" />
              </div>
              <span className="font-display text-xl font-semibold text-navy-900">
                max<span className="text-gold-500 font-black">SAT</span>
              </span>
            </Link>
            <p className="font-body text-navy-600 leading-relaxed max-w-xs">
              720 real SAT Math questions across 4 domains, in 3 languages —
              timed tests, instant explanations, and a leaderboard to keep you
              pushing.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="font-sans font-semibold text-navy-900 mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="font-sans text-sm text-navy-600 hover:text-gold-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#quiz" className="font-sans text-sm text-navy-600 hover:text-gold-600 transition-colors">
                  Try Demo
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="font-sans text-sm text-navy-600 hover:text-gold-600 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/cabinet/leaderboard" className="font-sans text-sm text-navy-600 hover:text-gold-600 transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/register" className="font-sans text-sm text-navy-600 hover:text-gold-600 transition-colors">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-sans font-semibold text-navy-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="font-sans text-sm text-navy-600 hover:text-gold-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="font-sans text-sm text-navy-600 hover:text-gold-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-navy-500">
            © {new Date().getFullYear()} maxSAT. All rights reserved.
          </p>
          <span className="font-sans text-sm text-navy-500">
            Made with ❤️ for students everywhere
          </span>
        </div>
      </div>
    </footer>
  );
}
