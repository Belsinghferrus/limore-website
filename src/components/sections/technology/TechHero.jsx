'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const t = {
  en: {
    eyebrow: 'Platform Technology',
    line1:   'Built for',
    line2:   'Precision.',
    sub:     'Real-time tracking. Global dispatch. A client dashboard engineered for the standard that corporates and luxury clients demand.',
    stat1:   { value: '<2s',    label: 'Location Refresh' },
    stat2:   { value: '40+',    label: 'Cities Connected' },
    stat3:   { value: '24/7',   label: 'Dispatch Uptime' },
    scroll:  'Explore',
  },
  ar: {
    eyebrow: 'تكنولوجيا المنصة',
    line1:   'مصممة من أجل',
    line2:   'الدقة.',
    sub:     'تتبع في الوقت الفعلي. إرسال عالمي. لوحة تحكم للعملاء مصممة وفق المعايير التي تطلبها الشركات والعملاء الفاخرون.',
    stat1:   { value: '<2ث',    label: 'تحديث الموقع' },
    stat2:   { value: '40+',    label: 'مدينة مترابطة' },
    stat3:   { value: '24/7',   label: 'وقت تشغيل الإرسال' },
    scroll:  'اكتشف',
  },
  fr: {
    eyebrow: 'Technologie de Plateforme',
    line1:   'Construite pour',
    line2:   'la Precision.',
    sub:     'Suivi en temps reel. Dispatch mondial. Un tableau de bord client concu pour les exigences des entreprises et clients de luxe.',
    stat1:   { value: '<2s',    label: 'Actualisation Position' },
    stat2:   { value: '40+',    label: 'Villes Connectees' },
    stat3:   { value: '24/7',   label: 'Uptime Dispatch' },
    scroll:  'Explorer',
  },
}

export default function TechHero({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'

  const sectionRef  = useRef(null)
  const imgRef      = useRef(null)
  const eyebrowRef  = useRef(null)
  const line1Ref    = useRef(null)
  const line2Ref    = useRef(null)
  const subRef      = useRef(null)
  const statsRef    = useRef(null)
  const scrollRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.07, filter: 'brightness(0.25)' },
        { scale: 1,    filter: 'brightness(0.5)',  duration: 2.8, ease: 'power2.out' }
      )

      const tl = gsap.timeline({ delay: 0.1 })
      tl.fromTo(eyebrowRef.current,
        { opacity: 0, letterSpacing: '0.5em' },
        { opacity: 1, letterSpacing: '0.22em', duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(line1Ref.current,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0,   opacity: 1, duration: 1,   ease: 'power4.out' },
        '-=0.3'
      )
      .fromTo(line2Ref.current,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0,   opacity: 1, duration: 1,   ease: 'power4.out' },
        '-=0.75'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0,  duration: 0.65, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(statsRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0,  duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      )

      gsap.to('.th-scroll-dot', {
        y: 22, repeat: -1, yoyo: true, duration: 1.2, ease: 'power1.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [locale])

  const stats = [content.stat1, content.stat2, content.stat3]

  return (
    <section
      ref={sectionRef}
      style={{
        position:        'relative',
        width:           '100%',
        minHeight:       '100svh',
        overflow:        'hidden',
        backgroundColor: '#050505',
        display:         'flex',
        flexDirection:   'column',
        direction:       isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          ref={imgRef}
          src="/images/limore7.jpg"
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
        />
      </div>

      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(155deg, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.65) 45%, rgba(5,5,5,0.15) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', zIndex: 2, background: 'linear-gradient(to top, #050505 0%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Red grid accent */}
      <div style={{
        position:   'absolute',
        top:        0,
        right:      0,
        width:      '40%',
        height:     '100%',
        zIndex:     2,
        background: 'radial-gradient(ellipse at 80% 30%, rgba(196,30,30,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position:      'relative',
        zIndex:        5,
        flex:          1,
        display:       'flex',
        flexDirection: 'column',
        justifyContent:'flex-end',
        padding:       'clamp(96px,12vw,148px) clamp(24px,6vw,96px) clamp(56px,8vh,88px)',
        boxSizing:     'border-box',
      }}>

        <p
          ref={eyebrowRef}
          style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.3)', margin: '0 0 18px', opacity: 0 }}
        >
          {content.eyebrow}
        </p>

        <div style={{ marginBottom: 'clamp(20px,3vh,32px)' }}>
          {[
            { ref: line1Ref, text: content.line1, style: { color: '#F8F7F4', fontWeight: 400 } },
            { ref: line2Ref, text: content.line2, style: { color: 'rgba(248,247,244,0.45)', fontStyle: 'italic', fontWeight: 300 } },
          ].map(({ ref, text, style }, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <h1
                ref={ref}
                style={{
                  margin:        0,
                  fontFamily:    'Cormorant Garamond, Georgia, serif',
                  fontSize:      'clamp(2.4rem,9vw,10.5rem)',
                  lineHeight:    0.93,
                  letterSpacing: '-0.02em',
                  opacity:       0,
                  ...style,
                }}
              >
                {text}
              </h1>
            </div>
          ))}
        </div>

        <p
          ref={subRef}
          style={{ fontSize: 'clamp(0.78rem,1.1vw,0.9rem)', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'rgba(248,247,244,0.4)', lineHeight: 1.9, maxWidth: '420px', margin: '0 0 clamp(32px,4vh,48px)', opacity: 0 }}
        >
          {content.sub}
        </p>

        {/* Stats row */}
        <div
          ref={statsRef}
          style={{ display: 'flex', gap: 'clamp(24px,4vw,64px)', flexWrap: 'wrap', opacity: 0 }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.6rem,3vw,2.8rem)', fontWeight: 300, color: i === 0 ? '#C41E1E' : '#F8F7F4', lineHeight: 1 }}>
                {s.value}
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.25)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{ position: 'absolute', bottom: 'clamp(24px,4vh,40px)', right: isRTL ? 'auto' : 'clamp(20px,5vw,72px)', left: isRTL ? 'clamp(20px,5vw,72px)' : 'auto', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', opacity: 0 }}
        aria-hidden="true"
      >
        <div style={{ width: '1px', height: '48px', background: 'rgba(248,247,244,0.07)', position: 'relative', overflow: 'hidden' }}>
          <div className="th-scroll-dot" style={{ position: 'absolute', top: 0, width: '1px', height: '14px', backgroundColor: '#C41E1E' }} />
        </div>
        <span style={{ fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.15)', writingMode: 'vertical-rl' }}>
          {content.scroll}
        </span>
      </div>
    </section>
  )
}