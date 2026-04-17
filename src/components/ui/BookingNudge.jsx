'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

// ─── Tokens ────────────────────────────────────────────────────────────────────
const RED      = '#C8102E'
const RED_DARK = '#A50D25'
const BG       = '#0D0D0D'
const BORDER   = 'rgba(255,255,255,0.07)'
const TEXT     = '#F8F7F4'
const MUTED    = 'rgba(248,247,244,0.45)'
const FONT_B   = 'Inter, sans-serif'
const FONT_D   = 'Cormorant Garamond, Georgia, serif'

const SESSION_KEY = 'limore_nudge_dismissed'
const TRIGGER_MS  = 10000

// ─── Translations ──────────────────────────────────────────────────────────────
const COPY = {
  en: {
    dir:       'ltr',
    eyebrow:   'Ready to ride?',
    headline:  'Book a Chauffeur',
    sub:       'Executive cars available now. Instant confirmation.',
    cta:       'Reserve Now',
    ctaHref:   '/en/contact',
    ghost:     'View Fleet',
    ghostHref: '/en/fleet',
    badge:     'Available Now',
    minimize:  'Minimize',
    restore:   'Book a Chauffeur',
  },
  ar: {
    dir:       'rtl',
    eyebrow:   'مستعد للانطلاق؟',
    headline:  'احجز سائقك الخاص',
    sub:       'سيارات تنفيذية متاحة الآن. تأكيد فوري.',
    cta:       'احجز الآن',
    ctaHref:   '/ar/contact',
    ghost:     'استعرض الأسطول',
    ghostHref: '/ar/fleet',
    badge:     'متاح الآن',
    minimize:  'تصغير',
    restore:   'احجز سائقاً',
  },
  fr: {
    dir:       'ltr',
    eyebrow:   'Prêt à partir ?',
    headline:  'Réserver un Chauffeur',
    sub:       'Véhicules executives disponibles maintenant. Confirmation instantanée.',
    cta:       'Réserver',
    ctaHref:   '/fr/contact',
    ghost:     'Voir la Flotte',
    ghostHref: '/fr/fleet',
    badge:     'Disponible',
    minimize:  'Réduire',
    restore:   'Réserver un Chauffeur',
  },
}

// ─── Car SVG ───────────────────────────────────────────────────────────────────
function CarIcon({ animate }) {
  return (
    <svg
      width="52" height="28" viewBox="0 0 52 28"
      fill="none" aria-hidden="true"
      style={{
        transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        transform:  animate ? 'translateX(4px)' : 'translateX(0)',
        filter:     animate ? 'drop-shadow(-6px 0 8px rgba(200,16,46,0.35))' : 'none',
      }}
    >
      {/* Body */}
      <path d="M4 18H48V22H4z" fill="#1a1a1a" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      {/* Cabin */}
      <path d="M12 18L16 10H36L40 18z" fill="#1a1a1a" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      {/* Windows */}
      <path d="M18 17L20.5 11.5H30L32 17z" fill="rgba(200,16,46,0.18)" stroke="rgba(200,16,46,0.3)" strokeWidth="0.6" />
      {/* Wheels */}
      <circle cx="15" cy="22" r="4" fill="#111" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <circle cx="15" cy="22" r="1.8" fill={RED}
        style={{ transformOrigin: '15px 22px', animation: animate ? 'nudge-spin 0.4s linear infinite' : 'none' }}
      />
      <circle cx="37" cy="22" r="4" fill="#111" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <circle cx="37" cy="22" r="1.8" fill={RED}
        style={{ transformOrigin: '37px 22px', animation: animate ? 'nudge-spin 0.4s linear infinite' : 'none' }}
      />
      {/* Headlight */}
      <rect x="44" y="19" width="4" height="1.5" rx="0.75"
        fill={animate ? '#FFF9C4' : 'rgba(255,255,255,0.2)'}
        style={{ transition: 'fill 0.3s ease' }}
      />
      {/* Light beam */}
      {animate && (
        <path d="M48 19.5L54 17L48 20.5" fill="rgba(255,249,196,0.15)" />
      )}
      {/* Speed lines */}
      {animate && (
        <>
          <line x1="0" y1="14" x2="6" y2="14" stroke="rgba(200,16,46,0.5)" strokeWidth="1" strokeLinecap="round"
            style={{ animation: 'nudge-speedline 0.5s ease-out infinite' }} />
          <line x1="0" y1="17" x2="4" y2="17" stroke="rgba(200,16,46,0.3)" strokeWidth="0.8" strokeLinecap="round"
            style={{ animation: 'nudge-speedline 0.5s ease-out 0.1s infinite' }} />
          <line x1="0" y1="20" x2="5" y2="20" stroke="rgba(200,16,46,0.4)" strokeWidth="0.7" strokeLinecap="round"
            style={{ animation: 'nudge-speedline 0.5s ease-out 0.05s infinite' }} />
        </>
      )}
    </svg>
  )
}

