import { useState, useEffect, useRef } from 'react';

/**
 * Reusable hook for draggable/resizable floating panels.
 * Extracts drag, resize, and persist logic from FloatingCalculator
 * so it can be shared with ReferenceSheet and other floating panels.
 *
 * @param {string} storageKey — localStorage key for persisting position/size
 * @param {object} [defaults] — optional dimension overrides
 * @param {number} [defaults.defaultWidth=500]
 * @param {number} [defaults.defaultHeight=600]
 * @param {number} [defaults.minWidth=350]
 * @param {number} [defaults.minHeight=400]
 */
export default function useFloatingPanel(storageKey, defaults = {}) {
  const {
    defaultWidth = 500,
    defaultHeight = 600,
    minWidth = 350,
    minHeight = 400,
  } = defaults;

  // ---------------------------------------------------------------------------
  // Load persisted state (once)
  // ---------------------------------------------------------------------------
  const saved = useRef(null);
  if (saved.current === null) {
    try {
      const raw =
        typeof window !== 'undefined'
          ? localStorage.getItem(storageKey)
          : null;
      if (raw) saved.current = JSON.parse(raw);
    } catch {
      // ignore
    }
    if (!saved.current) saved.current = {};
  }

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  const [position, setPosition] = useState(
    saved.current.position ?? {
      x:
        typeof window !== 'undefined'
          ? window.innerWidth - defaultWidth - 24
          : 100,
      y:
        typeof window !== 'undefined'
          ? window.innerHeight - defaultHeight - 24
          : 100,
    }
  );

  const [size, setSize] = useState(
    saved.current.size ?? { width: defaultWidth, height: defaultHeight }
  );

  const [isInteracting, setIsInteracting] = useState(false);

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  // ---------------------------------------------------------------------------
  // Refs
  // ---------------------------------------------------------------------------
  const dragOrigin = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const resizeOrigin = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const interactionType = useRef(null); // 'drag' | 'resize'
  const handlersRef = useRef({ onMove: null, onUp: null });

  // ---------------------------------------------------------------------------
  // Effects
  // ---------------------------------------------------------------------------

  // Persist position and size to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ position, size }));
    } catch {
      // ignore
    }
  }, [storageKey, position, size]);

  // Track window resize for mobile detection
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cleanup document-level pointer listeners on unmount
  useEffect(() => {
    return () => {
      if (handlersRef.current.onMove) {
        document.removeEventListener('pointermove', handlersRef.current.onMove);
        document.removeEventListener('pointerup', handlersRef.current.onUp);
      }
    };
  }, []);

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  /** Clamp position so the panel stays within the viewport. */
  function constrain(x, y, w, h) {
    const maxX = window.innerWidth - w;
    const maxY = window.innerHeight - h;
    return {
      x: Math.max(0, Math.min(x, maxX)),
      y: Math.max(0, Math.min(y, maxY)),
    };
  }

  // ---------------------------------------------------------------------------
  // Drag
  // ---------------------------------------------------------------------------

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
      // Use functional setSize to read current size without stale closure
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

  // ---------------------------------------------------------------------------
  // Resize
  // ---------------------------------------------------------------------------

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
      const newW = Math.max(minWidth, resizeOrigin.current.w + dx);
      const newH = Math.max(minHeight, resizeOrigin.current.h + dy);
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

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  return {
    position,
    size,
    isInteracting,
    isMobile,
    interactionType,
    handleDragStart,
    handleResizeStart,
  };
}
