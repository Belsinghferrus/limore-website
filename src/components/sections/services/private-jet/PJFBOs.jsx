'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Coverage',
    heading: 'Every City.\nEvery FBO.\nOne Standard.',
    sub: 'Limore holds standing relationships with the primary FBO operators in each city we serve. We are not arranging access on the day. We already have it.',
    cities: [
      {
        city: 'Dubai',
        country: 'UAE',
        fbos: ['Jetex Dubai', 'ExecuJet MENA', 'DC Aviation Al Futtaim'],
        airport: 'DXB / DWC',
      },
      {
        city: 'Abu Dhabi',
        country: 'UAE',
        fbos: ['Jetex Abu Dhabi', 'Royal Jet FBO', 'Abu Dhabi Airports FBO'],
        airport: 'AUH',
      },
      {
        city: 'London',
        country: 'United Kingdom',
        fbos: ['Signature Farnborough', 'Harrods Aviation Stansted', 'Inflite Jet Centre Stansted'],
        airport: 'LTN / FAB / STN',
      },
      {
        city: 'Paris',
        country: 'France',
        fbos: ['Signature Le Bourget', 'ADP Le Bourget', 'Orly Business Aviation'],
        airport: 'LBG / ORY',
      },
      {
        city: 'Geneva',
        country: 'Switzerland',
        fbos: ['Jet Aviation Geneva', 'Signature GVA', 'TAG Aviation Geneva'],
        airport: 'GVA',
      },
      {
        city: 'Zurich',
        country: 'Switzerland',
        fbos: ['Jet Aviation Zurich', 'Signature ZRH', 'DC Aviation Zurich'],
        airport: 'ZRH',
      },
      {
        city: 'Frankfurt',
        country: 'Germany',
        fbos: ['Fraport Business Aviation', 'Signature FRA', 'DC Aviation Frankfurt'],
        airport: 'FRA / HHN',
      },
      {
        city: 'Riyadh',
        country: 'Saudi Arabia',
        fbos: ['SAUDIA Private Aviation', 'DAS FBO Riyadh', 'Signature RUH'],
        airport: 'RUH',
      },
    ],
    fboLabel: 'FBO Partners',
    airportLabel: 'Airport Codes',
    note: 'Operating from a different city or FBO? Contact us. Our network extends beyond these eight cities on request.',
  },
  ar: {
    label: 'التغطية',
    heading: 'كل مدينة.\nكل مجمع طيران.\nمعيار واحد.',
    sub: 'تمتلك ليمور علاقات قائمة مع مشغلي مجمعات الطيران الرئيسيين في كل مدينة نخدمها. نحن لا نرتب الوصول في اليوم ذاته. نحن نمتلكه بالفعل.',
    cities: [
      { city: 'دبي', country: 'الإمارات', fbos: ['جيتكس دبي', 'إكزيكيوجيت الشرق الأوسط', 'دي سي أفيشن الفطيم'], airport: 'DXB / DWC' },
      { city: 'أبوظبي', country: 'الإمارات', fbos: ['جيتكس أبوظبي', 'رويال جيت', 'مطارات أبوظبي'], airport: 'AUH' },
      { city: 'لندن', country: 'المملكة المتحدة', fbos: ['سيجنتشر فارنبورو', 'هارودز ستانستيد', 'إنفلايت ستانستيد'], airport: 'LTN / FAB / STN' },
      { city: 'باريس', country: 'فرنسا', fbos: ['سيجنتشر لو بورجيه', 'ADP لو بورجيه', 'أورلي للطيران التجاري'], airport: 'LBG / ORY' },
      { city: 'جنيف', country: 'سويسرا', fbos: ['جيت أفيشن جنيف', 'سيجنتشر GVA', 'TAG أفيشن جنيف'], airport: 'GVA' },
      { city: 'زيورخ', country: 'سويسرا', fbos: ['جيت أفيشن زيورخ', 'سيجنتشر ZRH', 'دي سي أفيشن زيورخ'], airport: 'ZRH' },
      { city: 'فرانكفورت', country: 'ألمانيا', fbos: ['فرابورت للطيران التجاري', 'سيجنتشر FRA', 'دي سي أفيشن فرانكفورت'], airport: 'FRA / HHN' },
      { city: 'الرياض', country: 'المملكة العربية السعودية', fbos: ['السعودية للطيران الخاص', 'دي إيه إس الرياض', 'سيجنتشر RUH'], airport: 'RUH' },
    ],
    fboLabel: 'شركاء مجمعات الطيران',
    airportLabel: 'رموز المطارات',
    note: 'تعمل من مدينة أو مجمع طيران مختلف؟ تواصل معنا. شبكتنا تمتد إلى ما هو أبعد من هذه المدن الثماني عند الطلب.',
  },
  fr: {
    label: 'Couverture',
    heading: 'Chaque Ville.\nChaque FBO.\nUn Standard.',
    sub: 'Limore entretient des relations permanentes avec les principaux opérateurs FBO dans chaque ville que nous desservons. Nous n\'arrangeons pas l\'accès le jour même. Nous l\'avons déjà.',
    cities: [
      { city: 'Dubaï', country: 'EAU', fbos: ['Jetex Dubaï', 'ExecuJet MENA', 'DC Aviation Al Futtaim'], airport: 'DXB / DWC' },
      { city: 'Abu Dhabi', country: 'EAU', fbos: ['Jetex Abu Dhabi', 'Royal Jet FBO', 'Abu Dhabi Airports FBO'], airport: 'AUH' },
      { city: 'Londres', country: 'Royaume-Uni', fbos: ['Signature Farnborough', 'Harrods Aviation Stansted', 'Inflite Stansted'], airport: 'LTN / FAB / STN' },
      { city: 'Paris', country: 'France', fbos: ['Signature Le Bourget', 'ADP Le Bourget', 'Orly Business Aviation'], airport: 'LBG / ORY' },
      { city: 'Genève', country: 'Suisse', fbos: ['Jet Aviation Genève', 'Signature GVA', 'TAG Aviation Genève'], airport: 'GVA' },
      { city: 'Zurich', country: 'Suisse', fbos: ['Jet Aviation Zurich', 'Signature ZRH', 'DC Aviation Zurich'], airport: 'ZRH' },
      { city: 'Francfort', country: 'Allemagne', fbos: ['Fraport Business Aviation', 'Signature FRA', 'DC Aviation Frankfurt'], airport: 'FRA / HHN' },
      { city: 'Riyad', country: 'Arabie Saoudite', fbos: ['SAUDIA Private Aviation', 'DAS FBO Riyadh', 'Signature RUH'], airport: 'RUH' },
    ],
    fboLabel: 'Partenaires FBO',
    airportLabel: 'Codes Aéroport',
    note: 'Vous opérez depuis une autre ville ou un autre FBO ? Contactez-nous. Notre réseau s\'étend au-delà de ces huit villes sur demande.',
  },
}

