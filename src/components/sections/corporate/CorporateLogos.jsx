'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: { label: 'Trusted by the world\'s most distinguished organisations' },
  ar: { label: 'موثوق به من قِبل أبرز المؤسسات في العالم' },
  fr: { label: 'Approuvé par les organisations les plus distinguées au monde' },
}

// Real Limore client references from thelimore.com
const logos = [
  { name: 'Chanel',           abbr: 'CHANEL' },
  { name: 'Richemont',        abbr: 'RICHEMONT' },
  { name: 'Louis Vuitton',    abbr: 'LOUIS VUITTON' },
  { name: 'Cartier',          abbr: 'CARTIER' },
  { name: 'Chopard',          abbr: 'CHOPARD' },
  { name: 'Apple',            abbr: 'APPLE' },
  { name: 'BlackRock',        abbr: 'BLACKROCK' },
  { name: 'Liberty Capital',  abbr: 'LIBERTY CAPITAL' },
]

export default function CorporateLogos({ locale = 'en' }) {
  const c      = t[locale] || t.en
  const isRTL  = locale === 'ar'
  const ref    = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
    )

    // Infinite marquee
    const track = trackRef.current
    if (!track) return
    const totalWidth = track.scrollWidth / 2
    gsap.to(track, {
      x: isRTL ? totalWidth : -totalWidth,
      duration: 28,
      ease: 'none',
      repeat: -1,
    })
  }, [isRTL])

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EBEBEB',
        padding: 'clamp(28px, 4vw, 44px) 0',
        overflow: 'hidden',
        opacity: 0,
      }}
    >
      {/* Label */}
      <p style={{
        fontSize: '9px', fontFamily: 'Inter, sans-serif',
        fontWeight: 500, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: '#CCCCCC',
        textAlign: 'center', marginBottom: 'clamp(16px, 2.5vw, 24px)',
      }}>
        {c.label}
      </p>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
          background: 'linear-gradient(to right, #FFFFFF, transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
          background: 'linear-gradient(to left, #FFFFFF, transparent)',
          pointerEvents: 'none',
        }} />

        <div
          ref={trackRef}
          style={{
            display: 'flex', alignItems: 'center',
            gap: 'clamp(36px, 6vw, 72px)',
            width: 'max-content',
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'center',
                padding: '0 clamp(12px, 2vw, 20px)',
                flexShrink: 0,
              }}
            >
              <span style={{
                fontSize: 'clamp(0.65rem, 1.1vw, 0.8rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 600,
                letterSpacing: '0.22em',
                color: '#C0C0C0',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease',
              }}
                className="corp-logo-name"
              >
                {logo.abbr}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .corp-logo-name:hover { color: #0A0A0A !important; }
      `}</style>
    </section>
  )
}