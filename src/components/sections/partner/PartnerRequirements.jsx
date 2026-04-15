'use client'

const t = {
  en: {
    eyebrow:  'Who We Work With',
    heading:  'The Standard We Expect',
    sub:      'Limore\'s reputation is built on consistency. Every partner must meet these baseline requirements before onboarding.',
    fleet: {
      label: 'Fleet',
      items: [
        'Minimum 3 vehicles in service',
        'Vehicles no older than 4 years',
        'Executive class minimum: Mercedes E-Class, BMW 5 Series, or equivalent',
        'All vehicles must be black, dark navy, or deep grey',
        'Interior: clean, no visible wear, leather or premium upholstery',
      ],
    },
    chauffeur: {
      label: 'Chauffeurs',
      items: [
        'Valid commercial driving licence for the operating city',
        'Minimum 3 years professional chauffeur experience',
        'Professional attire at all times (dark suit, tie optional)',
        'Fluent in English plus local language',
        'Background check clearance required',
      ],
    },
    ops: {
      label: 'Operations',
      items: [
        'Ability to receive bookings 24 hours in advance',
        'Response time under 15 minutes to any dispatch',
        'GPS tracking enabled on all vehicles',
        'Invoicing capability in EUR or GBP',
        'Liability insurance minimum as per local regulation',
      ],
    },
  },
  ar: {
    eyebrow:  'من نعمل معه',
    heading:  'المعيار الذي نتوقعه',
    sub:      'سمعة ليمور مبنية على الاتساق. يجب أن يستوفي كل شريك هذه المتطلبات الأساسية قبل الانضمام.',
    fleet:     { label: 'الأسطول',    items: ['3 مركبات على الأقل', 'لا يزيد عمر المركبات عن 4 سنوات', 'الحد الأدنى: مرسيدس E أو BMW الفئة 5', 'جميع المركبات سوداء أو كحلية داكنة', 'داخلية نظيفة بمقاعد جلدية'] },
    chauffeur: { label: 'السائقون',   items: ['رخصة قيادة تجارية سارية', 'خبرة لا تقل عن 3 سنوات', 'زي رسمي داكن في جميع الأوقات', 'إجادة الإنجليزية واللغة المحلية', 'تصريح أمني مطلوب'] },
    ops:       { label: 'العمليات',   items: ['استقبال الحجوزات قبل 24 ساعة', 'وقت الاستجابة أقل من 15 دقيقة', 'تتبع GPS على جميع المركبات', 'القدرة على الفوترة باليورو أو الجنيه', 'تأمين المسؤولية وفق اللوائح المحلية'] },
  },
  fr: {
    eyebrow:  'Avec Qui Nous Travaillons',
    heading:  'Le Standard Que Nous Exigeons',
    sub:      'La reputation de Limore est fondee sur la coherence. Chaque partenaire doit satisfaire ces exigences avant l\'integration.',
    fleet:     { label: 'Flotte',      items: ['Minimum 3 vehicules en service', 'Vehicules de moins de 4 ans', 'Minimum Mercedes Classe E ou BMW Serie 5', 'Tous les vehicules noirs, bleu marine ou gris fonce', 'Interieur propre, sellerie cuir ou premium'] },
    chauffeur: { label: 'Chauffeurs',  items: ['Permis de conduire commercial valide', 'Minimum 3 ans d\'experience professionnelle', 'Tenue professionnelle en permanence', 'Anglais courant et langue locale', 'Casier judiciaire vierge requis'] },
    ops:       { label: 'Operations',  items: ['Reception des reservations 24h a l\'avance', 'Temps de reponse inferieur a 15 minutes', 'Suivi GPS active sur tous les vehicules', 'Facturation en EUR ou GBP', 'Assurance responsabilite civile conforme'] },
  },
}

export default function PartnerRequirements({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'

  const cols = [content.fleet, content.chauffeur, content.ops]

  return (
    <section
      style={{
        backgroundColor: '#050505',
        padding:         'clamp(72px,10vw,120px) clamp(24px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
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

      {/* 3 columns */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px,100%), 1fr))',
        gap:                 '1px',
        backgroundColor:     'rgba(255,255,255,0.05)',
      }}>
        {cols.map((col) => (
          <div
            key={col.label}
            style={{
              backgroundColor: '#050505',
              padding:         'clamp(28px,3vw,40px)',
            }}
          >
            {/* Column label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '2px', height: '20px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F8F7F4' }}>
                {col.label}
              </span>
            </div>

            {/* Items */}
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {col.items.map((item, i) => (
                <li
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true">
                    <circle cx="6" cy="6" r="5" stroke="rgba(196,30,30,0.4)" strokeWidth="1"/>
                    <circle cx="6" cy="6" r="2" fill="#C41E1E"/>
                  </svg>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.76rem,1vw,0.84rem)', fontWeight: 300, color: 'rgba(248,247,244,0.5)', lineHeight: 1.7 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}