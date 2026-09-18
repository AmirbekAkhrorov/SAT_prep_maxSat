/**
 * Renderer for data tables
 */

export default function TableRenderer({ config }) {
  const {
    headers = [],
    rows = [],
    title,
    highlightRow,
    highlightColumn,
    style = {},
  } = config;

  const cellStyle = {
    padding: '8px 12px',
    borderBottom: '1px solid #e5e7eb',
    fontSize: '14px',
    ...style.cell,
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: '#f3f4f6',
    fontWeight: '600',
    color: '#1e3a5f',
    ...style.header,
  };

  return (
    <div className="math-visualization table overflow-x-auto">
      {title && (
        <div
          style={{
            padding: '12px 16px',
            fontWeight: '600',
            fontSize: '14px',
            color: '#1e3a5f',
            borderBottom: '2px solid #e5e7eb',
            backgroundColor: '#fef3c7',
          }}
        >
          {title}
        </div>
      )}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#fff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th
                  key={i}
                  style={{
                    ...headerStyle,
                    backgroundColor:
                      highlightColumn === i ? '#dbeafe' : headerStyle.backgroundColor,
                    textAlign: typeof header === 'number' ? 'right' : 'left',
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                backgroundColor:
                  highlightRow === rowIndex
                    ? '#fef3c7'
                    : rowIndex % 2 === 0
                    ? '#fff'
                    : '#f9fafb',
              }}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    ...cellStyle,
                    backgroundColor:
                      highlightColumn === cellIndex && highlightRow !== rowIndex
                        ? 'rgba(219, 234, 254, 0.5)'
                        : undefined,
                    textAlign: typeof cell === 'number' ? 'right' : 'left',
                    fontWeight: cellIndex === 0 && style.firstColumnBold ? '600' : 'normal',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
