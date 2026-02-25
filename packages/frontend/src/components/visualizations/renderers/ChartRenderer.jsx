/**
 * Renderer for charts (bar, line, scatter, pie)
 */

export default function ChartRenderer({ config, maxWidth }) {
  const {
    width = 350,
    height = 250,
    chartType = 'bar',
    data = [],
    xLabel,
    yLabel,
    title,
  } = config;
  const dw = maxWidth && maxWidth < width ? maxWidth : width;
  const dh = Math.round(height * (dw / width));

  const padding = { top: 40, right: 30, bottom: 50, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate scales
  const maxValue = Math.max(...data.map(d => d.value)) * 1.1;
  const yScale = (value) => padding.top + chartHeight - (value / maxValue) * chartHeight;

  // Colors for data points
  const colors = ['#2563eb', '#dc2626', '#16a34a', '#ca8a04', '#9333ea', '#0891b2'];

  const renderBarChart = () => {
    const barWidth = (chartWidth / data.length) * 0.7;
    const barGap = (chartWidth / data.length) * 0.3;

    return (
      <g>
        {data.map((d, i) => {
          const x = padding.left + i * (barWidth + barGap) + barGap / 2;
          const barHeight = (d.value / maxValue) * chartHeight;
          const y = padding.top + chartHeight - barHeight;

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={d.color || colors[i % colors.length]}
                rx={3}
              />
              {/* Value label */}
              <text
                x={x + barWidth / 2}
                y={y - 5}
                fontSize="11"
                fill="#374151"
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                {d.value}
              </text>
              {/* Category label */}
              <text
                x={x + barWidth / 2}
                y={height - padding.bottom + 18}
                fontSize="11"
                fill="#6b7280"
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </g>
    );
  };

  const renderLineChart = () => {
    const xStep = chartWidth / (data.length - 1);

    // Generate path
    const pathData = data
      .map((d, i) => {
        const x = padding.left + i * xStep;
        const y = yScale(d.value);
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');

    return (
      <g>
        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke={config.lineColor || '#2563eb'}
          strokeWidth={2}
        />

        {/* Data points and labels */}
        {data.map((d, i) => {
          const x = padding.left + i * xStep;
          const y = yScale(d.value);

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={4}
                fill={config.lineColor || '#2563eb'}
              />
              {/* Value label */}
              <text
                x={x}
                y={y - 10}
                fontSize="10"
                fill="#374151"
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                {d.value}
              </text>
              {/* Category label */}
              <text
                x={x}
                y={height - padding.bottom + 18}
                fontSize="11"
                fill="#6b7280"
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </g>
    );
  };

  const renderScatterChart = () => {
    // For scatter, data points have x and y values
    const xValues = data.map(d => d.x);
    const yValues = data.map(d => d.y);
    const xMin = Math.min(...xValues);
    const xMax = Math.max(...xValues);
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);

    const scaleX = (x) => padding.left + ((x - xMin) / (xMax - xMin || 1)) * chartWidth;
    const scaleY = (y) => padding.top + chartHeight - ((y - yMin) / (yMax - yMin || 1)) * chartHeight;

    return (
      <g>
        {data.map((d, i) => (
          <g key={i}>
            <circle
              cx={scaleX(d.x)}
              cy={scaleY(d.y)}
              r={5}
              fill={d.color || colors[i % colors.length]}
            />
            {d.label && (
              <text
                x={scaleX(d.x) + 8}
                y={scaleY(d.y) - 5}
                fontSize="10"
                fill="#374151"
                fontFamily="system-ui, sans-serif"
              >
                {d.label}
              </text>
            )}
          </g>
        ))}
      </g>
    );
  };

  const renderPieChart = () => {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(chartWidth, chartHeight) / 2 - 20;

    let startAngle = -Math.PI / 2; // Start at top

    return (
      <g>
        {data.map((d, i) => {
          const sliceAngle = (d.value / total) * 2 * Math.PI;
          const endAngle = startAngle + sliceAngle;

          const x1 = centerX + radius * Math.cos(startAngle);
          const y1 = centerY + radius * Math.sin(startAngle);
          const x2 = centerX + radius * Math.cos(endAngle);
          const y2 = centerY + radius * Math.sin(endAngle);

          const largeArc = sliceAngle > Math.PI ? 1 : 0;

          const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

          // Label position
          const labelAngle = startAngle + sliceAngle / 2;
          const labelRadius = radius * 0.65;
          const labelX = centerX + labelRadius * Math.cos(labelAngle);
          const labelY = centerY + labelRadius * Math.sin(labelAngle);

          const currentStart = startAngle;
          startAngle = endAngle;

          return (
            <g key={i}>
              <path
                d={path}
                fill={d.color || colors[i % colors.length]}
                stroke="#fff"
                strokeWidth={2}
              />
              <text
                x={labelX}
                y={labelY}
                fontSize="11"
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="600"
                fontFamily="system-ui, sans-serif"
              >
                {Math.round((d.value / total) * 100)}%
              </text>
            </g>
          );
        })}

        {/* Legend */}
        {data.map((d, i) => (
          <g key={`legend-${i}`} transform={`translate(${width - 80}, ${padding.top + i * 20})`}>
            <rect
              width={12}
              height={12}
              fill={d.color || colors[i % colors.length]}
              rx={2}
            />
            <text
              x={18}
              y={10}
              fontSize="10"
              fill="#6b7280"
              fontFamily="system-ui, sans-serif"
            >
              {d.label}
            </text>
          </g>
        ))}
      </g>
    );
  };

  // Y-axis for bar and line charts
  const renderYAxis = () => {
    const tickCount = 5;
    const ticks = Array.from({ length: tickCount + 1 }, (_, i) => (maxValue / tickCount) * i);

    return (
      <g>
        {/* Y axis line */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={padding.top + chartHeight}
          stroke="#9ca3af"
          strokeWidth={1}
        />

        {/* Tick marks and labels */}
        {ticks.map((tick, i) => {
          const y = yScale(tick);
          return (
            <g key={i}>
              <line
                x1={padding.left - 5}
                y1={y}
                x2={padding.left}
                y2={y}
                stroke="#9ca3af"
                strokeWidth={1}
              />
              <line
                x1={padding.left}
                y1={y}
                x2={padding.left + chartWidth}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth={1}
                strokeDasharray="4,4"
              />
              <text
                x={padding.left - 10}
                y={y + 4}
                fontSize="10"
                fill="#6b7280"
                textAnchor="end"
                fontFamily="system-ui, sans-serif"
              >
                {Math.round(tick)}
              </text>
            </g>
          );
        })}
      </g>
    );
  };

  // X-axis baseline
  const renderXAxis = () => (
    <line
      x1={padding.left}
      y1={padding.top + chartHeight}
      x2={padding.left + chartWidth}
      y2={padding.top + chartHeight}
      stroke="#9ca3af"
      strokeWidth={1}
    />
  );

  return (
    <svg
      width={dw}
      height={dh}
      viewBox={`0 0 ${width} ${height}`}
      className="math-visualization chart"
    >
      {/* Title */}
      {title && (
        <text
          x={width / 2}
          y={20}
          fontSize="14"
          fontWeight="600"
          fill="#1e3a5f"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          {title}
        </text>
      )}

      {/* Axes for bar and line charts */}
      {(chartType === 'bar' || chartType === 'line') && (
        <>
          {renderYAxis()}
          {renderXAxis()}
        </>
      )}

      {/* Chart content */}
      {chartType === 'bar' && renderBarChart()}
      {chartType === 'line' && renderLineChart()}
      {chartType === 'scatter' && renderScatterChart()}
      {chartType === 'pie' && renderPieChart()}

      {/* Axis labels */}
      {xLabel && chartType !== 'pie' && (
        <text
          x={padding.left + chartWidth / 2}
          y={height - 8}
          fontSize="12"
          fill="#6b7280"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          {xLabel}
        </text>
      )}
      {yLabel && chartType !== 'pie' && (
        <text
          x={15}
          y={padding.top + chartHeight / 2}
          fontSize="12"
          fill="#6b7280"
          textAnchor="middle"
          transform={`rotate(-90, 15, ${padding.top + chartHeight / 2})`}
          fontFamily="system-ui, sans-serif"
        >
          {yLabel}
        </text>
      )}
    </svg>
  );
}
