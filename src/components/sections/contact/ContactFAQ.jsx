'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Brand tokens — WHITE theme ────────────────────────────────────────────────
const RED     = '#C41E1E'
const BG      = '#FFFFFF'
const SURFACE = '#F8F7F4'
const BORDER  = '#E5E4E0'
const TEXT    = '#0A0A0A'
const MUTED   = '#6B6B6B'
const FAINT   = '#ADADAD'
const FONT_D  = "'Cormorant Garamond', Georgia, serif"
const FONT_B  = "'Inter', 'Helvetica Neue', sans-serif"

// ─── Translations ──────────────────────────────────────────────────────────────
const copy = {
  en: {
    dir:            'ltr',
    eyebrow:        'FAQ',
    headlineTop:    'Questions',
    headlineBottom: 'Answered.',
    sub:            'Everything you need to know about Limore services, bookings, and membership.',
    faqs: [
      {
        q: 'How quickly do you respond to enquiries?',
        a: 'All enquiries submitted via our booking form or WhatsApp receive a response within two business hours. For urgent requests, we recommend calling our reservations line directly — our team is available 24 hours a day, seven days a week.',
      },
      {
        q: 'Can I make a same-day or last-minute booking?',
        a: 'Yes. We accommodate same-day bookings subject to fleet and chauffeur availability. For same-day requests, please contact us directly via phone or WhatsApp for the fastest response. We recommend booking at least 4 hours in advance where possible.',
      },
      {
        q: 'What is Limore 360?',
        a: 'Limore 360 is our corporate membership programme — a pre-purchased block of chauffeur hours available in three tiers: Essential (20 hours), Prestige (50 hours), and Bespoke (custom volume). Members receive priority scheduling, a dedicated advisor, and preferred rates across all Limore services.',
      },
      {
        q: 'Do you operate internationally?',
        a: 'Yes. Limore provides ground transportation in Dubai, Abu Dhabi, and key international cities including London, Paris, Riyadh, and Doha. For destinations not listed, our team will arrange trusted partner services to maintain the same standard of excellence.',
      },
      {
        q: 'What vehicles are available?',
        a: 'Our fleet includes a curated selection of executive and luxury vehicles — Mercedes-Benz S-Class, BMW 7 Series, Range Rover, Rolls-Royce, and luxury vans for group transfers. Specific vehicle requests can be noted in the booking form under Vehicle Preference.',
      },
      {
        q: 'Is my personal information kept confidential?',
        a: 'Absolutely. Discretion is foundational to the Limore experience. All guest information, travel itineraries, and booking details are handled with the highest level of confidentiality and are never shared with third parties.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfer, corporate account billing (for contracted clients), and major credit cards. Limore 360 members are invoiced on a monthly cycle. For specific payment arrangements, please speak directly with your Limore advisor.',
      },
      {
        q: 'Can I request a specific chauffeur?',
        a: 'Limore 360 Prestige and Bespoke members may request a preferred chauffeur, subject to availability. We note all preferences and aim to honour them on every booking. All Limore chauffeurs are vetted, professionally trained, and bound by strict confidentiality standards.',
      },
    ],
  },

  ar: {
    dir:            'rtl',
    eyebrow:        'الأسئلة الشائعة',
    headlineTop:    'أسئلة',
    headlineBottom: 'تمت الإجابة عليها.',
    sub:            'كل ما تحتاج معرفته عن خدمات ليمور والحجوزات والعضوية.',
    faqs: [
      {
        q: 'كم من الوقت يستغرق الرد على الاستفسارات؟',
        a: 'تتلقى جميع الاستفسارات المقدمة عبر نموذج الحجز أو واتساب ردًا خلال ساعتي عمل. للطلبات العاجلة، نوصي بالاتصال المباشر بخط الحجوزات — فريقنا متاح على مدار الساعة، سبعة أيام في الأسبوع.',
      },
      {
        q: 'هل يمكنني الحجز في نفس اليوم؟',
        a: 'نعم. نستوعب الحجوزات في نفس اليوم بحسب توفر الأسطول والسائق. للطلبات العاجلة، يرجى التواصل معنا مباشرةً عبر الهاتف أو واتساب. نوصي بالحجز قبل 4 ساعات على الأقل كلما أمكن.',
      },
      {
        q: 'ما هو ليمور ٣٦٠؟',
        a: 'ليمور ٣٦٠ هو برنامج العضوية المؤسسية لدينا — كتلة مسبقة الشراء من ساعات السائق متاحة في ثلاثة مستويات: الأساسي (٢٠ ساعة) والبريستيج (٥٠ ساعة) والمخصص. يحصل الأعضاء على جدولة ذات أولوية ومستشار مخصص وأسعار مفضلة.',
      },
      {
        q: 'هل تعملون على مستوى دولي؟',
        a: 'نعم. توفر ليمور خدمات النقل البري في دبي وأبوظبي والمدن الدولية الرئيسية بما فيها لندن وباريس والرياض والدوحة. للوجهات غير المدرجة، سيرتب فريقنا خدمات شركاء موثوقين.',
      },
      {
        q: 'ما هي السيارات المتاحة؟',
        a: 'يضم أسطولنا مجموعة مختارة من السيارات التنفيذية والفاخرة — مرسيدس بنز الفئة S، BMW الفئة 7، رينج روفر، رولز رويس، وحافلات فاخرة للتنقلات الجماعية.',
      },
      {
        q: 'هل معلوماتي الشخصية سرية؟',
        a: 'بالتأكيد. السرية أساس تجربة ليمور. جميع معلومات الضيف وجداول السفر وتفاصيل الحجز تُعالج بأعلى مستوى من السرية ولا تُشارك أبدًا مع أطراف ثالثة.',
      },
      {
        q: 'ما طرق الدفع المقبولة؟',
        a: 'نقبل التحويل المصرفي والفوترة على الحساب المؤسسي للعملاء المتعاقدين وبطاقات الائتمان الرئيسية. يتم إصدار فواتير لأعضاء ليمور ٣٦٠ على دورة شهرية.',
      },
      {
        q: 'هل يمكنني طلب سائق معين؟',
        a: 'يمكن لأعضاء ليمور ٣٦٠ بريستيج والمخصص طلب سائق مفضل بحسب التوفر. نسجل جميع التفضيلات ونسعى إلى تلبيتها في كل حجز.',
      },
    ],
  },

  fr: {
    dir:            'ltr',
    eyebrow:        'FAQ',
    headlineTop:    'Questions',
    headlineBottom: 'Répondues.',
    sub:            'Tout ce que vous devez savoir sur les services, réservations et adhésions Limore.',
    faqs: [
      {
        q: 'Quel est le délai de réponse à une demande ?',
        a: 'Toutes les demandes soumises via notre formulaire de réservation ou WhatsApp reçoivent une réponse dans les deux heures ouvrables. Pour les demandes urgentes, nous recommandons d\'appeler directement notre ligne de réservations — notre équipe est disponible 24h/24, 7j/7.',
      },
      {
        q: 'Puis-je faire une réservation le jour même ?',
        a: 'Oui. Nous acceptons les réservations le jour même selon la disponibilité de la flotte et des chauffeurs. Pour les demandes urgentes, contactez-nous directement par téléphone ou WhatsApp. Nous recommandons de réserver au moins 4 heures à l\'avance si possible.',
      },
      {
        q: 'Qu\'est-ce que Limore 360 ?',
        a: 'Limore 360 est notre programme d\'adhésion corporate — un bloc d\'heures de chauffeur pré-achetées disponible en trois niveaux : Essential (20 heures), Prestige (50 heures) et Bespoke (volume personnalisé). Les membres bénéficient d\'une planification prioritaire, d\'un conseiller dédié et de tarifs préférentiels.',
      },
      {
        q: 'Opérez-vous à l\'international ?',
        a: 'Oui. Limore fournit des services de transport terrestre à Dubaï, Abu Dhabi et dans les principales villes internationales notamment Londres, Paris, Riyad et Doha. Pour les destinations non listées, notre équipe organisera des services partenaires de confiance.',
      },
      {
        q: 'Quels véhicules sont disponibles ?',
        a: 'Notre flotte comprend une sélection de véhicules exécutifs et de luxe — Mercedes-Benz Classe S, BMW Série 7, Range Rover, Rolls-Royce et vans de luxe pour les transferts de groupe.',
      },
      {
        q: 'Mes informations personnelles sont-elles confidentielles ?',
        a: 'Absolument. La discrétion est au cœur de l\'expérience Limore. Toutes les informations des clients, itinéraires et détails de réservation sont traités avec le plus haut niveau de confidentialité et ne sont jamais partagés avec des tiers.',
      },
      {
        q: 'Quels modes de paiement acceptez-vous ?',
        a: 'Nous acceptons le virement bancaire, la facturation sur compte corporate (pour les clients sous contrat) et les principales cartes de crédit. Les membres Limore 360 sont facturés mensuellement.',
      },
      {
        q: 'Puis-je demander un chauffeur spécifique ?',
        a: 'Les membres Limore 360 Prestige et Bespoke peuvent demander un chauffeur préféré, sous réserve de disponibilité. Nous notons toutes les préférences et nous efforçons de les respecter à chaque réservation.',
      },
    ],
  },
}

