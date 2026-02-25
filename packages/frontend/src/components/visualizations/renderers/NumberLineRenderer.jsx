/**
 * Renderer for number lines with markers and regions
 */

export default function NumberLineRenderer({ config, maxWidth }) {
  const {
    width = 400,
    height = 80,
    range = [-10, 10],
    markers = [],
    regions = [],
    showTicks = true,
    tickInterval = 1,
  } = config;

  const dw = maxWidth && maxWidth < width ? maxWidth : width;
  const dh = Math.round(height * (dw / width));

  const padding = { left: 30, right: 30 };
  const lineY = height / 2;
  const lineWidth = width - padding.left - padding.right;

  // Scale function
  const scale = (value) =>
    padding.left + ((value - range[0]) / (range[1] - range[0])) * lineWidth;

  // Generate tick values
  const getTicks = () => {
    const ticks = [];
    const start = Math.ceil(range[0] / tickInterval) * tickInterval;
    for (let v = start; v <= range[1]; v += tickInterval) {
      ticks.push(v);
    }
    return ticks;
  };

  const ticks = showTicks ? getTicks() : [];

  return (
    <svg
      width={dw}
      height={dh}
      viewBox={`0 0 ${width} ${height}`}
      className="math-visualization number-line"
    >
      {/* Regions (shaded areas) */}
      {regions.map((region, i) => {
        const x1 = region.start !== undefined ? scale(region.start) : padding.left;
        const x2 = region.end !== undefined ? scale(region.end) : padding.left + lineWidth;

        return (
          <rect
            key={`region-${i}`}
            x={Math.min(x1, x2)}
            y={lineY - 12}
            width={Math.abs(x2 - x1)}
            height={24}
            fill={region.color || 'rgba(37, 99, 235, 0.2)'}
            rx={4}
          />
        );
      })}

      {/* Main line */}
      <line
        x1={padding.left}
        y1={lineY}
        x2={width - padding.right}
        y2={lineY}
        stroke="#1e3a5f"
        strokeWidth={2}
      />

      {/* Arrows */}
      <polygon
        points={`${padding.left - 8},${lineY} ${padding.left},${lineY - 5} ${padding.left},${lineY + 5}`}
        fill="#1e3a5f"
      />
      <polygon
        points={`${width - padding.right + 8},${lineY} ${width - padding.right},${lineY - 5} ${width - padding.right},${lineY + 5}`}
        fill="#1e3a5f"
      />

      {/* Tick marks */}
      {ticks.map((tick) => {
        const x = scale(tick);
        const isMajor = tick === 0 || tick % 5 === 0;

        return (
          <g key={`tick-${tick}`}>
            <line
              x1={x}
              y1={lineY - (isMajor ? 8 : 5)}
              x2={x}
              y2={lineY + (isMajor ? 8 : 5)}
              stroke="#1e3a5f"
              strokeWidth={isMajor ? 1.5 : 1}
            />
            <text
              x={x}
              y={lineY + 22}
              fontSize={isMajor ? '11' : '10'}
              fill={isMajor ? '#374151' : '#6b7280'}
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
            >
              {tick}
            </text>
          </g>
        );
      })}

      {/* Markers (points on the number line) */}
      {markers.map((marker, i) => {
        const x = scale(marker.value);
        const isOpen = marker.open === true;

        return (
          <g key={`marker-${i}`}>
            {/* Point */}
            <circle
              cx={x}
              cy={lineY}
              r={6}
              fill={isOpen ? '#fff' : (marker.color || '#2563eb')}
              stroke={marker.color || '#2563eb'}
              strokeWidth={2}
            />

            {/* Label */}
            {marker.label && (
              <text
                x={x}
                y={lineY - 15}
                fontSize="12"
                fill="#1e3a5f"
                textAnchor="middle"
                fontWeight="600"
                fontFamily="system-ui, sans-serif"
              >
                {marker.label}
              </text>
            )}

            {/* Value label if different from marker label */}
            {marker.showValue && !marker.label && (
              <text
                x={x}
                y={lineY - 15}
                fontSize="11"
                fill="#374151"
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                {marker.value}
              </text>
            )}
          </g>
        );
      })}

      {/* Inequality arrows/rays */}
      {regions.map((region, i) => {
        if (region.type === 'ray') {
          const startX = scale(region.start);
          const direction = region.direction || 'right';
          const endX = direction === 'right'
            ? width - padding.right
            : padding.left;

          return (
            <g key={`ray-${i}`}>
              <line
                x1={startX}
                y1={lineY}
                x2={endX}
                y2={lineY}
                stroke={region.color || '#2563eb'}
                strokeWidth={3}
              />
              {/* Arrow */}
              <polygon
                points={
                  direction === 'right'
                    ? `${endX},${lineY} ${endX - 8},${lineY - 4} ${endX - 8},${lineY + 4}`
                    : `${endX},${lineY} ${endX + 8},${lineY - 4} ${endX + 8},${lineY + 4}`
                }
                fill={region.color || '#2563eb'}
              />
              {/* Endpoint marker */}
              <circle
                cx={startX}
                cy={lineY}
                r={5}
                fill={region.open ? '#fff' : (region.color || '#2563eb')}
                stroke={region.color || '#2563eb'}
                strokeWidth={2}
              />
            </g>
          );
        }
        return null;
      })}
    </svg>
  );
}
