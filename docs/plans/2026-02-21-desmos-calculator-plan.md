# SAT Desmos Calculator Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a floating, draggable Desmos calculator (graphing + scientific modes) to Practice and Test mode pages, matching the real Digital SAT experience.

**Architecture:** A self-contained `<FloatingCalculator />` React component using pointer events for drag, CSS resize, and iframe embedding of the official College Board Desmos calculators. State (position, size, mode, open/closed) persists in localStorage. On mobile (<768px), it renders as a full-screen overlay instead.

**Tech Stack:** React 19, Tailwind CSS 4, Lucide icons, localStorage, Desmos iframe embeds (no new dependencies)

---

### Task 1: Create the FloatingCalculator component

**Files:**
- Create: `packages/frontend/src/components/FloatingCalculator.jsx`

**Step 1: Create the component file**

Write the full `FloatingCalculator` component with:

```jsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { Calculator, X, Minus, Maximize2, GripHorizontal } from 'lucide-react';

const DESMOS_URLS = {
  graphing: 'https://www.desmos.com/testing/cb-sat-ap/graphing',
  scientific: 'https://www.desmos.com/testing/cb-sat-ap/scientific',
};

const STORAGE_KEY = 'sat-prep-calculator-state';

const DEFAULT_STATE = {
  x: -1,        // -1 means "not yet positioned" — will be computed on first open
  y: 100,
  width: 500,
  height: 600,
  mode: 'graphing',
  isOpen: false,
};

const MIN_WIDTH = 350;
const MIN_HEIGHT = 400;

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...DEFAULT_STATE, ...JSON.parse(saved) } : { ...DEFAULT_STATE };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable — ignore
  }
}

export default function FloatingCalculator() {
  const [state, setState] = useState(loadState);
  const [iframeFailed, setIframeFailed] = useState(false);
  const panelRef = useRef(null);
  const dragRef = useRef({ dragging: false, offsetX: 0, offsetY: 0 });
  const resizeRef = useRef({ resizing: false, startX: 0, startY: 0, startW: 0, startH: 0 });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Persist state changes
  useEffect(() => {
    saveState(state);
  }, [state]);

  // Compute default position on first open if not yet positioned
  useEffect(() => {
    if (state.isOpen && state.x === -1) {
      setState(prev => ({
        ...prev,
        x: Math.max(0, window.innerWidth - prev.width - 24),
        y: 100,
      }));
    }
  }, [state.isOpen, state.x]);

  // Clamp position if window resizes
  useEffect(() => {
    const handleResize = () => {
      setState(prev => ({
        ...prev,
        x: Math.min(prev.x, Math.max(0, window.innerWidth - prev.width)),
        y: Math.min(prev.y, Math.max(0, window.innerHeight - 60)),
      }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Drag handlers ---
  const onDragStart = useCallback((e) => {
    if (isMobile) return;
    e.preventDefault();
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragRef.current = {
      dragging: true,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };

    const onMove = (ev) => {
      if (!dragRef.current.dragging) return;
      const newX = Math.max(0, Math.min(ev.clientX - dragRef.current.offsetX, window.innerWidth - 100));
      const newY = Math.max(0, Math.min(ev.clientY - dragRef.current.offsetY, window.innerHeight - 60));
      setState(prev => ({ ...prev, x: newX, y: newY }));
    };
    const onUp = () => {
      dragRef.current.dragging = false;
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
    };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
  }, [isMobile]);

  // --- Resize handlers ---
  const onResizeStart = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    resizeRef.current = {
      resizing: true,
      startX: e.clientX,
      startY: e.clientY,
      startW: state.width,
      startH: state.height,
    };

    const onMove = (ev) => {
      if (!resizeRef.current.resizing) return;
      const dw = ev.clientX - resizeRef.current.startX;
      const dh = ev.clientY - resizeRef.current.startY;
      const newW = Math.max(MIN_WIDTH, Math.min(resizeRef.current.startW + dw, window.innerWidth - state.x));
      const newH = Math.max(MIN_HEIGHT, Math.min(resizeRef.current.startH + dh, window.innerHeight - state.y));
      setState(prev => ({ ...prev, width: newW, height: newH }));
    };
    const onUp = () => {
      resizeRef.current.resizing = false;
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
    };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
  }, [state.width, state.height, state.x, state.y]);

  const toggleOpen = () => setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  const setMode = (mode) => {
    setIframeFailed(false);
    setState(prev => ({ ...prev, mode }));
  };
  const close = () => setState(prev => ({ ...prev, isOpen: false }));

  // --- Toggle button (when calculator is closed) ---
  if (!state.isOpen) {
    return (
      <button
        onClick={toggleOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-navy-900 dark:bg-gold-500
                   text-white dark:text-navy-900 rounded-full shadow-lg
                   hover:scale-105 active:scale-95 transition-transform
                   flex items-center justify-center"
        title="Open Calculator"
        aria-label="Open Calculator"
      >
        <Calculator className="w-6 h-6" />
      </button>
    );
  }

  // --- Mobile: full-screen overlay ---
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-white dark:bg-navy-900 flex flex-col">
        {/* Mobile title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-navy-900 dark:bg-navy-800 text-white">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-gold-400" />
            <span className="font-sans font-semibold text-sm">Calculator</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Mode toggle */}
            <div className="flex bg-navy-800 dark:bg-navy-700 rounded-lg p-0.5">
              <button
                onClick={() => setMode('graphing')}
                className={`px-3 py-1 rounded-md text-xs font-sans font-medium transition-colors ${
                  state.mode === 'graphing'
                    ? 'bg-gold-500 text-navy-900'
                    : 'text-cream-300 hover:text-white'
                }`}
              >
                Graphing
              </button>
              <button
                onClick={() => setMode('scientific')}
                className={`px-3 py-1 rounded-md text-xs font-sans font-medium transition-colors ${
                  state.mode === 'scientific'
                    ? 'bg-gold-500 text-navy-900'
                    : 'text-cream-300 hover:text-white'
                }`}
              >
                Scientific
              </button>
            </div>
            <button onClick={close} className="p-1 hover:bg-navy-700 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Iframe */}
        <div className="flex-1">
          {iframeFailed ? (
            <div className="flex items-center justify-center h-full text-navy-600 dark:text-cream-300 text-sm p-4 text-center">
              Calculator couldn't load. Check your internet connection.
            </div>
          ) : (
            <iframe
              key={state.mode}
              src={DESMOS_URLS[state.mode]}
              title={`Desmos ${state.mode} calculator`}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin"
              onError={() => setIframeFailed(true)}
            />
          )}
        </div>
      </div>
    );
  }

  // --- Desktop: floating draggable panel ---
  return (
    <div
      ref={panelRef}
      className="fixed z-50 flex flex-col bg-white dark:bg-navy-900 rounded-xl shadow-2xl border border-cream-200 dark:border-navy-700 overflow-hidden"
      style={{
        left: state.x,
        top: state.y,
        width: state.width,
        height: state.height,
      }}
    >
      {/* Title bar — drag handle */}
      <div
        onPointerDown={onDragStart}
        className="flex items-center justify-between px-3 py-2 bg-navy-900 dark:bg-navy-800
                   cursor-grab active:cursor-grabbing select-none shrink-0"
      >
        <div className="flex items-center gap-2">
          <GripHorizontal className="w-4 h-4 text-navy-400" />
          <Calculator className="w-4 h-4 text-gold-400" />
          <span className="font-sans font-semibold text-sm text-white">Calculator</span>
        </div>
        <div className="flex items-center gap-1">
          {/* Mode toggle */}
          <div className="flex bg-navy-800 dark:bg-navy-700 rounded-lg p-0.5 mr-2">
            <button
              onClick={() => setMode('graphing')}
              className={`px-2.5 py-1 rounded-md text-xs font-sans font-medium transition-colors ${
                state.mode === 'graphing'
                  ? 'bg-gold-500 text-navy-900'
                  : 'text-cream-300 hover:text-white'
              }`}
            >
              Graphing
            </button>
            <button
              onClick={() => setMode('scientific')}
              className={`px-2.5 py-1 rounded-md text-xs font-sans font-medium transition-colors ${
                state.mode === 'scientific'
                  ? 'bg-gold-500 text-navy-900'
                  : 'text-cream-300 hover:text-white'
              }`}
            >
              Scientific
            </button>
          </div>
          {/* Minimize */}
          <button
            onClick={close}
            className="p-1 hover:bg-navy-700 rounded-lg transition-colors text-cream-300 hover:text-white"
            title="Minimize"
          >
            <Minus className="w-4 h-4" />
          </button>
          {/* Close */}
          <button
            onClick={close}
            className="p-1 hover:bg-red-600 rounded-lg transition-colors text-cream-300 hover:text-white"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Iframe container */}
      <div className="flex-1 relative">
        {iframeFailed ? (
          <div className="flex items-center justify-center h-full text-navy-600 dark:text-cream-300 text-sm p-4 text-center">
            Calculator couldn't load. Check your internet connection.
          </div>
        ) : (
          <>
            <iframe
              key={state.mode}
              src={DESMOS_URLS[state.mode]}
              title={`Desmos ${state.mode} calculator`}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin"
              onError={() => setIframeFailed(true)}
            />
            {/* Invisible overlay while dragging/resizing to prevent iframe stealing pointer events */}
            {(dragRef.current.dragging || resizeRef.current.resizing) && (
              <div className="absolute inset-0" />
            )}
          </>
        )}
      </div>

      {/* Resize handle */}
      <div
        onPointerDown={onResizeStart}
        className="absolute bottom-0 right-0 w-5 h-5 cursor-se-resize"
        title="Resize"
      >
        <svg viewBox="0 0 20 20" className="w-full h-full text-navy-300 dark:text-navy-600">
          <path d="M14 20L20 14M10 20L20 10M6 20L20 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    </div>
  );
}
```

