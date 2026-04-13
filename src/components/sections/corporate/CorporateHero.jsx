'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    breadcrumb:  'Corporate Solutions',
    eyebrow:     'For Organisations',
    line1:       'Ground Transport',
    line2:       'Built for',
    line3:       'Business.',
    sub:         'Global corporations, investment banks, and luxury brands rely on Limore for executive ground transport that operates to their standard — across every city, every time zone.',
    cta:         'Request Corporate Account',
    ctaSub:      'Speak to a Corporate Advisor',
    whatsapp:    'https://wa.me/971563454698',
    badge:       'Trusted by Finance, Luxury & Enterprise',
  },
  ar: {
    breadcrumb:  'حلول مؤسسية',
    eyebrow:     'للمؤسسات',
    line1:       'نقل بري',
    line2:       'مصمم',
    line3:       'للأعمال.',
    sub:         'تعتمد الشركات العالمية وبنوك الاستثمار والعلامات التجارية الفاخرة على ليمور للنقل البري التنفيذي الذي يعمل وفق معاييرها — في كل مدينة وكل منطقة زمنية.',
    cta:         'طلب حساب مؤسسي',
    ctaSub:      'تحدث مع مستشار مؤسسي',
    whatsapp:    'https://wa.me/971563454698',
    badge:       'موثوق به من قِبل المالية والفاخر والمؤسسات',
  },
  fr: {
    breadcrumb:  'Solutions Corporate',
    eyebrow:     'Pour les Organisations',
    line1:       'Transport Terrestre',
    line2:       'Conçu pour',
    line3:       'les Entreprises.',
    sub:         'Les grandes entreprises, banques d\'investissement et marques de luxe font confiance à Limore pour leur transport terrestre exécutif — dans chaque ville, chaque fuseau horaire.',
    cta:         'Demander un Compte Entreprise',
    ctaSub:      'Parler à un Conseiller Corporate',
    whatsapp:    'https://wa.me/971563454698',
    badge:       'Approuvé par la Finance, le Luxe & les Entreprises',
  },
}

export default function CorporateHero({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const lp         = (href) => `/${locale}${href}`
  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const badgeRef   = useRef(null)
  const eyeRef     = useRef(null)
  const linesRef   = useRef([])
  const subRef     = useRef(null)
  const ctaRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 2.8, ease: 'power1.out' }
      )
      const tl = gsap.timeline({ delay: 0.15 })
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
      tl.fromTo(eyeRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      )
      linesRef.current.forEach((el, i) => {
        tl.fromTo(el,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.05, ease: 'power4.out' },
          i === 0 ? '-=0.1' : '-=0.82'
        )
      })
      tl.fromTo(subRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const lines = [
    { text: content.line1, italic: false },
    { text: content.line2, italic: false },
    { text: content.line3, italic: true  },
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative', width: '100%', minHeight: '100vh',
        overflow: 'hidden', backgroundColor: '#050505',
        display: 'flex', flexDirection: 'column',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=85"
          alt="Corporate boardroom — Limore executive ground transport"
          width={1920} height={1080}
          fetchPriority="high"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(105deg, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.72) 50%, rgba(5,5,5,0.25) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '40%', zIndex: 2,
        background: 'linear-gradient(to top, #050505, transparent)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 5, flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px, 12vw, 160px) clamp(24px, 6vw, 96px) clamp(48px, 7vh, 80px)',
        maxWidth: '900px',
      }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
          <Link href={lp('/')} style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.2)', textDecoration: 'none' }}>
            Limore
          </Link>
          <span style={{ color: 'rgba(248,247,244,0.12)', fontSize: '10px' }}>›</span>
          <span style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C41E1E' }}>
            {content.breadcrumb}
          </span>
        </div>

        {/* Trust badge */}
        <div
          ref={badgeRef}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '20px', opacity: 0,
          }}
        >
          <div style={{ display: 'flex', gap: '3px' }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{ width: '6px', height: '6px', backgroundColor: '#C41E1E', opacity: 1 - i * 0.25 }} />
            ))}
          </div>
          <span style={{
            fontSize: '9px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(248,247,244,0.38)',
          }}>
            {content.badge}
          </span>
        </div>

        <p ref={eyeRef} style={{
          fontSize: '10px', fontFamily: 'Inter, sans-serif',
          fontWeight: 400, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'rgba(248,247,244,0.25)',
          marginBottom: '12px', opacity: 0,
        }}>
          {content.eyebrow}
        </p>

        {/* Headline */}
        <div style={{ marginBottom: 'clamp(20px, 3vh, 32px)' }}>
          {lines.map((l, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <h1
                ref={el => (linesRef.current[i] = el)}
                style={{
                  margin: 0,
                  fontSize: 'clamp(2.8rem, 8vw, 10rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: l.italic ? 300 : 400,
                  fontStyle: l.italic ? 'italic' : 'normal',
                  color: l.italic ? 'rgba(248,247,244,0.38)' : '#F8F7F4',
                  lineHeight: 0.92, letterSpacing: '-0.02em', opacity: 0,
                }}
              >
                {l.text}
              </h1>
            </div>
          ))}
        </div>

        <p ref={subRef} style={{
          fontSize: 'clamp(0.82rem, 1.2vw, 0.96rem)',
          fontFamily: 'Inter, sans-serif', fontWeight: 300,
          color: 'rgba(248,247,244,0.32)', lineHeight: 1.9,
          maxWidth: '460px', marginBottom: 'clamp(28px, 4vh, 40px)', opacity: 0,
        }}>
          {content.sub}
        </p>

        {/* CTAs */}
        <div ref={ctaRef} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', opacity: 0 }}>
          <Link
            href={lp('/contact')}
            className="corp-cta-primary"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '15px 32px',
              backgroundColor: '#C41E1E', color: '#fff',
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.2em',
              textTransform: 'uppercase', textDecoration: 'none',
              transition: 'background-color 0.25s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {content.cta}
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
              <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            href={content.whatsapp}
            target="_blank" rel="noopener noreferrer"
            className="corp-cta-ghost"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '15px 28px',
              backgroundColor: 'transparent', color: 'rgba(248,247,244,0.5)',
              border: '1px solid rgba(248,247,244,0.12)',
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 400, letterSpacing: '0.2em',
              textTransform: 'uppercase', textDecoration: 'none',
              transition: 'border-color 0.25s ease, color 0.25s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {content.ctaSub}
          </a>
        </div>
      </div>

      // ✅ FIXED
<style>{`
  .corp-cta-primary:hover { background-color: #A01515 !important; }
  .corp-cta-ghost:hover { border-color: rgba(248,247,244,0.4) !important; color: rgba(248,247,244,0.85) !important; }
  @media (max-width: 600px) {
    .corp-cta-primary, .corp-cta-ghost {
      width: 100% !important;
      box-sizing: border-box !important;
      justify-content: space-between !important;
    }
  }
`}</style>
    </section>
  )
}