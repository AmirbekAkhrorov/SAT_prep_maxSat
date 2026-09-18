# Reference Sheet & Tools Speed Dial — Design

**Date:** 2026-02-21
**Status:** Approved

## Context

The Digital SAT provides a built-in reference sheet with key geometry formulas. We need to replicate this and combine it with the existing calculator into a unified "tools" access point using a speed dial UI pattern.

## Decisions

- **Entry point:** Floating speed-dial button (replaces current standalone calculator toggle)
- **Speed dial animation:** Fan-out with Framer Motion spring animation
- **Reference sheet:** Floating draggable/resizable panel (same UX as calculator)
- **Multi-open:** Both calculator and reference sheet can be open simultaneously
- **Content:** Exact SAT reference sheet formulas with SVG diagrams for special triangles
- **Mobile:** Full-screen overlays (same as current calculator)

## Architecture

```
ToolsSpeedDial (the "bag" button + fan-out)
├── Controls FloatingCalculator open/close
├── Controls ReferenceSheet open/close

FloatingCalculator (modified: toggle button removed, controlled via props)
ReferenceSheet (new draggable panel)
├── Collapsible sections with formulas
├── SVG diagrams for special triangles
```

## Reference Sheet Content (exact SAT formulas)

1. Circles: A = πr², C = 2πr, 360° in circle, 2π radians
2. Area: Rectangle A = lw, Triangle A = ½bh
3. Pythagorean Theorem: a² + b² = c²
4. Special Right Triangles: 30-60-90 and 45-45-90 with diagrams
5. Volumes: Box (lwh), Cylinder (πr²h), Sphere (4/3πr³), Cone (⅓πr²h), Pyramid (⅓lwh)

## Speed Dial Behavior

- Resting: single round button, bottom-right, toolbox icon
- Click: rotates 45°, two buttons fan out upward (Calculator, Reference Sheet)
- Click item: opens that panel, speed dial stays available
- Click X: closes speed dial menu (panels stay open)
- Framer Motion spring animation with stagger

## State

- ToolsSpeedDial manages: isMenuOpen, isCalculatorOpen, isReferenceOpen
- Each panel has its own localStorage key for position/size
- Both panels independent and simultaneously draggable
