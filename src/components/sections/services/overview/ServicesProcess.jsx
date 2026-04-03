'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'How It Works',
    heading: 'The Limore\nOperating Standard',
    steps: [
      {
        number: '01',
        title: 'You Make One Request',
        body: 'Via phone, WhatsApp, or web form. We confirm within the hour. No automated responses. A real operations team member handles every booking.',
      },
      {
        number: '02',
        title: 'We Handle All Coordination',
        body: 'Flight tracking, FBO contact, route planning, hotel liaison. Everything that needs to happen before your vehicle moves is managed by us.',
      },
      {
        number: '03',
        title: 'Your Vehicle Is Ready Early',
        body: 'The chauffeur is in position before you arrive. Not on the way. Not five minutes behind. In position.',
      },
      {
        number: '04',
        title: 'Journey Without Friction',
        body: 'From start to destination. One point of contact throughout. Any change in your schedule is handled quietly in the background.',
      },
    ],
  },
  ar: {
    label: 'كيف يعمل',
    heading: 'معيار\nتشغيل ليمور',
    steps: [
      { number: '01', title: 'تقدم طلباً واحداً', body: 'عبر الهاتف أو واتساب أو نموذج الويب. نؤكد في غضون ساعة. لا ردود آلية. عضو فريق عمليات حقيقي يتولى كل حجز.' },
      { number: '02', title: 'نتولى جميع التنسيقات', body: 'تتبع الرحلات، الاتصال بمجمع الطيران، تخطيط المسار، التواصل مع الفندق. كل شيء يحتاج أن يحدث قبل تحرك مركبتك تديره نحن.' },
      { number: '03', title: 'مركبتك جاهزة مبكراً', body: 'السائق في موقعه قبل وصولك. ليس في الطريق. ليس متأخراً خمس دقائق. في موقعه.' },
      { number: '04', title: 'رحلة بلا احتكاك', body: 'من البداية إلى الوجهة. نقطة اتصال واحدة طوال الرحلة. أي تغيير في جدولك يُعالَج بهدوء في الخلفية.' },
    ],
  },
  fr: {
    label: 'Comment ça Marche',
    heading: 'Le Standard\nOpérationnel Limore',
    steps: [
      { number: '01', title: 'Vous Faites Une Demande', body: 'Par téléphone, WhatsApp ou formulaire web. Nous confirmons dans l\'heure. Pas de réponses automatisées. Un vrai membre de l\'équipe opérationnelle gère chaque réservation.' },
      { number: '02', title: 'Nous Gérons Toute la Coordination', body: 'Suivi de vol, contact FBO, planification d\'itinéraire, liaison hôtelière. Tout ce qui doit se passer avant que votre véhicule se déplace est géré par nous.' },
      { number: '03', title: 'Votre Véhicule Est Prêt Tôt', body: 'Le chauffeur est en position avant votre arrivée. Pas en route. Pas cinq minutes en retard. En position.' },
      { number: '04', title: 'Voyage Sans Friction', body: 'Du début à la destination. Un point de contact tout au long. Tout changement de votre programme est géré discrètement en arrière-plan.' },
    ],
  },
}

export default function ServicesProcess({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const stepRefs   = useRef([])
  const lineRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 74%' }

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        { scaleY: 1, duration: 1.6, ease: 'power3.out', delay: 0.3, scrollTrigger: st }
      )
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, x: isRTL ? -24 : 24 },
          {
            opacity: 1, x: 0, duration: 0.75, ease: 'power3.out',
            delay: 0.2 + i * 0.1,
            scrollTrigger: st,
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0',
      }}
        className="svcp-outer"
      >
        {/* Left — header */}
        <div
          ref={headerRef}
          style={{
            padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px)',
            borderBottom: '1px solid #141414',
            opacity: 0,
          }}
          className="svcp-header"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
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
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 1.04, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>

        {/* Right — steps */}
        <div style={{ position: 'relative' }} className="svcp-steps">
          {/* Vertical line */}
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              top: 0, bottom: 0,
              left: isRTL ? 'auto' : 'clamp(24px, 6vw, 96px)',
              right: isRTL ? 'clamp(24px, 6vw, 96px)' : 'auto',
              width: '1px',
              backgroundColor: '#141414',
              transform: 'scaleY(0)',
              transformOrigin: 'top',
            }}
          />

          {content.steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              style={{
                padding: 'clamp(28px, 4vw, 44px) clamp(24px, 6vw, 96px)',
                paddingLeft: isRTL ? 'clamp(24px, 6vw, 96px)' : 'calc(clamp(24px, 6vw, 96px) + 28px)',
                paddingRight: isRTL ? 'calc(clamp(24px, 6vw, 96px) + 28px)' : 'clamp(24px, 6vw, 96px)',
                borderBottom: i < content.steps.length - 1 ? '1px solid #141414' : 'none',
                position: 'relative',
                opacity: 0,
              }}
            >
              {/* Dot on line */}
              <div style={{
                position: 'absolute',
                top: 'calc(clamp(28px, 4vw, 44px) + 8px)',
                left: isRTL ? 'auto' : 'calc(clamp(24px, 6vw, 96px) - 3px)',
                right: isRTL ? 'calc(clamp(24px, 6vw, 96px) - 3px)' : 'auto',
                width: '7px', height: '7px',
                borderRadius: '50%',
                backgroundColor: i === 0 ? '#C41E1E' : '#222',
                border: '1px solid #C41E1E',
                zIndex: 1,
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <span style={{
                  fontSize: '11px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.14em',
                  color: '#2A2A2A', flexShrink: 0, paddingTop: '3px',
                }}>
                  {step.number}
                </span>
                <div>
                  <h3 style={{
                    fontSize: 'clamp(1rem, 1.7vw, 1.25rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 400, color: '#F8F7F4',
                    lineHeight: 1.2, marginBottom: '10px',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '13px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 300, color: 'rgba(248,247,244,0.33)',
                    lineHeight: 1.8, margin: 0,
                  }}>
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <style>{`
        @media (min-width: 1024px) {
          .svcp-outer { grid-template-columns: 1fr 1fr !important; }
          .svcp-header { border-bottom: none !important; border-right: ${!isRTL ? '1px solid #141414' : 'none'} !important; border-left: ${isRTL ? '1px solid #141414' : 'none'} !important; }
        }
      `}</style>
    </section>
  )
}