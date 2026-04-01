'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    label: 'Global Luxury Chauffeur',
    heading: 'Where Every Journey\nDefines Excellence',
    sub: 'Premium chauffeur service across the world\'s most important cities. Trusted by corporations, private clients and luxury brands.',
    cta: 'Book Now',
    ctaSecondary: 'Our Services',
  },
  ar: {
    label: 'سائق فاخر عالمي',
    heading: 'حيث كل رحلة\nتعكس التميز',
    sub: 'خدمة سائق فاخرة في اهم مدن العالم. موثوقة من قبل الشركات والعملاء الخاصين والعلامات التجارية الفاخرة.',
    cta: 'احجز الآن',
    ctaSecondary: 'خدماتنا',
  },
  fr: {
    label: 'Chauffeur Luxe Mondial',
    heading: 'Chaque Trajet\nDéfinit l\'Excellence',
    sub: 'Service chauffeur premium dans les villes les plus importantes du monde. Approuve par les entreprises, clients prives et marques de luxe.',
    cta: 'Reserver',
    ctaSecondary: 'Nos Services',
  },
}

export default function HeroSection({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL = locale === 'ar'

  const labelRef = useRef(null)
  const lineRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power3.out', transformOrigin: 'left center' }
      )
      .fromTo(labelRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      )
    })
    return () => ctx.revert()
  }, [])

  const localePath = (href) => '/' + locale + href

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.4,
          zIndex: 0,
        }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-driving-a-luxury-car-at-night-3949/1080p.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(10,10,10,0.95) 50%, rgba(10,10,10,0.5) 100%)',
        zIndex: 1,
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to top, #0A0A0A, transparent)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div
        className="container-default"
        style={{ position: 'relative', zIndex: 3, paddingTop: '120px', paddingBottom: '120px' }}
      >
        <div style={{ maxWidth: '680px' }}>

          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div
              ref={lineRef}
              style={{
                width: '40px',
                height: '1px',
                backgroundColor: '#C41E1E',
                display: 'block',
              }}
            />
            <span
              ref={labelRef}
              style={{
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C41E1E',
              }}
            >
              {content.label}
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 6rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400,
              color: '#F8F7F4',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              marginBottom: '28px',
              whiteSpace: 'pre-line',
            }}
          >
            {content.heading}
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              color: 'rgba(248,247,244,0.6)',
              lineHeight: 1.75,
              marginBottom: '44px',
              maxWidth: '520px',
            }}
          >
            {content.sub}
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
          >
            <Link
              href={localePath('/contact')}
              className="hero-cta-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                backgroundColor: '#C41E1E',
                color: '#fff',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.3s ease, transform 0.2s ease',
              }}
            >
              {content.cta}
              <span style={{ fontSize: '14px' }}>→</span>
            </Link>

            <Link
              href={localePath('/services')}
              className="hero-cta-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                backgroundColor: 'transparent',
                color: '#F8F7F4',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '1px solid rgba(248,247,244,0.25)',
                transition: 'border-color 0.3s ease, color 0.3s ease',
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
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{
          fontSize: '10px',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(196,30,30,0.8), transparent)',
          animation: 'scrollLine 1.8s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        .hero-cta-primary:hover {
          background-color: #A01818 !important;
          transform: translateY(-1px);
        }
        .hero-cta-secondary:hover {
          border-color: rgba(248,247,244,0.7) !important;
          color: #fff !important;
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
        }
      `}</style>
    </section>
  )
}