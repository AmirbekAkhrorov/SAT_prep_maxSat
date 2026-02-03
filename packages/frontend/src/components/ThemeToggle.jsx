import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 ${
        isDark
          ? 'bg-navy-700 hover:bg-navy-600 focus:ring-offset-navy-900'
          : 'bg-cream-200 hover:bg-cream-300 focus:ring-offset-cream-100'
      } ${className}`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: 1,
        }}
        transition={{
          duration: 0.15,
          ease: 'easeOut',
        }}
        className="relative w-5 h-5"
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-gold-400" />
        ) : (
          <Sun className="w-5 h-5 text-gold-600" />
        )}
      </motion.div>
    </button>
  );
}
