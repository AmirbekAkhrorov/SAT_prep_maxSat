/**
 * SVG Coordinate System with axes, grid, and tick marks
 */
export default function CoordinateSystem({
  width,
  height,
  xRange, // [min, max]
  yRange, // [min, max]
  gridLines = true,
  tickMarks = true,
  axisLabels = { x: 'x', y: 'y' },
  style = {},
}) {
  const padding = 30;
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;

  // Transform functions (math coords to SVG coords)
  const xScale = (x) => padding + ((x - xRange[0]) / (xRange[1] - xRange[0])) * innerWidth;
  const yScale = (y) => padding + ((yRange[1] - y) / (yRange[1] - yRange[0])) * innerHeight;

  // Origin position in SVG coords
  const originX = xScale(0);
  const originY = yScale(0);

  // Generate tick values
  const getTickValues = (min, max) => {
    const ticks = [];
    for (let i = Math.ceil(min); i <= Math.floor(max); i++) {
      if (i !== 0) ticks.push(i);
    }
    return ticks;
  };

  const xTicks = getTickValues(xRange[0], xRange[1]);
  const yTicks = getTickValues(yRange[0], yRange[1]);

  return (
    <g>
      {/* Grid lines */}
      {gridLines && (
        <g stroke="#e5e7eb" strokeWidth={0.5}>
          {/* Vertical grid lines */}
          {xTicks.map((x) => (
            <line
              key={`vgrid-${x}`}
              x1={xScale(x)}
              y1={padding}
              x2={xScale(x)}
              y2={height - padding}
            />
          ))}
          {/* Horizontal grid lines */}
          {yTicks.map((y) => (
            <line
              key={`hgrid-${y}`}
              x1={padding}
              y1={yScale(y)}
              x2={width - padding}
              y2={yScale(y)}
            />
          ))}
        </g>
      )}

      {/* X axis */}
      <line
        x1={padding}
        y1={originY}
        x2={width - padding}
        y2={originY}
        stroke="#1e3a5f"
        strokeWidth={1.5}
        markerEnd="url(#arrowhead)"
      />

      {/* Y axis */}
      <line
        x1={originX}
        y1={height - padding}
        x2={originX}
        y2={padding}
        stroke="#1e3a5f"
        strokeWidth={1.5}
        markerEnd="url(#arrowhead)"
      />

      {/* Arrowhead marker definition */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#1e3a5f" />
        </marker>
      </defs>

      {/* Tick marks and labels */}
      {tickMarks && (
        <g>
          {/* X axis ticks */}
          {xTicks.map((x) => (
            <g key={`xtick-${x}`}>
              <line
                x1={xScale(x)}
                y1={originY - 4}
                x2={xScale(x)}
                y2={originY + 4}
                stroke="#1e3a5f"
                strokeWidth={1}
              />
              <text
                x={xScale(x)}
                y={originY + 16}
                fontSize="10"
                fill="#6b7280"
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                {x}
              </text>
            </g>
          ))}

          {/* Y axis ticks */}
          {yTicks.map((y) => (
            <g key={`ytick-${y}`}>
              <line
                x1={originX - 4}
                y1={yScale(y)}
                x2={originX + 4}
                y2={yScale(y)}
                stroke="#1e3a5f"
                strokeWidth={1}
              />
              <text
                x={originX - 10}
                y={yScale(y)}
                fontSize="10"
                fill="#6b7280"
                textAnchor="end"
                dominantBaseline="middle"
                fontFamily="system-ui, sans-serif"
              >
                {y}
              </text>
            </g>
          ))}

          {/* Origin label */}
          <text
            x={originX - 8}
            y={originY + 14}
            fontSize="10"
            fill="#6b7280"
            textAnchor="end"
            fontFamily="system-ui, sans-serif"
          >
            0
          </text>
        </g>
      )}

      {/* Axis labels */}
      {axisLabels.x && (
        <text
          x={width - padding + 15}
          y={originY + 4}
          fontSize="12"
          fontStyle="italic"
          fill="#1e3a5f"
          fontFamily="system-ui, sans-serif"
        >
          {axisLabels.x}
        </text>
      )}
      {axisLabels.y && (
        <text
          x={originX - 4}
          y={padding - 10}
          fontSize="12"
          fontStyle="italic"
          fill="#1e3a5f"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          {axisLabels.y}
        </text>
      )}
    </g>
  );
}

// Export helper functions for use in graph renderer
export function createScaleFunctions(width, height, xRange, yRange, padding = 30) {
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;

  return {
    xScale: (x) => padding + ((x - xRange[0]) / (xRange[1] - xRange[0])) * innerWidth,
    yScale: (y) => padding + ((yRange[1] - y) / (yRange[1] - yRange[0])) * innerHeight,
  };
}
