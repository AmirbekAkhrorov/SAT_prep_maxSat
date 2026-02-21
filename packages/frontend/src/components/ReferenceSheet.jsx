import { useState } from 'react';
import { X, GripHorizontal, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import useFloatingPanel from '../hooks/useFloatingPanel';

const SECTIONS = [
  // ── Official SAT Reference Sheet ──
  {
    title: 'Circles',
    badge: 'official',
    formulas: [
      'Area: A = πr²',
      'Circumference: C = 2πr  or  C = πd',
      'Arc length: s = rθ  (θ in radians)',
      'Sector area: A = ½r²θ',
      '360° = 2π radians',
    ],
  },
  {
    title: 'Area Formulas',
    badge: 'official',
    formulas: [
      'Rectangle: A = lw',
      'Triangle: A = ½bh',
      'Parallelogram: A = bh',
      'Trapezoid: A = ½(b₁ + b₂)h',
    ],
  },
  {
    title: 'Pythagorean Theorem',
    badge: 'official',
    formulas: [
      'a² + b² = c²',
      'Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25',
    ],
  },
  {
    title: 'Special Right Triangles',
    badge: 'official',
    formulas: [],
    hasDiagrams: true,
  },
  {
    title: 'Volume & Surface Area',
    badge: 'official',
    formulas: [
      'Rectangular prism: V = lwh',
      'Cylinder: V = πr²h',
      'Sphere: V = ⁴⁄₃πr³',
      'Cone: V = ⅓πr²h',
      'Pyramid: V = ⅓lwh',
      '── Surface Area ──',
      'Sphere: SA = 4πr²',
      'Cylinder: SA = 2πr² + 2πrh',
    ],
  },
  // ── Algebra & Functions ──
  {
    title: 'Linear Equations',
    formulas: [
      'Slope-intercept: y = mx + b',
      'Point-slope: y − y₁ = m(x − x₁)',
      'Standard form: Ax + By = C',
      'Slope: m = (y₂ − y₁) / (x₂ − x₁)',
      'Parallel lines → same slope',
      'Perpendicular lines → slopes multiply to −1',
      'Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)',
      'Distance: d = √((x₂−x₁)² + (y₂−y₁)²)',
    ],
  },
  {
    title: 'Quadratics',
    formulas: [
      'Standard: f(x) = ax² + bx + c',
      'Vertex: f(x) = a(x − h)² + k',
      'Factored: f(x) = a(x − r₁)(x − r₂)',
      'Quadratic formula: x = (−b ± √(b²−4ac)) / 2a',
      'Discriminant: b² − 4ac',
      '  > 0 → two real solutions',
      '  = 0 → one real solution',
      '  < 0 → no real solutions',
      'Vertex x-coordinate: x = −b / 2a',
      'Sum of roots: −b/a',
      'Product of roots: c/a',
    ],
  },
  {
    title: 'Exponents & Radicals',
    formulas: [
      'xᵃ · xᵇ = xᵃ⁺ᵇ',
      'xᵃ / xᵇ = xᵃ⁻ᵇ',
      '(xᵃ)ᵇ = xᵃᵇ',
      'x⁰ = 1  (x ≠ 0)',
      'x⁻ⁿ = 1/xⁿ',
      '√(xy) = √x · √y',
      'x^(a/b) = ᵇ√(xᵃ)',
    ],
  },
  {
    title: 'Polynomials & Factoring',
    formulas: [
      'Difference of squares: a² − b² = (a+b)(a−b)',
      'Perfect square: a² + 2ab + b² = (a+b)²',
      'Perfect square: a² − 2ab + b² = (a−b)²',
      'Sum of cubes: a³ + b³ = (a+b)(a²−ab+b²)',
      'Diff of cubes: a³ − b³ = (a−b)(a²+ab+b²)',
    ],
  },
  // ── Statistics & Probability ──
  {
    title: 'Statistics',
    formulas: [
      'Mean: x̄ = Σxᵢ / n',
      'Median: middle value (sorted)',
      'Mode: most frequent value',
      'Range: max − min',
      'Standard deviation: spread from mean',
      '  ~68% within 1 SD',
      '  ~95% within 2 SD',
      '  ~99.7% within 3 SD',
    ],
  },
  {
    title: 'Probability',
    formulas: [
      'P(event) = favorable / total',
      'P(A or B) = P(A) + P(B) − P(A and B)',
      'P(A and B) = P(A) · P(B)  [if independent]',
      'Complement: P(not A) = 1 − P(A)',
    ],
  },
  // ── Percents & Ratios ──
  {
    title: 'Percents & Growth',
    formulas: [
      'Percent change: ((new−old)/old) × 100',
      'Linear growth: y = mx + b',
      'Exponential growth: y = a(1 + r)ᵗ',
      'Exponential decay: y = a(1 − r)ᵗ',
      'Compound interest: A = P(1 + r/n)ⁿᵗ',
      'Simple interest: I = Prt',
    ],
  },
  // ── Trigonometry ──
  {
    title: 'Trigonometry',
    formulas: [
      'sin θ = opposite / hypotenuse',
      'cos θ = adjacent / hypotenuse',
      'tan θ = opposite / adjacent',
      'SOH-CAH-TOA',
      '── Key identities ──',
      'sin²θ + cos²θ = 1',
      'tan θ = sin θ / cos θ',
      '── Unit circle values ──',
      'sin 30° = ½      cos 30° = √3/2',
      'sin 45° = √2/2   cos 45° = √2/2',
      'sin 60° = √3/2   cos 60° = ½',
      '── Radians ──',
      'degrees → radians: × π/180',
      'radians → degrees: × 180/π',
    ],
  },
  // ── Key Facts ──
  {
    title: 'Key Facts & Conversions',
    formulas: [
      'Angles in a triangle = 180°',
      'Angles in a polygon = (n−2) × 180°',
      'Exterior angle = sum of remote interior angles',
      'Vertical angles are equal',
      '── Systems of equations ──',
      '0 solutions: same slope, diff intercept',
      '1 solution: different slopes',
      '∞ solutions: same line',
      '── Absolute value ──',
      '|x| = a  →  x = a  or  x = −a',
    ],
  },
];

function Triangle306090() {
  return (
    <svg width="140" height="120" viewBox="0 0 140 120" className="text-navy-700 dark:text-cream-200">
      {/* Triangle shape */}
      <polygon
        points="15,105 125,105 15,15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Right angle marker */}
      <polyline
        points="15,90 30,90 30,105"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Angle labels */}
      <text x="22" y="80" fontSize="11" fill="currentColor" fontFamily="sans-serif">90°</text>
      <text x="20" y="12" fontSize="11" fill="currentColor" fontFamily="sans-serif">60°</text>
      <text x="100" y="100" fontSize="11" fill="currentColor" fontFamily="sans-serif">30°</text>
      {/* Side ratio labels */}
      <text x="3" y="62" fontSize="12" fill="currentColor" fontFamily="monospace" textAnchor="end" transform="rotate(-90, 8, 62)">x√3</text>
      <text x="65" y="118" fontSize="12" fill="currentColor" fontFamily="monospace" textAnchor="middle">x</text>
      <text x="78" y="52" fontSize="12" fill="currentColor" fontFamily="monospace" textAnchor="middle" transform="rotate(-39, 78, 52)">2x</text>
    </svg>
  );
}

