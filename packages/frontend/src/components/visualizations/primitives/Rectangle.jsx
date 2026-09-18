/**
 * SVG Rectangle primitive with dimension labels
 */
export default function Rectangle({
  x,
  y,
  width,
  height,
  labels = {}, // { width: '8 cm', height: '5 cm' }
  style = {},
}) {
  const defaultStyle = {
    fill: '#fef3c7',
    stroke: '#1e3a5f',
    strokeWidth: 2,
    ...style,
  };

  return (
    <g>
      {/* Main rectangle */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={defaultStyle.fill}
        stroke={defaultStyle.stroke}
        strokeWidth={defaultStyle.strokeWidth}
      />

      {/* Width label (bottom) */}
      {labels.width && (
        <>
          {/* Dimension line markers */}
          <line
            x1={x}
            y1={y + height + 8}
            x2={x}
            y2={y + height + 16}
            stroke="#1e3a5f"
            strokeWidth={1}
          />
          <line
            x1={x + width}
            y1={y + height + 8}
            x2={x + width}
            y2={y + height + 16}
            stroke="#1e3a5f"
            strokeWidth={1}
          />
          <line
            x1={x}
            y1={y + height + 12}
            x2={x + width}
            y2={y + height + 12}
            stroke="#1e3a5f"
            strokeWidth={1}
          />
          {/* Arrows */}
          <polygon
            points={`${x},${y + height + 12} ${x + 6},${y + height + 9} ${x + 6},${y + height + 15}`}
            fill="#1e3a5f"
          />
          <polygon
            points={`${x + width},${y + height + 12} ${x + width - 6},${y + height + 9} ${x + width - 6},${y + height + 15}`}
            fill="#1e3a5f"
          />
          <text
            x={x + width / 2}
            y={y + height + 28}
            fontSize="12"
            fill="#1e3a5f"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
          >
            {labels.width}
          </text>
        </>
      )}

      {/* Height label (right side) */}
      {labels.height && (
        <>
          {/* Dimension line markers */}
          <line
            x1={x + width + 8}
            y1={y}
            x2={x + width + 16}
            y2={y}
            stroke="#1e3a5f"
            strokeWidth={1}
          />
          <line
            x1={x + width + 8}
            y1={y + height}
            x2={x + width + 16}
            y2={y + height}
            stroke="#1e3a5f"
            strokeWidth={1}
          />
          <line
            x1={x + width + 12}
            y1={y}
            x2={x + width + 12}
            y2={y + height}
            stroke="#1e3a5f"
            strokeWidth={1}
          />
          {/* Arrows */}
          <polygon
            points={`${x + width + 12},${y} ${x + width + 9},${y + 6} ${x + width + 15},${y + 6}`}
            fill="#1e3a5f"
          />
          <polygon
            points={`${x + width + 12},${y + height} ${x + width + 9},${y + height - 6} ${x + width + 15},${y + height - 6}`}
            fill="#1e3a5f"
          />
          <text
            x={x + width + 28}
            y={y + height / 2}
            fontSize="12"
            fill="#1e3a5f"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="system-ui, sans-serif"
            transform={`rotate(90, ${x + width + 28}, ${y + height / 2})`}
          >
            {labels.height}
          </text>
        </>
      )}
    </g>
  );
}
