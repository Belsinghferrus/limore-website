'use client'

const t = {
  en: {
    eyebrow: 'How We Operate',
    heading: 'The Limore Standard',
    sub:     'Every booking routed through Limore is held to a single standard, regardless of city or operator.',
    items: [
      { code: 'T+15', label: 'Arrival Window',    body: 'Chauffeur must be on location 15 minutes before the scheduled pickup. No exceptions.' },
      { code: '24/7', label: 'Dispatch Coverage', body: 'Limore dispatch is available around the clock. Partners must maintain response capability at all hours.' },
      { code: '100%', label: 'Uniform Protocol',  body: 'Vehicle presentation, chauffeur attire, and client greeting follow Limore\'s exact protocol on every trip.' },
      { code: '0',    label: 'Cancellation Zone', body: 'Zero tolerance for same-day cancellations by the operator. A confirmed booking is a commitment.' },
    ],
  },
  ar: {
    eyebrow: 'كيف نعمل',
    heading: 'معيار ليمور',
    sub:     'كل حجز عبر ليمور يخضع لمعيار واحد بغض النظر عن المدينة أو المشغل.',
    items: [
      { code: 'T+15', label: 'نافذة الوصول',        body: 'يجب أن يكون السائق في الموقع قبل 15 دقيقة من موعد الاستلام المحدد.' },
      { code: '24/7', label: 'تغطية الإرسال',        body: 'إرسال ليمور متاح على مدار الساعة. يجب على الشركاء الحفاظ على القدرة على الاستجابة في جميع الأوقات.' },
      { code: '100%', label: 'بروتوكول موحد',        body: 'عرض المركبة وزي السائق وتحية العميل تتبع بروتوكول ليمور الدقيق في كل رحلة.' },
      { code: '0',    label: 'منطقة الإلغاء الصفرية', body: 'تسامح صفري مع إلغاء المشغل في نفس اليوم. الحجز المؤكد التزام.' },
    ],
  },
  fr: {
    eyebrow: 'Notre Facon d\'Operer',
    heading: 'Le Standard Limore',
    sub:     'Chaque reservation Limore respecte un standard unique, quelle que soit la ville ou l\'operateur.',
    items: [
      { code: 'T+15', label: 'Fenetre d\'Arrivee',   body: 'Le chauffeur doit etre sur place 15 minutes avant le pickup. Sans exception.' },
      { code: '24/7', label: 'Couverture Dispatch',   body: 'Le dispatch Limore est disponible 24h/24. Les partenaires doivent maintenir une capacite de reponse a toute heure.' },
      { code: '100%', label: 'Protocole Uniforme',    body: 'Presentation du vehicule, tenue et accueil client suivent le protocole exact de Limore a chaque trajet.' },
      { code: '0',    label: 'Zone Zero Annulation',  body: 'Tolerance zero pour les annulations le jour meme par l\'operateur. Une reservation confirmee est un engagement.' },
    ],
  },
}

export default function PartnerStandards({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'

  return (
    <section
      style={{
        backgroundColor: '#080808',
        padding:         'clamp(72px,10vw,120px) clamp(24px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
        borderTop:       '1px solid rgba(255,255,255,0.04)',
        borderBottom:    '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 'clamp(48px,6vw,72px)' }}>
        <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E', marginBottom: '16px' }}>
          {content.eyebrow}
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: '#F8F7F4', margin: 0, lineHeight: 1.1 }}>
            {content.heading}
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.78rem,1.1vw,0.88rem)', fontWeight: 300, color: 'rgba(248,247,244,0.38)', lineHeight: 1.8, maxWidth: '340px', margin: 0 }}>
            {content.sub}
          </p>
        </div>
      </div>

      {/* Standards row */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px,100%), 1fr))',
        gap:                 '1px',
        backgroundColor:     'rgba(255,255,255,0.05)',
      }}>
        {content.items.map((item) => (
          <div
            key={item.code}
            style={{
              backgroundColor: '#080808',
              padding:         'clamp(28px,3vw,44px)',
              display:         'flex',
              flexDirection:   'column',
              gap:             '14px',
            }}
          >
            <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.4rem,4vw,3.2rem)', fontWeight: 300, color: '#C41E1E', lineHeight: 1 }}>
              {item.code}
            </span>
            <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(196,30,30,0.4)' }} />
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F8F7F4', margin: 0 }}>
              {item.label}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.76rem,1vw,0.84rem)', fontWeight: 300, color: 'rgba(248,247,244,0.42)', lineHeight: 1.85, margin: 0 }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}