**Step 2: Verify the component renders without errors**

Run: `cd packages/frontend && npx vite build 2>&1 | head -20`
Expected: Build succeeds (no import errors)

**Step 3: Commit**

```bash
git add packages/frontend/src/components/FloatingCalculator.jsx
git commit -m "feat: add FloatingCalculator component with Desmos SAT integration"
```

---

### Task 2: Integrate FloatingCalculator into Practice.jsx

**Files:**
- Modify: `packages/frontend/src/pages/Practice.jsx`

**Step 1: Add the import**

At the top of `Practice.jsx` (after line 18, the `QuestionCard` import), add:

```jsx
import FloatingCalculator from '../components/FloatingCalculator';
```

**Step 2: Add the component to the question-solving view**

In the `if (currentQuestion)` return block (around line 461, just before `</div>`), add `<FloatingCalculator />`:

Find the closing of the question view:
```jsx
        </main>
      </div>
    );
  }
```

Change to:
```jsx
        </main>
        <FloatingCalculator />
      </div>
    );
  }
```

**Step 3: Verify it renders**

Run: `cd packages/frontend && npx vite build 2>&1 | head -20`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add packages/frontend/src/pages/Practice.jsx
git commit -m "feat: add calculator to practice mode question view"
```

---

### Task 3: Integrate FloatingCalculator into TestSession.jsx

**Files:**
- Modify: `packages/frontend/src/pages/TestSession.jsx`

**Step 1: Add the import**

At the top of `TestSession.jsx` (after line 14, the `ThemeToggle` import), add:

```jsx
import FloatingCalculator from '../components/FloatingCalculator';
```

**Step 2: Add the component to the test session view**

In the main return block of TestSession (around line 456, just before the final `</div>`), add `<FloatingCalculator />`:

Find the closing:
```jsx
      </AnimatePresence>
    </div>
  );
