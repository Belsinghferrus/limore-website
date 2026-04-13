'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Config ────────────────────────────────────────────────────────────────────
const WA_NUMBER  = '971563454698'
const WA_MESSAGE = "Hello, I'd like to make a reservation with Limore."
const WA_HREF    = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

const GREEN      = '#25D366'
const GREEN_DARK = '#1DA851'
const FONT_B     = 'Inter, sans-serif'
const FONT_D     = 'Cormorant Garamond, Georgia, serif'

// ─── Icons ─────────────────────────────────────────────────────────────────────
function WAIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2l10 10M12 2L2 12"
        stroke="rgba(248,247,244,0.5)" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
      <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5"
        stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── Translations ──────────────────────────────────────────────────────────────
const COPY = {
  en: {
    dir:        'ltr',
    tag:        'Limore Concierge',
    msg:        'Hello 👋 How can we assist your journey today?',
    cta:        'Chat on WhatsApp',
    response:   'Replies within 2 hours · Available 24/7',
    tooltip:    'Chat with us',
  },
  ar: {
    dir:        'rtl',
    tag:        'كونسيرج ليمور',
    msg:        'مرحباً 👋 كيف يمكننا مساعدتك في رحلتك اليوم؟',
    cta:        'تحدث عبر واتساب',
    response:   'يرد خلال ساعتين · متاح ٢٤/٧',
    tooltip:    'تحدث معنا',
  },
  fr: {
    dir:        'ltr',
    tag:        'Conciergerie Limore',
    msg:        'Bonjour 👋 Comment pouvons-nous vous accompagner ?',
    cta:        'Discuter sur WhatsApp',
    response:   'Répond en 2h · Disponible 24h/24',
    tooltip:    'Discutez avec nous',
  },
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function FloatingWhatsApp({ locale = 'en' }) {
  const t = COPY[locale] || COPY.en
  const isRTL = t.dir === 'rtl'

  const [mounted,   setMounted]   = useState(false)  // SSR guard
  const [visible,   setVisible]   = useState(false)  // entrance slide-up
  const [open,      setOpen]      = useState(false)  // bubble expanded
  const [dismissed, setDismissed] = useState(false)  // user permanently closed
  const [pulse,     setPulse]     = useState(false)  // attention ring
  const [btnHover,  setBtnHover]  = useState(false)
  const [ctaHover,  setCtaHover]  = useState(false)
  const autoCloseRef = useRef(null)
  const pulseRef     = useRef(null)

  // Mount guard (avoid SSR mismatch)
  useEffect(() => setMounted(true), [])

  // Entrance: slide up after 1.5s
  useEffect(() => {
    if (!mounted) return
    const t1 = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t1)
  }, [mounted])

  // Attention pulse every 10s when collapsed
  useEffect(() => {
    if (!visible || dismissed) return
    pulseRef.current = setInterval(() => {
      if (!open) {
        setPulse(true)
        setTimeout(() => setPulse(false), 1200)
      }
    }, 10000)
    return () => clearInterval(pulseRef.current)
  }, [visible, open, dismissed])

  // Auto-close bubble after 14s of inactivity
  useEffect(() => {
    clearTimeout(autoCloseRef.current)
    if (open) {
      autoCloseRef.current = setTimeout(() => setOpen(false), 14000)
    }
    return () => clearTimeout(autoCloseRef.current)
  }, [open])

  if (!mounted || dismissed) return null

  // ─── Positioning ───────────────────────────────────────────────────────────
  const side = isRTL ? { left: '24px' } : { right: '24px' }

  return (
    <>
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes fwa-slideup {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fwa-bubble-in {
          from { opacity: 0; transform: translateY(12px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes fwa-pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes fwa-dot-blink {
          0%,80%,100% { opacity: 0; }
          40%          { opacity: 1; }
        }
        @keyframes fwa-badge-pop {
          0%   { transform: scale(0); }
          70%  { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* ── Wrapper ── */}
      <div
        aria-label="WhatsApp contact"
        style={{
          position:   'fixed',
          bottom:     '28px',
          zIndex:     9999,
          display:    'flex',
          flexDirection: 'column',
          alignItems: isRTL ? 'flex-start' : 'flex-end',
          gap:        '12px',
          ...side,
        }}
      >

        {/* ── Bubble card ── */}
        {open && (
          <div
            role="dialog"
            aria-label="Chat with Limore"
            style={{
              width:           '300px',
              backgroundColor: '#0D0D0D',
              border:          '1px solid rgba(255,255,255,0.08)',
              borderTop:       `2px solid ${GREEN}`,
              boxShadow:       '0 24px 64px rgba(0,0,0,0.6)',
              animation:       'fwa-bubble-in 0.35s cubic-bezier(0.16,1,0.3,1) forwards',
              direction:       t.dir,
              overflow:        'hidden',
            }}
          >
            {/* Card header */}
            <div style={{
              background:     'linear-gradient(135deg, #1a2e1a 0%, #0f1f0f 100%)',
              padding:        '14px 16px',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'space-between',
              gap:            '10px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Avatar */}
                <div style={{
                  width:           '36px',
                  height:          '36px',
                  borderRadius:    '50%',
                  backgroundColor: GREEN,
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  flexShrink:      0,
                  position:        'relative',
                }}>
                  <WAIcon size={20} />
                  {/* Online dot */}
                  <div style={{
                    position:        'absolute',
                    bottom:          '1px',
                    right:           '1px',
                    width:           '9px',
                    height:          '9px',
                    borderRadius:    '50%',
                    backgroundColor: '#22C55E',
                    border:          '2px solid #1a2e1a',
                  }} />
                </div>
                <div>
                  <div style={{
                    fontSize:      '11px',
                    fontFamily:    FONT_B,
                    fontWeight:    600,
                    color:         '#F8F7F4',
                    letterSpacing: '0.04em',
                  }}>
                    {t.tag}
                  </div>
                  <div style={{
                    fontSize:   '10px',
                    fontFamily: FONT_B,
                    color:      '#22C55E',
                    marginTop:  '1px',
                  }}>
                    ● Online
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                style={{
                  background:  'rgba(255,255,255,0.06)',
                  border:      '1px solid rgba(255,255,255,0.08)',
                  borderRadius:'50%',
                  width:       '28px',
                  height:      '28px',
                  display:     'flex',
                  alignItems:  'center',
                  justifyContent: 'center',
                  cursor:      'pointer',
                  transition:  'background 0.2s ease',
                  flexShrink:  0,
                }}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Message body */}
            <div style={{ padding: '16px' }}>
              {/* Chat bubble */}
              <div style={{
                backgroundColor: '#1A1A1A',
                border:          '1px solid rgba(255,255,255,0.06)',
                padding:         '12px 14px',
                marginBottom:    '4px',
                position:        'relative',
              }}>
                <p style={{
                  fontSize:   '13px',
                  fontFamily: FONT_B,
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color:      'rgba(248,247,244,0.82)',
                  margin:     0,
                }}>
                  {t.msg}
                </p>
                {/* Typing indicator dots */}
                <div style={{
                  display:    'flex',
                  gap:        '4px',
                  marginTop:  '10px',
                  alignItems: 'center',
                }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width:           '5px',
                      height:          '5px',
                      borderRadius:    '50%',
                      backgroundColor: GREEN,
                      animation:       `fwa-dot-blink 1.4s ease-in-out ${i * 0.2}s infinite`,
                    }} />
                  ))}
                  <span style={{
                    fontSize:   '10px',
                    fontFamily: FONT_B,
                    color:      'rgba(248,247,244,0.3)',
                    marginLeft: '4px',
                  }}>
                    {t.response}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div style={{ padding: '0 16px 16px' }}>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCtaHover(true)}
                onMouseLeave={() => setCtaHover(false)}
                style={{
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'space-between',
                  gap:             '10px',
                  padding:         '13px 16px',
                  backgroundColor: ctaHover ? GREEN_DARK : GREEN,
                  color:           'white',
                  textDecoration:  'none',
                  fontSize:        '11px',
                  fontFamily:      FONT_B,
                  fontWeight:      500,
                  letterSpacing:   '0.14em',
                  textTransform:   'uppercase',
                  transition:      'background-color 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <WAIcon size={15} />
                  <span>{t.cta}</span>
                </div>
                <ArrowIcon />
              </a>
            </div>

            {/* Dismiss forever link */}
            <div style={{
              padding:    '0 16px 14px',
              textAlign:  'center',
            }}>
              <button
                onClick={() => setDismissed(true)}
                style={{
                  background:    'none',
                  border:        'none',
                  fontSize:      '10px',
                  fontFamily:    FONT_B,
                  color:         'rgba(248,247,244,0.22)',
                  cursor:        'pointer',
                  letterSpacing: '0.06em',
                  padding:       '4px 8px',
                  transition:    'color 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.color = 'rgba(248,247,244,0.5)'}
                onMouseLeave={e => e.target.style.color = 'rgba(248,247,244,0.22)'}
              >
                Don't show again
              </button>
            </div>
          </div>
        )}

        {/* ── FAB button ── */}
        <div style={{ position: 'relative' }}>

          {/* Pulse ring */}
          {pulse && !open && (
            <div style={{
              position:        'absolute',
              inset:           '-6px',
              borderRadius:    '50%',
              border:          `2px solid ${GREEN}`,
              animation:       'fwa-pulse-ring 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
              pointerEvents:   'none',
            }} />
          )}

          {/* Unread badge */}
          {!open && visible && (
            <div style={{
              position:        'absolute',
              top:             '-4px',
              right:           isRTL ? 'auto' : '-4px',
              left:            isRTL ? '-4px' : 'auto',
              width:           '18px',
              height:          '18px',
              borderRadius:    '50%',
              backgroundColor: '#C8102E',
              border:          '2px solid #080808',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              fontSize:        '9px',
              fontFamily:      FONT_B,
              fontWeight:      700,
              color:           'white',
              animation:       'fwa-badge-pop 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
              zIndex:          1,
            }}>
              1
            </div>
          )}

          {/* Main FAB */}
          <button
            onClick={() => setOpen(o => !o)}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            aria-label={t.tooltip}
            title={t.tooltip}
            style={{
              width:           '56px',
              height:          '56px',
              borderRadius:    '50%',
              backgroundColor: btnHover ? GREEN_DARK : GREEN,
              border:          'none',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              cursor:          'pointer',
              boxShadow:       btnHover
                ? '0 8px 32px rgba(37,211,102,0.5)'
                : '0 4px 20px rgba(37,211,102,0.35)',
              transform:       visible
                ? btnHover ? 'scale(1.08)' : 'scale(1)'
                : 'translateY(80px)',
              opacity:         visible ? 1 : 0,
              animation:       visible ? 'fwa-slideup 0.5s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
              transition:      'background-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
            }}
          >
            {/* Rotate icon when open */}
            <div style={{
              transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
              transform:  open ? 'rotate(90deg) scale(0.85)' : 'rotate(0deg) scale(1)',
              display:    'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {open ? <CloseIcon /> : <WAIcon size={26} />}
            </div>
          </button>
        </div>
      </div>
    </>
  )
}