// ─── Individual FAQ item ───────────────────────────────────────────────────────
function FAQItem({ item, index, isOpen, onToggle, dir }) {
  const bodyRef    = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const body    = bodyRef.current
    const content = contentRef.current
    if (!body || !content) return

    if (isOpen) {
      gsap.fromTo(body,
        { height: 0, opacity: 0 },
        {
          height:     content.offsetHeight,
          opacity:    1,
          duration:   0.45,
          ease:       'power3.out',
          onComplete: () => { body.style.height = 'auto' },
        }
      )
    } else {
      gsap.to(body, {
        height:   0,
        opacity:  0,
        duration: 0.35,
        ease:     'power2.in',
      })
    }
  }, [isOpen])

  return (
    <div
      className="cfaq-item"
      style={{
        borderBottom: `1px solid ${BORDER}`,
        overflow:     'hidden',
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width:           '100%',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          gap:             '16px',
          padding:         'clamp(16px,2.5vw,22px) 0',
          backgroundColor: 'transparent',
          border:          'none',
          cursor:          'pointer',
          textAlign:       dir === 'rtl' ? 'right' : 'left',
          direction:       dir,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flex: 1 }}>
          {/* Index number */}
          <span style={{
            fontSize:      '9px',
            fontFamily:    FONT_B,
            fontWeight:    500,
            letterSpacing: '0.15em',
            color:         isOpen ? RED : FAINT,
            marginTop:     '3px',
            flexShrink:    0,
            transition:    'color 0.25s ease',
            minWidth:      '20px',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Question text */}
          <span style={{
            fontSize:   'clamp(0.92rem,1.5vw,1.08rem)',
            fontFamily: FONT_D,
            fontWeight: 500,
            color:      isOpen ? TEXT : '#3A3A3A',
            lineHeight: 1.4,
            transition: 'color 0.25s ease',
          }}>
            {item.q}
          </span>
        </div>

        {/* Plus / Minus icon */}
        <div style={{
          width:           '28px',
          height:          '28px',
          flexShrink:      0,
          border:          `1px solid ${isOpen ? 'rgba(196,30,30,0.35)' : BORDER}`,
          backgroundColor: isOpen ? 'rgba(196,30,30,0.06)' : SURFACE,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          transition:      'background-color 0.25s ease, border-color 0.25s ease',
        }}>
          <svg
            width="10" height="10" viewBox="0 0 10 10"
            fill="none" aria-hidden="true"
            style={{
              color:      isOpen ? RED : MUTED,
              transition: 'color 0.25s ease',
            }}
          >
            <path
              d="M5 1v8M1 5h8"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              style={{
                transformOrigin: 'center',
                transform:       isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                transition:      'transform 0.3s ease',
              }}
            />
          </svg>
        </div>
      </button>

      {/* Answer body */}
      <div ref={bodyRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <div
          ref={contentRef}
          style={{
            paddingBottom: 'clamp(16px,2.5vw,22px)',
            paddingLeft:   dir === 'rtl' ? '0' : '34px',
            paddingRight:  dir === 'rtl' ? '34px' : '0',
            direction:     dir,
          }}
        >
          <p style={{
            fontSize:   'clamp(0.86rem,1.15vw,0.96rem)',
            fontFamily: FONT_B,
            fontWeight: 400,
            lineHeight: 1.95,
            color:      MUTED,
            margin:     0,
            maxWidth:   '680px',
          }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function ContactFAQ({ locale = 'en' }) {
  const c               = copy[locale] || copy.en
  const [open, setOpen] = useState(0)

  const sectionRef = useRef(null)
  const headRef    = useRef(null)
  const listRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current.querySelectorAll('.cfaq-head-item'),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.75,
          ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: headRef.current, start: 'top 86%' },
        }
      )
      gsap.fromTo(
        listRef.current.querySelectorAll('.cfaq-item'),
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.6,
          ease: 'power3.out', stagger: 0.07,
          scrollTrigger: { trigger: listRef.current, start: 'top 84%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const toggle = index => setOpen(prev => (prev === index ? null : index))

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: BG,
        padding:         'clamp(64px,10vw,120px) clamp(20px,6vw,96px)',
        direction:       c.dir,
        position:        'relative',
        overflow:        'hidden',
      }}
    >
      {/* Top red accent line */}
      <div style={{
        position:      'absolute',
        top:           0,
        left:          '8%',
        right:         '8%',
        height:        '1px',
        background:    'linear-gradient(to right, transparent, rgba(196,30,30,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      {/* ── Layout: Header left, FAQ list right ── */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap:                 'clamp(40px,7vw,96px)',
        alignItems:          'start',
      }}>

        {/* ── LEFT — sticky header ── */}
        <div
          ref={headRef}
          style={{
            position: 'sticky',
            top:      'clamp(80px,10vw,120px)',
          }}
        >
          {/* Eyebrow */}
          <div className="cfaq-head-item" style={{
            display:      'flex',
            alignItems:   'center',
            gap:          '12px',
            marginBottom: '20px',
            opacity:      0,
          }}>
            <div style={{
              width:           '28px',
              height:          '1px',
              backgroundColor: RED,
              flexShrink:      0,
            }} />
            <span style={{
              fontSize:      '10px',
              fontFamily:    FONT_B,
              fontWeight:    600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         RED,
            }}>
              {c.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="cfaq-head-item" style={{
            fontSize:      'clamp(2rem,5vw,5rem)',
            fontFamily:    FONT_D,
            fontWeight:    300,
            lineHeight:    0.92,
            letterSpacing: '-0.025em',
            margin:        '0 0 clamp(16px,2.5vw,24px)',
            opacity:       0,
          }}>
            <span style={{ display: 'block', color: TEXT }}>
              {c.headlineTop}
            </span>
            <span style={{
              display:   'block',
              fontStyle: 'italic',
              color:     RED,
            }}>
              {c.headlineBottom}
            </span>
          </h2>

          {/* Sub */}
          <p className="cfaq-head-item" style={{
            fontSize:   'clamp(0.86rem,1.15vw,0.95rem)',
            fontFamily: FONT_B,
            fontWeight: 400,
            lineHeight: 1.9,
            color:      MUTED,
            margin:     '0 0 clamp(24px,4vw,40px)',
            maxWidth:   '340px',
            opacity:    0,
          }}>
            {c.sub}
          </p>

          {/* Count pill */}
          <div className="cfaq-head-item" style={{
            display:         'inline-flex',
            alignItems:      'center',
            gap:             '8px',
            padding:         '8px 16px',
            border:          `1px solid ${BORDER}`,
            backgroundColor: SURFACE,
            opacity:         0,
          }}>
            <span style={{
              fontSize:      '9px',
              fontFamily:    FONT_B,
              fontWeight:    500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         MUTED,
            }}>
              {c.faqs.length} Questions
            </span>
          </div>
        </div>

        {/* ── RIGHT — FAQ accordion ── */}
        <div ref={listRef}>
          <div style={{ height: '1px', backgroundColor: BORDER }} />
          {c.faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => toggle(i)}
              dir={c.dir}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .cfaq-sticky { position: static !important; }
        }
        .cfaq-item button:hover span:last-of-type {
          color: ${TEXT} !important;
        }
      `}</style>
    </section>
  )
}