// src/components/blog/BlogEyebrow.jsx
export default function BlogEyebrow({ children }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <div style={{ width: '28px', height: '1px', backgroundColor: '#C8102E', flexShrink: 0 }} />
        <span style={{
          fontSize: '10px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#C8102E',
        }}>
          {children}
        </span>
      </div>
    )
  }