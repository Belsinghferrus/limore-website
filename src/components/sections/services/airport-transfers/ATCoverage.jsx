'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Coverage',
    heading: 'Airport Transfers\nAcross Every City We Serve',
    sub: 'Every listed airport has a dedicated Limore operations team, pre-approved pickup zones, and direct terminal access.',
    airports: [
      { city: 'Dubai', airports: ['Dubai International - DXB', 'Al Maktoum International — DWC'], code: 'UAE' },
      { city: 'London', airports: ['Heathrow — LHR', 'Gatwick - LGW', 'London City - LCY', 'Stansted — STN'], code: 'GBR' },
      { city: 'Riyadh', airports: ['King Khalid International - RUH'], code: 'KSA' },
      { city: 'New York', airports: ['John F. Kennedy - JFK', 'Newark Liberty - EWR', 'LaGuardia - LGA'], code: 'USA' },
      { city: 'Paris', airports: ['Charles de Gaulle - CDG', 'Orly - ORY', 'Le Bourget - LBG'], code: 'FRA' },
      { city: 'Singapore', airports: ['Changi International - SIN'], code: 'SGP' },
      { city: 'Zurich', airports: ['Zurich International - ZRH'], code: 'CHE' },
      { city: 'Hong Kong', airports: ['Hong Kong International - HKG'], code: 'HKG' },
    ],
    note: 'Private jet terminals and FBO facilities available at all locations on request.',
  },
  ar: {
    label: 'التغطية',
    heading: 'نقل المطارات في\nكل مدينة نخدمها',
    sub: 'كل مطار مدرج لديه فريق عمليات ليمور مخصص ومناطق استقبال معتمدة مسبقا.',
    airports: [
      { city: 'دبي', airports: ['دبي الدولي — DXB', 'المكتوم الدولي — DWC'], code: 'الإمارات' },
      { city: 'لندن', airports: ['هيثرو - LHR', 'غاتويك — LGW', 'لندن سيتي — LCY'], code: 'المملكة المتحدة' },
      { city: 'الرياض', airports: ['الملك خالد الدولي — RUH'], code: 'السعودية' },
      { city: 'نيويورك', airports: ['جون كينيدي — JFK', 'نيوارك — EWR', 'لاغارديا — LGA'], code: 'أمريكا' },
      { city: 'باريس', airports: ['شارل ديغول — CDG', 'أورلي — ORY', 'لو بورجيه — LBG'], code: 'فرنسا' },
      { city: 'سنغافورة', airports: ['شانغي الدولي — SIN'], code: 'سنغافورة' },
      { city: 'زيورخ', airports: ['زيورخ الدولي — ZRH'], code: 'سويسرا' },
      { city: 'هونغ كونغ', airports: ['هونغ كونغ الدولي — HKG'], code: 'الصين' },
    ],
    note: 'محطات الطائرات الخاصة ومرافق FBO متاحة في جميع المواقع عند الطلب.',
  },
  fr: {
    label: 'Couverture',
    heading: 'Transferts Aéroport\nDans Chaque Ville que Nous Desservons',
    sub: 'Chaque aéroport listé dispose d\'une équipe d\'opérations Limore dédiée et d\'un accès direct aux terminaux.',
    airports: [
      { city: 'Dubai', airports: ['Dubaï International — DXB', 'Al Maktoum International - DWC'], code: 'EAU' },
      { city: 'Londres', airports: ['Heathrow — LHR', 'Gatwick — LGW', 'London City — LCY'], code: 'GBR' },
      { city: 'Riyad', airports: ['King Khalid International — RUH'], code: 'KSA' },
      { city: 'New York', airports: ['John F. Kennedy — JFK', 'Newark — EWR', 'LaGuardia — LGA'], code: 'USA' },
      { city: 'Paris', airports: ['Charles de Gaulle — CDG', 'Orly — ORY', 'Le Bourget — LBG'], code: 'FRA' },
      { city: 'Singapour', airports: ['Changi International — SIN'], code: 'SGP' },
      { city: 'Zurich', airports: ['Zurich International — ZRH'], code: 'CHE' },
      { city: 'Hong Kong', airports: ['Hong Kong International — HKG'], code: 'HKG' },
    ],
    note: 'Terminaux jets privés et installations FBO disponibles dans tous les sites sur demande.',
  },
}

export default function ATCoverage({ locale = 'en' }) {
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
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.3 + i * 0.07, scrollTrigger: st }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 100px) clamp(24px, 6vw, 96px) clamp(40px, 5vw, 64px)',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '32px', borderBottom: '1px solid #EBEBEB', opacity: 0,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
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
            fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400, color: '#0A0A0A',
            lineHeight: 1.02, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        <p style={{
          fontSize: '14px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: '#888', lineHeight: 1.75,
          maxWidth: '340px',
        }}>
          {content.sub}
        </p>
      </div>

      {/* Airport rows */}
      <div style={{ padding: '0 clamp(24px, 6vw, 96px)' }}>
        {content.airports.map((item, i) => (
          <div
            key={i}
            ref={(el) => (rowRefs.current[i] = el)}
            className="atc-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr',
              gap: 'clamp(16px, 3vw, 48px)',
              padding: 'clamp(20px, 3vw, 32px) 0',
              borderBottom: '1px solid #EBEBEB',
              alignItems: 'start',
              opacity: 0,
              transition: 'background-color 0.2s ease',
            }}
          >
            <div>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#0A0A0A', lineHeight: 1.1,
                marginBottom: '4px',
              }}>
                {item.city}
              </p>
              <p style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.14em',
                color: '#C41E1E',
              }}>
                {item.code}
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {item.airports.map((a, j) => (
                <span
                  key={j}
                  style={{
                    fontSize: '12px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 300, color: '#555',
                    backgroundColor: '#F8F7F4',
                    padding: '6px 14px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Note row */}
        <div style={{
          padding: 'clamp(20px, 3vw, 32px) 0',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="#C41E1E" strokeWidth="1"/>
            <line x1="8" y1="6" x2="8" y2="11" stroke="#C41E1E" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="8" cy="4.5" r="0.8" fill="#C41E1E"/>
          </svg>
          <p style={{
            fontSize: '12px', fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: '#999', letterSpacing: '0.04em', lineHeight: 1.6,
          }}>
            {content.note}
          </p>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .atc-row:hover { background-color: rgba(248,247,244,0.5) !important; }
      `}</style>
    </section>
  )
}