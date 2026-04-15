'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'The Numbers',
    heading: 'Scale Without\nCompromise',
    metrics: [
      {
        value: 300,
        display: '300',
        suffix: '+',
        label: 'Events Managed',
        desc: 'Across financial, luxury, and corporate sectors globally',
      },
      {
        value: 60,
        display: '60+',
        suffix: '',
        label: 'Cities Operational',
        desc: 'Dubai, Abu Dhabi, London, Paris, Geneva, Zurich, Frankfurt, Riyadh',
      },
      {
        value: 48,
        display: '48',
        suffix: 'h',
        label: 'Planning Lead Time',
        desc: 'Minimum required for full event fleet deployment',
      },
      {
        value: 100,
        display: '100',
        suffix: '%',
        label: 'On-Time Target',
        desc: 'Maintained across all managed event operations',
      },
    ],
    cities: [
      'Dubai', 'Abu Dhabi', 'London', 'Paris',
      'Geneva', 'Zurich', 'Frankfurt', 'Riyadh',
    ],
    citiesLabel: 'Active Operations Cities',
  },
  ar: {
    label: 'الأرقام',
    heading: 'حجم بلا\nتنازلات',
    metrics: [
      {
        value: 300, display: '300', suffix: '+',
        label: 'فعاليات مُدارة',
        desc: 'عبر القطاعات المالية والفاخرة والمؤسسية عالمياً',
      },
      {
        value: 60, display: '60', suffix: '',
        label: 'مدن تشغيلية',
        desc: 'دبي، أبوظبي، لندن، باريس، جنيف، زيورخ، فرانكفورت، الرياض',
      },
      {
        value: 48, display: '48', suffix: 'h',
        label: 'وقت التخطيط المطلوب',
        desc: 'الحد الأدنى لنشر أسطول الفعالية الكامل',
      },
      {
        value: 100, display: '100', suffix: '%',
        label: 'هدف الالتزام بالمواعيد',
        desc: 'يُحافظ عليه في جميع عمليات الفعاليات المُدارة',
      },
    ],
    cities: ['دبي', 'أبوظبي', 'لندن', 'باريس', 'جنيف', 'زيورخ', 'فرانكفورت', 'الرياض'],
    citiesLabel: 'مدن العمليات النشطة',
  },
  fr: {
    label: 'Les Chiffres',
    heading: 'Echelle Sans\nCompromis',
    metrics: [
      {
        value: 300, display: '300', suffix: '+',
        label: 'Événements Gérés',
        desc: 'Dans les secteurs financier, luxe et corporate à l\'échelle mondiale',
      },
      {
        value: 60, display: '60', suffix: '',
        label: 'Villes Opérationnelles',
        desc: 'Dubaï, Abu Dhabi, Londres, Paris, Genève, Zurich, Francfort, Riyad',
      },
      {
        value: 48, display: '48', suffix: 'h',
        label: 'Délai de Planification',
        desc: 'Minimum requis pour le déploiement complet de la flotte',
      },
      {
        value: 100, display: '100', suffix: '%',
        label: 'Objectif de Ponctualité',
        desc: 'Maintenu sur toutes les opérations événementielles gérées',
      },
    ],
    cities: ['Dubaï', 'Abu Dhabi', 'Londres', 'Paris', 'Genève', 'Zurich', 'Francfort', 'Riyad'],
    citiesLabel: 'Villes en Opération Active',
  },
}

export default function RWNumbers({ locale = 'en' }) {
  const content     = t[locale] || t.en
  const isRTL       = locale === 'ar'
  const sectionRef  = useRef(null)
  const headerRef   = useRef(null)
  const metricRefs  = useRef([])
  const counterRefs = useRef([])
  const citiesRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 74%' }

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: st }
      )

      metricRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
            delay: 0.15 + i * 0.1,
            scrollTrigger: st,
          }
        )
      })

      // Count-up for each number
      content.metrics.forEach((m, i) => {
        const el = counterRefs.current[i]
        if (!el) return
        const obj = { val: 0 }
        gsap.to(obj, {
          val: m.value,
          duration: 1.8,
          ease: 'power2.out',
          delay: 0.3 + i * 0.1,
          onUpdate: () => { el.textContent = Math.round(obj.val) },
          scrollTrigger: st,
        })
      })

      gsap.fromTo(
        citiesRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.7, scrollTrigger: st }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <div style={{ padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px)' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            paddingBottom: 'clamp(40px, 6vw, 64px)',
            borderBottom: '1px solid #141414',
            marginBottom: 'clamp(48px, 7vw, 80px)',
            opacity: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
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
            fontSize: 'clamp(2.2rem, 5vw, 5.5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 1.0, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>

        {/* Metrics grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1px',
          backgroundColor: '#141414',
          marginBottom: 'clamp(48px, 7vw, 80px)',
        }}>
          {content.metrics.map((m, i) => (
            <div
              key={i}
              ref={(el) => (metricRefs.current[i] = el)}
              style={{
                backgroundColor: '#0A0A0A',
                padding: 'clamp(32px, 4vw, 48px) clamp(20px, 3vw, 36px)',
                opacity: 0,
              }}
            >
              {/* Animated number + suffix */}
              <div style={{
                display: 'flex', alignItems: 'baseline',
                gap: '2px', marginBottom: '12px',
              }}>
                <span
                  ref={(el) => (counterRefs.current[i] = el)}
                  style={{
                    fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 300, color: '#F8F7F4', lineHeight: 1,
                  }}
                >
                  {m.display}
                </span>
                <span style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2.5rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 300, color: '#C41E1E', lineHeight: 1,
                }}>
                  {m.suffix}
                </span>
              </div>

              {/* Label */}
              <p style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: 'rgba(248,247,244,0.65)',
                marginBottom: '8px', lineHeight: 1.2,
              }}>
                {m.label}
              </p>

              {/* Description */}
              <p style={{
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 300, color: 'rgba(248,247,244,0.25)',
                lineHeight: 1.7, margin: 0,
              }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Cities strip */}
        <div ref={citiesRef} style={{ opacity: 0 }}>
          <p style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.18)',
            marginBottom: '16px',
          }}>
            {content.citiesLabel}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {content.cities.map((city, i) => (
              <span
                key={i}
                style={{
                  fontSize: '11px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, letterSpacing: '0.1em',
                  color: 'rgba(248,247,244,0.32)',
                  border: '1px solid #1E1E1E',
                  padding: '6px 16px',
                }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />
    </section>
  )
}