export default function PJFBOs({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const cardRefs   = useRef([])
  const noteRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 74%' },
        }
      )
      cardRefs.current.forEach((el) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 87%' },
          }
        )
      })
      gsap.fromTo(noteRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: noteRef.current, start: 'top 90%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px) clamp(40px, 5vw, 64px)',
          borderBottom: '1px solid #EBEBEB',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '24px', opacity: 0,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
            <div style={{ width: '36px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.24em',
              textTransform: 'uppercase', color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400, color: '#0A0A0A',
            lineHeight: 1.02, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        <p style={{
          fontSize: '13px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: '#999',
          lineHeight: 1.85, maxWidth: '360px',
        }}>
          {content.sub}
        </p>
      </div>

      {/* City grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1px',
        backgroundColor: '#EBEBEB',
        padding: '1px',
      }}>
        {content.cities.map((c, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="pjf-card"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(24px, 3vw, 36px)',
              opacity: 0,
              transition: 'background-color 0.2s ease',
            }}
          >
            {/* City name + airport */}
            <div style={{
              display: 'flex', alignItems: 'flex-start',
              justifyContent: 'space-between', marginBottom: '14px',
              gap: '8px',
            }}>
              <div>
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400, color: '#0A0A0A',
                  lineHeight: 1.1, margin: '0 0 3px',
                }}>
                  {c.city}
                </h3>
                <p style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, letterSpacing: '0.1em',
                  color: '#BBBBBB', textTransform: 'uppercase', margin: 0,
                }}>
                  {c.country}
                </p>
              </div>
              <span style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.14em',
                color: '#C41E1E',
                backgroundColor: 'rgba(196,30,30,0.05)',
                border: '1px solid rgba(196,30,30,0.15)',
                padding: '4px 10px',
                flexShrink: 0,
                whiteSpace: 'nowrap',
              }}>
                {c.airport}
              </span>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: '#F0F0F0', marginBottom: '14px' }} />

            {/* FBO list */}
            <p style={{
              fontSize: '9px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#CCCCCC',
              marginBottom: '10px',
            }}>
              {content.fboLabel}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {c.fbos.map((fbo, j) => (
                <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '3px', height: '3px',
                    borderRadius: '50%', backgroundColor: '#C41E1E', flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: '12px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 300, color: '#777', lineHeight: 1.5,
                  }}>
                    {fbo}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Note */}
      <div
        ref={noteRef}
        style={{
          padding: 'clamp(24px, 4vw, 40px) clamp(24px, 6vw, 96px)',
          borderTop: '1px solid #EBEBEB',
          display: 'flex', alignItems: 'center', gap: '12px',
          opacity: 0,
        }}
      >
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#C41E1E', flexShrink: 0 }} />
        <p style={{
          fontSize: '12px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: '#BBBBBB',
          letterSpacing: '0.04em', lineHeight: 1.6, margin: 0,
        }}>
          {content.note}
        </p>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .pjf-card:hover { background-color: #FAFAFA !important; }
      `}</style>
    </section>
  )
}