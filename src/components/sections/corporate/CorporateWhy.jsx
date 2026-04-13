'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow: 'Why Corporates Choose Limore',
    headlineTop: 'The Standard',
    headlineBottom: 'Institutions Demand.',
    body: 'When the margin for error is zero and the client in the back seat represents your firm, the vehicle that arrives is a statement. Limore is that statement — backed by a fully integrated operations platform built for enterprise.',
    pillars: [
      {
        num: '01',
        title: 'Live GPS Tracking',
        text: 'Every vehicle broadcasts its position in real time. Your operations team sees the entire fleet on a single map — no calls, no guesswork, no gaps in visibility.',
        tag: 'Operations',
      },
      {
        num: '02',
        title: 'AI Chauffeur Allocation',
        text: 'Our system assigns the closest available, highest-rated chauffeur the moment a booking is confirmed. Preference history, NDA status, and language are factored automatically.',
        tag: 'Dispatch',
      },
      {
        num: '03',
        title: 'Event Bulk Booking',
        text: 'Import hundreds of transfers in a single upload. Ground logistics for conferences, summits, and corporate retreats managed from one dashboard — with live status across every vehicle.',
        tag: 'Events',
      },
      {
        num: '04',
        title: 'Client Portal Access',
        text: 'Contracted clients log in to manage their own bookings, view invoices, and track live vehicles — without calling your team. White-label ready under your corporate identity.',
        tag: 'Self-Service',
      },
      {
        num: '05',
        title: 'White-Label Dashboards',
        text: 'Limore operates invisibly under your brand. Operations dashboards, confirmation emails, and chauffeur uniforms carry your identity. No Limore branding unless you choose it.',
        tag: 'Brand',
      },
    ],
    stats: [
      { value: '24/7', label: 'Operations Coverage' },
      { value: '<2h', label: 'Confirmation Window' },
      { value: '100%', label: 'NDA Compliance' },
    ],
  },

  ar: {
    eyebrow: 'لماذا تختار الشركات ليمور',
    headlineTop: 'المعيار الذي',
    headlineBottom: 'تطلبه المؤسسات.',
    body: 'عندما لا يكون هناك هامش للخطأ والعميل في المقعد الخلفي يمثل شركتك، فإن السيارة التي تصل هي بيان. ليمور هو ذلك البيان — مدعوم بمنصة عمليات متكاملة مصممة للمؤسسات.',
    pillars: [
      { num: '٠١', title: 'تتبع GPS المباشر', text: 'كل مركبة تبث موقعها في الوقت الفعلي. يرى فريق العمليات الأسطول بأكمله على خريطة واحدة — بدون مكالمات أو تخمين.', tag: 'العمليات' },
      { num: '٠٢', title: 'تخصيص السائق بالذكاء الاصطناعي', text: 'يخصص النظام أقرب سائق متاح وأعلى تقييماً فور تأكيد الحجز. يُحسب تلقائياً تاريخ التفضيلات وحالة الاتفاقية واللغة.', tag: 'التوزيع' },
      { num: '٠٣', title: 'حجز الفعاليات الجماعي', text: 'استيراد مئات التحويلات في تحميل واحد. اللوجستيات الأرضية للمؤتمرات والقمم وملتقيات الشركات من لوحة تحكم واحدة.', tag: 'الفعاليات' },
      { num: '٠٤', title: 'بوابة العميل', text: 'يتسجل العملاء المتعاقدون لإدارة حجوزاتهم وعرض الفواتير وتتبع المركبات المباشرة — دون الاتصال بفريقك.', tag: 'الخدمة الذاتية' },
      { num: '٠٥', title: 'لوحات العلامة البيضاء', text: 'تعمل ليمور بشكل غير مرئي تحت علامتك التجارية. لوحات العمليات ورسائل التأكيد وزي السائق تحمل هويتك.', tag: 'العلامة التجارية' },
    ],
    stats: [
      { value: '٢٤/٧', label: 'تغطية العمليات' },
      { value: '<٢س', label: 'نافذة التأكيد' },
      { value: '١٠٠٪', label: 'امتثال اتفاقية السرية' },
    ],
  },

  fr: {
    eyebrow: 'Pourquoi les Entreprises Choisissent Limore',
    headlineTop: 'Le Standard qu\'Exigent',
    headlineBottom: 'les Institutions.',
    body: 'Quand la marge d\'erreur est nulle et que le client à l\'arrière représente votre firme, le véhicule qui arrive est une déclaration. Limore est cette déclaration — soutenu par une plateforme d\'opérations intégrée conçue pour l\'entreprise.',
    pillars: [
      { num: '01', title: 'Suivi GPS en Direct', text: 'Chaque véhicule diffuse sa position en temps réel. Votre équipe voit l\'ensemble de la flotte sur une seule carte — sans appels, sans incertitude.', tag: 'Opérations' },
      { num: '02', title: 'Allocation IA de Chauffeur', text: 'Le système assigne le chauffeur le plus proche et le mieux noté dès la confirmation. Préférences, NDA et langue sont intégrés automatiquement.', tag: 'Dispatch' },
      { num: '03', title: 'Réservation Groupée Événements', text: 'Importez des centaines de transferts en un seul chargement. Logistique terrestre pour conférences et retraites depuis un seul tableau de bord.', tag: 'Événements' },
      { num: '04', title: 'Portail Client', text: 'Les clients sous contrat se connectent pour gérer leurs réservations, consulter les factures et suivre les véhicules en direct — sans appeler votre équipe.', tag: 'Self-Service' },
      { num: '05', title: 'Tableaux de Bord Marque Blanche', text: 'Limore opère invisiblement sous votre identité. Tableaux de bord, e-mails et uniformes portent votre marque. Aucune mention Limore sauf si vous le souhaitez.', tag: 'Marque' },
    ],
    stats: [
      { value: '24/7', label: 'Couverture Opérations' },
      { value: '<2h', label: 'Délai de Confirmation' },
      { value: '100%', label: 'Conformité NDA' },
    ],
  },
}

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const RED   = '#C41E1E'
const BG    = '#FFFFFF'
const TEXT  = '#0A0A0A'
const MUTED = '#777777'
const FONT_D = "'Cormorant Garamond', Georgia, serif"
const FONT_B = "'Inter', 'Helvetica Neue', sans-serif"

