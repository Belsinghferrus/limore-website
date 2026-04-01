const t = {
    en: {
      stats: [
        { value: '12+', label: 'Global Cities' },
        { value: '500+', label: 'Corporate Clients' },
        { value: '24/7', label: 'Operations' },
        { value: '100%', label: 'On-Time Guarantee' },
      ],
    },
    ar: {
      stats: [
        { value: '12+', label: 'مدينة عالمية' },
        { value: '500+', label: 'عميل مؤسسي' },
        { value: '24/7', label: 'عمليات مستمرة' },
        { value: '100%', label: 'ضمان الالتزام بالوقت' },
      ],
    },
    fr: {
      stats: [
        { value: '12+', label: 'Villes Mondiales' },
        { value: '500+', label: 'Clients Corporate' },
        { value: '24/7', label: 'Operations' },
        { value: '100%', label: 'Garantie Ponctualite' },
      ],
    },
  }
  
  export default function TrustBar({ locale = 'en' }) {
    const content = t[locale] || t.en
    const isRTL = locale === 'ar'
  
    return (
      <section
        style={{
          backgroundColor: '#111111',
          borderTop: '1px solid #1A1A1A',
          borderBottom: '1px solid #1A1A1A',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      >
        <div className="container-default">
          <div className="trust-grid">
            {content.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '36px 24px',
                  borderRight: i < content.stats.length - 1 ? '1px solid #2A2A2A' : 'none',
                  textAlign: 'center',
                }}
                className="trust-item"
              >
                <span style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400,
                  color: '#F8F7F4',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontSize: '10px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
  
        <style>{`
          .trust-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
          @media (min-width: 768px) {
            .trust-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          @media (max-width: 767px) {
            .trust-item {
              border-right: none !important;
              border-bottom: 1px solid #2A2A2A;
            }
            .trust-item:nth-child(odd) {
              border-right: 1px solid #2A2A2A !important;
            }
            .trust-item:last-child {
              border-bottom: none;
            }
          }
        `}</style>
      </section>
    )
  }