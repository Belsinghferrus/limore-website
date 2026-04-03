'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    category: 'Service',
    label: 'Private Jet Transfers',
    eyebrow: 'Tarmac to Destination',
    headline: 'The Moment You\nStep Off the Jet,\nWe Are Already There.',
    sub: 'Ground transport that coordinates directly with your aircraft, your FBO, and your crew. No waiting. No exposure. No compromise.',
    cta: 'Arrange a Transfer',
    ctaSecondary: 'View Fleet',
    tags: ['FBO Access', 'Tarmac Coordination', 'Flight Monitoring', 'Zero Wait Time'],
    stat1val: 'Airside',  stat1label: 'Vehicle Staging',
    stat2val: '24/7',     stat2label: 'Flight Tracking',
    stat3val: '8',        stat3label: 'FBO Cities',
  },
  ar: {
    category: 'الخدمة',
    label: 'نقل الطائرات الخاصة',
    eyebrow: 'من المدرج إلى الوجهة',
    headline: 'في اللحظة التي\nتنزل فيها من الطائرة،\nنحن هناك بالفعل.',
    sub: 'نقل أرضي يتنسق مباشرة مع طائرتك ومجمع الطيران وطاقمك. لا انتظار. لا تعرض. لا تنازل.',
    cta: 'ترتيب نقل',
    ctaSecondary: 'عرض الأسطول',
    tags: ['وصول إلى المدرج', 'تنسيق المدرج', 'تتبع الرحلات', 'وقت انتظار صفري'],
    stat1val: 'جوي',     stat1label: 'توقف المركبة',
    stat2val: '24/7',    stat2label: 'تتبع الرحلات',
    stat3val: '8',       stat3label: 'مدن مجمعات الطيران',
  },
  fr: {
    category: 'Service',
    label: 'Transferts Jet Privé',
    eyebrow: 'Du Tarmac à la Destination',
    headline: 'Au Moment Où\nVous Descendez du Jet,\nNous Sommes Déjà Là.',
    sub: 'Transport terrestre coordonné directement avec votre aéronef, votre FBO et votre équipage. Aucune attente. Aucune exposition. Aucun compromis.',
    cta: 'Organiser un Transfert',
    ctaSecondary: 'Voir la Flotte',
    tags: ['Accès FBO', 'Coordination Tarmac', 'Suivi de Vol', 'Zéro Temps d\'Attente'],
    stat1val: 'Côté Piste', stat1label: 'Positionnement Véhicule',
    stat2val: '24/7',       stat2label: 'Suivi de Vol',
    stat3val: '8',          stat3label: 'Villes FBO',
  },
}

