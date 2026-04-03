'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    category: 'Service',
    label: 'Corporate Chauffeur',
    line1: 'Your Business',
    line2: 'Moves at the',
    line3: 'Highest Standard.',
    sub: 'Dedicated ground mobility for the world\'s most demanding organisations. Precision, discretion, and reliability — on every journey.',
    cta: 'Enquire Now',
    ctaSecondary: 'All Services',
    stat1val: '24/7',  stat1label: 'Operations Desk',
    stat2val: '8',     stat2label: 'Global Cities',
    stat3val: '100%',  stat3label: 'Confidentiality',
  },
  ar: {
    category: 'الخدمة',
    label: 'السائق المؤسسي',
    line1: 'أعمالك',
    line2: 'تتحرك بأعلى',
    line3: 'المعايير.',
    sub: 'تنقل أرضي مخصص لأكثر المنظمات في العالم تطلبا. دقة وسرية وموثوقية في كل رحلة.',
    cta: 'استفسر الآن',
    ctaSecondary: 'جميع الخدمات',
    stat1val: '24/7',  stat1label: 'مكتب العمليات',
    stat2val: '8',     stat2label: 'مدن عالمية',
    stat3val: '100%',  stat3label: 'سرية تامة',
  },
  fr: {
    category: 'Service',
    label: 'Chauffeur Corporate',
    line1: 'Votre Activité',
    line2: 'Se Déplace au Plus',
    line3: 'Haut Niveau.',
    sub: 'Mobilité terrestre dédiée pour les organisations les plus exigeantes du monde. Précision, discrétion et fiabilité sur chaque trajet.',
    cta: 'Demander un Devis',
    ctaSecondary: 'Tous les Services',
    stat1val: '24/7',  stat1label: 'Bureau des Opérations',
    stat2val: '8',     stat2label: 'Villes Mondiales',
    stat3val: '100%',  stat3label: 'Confidentialité',
  },
}

export default function CCHero({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'

  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const ruleRef    = useRef(null)
  const breadRef   = useRef(null)
  const labelRef   = useRef(null)
  const line1Ref   = useRef(null)
  const line2Ref   = useRef(null)
  const line3Ref   = useRef(null)
  const subRef     = useRef(null)
  const ctaRef     = useRef(null)
  const statsRef   = useRef(null)

  const localePath = (href) => '/' + locale + href

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.07 },
        { scale: 1, duration: 2.2, ease: 'power2.out' }
      )

      const tl = gsap.timeline({ delay: 0.15 })

      tl.fromTo(ruleRef.current,
        { scaleX: 0, transformOrigin: isRTL ? 'right' : 'left' },
        { scaleX: 1, duration: 1.2, ease: 'power4.out' }
      )
      .fromTo(breadRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }, '-=0.5'
      )
      .fromTo(labelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7 }, '-=0.3'
      )

      ;[line1Ref, line2Ref, line3Ref].forEach((r) => {
        tl.fromTo(r.current,
          { yPercent: 115, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.05, ease: 'power4.out' },
          '-=0.72'
        )
      })

      tl.fromTo(subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(statsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7 }, '-=0.3'
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const lines = [
    { ref: line1Ref, text: content.line1, italic: false },
    { ref: line2Ref, text: content.line2, italic: false },
    { ref: line3Ref, text: content.line3, italic: true },
  ]

  const stats = [
    { val: content.stat1val, label: content.stat1label },
    { val: content.stat2val, label: content.stat2label },
    { val: content.stat3val, label: content.stat3label },
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
      {/* Hero image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90"
          alt="Corporate chauffeur service — Limore"
          width={1920}
          height={1080}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
            display: 'block',
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(115deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.75) 42%, rgba(5,5,5,0.2) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '320px', zIndex: 2,
        background: 'linear-gradient(to top, #050505, transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '160px', zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.6), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Red rule under nav */}
      <div
        ref={ruleRef}
        style={{
          position: 'absolute', top: '88px', left: 0, right: 0,
          height: '1px', backgroundColor: 'rgba(196,30,30,0.35)', zIndex: 4,
        }}
      />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 5,
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 6vw, 96px)',
        paddingTop: '156px',
      }}>

        {/* Breadcrumb */}
        <div
          ref={breadRef}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '28px', opacity: 0,
          }}
        >
          {[
            { label: 'Limore', href: '/' },
            { label: content.category, href: '/services' },
          ].map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link
                href={localePath(crumb.href)}
                style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: 'rgba(248,247,244,0.28)',
                  textDecoration: 'none', transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(248,247,244,0.65)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.28)'}
              >
                {crumb.label}
              </Link>
              <span style={{ color: 'rgba(248,247,244,0.18)', fontSize: '10px' }}>›</span>
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

        {/* Section label */}
        <div
          ref={labelRef}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '24px', opacity: 0,
          }}
        >
          <div style={{ width: '36px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#C41E1E',
          }}>
            {content.label}
          </span>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: 'clamp(20px, 3vh, 40px)' }}>
          {lines.map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <div ref={line.ref} style={{ opacity: 0 }}>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(2.8rem, 7.5vw, 8.5rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 300,
                  fontStyle: line.italic ? 'italic' : 'normal',
                  color: '#F8F7F4',
                  lineHeight: 0.96,
                  letterSpacing: '-0.01em',
                }}>
                  {line.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sub + CTA */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap',
          gap: 'clamp(24px, 4vw, 56px)',
          marginBottom: 'clamp(36px, 6vh, 64px)',
        }}>
          <p
            ref={subRef}
            style={{
              fontSize: 'clamp(0.82rem, 1.3vw, 0.96rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: 'rgba(248,247,244,0.48)', lineHeight: 1.85,
              maxWidth: '380px', opacity: 0,
            }}
          >
            {content.sub}
          </p>

          <div
            ref={ctaRef}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', opacity: 0, flexShrink: 0 }}
          >
            <Link
              href={localePath('/contact')}
              className="cch-btn-primary"
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
              href={localePath('/services')}
              className="cch-btn-ghost"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '12px 26px',
                backgroundColor: 'transparent', color: 'rgba(248,247,244,0.65)',
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid rgba(248,247,244,0.16)',
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
            borderTop: '1px solid rgba(248,247,244,0.07)',
            paddingTop: '24px', gap: '0', opacity: 0,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                paddingInline: i === 0 ? '0 36px' : '36px',
                borderLeft: i > 0 ? '1px solid rgba(248,247,244,0.08)' : 'none',
                paddingBlock: '4px',
              }}
            >
              <p style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#F8F7F4',
                lineHeight: 1, marginBottom: '4px',
              }}>
                {s.val}
              </p>
              <p style={{
                fontSize: '9px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'rgba(248,247,244,0.28)',
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cch-btn-primary:hover { background-color: #A01515 !important; transform: translateY(-1px); }
        .cch-btn-ghost:hover { border-color: rgba(248,247,244,0.45) !important; color: #F8F7F4 !important; }
      `}</style>
    </section>
  )
}