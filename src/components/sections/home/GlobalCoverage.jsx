'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────── */
const t = {
  en: {
    label: 'Where We Operate',
    heading: 'A Global Presence\nIn Every Key City',
    sub: 'Limore operates in the world\'s most important business and luxury destinations. Consistent service, local expertise — one global standard.',
    quote: '"Wherever business takes you, Limore is already there."',
    regions: [
      { name: 'Middle East', cities: ['Dubai', 'Doha'] },
      { name: 'Europe',      cities: ['London', 'Paris', 'Frankfurt', 'Zurich'] },
      { name: 'Asia',        cities: ['Singapore'] },
      { name: 'Americas',    cities: ['New York'] },
    ],
    cta: 'View All Cities',
    hoverLabel: 'Limore city',
    comingSoon: 'Coming soon',
    mapHint: 'Hover a city to explore',
  },
  ar: {
    label: 'أين نعمل',
    heading: 'حضور عالمي\nفي كل مدينة رئيسية',
    sub: 'تعمل ليمور في أهم وجهات الأعمال والرفاهية في العالم. خدمة متسقة وخبرة محلية ومعايير عالمية.',
    quote: '"أينما أخذك العمل، ليمور موجودة بالفعل."',
    regions: [
      { name: 'الشرق الاوسط', cities: ['دبي', 'الدوحة'] },
      { name: 'أوروبا',       cities: ['لندن', 'باريس', 'فرانكفورت', 'زيورخ'] },
      { name: 'آسيا',         cities: ['سنغافورة'] },
      { name: 'الأمريكيتان', cities: ['نيويورك'] },
    ],
    cta: 'جميع المدن',
    hoverLabel: 'مدينة ليمور',
    comingSoon: 'قريبا',
    mapHint: 'اضغط على المدينة للتفاصيل',
  },
  fr: {
    label: 'Ou Nous Operons',
    heading: 'Une Presence Mondiale\nDans Chaque Ville Cle',
    sub: 'Limore opere dans les destinations business et luxe les plus importantes du monde.',
    quote: '"Ou que les affaires vous menent, Limore est deja la."',
    regions: [
      { name: 'Moyen-Orient', cities: ['Dubai', 'Doha'] },
      { name: 'Europe',       cities: ['Londres', 'Paris', 'Francfort', 'Zurich'] },
      { name: 'Asie',         cities: ['Singapour'] },
      { name: 'Ameriques',    cities: ['New York'] },
    ],
    cta: 'Voir Toutes les Villes',
    hoverLabel: 'Ville Limore',
    comingSoon: 'Bientot',
    mapHint: 'Survolez une ville pour explorer',
  },
}

/* ─────────────────────────────────────────────
   CITY DATA — (x,y) % of SVG viewBox 0-100 × 0-55
───────────────────────────────────────────── */
const CITIES = [
  {
    id: 'dubai', name: 'Dubai', region: 'Middle East',
    x: 61, y: 38.5,
    desc: 'UAE operations hub',
    detail: 'Airport transfers, corporate & VIP services across the UAE.',
    active: true,
  },
  {
    id: 'doha', name: 'Doha', region: 'Middle East',
    x: 59.5, y: 40,
    desc: 'Qatar coverage',
    detail: 'Luxury chauffeur across Doha for corporate and leisure.',
    active: true,
  },
  {
    id: 'london', name: 'London', region: 'Europe',
    x: 46.2, y: 21,
    desc: 'Europe HQ',
    detail: 'Full-city coverage, roadshows, Heathrow & City airport transfers.',
    active: true,
  },
  {
    id: 'paris', name: 'Paris', region: 'Europe',
    x: 47.8, y: 23,
    desc: 'Fashion capital',
    detail: 'CDG & Orly transfers, fashion week, private jet connections.',
    active: true,
  },
  {
    id: 'frankfurt', name: 'Frankfurt', region: 'Europe',
    x: 49.2, y: 22,
    desc: 'Finance hub',
    detail: 'Corporate roadshows, financial district, FRA airport.',
    active: true,
  },
  {
    id: 'zurich', name: 'Zurich', region: 'Europe',
    x: 49, y: 24,
    desc: 'Banking center',
    detail: 'Private banking transfers, ZRH airport, discreet corporate service.',
    active: true,
  },
  {
    id: 'singapore', name: 'Singapore', region: 'Asia',
    x: 77.5, y: 42,
    desc: 'Asia Pacific hub',
    detail: 'Changi connections, corporate fleet, APAC business travel.',
    active: true,
  },
  {
    id: 'newyork', name: 'New York', region: 'Americas',
    x: 25, y: 25,
    desc: 'North America',
    detail: 'JFK, LGA, EWR airport runs, Manhattan corporate fleet.',
    active: true,
  },
  {
    id: 'tokyo', name: 'Tokyo', region: 'Asia',
    x: 84, y: 25.5,
    desc: 'Coming soon',
    detail: 'Launching 2025.',
    active: false,
  },
  {
    id: 'milan', name: 'Milan', region: 'Europe',
    x: 49.8, y: 25.5,
    desc: 'Coming soon',
    detail: 'Launching soon.',
    active: false,
  },
]