export default function PJHero({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'
  const lp      = (href) => `/${locale}${href}`

  const sectionRef  = useRef(null)
  const imgRef      = useRef(null)
  const breadRef    = useRef(null)
  const eyebrowRef  = useRef(null)
  const line1Ref    = useRef(null)
  const line2Ref    = useRef(null)
  const line3Ref    = useRef(null)
  const tagsRef     = useRef(null)
  const subRef      = useRef(null)
  const ctaRef      = useRef(null)
  const statsRef    = useRef(null)
  const ruleRef     = useRef(null)

  const lineRefs = [line1Ref, line2Ref, line3Ref]
  const lines    = content.headline.split('\n')

  const stats = [
    { val: content.stat1val, label: content.stat1label },
    { val: content.stat2val, label: content.stat2label },
    { val: content.stat3val, label: content.stat3label },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow cinematic zoom out
      gsap.fromTo(imgRef.current,
        { scale: 1.12 },
        { scale: 1, duration: 3, ease: 'power1.out' }
      )

      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(ruleRef.current,
        { scaleX: 0, transformOrigin: isRTL ? 'right' : 'left' },
        { scaleX: 1, duration: 1.4, ease: 'expo.out' }
      )
      .fromTo(breadRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }, '-=0.6'
      )
      .fromTo(eyebrowRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3'
      )

      lineRefs.forEach((r, i) => {
        tl.fromTo(r.current,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.05, ease: 'power4.out' },
          i === 0 ? '-=0.2' : '-=0.82'
        )
      })

      tl.fromTo(tagsRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.5'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(statsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }, '-=0.2'
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
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
      aria-label={content.label}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=90"
          alt="Private jet tarmac transfer — Limore luxury chauffeur"
          width={1920}
          height={1080}
          fetchPriority="high"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 55%',
            display: 'block',
          }}
        />
      </div>

      {/* Overlays — heavier vignette from right this time for layout variation */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to left, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.75) 45%, rgba(5,5,5,0.2) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '40%', zIndex: 2,
        background: 'linear-gradient(to top, #050505, transparent)',
        pointerEvents: 'none',
      }} />

      {/* Top fade */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '140px', zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.55), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Horizontal rule */}
      <div
        ref={ruleRef}
        style={{
          position: 'absolute', top: '88px',
          left: 0, right: 0,
          height: '1px',
          backgroundColor: 'rgba(196,30,30,0.3)',
          zIndex: 4,
          transformOrigin: isRTL ? 'right' : 'left',
        }}
      />

      {/* Content — right-aligned on desktop for layout change vs other pages */}
      <div
        className="pjh-content"
        style={{
          position: 'relative', zIndex: 5,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(100px, 12vw, 160px) clamp(24px, 6vw, 96px) clamp(60px, 8vh, 96px)',
        }}
      >
        {/* Breadcrumb */}
        <div
          ref={breadRef}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', opacity: 0 }}
        >
          {[
            { label: 'Limore', href: '/' },
            { label: content.category, href: '/services' },
          ].map((c, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link
                href={lp(c.href)}
                style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.22)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(248,247,244,0.55)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.22)'}
              >
                {c.label}
              </Link>
              <span style={{ color: 'rgba(248,247,244,0.15)', fontSize: '10px' }}>›</span>
            </span>
          ))}
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#C41E1E',
          }}>
            {content.label}
          </span>
        </div>

        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 400, letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.3)',
            marginBottom: '18px', opacity: 0,
          }}
        >
          {content.eyebrow}
        </p>

        {/* Headline */}
        <div style={{ marginBottom: 'clamp(20px, 3vh, 32px)' }}>
          {lines.map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <h1
                ref={lineRefs[i]}
                style={{
                  margin: 0,
                  fontSize: 'clamp(2.6rem, 7.5vw, 9rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: i === 2 ? 300 : 400,
                  fontStyle: i === 2 ? 'italic' : 'normal',
                  color: i === 2 ? 'rgba(248,247,244,0.5)' : '#F8F7F4',
                  lineHeight: 0.94,
                  letterSpacing: '-0.02em',
                  opacity: 0,
                }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div
          ref={tagsRef}
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '8px',
            marginBottom: 'clamp(18px, 2.5vh, 28px)',
            opacity: 0,
          }}
        >
          {content.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 400, letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: i === 0 ? '#C41E1E' : 'rgba(248,247,244,0.22)',
                border: `1px solid ${i === 0 ? 'rgba(196,30,30,0.35)' : 'rgba(248,247,244,0.07)'}`,
                padding: '5px 12px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Sub + CTA */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          flexWrap: 'wrap', gap: 'clamp(24px, 4vw, 56px)',
          marginBottom: 'clamp(32px, 5vh, 56px)',
        }}>
          <p
            ref={subRef}
            style={{
              fontSize: 'clamp(0.82rem, 1.3vw, 0.96rem)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300, color: 'rgba(248,247,244,0.38)',
              lineHeight: 1.9, maxWidth: '380px', opacity: 0,
            }}
          >
            {content.sub}
          </p>
          <div
            ref={ctaRef}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', opacity: 0, flexShrink: 0 }}
          >
            <Link
              href={lp('/contact')}
              className="pjh-btn-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 30px',
                backgroundColor: '#C41E1E', color: '#fff',
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {content.cta}
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
                <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link
              href={lp('/fleet')}
              className="pjh-btn-ghost"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '12px 26px',
                backgroundColor: 'transparent',
                color: 'rgba(248,247,244,0.55)',
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid rgba(248,247,244,0.12)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          style={{
            display: 'flex', flexWrap: 'wrap',
            borderTop: '1px solid rgba(248,247,244,0.06)',
            paddingTop: '24px', gap: '0',
            opacity: 0,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                paddingInline: i === 0 ? '0 36px' : '36px',
                borderLeft: i > 0 && !isRTL ? '1px solid rgba(248,247,244,0.07)' : 'none',
                borderRight: i > 0 && isRTL ? '1px solid rgba(248,247,244,0.07)' : 'none',
                paddingBlock: '4px',
              }}
            >
              <p style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
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
                color: 'rgba(248,247,244,0.25)',
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pjh-btn-primary:hover { background-color: #A01515 !important; transform: translateY(-1px); }
        .pjh-btn-ghost:hover { border-color: rgba(248,247,244,0.4) !important; color: #F8F7F4 !important; }
        @media (min-width: 1024px) {
          .pjh-content { align-items: flex-end; text-align: ${isRTL ? 'right' : 'left'}; }
        }
      `}</style>
    </section>
  )
}