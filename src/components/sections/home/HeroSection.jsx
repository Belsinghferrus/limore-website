'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

//Seamless Global Chauffeur Services Across 100+ Cities
//Where EveryJourney Defines Excellence.
const t = {
  en: {
    label: 'Global Luxury Chauffeur',
    line1: 'Seamless Global',
    line2: 'Chauffeur Services',
    line3: 'Across 100+ Cities.',
    sub: 'Premium chauffeur service across the world\'s most important cities.',
    cta: 'Reserve Now',
    badge: 'Est. in Excellence',
    cities: ['Dubai', 'London', 'New York', 'Paris', 'Singapore'],
  },
  ar: {
    label: 'سائق فاخر عالمي',
    line1: 'حيث كل',
    line2: 'رحلة تعكس',
    line3: 'التميز.',
    sub: 'خدمة سائق فاخرة في أهم مدن العالم.',
    cta: 'احجز الآن',
    badge: 'التميز دائما',
    cities: ['دبي', 'لندن', 'نيويورك', 'باريس', 'سنغافورة'],
  },
  fr: {
    label: 'Chauffeur Luxe Mondial',
    line1: 'Chaque Trajet',
    line2: 'Définit',
    line3: "l'Excellence.",
    sub: 'Service chauffeur premium dans les villes les plus importantes du monde.',
    cta: 'Réserver',
    badge: "L'Excellence toujours",
    cities: ['Dubai', 'Londres', 'New York', 'Paris', 'Singapour'],
  },
}

