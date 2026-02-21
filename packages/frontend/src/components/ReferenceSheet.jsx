import { useState } from 'react';
import { X, GripHorizontal, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import useFloatingPanel from '../hooks/useFloatingPanel';

const SECTIONS = [
  {
    title: 'Circles',
    formulas: [
      'A = \u03C0r\u00B2',
      'C = 2\u03C0r',
      '360\u00B0 in a circle',
      '2\u03C0 radians in a circle',
    ],
  },
  {
    title: 'Area Formulas',
    formulas: [
      'Rectangle: A = lw',
      'Triangle: A = \u00BDbh',
    ],
  },
  {
    title: 'Pythagorean Theorem',
    formulas: ['a\u00B2 + b\u00B2 = c\u00B2'],
  },
  {
    title: 'Special Right Triangles',
    formulas: [],
    hasDiagrams: true,
  },
  {
    title: 'Volume Formulas',
    formulas: [
      'Box: V = lwh',
      'Cylinder: V = \u03C0r\u00B2h',
      'Sphere: V = \u2074\u2044\u2083\u03C0r\u00B3',
      'Cone: V = \u2153\u03C0r\u00B2h',
      'Pyramid: V = \u2153lwh',
    ],
  },
  {
    title: 'Key Facts',
    formulas: [
      'Circle = 360\u00B0 = 2\u03C0 radians',
      'Sum of angles in a triangle = 180\u00B0',
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
          <div key={idx}>
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
            </button>
            {isExpanded && (
              <div className="px-6 pb-3 space-y-1">
                {section.formulas.map((formula, fIdx) => (
                  <p
                    key={fIdx}
                    className="font-mono text-sm text-navy-700 dark:text-cream-200"
                  >
                    {formula}
                  </p>
                ))}
                {section.hasDiagrams && (
                  <div className="space-y-3 pt-1">
                    <div>
                      <p className="font-mono text-sm text-navy-700 dark:text-cream-200 mb-1">
                        30°-60°-90° triangle: x, x√3, 2x
                      </p>
                      <Triangle306090 />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-navy-700 dark:text-cream-200 mb-1">
                        45°-45°-90° triangle: x, x, x√2
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
        </div>

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
