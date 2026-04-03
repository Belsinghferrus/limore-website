'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'How It Works',
    heading: 'From Tail Number\nto Front Door',
    sub: 'Every private jet transfer at Limore follows the same verified protocol. Nothing improvised. Nothing assumed.',
    steps: [
      {
        number: '01',
        title: 'You Share the Flight Details',
        body: 'Tail number, FBO name, estimated arrival time, and any specific requirements. That is all we need to begin coordination. No lengthy booking forms.',
        icon: 'doc',
      },
      {
        number: '02',
        title: 'We Contact the FBO Directly',
        body: 'Our operations team contacts the fixed base operator to confirm ramp access, parking bay, and passenger handling protocol. We do not rely on publicly available information.',
        icon: 'phone',
      },
      {
        number: '03',
        title: 'Vehicle Staged Airside',
        body: 'Your vehicle is positioned on the apron or in the FBO forecourt before wheels down. The chauffeur is in position, briefed on your name, party size, and luggage requirements.',
        icon: 'car',
      },
      {
        number: '04',
        title: 'Real-Time Flight Monitoring',
        body: 'We track your flight live. Any change in arrival time, diversion, or early landing is handled automatically. The vehicle repositions. You never have to call us with updates.',
        icon: 'radar',
      },
      {
        number: '05',
        title: 'Aircraft to Vehicle in Seconds',
        body: 'From the bottom of the aircraft steps to your seat in the vehicle. No FBO lounge unless you prefer it. No baggage hall. No exposure in a public terminal.',
        icon: 'arrow',
      },
      {
        number: '06',
        title: 'Direct to Your Destination',
        body: 'Pre-planned route, optimised for time of day and traffic conditions. Any route changes are handled in real time by your dedicated chauffeur.',
        icon: 'pin',
      },
    ],
  },
  ar: {
    label: 'كيف يعمل',
    heading: 'من رقم الذيل\nإلى الباب الأمامي',
    sub: 'كل نقل طائرة خاصة في ليمور يتبع نفس البروتوكول المُتحقق منه. لا شيء ارتجالي. لا شيء مفترض.',
    steps: [
      { number: '01', title: 'تشارك تفاصيل الرحلة', body: 'رقم الذيل واسم مجمع الطيران ووقت الوصول المقدر وأي متطلبات خاصة. هذا كل ما نحتاجه لبدء التنسيق.', icon: 'doc' },
      { number: '02', title: 'نتصل بمجمع الطيران مباشرة', body: 'يتصل فريق عملياتنا بمشغل القاعدة الثابتة لتأكيد الوصول إلى المنحدر وخليج الإيقاف وبروتوكول معالجة الركاب.', icon: 'phone' },
      { number: '03', title: 'المركبة مُوضعة على الجانب الجوي', body: 'مركبتك مُوضعة في الساحة أو في مقدمة مجمع الطيران قبل الهبوط. السائق في موقعه ومُحاط بمعلومات اسمك وحجم مجموعتك.', icon: 'car' },
      { number: '04', title: 'مراقبة الرحلة في الوقت الفعلي', body: 'نتتبع رحلتك مباشرة. أي تغيير في وقت الوصول أو تحويل أو هبوط مبكر يُعالَج تلقائياً.', icon: 'radar' },
      { number: '05', title: 'من الطائرة إلى المركبة في ثوانٍ', body: 'من أسفل درج الطائرة إلى مقعدك في المركبة. لا صالة مجمع طيران ما لم تفضل ذلك. لا قاعة أمتعة. لا تعرض في صالة عامة.', icon: 'arrow' },
      { number: '06', title: 'مباشرة إلى وجهتك', body: 'مسار مُخطط مسبقاً ومُحسَّن لوقت اليوم وحالة المرور. أي تغييرات في المسار تُعالَج في الوقت الفعلي.', icon: 'pin' },
    ],
  },
  fr: {
    label: 'Comment ça Marche',
    heading: 'De l\'Immatriculation\nà Votre Porte',
    sub: 'Chaque transfert jet privé chez Limore suit le même protocole vérifié. Rien d\'improvisé. Rien de supposé.',
    steps: [
      { number: '01', title: 'Vous Partagez les Détails de Vol', body: 'Immatriculation, nom du FBO, heure d\'arrivée estimée et exigences spécifiques. C\'est tout ce dont nous avons besoin pour commencer la coordination.', icon: 'doc' },
      { number: '02', title: 'Nous Contactons Directement le FBO', body: 'Notre équipe opérationnelle contacte le FBO pour confirmer l\'accès piste, le bay de stationnement et le protocole de prise en charge des passagers.', icon: 'phone' },
      { number: '03', title: 'Véhicule Positionné Côté Piste', body: 'Votre véhicule est positionné sur l\'aire ou dans le forecourt du FBO avant l\'atterrissage. Le chauffeur est en position, briefé sur votre nom et vos bagages.', icon: 'car' },
      { number: '04', title: 'Suivi de Vol en Temps Réel', body: 'Nous suivons votre vol en direct. Tout changement d\'heure d\'arrivée, déroutement ou atterrissage anticipé est géré automatiquement.', icon: 'radar' },
      { number: '05', title: 'De l\'Aéronef au Véhicule en Secondes', body: 'Du bas des marches de l\'aéronef à votre siège dans le véhicule. Pas de salon FBO sauf si vous le préférez. Pas de retrait bagages. Pas d\'exposition.', icon: 'arrow' },
      { number: '06', title: 'Direction Votre Destination', body: 'Itinéraire pré-planifié, optimisé en fonction de l\'heure et des conditions de circulation. Tout changement d\'itinéraire est géré en temps réel.', icon: 'pin' },
    ],
  },
}

