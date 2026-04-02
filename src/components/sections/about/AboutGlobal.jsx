'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Global Presence',
    heading: 'Eight Cities.\nOne Standard.',
    sub: 'Every Limore city operates to the same specification. Same vehicles. Same training. Same accountability.',
    cities: [
      { name: 'Dubai', country: 'UAE', status: 'Headquarters', code: 'DXB' },
      { name: 'London', country: 'United Kingdom', status: 'Operational', code: 'LHR' },
      { name: 'Riyadh', country: 'Saudi Arabia', status: 'Operational', code: 'RUH' },
      { name: 'New York', country: 'United States', status: 'Operational', code: 'JFK' },
      { name: 'Paris', country: 'France', status: 'Operational', code: 'CDG' },
      { name: 'Singapore', country: 'Singapore', status: 'Operational', code: 'SIN' },
      { name: 'Zurich', country: 'Switzerland', status: 'Operational', code: 'ZRH' },
      { name: 'Hong Kong', country: 'China SAR', status: 'Operational', code: 'HKG' },
    ],
    hqLabel: 'Headquarters',
    opLabel: 'Operational',
  },
  ar: {
    label: 'الحضور العالمي',
    heading: 'ثماني مدن.\nمعيار واحد.',
    sub: 'كل مدينة في ليمور تعمل وفق نفس المعيار. نفس السيارات. نفس التدريب. نفس المساءلة.',
    cities: [
      { name: 'دبي', country: 'الإمارات', status: 'المقر الرئيسي', code: 'DXB' },
      { name: 'لندن', country: 'المملكة المتحدة', status: 'تشغيلي', code: 'LHR' },
      { name: 'الرياض', country: 'السعودية', status: 'تشغيلي', code: 'RUH' },
      { name: 'نيويورك', country: 'الولايات المتحدة', status: 'تشغيلي', code: 'JFK' },
      { name: 'باريس', country: 'فرنسا', status: 'تشغيلي', code: 'CDG' },
      { name: 'سنغافورة', country: 'سنغافورة', status: 'تشغيلي', code: 'SIN' },
      { name: 'زيورخ', country: 'سويسرا', status: 'تشغيلي', code: 'ZRH' },
      { name: 'هونغ كونغ', country: 'الصين', status: 'تشغيلي', code: 'HKG' },
    ],
    hqLabel: 'المقر الرئيسي',
    opLabel: 'تشغيلي',
  },
  fr: {
    label: 'Présence Mondiale',
    heading: 'Huit Villes.\nUn Standard.',
    sub: 'Chaque ville Limore opère selon les mêmes spécifications. Mêmes véhicules. Même formation. Même responsabilité.',
    cities: [
      { name: 'Dubai', country: 'Émirats Arabes Unis', status: 'Siège', code: 'DXB' },
      { name: 'Londres', country: 'Royaume-Uni', status: 'Opérationnel', code: 'LHR' },
      { name: 'Riyad', country: 'Arabie Saoudite', status: 'Opérationnel', code: 'RUH' },
      { name: 'New York', country: 'États-Unis', status: 'Opérationnel', code: 'JFK' },
      { name: 'Paris', country: 'France', status: 'Opérationnel', code: 'CDG' },
      { name: 'Singapour', country: 'Singapour', status: 'Opérationnel', code: 'SIN' },
      { name: 'Zurich', country: 'Suisse', status: 'Opérationnel', code: 'ZRH' },
      { name: 'Hong Kong', country: 'Chine RSS', status: 'Opérationnel', code: 'HKG' },
    ],
    hqLabel: 'Siège Social',
    opLabel: 'Opérationnel',
  },
}

export default function AboutGlobal({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const rowRefs    = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%' }
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      rowRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, x: isRTL ? 24 : -24 },
          { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', delay: 0.3 + i * 0.07, scrollTrigger: st }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#161616' }} />

      <div className="ag-layout">

        {/* Left — sticky header */}
        <div className="ag-left" style={{ borderRight: '1px solid #161616' }}>
          <div
            ref={headerRef}
            style={{
              padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 64px)',
              position: 'sticky', top: '100px', opacity: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
              <span style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.25em',
                textTransform: 'uppercase', color: '#C41E1E',
              }}>
                {content.label}
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 4rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 300, color: '#F8F7F4',
              lineHeight: 1.02, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
              marginBottom: '24px',
            }}>
              {content.heading}
            </h2>
            <p style={{
              fontSize: '13px', fontFamily: 'Inter, sans-serif',
              fontWeight: 300, color: 'rgba(248,247,244,0.4)',
              lineHeight: 1.8, maxWidth: '280px',
            }}>
              {content.sub}
            </p>

            {/* Globe SVG decoration */}
            <div style={{ marginTop: '40px', opacity: 0.15 }}>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                <circle cx="60" cy="60" r="50" stroke="#F8F7F4" strokeWidth="0.5"/>
                <ellipse cx="60" cy="60" rx="20" ry="50" stroke="#F8F7F4" strokeWidth="0.5"/>
                <line x1="10" y1="60" x2="110" y2="60" stroke="#F8F7F4" strokeWidth="0.5"/>
                <line x1="60" y1="10" x2="60" y2="110" stroke="#F8F7F4" strokeWidth="0.5"/>
                <ellipse cx="60" cy="60" rx="40" ry="50" stroke="#F8F7F4" strokeWidth="0.5"/>
                <circle cx="60" cy="60" r="3" fill="#C41E1E"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right — city list */}
        <div style={{ padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 64px)' }}>
          {content.cities.map((city, i) => (
            <div
              key={i}
              ref={(el) => (rowRefs.current[i] = el)}
              className="ag-row"
              style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px 0',
                borderBottom: '1px solid #161616',
                opacity: 0,
                transition: 'background-color 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{
                  fontSize: '11px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.18em',
                  color: '#C41E1E', minWidth: '36px',
                }}>
                  {city.code}
                </span>
                <div>
                  <p style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 400, color: '#F8F7F4', lineHeight: 1.1,
                  }}>
                    {city.name}
                  </p>
                  <p style={{
                    fontSize: '11px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 300, color: 'rgba(248,247,244,0.35)',
                    letterSpacing: '0.08em', marginTop: '3px',
                  }}>
                    {city.country}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  backgroundColor: city.status === 'Headquarters' || city.status === 'المقر الرئيسي' || city.status === 'Siège' ? '#C41E1E' : '#3A7A3A',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.3)',
                }}>
                  {city.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#161616' }} />

      <style>{`
        .ag-layout {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .ag-layout { grid-template-columns: 1fr 1.4fr; }
        }
        .ag-left { display: none; }
        @media (min-width: 1024px) {
          .ag-left { display: block; }
        }
        .ag-row:hover p:first-child {
          color: rgba(248,247,244,0.6);
        }
      `}</style>
    </section>
  )
}