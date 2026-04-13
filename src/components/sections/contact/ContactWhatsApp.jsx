'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const RED       = '#C8102E'
const RED_HOVER = '#A50D25'
const BG        = '#080808'
const SURFACE   = '#0D0D0D'
const BORDER    = 'rgba(255,255,255,0.07)'
const TEXT      = '#F8F7F4'
const MUTED     = 'rgba(248,247,244,0.38)'
const FAINT     = 'rgba(248,247,244,0.18)'
const FONT_D    = 'Cormorant Garamond, Georgia, serif'
const FONT_B    = 'Inter, sans-serif'

const WA_NUMBER  = '971563454698'
const WA_HREF    = `https://wa.me/${WA_NUMBER}`
const PHONE_HREF = 'tel:+971563454698'
const EMAIL_HREF = 'mailto:office@thelimore.com'

// ─── Translations ──────────────────────────────────────────────────────────────
const copy = {
  en: {
    dir:            'ltr',
    eyebrow:        'Direct Contact',
    headlineTop:    'Prefer to',
    headlineBottom: 'Reach Us Directly?',
    sub:            'Skip the form. Our team is reachable through multiple direct channels — every message is answered personally by a Limore advisor.',
    responseTime:   'Response within 2 hours',
    channels: [
      {
        id:      'whatsapp',
        label:   'WhatsApp',
        value:   '+971 56 345 4698',
        detail:  'Fastest response · Available 24/7',
        href:    WA_HREF,
        external: true,
        primary: true,
      },
      {
        id:      'phone',
        label:   'Reservations Line',
        value:   '+971 56 345 4698',
        detail:  'Speak directly with an advisor',
        href:    PHONE_HREF,
        external: false,
        primary: false,
      },
      {
        id:      'email',
        label:   'General Enquiries',
        value:   'office@thelimore.com',
        detail:  'For detailed or written requests',
        href:    EMAIL_HREF,
        external: false,
        primary: false,
      },
      {
        id:      'limore360',
        label:   'Limore 360 Members',
        value:   'office@thelimore.com',
        detail:  'Dedicated membership inbox',
        href:    'mailto:office@thelimore.com',
        external: false,
        primary: false,
      },
    ],
    footer:   'Limore — Executive Mobility. Available Worldwide.',
    legal:    'All communications are treated with complete discretion.',
  },

  ar: {
    dir:            'rtl',
    eyebrow:        'التواصل المباشر',
    headlineTop:    'تفضل',
    headlineBottom: 'التواصل المباشر معنا؟',
    sub:            'تخطَّ النموذج. فريقنا متاح عبر قنوات متعددة — يُجيب على كل رسالة مستشار ليمور شخصيًا.',
    responseTime:   'الرد خلال ساعتين',
    channels: [
      {
        id:      'whatsapp',
        label:   'واتساب',
        value:   '+971 56 345 4698',
        detail:  'أسرع رد · متاح ٢٤/٧',
        href:    WA_HREF,
        external: true,
        primary: true,
      },
      {
        id:      'phone',
        label:   'خط الحجوزات',
        value:   '+971 56 345 4698',
        detail:  'تحدث مباشرة مع مستشار',
        href:    PHONE_HREF,
        external: false,
        primary: false,
      },
      {
        id:      'email',
        label:   'الاستفسارات العامة',
        value:   'office@thelimore.com',
        detail:  'للطلبات التفصيلية أو المكتوبة',
        href:    EMAIL_HREF,
        external: false,
        primary: false,
      },
      {
        id:      'limore360',
        label:   'أعضاء ليمور ٣٦٠',
        value:   'office@thelimore.com',
        detail:  'صندوق بريد العضوية المخصص',
        href:    'mailto:office@thelimore.com',
        external: false,
        primary: false,
      },
    ],
    footer:   'ليمور — التنقل التنفيذي. متاح في جميع أنحاء العالم.',
    legal:    'جميع الاتصالات تُعالج بسرية تامة.',
  },

  fr: {
    dir:            'ltr',
    eyebrow:        'Contact Direct',
    headlineTop:    'Préférez-vous',
    headlineBottom: 'Nous Contacter Directement ?',
    sub:            'Passez le formulaire. Notre équipe est joignable via plusieurs canaux directs — chaque message reçoit une réponse personnelle d\'un conseiller Limore.',
    responseTime:   'Réponse en 2 heures',
    channels: [
      {
        id:      'whatsapp',
        label:   'WhatsApp',
        value:   '+971 56 345 4698',
        detail:  'Réponse la plus rapide · Disponible 24h/24',
        href:    WA_HREF,
        external: true,
        primary: true,
      },
      {
        id:      'phone',
        label:   'Ligne Réservations',
        value:   '+971 56 345 4698',
        detail:  'Parlez directement avec un conseiller',
        href:    PHONE_HREF,
        external: false,
        primary: false,
      },
      {
        id:      'email',
        label:   'Renseignements Généraux',
        value:   'office@thelimore.com',
        detail:  'Pour les demandes détaillées ou écrites',
        href:    EMAIL_HREF,
        external: false,
        primary: false,
      },
      {
        id:      'limore360',
        label:   'Membres Limore 360',
        value:   'office@thelimore.com',
        detail:  'Boîte dédiée aux membres',
        href:    'mailto:office@thelimore.com',
        external: false,
        primary: false,
      },
    ],
    footer:   'Limore — Mobilité Executive. Disponible Partout Dans Le Monde.',
    legal:    'Toutes les communications sont traitées avec une entière discrétion.',
  },
}

