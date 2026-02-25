/**
 * Renderer for geometry visualizations (triangles, circles, rectangles, angles)
 */
import { Triangle, Circle, Rectangle, Angle, Point } from '../primitives';

export default function GeometryRenderer({ config, maxWidth }) {
  const { width = 300, height = 200, shapes = [] } = config;
  const dw = maxWidth && maxWidth < width ? maxWidth : width;
  const dh = Math.round(height * (dw / width));

  const renderShape = (shape, index) => {
    switch (shape.type) {
      case 'triangle':
        return (
          <Triangle
            key={index}
            points={shape.points}
            labels={shape.labels}
            showRightAngle={shape.showRightAngle}
            style={shape.style}
          />
        );

      case 'circle':
        return (
          <Circle
            key={index}
            cx={shape.cx}
            cy={shape.cy}
            r={shape.r}
            showCenter={shape.showCenter}
            showRadius={shape.showRadius}
            radiusAngle={shape.radiusAngle}
            labels={shape.labels}
            style={shape.style}
          />
        );

      case 'rectangle':
        return (
          <Rectangle
            key={index}
            x={shape.x}
            y={shape.y}
            width={shape.width}
            height={shape.height}
            labels={shape.labels}
            style={shape.style}
          />
        );

      case 'angle':
        return (
          <Angle
            key={index}
            vertex={shape.vertex}
            startAngle={shape.startAngle}
            endAngle={shape.endAngle}
            radius={shape.radius}
            label={shape.label}
            style={shape.style}
          />
        );

      case 'point':
        return (
          <Point
            key={index}
            x={shape.x}
            y={shape.y}
            radius={shape.radius}
            label={shape.label}
            labelOffset={shape.labelOffset}
            style={shape.style}
          />
        );

      case 'line':
        return (
          <g key={index}>
            <line
              x1={shape.x1}
              y1={shape.y1}
              x2={shape.x2}
              y2={shape.y2}
              stroke={shape.style?.stroke || '#1e3a5f'}
              strokeWidth={shape.style?.strokeWidth || 2}
              strokeDasharray={shape.dashed ? '6,3' : undefined}
            />
            {shape.label && (
              <text
                x={(shape.x1 + shape.x2) / 2 + (shape.labelOffset?.x || 0)}
                y={(shape.y1 + shape.y2) / 2 + (shape.labelOffset?.y || -10)}
                fontSize="12"
                fill="#1e3a5f"
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                {shape.label}
              </text>
            )}
          </g>
        );

      case 'polygon':
        const pointsStr = shape.points.map(p => p.join(',')).join(' ');
        return (
          <polygon
            key={index}
            points={pointsStr}
            fill={shape.style?.fill || '#fef3c7'}
            stroke={shape.style?.stroke || '#1e3a5f'}
            strokeWidth={shape.style?.strokeWidth || 2}
          />
        );

      case 'text':
        return (
          <text
            key={index}
            x={shape.x}
            y={shape.y}
            fontSize={shape.fontSize || 14}
            fontWeight={shape.fontWeight || 'normal'}
            fill={shape.style?.fill || '#1e3a5f'}
            textAnchor={shape.textAnchor || 'middle'}
            fontFamily="system-ui, sans-serif"
          >
            {shape.text}
          </text>
        );

      case 'ellipse':
        return (
          <ellipse
            key={index}
            cx={shape.cx}
            cy={shape.cy}
            rx={shape.rx}
            ry={shape.ry}
            fill={shape.style?.fill || '#dbeafe'}
            stroke={shape.style?.stroke || '#1e3a5f'}
            strokeWidth={shape.style?.strokeWidth || 2}
            strokeDasharray={shape.style?.strokeDasharray}
          />
        );

      default:
        console.warn(`Unknown geometry shape type: ${shape.type}`);
        return null;
    }
  };

  return (
    <svg
      width={dw}
      height={dh}
      viewBox={`0 0 ${width} ${height}`}
      className="math-visualization geometry"
    >
      {shapes.map((shape, index) => renderShape(shape, index))}
    </svg>
  );
}
