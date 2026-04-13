'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    breadcrumb: 'Limore 360',
    eyebrow:    'Private Membership Programme',
    line1:      'Travel Without',
    line2:      'Limits.',
    body:       'Limore 360 is a pre-purchased hour programme for individuals and organisations who demand chauffeur service at a moment\'s notice — without negotiating price, availability, or quality each time.',
    cta1:       'Explore Membership Plans',
    cta2:       'Speak to an Advisor',
    stat1v: '360°', stat1l: 'Service Coverage',
    stat2v: '< 60m', stat2l: 'Response Time',
    stat3v: '0',    stat3l: 'Surge Pricing — Ever',
  },
  ar: {
    breadcrumb: 'ليمور ٣٦٠',
    eyebrow:    'برنامج العضوية الخاصة',
    line1:      'سافر بلا',
    line2:      'حدود.',
    body:       'ليمور ٣٦٠ برنامج ساعات مسبق الشراء للأفراد والمؤسسات الذين يطلبون خدمة سائق في أي لحظة — دون التفاوض على السعر أو التوفر أو الجودة.',
    cta1:       'استعرض خطط العضوية',
    cta2:       'تحدث إلى مستشار',
    stat1v: '٣٦٠°', stat1l: 'تغطية الخدمة',
    stat2v: '< ٦٠د', stat2l: 'وقت الاستجابة',
    stat3v: '٠',    stat3l: 'أسعار متذبذبة — أبداً',
  },
  fr: {
    breadcrumb: 'Limore 360',
    eyebrow:    'Programme d\'Abonnement Privé',
    line1:      'Voyagez Sans',
    line2:      'Limites.',
    body:       'Limore 360 est un programme d\'heures prépayées pour les particuliers et organisations qui exigent un service chauffeur à tout moment — sans négocier prix, disponibilité ou qualité.',
    cta1:       'Explorer les Formules',
    cta2:       'Parler à un Conseiller',
    stat1v: '360°', stat1l: 'Couverture de Service',
    stat2v: '< 60m', stat2l: 'Temps de Réponse',
    stat3v: '0',    stat3l: 'Tarification Variable — Jamais',
  },
}

