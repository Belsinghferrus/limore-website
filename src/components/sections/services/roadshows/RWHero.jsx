'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    category: 'Service',
    label: 'Roadshows and Events',
    eyebrow: 'Ground Transport for High-Stakes Events',
    line1: 'Every Detail.',
    line2: 'Every City.',
    line3: 'On Schedule.',
    sub: 'From one-city product launches to month-long multi-country financial roadshows, Limore manages ground transport at the level your event demands.',
    cta: 'Plan Your Event',
    ctaSecondary: 'View Fleet',
    tag1: 'Financial Roadshows',
    tag2: 'Product Launches',
    tag3: 'Investor Days',
    tag4: 'Gala Transfers',
  },
  ar: {
    category: 'الخدمة',
    label: 'جولات الترويج والفعاليات',
    eyebrow: 'النقل البري للفعاليات عالية المخاطر',
    line1: 'كل تفصيل.',
    line2: 'كل مدينة.',
    line3: 'في الموعد.',
    sub: 'من إطلاق المنتجات في مدينة واحدة إلى جولات ترويج مالي متعددة الدول، تدير ليمور النقل البري بالمستوى الذي تتطلبه فعاليتك.',
    cta: 'خطط لفعاليتك',
    ctaSecondary: 'عرض الأسطول',
    tag1: 'جولات ترويج مالي',
    tag2: 'إطلاق المنتجات',
    tag3: 'أيام المستثمرين',
    tag4: 'نقل حفلات الغالا',
  },
  fr: {
    category: 'Service',
    label: 'Roadshows et Événements',
    eyebrow: 'Transport Terrestre pour Événements à Fort Enjeu',
    line1: 'Chaque Détail.',
    line2: 'Chaque Ville.',
    line3: 'Dans les Temps.',
    sub: 'Des lancements produit dans une seule ville aux roadshows financiers multi-pays d\'un mois, Limore gère le transport terrestre au niveau qu\'exige votre événement.',
    cta: 'Planifier votre Événement',
    ctaSecondary: 'Voir la Flotte',
    tag1: 'Roadshows Financiers',
    tag2: 'Lancements Produits',
    tag3: 'Journées Investisseurs',
    tag4: 'Transferts Gala',
  },
}

