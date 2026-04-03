'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    breadcrumb: 'Services',
    eyebrow: 'What We Do',
    line1: 'Every Journey.',
    line2: 'One Standard.',
    sub: 'Four service categories. One operating principle — that no detail of your ground transport is left to chance.',
    cta: 'View All Services',
    stat1val: '4',    stat1label: 'Service Categories',
    stat2val: '8',    stat2label: 'Global Cities',
    stat3val: '24/7', stat3label: 'Operations',
  },
  ar: {
    breadcrumb: 'الخدمات',
    eyebrow: 'ما نقدمه',
    line1: 'كل رحلة.',
    line2: 'معيار واحد.',
    sub: 'أربع فئات خدمة. مبدأ تشغيلي واحد — ألا يُترك أي تفصيل من تفاصيل نقلك الأرضي للصدفة.',
    cta: 'عرض جميع الخدمات',
    stat1val: '4',    stat1label: 'فئات الخدمة',
    stat2val: '8',    stat2label: 'مدن عالمية',
    stat3val: '24/7', stat3label: 'عمليات',
  },
  fr: {
    breadcrumb: 'Services',
    eyebrow: 'Ce Que Nous Faisons',
    line1: 'Chaque Voyage.',
    line2: 'Un Standard.',
    sub: 'Quatre catégories de service. Un principe opérationnel — qu\'aucun détail de votre transport terrestre ne soit laissé au hasard.',
    cta: 'Voir Tous les Services',
    stat1val: '4',    stat1label: 'Catégories de Service',
    stat2val: '8',    stat2label: 'Villes Mondiales',
    stat3val: '24/7', stat3label: 'Opérations',
  },
}

export default function ServicesHero({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'
  const lp      = (href) => `/${locale}${href}`

  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const eyeRef     = useRef(null)
  const h1aRef     = useRef(null)
  const h1bRef     = useRef(null)
  const subRef     = useRef(null)
  const ctaRef     = useRef(null)
  const statsRef   = useRef(null)
  const ruleRef    = useRef(null)

  const stats = [
    { val: content.stat1val, label: content.stat1label },
    { val: content.stat2val, label: content.stat2label },
    { val: content.stat3val, label: content.stat3label },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 2.8, ease: 'power1.out' }
      )

      const tl = gsap.timeline({ delay: 0.15 })

      tl.fromTo(ruleRef.current,
        { scaleX: 0, transformOrigin: isRTL ? 'right' : 'left' },
        { scaleX: 1, duration: 1.2, ease: 'expo.out' }
      )
      .fromTo(eyeRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo([h1aRef.current, h1bRef.current],
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power4.out', stagger: 0.08 }, '-=0.2'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(statsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.55 }, '-=0.2'
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        overflow: 'hidden',
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
      aria-label={content.breadcrumb}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
          alt="Limore premium chauffeur services overview"
          width={1920}
          height={1080}
          fetchPriority="high"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 40%',
            display: 'block',
          }}
        />
      </div>

      {/* Overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.65) 55%, rgba(5,5,5,0.2) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '35%', zIndex: 2,
        background: 'linear-gradient(to top, #050505, transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '120px', zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Horizontal rule */}
      <div
        ref={ruleRef}
        style={{
          position: 'absolute', top: '88px',
          left: 0, right: 0, height: '1px',
          backgroundColor: 'rgba(196,30,30,0.25)',
          zIndex: 4,
          transformOrigin: isRTL ? 'right' : 'left',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative', zIndex: 5,
          flex: 1,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(100px, 12vw, 150px) clamp(24px, 6vw, 96px) clamp(48px, 7vh, 80px)',
        }}
      >
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
          <Link
            href={lp('/')}
            style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 400, letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(248,247,244,0.22)',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(248,247,244,0.55)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.22)'}
          >
            Limore
          </Link>
          <span style={{ color: 'rgba(248,247,244,0.15)', fontSize: '10px' }}>›</span>
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#C41E1E',
          }}>
            {content.breadcrumb}
          </span>
        </div>

        {/* Eyebrow */}
        <p
          ref={eyeRef}
          style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 400, letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.28)',
            marginBottom: '16px', opacity: 0,
          }}
        >
          {content.eyebrow}
        </p>

        {/* Headline */}
        <div style={{ marginBottom: 'clamp(20px, 3vh, 36px)' }}>
          {[
            { ref: h1aRef, text: content.line1, italic: false },
            { ref: h1bRef, text: content.line2, italic: true },
          ].map((l, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <h1
                ref={l.ref}
                style={{
                  margin: 0,
                  fontSize: 'clamp(3rem, 9vw, 11rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: l.italic ? 300 : 400,
                  fontStyle: l.italic ? 'italic' : 'normal',
                  color: l.italic ? 'rgba(248,247,244,0.45)' : '#F8F7F4',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  opacity: 0,
                }}
              >
                {l.text}
              </h1>
            </div>
          ))}
        </div>

        {/* Sub + CTA */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap',
          gap: 'clamp(24px, 4vw, 56px)',
          marginBottom: 'clamp(32px, 5vh, 52px)',
        }}>
          <p
            ref={subRef}
            style={{
              fontSize: 'clamp(0.82rem, 1.3vw, 0.96rem)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300, color: 'rgba(248,247,244,0.35)',
              lineHeight: 1.9, maxWidth: '360px', opacity: 0,
            }}
          >
            {content.sub}
          </p>
          <div ref={ctaRef} style={{ opacity: 0, flexShrink: 0 }}>
            <a
              href="#services-grid"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 30px',
                backgroundColor: 'transparent',
                color: 'rgba(248,247,244,0.55)',
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid rgba(248,247,244,0.12)',
                transition: 'all 0.3s ease',
              }}
              className="svc-hero-cta"
            >
              {content.cta}
              <svg width="10" height="13" viewBox="0 0 10 13" fill="none" aria-hidden="true">
                <path d="M5 1v11M1 8l4 4 4-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{
            display: 'flex', flexWrap: 'wrap',
            borderTop: '1px solid rgba(248,247,244,0.06)',
            paddingTop: '22px', gap: '0',
            opacity: 0,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                paddingInline: i === 0 ? '0 32px' : '32px',
                borderLeft: i > 0 && !isRTL ? '1px solid rgba(248,247,244,0.07)' : 'none',
                borderRight: i > 0 && isRTL ? '1px solid rgba(248,247,244,0.07)' : 'none',
                paddingBlock: '4px',
              }}
            >
              <p style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#F8F7F4',
                lineHeight: 1, marginBottom: '4px',
              }}>
                {s.val}
              </p>
              <p style={{
                fontSize: '9px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(248,247,244,0.22)',
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-hero-cta:hover {
          border-color: rgba(248,247,244,0.4) !important;
          color: #F8F7F4 !important;
        }
      `}</style>
    </section>
  )
}