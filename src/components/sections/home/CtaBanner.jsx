import Link from 'next/link'

const t = {
  en: {
    heading: 'Managing mobility across cities\nshouldn\'t be complicated.',
    sub: 'One call. One manager. Every city.',
    cta: 'Get a Proposal',
    ctaSecondary: 'Book Now',
  },
  ar: {
    heading: 'إدارة التنقل عبر المدن\nlا ينبغي أن تكون معقدة.',
    sub: 'مكالمة واحدة. مدير واحد. كل مدينة.',
    cta: 'احصل على عرض',
    ctaSecondary: 'احجز الآن',
  },
  fr: {
    heading: 'Gerer la mobilite dans les villes\nne devrait pas etre complique.',
    sub: 'Un appel. Un manager. Chaque ville.',
    cta: 'Obtenir une Proposition',
    ctaSecondary: 'Reserver',
  },
}

export default function CtaBanner({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL = locale === 'ar'
  const localePath = (href) => '/' + locale + href

  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A',
        direction: isRTL ? 'rtl' : 'ltr',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle red glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(196,30,30,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div
        className="container-default"
        style={{
          paddingTop: '100px',
          paddingBottom: '100px',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 400, color: '#F8F7F4',
          lineHeight: 1.1, letterSpacing: '0.02em',
          marginBottom: '20px', whiteSpace: 'pre-line',
          maxWidth: '800px', marginInline: 'auto',
        }}>
          {content.heading}
        </h2>

        <p style={{
          fontSize: '14px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: 'rgba(248,247,244,0.45)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: '48px',
        }}>
          {content.sub}
        </p>

        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '20px', flexWrap: 'wrap',
        }}>
          <Link
            href={localePath('/contact')}
            className="cta-primary"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '18px 44px',
              backgroundColor: '#C41E1E', color: '#fff',
              fontSize: '12px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.15em',
              textTransform: 'uppercase', textDecoration: 'none',
              transition: 'background 0.3s ease',
            }}
          >
            {content.cta} →
          </Link>
          <Link
            href={localePath('/contact')}
            className="cta-secondary"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '18px 44px',
              backgroundColor: 'transparent', color: '#F8F7F4',
              fontSize: '12px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.15em',
              textTransform: 'uppercase', textDecoration: 'none',
              border: '1px solid rgba(248,247,244,0.2)',
              transition: 'border-color 0.3s ease',
            }}
          >
            {content.ctaSecondary}
          </Link>
        </div>
      </div>

      <style>{`
        .cta-primary:hover { background-color: #A01818 !important; }
        .cta-secondary:hover { border-color: rgba(248,247,244,0.6) !important; }
      `}</style>
    </section>
  )
}