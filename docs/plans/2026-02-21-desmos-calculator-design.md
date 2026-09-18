# SAT Desmos Calculator Integration — Design

**Date:** 2026-02-21
**Status:** Approved

## Context

The Digital SAT includes a built-in Desmos graphing calculator available for all math questions. Students can toggle between graphing and scientific modes. We need to replicate this experience in our practice and test modes so students practice with the same tool they'll use on test day.

## Decisions

- **Pages:** Both Practice and Test modes
- **Integration:** iframe embedding the exact SAT Desmos calculators (College Board version)
- **Default state:** Hidden with a floating toggle button; click to open
- **Interaction:** Floating draggable/resizable panel with a drag handle title bar
- **Modes:** Both graphing and scientific calculator, matching the real SAT
- **Approach:** Custom React component using pointer events (no extra dependencies)

## Architecture

```
FloatingCalculator (manages state, position, drag, resize)
├── Title bar (drag handle, mode toggle, minimize/close buttons)
├── Calculator iframe (Desmos SAT graphing or scientific)
└── Resize handle (bottom-right corner)

CalculatorToggleButton (floating action button, bottom-right corner)
```

## Desmos URLs

- Graphing: `https://www.desmos.com/testing/cb-sat-ap/graphing`
- Scientific: `https://www.desmos.com/testing/cb-sat-ap/scientific`

## Component Behavior

### Toggle
Floating button (calculator icon) in the bottom-right corner. Click opens the calculator panel. Panel has close/minimize button that hides it back to the toggle button.

### Dragging
Title bar as drag handle. Pointer events (pointerdown, pointermove, pointerup) track movement. Panel constrained to viewport.

### Resizing
Resize handle in bottom-right corner. Min: 350x400px, Max: viewport-bounded. Default: 500x600px.

### Calculator Modes
Two tab buttons in title bar — "Graphing" and "Scientific". Switching changes iframe src.

### State Persistence
Position, size, open/collapsed state, and selected mode saved to localStorage.

### Dark Mode
Title bar uses app theme variables. Desmos iframe renders with its own styling.

### Mobile (<768px)
Calculator opens as full-screen overlay instead of draggable panel. Clear close button at top.

## Error Handling

- iframe load failure: friendly message with retry
- Off-screen after window resize: auto-reset to default position

## Integration Points

- `Practice.jsx` — render inside question-solving view
- `TestSession.jsx` — render alongside test question display
- Both pages add `<FloatingCalculator />` with no props needed
