'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const RED       = '#C8102E'
const RED_HOVER = '#A50D25'
const BG        = '#080808'
const BORDER    = 'rgba(255,255,255,0.07)'
const TEXT      = '#F8F7F4'
const MUTED     = 'rgba(248,247,244,0.38)'
const FAINT     = 'rgba(248,247,244,0.18)'
const FONT_D    = 'Cormorant Garamond, Georgia, serif'
const FONT_B    = 'Inter, sans-serif'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80'

const copy = {
  en: {
    dir:            'ltr',
    eyebrow:        'Contact',
    headlineTop:    'Lets Begin',
    headlineBottom: 'The Journey.',
    sub:            'For reservations, Limore 360 membership, corporate mobility, or bespoke travel requests — our team is available to assist with complete discretion.',
    primaryCta:     'Make a Booking',
    secondaryCta:   'WhatsApp Us',
    availability:   'Available 24 / 7',
    strip: [
      { label: 'Reservations', value: '+971 50 000 0000', href: 'tel:+971500000000'        },
      { label: 'Email',        value: 'info@limore.ae',   href: 'mailto:info@limore.ae'    },
      { label: 'Limore 360',  value: '360@limore.ae',    href: 'mailto:360@limore.ae'     },
    ],
  },
  ar: {
    dir:            'rtl',
    eyebrow:        'اتصل بنا',
    headlineTop:    'لنبدأ',
    headlineBottom: 'الرحلة.',
    sub:            'للحجوزات، أو عضوية ليمور ٣٦٠، أو التنقل المؤسسي، أو طلبات السفر المخصصة — فريقنا متاح للمساعدة بكل تكتم.',
    primaryCta:     'احجز الآن',
    secondaryCta:   'واتساب',
    availability:   'متاح ٢٤/٧',
    strip: [
      { label: 'الحجوزات',  value: '+971 50 000 0000', href: 'tel:+971500000000'     },
      { label: 'البريد',    value: 'info@limore.ae',   href: 'mailto:info@limore.ae' },
      { label: 'ليمور ٣٦٠', value: '360@limore.ae',    href: 'mailto:360@limore.ae'  },
    ],
  },
  fr: {
    dir:            'ltr',
    eyebrow:        'Contact',
    headlineTop:    'Commençons',
    headlineBottom: 'Le Voyage.',
    sub:            'Pour les réservations, l\'adhésion Limore 360, la mobilité corporate, ou les demandes sur mesure — notre équipe est disponible en toute discrétion.',
    primaryCta:     'Faire une Réservation',
    secondaryCta:   'WhatsApp',
    availability:   'Disponible 24h/24',
    strip: [
      { label: 'Réservations', value: '+971 50 000 0000', href: 'tel:+971500000000'     },
      { label: 'Email',        value: 'info@limore.ae',   href: 'mailto:info@limore.ae' },
      { label: 'Limore 360',  value: '360@limore.ae',    href: 'mailto:360@limore.ae'  },
    ],
  },
}

function ArrowIcon({ color = 'currentColor' }) {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path
        d="M1 4h10M7 1l4 3-4 3"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StripItem({ item, isLast }) {
  const [hovered, setHovered] = useHover()
  return (
    <a
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        gap:             '14px',
        textDecoration:  'none',
        padding:         'clamp(13px,2vw,18px) clamp(16px,2.5vw,22px)',
        borderBottom:    isLast ? 'none' : `1px solid ${BORDER}`,
        backgroundColor: hovered ? 'rgba(200,16,46,0.05)' : 'transparent',
        transition:      'background-color 0.22s ease',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{
          fontSize:      '8px',
          fontFamily:    FONT_B,
          fontWeight:    500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color:         FAINT,
        }}>
          {item.label}
        </span>
        <span style={{
          fontSize:   'clamp(0.82rem,1.1vw,0.94rem)',
          fontFamily: FONT_B,
          fontWeight: 300,
          color:      hovered ? TEXT : MUTED,
          transition: 'color 0.22s ease',
        }}>
          {item.value}
        </span>
      </div>
      <span style={{
        color:      hovered ? RED : FAINT,
        transition: 'color 0.22s ease, transform 0.22s ease',
        transform:  hovered ? 'translateX(3px)' : 'translateX(0)',
        flexShrink: 0,
      }}>
        <ArrowIcon />
      </span>
    </a>
  )
}

