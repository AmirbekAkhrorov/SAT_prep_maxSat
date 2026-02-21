import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, BookOpen, Wrench, X } from 'lucide-react';
import FloatingCalculator from './FloatingCalculator';
import ReferenceSheet from './ReferenceSheet';

const STORAGE_KEY = 'sat-prep-tools-state';

function loadToolsState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        isCalculatorOpen: Boolean(parsed.isCalculatorOpen),
        isReferenceOpen: Boolean(parsed.isReferenceOpen),
      };
    }
  } catch {
    // ignore
  }
  return { isCalculatorOpen: false, isReferenceOpen: false };
}

function saveToolsState(isCalculatorOpen, isReferenceOpen) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ isCalculatorOpen, isReferenceOpen }));
  } catch {
    // ignore
  }
}

export default function ToolsSpeedDial() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [initialState] = useState(loadToolsState);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(initialState.isCalculatorOpen);
  const [isReferenceOpen, setIsReferenceOpen] = useState(initialState.isReferenceOpen);
  const containerRef = useRef(null);

  // Persist tool panel states
  useEffect(() => {
    saveToolsState(isCalculatorOpen, isReferenceOpen);
  }, [isCalculatorOpen, isReferenceOpen]);

  // Close menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMenuOpen]);

  const toggleCalculator = useCallback(() => {
    setIsCalculatorOpen((prev) => !prev);
  }, []);

  const toggleReference = useCallback(() => {
    setIsReferenceOpen((prev) => !prev);
  }, []);

  const fanOutTransition = (index) => ({
    type: 'spring',
    stiffness: 300,
    damping: 20,
    delay: index * 0.05,
  });

  const fanOutInitial = { opacity: 0, scale: 0.3, y: 20 };
  const fanOutAnimate = { opacity: 1, scale: 1, y: 0 };
  const fanOutExit = { opacity: 0, scale: 0.3, y: 20 };

  return (
    <>
      {/* Speed dial buttons */}
      <div
        ref={containerRef}
        className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-3"
      >
        {/* Fan-out buttons (shown when menu open) */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Calculator button — fans out first (closer) */}
              <motion.div
                className="flex items-center gap-3"
                initial={fanOutInitial}
                animate={fanOutAnimate}
                exit={fanOutExit}
                transition={fanOutTransition(0)}
              >
                <span className="bg-navy-900 dark:bg-navy-800 text-cream-50 text-xs font-sans font-medium px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap">
                  Calculator
                </span>
                <motion.button
                  onClick={toggleCalculator}
                  className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-colors bg-navy-800 text-cream-50 dark:bg-navy-700 hover:bg-navy-700${isCalculatorOpen ? ' ring-2 ring-gold-500' : ''}`}
                >
                  <Calculator className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Reference Sheet button — fans out second (farther) */}
              <motion.div
                className="flex items-center gap-3"
                initial={fanOutInitial}
                animate={fanOutAnimate}
                exit={fanOutExit}
                transition={fanOutTransition(1)}
              >
                <span className="bg-navy-900 dark:bg-navy-800 text-cream-50 text-xs font-sans font-medium px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap">
                  Reference Sheet
                </span>
                <motion.button
                  onClick={toggleReference}
                  className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-colors bg-navy-800 text-cream-50 dark:bg-navy-700 hover:bg-navy-700${isReferenceOpen ? ' ring-2 ring-gold-500' : ''}`}
                >
                  <BookOpen className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main "bag" button */}
        <motion.button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          animate={{ rotate: isMenuOpen ? 45 : 0 }}
          transition={{ type: 'spring' }}
          className="w-14 h-14 rounded-full shadow-lg bg-navy-900 text-cream-50 dark:bg-gold-500 dark:text-navy-900 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Wrench className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* The actual panels */}
      <FloatingCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
      <ReferenceSheet isOpen={isReferenceOpen} onClose={() => setIsReferenceOpen(false)} />
    </>
  );
}
