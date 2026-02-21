import { useState, useEffect, useRef } from 'react';
import { Calculator, X, Minus, GripHorizontal } from 'lucide-react';

const STORAGE_KEY = 'sat-prep-calculator-state';

const DESMOS_URLS = {
  graphing: 'https://www.desmos.com/testing/cb-sat-ap/graphing',
  scientific: 'https://www.desmos.com/testing/cb-sat-ap/scientific',
};

const MIN_WIDTH = 350;
const MIN_HEIGHT = 400;
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 600;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return null;
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export default function FloatingCalculator() {
  const saved = useRef(loadState());

  const [isOpen, setIsOpen] = useState(saved.current?.isOpen ?? false);
  const [mode, setMode] = useState(saved.current?.mode ?? 'graphing');
  const [position, setPosition] = useState(
    saved.current?.position ?? {
      x: typeof window !== 'undefined' ? window.innerWidth - DEFAULT_WIDTH - 24 : 100,
      y: typeof window !== 'undefined' ? window.innerHeight - DEFAULT_HEIGHT - 24 : 100,
    }
  );
  const [size, setSize] = useState(
    saved.current?.size ?? { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT }
  );
  const [isInteracting, setIsInteracting] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  // Track drag/resize origin with refs (don't need re-renders for these)
  const dragOrigin = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const resizeOrigin = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const interactionType = useRef(null); // 'drag' | 'resize'
  const handlersRef = useRef({ onMove: null, onUp: null });

  // Persist state
  useEffect(() => {
    saveState({ isOpen, mode, position, size });
  }, [isOpen, mode, position, size]);

  // Listen for resize to detect mobile
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cleanup document listeners on unmount
  useEffect(() => {
    return () => {
      if (handlersRef.current.onMove) {
        document.removeEventListener('pointermove', handlersRef.current.onMove);
        document.removeEventListener('pointerup', handlersRef.current.onUp);
      }
    };
  }, []);

  // Constrain position to viewport
  function constrain(x, y, w, h) {
    const maxX = window.innerWidth - w;
    const maxY = window.innerHeight - h;
    return {
      x: Math.max(0, Math.min(x, maxX)),
      y: Math.max(0, Math.min(y, maxY)),
    };
  }

  // Drag start
  function handleDragStart(e) {
    e.preventDefault();
    interactionType.current = 'drag';
    dragOrigin.current = {
      x: e.clientX,
      y: e.clientY,
      posX: position.x,
      posY: position.y,
    };
    setIsInteracting(true);

    const onMove = (ev) => {
      const dx = ev.clientX - dragOrigin.current.x;
      const dy = ev.clientY - dragOrigin.current.y;
      setSize((prevSize) => {
        const newPos = constrain(
          dragOrigin.current.posX + dx,
          dragOrigin.current.posY + dy,
          prevSize.width,
          prevSize.height
        );
        setPosition(newPos);
        return prevSize;
      });
    };
    const onUp = () => {
      interactionType.current = null;
      setIsInteracting(false);
      document.removeEventListener('pointermove', handlersRef.current.onMove);
      document.removeEventListener('pointerup', handlersRef.current.onUp);
      handlersRef.current = { onMove: null, onUp: null };
    };
    handlersRef.current = { onMove, onUp };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
  }

  // Resize start
  function handleResizeStart(e) {
    e.preventDefault();
    e.stopPropagation();
    interactionType.current = 'resize';
    resizeOrigin.current = {
      x: e.clientX,
      y: e.clientY,
      w: size.width,
      h: size.height,
    };
    setIsInteracting(true);

    const onMove = (ev) => {
      const dx = ev.clientX - resizeOrigin.current.x;
      const dy = ev.clientY - resizeOrigin.current.y;
      const newW = Math.max(MIN_WIDTH, resizeOrigin.current.w + dx);
      const newH = Math.max(MIN_HEIGHT, resizeOrigin.current.h + dy);
      setSize({ width: newW, height: newH });
      setPosition((prev) => constrain(prev.x, prev.y, newW, newH));
    };
    const onUp = () => {
      interactionType.current = null;
      setIsInteracting(false);
      document.removeEventListener('pointermove', handlersRef.current.onMove);
      document.removeEventListener('pointerup', handlersRef.current.onUp);
      handlersRef.current = { onMove: null, onUp: null };
    };
    handlersRef.current = { onMove, onUp };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
  }

  const handleOpen = () => {
    setIsOpen(true);
    setIframeError(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Reset iframe error when mode changes
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIframeError(false);
  };

  // Toggle button (when calculator is closed)
  if (!isOpen) {
    return (
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 bg-navy-900 text-cream-50 dark:bg-gold-500 dark:text-navy-900"
        aria-label="Open calculator"
        title="Open calculator"
      >
        <Calculator className="w-6 h-6" />
      </button>
    );
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
              onClick={handleClose}
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
              onClick={handleClose}
              onPointerDown={(e) => e.stopPropagation()}
              className="ml-1 p-1 rounded hover:bg-navy-700 transition-colors text-cream-200 hover:text-cream-50"
              aria-label="Minimize calculator"
            >
              <Minus className="w-4 h-4" />
            </button>
            {/* Close */}
            <button
              onClick={handleClose}
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