// tiny hook to keep JSX clean
function useHover() {
  const [h, setH] = require('react').useState(false)
  return [h, setH]
}

export default function ContactHero({ locale = 'en' }) {
  const c = copy[locale] || copy.en

  const wrapRef     = useRef(null)
  const eyebrowRef  = useRef(null)
  const headRef     = useRef(null)
  const subRef      = useRef(null)
  const ctaRef      = useRef(null)
  const stripRef    = useRef(null)
  const availRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65 }
      )
      .fromTo(
        headRef.current.querySelectorAll('.ch-line'),
        { opacity: 0, y: 44, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.13 },
        '-=0.35'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.45'
      )
      .fromTo(ctaRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.09 },
        '-=0.35'
      )
      .fromTo(stripRef.current.querySelectorAll('a'),
        { opacity: 0, x: c.dir === 'rtl' ? -20 : 20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08 },
        '-=0.3'
      )
      .fromTo(availRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      )
    }, wrapRef)
    return () => ctx.revert()
  }, [c.dir])

  return (
    <section
      ref={wrapRef}
      style={{
        position:        'relative',
        minHeight:       '100svh',
        display:         'flex',
        alignItems:      'flex-end',
        overflow:        'hidden',
        backgroundColor: BG,
        direction:       c.dir,
      }}
    >
      {/* ── Background image ── */}
      <div style={{
        position:           'absolute',
        inset:              0,
        backgroundImage:    `url(${HERO_IMAGE})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center 30%',
      }} />

      {/* ── Gradient overlay ── */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.55) 35%, rgba(8,8,8,0.88) 68%, #080808 100%)',
      }} />

      {/* ── Vertical red accent line ── */}
      <div style={{
        position:   'absolute',
        top:        0,
        bottom:     0,
        left:       c.dir === 'rtl' ? 'auto' : 'clamp(20px,6vw,96px)',
        right:      c.dir === 'rtl' ? 'clamp(20px,6vw,96px)' : 'auto',
        width:      '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(200,16,46,0.28), transparent)',
        pointerEvents: 'none',
      }} />

      {/* ── Horizontal top border ── */}
      <div style={{
        position:   'absolute',
        top:        0,
        left:       '8%',
        right:      '8%',
        height:     '1px',
        background: 'linear-gradient(to right, transparent, rgba(200,16,46,0.55), transparent)',
        pointerEvents: 'none',
      }} />

      {/* ── Content ── */}
      <div style={{
        position: 'relative',
        zIndex:   2,
        width:    '100%',
        padding:  'clamp(120px,16vw,200px) clamp(20px,6vw,96px) clamp(48px,7vw,80px)',
      }}>
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap:                 'clamp(36px,7vw,100px)',
          alignItems:          'end',
        }}>

          {/* ── LEFT — Headline block ── */}
          <div>
            {/* Eyebrow */}
            <div ref={eyebrowRef} style={{
              display:      'flex',
              alignItems:   'center',
              gap:          '12px',
              marginBottom: '20px',
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
            <h1
              ref={headRef}
              style={{ margin: 0, lineHeight: 0.9, letterSpacing: '-0.03em' }}
            >
              <span className="ch-line" style={{
                display:    'block',
                fontSize:   'clamp(2.8rem,8vw,8rem)',
                fontFamily: FONT_D,
                fontWeight: 300,
                color:      TEXT,
                opacity:    0,
              }}>
                {c.headlineTop}
              </span>
              <span className="ch-line" style={{
                display:    'block',
                fontSize:   'clamp(2.8rem,8vw,8rem)',
                fontFamily: FONT_D,
                fontWeight: 300,
                fontStyle:  'italic',
                color:      'rgba(200,16,46,0.92)',
                opacity:    0,
              }}>
                {c.headlineBottom}
              </span>
            </h1>

            {/* Sub */}
            <p ref={subRef} style={{
              margin:     'clamp(20px,3vw,28px) 0 0',
              maxWidth:   '520px',
              fontSize:   'clamp(0.86rem,1.25vw,0.98rem)',
              fontFamily: FONT_B,
              fontWeight: 300,
              lineHeight: 1.95,
              color:      MUTED,
              opacity:    0,
            }}>
              {c.sub}
            </p>

            {/* CTAs */}
            <div ref={ctaRef} style={{
              display:   'flex',
              flexWrap:  'wrap',
              gap:       '12px',
              marginTop: 'clamp(28px,4vw,40px)',
            }}>
              <a
                href="#booking-form"
                className="lch-btn-primary"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  justifyContent: 'space-between',
                  gap:            '10px',
                  minWidth:       '200px',
                  padding:        '15px 22px',
                  backgroundColor: RED,
                  color:           '#FFFFFF',
                  textDecoration:  'none',
                  fontSize:        '10px',
                  fontFamily:      FONT_B,
                  fontWeight:      500,
                  letterSpacing:   '0.2em',
                  textTransform:   'uppercase',
                  border:          'none',
                  opacity:         0,
                  transition:      'background-color 0.25s ease',
                }}
              >
                <span>{c.primaryCta}</span>
                <ArrowIcon />
              </a>

              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="lch-btn-secondary"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  justifyContent: 'space-between',
                  gap:            '10px',
                  minWidth:       '200px',
                  padding:        '15px 22px',
                  backgroundColor: 'transparent',
                  color:           TEXT,
                  textDecoration:  'none',
                  fontSize:        '10px',
                  fontFamily:      FONT_B,
                  fontWeight:      500,
                  letterSpacing:   '0.2em',
                  textTransform:   'uppercase',
                  border:          `1px solid ${BORDER}`,
                  opacity:         0,
                  transition:      'border-color 0.25s ease, color 0.25s ease, background-color 0.25s ease',
                }}
              >
                <span>{c.secondaryCta}</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* ── RIGHT — Strip + availability ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              ref={stripRef}
              style={{
                border:          `1px solid ${BORDER}`,
                borderTop:       `1px solid rgba(200,16,46,0.30)`,
                backgroundColor: 'rgba(13,13,13,0.55)',
                backdropFilter:  'blur(10px)',
              }}
            >
              {c.strip.map((item, i) => (
                <StripItem
                  key={item.label}
                  item={item}
                  isLast={i === c.strip.length - 1}
                />
              ))}
            </div>

            {/* Availability */}
            <div ref={availRef} style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '10px',
              opacity:    0,
            }}>
              <div style={{
                position: 'relative',
                width:    '8px',
                height:   '8px',
                flexShrink: 0,
              }}>
                <div style={{
                  position:        'absolute',
                  inset:           0,
                  borderRadius:    '50%',
                  backgroundColor: '#22C55E',
                  animation:       'lch-pulse 2.2s ease-in-out infinite',
                }} />
              </div>
              <span style={{
                fontSize:      '10px',
                fontFamily:    FONT_B,
                fontWeight:    300,
                letterSpacing: '0.14em',
                color:         FAINT,
                textTransform: 'uppercase',
              }}>
                {c.availability}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes lch-pulse {
          0%,100% { opacity:1; transform:scale(1);   box-shadow:0 0 0 0   rgba(34,197,94,0.4); }
          50%      { opacity:0.7; transform:scale(1.3); box-shadow:0 0 0 6px rgba(34,197,94,0);   }
        }
        .lch-btn-primary:hover  { background-color:${RED_HOVER} !important; }
        .lch-btn-secondary:hover {
          border-color:     rgba(200,16,46,0.45) !important;
          color:            ${RED} !important;
          background-color: rgba(200,16,46,0.05) !important;
        }
        @media (max-width:480px) {
          .lch-btn-primary,
          .lch-btn-secondary { min-width:100% !important; justify-content:space-between !important; }
        }
      `}</style>
    </section>
  )
}