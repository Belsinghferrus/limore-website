'use client'

const t = {
  en: {
    eyebrow: 'Why Limore',
    heading: 'A Network Built on Precision',
    sub:     'We do not partner with everyone. We partner with the best. Here is what you gain.',
    items: [
      {
        num:   '01',
        title: 'Global Clientele',
        body:  'Access corporate accounts, luxury travel agencies, and private clients that Limore already serves across 40+ cities worldwide.',
      },
      {
        num:   '02',
        title: 'Revenue Guarantee',
        body:  'Confirmed bookings routed directly to your fleet through our global dispatch system. No cold outreach. No empty vehicles.',
      },
      {
        num:   '03',
        title: 'Brand Elevation',
        body:  'Operate under the Limore name and standards. Your vehicles appear on our platform, trusted by Fortune 500 companies and luxury brands.',
      },
      {
        num:   '04',
        title: 'Operational Support',
        body:  'Dedicated account manager, 24/7 dispatch coordination, and real-time technology infrastructure at no extra cost.',
      },
      {
        num:   '05',
        title: 'Transparent Rates',
        body:  'Clear revenue split, no hidden deductions. You know exactly what you earn per booking from day one.',
      },
      {
        num:   '06',
        title: 'First-Mover Cities',
        body:  'Paris and Milan are our current priority expansion markets. Secure your city before another operator does.',
      },
    ],
  },
  ar: {
    eyebrow: 'لماذا ليمور',
    heading: 'شبكة مبنية على الدقة',
    sub:     'نحن لا نتعاون مع الجميع. نتعاون مع الأفضل. إليك ما ستكسبه.',
    items: [
      { num: '01', title: 'عملاء عالميون',           body: 'الوصول إلى حسابات الشركات ووكالات السفر الفاخرة والعملاء الخاصين الذين تخدمهم ليمور في أكثر من 40 مدينة.' },
      { num: '02', title: 'ضمان الإيرادات',          body: 'حجوزات مؤكدة موجهة مباشرة إلى أسطولك عبر نظام الإرسال العالمي لدينا.' },
      { num: '03', title: 'رفع مستوى العلامة التجارية', body: 'العمل تحت اسم ومعايير ليمور. تظهر مركباتك على منصتنا الموثوقة من كبرى الشركات.' },
      { num: '04', title: 'دعم تشغيلي',              body: 'مدير حساب مخصص، وتنسيق إرسال على مدار الساعة، وبنية تحتية تقنية متكاملة.' },
      { num: '05', title: 'أسعار شفافة',             body: 'تقسيم واضح للإيرادات بدون خصومات مخفية. تعرف بالضبط ما تكسبه لكل حجز.' },
      { num: '06', title: 'مدن ذات أولوية',          body: 'باريس وميلانو هما سوقا التوسع ذوا الأولوية حاليا. احجز مدينتك قبل مشغل آخر.' },
    ],
  },
  fr: {
    eyebrow: 'Pourquoi Limore',
    heading: 'Un Reseau Bati sur la Precision',
    sub:     'Nous ne nous associons pas avec n\'importe qui. Nous nous associons avec les meilleurs. Voici ce que vous gagnez.',
    items: [
      { num: '01', title: 'Clientele Mondiale',        body: 'Acces aux comptes entreprises, agences de voyage luxe et clients prives que Limore sert dans plus de 40 villes.' },
      { num: '02', title: 'Revenus Garantis',          body: 'Reservations confirmees acheminées directement vers votre flotte via notre systeme de dispatch mondial.' },
      { num: '03', title: 'Elevation de Marque',       body: 'Operez sous le nom et les standards Limore. Vos vehicules apparaissent sur notre plateforme.' },
      { num: '04', title: 'Support Operationnel',      body: 'Manager de compte dedie, coordination dispatch 24/7, et infrastructure technologique incluse.' },
      { num: '05', title: 'Tarifs Transparents',       body: 'Partage des revenus clair, sans deductions cachees. Vous savez exactement ce que vous gagnez.' },
      { num: '06', title: 'Villes Prioritaires',       body: 'Paris et Milan sont nos marches d\'expansion prioritaires. Securisez votre ville avant un autre operateur.' },
    ],
  },
}

export default function PartnerWhy({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'

  return (
    <section
      style={{
        backgroundColor: '#080808',
        padding:         'clamp(72px,10vw,120px) clamp(24px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 'clamp(48px,6vw,80px)' }}>
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

      {/* Red rule */}
      <div style={{ height: '1px', backgroundColor: 'rgba(196,30,30,0.25)', marginBottom: 'clamp(40px,5vw,64px)' }} />

      {/* Grid */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px,100%), 1fr))',
        gap:                 '1px',
        backgroundColor:     'rgba(255,255,255,0.05)',
      }}>
        {content.items.map((item) => (
          <div
            key={item.num}
            style={{
              backgroundColor: '#080808',
              padding:         'clamp(28px,3vw,40px)',
              display:         'flex',
              flexDirection:   'column',
              gap:             '16px',
            }}
          >
            <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.2rem', fontWeight: 300, color: 'rgba(196,30,30,0.22)', lineHeight: 1 }}>
              {item.num}
            </span>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F8F7F4', margin: 0 }}>
              {item.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.78rem,1vw,0.86rem)', fontWeight: 300, color: 'rgba(248,247,244,0.42)', lineHeight: 1.85, margin: 0 }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}