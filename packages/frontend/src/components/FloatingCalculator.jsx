import { useState, useEffect } from 'react';
import { X, Minus, GripHorizontal } from 'lucide-react';
import useFloatingPanel from '../hooks/useFloatingPanel';

const DESMOS_URLS = {
  graphing: 'https://www.desmos.com/testing/cb-sat-ap/graphing',
  scientific: 'https://www.desmos.com/testing/cb-sat-ap/scientific',
};

const MODE_STORAGE_KEY = 'sat-prep-calculator-mode';

export default function FloatingCalculator({ isOpen, onClose }) {
  const {
    position,
    size,
    isInteracting,
    isMobile,
    interactionType,
    handleDragStart,
    handleResizeStart,
  } = useFloatingPanel('sat-prep-calculator-panel');

  // Persist mode to its own localStorage key
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem(MODE_STORAGE_KEY) || 'graphing';
    } catch {
      return 'graphing';
    }
  });
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(MODE_STORAGE_KEY, mode);
    } catch {
      // ignore
    }
  }, [mode]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIframeError(false);
  };

  if (!isOpen) {
    return null;
  }

  // Mobile: full-screen overlay
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-navy-900">
        {/* Title bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-navy-900 text-cream-50">
          <div className="flex items-center gap-2">
            <GripHorizontal className="w-4 h-4 text-gold-500" />
            <span className="font-sans text-sm font-semibold text-gold-500">
              Calculator
            </span>
          </div>
          <div className="flex items-center gap-1">
            {/* Mode tabs */}
            <div role="tablist" className="flex items-center gap-1">
              <button
                role="tab"
                aria-selected={mode === 'graphing'}
                onClick={() => handleModeChange('graphing')}
                className={`px-3 py-1 rounded text-xs font-sans font-medium transition-colors ${
                  mode === 'graphing'
                    ? 'bg-gold-500 text-navy-900'
                    : 'text-cream-200 hover:text-cream-50'
                }`}
              >
                Graphing
              </button>
              <button
                role="tab"
                aria-selected={mode === 'scientific'}
                onClick={() => handleModeChange('scientific')}
                className={`px-3 py-1 rounded text-xs font-sans font-medium transition-colors ${
                  mode === 'scientific'
                    ? 'bg-gold-500 text-navy-900'
                    : 'text-cream-200 hover:text-cream-50'
                }`}
              >
                Scientific
              </button>
            </div>
            <button
              onClick={onClose}
              className="ml-2 p-1 rounded hover:bg-red-600 transition-colors text-cream-200 hover:text-cream-50"
              aria-label="Close calculator"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Iframe */}
        <div className="flex-1 relative">
          {iframeError ? (
            <div className="flex items-center justify-center h-full text-cream-200 font-sans text-sm px-4 text-center">
              <p>
                Unable to load the calculator. Please check your internet
                connection and try again.
              </p>
            </div>
          ) : (
            <iframe
              src={DESMOS_URLS[mode]}
              title={`Desmos ${mode} calculator`}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-popups"
              onError={() => setIframeError(true)}
            />
          )}
        </div>
      </div>
    );
  }

  // Desktop: draggable/resizable panel
  return (
    <div
      className="fixed z-50"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
      }}
    >
      <div className="flex flex-col w-full h-full rounded-lg overflow-hidden shadow-2xl border border-navy-700">
        {/* Title bar (drag handle) */}
        <div
          className="flex items-center justify-between px-3 py-2 bg-navy-900 dark:bg-navy-800 text-cream-50 cursor-grab active:cursor-grabbing select-none"
          onPointerDown={handleDragStart}
        >
          <div className="flex items-center gap-2">
            <GripHorizontal className="w-4 h-4 text-gold-500" />
            <span className="font-sans text-sm font-semibold text-gold-500">
              Calculator
            </span>
          </div>
          <div className="flex items-center gap-1">
            {/* Mode tabs */}
            <div role="tablist" className="flex items-center gap-1">
              <button
                role="tab"
                aria-selected={mode === 'graphing'}
                onClick={() => handleModeChange('graphing')}
                onPointerDown={(e) => e.stopPropagation()}
                className={`px-3 py-1 rounded text-xs font-sans font-medium transition-colors ${
                  mode === 'graphing'
                    ? 'bg-gold-500 text-navy-900'
                    : 'text-cream-200 hover:text-cream-50'
                }`}
              >
                Graphing
              </button>
              <button
                role="tab"
                aria-selected={mode === 'scientific'}
                onClick={() => handleModeChange('scientific')}
                onPointerDown={(e) => e.stopPropagation()}
                className={`px-3 py-1 rounded text-xs font-sans font-medium transition-colors ${
                  mode === 'scientific'
                    ? 'bg-gold-500 text-navy-900'
                    : 'text-cream-200 hover:text-cream-50'
                }`}
              >
                Scientific
              </button>
            </div>
            {/* Minimize */}
            <button
              onClick={onClose}
              onPointerDown={(e) => e.stopPropagation()}
              className="ml-1 p-1 rounded hover:bg-navy-700 transition-colors text-cream-200 hover:text-cream-50"
              aria-label="Minimize calculator"
            >
              <Minus className="w-4 h-4" />
            </button>
            {/* Close */}
            <button
              onClick={onClose}
              onPointerDown={(e) => e.stopPropagation()}
              className="p-1 rounded hover:bg-red-600 transition-colors text-cream-200 hover:text-cream-50"
              aria-label="Close calculator"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Iframe container */}
        <div className="flex-1 relative bg-white">
          {iframeError ? (
            <div className="flex items-center justify-center h-full bg-cream-50 dark:bg-navy-950 text-navy-700 dark:text-cream-200 font-sans text-sm px-6 text-center">
              <p>
                Unable to load the calculator. Please check your internet
                connection and try again.
              </p>
            </div>
          ) : (
            <iframe
              src={DESMOS_URLS[mode]}
              title={`Desmos ${mode} calculator`}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-popups"
              onError={() => setIframeError(true)}
            />
          )}

          {/* Invisible overlay to prevent iframe from stealing pointer events during drag/resize */}
          {isInteracting && (
            <div className="absolute inset-0" style={{ cursor: interactionType.current === 'drag' ? 'grabbing' : 'nwse-resize' }} />
          )}
        </div>

        {/* Resize handle (bottom-right corner) */}
        <div
          className="absolute bottom-0 right-0 w-5 h-5 cursor-nwse-resize"
          onPointerDown={handleResizeStart}
          aria-label="Resize calculator"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="text-navy-400 dark:text-navy-600"
          >
            <line
              x1="14"
              y1="20"
              x2="20"
              y2="14"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="10"
              y1="20"
              x2="20"
              y2="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="6"
              y1="20"
              x2="20"
              y2="6"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