// ─── Chauffeur icon ────────────────────────────────────────────────────────────
function ChauffeurIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="5" r="3" stroke="currentColor" strokeWidth="1" />
      <path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M6 4.5h6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  )
}

// ─── Arrow icon ────────────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path d="M1 4h10M7 1l4 3-4 3"
        stroke="currentColor" strokeWidth="1.1"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Close icon ────────────────────────────────────────────────────────────────
function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 1l10 10M11 1L1 11" stroke={MUTED} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

// ─── Minimise icon ─────────────────────────────────────────────────────────────
function MinimiseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6h8" stroke={MUTED} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

// ─── Restore icon ──────────────────────────────────────────────────────────────
function RestoreIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 8l4-4 4 4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Live dot ──────────────────────────────────────────────────────────────────
function LiveDot() {
  return (
    <span style={{ position: 'relative', display: 'inline-flex', width: '8px', height: '8px', flexShrink: 0 }}>
      <span style={{
        position:        'absolute',
        inset:           0,
        borderRadius:    '50%',
        backgroundColor: '#22C55E',
        animation:       'nudge-ping 1.8s cubic-bezier(0,0,0.2,1) infinite',
      }} />
      <span style={{
        position:        'relative',
        display:         'inline-flex',
        width:           '8px',
        height:          '8px',
        borderRadius:    '50%',
        backgroundColor: '#22C55E',
      }} />
    </span>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function BookingNudge({ locale = 'en' }) {
  const t     = COPY[locale] || COPY.en
  const isRTL = t.dir === 'rtl'

  const [mounted,    setMounted]    = useState(false)
  const [visible,    setVisible]    = useState(false)
  const [hiding,     setHiding]     = useState(false)
  const [dismissed,  setDismissed]  = useState(false)
  const [minimised,  setMinimised]  = useState(false)
  const [carAnimate, setCarAnimate] = useState(false)
  const [ctaHover,   setCtaHover]   = useState(false)
  const [ghostHover, setGhostHover] = useState(false)
  const [minHover,   setMinHover]   = useState(false)
  const [isMobile,   setIsMobile]   = useState(false)
  const carTimerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    try {
      if (sessionStorage.getItem(SESSION_KEY)) { setDismissed(true); return }
    } catch {}

    const mq = window.matchMedia('(max-width: 600px)')
    setIsMobile(mq.matches)
    const mqHandler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', mqHandler)

    const trigger = setTimeout(() => setVisible(true), TRIGGER_MS)

    return () => {
      clearTimeout(trigger)
      clearTimeout(carTimerRef.current)
      mq.removeEventListener('change', mqHandler)
    }
  }, [])

  // Car animation loop when visible and not minimised
  useEffect(() => {
    if (!visible || minimised) return
    const loop = () => {
      setCarAnimate(true)
      carTimerRef.current = setTimeout(() => {
        setCarAnimate(false)
        carTimerRef.current = setTimeout(loop, 3000)
      }, 1800)
    }
    const initial = setTimeout(loop, 600)
    return () => { clearTimeout(initial); clearTimeout(carTimerRef.current) }
  }, [visible, minimised])

  const dismiss = () => {
    try { sessionStorage.setItem(SESSION_KEY, '1') } catch {}
    setHiding(true)
    setTimeout(() => setDismissed(true), 450)
  }

  const minimise = () => {
    setMinimised(true)
    clearTimeout(carTimerRef.current)
    setCarAnimate(false)
  }

  const restore = () => setMinimised(false)

  if (!mounted || dismissed) return null

  // ─── Position ─────────────────────────────────────────────────────────────
  const posStyle = minimised
    ? {
        bottom: '96px',
        right:  isRTL ? 'auto' : '24px',
        left:   isRTL ? '24px' : 'auto',
        width:  'auto',
      }
    : isMobile
      ? { bottom: 0, left: 0, right: 0, width: '100%' }
      : {
          bottom: '32px',
          right:  isRTL ? 'auto' : '24px',
          left:   isRTL ? '24px' : 'auto',
          width:  '320px',
        }

  const enterAnim = minimised
    ? 'nudge-pill-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards'
    : isMobile
      ? 'nudge-mobile-in 0.55s cubic-bezier(0.16,1,0.3,1) forwards'
      : isRTL
        ? 'nudge-left-in 0.55s cubic-bezier(0.16,1,0.3,1) forwards'
        : 'nudge-right-in 0.55s cubic-bezier(0.16,1,0.3,1) forwards'

  const exitAnim = isMobile
    ? 'nudge-mobile-out 0.4s cubic-bezier(0.16,1,0.3,1) forwards'
    : isRTL
      ? 'nudge-left-out 0.4s cubic-bezier(0.16,1,0.3,1) forwards'
      : 'nudge-right-out 0.4s cubic-bezier(0.16,1,0.3,1) forwards'

  return (
    <>
      <style>{`
        @keyframes nudge-right-in  { from{opacity:0;transform:translateX(32px) scale(0.96)} to{opacity:1;transform:translateX(0) scale(1)} }
        @keyframes nudge-right-out { from{opacity:1;transform:translateX(0)} to{opacity:0;transform:translateX(32px)} }
        @keyframes nudge-left-in   { from{opacity:0;transform:translateX(-32px) scale(0.96)} to{opacity:1;transform:translateX(0) scale(1)} }
        @keyframes nudge-left-out  { from{opacity:1;transform:translateX(0)} to{opacity:0;transform:translateX(-32px)} }
        @keyframes nudge-mobile-in  { from{opacity:0;transform:translateY(100%)} to{opacity:1;transform:translateY(0)} }
        @keyframes nudge-mobile-out { from{opacity:1;transform:translateY(0)} to{opacity:0;transform:translateY(100%)} }
        @keyframes nudge-pill-in    { from{opacity:0;transform:translateY(12px) scale(0.9)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes nudge-spin       { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes nudge-speedline  { 0%{opacity:0.9;transform:translateX(0)} 100%{opacity:0;transform:translateX(-12px)} }
        @keyframes nudge-ping       { 0%{transform:scale(1);opacity:0.7} 100%{transform:scale(2.2);opacity:0} }
        @keyframes nudge-shimmer    { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes nudge-badge-in   { 0%{transform:scale(0) rotate(-8deg);opacity:0} 70%{transform:scale(1.1) rotate(2deg);opacity:1} 100%{transform:scale(1) rotate(0deg);opacity:1} }
        @keyframes nudge-pill-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(200,16,46,0.4)} 50%{box-shadow:0 0 0 6px rgba(200,16,46,0)} }
      `}</style>

      <div
        role="dialog"
        aria-label="Book a chauffeur"
        style={{
          position:  'fixed',
          zIndex:    9997,
          direction: t.dir,
          animation: hiding ? exitAnim : visible ? enterAnim : 'none',
          opacity:   visible ? undefined : 0,
          ...posStyle,
        }}
      >

        {/* ── Minimised pill ── */}
        {minimised && (
          <button
            onClick={restore}
            onMouseEnter={() => setMinHover(true)}
            onMouseLeave={() => setMinHover(false)}
            aria-label={t.restore}
            title={t.restore}
            style={{
              display:         'flex',
              alignItems:      'center',
              gap:             '9px',
              padding:         '0 14px 0 10px',
              height:          '40px',
              backgroundColor: minHover ? RED_DARK : RED,
              border:          'none',
              borderRadius:    '20px',
              cursor:          'pointer',
              whiteSpace:      'nowrap',
              boxShadow:       minHover
                ? '0 6px 24px rgba(200,16,46,0.5)'
                : '0 4px 16px rgba(200,16,46,0.35)',
              animation:       'nudge-pill-pulse 2.5s ease-in-out infinite',
              transition:      'background-color 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <span style={{
              width:           '26px',
              height:          '26px',
              borderRadius:    '50%',
              backgroundColor: 'rgba(255,255,255,0.12)',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              color:           'white',
              flexShrink:      0,
            }}>
              <ChauffeurIcon size={14} />
            </span>
            <span style={{
              fontSize:      '10px',
              fontFamily:    FONT_B,
              fontWeight:    500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color:         'white',
            }}>
              {t.restore}
            </span>
            <RestoreIcon />
          </button>
        )}

        {/* ── Full card ── */}
        {!minimised && (
          <div style={{
            backgroundColor: BG,
            border:          isMobile ? 'none' : `1px solid rgba(255,255,255,0.09)`,
            borderTop:       `2px solid ${RED}`,
            borderRadius:    isMobile ? '14px 14px 0 0' : '0',
            boxShadow:       isMobile
              ? '0 -12px 48px rgba(0,0,0,0.7)'
              : '0 20px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(200,16,46,0.08)',
            overflow:        'hidden',
            position:        'relative',
          }}>

            {/* Corner glow */}
            <div style={{
              position:      'absolute',
              top:           0,
              right:         isRTL ? 'auto' : 0,
              left:          isRTL ? 0 : 'auto',
              width:         '140px',
              height:        '140px',
              background:    'radial-gradient(circle at top right, rgba(200,16,46,0.1) 0%, transparent 65%)',
              pointerEvents: 'none',
              zIndex:        0,
            }} />

            {/* ── Car illustration area ── */}
            <div style={{
              background:     'linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0d0d0d 100%)',
              borderBottom:   `1px solid ${BORDER}`,
              padding:        '20px 20px 16px',
              display:        'flex',
              alignItems:     'flex-end',
              justifyContent: 'space-between',
              gap:            '12px',
              position:       'relative',
              overflow:       'hidden',
              zIndex:         1,
            }}>
              {/* Road line */}
              <div style={{
                position:   'absolute',
                bottom:     '12px',
                left:       '16px',
                right:      '16px',
                height:     '1px',
                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)',
              }} />

              {/* Left — badge + eyebrow */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
                  <LiveDot />
                  <span style={{
                    fontSize:      '9px',
                    fontFamily:    FONT_B,
                    fontWeight:    500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color:         '#22C55E',
                  }}>
                    {t.badge}
                  </span>
                </div>
                <span style={{
                  fontSize:      '9px',
                  fontFamily:    FONT_B,
                  fontWeight:    400,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color:         MUTED,
                }}>
                  {t.eyebrow}
                </span>
              </div>

              {/* Car SVG */}
              <div style={{ flexShrink: 0 }}>
                <CarIcon animate={carAnimate} />
              </div>
            </div>

            {/* ── Content ── */}
            <div style={{ padding: isMobile ? '18px 20px 28px' : '18px 20px 20px', position: 'relative', zIndex: 1 }}>

              {/* Headline row */}
              <div style={{
                display:        'flex',
                alignItems:     'flex-start',
                justifyContent: 'space-between',
                gap:            '10px',
                marginBottom:   '8px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  {/* Chauffeur badge */}
                  <div style={{
                    width:           '30px',
                    height:          '30px',
                    borderRadius:    '50%',
                    backgroundColor: 'rgba(200,16,46,0.1)',
                    border:          '1px solid rgba(200,16,46,0.2)',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    color:           RED,
                    flexShrink:      0,
                    animation:       visible ? 'nudge-badge-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both' : 'none',
                  }}>
                    <ChauffeurIcon />
                  </div>
                  <h2 style={{
                    fontSize:      isMobile ? '1.25rem' : '1.15rem',
                    fontFamily:    FONT_D,
                    fontWeight:    300,
                    color:         TEXT,
                    margin:        0,
                    letterSpacing: '-0.01em',
                    lineHeight:    1.1,
                  }}>
                    {t.headline}
                  </h2>
                </div>

                {/* Minimise + Close */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, marginTop: '-4px' }}>
                  <button
                    onClick={minimise}
                    aria-label={t.minimize}
                    title={t.minimize}
                    style={{
                      background:      'transparent',
                      border:          `1px solid ${BORDER}`,
                      borderRadius:    '50%',
                      width:           '28px',
                      height:          '28px',
                      minWidth:        '44px',
                      minHeight:       '44px',
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      cursor:          'pointer',
                      transition:      'border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = BORDER
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    <MinimiseIcon />
                  </button>

                  <button
                    onClick={dismiss}
                    aria-label="Dismiss"
                    style={{
                      background:      'transparent',
                      border:          `1px solid ${BORDER}`,
                      borderRadius:    '50%',
                      width:           '28px',
                      height:          '28px',
                      minWidth:        '44px',
                      minHeight:       '44px',
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      cursor:          'pointer',
                      transition:      'border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(200,16,46,0.4)'
                      e.currentTarget.style.backgroundColor = 'rgba(200,16,46,0.06)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = BORDER
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              {/* Sub */}
              <p style={{
                fontSize:   isMobile ? '0.82rem' : '0.8rem',
                fontFamily: FONT_B,
                fontWeight: 300,
                lineHeight: 1.8,
                color:      MUTED,
                margin:     '0 0 16px',
              }}>
                {t.sub}
              </p>

              {/* CTAs */}
              <div style={{
                display:       'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap:           '8px',
              }}>
                {/* Primary */}
                <Link
                  href={t.ctaHref}
                  onMouseEnter={() => setCtaHover(true)}
                  onMouseLeave={() => setCtaHover(false)}
                  style={{
                    flex:            isMobile ? undefined : 1,
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'space-between',
                    gap:             '8px',
                    padding:         isMobile ? '14px 18px' : '12px 16px',
                    backgroundImage: ctaHover
                    ? `linear-gradient(105deg, ${RED_DARK} 0%, ${RED} 50%, ${RED_DARK} 100%)`
                    : 'none',
                  backgroundColor: ctaHover ? 'transparent' : RED,
                  backgroundSize:  ctaHover ? '200% auto' : 'auto',
                    animation:       ctaHover ? 'nudge-shimmer 1s linear infinite' : 'none',
                    color:           'white',
                    textDecoration:  'none',
                    fontSize:        '10px',
                    fontFamily:      FONT_B,
                    fontWeight:      500,
                    letterSpacing:   '0.18em',
                    textTransform:   'uppercase',
                    transition:      'box-shadow 0.25s ease',
                    boxShadow:       ctaHover
                      ? '0 4px 20px rgba(200,16,46,0.4)'
                      : '0 2px 10px rgba(200,16,46,0.2)',
                  }}
                >
                  <span>{t.cta}</span>
                  <ArrowIcon />
                </Link>

                {/* Ghost */}
                <Link
                  href={t.ghostHref}
                  onMouseEnter={() => setGhostHover(true)}
                  onMouseLeave={() => setGhostHover(false)}
                  style={{
                    flex:            isMobile ? undefined : 1,
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'space-between',
                    gap:             '8px',
                    padding:         isMobile ? '14px 18px' : '12px 16px',
                    backgroundColor: ghostHover ? 'rgba(255,255,255,0.05)' : 'transparent',
                    color:           ghostHover ? TEXT : MUTED,
                    textDecoration:  'none',
                    fontSize:        '10px',
                    fontFamily:      FONT_B,
                    fontWeight:      400,
                    letterSpacing:   '0.18em',
                    textTransform:   'uppercase',
                    border:          `1px solid ${ghostHover ? 'rgba(255,255,255,0.15)' : BORDER}`,
                    transition:      'all 0.25s ease',
                  }}
                >
                  <span>{t.ghost}</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}