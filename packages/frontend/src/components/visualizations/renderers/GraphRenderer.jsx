/**
 * Renderer for coordinate graphs with functions, points, and lines
 */
import { CoordinateSystem, createScaleFunctions, Point } from '../primitives';

// Simple expression evaluator for basic math functions
function evaluateExpression(expr, x) {
  try {
    // Replace common patterns
    const sanitized = expr
      .replace(/\^/g, '**')
      .replace(/(\d)([x])/g, '$1*$2')
      .replace(/([x])(\d)/g, '$1*$2');

    // Create function and evaluate
    const fn = new Function('x', `return ${sanitized}`);
    return fn(x);
  } catch (e) {
    console.warn(`Failed to evaluate expression: ${expr}`, e);
    return null;
  }
}

// Generate points for a function
function generateFunctionPoints(expression, domain, xScale, yScale, steps = 100) {
  const [xMin, xMax] = domain;
  const points = [];
  const step = (xMax - xMin) / steps;

  for (let x = xMin; x <= xMax; x += step) {
    const y = evaluateExpression(expression, x);
    if (y !== null && isFinite(y)) {
      points.push({ x: xScale(x), y: yScale(y), mathX: x, mathY: y });
    }
  }

  return points;
}

export default function GraphRenderer({ config, maxWidth }) {
  const {
    width = 300,
    height = 300,
    xRange = [-5, 5],
    yRange = [-5, 5],
    gridLines = true,
    elements = [],
  } = config;

  const dw = maxWidth && maxWidth < width ? maxWidth : width;
  const dh = Math.round(height * (dw / width));

  const padding = 30;
  const { xScale, yScale } = createScaleFunctions(width, height, xRange, yRange, padding);

  const renderElement = (element, index) => {
    switch (element.type) {
      case 'function': {
        const points = generateFunctionPoints(
          element.expression,
          element.domain || xRange,
          xScale,
          yScale
        );

        if (points.length < 2) return null;

        // Create path data
        const pathData = points
          .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
          .join(' ');

        return (
          <g key={index}>
            <path
              d={pathData}
              fill="none"
              stroke={element.style?.stroke || '#2563eb'}
              strokeWidth={element.style?.strokeWidth || 2}
            />
            {element.label && (
              <text
                x={points[Math.floor(points.length * 0.7)]?.x + 10}
                y={points[Math.floor(points.length * 0.7)]?.y - 10}
                fontSize="12"
                fill={element.style?.stroke || '#2563eb'}
                fontFamily="system-ui, sans-serif"
              >
                {element.label}
              </text>
            )}
          </g>
        );
      }

      case 'point': {
        const [px, py] = element.coordinates;
        return (
          <Point
            key={index}
            x={xScale(px)}
            y={yScale(py)}
            radius={element.radius || 5}
            label={element.label}
            labelOffset={element.labelOffset || { x: 10, y: -10 }}
            style={element.style}
          />
        );
      }

      case 'line': {
        // Line defined by two points
        if (element.points) {
          const [[x1, y1], [x2, y2]] = element.points;
          return (
            <g key={index}>
              <line
                x1={xScale(x1)}
                y1={yScale(y1)}
                x2={xScale(x2)}
                y2={yScale(y2)}
                stroke={element.style?.stroke || '#dc2626'}
                strokeWidth={element.style?.strokeWidth || 2}
                strokeDasharray={element.dashed ? '6,3' : undefined}
              />
              {element.label && (
                <text
                  x={xScale((x1 + x2) / 2) + 10}
                  y={yScale((y1 + y2) / 2) - 10}
                  fontSize="12"
                  fill={element.style?.stroke || '#dc2626'}
                  fontFamily="system-ui, sans-serif"
                >
                  {element.label}
                </text>
              )}
            </g>
          );
        }

        // Line defined by slope and y-intercept
        if (element.slope !== undefined && element.intercept !== undefined) {
          const x1 = xRange[0];
          const x2 = xRange[1];
          const y1 = element.slope * x1 + element.intercept;
          const y2 = element.slope * x2 + element.intercept;

          return (
            <g key={index}>
              <line
                x1={xScale(x1)}
                y1={yScale(y1)}
                x2={xScale(x2)}
                y2={yScale(y2)}
                stroke={element.style?.stroke || '#dc2626'}
                strokeWidth={element.style?.strokeWidth || 2}
                strokeDasharray={element.dashed ? '6,3' : undefined}
              />
              {element.label && (
                <text
                  x={xScale((x1 + x2) / 2) + 10}
                  y={yScale((y1 + y2) / 2) - 10}
                  fontSize="12"
                  fill={element.style?.stroke || '#dc2626'}
                  fontFamily="system-ui, sans-serif"
                >
                  {element.label}
                </text>
              )}
            </g>
          );
        }

        return null;
      }

      case 'verticalLine': {
        const x = element.x;
        return (
          <g key={index}>
            <line
              x1={xScale(x)}
              y1={padding}
              x2={xScale(x)}
              y2={height - padding}
              stroke={element.style?.stroke || '#9333ea'}
              strokeWidth={element.style?.strokeWidth || 1.5}
              strokeDasharray={element.dashed ? '6,3' : undefined}
            />
            {element.label && (
              <text
                x={xScale(x) + 8}
                y={padding + 15}
                fontSize="12"
                fill={element.style?.stroke || '#9333ea'}
                fontFamily="system-ui, sans-serif"
              >
                {element.label}
              </text>
            )}
          </g>
        );
      }

      case 'horizontalLine': {
        const y = element.y;
        return (
          <g key={index}>
            <line
              x1={padding}
              y1={yScale(y)}
              x2={width - padding}
              y2={yScale(y)}
              stroke={element.style?.stroke || '#9333ea'}
              strokeWidth={element.style?.strokeWidth || 1.5}
              strokeDasharray={element.dashed ? '6,3' : undefined}
            />
            {element.label && (
              <text
                x={width - padding - 8}
                y={yScale(y) - 8}
                fontSize="12"
                fill={element.style?.stroke || '#9333ea'}
                textAnchor="end"
                fontFamily="system-ui, sans-serif"
              >
                {element.label}
              </text>
            )}
          </g>
        );
      }

      case 'region': {
        // Shaded region between two functions or bounded area
        // Simplified implementation for common cases
        const points = element.vertices?.map(([x, y]) =>
          `${xScale(x)},${yScale(y)}`
        ).join(' ');

        return (
          <polygon
            key={index}
            points={points}
            fill={element.style?.fill || 'rgba(37, 99, 235, 0.2)'}
            stroke={element.style?.stroke || 'none'}
          />
        );
      }

      default:
        console.warn(`Unknown graph element type: ${element.type}`);
        return null;
    }
  };

  return (
    <svg
      width={dw}
      height={dh}
      viewBox={`0 0 ${width} ${height}`}
      className="math-visualization graph"
    >
      <CoordinateSystem
        width={width}
        height={height}
        xRange={xRange}
        yRange={yRange}
        gridLines={gridLines}
      />
      {elements.map((element, index) => renderElement(element, index))}
    </svg>
  );
}
