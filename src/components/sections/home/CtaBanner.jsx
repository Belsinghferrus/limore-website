import Link from 'next/link'

const t = {
  en: {
    eyebrow: 'Begin Your Journey',
    headlineTop: 'Two ways to',
    headlineBottom: 'experience Limore.',
    sub: 'Whether you represent a corporation or travelling as a private guest — every Limore journey is handled with the same precision.',
    cards: [
      {
        tag: '01 — Corporate',
        title: 'Corporate\nAccess',
        desc: 'Priority scheduling, dedicated account management, and preferred rates across all Limore cities. Built for organisations that demand consistency.',
        cta: 'Request a Proposal',
        href: '/corporate-solutions',
        accent: true,
      },
      {
        tag: '02 — Private',
        title: 'Request a\nChauffeur',
        desc: 'Book a single journey, a full day, or an airport transfer. Your chauffeur confirms within two hours. Available 24 hours, seven days a week.',
        cta: 'Book Now',
        href: '/contact',
        accent: false,
      },
    ],
    note: 'All bookings handled with complete discretion.',
  },
  ar: {
    eyebrow: 'ابدأ رحلتك',
    headlineTop: 'طريقتان',
    headlineBottom: 'لتجربة ليمور.',
    sub: 'سواء كنت تمثل شركة أو تسافر كضيف خاص — كل رحلة ليمور تُعالج بنفس الدقة والاحتراف.',
    cards: [
      {
        tag: '٠١ — مؤسسي',
        title: 'الوصول\nالمؤسسي',
        desc: 'جدولة ذات أولوية، إدارة حساب مخصصة، وأسعار مفضلة في جميع مدن ليمور. مصمم للمؤسسات التي تتطلب الاتساق.',
        cta: 'طلب عرض سعر',
        href: '/contact',
        accent: true,
      },
      {
        tag: '٠٢ — خاص',
        title: 'طلب\nسائق',
        desc: 'احجز رحلة واحدة، يومًا كاملاً، أو نقل من المطار. يؤكد سائقك خلال ساعتين. متاح ٢٤ ساعة، سبعة أيام في الأسبوع.',
        cta: 'احجز الآن',
        href: '/contact',
        accent: false,
      },
    ],
    note: 'جميع الحجوزات تُعالج بسرية تامة.',
  },
  fr: {
    eyebrow: 'Commencez Votre Voyage',
    headlineTop: 'Deux façons de',
    headlineBottom: 'vivre Limore.',
    sub: 'Que vous représentiez une entreprise ou voyagiez en tant que client privé — chaque trajet Limore est géré avec la même précision.',
    cards: [
      {
        tag: '01 — Corporate',
        title: 'Accès\nCorporate',
        desc: 'Planification prioritaire, gestion de compte dédiée et tarifs préférentiels dans toutes les villes Limore. Conçu pour les organisations exigeantes.',
        cta: 'Demander une Proposition',
        href: '/contact',
        accent: true,
      },
      {
        tag: '02 — Privé',
        title: 'Demander un\nChauffeur',
        desc: 'Réservez un trajet unique, une journée complète ou un transfert aéroport. Votre chauffeur confirme en deux heures. Disponible 24h/24, 7j/7.',
        cta: 'Réserver',
        href: '/contact',
        accent: false,
      },
    ],
    note: 'Toutes les réservations traitées avec une entière discrétion.',
  },
}

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const RED      = '#C41E1E'
const RED_DIM  = 'rgba(196,30,30,0.12)'
const RED_LINE = 'rgba(196,30,30,0.35)'
const BG       = '#0A0A0A'
const CARD_A   = '#0F0F0F'   // accent card bg
const CARD_B   = '#0D0D0D'   // plain card bg
const TEXT     = '#F8F7F4'
const MUTED    = 'rgba(248,247,244,0.45)'
const FAINT    = 'rgba(248,247,244,0.18)'
const BORDER   = 'rgba(248,247,244,0.08)'
const FONT_D   = "'Cormorant Garamond', Georgia, serif"
const FONT_B   = "'Inter', 'Helvetica Neue', sans-serif"

