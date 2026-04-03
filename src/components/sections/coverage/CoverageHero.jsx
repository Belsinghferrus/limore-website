'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    breadcrumb: 'Global Coverage',
    eyebrow: 'Our Presence',
    line1: 'One Standard.',
    line2: 'Every City.',
    line3: 'Everywhere.',
    sub: 'From Dubai to Tokyo, London to Mumbai — Limore operates wherever discerning clients require ground transport that meets their standard.',
  },
  ar: {
    breadcrumb: 'التغطية العالمية',
    eyebrow: 'حضورنا',
    line1: 'معيار واحد.',
    line2: 'كل مدينة.',
    line3: 'في كل مكان.',
    sub: 'من دبي إلى طوكيو، من لندن إلى مومباي — تعمل ليمور أينما يحتاج العملاء المميزون إلى خدمة نقل برية ترقى لمستواهم.',
  },
  fr: {
    breadcrumb: 'Couverture Mondiale',
    eyebrow: 'Notre Présence',
    line1: 'Un Standard.',
    line2: 'Chaque Ville.',
    line3: 'Partout.',
    sub: 'De Dubaï à Tokyo, de Londres à Mumbai — Limore opère partout où des clients exigeants nécessitent un transport terrestre à la hauteur de leurs attentes.',
  },
}

export default function CoverageHero({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const lp         = (href) => `/${locale}${href}`
  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const eyeRef     = useRef(null)
  const l1Ref      = useRef(null)
  const l2Ref      = useRef(null)
  const l3Ref      = useRef(null)
  const subRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2.6, ease: 'power1.out' }
      )
      const tl = gsap.timeline({ delay: 0.1 })
      tl.fromTo(eyeRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
      ;[l1Ref, l2Ref, l3Ref].forEach((r, i) => {
        tl.fromTo(r.current,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.05, ease: 'power4.out' },
          i === 0 ? '-=0.2' : '-=0.8'
        )
      })
      tl.fromTo(subRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative', width: '100%', minHeight: '75vh',
        overflow: 'hidden', backgroundColor: '#050505',
        display: 'flex', flexDirection: 'column',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* BG image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85"
          alt="Global city skyline — Limore worldwide coverage"
          width={1920} height={1080}
          fetchPriority="high"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.65) 55%, rgba(5,5,5,0.2) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', zIndex: 2,
        background: 'linear-gradient(to top, #050505, transparent)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 5, flex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px, 12vw, 150px) clamp(24px, 6vw, 96px) clamp(40px, 6vh, 72px)',
      }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <Link href={lp('/')} style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.22)', textDecoration: 'none' }}>
            Limore
          </Link>
          <span style={{ color: 'rgba(248,247,244,0.15)', fontSize: '10px' }}>›</span>
          <span style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C41E1E' }}>
            {content.breadcrumb}
          </span>
        </div>

        <p ref={eyeRef} style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.28)', marginBottom: '14px', opacity: 0 }}>
          {content.eyebrow}
        </p>

        <div style={{ marginBottom: 'clamp(18px, 2.5vh, 28px)' }}>
          {[
            { ref: l1Ref, text: content.line1, italic: false },
            { ref: l2Ref, text: content.line2, italic: false },
            { ref: l3Ref, text: content.line3, italic: true },
          ].map((l, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <h1 ref={l.ref} style={{
                margin: 0,
                fontSize: 'clamp(2.6rem, 7.5vw, 9.5rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: l.italic ? 300 : 400,
                fontStyle: l.italic ? 'italic' : 'normal',
                color: l.italic ? 'rgba(248,247,244,0.4)' : '#F8F7F4',
                lineHeight: 0.93, letterSpacing: '-0.02em', opacity: 0,
              }}>
                {l.text}
              </h1>
            </div>
          ))}
        </div>

        <p ref={subRef} style={{ fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'rgba(248,247,244,0.35)', lineHeight: 1.9, maxWidth: '420px', opacity: 0 }}>
          {content.sub}
        </p>
      </div>
    </section>
  )
}