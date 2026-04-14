'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    breadcrumb: 'Fleet',
    eyebrow: 'The Collection',
    line1: 'Vehicles Chosen',
    line2: 'For Those Who',
    line3: 'Notice Everything.',
    sub: 'Every vehicle in the Limore fleet is selected, maintained, and presented to a single standard. No exceptions.',
    stat1val: '15+', stat1label: 'Vehicles',
    stat2val: '7',   stat2label: 'Categories',
    stat3val: '60+',   stat3label: 'Cities',
  },
  ar: {
    breadcrumb: 'الأسطول',
    eyebrow: 'المجموعة',
    line1: 'مركبات مختارة',
    line2: 'لمن يلاحظ',
    line3: 'كل التفاصيل.',
    sub: 'كل مركبة في أسطول ليمور مختارة ومُصانة ومُقدَّمة وفق معيار واحد. بلا استثناء.',
    stat1val: '+15', stat1label: 'مركبة',
    stat2val: '7',   stat2label: 'فئات',
    stat3val: '60+',   stat3label: 'مدن',
  },
  fr: {
    breadcrumb: 'Flotte',
    eyebrow: 'La Collection',
    line1: 'Des Véhicules Choisis',
    line2: 'Pour Ceux Qui',
    line3: 'Remarquent Tout.',
    sub: 'Chaque véhicule de la flotte Limore est sélectionné, entretenu et présenté selon un seul standard. Sans exception.',
    stat1val: '15+', stat1label: 'Véhicules',
    stat2val: '7',   stat2label: 'Catégories',
    stat3val: '60+',   stat3label: 'Villes',
  },
}

export default function FleetHero({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'
  const lp      = (href) => `/${locale}${href}`

  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const eyeRef     = useRef(null)
  const l1Ref      = useRef(null)
  const l2Ref      = useRef(null)
  const l3Ref      = useRef(null)
  const subRef     = useRef(null)
  const statsRef   = useRef(null)

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
      ;[[l1Ref, l2Ref, l3Ref]].flat().forEach((r, i) => {
        tl.fromTo(r.current,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.05, ease: 'power4.out' },
          i === 0 ? '-=0.2' : '-=0.8'
        )
      })
      tl.fromTo(subRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(statsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }, '-=0.2'
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const stats = [
    { val: content.stat1val, label: content.stat1label },
    { val: content.stat2val, label: content.stat2label },
    { val: content.stat3val, label: content.stat3label },
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
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          ref={imgRef}
          src="/images/limore6.jpg"
          alt="Limore luxury fleet collection"
          width={1920} height={1080}
          fetchPriority="high"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
        />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.7) 50%, rgba(5,5,5,0.25) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '40%', zIndex: 2,
        background: 'linear-gradient(to top, #050505, transparent)',
        pointerEvents: 'none',
      }} />
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
                fontSize: 'clamp(2.4rem, 7vw, 9rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: l.italic ? 300 : 400,
                fontStyle: l.italic ? 'italic' : 'normal',
                color: l.italic ? 'rgba(248,247,244,0.45)' : '#F8F7F4',
                lineHeight: 0.93, letterSpacing: '-0.02em', opacity: 0,
              }}>
                {l.text}
              </h1>
            </div>
          ))}
        </div>

        <p ref={subRef} style={{ fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'rgba(248,247,244,0.35)', lineHeight: 1.9, maxWidth: '380px', marginBottom: 'clamp(24px, 3.5vh, 40px)', opacity: 0 }}>
          {content.sub}
        </p>

        <div ref={statsRef} style={{ display: 'flex', flexWrap: 'wrap', borderTop: '1px solid rgba(248,247,244,0.06)', paddingTop: '20px', gap: 0, opacity: 0 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ paddingInline: i === 0 ? '0 28px' : '28px', borderLeft: i > 0 && !isRTL ? '1px solid rgba(248,247,244,0.07)' : 'none', borderRight: i > 0 && isRTL ? '1px solid rgba(248,247,244,0.07)' : 'none' }}>
              <p style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.9rem)', fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400, color: '#F8F7F4', lineHeight: 1, marginBottom: '4px' }}>{s.val}</p>
              <p style={{ fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.22)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}