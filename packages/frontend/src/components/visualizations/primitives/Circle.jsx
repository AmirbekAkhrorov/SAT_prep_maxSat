/**
 * SVG Circle primitive with optional center, radius line, and labels
 */
export default function Circle({
  cx,
  cy,
  r,
  showCenter = false,
  showRadius = false,
  radiusAngle = 45, // degrees from horizontal
  labels = {}, // { center: 'O', radius: 'r', diameter: 'd' }
  style = {},
}) {
  const defaultStyle = {
    fill: '#dbeafe',
    stroke: '#1e3a5f',
    strokeWidth: 2,
    ...style,
  };

  // Calculate radius line endpoint
  const angleRad = (radiusAngle * Math.PI) / 180;
  const radiusEndX = cx + r * Math.cos(angleRad);
  const radiusEndY = cy - r * Math.sin(angleRad);

  // Label positions
  const radiusLabelX = cx + (r / 2) * Math.cos(angleRad);
  const radiusLabelY = cy - (r / 2) * Math.sin(angleRad);

  return (
    <g>
      {/* Main circle */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={defaultStyle.fill}
        stroke={defaultStyle.stroke}
        strokeWidth={defaultStyle.strokeWidth}
      />

      {/* Center point */}
      {showCenter && (
        <circle cx={cx} cy={cy} r={3} fill="#1e3a5f" />
      )}

      {/* Center label */}
      {labels.center && (
        <text
          x={cx - 12}
          y={cy - 8}
          fontSize="14"
          fontWeight="600"
          fill="#1e3a5f"
          fontFamily="system-ui, sans-serif"
        >
          {labels.center}
        </text>
      )}

      {/* Radius line */}
      {showRadius && (
        <>
          <line
            x1={cx}
            y1={cy}
            x2={radiusEndX}
            y2={radiusEndY}
            stroke="#1e3a5f"
            strokeWidth={1.5}
            strokeDasharray="4,2"
          />
          <circle cx={radiusEndX} cy={radiusEndY} r={2} fill="#1e3a5f" />
        </>
      )}

      {/* Radius label */}
      {showRadius && labels.radius && (
        <text
          x={radiusLabelX + 8}
          y={radiusLabelY - 5}
          fontSize="12"
          fill="#1e3a5f"
          fontFamily="system-ui, sans-serif"
        >
          {labels.radius}
        </text>
      )}

      {/* Diameter label (positioned at bottom) */}
      {labels.diameter && (
        <text
          x={cx}
          y={cy + r + 18}
          fontSize="12"
          fill="#1e3a5f"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          {labels.diameter}
        </text>
      )}
    </g>
  );
}
