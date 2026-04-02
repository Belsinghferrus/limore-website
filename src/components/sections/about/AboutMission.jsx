'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Our Mission',
    heading: 'Redefining What\nMobility Means\nfor the World\'s Best',
    statement: 'To deliver flawless, standardised luxury mobility across every city we operate in — removing friction, uncertainty, and inconsistency from the journeys of those who cannot afford any of it.',
    pillars: [
      { icon: 'precision', title: 'Precision', body: 'Every pickup is timed, tracked and confirmed before the client even asks.' },
      { icon: 'consistency', title: 'Consistency', body: 'London or Dubai — the vehicle, the driver, the experience — identical.' },
      { icon: 'privacy', title: 'Discretion', body: 'What happens in a Limore vehicle stays there. Always.' },
    ],
  },
  ar: {
    label: 'مهمتنا',
    heading: 'إعادة تعريف معنى\nالتنقل لأفضل\nعملاء العالم',
    statement: 'تقديم تنقل فاخر موحد وخالٍ من العيوب في كل مدينة نعمل بها — مع إزالة الاحتكاك وعدم اليقين وعدم الاتساق من رحلات من لا يتحمل أيًا من ذلك.',
    pillars: [
      { icon: 'precision', title: 'الدقة', body: 'كل التقاط يتم توقيته وتتبعه وتأكيده قبل أن يسأل العميل.' },
      { icon: 'consistency', title: 'الاتساق', body: 'لندن أو دبي — السيارة، السائق، التجربة — متطابقة.' },
      { icon: 'privacy', title: 'السرية', body: 'ما يحدث في سيارة ليمور يبقى فيها. دائما.' },
    ],
  },
  fr: {
    label: 'Notre Mission',
    heading: 'Redéfinir ce que\nla Mobilité Signifie\npour les Meilleurs',
    statement: 'Offrir une mobilité de luxe standardisée et irréprochable dans chaque ville où nous opérons — en éliminant toute friction, incertitude et incohérence des trajets de ceux qui ne peuvent se permettre rien de tout cela.',
    pillars: [
      { icon: 'precision', title: 'Précision', body: 'Chaque prise en charge est chronométrée, suivie et confirmée avant même que le client ne demande.' },
      { icon: 'consistency', title: 'Cohérence', body: 'Londres ou Dubai — le véhicule, le chauffeur, l\'expérience — identiques.' },
      { icon: 'privacy', title: 'Discrétion', body: 'Ce qui se passe dans un véhicule Limore y reste. Toujours.' },
    ],
  },
}

const PillarIcons = {
  precision: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="12" stroke="#C41E1E" strokeWidth="1"/>
      <circle cx="14" cy="14" r="3" fill="#C41E1E"/>
      <line x1="14" y1="2" x2="14" y2="7" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="14" y1="21" x2="14" y2="26" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="2" y1="14" x2="7" y2="14" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="21" y1="14" x2="26" y2="14" stroke="#C41E1E" strokeWidth="1"/>
    </svg>
  ),
  consistency: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="10" height="14" rx="1" stroke="#C41E1E" strokeWidth="1"/>
      <rect x="16" y="6" width="10" height="14" rx="1" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="7" y1="22" x2="21" y2="22" stroke="#C41E1E" strokeWidth="1" strokeDasharray="2 2"/>
    </svg>
  ),
  privacy: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3L4 7v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L14 3z" stroke="#C41E1E" strokeWidth="1"/>
      <polyline points="9,14 12,17 19,11" stroke="#C41E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

export default function AboutMission({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const stmtRef    = useRef(null)
  const pillarsRef = useRef([])
  const ruleRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%' }
      gsap.fromTo(ruleRef.current,
        { scaleX: 0, transformOrigin: isRTL ? 'right' : 'left' },
        { scaleX: 1, duration: 1.4, ease: 'power4.out', scrollTrigger: st }
      )
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2, scrollTrigger: st }
      )
      gsap.fromTo(stmtRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.35, scrollTrigger: st }
      )
      pillarsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 + i * 0.12, scrollTrigger: st }
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
      <div ref={ruleRef} style={{ width: '100%', height: '1px', backgroundColor: '#161616' }} />

      <div style={{ padding: 'clamp(64px, 9vw, 120px) clamp(24px, 6vw, 96px)' }}>

        <div className="am-grid">

          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
              <span style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.25em',
                textTransform: 'uppercase', color: '#C41E1E',
              }}>
                {content.label}
              </span>
            </div>
            <h2
              ref={headingRef}
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 300, color: '#F8F7F4',
                lineHeight: 1.02, whiteSpace: 'pre-line',
                letterSpacing: '-0.01em', opacity: 0,
              }}
            >
              {content.heading}
            </h2>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <blockquote
              ref={stmtRef}
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, fontStyle: 'italic',
                color: 'rgba(248,247,244,0.7)', lineHeight: 1.75,
                borderLeft: isRTL ? 'none' : '2px solid #C41E1E',
                borderRight: isRTL ? '2px solid #C41E1E' : 'none',
                paddingLeft: isRTL ? '0' : '24px',
                paddingRight: isRTL ? '24px' : '0',
                margin: 0, opacity: 0,
              }}
            >
              {content.statement}
            </blockquote>
          </div>
        </div>

        {/* Pillars */}
        <div
          style={{
            marginTop: 'clamp(48px, 7vw, 96px)',
            paddingTop: 'clamp(32px, 5vw, 56px)',
            borderTop: '1px solid #1E1E1E',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
            backgroundColor: '#1E1E1E',
          }}
        >
          {content.pillars.map((p, i) => (
            <div
              key={i}
              ref={(el) => (pillarsRef.current[i] = el)}
              style={{
                backgroundColor: '#0A0A0A',
                padding: 'clamp(28px, 4vw, 44px)',
                opacity: 0,
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                {PillarIcons[p.icon]}
              </div>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#F8F7F4',
                marginBottom: '12px', lineHeight: 1.2,
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: '13px', fontFamily: 'Inter, sans-serif',
                fontWeight: 300, color: 'rgba(248,247,244,0.45)',
                lineHeight: 1.75,
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .am-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 5vw, 64px);
        }
        @media (min-width: 1024px) {
          .am-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}