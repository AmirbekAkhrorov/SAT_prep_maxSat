/**
 * SVG Point primitive for coordinate systems and geometry
 */
export default function Point({
  x,
  y,
  radius = 4,
  label,
  labelOffset = { x: 8, y: -8 },
  style = {},
}) {
  const defaultStyle = {
    fill: '#1e3a5f',
    stroke: '#1e3a5f',
    ...style,
  };

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={defaultStyle.fill}
        stroke={defaultStyle.stroke}
        strokeWidth={1}
      />
      {label && (
        <text
          x={x + labelOffset.x}
          y={y + labelOffset.y}
          fontSize="12"
          fill="#1e3a5f"
          fontFamily="system-ui, sans-serif"
        >
          {label}
        </text>
      )}
    </g>
  );
}