const CONNECTIONS = [
  { from: 'london',    to: 'dubai'      },
  { from: 'dubai',     to: 'newyork'    },
  { from: 'dubai',     to: 'singapore'  },
  { from: 'paris',     to: 'london'     },
  { from: 'frankfurt', to: 'dubai'      },
  { from: 'london',    to: 'newyork'    },
]

function getCityPos(id) {
  const c = CITIES.find((c) => c.id === id)
  return c ? { x: c.x, y: c.y } : null
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function GlobalCoverage({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'

  const sectionRef  = useRef(null)
  const mapSvgRef   = useRef(null)
  const lineRefs    = useRef([])
  const cityRefs    = useRef([])
  const leftRef     = useRef(null)
  const mapWrapRef  = useRef(null)

  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, city: null })
  const [activeCity, setActiveCity] = useState(null)

  const localePath = (href) => '/' + locale + href

  /* ── GSAP entrance + line animation ── */
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Left column fade up
      gsap.fromTo(leftRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      // Connection lines — draw in then loop
      lineRefs.current.forEach((line, i) => {
        if (!line || !line.getTotalLength) return
        const len = line.getTotalLength()
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len })
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 2.4,
          ease: 'power1.inOut',
          repeat: -1,
          repeatDelay: 1.2,
          delay: i * 0.3,
          scrollTrigger: { trigger: mapWrapRef.current, start: 'top 80%' },
        })
      })

      // City dots scale in
      gsap.fromTo(cityRefs.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.55,
          ease: 'back.out(2)',
          stagger: 0.06,
          delay: 0.2,
          scrollTrigger: { trigger: mapWrapRef.current, start: 'top 80%' },
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  /* ── Hover ── */
  function showTooltip(city, e) {
    setActiveCity(city.id)
    setTooltip({ visible: true, city })

    const idx = CITIES.findIndex((c) => c.id === city.id)
    if (cityRefs.current[idx]) {
      gsap.to(cityRefs.current[idx], { scale: 1.35, duration: 0.2, ease: 'power2.out' })
    }
  }

  function hideTooltip(city) {
    setActiveCity(null)
    setTooltip((p) => ({ ...p, visible: false, city: null }))
    const idx = CITIES.findIndex((c) => c.id === city.id)
    if (cityRefs.current[idx]) {
      gsap.to(cityRefs.current[idx], { scale: 1, duration: 0.2, ease: 'power2.in' })
    }
  }

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#050505',
        color: '#F8F7F4',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >

      {/* ────────────────────────────────────────
          TOP SECTION — editorial left + right
      ──────────────────────────────────────── */}
      <div
        className="gc-top"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          minHeight: '520px',
        }}
      >
        {/* LEFT — editorial panel */}
        <div
          ref={leftRef}
          style={{
            padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRight: '1px solid #111',
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
            <span style={{
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400,
            lineHeight: 1.05,
            whiteSpace: 'pre-line',
            marginBottom: '28px',
            color: '#F8F7F4',
          }}>
            {content.heading}
          </h2>

          {/* Sub */}
          <p style={{
            fontSize: '15px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            color: 'rgba(248,247,244,0.5)',
            lineHeight: 1.85,
            marginBottom: '40px',
            maxWidth: '400px',
          }}>
            {content.sub}
          </p>

          {/* Pull image + stat block side by side */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '44px',
          }}>

            {/* City night image */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              height: '200px',
            }}>
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
                alt="Global city skyline at night — Limore presence"
                width={800}
                height={533}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(80%) contrast(1.1)',
                  opacity: 0.9,
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              {/* Image overlay label */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '14px',
                right: '14px',
              }}>
                <span style={{
                  fontSize: '9px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.7)',
                }}>
                  Global Operations
                </span>
              </div>
            </div>

            {/* Stat blocks stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { value: '8', label: 'Cities Worldwide' },
                { value: '4', label: 'Regions' },
                { value: '24/7', label: 'Every City' },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    padding: '14px 18px',
                    border: '1px solid #161616',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <p style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 400,
                    color: '#F8F7F4',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}>
                    {s.value}
                  </p>
                  <p style={{
                    fontSize: '9px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(248,247,244,0.3)',
                  }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Region list */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
            marginBottom: '40px',
            borderTop: '1px solid #111',
          }}>
            {content.regions.map((region, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '20px',
                  padding: '13px 0',
                  borderBottom: '1px solid #111',
                }}
              >
                <p style={{
                  fontSize: '10px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.35)',
                  flexShrink: 0,
                }}>
                  {region.name}
                </p>
                <p style={{
                  fontSize: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: 'rgba(248,247,244,0.75)',
                  letterSpacing: '0.04em',
                  textAlign: isRTL ? 'left' : 'right',
                }}>
                  {region.cities.join(' · ')}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <Link
              href={localePath('/global-coverage')}
              className="gc-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 32px',
                border: '1px solid rgba(248,247,244,0.3)',
                color: '#F8F7F4',
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span>{content.cta}</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* RIGHT — decorative city image, full height */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '340px',
        }}>
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80"
            alt="Dubai city aerial view — Limore Middle East hub"
            width={1200}
            height={900}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'grayscale(60%) contrast(1.05)',
              opacity: 0.75,
            }}
          />
          {/* Dark gradient overlay for text legibility */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.1) 60%)',
          }} />
          {/* City caption bottom left */}
          <div style={{
            position: 'absolute',
            bottom: '28px',
            left: '28px',
          }}>
            <p style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400,
              color: '#F8F7F4',
              lineHeight: 1.1,
              marginBottom: '6px',
              letterSpacing: '0.02em',
            }}>
              Dubai
            </p>
            <p style={{
              fontSize: '10px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C41E1E',
            }}>
              Middle East Hub
            </p>
          </div>
          {/* Top right badge */}
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            padding: '6px 14px',
            border: '1px solid rgba(248,247,244,0.25)',
            backdropFilter: 'blur(8px)',
            background: 'rgba(5,5,5,0.4)',
          }}>
            <span style={{
              fontSize: '9px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(248,247,244,0.75)',
            }}>
              Featured City
            </span>
          </div>
        </div>

      </div>

      {/* ────────────────────────────────────────
          FULL-WIDTH MAP
      ──────────────────────────────────────── */}
      <div
        ref={mapWrapRef}
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#050505',
          borderTop: '1px solid #0F0F0F',
        }}
      >
        {/* Section label above map */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <div style={{ width: '30px', height: '1px', backgroundColor: '#C41E1E' }} />
          <span style={{
            fontSize: '10px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.4)',
            whiteSpace: 'nowrap',
          }}>
            {content.mapHint}
          </span>
          <div style={{ width: '30px', height: '1px', backgroundColor: '#C41E1E' }} />
        </div>

        {/* SVG World Map — full width, precise outlines */}
        <svg
          ref={mapSvgRef}
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: '100%',
            display: 'block',
          }}
          aria-label="Limore global coverage map"
        >
          {/* Very subtle grid */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5"/>
            </pattern>
            <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C41E1E" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#C41E1E" stopOpacity="0"/>
            </radialGradient>
            <filter id="cityGlow">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Grid background */}
          <rect width="1000" height="500" fill="url(#grid)" />

          {/* ── Continent outlines — accurate Mercator-approximate paths ── */}

          {/* North America */}
          <path
            d="M 120 60 L 145 55 L 185 58 L 215 65 L 235 80 L 245 100 L 240 130 L 225 155 L 205 170 L 185 180 L 165 185 L 145 190 L 130 200 L 120 210 L 108 220 L 100 230 L 95 215 L 90 200 L 92 180 L 98 165 L 105 150 L 110 135 L 108 120 L 105 105 L 108 90 L 112 75 Z"
            fill="rgba(248,247,244,0.05)"
            stroke="rgba(248,247,244,0.22)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Florida tip */}
          <path d="M 175 185 L 178 200 L 170 205 L 165 195 Z"
            fill="rgba(248,247,244,0.05)" stroke="rgba(248,247,244,0.18)" strokeWidth="0.8"/>

          {/* Greenland */}
          <path d="M 210 30 L 240 25 L 260 35 L 255 55 L 235 60 L 210 55 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.15)" strokeWidth="0.8"/>

          {/* Central America + Caribbean */}
          <path d="M 165 210 L 170 225 L 158 235 L 150 230 L 148 220 L 155 215 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.15)" strokeWidth="0.7"/>

          {/* South America */}
          <path
            d="M 195 235 L 215 230 L 235 235 L 248 250 L 255 275 L 258 300 L 252 330 L 240 355 L 225 375 L 210 390 L 200 380 L 192 360 L 188 335 L 182 310 L 180 285 L 183 260 L 190 245 Z"
            fill="rgba(248,247,244,0.05)"
            stroke="rgba(248,247,244,0.22)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Europe — detailed */}
          <path
            d="M 435 65 L 455 60 L 475 62 L 495 68 L 510 75 L 518 90 L 515 105 L 505 115 L 490 120 L 475 125 L 462 130 L 450 135 L 440 130 L 430 120 L 425 108 L 426 94 L 430 80 Z"
            fill="rgba(248,247,244,0.05)"
            stroke="rgba(248,247,244,0.22)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Iberian peninsula */}
          <path d="M 428 115 L 443 112 L 448 130 L 440 145 L 428 140 L 422 128 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.18)" strokeWidth="0.8"/>
          {/* Scandinavian */}
          <path d="M 462 50 L 478 40 L 492 42 L 495 58 L 480 62 L 466 62 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.18)" strokeWidth="0.8"/>
          {/* Italy */}
          <path d="M 472 128 L 480 135 L 482 150 L 475 158 L 468 150 L 466 138 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.15)" strokeWidth="0.7"/>
          {/* UK */}
          <path d="M 438 72 L 448 68 L 452 80 L 445 88 L 436 84 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.18)" strokeWidth="0.8"/>

          {/* Africa */}
          <path
            d="M 440 155 L 460 148 L 490 148 L 515 152 L 535 165 L 548 185 L 552 210 L 550 240 L 542 268 L 528 292 L 510 312 L 495 328 L 480 338 L 465 335 L 450 322 L 438 305 L 430 282 L 425 258 L 422 232 L 422 205 L 425 180 L 430 165 Z"
            fill="rgba(248,247,244,0.05)"
            stroke="rgba(248,247,244,0.22)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Madagascar */}
          <path d="M 542 295 L 550 285 L 558 300 L 554 315 L 546 310 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.15)" strokeWidth="0.7"/>

          {/* Middle East */}
          <path
            d="M 548 140 L 572 132 L 598 130 L 620 138 L 632 152 L 630 168 L 618 178 L 600 182 L 580 185 L 562 180 L 548 168 L 544 155 Z"
            fill="rgba(248,247,244,0.05)"
            stroke="rgba(248,247,244,0.2)"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Arabian peninsula */}
          <path
            d="M 575 178 L 598 178 L 615 188 L 618 210 L 610 228 L 598 238 L 585 235 L 572 220 L 568 200 L 570 185 Z"
            fill="rgba(248,247,244,0.05)"
            stroke="rgba(248,247,244,0.2)"
            strokeWidth="0.9"
          />

          {/* Asia — Central + East */}
          <path
            d="M 595 60 L 630 52 L 665 50 L 700 52 L 735 58 L 765 68 L 790 82 L 805 100 L 808 120 L 800 140 L 782 152 L 760 158 L 735 155 L 708 148 L 680 142 L 655 135 L 632 130 L 615 125 L 600 115 L 592 100 L 590 82 Z"
            fill="rgba(248,247,244,0.05)"
            stroke="rgba(248,247,244,0.22)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Indian subcontinent */}
          <path
            d="M 628 158 L 652 152 L 668 158 L 672 178 L 665 200 L 652 218 L 638 225 L 626 218 L 618 198 L 618 178 L 622 165 Z"
            fill="rgba(248,247,244,0.05)"
            stroke="rgba(248,247,244,0.2)"
            strokeWidth="0.9"
          />
          {/* East Asia / China */}
          <path
            d="M 698 80 L 730 72 L 760 78 L 782 92 L 790 112 L 782 132 L 760 145 L 735 150 L 710 145 L 695 132 L 688 115 L 692 98 Z"
            fill="rgba(248,247,244,0.04)"
            stroke="rgba(248,247,244,0.18)"
            strokeWidth="0.8"
          />
          {/* Japan */}
          <path d="M 810 88 L 822 80 L 832 90 L 828 108 L 815 110 L 808 100 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.15)" strokeWidth="0.7"/>
          {/* Southeast Asia */}
          <path d="M 730 175 L 758 168 L 775 178 L 770 198 L 752 205 L 735 200 L 726 188 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.18)" strokeWidth="0.8"/>
          {/* Malay peninsula */}
          <path d="M 748 198 L 755 208 L 758 222 L 750 228 L 744 218 L 744 205 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.18)" strokeWidth="0.8"/>

          {/* Australia */}
          <path
            d="M 760 310 L 790 302 L 820 305 L 845 315 L 860 335 L 862 358 L 852 378 L 832 390 L 808 395 L 782 390 L 762 375 L 750 355 L 748 332 L 752 315 Z"
            fill="rgba(248,247,244,0.05)"
            stroke="rgba(248,247,244,0.22)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* New Zealand */}
          <path d="M 878 365 L 886 355 L 892 368 L 885 380 L 878 375 Z"
            fill="rgba(248,247,244,0.04)" stroke="rgba(248,247,244,0.15)" strokeWidth="0.7"/>

          {/* ── Connection lines ── */}
          {CONNECTIONS.map((conn, i) => {
            const from = getCityPos(conn.from)
            const to   = getCityPos(conn.to)
            if (!from || !to) return null
            // Map city % coords to SVG 1000x500
            const fx = (from.x / 100) * 1000
            const fy = (from.y / 55) * 500
            const tx = (to.x / 100) * 1000
            const ty = (to.y / 55) * 500
            const mx = (fx + tx) / 2
            const my = Math.min(fy, ty) - 60
            return (
              <path
                key={i}
                ref={(el) => (lineRefs.current[i] = el)}
                d={`M ${fx} ${fy} Q ${mx} ${my} ${tx} ${ty}`}
                fill="none"
                stroke="#C41E1E"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity="0.55"
              />
            )
          })}

          {/* ── City pins ── */}
          {CITIES.map((city, i) => {
            const cx = (city.x / 100) * 1000
            const cy = (city.y / 55) * 500
            const isActive = city.active
            const isHovered = activeCity === city.id
            return (
              <g
                key={city.id}
                ref={(el) => (cityRefs.current[i] = el)}
                transform={`translate(${cx} ${cy})`}
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => showTooltip(city, e)}
                onMouseLeave={() => hideTooltip(city)}
                filter={isHovered ? 'url(#cityGlow)' : undefined}
                role="button"
                aria-label={city.name}
              >
                {/* Glow halo */}
                {isActive && (
                  <circle
                    cx="0" cy="0" r="14"
                    fill="url(#redGlow)"
                    opacity={isHovered ? 0.9 : 0.5}
                  />
                )}
                {/* Outer pulse ring */}
                {isActive && (
                  <circle
                    cx="0" cy="0" r="8"
                    fill="none"
                    stroke="rgba(196,30,30,0.55)"
                    strokeWidth="0.8"
                    style={{ animation: `gcPulse ${2 + i * 0.15}s ease-out infinite` }}
                  />
                )}
                {/* Inner ring */}
                {isActive && (
                  <circle
                    cx="0" cy="0" r="4.5"
                    fill="none"
                    stroke="rgba(196,30,30,0.4)"
                    strokeWidth="0.7"
                  />
                )}
                {/* Core dot */}
                <circle
                  cx="0" cy="0"
                  r={isActive ? 2.8 : 2}
                  fill={isActive ? '#C41E1E' : 'rgba(248,247,244,0.35)'}
                  stroke={isActive ? 'rgba(255,255,255,0.3)' : 'none'}
                  strokeWidth="0.8"
                />
                {/* City name label */}
                <text
                  x="0"
                  y="-10"
                  textAnchor="middle"
                  style={{
                    fontSize: isActive ? '8px' : '7px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fill: isActive
                      ? (isHovered ? '#F8F7F4' : 'rgba(248,247,244,0.75)')
                      : 'rgba(248,247,244,0.4)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {city.name}
                </text>
              </g>
            )
          })}
        </svg>

        {/* ── Tooltip overlay ── */}
        {tooltip.visible && tooltip.city && (() => {
          const city = tooltip.city
          const cx = (city.x / 100) * 100   // % left
          const cy = (city.y / 55) * 100    // % top (of map height)
          return (
            <div
              style={{
                position: 'absolute',
                left: cx + '%',
                top: cy + '%',
                transform: 'translate(-50%, calc(-100% - 28px))',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            >
              <div style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid #2A2A2A',
                padding: '14px 18px',
                minWidth: '180px',
                maxWidth: '240px',
                boxShadow: '0 16px 48px rgba(0,0,0,0.8)',
                position: 'relative',
              }}>
                {/* Red top accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '2px', backgroundColor: '#C41E1E',
                }} />
                {/* City name */}
                <p style={{
                  fontSize: '15px',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400,
                  color: '#F8F7F4',
                  marginBottom: '2px',
                  letterSpacing: '0.06em',
                }}>
                  {city.name}
                </p>
                {/* Region */}
                <p style={{
                  fontSize: '9px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: city.active ? '#C41E1E' : 'rgba(248,247,244,0.3)',
                  marginBottom: '8px',
                }}>
                  {city.active ? content.hoverLabel : content.comingSoon}
                  {' · '}
                  {city.region}
                </p>
                {/* Detail copy */}
                <p style={{
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  color: 'rgba(248,247,244,0.5)',
                  lineHeight: 1.6,
                }}>
                  {city.detail}
                </p>
                {/* Arrow */}
                <div style={{
                  position: 'absolute',
                  bottom: '-7px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0, height: 0,
                  borderLeft: '7px solid transparent',
                  borderRight: '7px solid transparent',
                  borderTop: '7px solid #0A0A0A',
                }} />
              </div>
            </div>
          )
        })()}

        {/* Bottom border */}
        <div style={{ height: '1px', backgroundColor: '#0F0F0F' }} />
      </div>

      {/* ── Stats strip ── */}
      <div style={{ borderBottom: '1px solid #0F0F0F' }}>
        <div className="container-default">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { value: '8',   label: 'Active Cities' },
              { value: '4',   label: 'Regions' },
              { value: '3+',  label: 'Expanding Soon' },
              { value: '24/7', label: 'In Every City' },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  paddingInline: '28px',
                  paddingBlock: '22px',
                  borderLeft: i > 0 ? '1px solid #111' : 'none',
                  textAlign: 'center',
                  minWidth: '120px',
                }}
              >
                <p style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400,
                  color: '#F8F7F4',
                  marginBottom: '5px',
                }}>
                  {s.value}
                </p>
                <p style={{
                  fontSize: '10px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.28)',
                }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .gc-top {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
          }
        }
        .gc-cta:hover {
          background-color: #F8F7F4 !important;
          color: #050505 !important;
        }
        @keyframes gcPulse {
          0%   { r: 8; opacity: 0.7; }
          100% { r: 20; opacity: 0; }
        }
      `}</style>

    </section>
  )
}