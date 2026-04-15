'use client'

import { useState, useRef } from 'react'

export default function BlogShareButton({ post, locale, imgUrl }) {
  const [open,   setOpen]   = useState(false)
  const [copied, setCopied] = useState(false)
  const [genImg, setGenImg] = useState(null)

  const title   = post.title?.[locale]   || post.title?.en   || ''
  const excerpt = post.excerpt?.[locale] || post.excerpt?.en || ''
  const url     = typeof window !== 'undefined' ? window.location.href : ''

  // ── Generate branded canvas card ─────────────────────────────────────────
  async function generateCard() {
    const canvas  = document.createElement('canvas')
    canvas.width  = 1080
    canvas.height = 1080
    const ctx     = canvas.getContext('2d')

    ctx.fillStyle = '#080808'
    ctx.fillRect(0, 0, 1080, 1080)

    ctx.fillStyle = '#C8102E'
    ctx.fillRect(0, 0, 1080, 3)

    if (imgUrl) {
      try {
        const img = await loadImage(imgUrl)
        ctx.save()
        ctx.globalAlpha = 0.22
        ctx.drawImage(img, 0, 0, 1080, 520)
        ctx.restore()
        const grad = ctx.createLinearGradient(0, 260, 0, 520)
        grad.addColorStop(0, 'rgba(8,8,8,0)')
        grad.addColorStop(1, 'rgba(8,8,8,1)')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, 1080, 520)
      } catch (_) {}
    }

    ctx.fillStyle = '#C8102E'
    ctx.fillRect(72, 440, 1, 320)

    ctx.font          = '500 22px Inter, sans-serif'
    ctx.fillStyle     = '#C8102E'
    ctx.letterSpacing = '6px'
    ctx.fillText(
      (post.category?.[locale] || post.category?.en || 'LIMORE JOURNAL').toUpperCase(),
      96, 490
    )

    ctx.font          = '300 68px "Cormorant Garamond", Georgia, serif'
    ctx.fillStyle     = '#F8F7F4'
    ctx.letterSpacing = '-1px'
    wrapText(ctx, title, 96, 580, 888, 78)

    ctx.font          = '300 28px Inter, sans-serif'
    ctx.fillStyle     = 'rgba(248,247,244,0.38)'
    ctx.letterSpacing = '0px'
    wrapText(ctx, excerpt, 96, 780, 800, 40, 2)

    ctx.fillStyle = 'rgba(255,255,255,0.08)'
    ctx.fillRect(96, 880, 888, 1)

    ctx.font          = '500 26px Inter, sans-serif'
    ctx.fillStyle     = 'rgba(248,247,244,0.18)'
    ctx.letterSpacing = '10px'
    ctx.fillText('LIMORE', 96, 936)

    ctx.font          = '400 20px Inter, sans-serif'
    ctx.fillStyle     = 'rgba(248,247,244,0.14)'
    ctx.letterSpacing = '1px'
    ctx.textAlign     = 'right'
    ctx.fillText('limore.com', 984, 936)
    ctx.textAlign     = 'left'

    ctx.fillStyle = '#C8102E'
    ctx.fillRect(0, 1077, 1080, 3)

    const dataUrl = canvas.toDataURL('image/png')
    setGenImg(dataUrl)
    return dataUrl
  }

  // ── Share handlers ────────────────────────────────────────────────────────
  async function shareNative() {
    const dataUrl = genImg || await generateCard()
    const blob    = await (await fetch(dataUrl)).blob()
    const file    = new File([blob], 'limore-journal.png', { type: 'image/png' })
    if (navigator.share && navigator.canShare({ files: [file] })) {
      await navigator.share({ title, text: excerpt, url, files: [file] })
    } else {
      await navigator.share({ title, text: excerpt, url })
    }
  }

  function shareWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n\n${excerpt}\n\n${url}`)}`, '_blank')
  }

  function shareTwitter() {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} — ${excerpt}`)}&url=${encodeURIComponent(url)}`, '_blank')
  }

  function shareLinkedIn() {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
  }

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  async function downloadCard() {
    const dataUrl = genImg || await generateCard()
    const a       = document.createElement('a')
    a.href        = dataUrl
    a.download    = `limore-${post.slug?.current || 'article'}.png`
    a.click()
  }

  return (
    <>
      {/* ── Trigger ── */}
      <button
        onClick={() => { setOpen(true); generateCard() }}
        aria-label="Share this article"
        style={{
          display:         'inline-flex',
          alignItems:      'center',
          gap:             '14px',
          padding:         'clamp(12px, 1.5vw, 16px) clamp(20px, 3vw, 32px)',
          backgroundColor: '#C41E1E',
          border:          '1px solid #C41E1E',
          color:           '#F8F7F4',
          cursor:          'pointer',
          flexShrink:      0,
          transition:      'background-color 0.25s ease, border-color 0.25s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#A01515'
          e.currentTarget.style.borderColor     = '#A01515'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#C41E1E'
          e.currentTarget.style.borderColor     = '#C41E1E'
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          <circle cx="18" cy="5"  r="3"/>
          <circle cx="6"  cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
        </svg>
        <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{
            fontFamily:    'Inter, sans-serif',
            fontSize:      '9px',
            fontWeight:    400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color:         'rgba(248,247,244,0.55)',
            lineHeight:    1,
          }}>
            Limore Journal
          </span>
          <span style={{
            fontFamily:    'Inter, sans-serif',
            fontSize:      '10px',
            fontWeight:    500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         '#F8F7F4',
            lineHeight:    1,
            whiteSpace:    'nowrap',
          }}>
            Share This Article
          </span>
        </span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" style={{ opacity: 0.6, marginLeft: '2px' }}>
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      </button>

      {/* ── Modal ── */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position:        'fixed',
            inset:           0,
            zIndex:          9999,
            backgroundColor: 'rgba(0,0,0,0.82)',
            backdropFilter:  'blur(6px)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            padding:         '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position:        'relative',
              backgroundColor: '#0D0D0D',
              border:          '1px solid rgba(255,255,255,0.07)',
              width:           '100%',
              maxWidth:        '460px',
              maxHeight:       '90vh',
              overflowY:       'auto',
              paddingBottom:   '28px',
            }}
          >
            {/* Red top rule */}
            <div style={{ width: '100%', height: '2px', backgroundColor: '#C8102E' }} />

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position:        'absolute',
                top:             '14px',
                right:           '16px',
                background:      'none',
                border:          'none',
                cursor:          'pointer',
                color:           'rgba(248,247,244,0.3)',
                padding:         '4px',
                display:         'flex',
                alignItems:      'center',
                transition:      'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#F8F7F4'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.3)'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Preview card */}
            <div style={{ padding: '20px 24px 0' }}>
              {genImg
                ? <img src={genImg} alt="Share card preview" style={{ width: '100%', aspectRatio: '1/1', display: 'block', border: '1px solid rgba(255,255,255,0.06)' }} />
                : (
                  <div style={{
                    width: '100%', aspectRatio: '1/1',
                    background: 'linear-gradient(90deg, #111 25%, #181818 50%, #111 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'bsb-shimmer 1.4s ease-in-out infinite',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }} />
                )
              }
              <p style={{
                fontFamily:    'Inter, sans-serif',
                fontSize:      '9px',
                fontWeight:    400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color:         'rgba(248,247,244,0.18)',
                margin:        '8px 0 0',
                textAlign:     'center',
              }}>
                Your branded share card
              </p>
            </div>

            {/* Article title */}
            <div style={{ padding: '20px 24px 0' }}>
              <span style={{
                display:       'block',
                fontFamily:    'Inter, sans-serif',
                fontSize:      '9px',
                fontWeight:    500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color:         '#C8102E',
                marginBottom:  '6px',
              }}>
                Share this Journal
              </span>
              <p style={{
                fontFamily:           'Cormorant Garamond, Georgia, serif',
                fontSize:             'clamp(1rem, 2.5vw, 1.3rem)',
                fontWeight:           300,
                color:                'rgba(248,247,244,0.65)',
                lineHeight:           1.3,
                margin:               0,
                display:              '-webkit-box',
                WebkitLineClamp:      2,
                WebkitBoxOrient:      'vertical',
                overflow:             'hidden',
              }}>
                {title}
              </p>
            </div>

            {/* Share options */}
            <div style={{
              display:               'grid',
              gridTemplateColumns:   '1fr 1fr',
              gap:                   '8px',
              padding:               '20px 24px 0',
            }}>
              {/* Native share — full width, only on supporting devices */}
              {'share' in navigator && (
                <button
                  onClick={shareNative}
                  style={{
                    gridColumn:      '1 / -1',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    gap:             '9px',
                    padding:         '12px 16px',
                    backgroundColor: 'rgba(200,16,46,0.08)',
                    border:          '1px solid rgba(200,16,46,0.3)',
                    color:           'rgba(248,247,244,0.7)',
                    fontFamily:      'Inter, sans-serif',
                    fontSize:        '10px',
                    fontWeight:      500,
                    letterSpacing:   '0.14em',
                    textTransform:   'uppercase',
                    cursor:          'pointer',
                    transition:      'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(200,16,46,0.14)'
                    e.currentTarget.style.borderColor     = 'rgba(200,16,46,0.6)'
                    e.currentTarget.style.color           = '#F8F7F4'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(200,16,46,0.08)'
                    e.currentTarget.style.borderColor     = 'rgba(200,16,46,0.3)'
                    e.currentTarget.style.color           = 'rgba(248,247,244,0.7)'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                    <polyline points="16 6 12 2 8 6"/>
                    <line x1="12" y1="2" x2="12" y2="15"/>
                  </svg>
                  Share with Image
                </button>
              )}

              {/* WhatsApp */}
              {[
                {
                  label: 'WhatsApp', fn: shareWhatsApp,
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                },
                {
                  label: 'X (Twitter)', fn: shareTwitter,
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                },
                {
                  label: 'LinkedIn', fn: shareLinkedIn,
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                },
                {
                  label: copied ? 'Copied!' : 'Copy Link', fn: copyLink,
                  icon: copied
                    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                },
              ].map(({ label, fn, icon }) => (
                <button
                  key={label}
                  onClick={fn}
                  style={{
                    display:         'flex',
                    alignItems:      'center',
                    gap:             '8px',
                    padding:         '11px 14px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border:          '1px solid rgba(255,255,255,0.07)',
                    color:           'rgba(248,247,244,0.5)',
                    fontFamily:      'Inter, sans-serif',
                    fontSize:        '10px',
                    fontWeight:      500,
                    letterSpacing:   '0.12em',
                    textTransform:   'uppercase',
                    cursor:          'pointer',
                    whiteSpace:      'nowrap',
                    transition:      'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.borderColor     = 'rgba(255,255,255,0.14)'
                    e.currentTarget.style.color           = '#F8F7F4'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.borderColor     = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.color           = 'rgba(248,247,244,0.5)'
                  }}
                >
                  {icon}
                  {label}
                </button>
              ))}

              {/* Download card — full width */}
              <button
                onClick={downloadCard}
                style={{
                  gridColumn:      '1 / -1',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  gap:             '8px',
                  padding:         '11px 16px',
                  backgroundColor: 'transparent',
                  border:          '1px dashed rgba(255,255,255,0.1)',
                  color:           'rgba(248,247,244,0.3)',
                  fontFamily:      'Inter, sans-serif',
                  fontSize:        '10px',
                  fontWeight:      500,
                  letterSpacing:   '0.14em',
                  textTransform:   'uppercase',
                  cursor:          'pointer',
                  transition:      'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderStyle = 'solid'
                  e.currentTarget.style.borderColor = 'rgba(200,16,46,0.4)'
                  e.currentTarget.style.color       = 'rgba(248,247,244,0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderStyle = 'dashed'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color       = 'rgba(248,247,244,0.3)'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Card
              </button>
            </div>

            {/* Footer note */}
            <p style={{
              fontFamily:    'Inter, sans-serif',
              fontSize:      '10px',
              fontWeight:    300,
              color:         'rgba(248,247,244,0.18)',
              lineHeight:    1.7,
              margin:        '16px 24px 0',
              textAlign:     'center',
            }}>
              Share the card directly to Instagram Stories, WhatsApp Status, or LinkedIn.
            </p>
          </div>
        </div>
      )}

      {/* Shimmer keyframe — only thing that needs a style tag */}
      <style>{`
        @keyframes bsb-shimmer {
          0%   { background-position: -200% 0 }
          100% { background-position:  200% 0 }
        }
      `}</style>
    </>
  )
}

// ── Utilities ─────────────────────────────────────────────────────────────
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img     = new window.Image()
    img.crossOrigin = 'anonymous'
    img.onload  = () => resolve(img)
    img.onerror = reject
    img.src     = src
  })
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const words = text.split(' ')
  let line    = ''
  let lines   = 0
  for (let i = 0; i < words.length; i++) {
    const test  = line + words[i] + ' '
    const width = ctx.measureText(test).width
    if (width > maxWidth && i > 0) {
      ctx.fillText(line, x, y)
      line = words[i] + ' '
      y   += lineHeight
      lines++
      if (lines >= maxLines - 1) {
        ctx.fillText(line + '…', x, y)
        return
      }
    } else {
      line = test
    }
  }
  ctx.fillText(line, x, y)
}