function Triangle454590() {
  return (
    <svg width="140" height="120" viewBox="0 0 140 120" className="text-navy-700 dark:text-cream-200">
      {/* Triangle shape */}
      <polygon
        points="15,105 125,105 15,15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Right angle marker */}
      <polyline
        points="15,90 30,90 30,105"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Angle labels */}
      <text x="22" y="80" fontSize="11" fill="currentColor" fontFamily="sans-serif">90°</text>
      <text x="20" y="12" fontSize="11" fill="currentColor" fontFamily="sans-serif">45°</text>
      <text x="100" y="100" fontSize="11" fill="currentColor" fontFamily="sans-serif">45°</text>
      {/* Side ratio labels */}
      <text x="3" y="62" fontSize="12" fill="currentColor" fontFamily="monospace" textAnchor="end" transform="rotate(-90, 8, 62)">x</text>
      <text x="65" y="118" fontSize="12" fill="currentColor" fontFamily="monospace" textAnchor="middle">x</text>
      <text x="78" y="52" fontSize="12" fill="currentColor" fontFamily="monospace" textAnchor="middle" transform="rotate(-39, 78, 52)">x√2</text>
    </svg>
  );
}

const ALL_SECTION_TITLES = SECTIONS.map((s) => s.title);

export default function ReferenceSheet({ isOpen, onClose }) {
  const {
    position,
    size,
    isInteracting,
    isMobile,
    interactionType,
    handleDragStart,
    handleResizeStart,
  } = useFloatingPanel('sat-prep-reference-panel', {
    defaultWidth: 420,
    defaultHeight: 550,
    minWidth: 320,
    minHeight: 400,
  });

  const [expandedSections, setExpandedSections] = useState(
    () => new Set(ALL_SECTION_TITLES)
  );

  const toggleSection = (title) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  if (!isOpen) {
    return null;
  }

  const sectionContent = (
    <div className="divide-y divide-navy-200 dark:divide-navy-700">
      {SECTIONS.map((section, idx) => {
        const isExpanded = expandedSections.has(section.title);
        return (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center gap-2 w-full px-4 py-2 text-left font-sans font-semibold text-sm text-navy-800 dark:text-cream-100 hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 shrink-0" />
              )}
              {section.title}
              {section.badge === 'official' && (
                <span className="ml-auto text-[10px] font-sans font-medium bg-gold-500/20 text-gold-600 dark:text-gold-400 px-1.5 py-0.5 rounded">
                  SAT
                </span>
              )}
            </button>
            {isExpanded && (
              <div className="px-6 pb-3 space-y-0.5">
                {section.formulas.map((formula) => {
                  const isSeparator = formula.startsWith('──');
                  const isIndented = formula.startsWith('  ');
                  if (isSeparator) {
                    return (
                      <p key={formula} className="font-sans text-[10px] font-semibold uppercase tracking-wider text-navy-400 dark:text-navy-500 pt-2 pb-0.5">
                        {formula.replace(/──/g, '').trim()}
                      </p>
                    );
                  }
                  return (
                    <p
                      key={formula}
                      className={`font-mono text-sm text-navy-700 dark:text-cream-200 ${isIndented ? 'pl-3 text-navy-500 dark:text-cream-300' : ''}`}
                    >
                      {formula}
                    </p>
                  );
                })}
                {section.hasDiagrams && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div>
                      <p className="font-mono text-xs text-navy-500 dark:text-cream-300 mb-1">
                        30°-60°-90°
                      </p>
                      <Triangle306090 />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-navy-500 dark:text-cream-300 mb-1">
                        45°-45°-90°
                      </p>
                      <Triangle454590 />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  // Mobile: full-screen overlay
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-navy-900">
        {/* Title bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-navy-900 text-cream-50">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gold-500" />
            <span className="font-sans text-sm font-semibold text-gold-500">
              Reference Sheet
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-red-600 transition-colors text-cream-200 hover:text-cream-50"
            aria-label="Close reference sheet"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-navy-900">
          {sectionContent}
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
            <BookOpen className="w-4 h-4 text-gold-500" />
            <span className="font-sans text-sm font-semibold text-gold-500">
              Reference Sheet
            </span>
          </div>
          <button
            onClick={onClose}
            onPointerDown={(e) => e.stopPropagation()}
            className="p-1 rounded hover:bg-red-600 transition-colors text-cream-200 hover:text-cream-50"
            aria-label="Close reference sheet"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-navy-900 p-2">
          {sectionContent}
        </div>

        {/* Invisible overlay to prevent content from stealing pointer events during drag/resize */}
        {isInteracting && (
          <div
            className="absolute inset-0"
            style={{
              cursor:
                interactionType.current === 'drag'
                  ? 'grabbing'
                  : 'nwse-resize',
            }}
          />
        )}

        {/* Resize handle (bottom-right corner) */}
        <div
          className="absolute bottom-0 right-0 w-5 h-5 cursor-nwse-resize"
          onPointerDown={handleResizeStart}
          aria-label="Resize reference sheet"
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
