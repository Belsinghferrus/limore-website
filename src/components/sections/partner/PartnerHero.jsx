'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const t = {
  en: {
    eyebrow:  'Global Expansion',
    line1:    'Scale Without',
    line2:    'Borders.',
    sub:      'Limore partners with elite local operators in key cities to deliver a seamless, consistent luxury ground transport experience worldwide.',
    tag1:     'Paris',
    tag2:     'Milan',
    tag3:     'Dubai',
    tag4:     'London',
    scroll:   'Scroll',
  },
  ar: {
    eyebrow:  'التوسع العالمي',
    line1:    'التوسع بلا',
    line2:    'حدود.',
    sub:      'تتعاون ليمور مع مشغلين محليين متميزين في المدن الرئيسية لتقديم تجربة نقل فاخرة متسقة وسلسة في جميع أنحاء العالم.',
    tag1:     'باريس',
    tag2:     'ميلانو',
    tag3:     'دبي',
    tag4:     'لندن',
    scroll:   'تمرير',
  },
  fr: {
    eyebrow:  'Expansion Mondiale',
    line1:    'Scaler Sans',
    line2:    'Frontieres.',
    sub:      'Limore s\'associe a des operateurs locaux d\'elite dans les villes cles pour offrir une experience de transport de luxe coherente et fluide dans le monde entier.',
    tag1:     'Paris',
    tag2:     'Milan',
    tag3:     'Dubai',
    tag4:     'Londres',
    scroll:   'Defiler',
  },
}

export default function PartnerHero({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'

  const sectionRef  = useRef(null)
  const imgRef      = useRef(null)
  const eyebrowRef  = useRef(null)
  const line1Ref    = useRef(null)
  const line2Ref    = useRef(null)
  const subRef      = useRef(null)
  const tagsRef     = useRef(null)
  const scrollRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.08, filter: 'brightness(0.3)' },
        { scale: 1,    filter: 'brightness(0.55)', duration: 2.6, ease: 'power2.out' }
      )

      const tl = gsap.timeline({ delay: 0.15 })

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, letterSpacing: '0.5em' },
        { opacity: 1, letterSpacing: '0.22em', duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(line1Ref.current,
        { yPercent: 105, opacity: 0 },
        { yPercent: 0,   opacity: 1, duration: 0.95, ease: 'power4.out' },
        '-=0.3'
      )
      .fromTo(line2Ref.current,
        { yPercent: 105, opacity: 0 },
        { yPercent: 0,   opacity: 1, duration: 0.95, ease: 'power4.out' },
        '-=0.72'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0,  duration: 0.65, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(tagsRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0,  duration: 0.6, ease: 'power3.out' },
        '-=0.35'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      )

      gsap.to('.ph-scroll-dot', {
        y: 22, repeat: -1, yoyo: true, duration: 1.2, ease: 'power1.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [locale])

  const tags = [content.tag1, content.tag2, content.tag3, content.tag4]

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
      aria-label="Partner with Limore"
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          ref={imgRef}
          src="/images/partner-hero.jpg"
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }}
        />
      </div>

      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(170deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 40%, rgba(5,5,5,0.18) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', zIndex: 2, background: 'linear-gradient(to top, #050505 0%, transparent 100%)', pointerEvents: 'none' }} />

      {/* H-rule */}
      <div style={{ position: 'absolute', top: '80px', left: 0, right: 0, height: '1px', backgroundColor: 'rgba(248,247,244,0.05)', zIndex: 3 }} />

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

        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.3)', margin: '0 0 18px', opacity: 0 }}
        >
          {content.eyebrow}
        </p>

        {/* Headline */}
        <div style={{ marginBottom: 'clamp(22px,3vh,34px)' }}>
          {[
            { ref: line1Ref, text: content.line1, style: { color: '#F8F7F4', fontWeight: 500, fontStyle: 'normal' } },
            { ref: line2Ref, text: content.line2, style: { color: 'rgba(248,247,244,0.5)', fontWeight: 300, fontStyle: 'italic' } },
          ].map(({ ref, text, style }, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <h1
                ref={ref}
                style={{
                  margin:        0,
                  fontFamily:    'Cormorant Garamond, Georgia, serif',
                  fontSize:      'clamp(2rem,8.5vw,10rem)',
                  lineHeight:    0.95,
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

        {/* Sub + tags row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '24px 48px' }}>
          <p
            ref={subRef}
            style={{ fontSize: 'clamp(0.78rem,1.2vw,0.92rem)', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'rgba(248,247,244,0.42)', lineHeight: 1.95, maxWidth: '400px', margin: 0, flex: '1 1 260px', opacity: 0 }}
          >
            {content.sub}
          </p>

          <div
            ref={tagsRef}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignSelf: 'flex-end', opacity: 0 }}
          >
            {tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize:      '9px',
                  fontFamily:    'Inter, sans-serif',
                  fontWeight:    400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color:         i === 0 ? '#C41E1E' : 'rgba(248,247,244,0.25)',
                  border:        `1px solid ${i === 0 ? 'rgba(196,30,30,0.38)' : 'rgba(248,247,244,0.08)'}`,
                  padding:       '5px 11px',
                  whiteSpace:    'nowrap',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position:      'absolute',
          bottom:        'clamp(24px,4vh,40px)',
          right:         isRTL ? 'auto' : 'clamp(20px,5vw,72px)',
          left:          isRTL ? 'clamp(20px,5vw,72px)' : 'auto',
          zIndex:        5,
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:           '10px',
          opacity:       0,
        }}
        aria-hidden="true"
      >
        <div style={{ width: '1px', height: '48px', background: 'rgba(248,247,244,0.08)', position: 'relative', overflow: 'hidden' }}>
          <div className="ph-scroll-dot" style={{ position: 'absolute', top: 0, width: '1px', height: '14px', backgroundColor: '#C41E1E' }} />
        </div>
        <span style={{ fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.16)', writingMode: 'vertical-rl' }}>
          {content.scroll}
        </span>
      </div>
    </section>
  )
}