export default function HeroSection({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'

  const containerRef  = useRef(null)
  const videoRef      = useRef(null)
  const overlayRef    = useRef(null)
  const labelRef      = useRef(null)
  const line1Ref      = useRef(null)
  const line2Ref      = useRef(null)
  const line3Ref      = useRef(null)
  const subRef        = useRef(null)
  const ctaRef        = useRef(null)
  const scrollRef     = useRef(null)
  const topBarRef     = useRef(null)
  const bottomBarRef  = useRef(null)
  const cityTickerRef = useRef(null)

  const localePath = (href) => '/' + locale + href

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch((err) => console.warn('Autoplay blocked:', err))
  }, [])

  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      /* Video fades in slowly — video IS the atmosphere */
      gsap.fromTo(videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2.5, ease: 'power2.out' }
      )

      /* Overlay fades from solid → semi-transparent revealing video */
      gsap.fromTo(overlayRef.current,
        { opacity: 1 },
        { opacity: 1, duration: 0 }
      )

      /* Top architectural bar */
      tl.fromTo(topBarRef.current,
        { scaleX: 0, transformOrigin: isRTL ? 'right center' : 'left center' },
        { scaleX: 1, duration: 1.4, ease: 'power4.out' }
      )

      /* Label */
      .fromTo(labelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.8'
      )

      /* Heading lines — each clips up from below */
      .fromTo(line1Ref.current,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: 'power4.out' },
        '-=0.4'
      )
      .fromTo(line2Ref.current,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: 'power4.out' },
        '-=0.75'
      )
      .fromTo(line3Ref.current,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: 'power4.out' },
        '-=0.75'
      )

      /* Subline + CTA */
      .fromTo(subRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )

      /* Bottom bar + scroll */
      .fromTo(bottomBarRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.5'
      )

      /* City ticker — infinite loop */
      const ticker = cityTickerRef.current
      if (ticker) {
        gsap.to(ticker, {
          x: '-50%',
          duration: 20,
          ease: 'none',
          repeat: -1,
        })
      }

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#050505',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >

      {/* ── BACKGROUND VIDEO ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"  
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0,
          zIndex: 0,
        }}
      >
        <source src="/video/limore-hero-1.mp4" type="video/mp4" />
      </video>
      {/* https://thelimore.com/wp-content/uploads/2024/02/main_vd-min.mp4 */}
      {/* ── LAYERED OVERLAYS ── */}
      {/* Base darkening — very restrained so video shows through clearly */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          /* Strong left-side gradient so text is legible but video lives on right */
          background: `
            linear-gradient(
              105deg,
              rgba(5,5,5,0.92) 0%,
              rgba(5,5,5,0.75) 35%,
              rgba(5,5,5,0.35) 60%,
              rgba(5,5,5,0.1) 100%
            )
          `,
        }}
      />

      {/* Bottom vignette — makes section-to-section transition seamless */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '260px',
        background: 'linear-gradient(to top, #050505 0%, rgba(5,5,5,0.6) 50%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* Top vignette */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '160px',
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.6) 0%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* ── TOP ARCHITECTURAL RULE ── */}
      <div
        ref={topBarRef}
        style={{
          position: 'absolute',
          top: '88px', /* Below navbar */
          left: 0, right: 0,
          height: '1px',
          backgroundColor: 'rgba(196,30,30,0.5)',
          zIndex: 4,
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 'clamp(80px, 10vh, 120px)',
          paddingLeft: 'clamp(24px, 6vw, 96px)',
          paddingRight: 'clamp(24px, 6vw, 96px)',
          paddingTop: '120px',
        }}
      >
        <div style={{ maxWidth: '900px' }}>

          {/* Label row */}
          <div
            ref={labelRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: 'clamp(20px, 3vh, 36px)',
              opacity: 0,
            }}
          >
            <div style={{
              width: '40px', height: '1px',
              backgroundColor: '#C41E1E', flexShrink: 0,
            }} />
            <span style={{
              fontSize: '10px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>

          {/* Heading — 3 lines, each in own clip container */}
          <div style={{ marginBottom: 'clamp(24px, 4vh, 48px)' }}>

            {/* Line 1 */}
            <div style={{ overflow: 'hidden' }}>
              <div
                ref={line1Ref}
                style={{ opacity: 0 }}
              >
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(3rem, 7.5vw, 8rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 300,
                  color: '#F8F7F4',
                  lineHeight: 0.95,
                  letterSpacing: '-0.01em',
                }}>
                  {content.line1}
                </span>
              </div>
            </div>

            {/* Line 2 */}
            <div style={{ overflow: 'hidden' }}>
              <div
                ref={line2Ref}
                style={{ opacity: 0 }}
              >
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(3rem, 7.5vw, 8rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 300,
                  color: '#F8F7F4',
                  lineHeight: 0.95,
                  letterSpacing: '-0.01em',
                }}>
                  {content.line2}
                </span>
              </div>
            </div>

            {/* Line 3 — italic final word for editorial luxury touch */}
            <div style={{ overflow: 'hidden' }}>
              <div
                ref={line3Ref}
                style={{ opacity: 0 }}
              >
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(3rem, 7.5vw, 8rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: '#F8F7F4',
                  lineHeight: 0.95,
                  letterSpacing: '-0.01em',
                }}>
                  {content.line3}
                </span>
              </div>
            </div>

          </div>

          {/* Sub + CTA row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 'clamp(24px, 4vw, 64px)',
              flexWrap: 'wrap',
            }}
          >

            {/* Sub */}
            <p
              ref={subRef}
              style={{
                fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                color: 'rgba(248,247,244,0.5)',
                lineHeight: 1.75,
                maxWidth: '340px',
                opacity: 0,
              }}
            >
              {content.sub}
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexShrink: 0,
                opacity: 0,
              }}
            >
              {/* Primary CTA */}
              <Link
                href={localePath('/contact')}
                className="h-cta-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '15px 36px',
                  backgroundColor: '#C41E1E',
                  color: '#F8F7F4',
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {content.cta}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </Link>

            
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM ARCHITECTURAL BAR ── */}
      <div
        ref={bottomBarRef}
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          zIndex: 5,
          borderTop: '1px solid rgba(248,247,244,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(24px, 6vw, 96px)',
          height: '52px',
          opacity: 0,
        }}
      >
        {/* Left — city ticker */}
        <div style={{
          overflow: 'hidden',
          maxWidth: '60%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{
            fontSize: '9px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.25)',
            flexShrink: 0,
          }}>
            Operating in
          </span>
          <div style={{ overflow: 'hidden', flex: 1 }}>
            {/* Ticker — doubled for seamless loop */}
            <div
              ref={cityTickerRef}
              style={{
                display: 'flex',
                gap: '0',
                width: 'max-content',
                willChange: 'transform',
              }}
            >
              {[...content.cities, ...content.cities].map((city, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '10px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(248,247,244,0.45)',
                    paddingInline: '22px',
                    borderRight: '1px solid rgba(248,247,244,0.1)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — scroll indicator */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            opacity: 0,
          }}
        >
          <span style={{
            fontSize: '9px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.25)',
          }}>
            Scroll
          </span>
          {/* Animated line */}
          <div style={{
            width: '32px',
            height: '1px',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: 'rgba(248,247,244,0.1)',
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#C41E1E',
              animation: 'scrollPulse 2s ease-in-out infinite',
            }} />
          </div>
        </div>

      </div>

      {/* ── RIGHT SIDE VERTICAL TEXT (signature luxury detail) ── */}
      <div style={{
        position: 'absolute',
        right: 'clamp(16px, 3vw, 40px)',
        top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        transformOrigin: 'center center',
        zIndex: 5,
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
      }}>
        <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(196,30,30,0.5)' }} />
        <span style={{
          fontSize: '9px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'rgba(248,247,244,0.2)',
          whiteSpace: 'nowrap',
        }}>
          {content.badge}
        </span>
        <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(196,30,30,0.5)' }} />
      </div>

      <style>{`
        .h-cta-primary:hover {
          background-color: #A01515 !important;
          transform: translateY(-1px);
        }
        .h-cta-ghost:hover {
          border-color: rgba(248,247,244,0.5) !important;
          color: #F8F7F4 !important;
          background-color: rgba(248,247,244,0.04) !important;
        }
        @keyframes scrollPulse {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}