export default function CorporateWhy({ locale = 'en' }) {
  const c        = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const secRef   = useRef(null)
  const headRef  = useRef(null)
  const statsRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headRef.current.querySelectorAll('.cw-head-item'),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: headRef.current, start: 'top 84%' },
        }
      )
      // Stats bar
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 88%' },
        }
      )
      // Cards
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 36 },
          {
            opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: i * 0.08,
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        )
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secRef}
      style={{
        backgroundColor: BG,
        padding:         'clamp(64px,10vw,120px) clamp(20px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
        position:        'relative',
        overflow:        'hidden',
      }}
    >
      {/* ── Header ── */}
      <div
        ref={headRef}
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px,100%),1fr))',
          gap:                 'clamp(24px,4vw,64px)',
          marginBottom:        'clamp(40px,6vw,64px)',
          alignItems:          'end',
        }}
      >
        <div>
          {/* Eyebrow */}
          <div className="cw-head-item" style={{
            display:      'flex',
            alignItems:   'center',
            gap:          '12px',
            marginBottom: '18px',
            opacity:      0,
          }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: RED, flexShrink: 0 }} />
            <span style={{
              fontSize:      '10px',
              fontFamily:    FONT_B,
              fontWeight:    500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         RED,
            }}>
              {c.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="cw-head-item" style={{
            fontSize:      'clamp(1.8rem,4vw,4.5rem)',
            fontFamily:    FONT_D,
            fontWeight:    300,
            lineHeight:    1.0,
            letterSpacing: '-0.02em',
            margin:        0,
            opacity:       0,
          }}>
            <span style={{ display: 'block', color: TEXT }}>
              {c.headlineTop}
            </span>
            <span style={{ display: 'block', fontStyle: 'italic', color: RED }}>
              {c.headlineBottom}
            </span>
          </h2>
        </div>

        {/* Body copy */}
        <p className="cw-head-item" style={{
          fontSize:   'clamp(0.85rem,1.3vw,1rem)',
          fontFamily: FONT_B,
          fontWeight: 300,
          color:      MUTED,
          lineHeight: 1.85,
          maxWidth:   '480px',
          margin:     isRTL ? '0 0 0 auto' : '0',
          opacity:    0,
        }}>
          {c.body}
        </p>
      </div>

      {/* ── Stats bar ── */}
      <div
        ref={statsRef}
        style={{
          display:         'flex',
          flexWrap:        'wrap',
          gap:             '1px',
          backgroundColor: '#E8E8E8',
          border:          '1px solid #E8E8E8',
          marginBottom:    'clamp(2px,0.15vw,2px)',
          opacity:         0,
        }}
      >
        {c.stats.map((s, i) => (
          <div key={i} style={{
            flex:            '1 1 160px',
            backgroundColor: '#FAFAFA',
            padding:         'clamp(20px,3vw,28px) clamp(24px,3.5vw,40px)',
            display:         'flex',
            alignItems:      'center',
            gap:             '16px',
            borderLeft:      i > 0 && !isRTL ? '1px solid #E8E8E8' : 'none',
            borderRight:     i > 0 && isRTL  ? '1px solid #E8E8E8' : 'none',
          }}>
            <span style={{
              fontSize:      'clamp(1.4rem,2.5vw,2rem)',
              fontFamily:    FONT_D,
              fontWeight:    300,
              color:         RED,
              lineHeight:    1,
              letterSpacing: '-0.02em',
            }}>
              {s.value}
            </span>
            <span style={{
              fontSize:      '9px',
              fontFamily:    FONT_B,
              fontWeight:    500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color:         MUTED,
              lineHeight:    1.4,
            }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Pillars grid ── */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px,100%),1fr))',
        gap:                 '1px',
        backgroundColor:     '#E8E8E8',
        border:              '1px solid #E8E8E8',
      }}>
        {c.pillars.map((p, i) => (
          <div
            key={i}
            ref={el => (cardRefs.current[i] = el)}
            className="corp-why-card"
            style={{
              backgroundColor: '#FFFFFF',
              padding:         'clamp(28px,4vw,44px)',
              opacity:         0,
              transition:      'background-color 0.3s ease',
              position:        'relative',
              overflow:        'hidden',
            }}
          >
            {/* Ghost number */}
            <span aria-hidden="true" style={{
              position:      'absolute',
              top:           '8px',
              right:         isRTL ? 'auto' : '16px',
              left:          isRTL ? '16px' : 'auto',
              fontSize:      'clamp(3.5rem,7vw,5.5rem)',
              fontFamily:    FONT_D,
              fontWeight:    300,
              color:         'rgba(0,0,0,0.035)',
              lineHeight:    1,
              pointerEvents: 'none',
              userSelect:    'none',
              letterSpacing: '-0.04em',
            }}>
              {p.num}
            </span>

            {/* Tag pill */}
            <div style={{
              display:         'inline-flex',
              alignItems:      'center',
              padding:         '3px 9px',
              backgroundColor: 'rgba(196,30,30,0.07)',
              marginBottom:    '20px',
            }}>
              <span style={{
                fontSize:      '8px',
                fontFamily:    FONT_B,
                fontWeight:    500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         RED,
              }}>
                {p.tag}
              </span>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize:      'clamp(1rem,1.8vw,1.25rem)',
              fontFamily:    FONT_D,
              fontWeight:    500,
              color:         TEXT,
              lineHeight:    1.2,
              margin:        '0 0 12px',
              letterSpacing: '0.01em',
            }}>
              {p.title}
            </h3>

            {/* Accent bar */}
            <div style={{
              width:           '20px',
              height:          '1px',
              backgroundColor: RED,
              marginBottom:    '14px',
            }} />

            {/* Body */}
            <p style={{
              fontSize:   'clamp(0.8rem,1.1vw,0.875rem)',
              fontFamily: FONT_B,
              fontWeight: 300,
              color:      MUTED,
              lineHeight: 1.85,
              margin:     0,
            }}>
              {p.text}
            </p>

            {/* Hover bottom line */}
            <div className="corp-why-line" style={{
              position:        'absolute',
              bottom:          0,
              left:            0,
              right:           0,
              height:          '2px',
              backgroundColor: RED,
              transform:       'scaleX(0)',
              transformOrigin: isRTL ? 'right' : 'left',
              transition:      'transform 0.35s ease',
            }} />
          </div>
        ))}
      </div>

      <style>{`
        .corp-why-card:hover { background-color: #FAFAFA !important; }
        .corp-why-card:hover .corp-why-line { transform: scaleX(1) !important; }
      `}</style>
    </section>
  )
}