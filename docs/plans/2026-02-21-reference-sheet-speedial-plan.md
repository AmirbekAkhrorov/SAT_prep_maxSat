# Reference Sheet & Tools Speed Dial Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the standalone calculator toggle with a speed-dial "tools bag" that fans out Calculator and Reference Sheet options, and add a new draggable Reference Sheet panel showing the official SAT math formulas with SVG diagrams.

**Architecture:** Three new components: `ToolsSpeedDial` (the entry-point button with fan-out animation), `ReferenceSheet` (draggable formula panel reusing the same drag/resize pattern as FloatingCalculator), and a shared `useFloatingPanel` hook to DRY up the drag/resize/persist logic. The existing `FloatingCalculator` is modified to accept `isOpen`/`onClose` props instead of managing its own toggle button.

**Tech Stack:** React 19, Framer Motion (already installed), Tailwind CSS 4, Lucide icons, localStorage

---

### Task 1: Extract useFloatingPanel hook

**Files:**
- Create: `packages/frontend/src/hooks/useFloatingPanel.js`

**Context:** Both FloatingCalculator and ReferenceSheet need identical drag/resize/persist/constrain logic. Extract it once to avoid duplicating ~100 lines.

**Step 1: Create the hook**

```js
import { useState, useEffect, useRef } from 'react';

export default function useFloatingPanel(storageKey, defaults = {}) {
  const {
    defaultWidth = 500,
    defaultHeight = 600,
    minWidth = 350,
    minHeight = 400,
  } = defaults;

  function loadState() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw);
    } catch { /* ignore */ }
    return null;
  }

  function saveState(state) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch { /* ignore */ }
  }

  const saved = useRef(loadState());

  const [position, setPosition] = useState(
    saved.current?.position ?? {
      x: typeof window !== 'undefined' ? window.innerWidth - defaultWidth - 24 : 100,
      y: typeof window !== 'undefined' ? 100 : 100,
    }
  );
  const [size, setSize] = useState(
    saved.current?.size ?? { width: defaultWidth, height: defaultHeight }
  );
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  const dragOrigin = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const resizeOrigin = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const interactionType = useRef(null);
  const handlersRef = useRef({ onMove: null, onUp: null });

  // Persist
  useEffect(() => {
    saveState({ position, size });
  }, [position, size]);

  // Mobile detection
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Unmount cleanup
  useEffect(() => {
    return () => {
      if (handlersRef.current.onMove) {
        document.removeEventListener('pointermove', handlersRef.current.onMove);
        document.removeEventListener('pointerup', handlersRef.current.onUp);
      }
    };
  }, []);

  function constrain(x, y, w, h) {
    return {
      x: Math.max(0, Math.min(x, window.innerWidth - w)),
      y: Math.max(0, Math.min(y, window.innerHeight - h)),
    };
  }

  function handleDragStart(e) {
    e.preventDefault();
    interactionType.current = 'drag';
    dragOrigin.current = { x: e.clientX, y: e.clientY, posX: position.x, posY: position.y };
    setIsInteracting(true);

    const onMove = (ev) => {
      const dx = ev.clientX - dragOrigin.current.x;
      const dy = ev.clientY - dragOrigin.current.y;
      setSize((prevSize) => {
        setPosition(constrain(dragOrigin.current.posX + dx, dragOrigin.current.posY + dy, prevSize.width, prevSize.height));
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

  function handleResizeStart(e) {
    e.preventDefault();
    e.stopPropagation();
    interactionType.current = 'resize';
    resizeOrigin.current = { x: e.clientX, y: e.clientY, w: size.width, h: size.height };
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
```

**Step 2: Verify it builds**

Run: `cd C:/Users/akhro/sat_prep/packages/frontend && npx vite build 2>&1 | tail -5`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add packages/frontend/src/hooks/useFloatingPanel.js
git commit -m "feat: extract useFloatingPanel hook for shared drag/resize/persist logic"
```

---

### Task 2: Refactor FloatingCalculator to use hook and accept props

**Files:**
- Modify: `packages/frontend/src/components/FloatingCalculator.jsx`

**Context:** The FloatingCalculator currently manages its own open/close toggle button. We need to:
1. Replace all the drag/resize/persist logic with the `useFloatingPanel` hook
2. Accept `isOpen` and `onClose` props from parent (ToolsSpeedDial will control visibility)
3. Remove the standalone toggle button (the speed dial replaces it)
4. Keep Desmos mode (graphing/scientific) as internal state, persisted separately

**Step 1: Rewrite FloatingCalculator**

The component should:
- Import and use `useFloatingPanel('sat-prep-calculator-state')`
- Accept props: `isOpen`, `onClose`
- Keep internal state: `mode` (graphing/scientific), `iframeError`
- Persist `mode` separately in localStorage key `sat-prep-calculator-mode`
- Remove the `!isOpen` toggle button return — if `!isOpen`, return `null`
- Keep all the desktop panel and mobile overlay rendering as-is

```jsx
import { useState, useEffect } from 'react';
import { Calculator, X, Minus, GripHorizontal } from 'lucide-react';
import useFloatingPanel from '../hooks/useFloatingPanel';

