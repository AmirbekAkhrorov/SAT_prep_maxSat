/**
 * SVG Triangle primitive
 */
export default function Triangle({
  points, // [[x1, y1], [x2, y2], [x3, y3]]
  labels = {}, // { vertices: ['A', 'B', 'C'], sides: ['a', 'b', 'c'] }
  showRightAngle = null, // index of the right angle vertex (0, 1, or 2)
  style = {},
}) {
  const defaultStyle = {
    fill: '#fef3c7',
    stroke: '#1e3a5f',
    strokeWidth: 2,
    ...style,
  };

  const pointsStr = points.map(p => p.join(',')).join(' ');

  // Calculate label positions for vertices
  const getVertexLabelOffset = (index) => {
    const [px, py] = points[index];
    const centroid = [
      (points[0][0] + points[1][0] + points[2][0]) / 3,
      (points[0][1] + points[1][1] + points[2][1]) / 3,
    ];
    const dx = px - centroid[0];
    const dy = py - centroid[1];
    const dist = Math.sqrt(dx * dx + dy * dy);
    return {
      x: px + (dx / dist) * 15,
      y: py + (dy / dist) * 15,
    };
  };

  // Calculate midpoints for side labels
  const getMidpoint = (i1, i2) => ({
    x: (points[i1][0] + points[i2][0]) / 2,
    y: (points[i1][1] + points[i2][1]) / 2,
  });

  // Get side label offset (perpendicular to side)
  const getSideLabelOffset = (i1, i2) => {
    const mid = getMidpoint(i1, i2);
    const dx = points[i2][0] - points[i1][0];
    const dy = points[i2][1] - points[i1][1];
    const len = Math.sqrt(dx * dx + dy * dy);
    // Perpendicular unit vector
    const nx = -dy / len;
    const ny = dx / len;
    return {
      x: mid.x + nx * 15,
      y: mid.y + ny * 15,
    };
  };

  // Draw right angle marker
  const renderRightAngle = () => {
    if (showRightAngle === null) return null;

    const vertex = points[showRightAngle];
    const prev = points[(showRightAngle + 2) % 3];
    const next = points[(showRightAngle + 1) % 3];

    // Unit vectors along each side from vertex
    const len1 = Math.sqrt((prev[0] - vertex[0]) ** 2 + (prev[1] - vertex[1]) ** 2);
    const len2 = Math.sqrt((next[0] - vertex[0]) ** 2 + (next[1] - vertex[1]) ** 2);

    const u1 = [(prev[0] - vertex[0]) / len1, (prev[1] - vertex[1]) / len1];
    const u2 = [(next[0] - vertex[0]) / len2, (next[1] - vertex[1]) / len2];

    const size = 12;
    const p1 = [vertex[0] + u1[0] * size, vertex[1] + u1[1] * size];
    const p2 = [vertex[0] + u2[0] * size, vertex[1] + u2[1] * size];
    const corner = [p1[0] + u2[0] * size, p1[1] + u2[1] * size];

    return (
      <polyline
        points={`${p1[0]},${p1[1]} ${corner[0]},${corner[1]} ${p2[0]},${p2[1]}`}
        fill="none"
        stroke="#1e3a5f"
        strokeWidth={1.5}
      />
    );
  };

  return (
    <g>
      <polygon
        points={pointsStr}
        fill={defaultStyle.fill}
        stroke={defaultStyle.stroke}
        strokeWidth={defaultStyle.strokeWidth}
      />

      {renderRightAngle()}

      {/* Vertex labels */}
      {labels.vertices?.map((label, i) => {
        if (!label) return null;
        const pos = getVertexLabelOffset(i);
        return (
          <text
            key={`vertex-${i}`}
            x={pos.x}
            y={pos.y}
            fontSize="14"
            fontWeight="600"
            fill="#1e3a5f"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="system-ui, sans-serif"
          >
            {label}
          </text>
        );
      })}

      {/* Side labels */}
      {labels.sides?.map((label, i) => {
        if (!label) return null;
        const sideIndices = [[1, 2], [2, 0], [0, 1]]; // opposite to vertex i
        const pos = getSideLabelOffset(sideIndices[i][0], sideIndices[i][1]);
        return (
          <text
            key={`side-${i}`}
            x={pos.x}
            y={pos.y}
            fontSize="12"
            fill="#1e3a5f"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="system-ui, sans-serif"
          >
            {label}
          </text>
        );
      })}
    </g>
  );
}
