// src/components/blog/PortableTextRenderer.jsx
// Renders Sanity Portable Text with Limore brand styling
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 300,
        fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
        color: 'rgba(248,247,244,0.68)', lineHeight: 1.95,
        margin: '0 0 1.6em',
      }}>
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 style={{
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(1.5rem, 3vw, 2.8rem)',
        fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em',
        color: '#F8F7F4', margin: '2.4em 0 0.6em',
      }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(1.2rem, 2vw, 1.9rem)',
        fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.01em',
        color: '#F8F7F4', margin: '2em 0 0.5em',
      }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{
        margin: '2.4em 0',
        padding: 'clamp(20px, 3vw, 32px) clamp(24px, 4vw, 40px)',
        borderLeft: '2px solid #C8102E',
        backgroundColor: 'rgba(200,16,46,0.05)',
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
        fontStyle: 'italic', fontWeight: 300,
        color: 'rgba(248,247,244,0.65)', lineHeight: 1.6,
      }}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ fontWeight: 500, color: '#F8F7F4' }}>{children}</strong>
    ),
    em: ({ children }) => (
      <em style={{ fontStyle: 'italic', color: 'rgba(248,247,244,0.85)' }}>{children}</em>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : '_self'}
        rel="noopener noreferrer"
        style={{
          color: '#C8102E', textDecoration: 'none',
          borderBottom: '1px solid rgba(200,16,46,0.35)',
          transition: 'border-color 0.2s ease',
        }}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure style={{ margin: '2.4em 0' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
          <Image
            src={value?.asset?.url}
            alt={value?.alt || ''}
            fill loading="lazy"
            sizes="(max-width:768px) 100vw, 800px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {value?.caption && (
          <figcaption style={{
            marginTop: '10px',
            fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 400,
            color: 'rgba(248,247,244,0.25)', letterSpacing: '0.06em',
            textAlign: 'center',
          }}>
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
}

export default function PortableTextRenderer({ value }) {
  if (!value) return null
  return <PortableText value={value} components={ptComponents} />
}