export default function Limore360Hero({ locale = 'en' }) {
  const c      = t[locale] || t.en
  const isRTL  = locale === 'ar'
  const lp     = (href) => `/${locale}${href}`

  const secRef   = useRef(null)
  const imgRef   = useRef(null)
  const eyeRef   = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const bodyRef  = useRef(null)
  const ctaRef   = useRef(null)
  const statsRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 3, ease: 'power1.out' }
      )
      const tl = gsap.timeline({ delay: 0.1 })
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
      tl.fromTo(eyeRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      )
      ;[line1Ref, line2Ref].forEach((r, i) => {
        tl.fromTo(r.current,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
          i === 0 ? '-=0.2' : '-=0.85'
        )
      })
      tl.fromTo(bodyRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.45'
      )
      tl.fromTo(statsRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secRef}
      style={{
        position: 'relative', width: '100%',
        minHeight: 'clamp(620px, 100vh, 960px)',
        overflow: 'hidden',
        backgroundColor: '#040404',
        display: 'flex', flexDirection: 'column',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* BG image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src="/images/limore10.jpg"
          alt="Limore 360 - luxury chauffeur membership night drive"
          width={1920} height={1080}
          fetchPriority="high"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(110deg, rgba(4,4,4,0.97) 0%, rgba(4,4,4,0.72) 55%, rgba(4,4,4,0.2) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '45%', zIndex: 2,
        background: 'linear-gradient(to top, #040404, transparent)',
        pointerEvents: 'none',
      }} />

      {/* ✅ RED accent stripe — was gold #B8963E */}
      <div style={{
        position: 'absolute', top: 0,
        left: isRTL ? 'auto' : '0',
        right: isRTL ? '0' : 'auto',
        width: '3px', height: '100%', zIndex: 3,
        background: 'linear-gradient(to bottom, transparent, #C8102E 30%, #C8102E 70%, transparent)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 5, flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px, 13vw, 170px) clamp(24px, 7vw, 104px) clamp(44px, 7vh, 84px)',
      }}>

        {/* Membership badge — ✅ red */}
        <div ref={badgeRef} style={{ marginBottom: '24px', opacity: 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '8px 16px',
            border: '1px solid rgba(200,16,46,0.45)',
            backgroundColor: 'rgba(200,16,46,0.08)',
          }}>
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true">
              <path d="M1 9.5h12M1 9.5L3 3l3 4 3-6 3 6 2-4 1 6.5" stroke="#C8102E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{
              fontSize: '9px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.24em',
              textTransform: 'uppercase', color: '#C8102E',
            }}>
              {c.eyebrow}
            </span>
          </div>
        </div>

        {/* Breadcrumb — ✅ red active crumb */}
        <div ref={eyeRef} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', opacity: 0 }}>
          <Link href={lp('/')} style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.18)', textDecoration: 'none',
          }}>Limore</Link>
          <span style={{ color: 'rgba(248,247,244,0.15)', fontSize: '10px' }}>›</span>
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#C8102E',
          }}>{c.breadcrumb}</span>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: 'clamp(18px, 3vh, 28px)' }}>
          {[
            { ref: line1Ref, text: c.line1, style: { color: '#F8F7F4', fontStyle: 'normal' } },
            { ref: line2Ref, text: c.line2, style: { color: 'rgba(200,16,46,0.85)', fontStyle: 'italic' } },
          ].map((l, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <h1 ref={l.ref} style={{
                margin: 0,
                fontSize: 'clamp(2.8rem, 8vw, 10rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 300,
                lineHeight: 0.9, letterSpacing: '-0.02em',
                opacity: 0, ...l.style,
              }}>
                {l.text}
              </h1>
            </div>
          ))}
        </div>

        {/* Body */}
        <p ref={bodyRef} style={{
          fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)',
          fontFamily: 'Inter, sans-serif', fontWeight: 300,
          color: 'rgba(248,247,244,0.40)', lineHeight: 1.95,
          maxWidth: '480px', marginBottom: 'clamp(24px, 3.5vh, 38px)', opacity: 0,
        }}>
          {c.body}
        </p>

        {/* CTAs — ✅ primary red, ghost unchanged */}
        <div ref={ctaRef} style={{
          display: 'flex', flexWrap: 'wrap', gap: '12px',
          marginBottom: 'clamp(36px, 5vh, 60px)', opacity: 0,
        }}>
          <a href="#plans" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '14px 28px',
            backgroundColor: '#C8102E', color: '#FFFFFF',
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'background-color 0.25s ease',
            boxSizing: 'border-box',
          }} className="l360-cta-red">
            {c.cta1}
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
              <path d="M1 4h10M7 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#apply" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '14px 28px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(248,247,244,0.18)',
            color: 'rgba(248,247,244,0.55)',
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'border-color 0.25s ease, color 0.25s ease',
            boxSizing: 'border-box',
          }} className="l360-cta-ghost">
            {c.cta2}
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} style={{
          display: 'flex', flexWrap: 'wrap',
          gap: 'clamp(20px, 4vw, 48px)',
          paddingTop: 'clamp(18px, 3vw, 26px)',
          borderTop: '1px solid rgba(248,247,244,0.07)',
          opacity: 0,
        }}>
          {[
            { v: c.stat1v, l: c.stat1l },
            { v: c.stat2v, l: c.stat2l },
            { v: c.stat3v, l: c.stat3l },
          ].map((s, i) => (
            <div key={i}>
              <p style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 300, color: '#F8F7F4',
                lineHeight: 1, margin: '0 0 5px',
              }}>{s.v}</p>
              <p style={{
                fontSize: '9px', fontFamily: 'Inter, sans-serif',
                fontWeight: 400, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'rgba(248,247,244,0.22)', margin: 0,
              }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .l360-cta-red:hover   { background-color: #A50D25 !important; }
        .l360-cta-ghost:hover { border-color: rgba(248,247,244,0.45) !important; color: rgba(248,247,244,0.85) !important; }
        @media (max-width: 480px) {
          .l360-cta-red, .l360-cta-ghost { width: 100% !important; justify-content: space-between !important; }
        }
      `}</style>
    </section>
  )
}