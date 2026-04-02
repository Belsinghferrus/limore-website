'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Our Story',
    heading: 'Born From a Demand\nthe Market Could Not Meet',
    paras: [
      'Limore was founded after witnessing firsthand the gap between what luxury clients expected from ground transport and what the industry consistently delivered. Late drivers. Inconsistent vehicles. No single point of contact. Zero accountability.',
      'We built Limore to close that gap permanently. Starting in one city with three vehicles and a relentless commitment to one thing — no client is ever left waiting — we have grown into a global mobility operation trusted across the world\'s financial and cultural capitals.',
      'Today, Limore operates in eight cities, manages thousands of corporate journeys annually, and maintains a delivery record that no competitor has matched. We did not build this by being the biggest. We built it by being the most reliable.',
    ],
    milestones: [
      { year: '2018', event: 'Founded in Dubai with three vehicles' },
      { year: '2019', event: 'First corporate contract signed' },
      { year: '2021', event: 'Expanded to London and Riyadh' },
      { year: '2023', event: 'Limore 360 membership launched' },
      { year: '2024', event: 'Jetex partnership established' },
      { year: '2025', event: 'Eight cities, one global standard' },
    ],
  },
  ar: {
    label: 'قصتنا',
    heading: 'وُلدنا من طلب\nلم يستطع السوق تلبيته',
    paras: [
      'تأسست ليمور بعد أن شهدنا مباشرة الفجوة بين ما يتوقعه عملاء الرفاهية من النقل البري وما تقدمه الصناعة باستمرار. سائقون متأخرون. سيارات غير متسقة. لا نقطة اتصال واحدة. لا مساءلة.',
      'بنينا ليمور لسد تلك الفجوة نهائيا. بدأنا في مدينة واحدة بثلاث سيارات والتزام لا يتزعزع بشيء واحد — لا عميل ينتظر أبدا.',
      'اليوم، تعمل ليمور في ثماني مدن، وتدير آلاف الرحلات المؤسسية سنويا، وتحافظ على سجل تسليم لم يضاهه أي منافس.',
    ],
    milestones: [
      { year: '2018', event: 'التأسيس في دبي بثلاث سيارات' },
      { year: '2019', event: 'أول عقد مؤسسي موقّع' },
      { year: '2021', event: 'التوسع إلى لندن والرياض' },
      { year: '2023', event: 'إطلاق عضوية ليمور 360' },
      { year: '2024', event: 'تأسيس الشراكة مع Jetex' },
      { year: '2025', event: 'ثماني مدن، معيار عالمي واحد' },
    ],
  },
  fr: {
    label: 'Notre Histoire',
    heading: 'Né d\'une Demande que\nle Marché ne Pouvait Satisfaire',
    paras: [
      'Limore a été fondé après avoir constaté de première main l\'écart entre ce que les clients de luxe attendaient du transport terrestre et ce que l\'industrie livrait systématiquement.',
      'Nous avons construit Limore pour combler cet écart de façon permanente. En démarrant dans une ville avec trois véhicules et un engagement sans relâche pour une seule chose — aucun client n\'attend jamais.',
      'Aujourd\'hui, Limore opère dans huit villes, gère des milliers de trajets annuellement et maintient un bilan qu\'aucun concurrent n\'a égalé.',
    ],
    milestones: [
      { year: '2018', event: 'Fondé à Dubai avec trois véhicules' },
      { year: '2019', event: 'Premier contrat corporate signé' },
      { year: '2021', event: 'Expansion à Londres et Riyad' },
      { year: '2023', event: 'Lancement de Limore 360' },
      { year: '2024', event: 'Partenariat Jetex établi' },
      { year: '2025', event: 'Huit villes, un standard mondial' },
    ],
  },
}

export default function AboutStory({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef  = useRef(null)
  const imageRef    = useRef(null)
  const textRef     = useRef(null)
  const msRefs      = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 72%' }

      gsap.fromTo(imageRef.current,
        { clipPath: 'inset(0 0 100% 0)', opacity: 1 },
        { clipPath: 'inset(0 0 0% 0)', duration: 1.3, ease: 'power4.inOut', scrollTrigger: st }
      )
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3, scrollTrigger: st }
      )
      msRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, x: isRTL ? 20 : -20 },
          { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', delay: 0.5 + i * 0.08, scrollTrigger: st }
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

      <div className="ast-grid">

        {/* Left image */}
        <div
          ref={imageRef}
          style={{
            position: 'relative',
            minHeight: 'clamp(400px, 55vw, 720px)',
            overflow: 'hidden',
            clipPath: 'inset(0 0 100% 0)',
          }}
          className="ast-img-panel"
        >
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=85"
            alt="Limore story — built from the ground up"
            width={1200} height={1600} loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block', filter: 'grayscale(10%) contrast(1.05)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '24px', left: '24px',
            width: '28px', height: '28px',
            borderTop: '1.5px solid rgba(196,30,30,0.7)',
            borderLeft: '1.5px solid rgba(196,30,30,0.7)',
          }} />
          <div style={{
            position: 'absolute', bottom: '24px', right: '24px',
            width: '28px', height: '28px',
            borderBottom: '1.5px solid rgba(196,30,30,0.7)',
            borderRight: '1.5px solid rgba(196,30,30,0.7)',
          }} />
        </div>

        {/* Right text */}
        <div
          ref={textRef}
          style={{
            padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px)',
            opacity: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center',
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
            fontSize: 'clamp(2rem, 3.5vw, 3.8rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400, color: '#0A0A0A',
            lineHeight: 1.05, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em', marginBottom: '32px',
          }}>
            {content.heading}
          </h2>

          {content.paras.map((p, i) => (
            <p key={i} style={{
              fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: '#555', lineHeight: 1.85,
              marginBottom: i < content.paras.length - 1 ? '18px' : '40px',
            }}>
              {p}
            </p>
          ))}

          {/* Timeline */}
          <div style={{ borderTop: '1px solid #EBEBEB', paddingTop: '32px' }}>
            {content.milestones.map((m, i) => (
              <div
                key={i}
                ref={(el) => (msRefs.current[i] = el)}
                style={{
                  display: 'flex', alignItems: 'flex-start',
                  gap: '20px', marginBottom: '16px', opacity: 0,
                }}
              >
                <span style={{
                  fontSize: '11px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 600, letterSpacing: '0.1em',
                  color: '#C41E1E', flexShrink: 0, paddingTop: '2px',
                  minWidth: '40px',
                }}>
                  {m.year}
                </span>
                <div style={{ width: '1px', height: '20px', backgroundColor: '#E0E0E0', flexShrink: 0, marginTop: '2px' }} />
                <span style={{
                  fontSize: '13px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 300, color: '#666', lineHeight: 1.5,
                }}>
                  {m.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .ast-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .ast-grid { grid-template-columns: 1fr 1fr; min-height: 720px; }
        }
        .ast-img-panel { display: none; }
        @media (min-width: 768px) {
          .ast-img-panel { display: block; }
        }
      `}</style>
    </section>
  )
}