// ─── Icons ─────────────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16"
      fill="none" aria-hidden="true">
      <path d="M14.5 11.5l-3-1.5-1.5 1.5S8 11 6 9s-1.5-4-1.5-4L6 3.5 4.5 0.5l-3 1C1 5 3 9 6 12s7 5 7.5 4.5l1-3z"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function EmailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 12"
      fill="none" aria-hidden="true">
      <rect x="1" y="1" width="14" height="10" rx="1"
        stroke="currentColor" strokeWidth="1"/>
      <path d="M1 1l7 5.5L15 1"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}

function MemberIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16"
      fill="none" aria-hidden="true">
      <circle cx="8" cy="5" r="3"
        stroke="currentColor" strokeWidth="1"/>
      <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8"
      fill="none" aria-hidden="true">
      <path d="M1 4h10M7 1l4 3-4 3"
        stroke="currentColor" strokeWidth="1.1"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const CHANNEL_ICON = {
  whatsapp:  (h) => <WhatsAppIcon size={16} color={h ? '#25D366' : FAINT} />,
  phone:     (h) => <PhoneIcon size={14} />,
  email:     (h) => <EmailIcon size={14} />,
  limore360: (h) => <MemberIcon size={14} />,
}

// ─── Channel row ───────────────────────────────────────────────────────────────
function ChannelRow({ channel, isLast, dir }) {
  const [hovered, setHovered] = useState(false)

  const isWA = channel.id === 'whatsapp'

  return (
    <a
      href={channel.href}
      target={channel.external ? '_blank' : undefined}
      rel={channel.external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cwa-channel-row"
      style={{
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        gap:             '16px',
        padding:         'clamp(16px,2.5vw,22px) clamp(20px,3vw,32px)',
        borderBottom:    isLast ? 'none' : `1px solid ${BORDER}`,
        textDecoration:  'none',
        backgroundColor: hovered
          ? isWA
            ? 'rgba(37,211,102,0.04)'
            : 'rgba(200,16,46,0.04)'
          : 'transparent',
        transition:      'background-color 0.25s ease',
        direction:       dir,
      }}
    >
      {/* Left — icon + text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
        {/* Icon wrapper */}
        <div style={{
          width:           '36px',
          height:          '36px',
          flexShrink:      0,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          border:          `1px solid ${
            hovered
              ? isWA ? 'rgba(37,211,102,0.3)' : 'rgba(200,16,46,0.3)'
              : BORDER
          }`,
          backgroundColor: hovered
            ? isWA ? 'rgba(37,211,102,0.06)' : 'rgba(200,16,46,0.06)'
            : 'transparent',
          color:           hovered
            ? isWA ? '#25D366' : RED
            : FAINT,
          transition:      'all 0.25s ease',
        }}>
          {CHANNEL_ICON[channel.id]?.(hovered)}
        </div>

        {/* Label + value */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
          <span style={{
            fontSize:      '8px',
            fontFamily:    FONT_B,
            fontWeight:    500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         FAINT,
          }}>
            {channel.label}
          </span>
          <span style={{
            fontSize:    'clamp(0.84rem,1.2vw,0.96rem)',
            fontFamily:  FONT_B,
            fontWeight:  300,
            color:       hovered ? TEXT : MUTED,
            transition:  'color 0.25s ease',
            overflow:    'hidden',
            textOverflow:'ellipsis',
            whiteSpace:  'nowrap',
          }}>
            {channel.value}
          </span>
          <span style={{
            fontSize:      '9px',
            fontFamily:    FONT_B,
            fontWeight:    300,
            color:         FAINT,
            letterSpacing: '0.04em',
          }}>
            {channel.detail}
          </span>
        </div>
      </div>

      {/* Right — arrow */}
      <span style={{
        color:      hovered ? (isWA ? '#25D366' : RED) : FAINT,
        flexShrink: 0,
        transition: 'color 0.25s ease, transform 0.25s ease',
        transform:  hovered ? 'translateX(3px)' : 'translateX(0)',
      }}>
        <ArrowIcon />
      </span>
    </a>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function ContactWhatsApp({ locale = 'en' }) {
  const c          = copy[locale] || copy.en
  const sectionRef = useRef(null)
  const headRef    = useRef(null)
  const cardRef    = useRef(null)
  const footerRef  = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headRef.current.querySelectorAll('.cwa-animate'),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.75,
          ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: headRef.current, start: 'top 86%' },
        }
      )
      // Card
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.85,
          ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: cardRef.current, start: 'top 84%' },
        }
      )
      // Footer strip
      gsap.fromTo(footerRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: footerRef.current, start: 'top 92%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: BG,
        direction:       c.dir,
        position:        'relative',
        overflow:        'hidden',
      }}
    >
      {/* Top border */}
      <div style={{
        position:   'absolute',
        top:        0,
        left:       '8%',
        right:      '8%',
        height:     '1px',
        background: 'linear-gradient(to right, transparent, rgba(200,16,46,0.45), transparent)',
        pointerEvents: 'none',
      }} />

      {/* ── Main content ── */}
      <div style={{
        padding: 'clamp(64px,10vw,120px) clamp(20px,6vw,96px) clamp(48px,7vw,80px)',
      }}>
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap:                 'clamp(40px,7vw,96px)',
          alignItems:          'start',
        }}>

          {/* ── LEFT — headline block ── */}
          <div ref={headRef}>
            {/* Eyebrow */}
            <div className="cwa-animate" style={{
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
            <h2 className="cwa-animate" style={{
              fontSize:      'clamp(2rem,5vw,5rem)',
              fontFamily:    FONT_D,
              fontWeight:    300,
              lineHeight:    0.92,
              letterSpacing: '-0.025em',
              margin:        '0 0 clamp(18px,3vw,28px)',
              opacity:       0,
            }}>
              <span style={{ display: 'block', color: TEXT }}>
                {c.headlineTop}
              </span>
              <span style={{
                display:   'block',
                fontStyle: 'italic',
                color:     'rgba(200,16,46,0.9)',
              }}>
                {c.headlineBottom}
              </span>
            </h2>

            {/* Sub */}
            <p className="cwa-animate" style={{
              fontSize:   'clamp(0.84rem,1.15vw,0.94rem)',
              fontFamily: FONT_B,
              fontWeight: 300,
              lineHeight: 1.95,
              color:      MUTED,
              margin:     '0 0 clamp(24px,4vw,36px)',
              maxWidth:   '380px',
              opacity:    0,
            }}>
              {c.sub}
            </p>

            {/* Response time pill */}
            <div className="cwa-animate" style={{
              display:         'inline-flex',
              alignItems:      'center',
              gap:             '10px',
              padding:         '10px 18px',
              border:          `1px solid ${BORDER}`,
              backgroundColor: SURFACE,
              opacity:         0,
            }}>
              {/* Pulsing dot */}
              <div style={{ position: 'relative', width: '7px', height: '7px', flexShrink: 0 }}>
                <div style={{
                  position:        'absolute',
                  inset:           0,
                  borderRadius:    '50%',
                  backgroundColor: '#22C55E',
                  animation:       'cwa-pulse 2.2s ease-in-out infinite',
                }} />
              </div>
              <span style={{
                fontSize:      '9px',
                fontFamily:    FONT_B,
                fontWeight:    400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color:         FAINT,
              }}>
                {c.responseTime}
              </span>
            </div>
          </div>

          {/* ── RIGHT — channel card ── */}
          <div
            ref={cardRef}
            style={{
              border:          `1px solid ${BORDER}`,
              borderTop:       `2px solid ${RED}`,
              backgroundColor: SURFACE,
              opacity:         0,
            }}
          >
            {/* Card header */}
            <div style={{
              padding:      'clamp(14px,2vw,18px) clamp(20px,3vw,32px)',
              borderBottom: `1px solid ${BORDER}`,
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'space-between',
              gap:          '8px',
              flexWrap:     'wrap',
            }}>
              <span style={{
                fontSize:      '10px',
                fontFamily:    FONT_B,
                fontWeight:    500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         MUTED,
              }}>
                Limore — Direct
              </span>
              <span style={{
                fontSize:      '9px',
                fontFamily:    FONT_B,
                fontWeight:    300,
                letterSpacing: '0.1em',
                color:         FAINT,
              }}>
                {c.channels.length} Channels
              </span>
            </div>

            {/* Channel rows */}
            {c.channels.map((ch, i) => (
              <ChannelRow
                key={ch.id}
                channel={ch}
                isLast={i === c.channels.length - 1}
                dir={c.dir}
              />
            ))}

            {/* WhatsApp primary CTA — bottom of card */}
            <div style={{
              padding:      'clamp(16px,2.5vw,22px) clamp(20px,3vw,32px)',
              borderTop:    `1px solid ${BORDER}`,
            }}>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="cwa-wa-btn"
                style={{
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'space-between',
                  gap:             '12px',
                  width:           '100%',
                  boxSizing:       'border-box',
                  padding:         '14px 20px',
                  backgroundColor: 'rgba(37,211,102,0.08)',
                  color:           '#25D366',
                  textDecoration:  'none',
                  fontSize:        '10px',
                  fontFamily:      FONT_B,
                  fontWeight:      500,
                  letterSpacing:   '0.2em',
                  textTransform:   'uppercase',
                  border:          '1px solid rgba(37,211,102,0.2)',
                  transition:      'background-color 0.25s ease, border-color 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <WhatsAppIcon size={16} color="#25D366" />
                  <span>{copy[locale]?.channels?.[0]?.label || 'WhatsApp'}</span>
                </div>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div
        ref={footerRef}
        style={{
          borderTop:       `1px solid ${BORDER}`,
          backgroundColor: SURFACE,
          padding:         'clamp(20px,3vw,28px) clamp(20px,6vw,96px)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          flexWrap:        'wrap',
          gap:             '12px',
          opacity:         0,
          direction:       c.dir,
        }}
      >
        {/* Left — Limore wordmark */}
        <span style={{
          fontSize:      'clamp(0.82rem,1.1vw,0.92rem)',
          fontFamily:    FONT_D,
          fontWeight:    300,
          fontStyle:     'italic',
          color:         MUTED,
          letterSpacing: '0.04em',
        }}>
          {c.footer}
        </span>

        {/* Right — legal note */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="10" height="12" viewBox="0 0 10 12"
            fill="none" aria-hidden="true">
            <path d="M5 1L1 3.5v3c0 2.8 1.8 4.8 4 5.5 2.2-.7 4-2.7 4-5.5v-3L5 1z"
              stroke="rgba(248,247,244,0.18)" strokeWidth="0.85"/>
          </svg>
          <span style={{
            fontSize:      '9px',
            fontFamily:    FONT_B,
            fontWeight:    300,
            letterSpacing: '0.1em',
            color:         FAINT,
          }}>
            {c.legal}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes cwa-pulse {
          0%,100% { opacity:1; transform:scale(1);   box-shadow:0 0 0 0   rgba(34,197,94,0.4); }
          50%      { opacity:.7; transform:scale(1.4); box-shadow:0 0 0 5px rgba(34,197,94,0);   }
        }
        .cwa-wa-btn:hover {
          background-color: rgba(37,211,102,0.13) !important;
          border-color:     rgba(37,211,102,0.4)  !important;
        }
        .cwa-channel-row:hover { cursor: pointer; }
        @media (max-width: 480px) {
          .cwa-wa-btn { padding: 13px 16px !important; }
        }
      `}</style>
    </section>
  )
}