const DESMOS_URLS = {
  graphing: 'https://www.desmos.com/testing/cb-sat-ap/graphing',
  scientific: 'https://www.desmos.com/testing/cb-sat-ap/scientific',
};

export default function FloatingCalculator({ isOpen, onClose }) {
  const {
    position, size, isInteracting, isMobile,
    interactionType, handleDragStart, handleResizeStart,
  } = useFloatingPanel('sat-prep-calculator-panel');

  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem('sat-prep-calculator-mode') || 'graphing'; }
    catch { return 'graphing'; }
  });
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    try { localStorage.setItem('sat-prep-calculator-mode', mode); }
    catch { /* ignore */ }
  }, [mode]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIframeError(false);
  };

  if (!isOpen) return null;

  // ... rest of rendering (mobile overlay + desktop panel) stays the same
  // but uses onClose instead of handleClose
}
```

The desktop and mobile rendering JSX stays identical to what's in the current file, just replace `handleClose` with `onClose`.

**Step 2: Verify it builds**

Run: `cd C:/Users/akhro/sat_prep/packages/frontend && npx vite build 2>&1 | tail -5`
Expected: Build succeeds (Practice.jsx and TestSession.jsx will show warnings about missing props — that's OK, we'll fix in Task 5)

**Step 3: Commit**

```bash
git add packages/frontend/src/components/FloatingCalculator.jsx
git commit -m "refactor: FloatingCalculator uses useFloatingPanel hook and accepts isOpen/onClose props"
```

---

### Task 3: Create ReferenceSheet component

**Files:**
- Create: `packages/frontend/src/components/ReferenceSheet.jsx`

**Context:** A floating draggable panel showing the official SAT math reference sheet formulas. Uses the same `useFloatingPanel` hook. Content organized in collapsible sections with SVG diagrams for special right triangles.

**Step 1: Create the component**

The component should:
- Accept props: `isOpen`, `onClose`
- Use `useFloatingPanel('sat-prep-reference-panel', { defaultWidth: 420, defaultHeight: 550, minWidth: 320, minHeight: 400 })`
- Have collapsible sections using internal state `expandedSections` (Set)
- Render all official SAT formulas:
  1. **Circles**: A = πr², C = 2πr
  2. **Area Formulas**: Rectangle A = lw, Triangle A = ½bh
  3. **Pythagorean Theorem**: a² + b² = c²
  4. **Special Right Triangles**: 30-60-90 and 45-45-90 with inline SVG diagrams
  5. **Volume Formulas**: Box V = lwh, Cylinder V = πr²h, Sphere V = ⁴⁄₃πr³, Cone V = ⅓πr²h, Pyramid V = ⅓lwh
  6. **Key Facts**: Circle = 360° = 2π radians
- Title bar: navy background, BookOpen icon, "Reference Sheet" label, close button
- Title bar is the drag handle (same pattern as calculator)
- Content area: scrollable with `overflow-y-auto`
- Each section has a chevron toggle and header
- Formulas styled with `font-mono` for clarity
- SVG diagrams for the two special triangles (30-60-90 and 45-45-90) showing side ratios
- Use same resize handle pattern as FloatingCalculator
- Mobile: full-screen overlay with scrollable content
- Dark mode: same theme as calculator panel

Icons to import from lucide-react: `X, GripHorizontal, ChevronDown, ChevronRight, BookOpen`

**Step 2: Verify it builds**

Run: `cd C:/Users/akhro/sat_prep/packages/frontend && npx vite build 2>&1 | tail -5`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add packages/frontend/src/components/ReferenceSheet.jsx
git commit -m "feat: add ReferenceSheet component with SAT math formulas and SVG diagrams"
```

---

### Task 4: Create ToolsSpeedDial component

**Files:**
- Create: `packages/frontend/src/components/ToolsSpeedDial.jsx`

**Context:** The speed dial "bag" button that replaces the standalone calculator toggle. It's a single floating action button that, when clicked, fans out two option buttons (Calculator, Reference Sheet) with Framer Motion spring animation.

**Step 1: Create the component**

