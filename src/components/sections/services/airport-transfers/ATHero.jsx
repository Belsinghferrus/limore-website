'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    category: 'Service',
    label: 'Airport Transfers',
    line1: 'Every Flight.',
    line2: 'Every Arrival.',
    line3: 'Zero Delays.',
    sub: 'Flight-tracked pickups, professional meet and greet, and seamless connections in every city we operate.',
    cta: 'Request a Transfer',
    ctaSecondary: 'View All Services',
    stat1val: '24/7', stat1label: 'Availability',
    stat2val: '60', stat2label: 'Min Pre-flight Monitoring',
    stat3val: '8', stat3label: 'Global Cities',
  },
  ar: {
    category: 'الخدمة',
    label: 'نقل المطار',
    line1: 'كل رحلة.',
    line2: 'كل وصول.',
    line3: 'صفر تأخير.',
    sub: 'استقبال مع تتبع الرحلات وخدمة الاستقبال الاحترافية وتوصيلات سلسة في كل مدينة نعمل بها.',
    cta: 'طلب نقل',
    ctaSecondary: 'جميع الخدمات',
    stat1val: '24/7', stat1label: 'متاح دائما',
    stat2val: '60', stat2label: 'دقيقة مراقبة قبل الرحلة',
    stat3val: '8', stat3label: 'مدن عالمية',
  },
  fr: {
    category: 'Service',
    label: 'Transferts Aéroport',
    line1: 'Chaque Vol.',
    line2: 'Chaque Arrivée.',
    line3: 'Zéro Délai.',
    sub: 'Prises en charge avec suivi de vol, accueil professionnel et correspondances fluides dans chaque ville.',
    cta: 'Demander un Transfert',
    ctaSecondary: 'Tous les Services',
    stat1val: '24/7', stat1label: 'Disponibilité',
    stat2val: '60', stat2label: 'Min Suivi Pré-vol',
    stat3val: '8', stat3label: 'Villes Mondiales',
  },
}

export default function ATHero({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'

  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const overlayRef = useRef(null)
  const labelRef   = useRef(null)
  const line1Ref   = useRef(null)
  const line2Ref   = useRef(null)
  const line3Ref   = useRef(null)
  const subRef     = useRef(null)
  const ctaRef     = useRef(null)
  const statsRef   = useRef(null)
  const ruleRef    = useRef(null)
  const breadRef   = useRef(null)

  const localePath = (href) => '/' + locale + href

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Image zoom in slowly */
      gsap.fromTo(imgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2, ease: 'power2.out' }
      )

      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(ruleRef.current,
        { scaleX: 0, transformOrigin: isRTL ? 'right' : 'left' },
        { scaleX: 1, duration: 1.2, ease: 'power4.out' }
      )
      .fromTo(breadRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.6'
      )
      .fromTo(labelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.3'
      )
      ;[line1Ref, line2Ref, line3Ref].forEach((r) => {
        tl.fromTo(r.current,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: 'power4.out' },
          '-=0.72'
        )
      })
      tl.fromTo(subRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(statsRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3'
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
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src="/images/limore1.jpg"
          alt="Luxury airport transfer — Limore"
          width={1920} height={1080}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>

      {/* Overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(110deg, rgba(5,5,5,0.93) 0%, rgba(5,5,5,0.72) 45%, rgba(5,5,5,0.25) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '300px', zIndex: 2,
        background: 'linear-gradient(to top, #050505, transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '160px', zIndex: 2,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.55), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Top rule */}
      <div
        ref={ruleRef}
        style={{
          position: 'absolute', top: '88px', left: 0, right: 0,
          height: '1px', backgroundColor: 'rgba(196,30,30,0.4)', zIndex: 4,
        }}
      />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 5,
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 6vw, 96px)',
        paddingTop: '150px',
      }}>

        {/* Breadcrumb */}
        <div
          ref={breadRef}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '32px', opacity: 0,
          }}
        >
          <Link
            href={localePath('/')}
            style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 400, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'rgba(248,247,244,0.3)',
              textDecoration: 'none', transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(248,247,244,0.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.3)'}
          >
            Limore
          </Link>
          <span style={{ color: 'rgba(248,247,244,0.2)', fontSize: '10px' }}>›</span>
          <Link
            href={localePath('/services')}
            style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 400, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'rgba(248,247,244,0.3)',
              textDecoration: 'none', transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(248,247,244,0.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.3)'}
          >
            {content.category}
          </Link>
          <span style={{ color: 'rgba(248,247,244,0.2)', fontSize: '10px' }}>›</span>
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#C41E1E',
          }}>
            {content.label}
          </span>
        </div>

        {/* Label */}
        <div
          ref={labelRef}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '28px', opacity: 0,
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

        {/* Heading */}
        <div style={{ marginBottom: 'clamp(20px, 3vh, 36px)' }}>
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

        {/* Sub + CTA row */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          gap: 'clamp(24px, 4vw, 60px)', flexWrap: 'wrap',
          marginBottom: 'clamp(40px, 6vh, 72px)',
        }}>
          <p
            ref={subRef}
            style={{
              fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: 'rgba(248,247,244,0.5)', lineHeight: 1.8,
              maxWidth: '360px', opacity: 0,
            }}
          >
            {content.sub}
          </p>
          <div
            ref={ctaRef}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', opacity: 0, flexShrink: 0 }}
          >
            <Link
              href={localePath('/contact')}
              className="ath-cta-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 32px',
                backgroundColor: '#C41E1E', color: '#fff',
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {content.cta}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link
              href={localePath('/services')}
              className="ath-cta-ghost"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 28px',
                backgroundColor: 'transparent', color: 'rgba(248,247,244,0.7)',
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid rgba(248,247,244,0.18)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Stats bottom bar */}
        <div
          ref={statsRef}
          style={{
            display: 'flex', gap: '0',
            borderTop: '1px solid rgba(248,247,244,0.08)',
            paddingTop: '28px', opacity: 0,
            flexWrap: 'wrap',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                paddingInline: i === 0 ? '0 40px' : '40px',
                borderLeft: i > 0 ? '1px solid rgba(248,247,244,0.1)' : 'none',
              }}
            >
              <p style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#F8F7F4', lineHeight: 1,
                marginBottom: '5px',
              }}>
                {s.val}
              </p>
              <p style={{
                fontSize: '9px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'rgba(248,247,244,0.3)',
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ath-cta-primary:hover { background-color: #A01515 !important; transform: translateY(-1px); }
        .ath-cta-ghost:hover { border-color: rgba(248,247,244,0.5) !important; color: #F8F7F4 !important; }
      `}</style>
    </section>
  )
}