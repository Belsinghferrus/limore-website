const t = {
    en: {
      label: 'Trusted By',
      heading: 'Brands That Trust\nLimore Worldwide',
      categories: [
        {
          name: 'Hospitality',
          clients: ['Kerzner Group', 'Meydan Hotels', 'VOCO Monaco', 'Amazonica'],
        },
        {
          name: 'Luxury Brands',
          clients: ['Prada', 'Gucci', 'Louis Vuitton', 'Chanel', 'Piaget', 'Jimmy Choo'],
        },
        {
          name: 'Corporate',
          clients: ['Denevo Corporate', 'Liberty Capital', 'Dubai Racing Club', 'Reliance Middle East'],
        },
        {
          name: 'Private Jet',
          clients: ['Jetex', 'Hotac', 'UAS', 'JET365 Corp'],
        },
        {
          name: 'Events',
          clients: ['Formula 1', 'Dubai Airshow', 'IDEX', 'COP 28', 'Milan Fashion Week', 'FIFA'],
        },
      ],
    },
    ar: {
      label: 'يثق بنا',
      heading: 'العلامات التجارية التي\nتثق بليمور عالميا',
      categories: [
        { name: 'الضيافة', clients: ['Kerzner Group', 'Meydan Hotels', 'VOCO Monaco', 'Amazonica'] },
        { name: 'العلامات الفاخرة', clients: ['Prada', 'Gucci', 'Louis Vuitton', 'Chanel', 'Piaget', 'Jimmy Choo'] },
        { name: 'الشركات', clients: ['Denevo Corporate', 'Liberty Capital', 'Dubai Racing Club', 'Reliance Middle East'] },
        { name: 'الطيران الخاص', clients: ['Jetex', 'Hotac', 'UAS', 'JET365 Corp'] },
        { name: 'الفعاليات', clients: ['Formula 1', 'Dubai Airshow', 'IDEX', 'COP 28', 'Milan Fashion Week', 'FIFA'] },
      ],
    },
    fr: {
      label: 'Ils Nous Font Confiance',
      heading: 'Les Marques Qui Font\nConfiance a Limore',
      categories: [
        { name: 'Hospitalite', clients: ['Kerzner Group', 'Meydan Hotels', 'VOCO Monaco', 'Amazonica'] },
        { name: 'Marques Luxe', clients: ['Prada', 'Gucci', 'Louis Vuitton', 'Chanel', 'Piaget', 'Jimmy Choo'] },
        { name: 'Corporate', clients: ['Denevo Corporate', 'Liberty Capital', 'Dubai Racing Club', 'Reliance Middle East'] },
        { name: 'Jet Prive', clients: ['Jetex', 'Hotac', 'UAS', 'JET365 Corp'] },
        { name: 'Evenements', clients: ['Formula 1', 'Dubai Airshow', 'IDEX', 'COP 28', 'Milan Fashion Week', 'FIFA'] },
      ],
    },
  }
  
  export default function ClientSection({ locale = 'en' }) {
    const content = t[locale] || t.en
    const isRTL = locale === 'ar'
  
    return (
      <section
        className="section-padding"
        style={{
          backgroundColor: '#F8F7F4',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      >
        <div className="container-default">
  
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: '12px', marginBottom: '20px',
            }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
              <span style={{
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#C41E1E',
              }}>
                {content.label}
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, color: '#0A0A0A',
              lineHeight: 1.1, whiteSpace: 'pre-line',
            }}>
              {content.heading}
            </h2>
          </div>
  
          {/* Client categories */}
          <div className="client-grid">
            {content.categories.map((cat, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid #E5E4E0',
                  paddingTop: '28px',
                  paddingBottom: '28px',
                }}
              >
                <p style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: '#C41E1E',
                  marginBottom: '16px',
                }}>
                  {cat.name}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.clients.map((client, j) => (
                    <span
                      key={j}
                      style={{
                        padding: '6px 14px',
                        border: '1px solid #E5E4E0',
                        fontSize: '12px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        color: '#6B6B6B',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
        </div>
  
        <style>{`
          .client-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0;
          }
          @media (min-width: 768px) {
            .client-grid { grid-template-columns: 1fr 1fr; gap: 0 64px; }
          }
        `}</style>
      </section>
    )
  }