The component should:
- Import: `motion, AnimatePresence` from `framer-motion`
- Import: `Calculator, BookOpen, Wrench, X` from `lucide-react`
- Import: `FloatingCalculator` and `ReferenceSheet`
- Manage state: `isMenuOpen`, `isCalculatorOpen`, `isReferenceOpen`
- Persist `isCalculatorOpen` and `isReferenceOpen` to localStorage key `sat-prep-tools-state`
- Render structure:
  1. The main "bag" button: fixed bottom-6 right-6 z-50, Wrench icon (or rotates to X when open)
  2. When menu open: two `motion.button` elements fan out upward from the main button
     - Button 1 (bottom, closer): Calculator icon — toggles calculator panel
     - Button 2 (top, farther): BookOpen icon — toggles reference sheet
  3. `<FloatingCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />`
  4. `<ReferenceSheet isOpen={isReferenceOpen} onClose={() => setIsReferenceOpen(false)} />`

Animation details:
- Main button: `motion.button` with `animate={{ rotate: isMenuOpen ? 45 : 0 }}` transition spring
- Fan-out buttons: `motion.button` with `initial={{ opacity: 0, y: 0, scale: 0.3 }}` and `animate={{ opacity: 1, y: -offset, scale: 1 }}` where offset is -70 for button 1 and -140 for button 2
- Use `AnimatePresence` to animate in/out
- Each fan-out button has a small text label next to it (left side)
- Active state: if calculator/reference is open, that button gets a gold ring/border to indicate it

The main button should use the same styling as the current calculator toggle button: `bg-navy-900 dark:bg-gold-500` etc.

Fan-out buttons: slightly smaller (w-12 h-12), with labels.

**Step 2: Verify it builds**

Run: `cd C:/Users/akhro/sat_prep/packages/frontend && npx vite build 2>&1 | tail -5`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add packages/frontend/src/components/ToolsSpeedDial.jsx
git commit -m "feat: add ToolsSpeedDial with animated fan-out for Calculator and Reference Sheet"
```

---

### Task 5: Replace FloatingCalculator with ToolsSpeedDial in pages

**Files:**
- Modify: `packages/frontend/src/pages/Practice.jsx`
- Modify: `packages/frontend/src/pages/TestSession.jsx`

**Context:** Both pages currently import and render `<FloatingCalculator />`. Replace with `<ToolsSpeedDial />`.

**Step 1: Update Practice.jsx**

Change the import (line 18):
```jsx
// OLD:
import FloatingCalculator from '../components/FloatingCalculator';
// NEW:
import ToolsSpeedDial from '../components/ToolsSpeedDial';
```

Change the usage (line 462):
```jsx
// OLD:
        <FloatingCalculator />
// NEW:
        <ToolsSpeedDial />
```

**Step 2: Update TestSession.jsx**

Change the import (line 15):
```jsx
// OLD:
import FloatingCalculator from '../components/FloatingCalculator';
// NEW:
import ToolsSpeedDial from '../components/ToolsSpeedDial';
```

Change the usage (line 457):
```jsx
// OLD:
      <FloatingCalculator />
// NEW:
      <ToolsSpeedDial />
```

**Step 3: Verify it builds**

Run: `cd C:/Users/akhro/sat_prep/packages/frontend && npx vite build 2>&1 | tail -5`
Expected: Build succeeds with no warnings about missing props

**Step 4: Commit**

```bash
git add packages/frontend/src/pages/Practice.jsx packages/frontend/src/pages/TestSession.jsx
git commit -m "feat: replace FloatingCalculator with ToolsSpeedDial in practice and test modes"
```

---

### Task 6: Browser testing & polish

**Step 1: Manual testing checklist**

Open http://localhost:5173/ and test:
- [ ] Practice mode: speed dial button visible in bottom-right
- [ ] Click speed dial → two buttons fan out with smooth animation
- [ ] Main button rotates (Wrench → X)
- [ ] Click Calculator button → calculator panel opens
- [ ] Click Reference Sheet button → reference sheet panel opens
- [ ] Both panels can be open simultaneously
- [ ] Both panels are independently draggable and resizable
- [ ] Reference Sheet sections are collapsible
- [ ] Special triangle SVG diagrams render correctly
- [ ] Speed dial active indicators work (gold ring on open tools)
- [ ] Close a panel → its speed dial button loses active state
- [ ] Close speed dial menu → panels stay open
- [ ] Dark mode: all components theme correctly
- [ ] Mobile: both panels open as full-screen overlays
- [ ] Page navigation: panels state persists via localStorage
- [ ] Test mode: same behavior

**Step 2: Fix any issues found**

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: polish tools speed dial and reference sheet integration"
```
