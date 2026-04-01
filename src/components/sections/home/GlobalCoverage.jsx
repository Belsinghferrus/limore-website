'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Where We Operate',
    heading: 'A Global Presence\nIn Every Key City',
    sub: 'Limore operates in the world\'s most important business and luxury destinations. Consistent service, local expertise, global standards.',
    regions: [
      { name: 'Middle East', cities: ['Dubai', 'Doha'] },
      { name: 'Europe', cities: ['London', 'Paris', 'Frankfurt', 'Zurich'] },
      { name: 'Asia', cities: ['Singapore'] },
      { name: 'Americas', cities: ['New York'] },
    ],
    cta: 'View All Cities',
  },
  ar: {
    label: 'أين نعمل',
    heading: 'حضور عالمي\nفي كل مدينة رئيسية',
    sub: 'تعمل ليمور في أهم وجهات الأعمال والرفاهية في العالم. خدمة متسقة وخبرة محلية ومعايير عالمية.',
    regions: [
      { name: 'الشرق الاوسط', cities: ['دبي', 'الدوحة'] },
      { name: 'أوروبا', cities: ['لندن', 'باريس', 'فرانكفورت', 'زيورخ'] },
      { name: 'آسيا', cities: ['سنغافورة'] },
      { name: 'الأمريكيتان', cities: ['نيويورك'] },
    ],
    cta: 'جميع المدن',
  },
  fr: {
    label: 'Ou Nous Operons',
    heading: 'Une Presence Mondiale\nDans Chaque Ville Cle',
    sub: 'Limore opere dans les destinations business et luxe les plus importantes du monde.',
    regions: [
      { name: 'Moyen-Orient', cities: ['Dubai', 'Doha'] },
      { name: 'Europe', cities: ['Londres', 'Paris', 'Francfort', 'Zurich'] },
      { name: 'Asie', cities: ['Singapour'] },
      { name: 'Ameriques', cities: ['New York'] },
    ],
    cta: 'Voir Toutes les Villes',
  },
}

const CITY_DOTS = [
  { name: 'Dubai',     x: 58, y: 46 },
  { name: 'Doha',      x: 57, y: 47 },
  { name: 'London',    x: 47, y: 32 },
  { name: 'Paris',     x: 48, y: 34 },
  { name: 'Frankfurt', x: 49, y: 33 },
  { name: 'Zurich',    x: 49, y: 34 },
  { name: 'Singapore', x: 75, y: 57 },
  { name: 'New York',  x: 26, y: 37 },
]

export default function GlobalCoverage({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL = locale === 'ar'
  const sectionRef = useRef(null)
  const dotsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            delay: i * 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
            }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const localePath = (href) => '/' + locale + href

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div className="container-default">
        <div className="coverage-layout">

          {/* Left text */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
              <span style={{
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#C41E1E',
              }}>
                {content.label}
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, color: '#0A0A0A',
              lineHeight: 1.1, letterSpacing: '0.02em',
              marginBottom: '20px', whiteSpace: 'pre-line',
            }}>
              {content.heading}
            </h2>
            <p style={{
              fontSize: '15px', fontFamily: 'Inter, sans-serif',
              fontWeight: 300, color: '#6B6B6B',
              lineHeight: 1.75, marginBottom: '40px',
            }}>
              {content.sub}
            </p>

            {/* Region list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {content.regions.map((region, i) => (
                <div key={i} style={{ borderTop: '1px solid #E5E4E0', paddingTop: '16px' }}>
                  <p style={{
                    fontSize: '10px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 500, letterSpacing: '0.18em',
                    textTransform: 'uppercase', color: '#ADADAD',
                    marginBottom: '8px',
                  }}>
                    {region.name}
                  </p>
                  <p style={{
                    fontSize: '14px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 400, color: '#0A0A0A',
                    letterSpacing: '0.02em',
                  }}>
                    {region.cities.join(' - ')}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href={localePath('/global-coverage')}
              className="coverage-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 32px', border: '1px solid #0A0A0A',
                color: '#0A0A0A', fontSize: '12px',
                fontFamily: 'Inter, sans-serif', fontWeight: 500,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'all 0.3s ease',
              }}
            >
              {content.cta} →
            </Link>
          </div>

          {/* Right - SVG world map with dots */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#F0EFEC',
              border: '1px solid #E5E4E0',
              overflow: 'hidden',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="map-container"
          >
            {/* World map SVG placeholder */}
            <svg
              viewBox="0 0 100 60"
              style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
              aria-hidden="true"
            >
              {/* Simplified continent outlines */}
              {/* North America */}
              <path d="M5,20 L25,18 L28,25 L22,35 L15,38 L8,32 Z" fill="none" stroke="#D4D1CA" strokeWidth="0.3" />
              {/* South America */}
              <path d="M18,40 L28,38 L30,50 L22,55 L16,50 Z" fill="none" stroke="#D4D1CA" strokeWidth="0.3" />
              {/* Europe */}
              <path d="M44,28 L54,26 L56,32 L50,36 L44,34 Z" fill="none" stroke="#D4D1CA" strokeWidth="0.3" />
              {/* Africa */}
              <path d="M46,36 L56,34 L58,50 L52,56 L44,50 L44,38 Z" fill="none" stroke="#D4D1CA" strokeWidth="0.3" />
              {/* Asia */}
              <path d="M55,22 L85,20 L88,35 L80,40 L65,42 L58,36 Z" fill="none" stroke="#D4D1CA" strokeWidth="0.3" />
              {/* Australia */}
              <path d="M76,46 L88,44 L90,54 L80,56 L74,52 Z" fill="none" stroke="#D4D1CA" strokeWidth="0.3" />
            </svg>

            {/* City dots */}
            {CITY_DOTS.map((city, i) => (
              <div
                key={city.name}
                ref={(el) => (dotsRef.current[i] = el)}
                style={{
                  position: 'absolute',
                  left: city.x + '%',
                  top: city.y + '%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                }}
              >
                {/* Pulse ring */}
                <div style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '20px', height: '20px',
                  borderRadius: '50%',
                  border: '1px solid rgba(196,30,30,0.3)',
                  animation: 'dotPulse 2s ease-out infinite',
                  animationDelay: i * 0.3 + 's',
                }} />
                {/* Dot */}
                <div style={{
                  width: '6px', height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#C41E1E',
                  position: 'relative', zIndex: 1,
                }} />
                {/* Label */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '8px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  color: '#0A0A0A',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                }}>
                  {city.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .coverage-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .coverage-layout {
            grid-template-columns: 1fr 1.4fr;
            gap: 80px;
          }
        }
        .map-container {
          min-height: 400px;
        }
        @media (min-width: 1024px) {
          .map-container { min-height: 500px; }
        }
        .coverage-cta:hover {
          background-color: #0A0A0A !important;
          color: #F8F7F4 !important;
        }
        @keyframes dotPulse {
          0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
      `}</style>
    </section>
  )
}