const StepIcons = {
  doc: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="1.5" width="12" height="15" rx="1" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="6" y1="6" x2="12" y2="6" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <line x1="6" y1="9" x2="12" y2="9" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <line x1="6" y1="12" x2="9.5" y2="12" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 2.5h3.5l1.5 3.5-2 1.5c.9 2 2.5 3.6 4.5 4.5l1.5-2 3.5 1.5V15a1 1 0 01-1 1C6.5 16 2 10.5 2 3.5a1 1 0 011-1z" stroke="#C41E1E" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  ),
  car: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 10l2-5h10l2 5" stroke="#C41E1E" strokeWidth="1" strokeLinejoin="round"/>
      <rect x="1.5" y="10" width="15" height="5" rx="1" stroke="#C41E1E" strokeWidth="1"/>
      <circle cx="5" cy="15" r="1.5" stroke="#C41E1E" strokeWidth="1"/>
      <circle cx="13" cy="15" r="1.5" stroke="#C41E1E" strokeWidth="1"/>
    </svg>
  ),
  radar: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="#C41E1E" strokeWidth="1"/>
      <circle cx="9" cy="9" r="4" stroke="#C41E1E" strokeWidth="1" strokeDasharray="2 2"/>
      <circle cx="9" cy="9" r="1.5" fill="#C41E1E"/>
      <line x1="9" y1="9" x2="14" y2="5" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  arrow: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9h12M11 5l4 4-4 4" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pin: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1.5a5 5 0 015 5c0 3.5-5 10-5 10S4 10 4 6.5a5 5 0 015-5z" stroke="#C41E1E" strokeWidth="1"/>
      <circle cx="9" cy="6.5" r="1.5" stroke="#C41E1E" strokeWidth="1"/>
    </svg>
  ),
}

export default function PJProcess({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const stepRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 74%' },
        }
      )
      stepRefs.current.forEach((el) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
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

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px) clamp(40px, 6vw, 60px)',
          borderBottom: '1px solid #141414',
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
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 1.02, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        <p style={{
          fontSize: '13px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: 'rgba(248,247,244,0.35)',
          lineHeight: 1.85, maxWidth: '340px',
        }}>
          {content.sub}
        </p>
      </div>

      {/* Steps — 3-column grid on desktop */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1px',
        backgroundColor: '#141414',
      }}>
        {content.steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (stepRefs.current[i] = el)}
            className="pjp-card"
            style={{
              backgroundColor: '#0A0A0A',
              padding: 'clamp(28px, 4vw, 44px)',
              opacity: 0,
              transition: 'background-color 0.22s ease',
            }}
          >
            {/* Top row: icon + number */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}>
              <div style={{
                width: '36px', height: '36px',
                border: '1px solid #1E1E1E',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {StepIcons[step.icon]}
              </div>
              <span style={{
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.16em',
                color: '#1E1E1E',
              }}>
                {step.number}
              </span>
            </div>

            <h3 style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, color: '#F8F7F4',
              lineHeight: 1.2, marginBottom: '12px',
            }}>
              {step.title}
            </h3>
            <p style={{
              fontSize: '13px', fontFamily: 'Inter, sans-serif',
              fontWeight: 300, color: 'rgba(248,247,244,0.35)',
              lineHeight: 1.8, margin: 0,
            }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <style>{`
        .pjp-card:hover { background-color: #0F0F0F !important; }
      `}</style>
    </section>
  )
}