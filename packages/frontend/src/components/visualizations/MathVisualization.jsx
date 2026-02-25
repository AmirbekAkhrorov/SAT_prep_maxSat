/**
 * Main visualization router component
 * Picks the correct renderer based on visualization type
 */
import {
  GeometryRenderer,
  GraphRenderer,
  ChartRenderer,
  NumberLineRenderer,
  TableRenderer,
  StaticImageRenderer,
} from './renderers';

export default function MathVisualization({ visualization, maxWidth }) {
  if (!visualization || !visualization.type) {
    return null;
  }

  const { type, config } = visualization;

  // Pick the appropriate renderer based on visualization type
  switch (type) {
    case 'geometry':
      return <GeometryRenderer config={config} maxWidth={maxWidth} />;

    case 'graph':
      return <GraphRenderer config={config} maxWidth={maxWidth} />;

    case 'chart':
      return <ChartRenderer config={config} maxWidth={maxWidth} />;

    case 'numberLine':
      return <NumberLineRenderer config={config} maxWidth={maxWidth} />;

    case 'table':
      return <TableRenderer config={config} />;

    case 'static':
      return <StaticImageRenderer config={config} />;

    default:
      console.warn(`Unknown visualization type: ${type}`);
      return (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
          Visualization type "{type}" is not supported.
        </div>
      );
  }
}