export default function CtaBanner({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'
  const path    = (href) => `/${locale}${href}`

  return (
    <section
      style={{
        backgroundColor: BG,
        borderTop:       '1px solid rgba(248,247,244,0.06)',
        direction:       isRTL ? 'rtl' : 'ltr',
        position:        'relative',
        overflow:        'hidden',
        padding:         'clamp(72px,10vw,128px) clamp(20px,6vw,96px)',
      }}
    >
      {/* Background red glow — center */}
      <div style={{
        position:      'absolute',
        top:           '50%',
        left:          '50%',
        transform:     'translate(-50%, -50%)',
        width:         '800px',
        height:        '500px',
        background:    'radial-gradient(ellipse, rgba(196,30,30,0.07) 0%, transparent 68%)',
        pointerEvents: 'none',
      }} />

      {/* Top gradient rule */}
      <div style={{
        position:      'absolute',
        top:           0,
        left:          '10%',
        right:         '10%',
        height:        '1px',
        background:    'linear-gradient(to right, transparent, rgba(196,30,30,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', marginInline: 'auto' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,6vw,72px)' }}>

          {/* Eyebrow */}
          <div style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            '12px',
            marginBottom:   '24px',
          }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: RED }} />
            <span style={{
              fontSize:      '10px',
              fontFamily:    FONT_B,
              fontWeight:    500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         RED,
            }}>
              {content.eyebrow}
            </span>
            <div style={{ width: '28px', height: '1px', backgroundColor: RED }} />
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize:      'clamp(2.2rem,5.5vw,5rem)',
            fontFamily:    FONT_D,
            fontWeight:    300,
            lineHeight:    0.95,
            letterSpacing: '-0.02em',
            margin:        '0 0 clamp(16px,2.5vw,24px)',
            color:         TEXT,
          }}>
            <span style={{ display: 'block' }}>{content.headlineTop}</span>
            <span style={{ display: 'block', fontStyle: 'italic', color: RED }}>
              {content.headlineBottom}
            </span>
          </h2>

          {/* Sub */}
          <p style={{
            fontSize:     'clamp(0.84rem,1.2vw,0.96rem)',
            fontFamily:   FONT_B,
            fontWeight:   300,
            lineHeight:   1.9,
            color:        MUTED,
            margin:       '0 auto',
            maxWidth:     '520px',
          }}>
            {content.sub}
          </p>
        </div>

        {/* ── Two cards ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap:                 '1px',
          backgroundColor:     BORDER,
          border:              `1px solid ${BORDER}`,
        }}>
          {content.cards.map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: card.accent ? CARD_A : CARD_B,
                padding:         'clamp(32px,4vw,52px)',
                display:         'flex',
                flexDirection:   'column',
                gap:             '0',
                position:        'relative',
                overflow:        'hidden',
              }}
            >
              {/* Card top accent line */}
              <div style={{
                position:        'absolute',
                top:             0,
                left:            0,
                right:           0,
                height:          card.accent ? '2px' : '1px',
                backgroundColor: card.accent ? RED : 'rgba(248,247,244,0.06)',
              }} />

              {/* Subtle corner glow on accent card */}
              {card.accent && (
                <div style={{
                  position:      'absolute',
                  top:           '-60px',
                  right:         '-60px',
                  width:         '220px',
                  height:        '220px',
                  background:    'radial-gradient(circle, rgba(196,30,30,0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
              )}

              {/* Tag */}
              <span style={{
                fontSize:      '9px',
                fontFamily:    FONT_B,
                fontWeight:    500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color:         card.accent ? RED : FAINT,
                marginBottom:  '28px',
                display:       'block',
              }}>
                {card.tag}
              </span>

              {/* Title */}
              <h3 style={{
                fontSize:      'clamp(1.8rem,3.5vw,3rem)',
                fontFamily:    FONT_D,
                fontWeight:    300,
                lineHeight:    1.0,
                letterSpacing: '-0.02em',
                color:         TEXT,
                marginBottom:  '20px',
                whiteSpace:    'pre-line',
              }}>
                {card.title}
              </h3>

              {/* Divider */}
              <div style={{
                width:           '36px',
                height:          '1px',
                backgroundColor: card.accent ? RED : FAINT,
                marginBottom:    '20px',
              }} />

              {/* Description */}
              <p style={{
                fontSize:    'clamp(0.82rem,1.1vw,0.9rem)',
                fontFamily:  FONT_B,
                fontWeight:  300,
                lineHeight:  1.95,
                color:       MUTED,
                margin:      '0 0 clamp(28px,4vw,44px)',
                flex:        1,
              }}>
                {card.desc}
              </p>

              {/* CTA */}
              <Link
                href={path(card.href)}
                style={{
                  display:         'inline-flex',
                  alignItems:      'center',
                  gap:             '12px',
                  padding:         '15px 32px',
                  backgroundColor: card.accent ? RED : 'transparent',
                  color:           TEXT,
                  fontSize:        '10px',
                  fontFamily:      FONT_B,
                  fontWeight:      500,
                  letterSpacing:   '0.2em',
                  textTransform:   'uppercase',
                  textDecoration:  'none',
                  borderTop:       card.accent ? 'none' : `1px solid ${BORDER}`,
                  borderRight:     card.accent ? 'none' : `1px solid ${BORDER}`,
                  borderBottom:    card.accent ? 'none' : `1px solid ${BORDER}`,
                  borderLeft:      card.accent ? 'none' : `1px solid ${BORDER}`,
                  alignSelf:       'flex-start',
                  transition:      'background-color 0.25s ease, border-color 0.25s ease',
                }}
                className={card.accent ? 'cta-accent' : 'cta-ghost'}
              >
                <span>{card.cta}</span>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                  <path d="M1 4h12M9 1l4 3-4 3"
                    stroke="currentColor" strokeWidth="1.1"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <div style={{
          display:       'flex',
          alignItems:    'center',
          justifyContent:'center',
          gap:           '10px',
          marginTop:     'clamp(24px,3vw,40px)',
        }}>
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
            <path d="M5.5 1L1 3.5v3c0 3 2 5 4.5 5.5C8 11.5 10 9.5 10 6.5v-3L5.5 1z"
              stroke="rgba(248,247,244,0.2)" strokeWidth="0.9"/>
          </svg>
          <span style={{
            fontSize:      '9px',
            fontFamily:    FONT_B,
            fontWeight:    300,
            letterSpacing: '0.12em',
            color:         FAINT,
          }}>
            {content.note}
          </span>
        </div>
      </div>

      <style>{`
        .cta-accent:hover { background-color: #A01818 !important; }
        .cta-ghost:hover  { border-color: rgba(248,247,244,0.35) !important; color: #F8F7F4 !important; }
      `}</style>
    </section>
  )
}