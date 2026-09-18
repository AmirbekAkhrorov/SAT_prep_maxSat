/**
 * SVG Angle primitive for showing angle measures
 */
export default function Angle({
  vertex, // [x, y]
  startAngle, // degrees from horizontal
  endAngle, // degrees from horizontal
  radius = 25,
  label,
  showArc = true,
  style = {},
}) {
  const defaultStyle = {
    stroke: '#1e3a5f',
    strokeWidth: 1.5,
    fill: 'none',
    ...style,
  };

  // Convert angles to radians
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;

  // Calculate arc endpoints
  const startX = vertex[0] + radius * Math.cos(startRad);
  const startY = vertex[1] - radius * Math.sin(startRad);
  const endX = vertex[0] + radius * Math.cos(endRad);
  const endY = vertex[1] - radius * Math.sin(endRad);

  // Determine if we need a large arc
  const angleDiff = ((endAngle - startAngle + 360) % 360);
  const largeArc = angleDiff > 180 ? 1 : 0;

  // Calculate label position (middle of arc)
  const midAngle = startAngle + angleDiff / 2;
  const midRad = (midAngle * Math.PI) / 180;
  const labelRadius = radius + 12;
  const labelX = vertex[0] + labelRadius * Math.cos(midRad);
  const labelY = vertex[1] - labelRadius * Math.sin(midRad);

  // SVG arc path
  const arcPath = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArc} 0 ${endX} ${endY}`;

  return (
    <g>
      {showArc && (
        <path
          d={arcPath}
          fill={defaultStyle.fill}
          stroke={defaultStyle.stroke}
          strokeWidth={defaultStyle.strokeWidth}
        />
      )}
      {label && (
        <text
          x={labelX}
          y={labelY}
          fontSize="12"
          fill="#1e3a5f"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="system-ui, sans-serif"
        >
          {label}
        </text>
      )}
    </g>
  );
}
