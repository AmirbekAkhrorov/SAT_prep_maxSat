/**
 * Renderer for static images (complex figures that can't be dynamically generated)
 */

export default function StaticImageRenderer({ config }) {
  const {
    src,
    alt = 'Math figure',
    width,
    height,
    caption,
  } = config;

  return (
    <figure className="math-visualization static-image">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }}
        loading="lazy"
      />
      {caption && (
        <figcaption
          style={{
            marginTop: '8px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#6b7280',
            fontStyle: 'italic',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
