'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const t = {
  en: {
    label: 'About Limore',
    line1: 'The Journey',
    line2: 'Matters.',
    line3: 'Every part of it.',
    sub: 'Precision mobility trusted by the world\'s most demanding clients, corporations, and luxury brands.',
    scroll: 'Scroll',
  },
  ar: {
    label: 'عن ليمور',
    line1: 'ليست مجرد',
    line2: 'خدمة سائق.',
    line3: 'بل معيار.',
    sub: 'تنقل دقيق موثوق به من قبل أكثر عملاء العالم تطلبا والشركات والعلامات الفاخرة.',
    scroll: 'تمرير',
  },
  fr: {
    label: 'À Propos de Limore',
    line1: 'Pas Seulement un',
    line2: 'Service Chauffeur.',
    line3: 'Un Standard.',
    sub: 'Une mobilité de précision approuvée par les clients les plus exigeants du monde.',
    scroll: 'Défiler',
  },
}

export default function AboutHero({ locale = 'en' }) {
  const content   = t[locale] || t.en
  const isRTL     = locale === 'ar'
  const sectionRef = useRef(null)
  const videoRef   = useRef(null)
  const line1Ref   = useRef(null)
  const line2Ref   = useRef(null)
  const line3Ref   = useRef(null)
  const labelRef   = useRef(null)
  const subRef     = useRef(null)
  const scrollRef  = useRef(null)
  const ruleRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2.2, ease: 'power2.out' }
      )
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo(ruleRef.current,
        { scaleX: 0, transformOrigin: isRTL ? 'right' : 'left' },
        { scaleX: 1, duration: 1.2, ease: 'power4.out' }
      )
      .fromTo(labelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6'
      )
      ;[line1Ref, line2Ref, line3Ref].forEach((r, i) => {
        tl.fromTo(r.current,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: 'power4.out' },
          `-=0.7`
        )
      })
      tl.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4'
      )
      tl.fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }, '-=0.3'
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const lines = [
    { ref: line1Ref, text: content.line1, italic: false },
    { ref: line2Ref, text: content.line2, italic: false },
    { ref: line3Ref, text: content.line3, italic: true },
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#050505',
        direction: isRTL ? 'rtl' : 'ltr',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          
          src="/images/limore12.jpg"
          alt="Limore 360 - luxury chauffeur membership night drive"
          width={1920} height={1080}
          fetchPriority="high"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>
      {/* <video
        ref={videoRef}
        autoPlay muted loop playsInline
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0, zIndex: 0,
        }}
      >
        <source src="/images/limore12.jpg" type="video/mp4" />
      </video> */}

      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(110deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.7) 40%, rgba(5,5,5,0.3) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '240px', zIndex: 2,
        background: 'linear-gradient(to top, #050505, transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '140px', zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      <div
        ref={ruleRef}
        style={{
          position: 'absolute', top: '88px', left: 0, right: 0,
          height: '1px', backgroundColor: 'rgba(196,30,30,0.4)', zIndex: 4,
        }}
      />

      <div style={{
        position: 'relative', zIndex: 5,
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 6vw, 96px)',
        paddingTop: '140px',
      }}>
        <div
          ref={labelRef}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '32px', opacity: 0,
          }}
        >
          <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#C41E1E',
          }}>
            {content.label}
          </span>
        </div>

        <div style={{ marginBottom: 'clamp(24px, 4vh, 48px)' }}>
          {lines.map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <div ref={line.ref} style={{ opacity: 0 }}>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(3rem, 8vw, 9rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 300,
                  fontStyle: line.italic ? 'italic' : 'normal',
                  color: '#F8F7F4',
                  lineHeight: 0.95,
                  letterSpacing: '-0.01em',
                }}>
                  {line.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          ref={subRef}
          style={{
            fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            color: 'rgba(248,247,244,0.5)', lineHeight: 1.8,
            maxWidth: '420px', opacity: 0,
          }}
        >
          {content.sub}
        </p>
      </div>

      <div
        ref={scrollRef}
        style={{
          position: 'absolute', bottom: '32px',
          right: 'clamp(24px, 6vw, 96px)',
          zIndex: 5, display: 'flex', alignItems: 'center', gap: '12px', opacity: 0,
        }}
      >
        <span style={{
          fontSize: '9px', fontFamily: 'Inter, sans-serif',
          fontWeight: 500, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'rgba(248,247,244,0.25)',
        }}>
          {content.scroll}
        </span>
        <div style={{ width: '32px', height: '1px', overflow: 'hidden', position: 'relative', backgroundColor: 'rgba(248,247,244,0.1)' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: '#C41E1E', animation: 'scrollPulse 2s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}