export default function RWHero({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'
  const lp      = (href) => `/${locale}${href}`

  const sectionRef  = useRef(null)
  const imgRef      = useRef(null)
  const overlayRef  = useRef(null)
  const breadRef    = useRef(null)
  const eyebrowRef  = useRef(null)
  const linesRef    = useRef([])
  const tagsRef     = useRef(null)
  const subRef      = useRef(null)
  const ctaRef      = useRef(null)
  const scrollRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.1, filter: 'brightness(0.4)' },
        { scale: 1, filter: 'brightness(0.65)', duration: 2.4, ease: 'power2.out' }
      )

      const tl = gsap.timeline({ delay: 0.1 })

      tl.fromTo(breadRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
      .fromTo(eyebrowRef.current,
        { opacity: 0, letterSpacing: '0.5em' },
        { opacity: 1, letterSpacing: '0.22em', duration: 0.9, ease: 'power3.out' },
        '-=0.2'
      )

      linesRef.current.forEach((el, i) => {
        tl.fromTo(el,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: 'power4.out' },
          i === 0 ? '-=0.3' : '-=0.75'
        )
      })

      tl.fromTo(tagsRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
        '-=0.45'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.1'
      )

      // Looping scroll indicator
      gsap.to(scrollRef.current?.querySelector('.rw-scroll-dot'), {
        y: 8, repeat: -1, yoyo: true, duration: 1.1, ease: 'power1.inOut',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const tags = [content.tag1, content.tag2, content.tag3, content.tag4]
  const lines = [content.line1, content.line2, content.line3]

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
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=88"
          alt="Luxury event and roadshow ground transport — Limore"
          width={1920}
          height={1080}
          fetchPriority="high"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
        />
      </div>

      {/* Overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(160deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.6) 50%, rgba(5,5,5,0.15) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '50%', zIndex: 2,
        background: 'linear-gradient(to top, #050505 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Horizontal rule */}
      <div style={{
        position: 'absolute', top: '88px', left: 0, right: 0,
        height: '1px', backgroundColor: 'rgba(248,247,244,0.06)', zIndex: 3,
      }} />

      {/* Vertical rule (decorative, desktop) */}
      <div
        className="rw-v-rule"
        style={{
          position: 'absolute',
          top: '88px',
          bottom: 0,
          right: isRTL ? 'auto' : 'clamp(48px, 8vw, 120px)',
          left: isRTL ? 'clamp(48px, 8vw, 120px)' : 'auto',
          width: '1px',
          backgroundColor: 'rgba(248,247,244,0.05)',
          zIndex: 3,
        }}
      />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 5,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(100px, 12vw, 160px) clamp(24px, 6vw, 96px) clamp(60px, 8vh, 96px)',
      }}>

        {/* Breadcrumb */}
        <div
          ref={breadRef}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', opacity: 0 }}
        >
          {[{ label: 'Limore', href: '/' }, { label: content.category, href: '/services' }].map((c, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link
                href={lp(c.href)}
                style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: 'rgba(248,247,244,0.22)',
                  textDecoration: 'none', transition: 'color 0.2s',
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
            color: 'rgba(248,247,244,0.32)',
            marginBottom: '20px', opacity: 0,
          }}
        >
          {content.eyebrow}
        </p>

        {/* Headline — stacked lines with overflow hidden reveals */}
        <div style={{ marginBottom: 'clamp(24px, 3vh, 36px)' }}>
          {lines.map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <h1
                ref={(el) => (linesRef.current[i] = el)}
                style={{
                  margin: 0,
                  fontSize: 'clamp(3.2rem, 9vw, 10rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: i === 2 ? 300 : 500,
                  fontStyle: i === 2 ? 'italic' : 'normal',
                  color: i === 2 ? 'rgba(248,247,244,0.55)' : '#F8F7F4',
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  opacity: 0,
                }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        {/* Service type tags */}
        <div
          ref={tagsRef}
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '8px',
            marginBottom: 'clamp(20px, 3vh, 32px)',
            opacity: 0,
          }}
        >
          {tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 400, letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: i === 0 ? '#C41E1E' : 'rgba(248,247,244,0.25)',
                border: `1px solid ${i === 0 ? 'rgba(196,30,30,0.4)' : 'rgba(248,247,244,0.08)'}`,
                padding: '5px 12px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Sub + CTA row */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap',
          gap: 'clamp(24px, 4vw, 56px)',
        }}>
          <p
            ref={subRef}
            style={{
              fontSize: 'clamp(0.82rem, 1.3vw, 0.96rem)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              color: 'rgba(248,247,244,0.4)',
              lineHeight: 1.9,
              maxWidth: '400px',
              opacity: 0,
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
              className="rw-btn-primary"
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
              className="rw-btn-ghost"
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
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: 'clamp(24px, 4vh, 40px)',
          right: isRTL ? 'auto' : 'clamp(24px, 6vw, 96px)',
          left: isRTL ? 'clamp(24px, 6vw, 96px)' : 'auto',
          zIndex: 5,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '8px',
          opacity: 0,
        }}
        aria-hidden="true"
      >
        <div style={{
          width: '1px', height: '40px',
          backgroundColor: 'rgba(248,247,244,0.1)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div
            className="rw-scroll-dot"
            style={{
              position: 'absolute', top: 0,
              width: '1px', height: '12px',
              backgroundColor: '#C41E1E',
            }}
          />
        </div>
        <span style={{
          fontSize: '9px', fontFamily: 'Inter, sans-serif',
          fontWeight: 400, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'rgba(248,247,244,0.18)',
          writingMode: 'vertical-rl',
        }}>
          Scroll
        </span>
      </div>

      <style>{`
        .rw-btn-primary:hover { background-color: #A01515 !important; transform: translateY(-1px); }
        .rw-btn-ghost:hover { border-color: rgba(248,247,244,0.4) !important; color: #F8F7F4 !important; }
        .rw-v-rule { display: none; }
        @media (min-width: 1280px) { .rw-v-rule { display: block; } }
      `}</style>
    </section>
  )
}