```

Change to:
```jsx
      </AnimatePresence>
      <FloatingCalculator />
    </div>
  );
```

**Step 3: Verify it renders**

Run: `cd packages/frontend && npx vite build 2>&1 | head -20`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add packages/frontend/src/pages/TestSession.jsx
git commit -m "feat: add calculator to test session view"
```

---

### Task 4: Manual browser testing & polish

**Step 1: Start dev server and test in browser**

Run: `cd packages/frontend && npm run dev`

Test checklist:
- [ ] Practice mode: toggle button visible in bottom-right corner
- [ ] Click toggle → calculator panel opens with Desmos graphing calculator
- [ ] Drag title bar → panel moves, stays within viewport
- [ ] Resize handle → panel resizes, respects min dimensions
- [ ] Switch to Scientific tab → calculator changes to scientific mode
- [ ] Click minimize → panel closes, toggle button reappears
- [ ] Re-open → position and mode remembered from last time
- [ ] Test mode: same behavior as practice mode
- [ ] Dark mode: title bar and toggle button theme correctly
- [ ] Resize browser window → calculator clamps to viewport
- [ ] Mobile viewport (<768px) → opens as full-screen overlay

**Step 2: Fix any issues found during testing**

Address any visual or interaction bugs.

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: polish calculator integration across practice and test modes"
```
