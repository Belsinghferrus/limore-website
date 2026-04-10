'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'How It Works',
    heading: 'From Booking to\nArrival - Seamless',
    steps: [
      {
        number: '01',
        title: 'Book Your Transfer',
        body: 'Submit your flight details through our booking form, WhatsApp, or your dedicated account manager. Confirmation arrives within minutes.',
        icon: 'booking',
      },
      {
        number: '02',
        title: 'Flight Monitoring Begins',
        body: 'Our operations team tracks your flight in real time from 60 minutes before departure. Delays, early arrivals, gate changes — we know before you land.',
        icon: 'monitor',
      },
      {
        number: '03',
        title: 'Chauffeur Dispatched',
        body: 'Your chauffeur is dispatched based on actual landing time. No waiting for you. No premature waiting for us.',
        icon: 'dispatch',
      },
      {
        number: '04',
        title: 'Meet and Greet',
        body: 'Your chauffeur meets you at the arrivals hall with a name board. Luggage assistance is standard. You are never searching for your driver.',
        icon: 'greet',
      },
      {
        number: '05',
        title: 'Journey to Destination',
        body: 'Onboard Wi-Fi, refreshments, and complete privacy. Your preferences are noted from the first journey and applied to every subsequent one.',
        icon: 'journey',
      },
    ],
  },
  ar: {
    label: 'كيف يعمل',
    heading: 'من الحجز إلى\nالوصول بسلاسة',
    steps: [
      { number: '01', title: 'احجز نقلك', body: 'أرسل تفاصيل رحلتك عبر نموذج الحجز أو واتساب أو مدير حسابك المخصص. التأكيد يصل في دقائق.', icon: 'booking' },
      { number: '02', title: 'تبدأ مراقبة الرحلة', body: 'يتتبع فريق عملياتنا رحلتك في الوقت الفعلي من 60 دقيقة قبل الإقلاع.', icon: 'monitor' },
      { number: '03', title: 'إرسال السائق', body: 'يُرسل سائقك بناءً على وقت الهبوط الفعلي. لا انتظار بالنسبة لك.', icon: 'dispatch' },
      { number: '04', title: 'الاستقبال والترحيب', body: 'يستقبلك سائقك في صالة الوصول بلوحة باسمك. المساعدة في الأمتعة معيارية.', icon: 'greet' },
      { number: '05', title: 'الرحلة إلى وجهتك', body: 'واي فاي على المتن ومشروبات وخصوصية تامة. تفضيلاتك مسجلة من الرحلة الأولى.', icon: 'journey' },
    ],
  },
  fr: {
    label: 'Comment ça Marche',
    heading: 'De la Réservation\nà l\'Arrivée — Sans Faille',
    steps: [
      { number: '01', title: 'Réservez votre Transfert', body: 'Soumettez vos détails de vol via notre formulaire, WhatsApp ou votre gestionnaire dédié. Confirmation en quelques minutes.', icon: 'booking' },
      { number: '02', title: 'Suivi du Vol', body: 'Notre équipe suit votre vol en temps réel dès 60 minutes avant le départ.', icon: 'monitor' },
      { number: '03', title: 'Chauffeur Dispatché', body: 'Votre chauffeur est dispatché selon l\'heure réelle d\'atterrissage.', icon: 'dispatch' },
      { number: '04', title: 'Accueil Personnalisé', body: 'Votre chauffeur vous accueille en salle d\'arrivées avec une pancarte nominative.', icon: 'greet' },
      { number: '05', title: 'Trajet vers Destination', body: 'Wi-Fi à bord, rafraîchissements et confidentialité totale. Vos préférences sont mémorisées dès le premier trajet.', icon: 'journey' },
    ],
  },
}

const StepIcons = {
  booking: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="1" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="3" y1="9" x2="21" y2="9" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="8" y1="2" x2="8" y2="6" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <line x1="7" y1="13" x2="12" y2="13" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <line x1="7" y1="16" x2="10" y2="16" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  monitor: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 16.5c0 2.5-1.5 4.5-4 4.5H6c-2.5 0-4-2-4-4.5V9c0-2.8 2-5 4-5h12c2 0 4 2.2 4 5v7.5z" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M6 12l3 3 3-4.5 3 2.5 2-2" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  dispatch: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h15M14 7l5 5-5 5" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
      <circle cx="6" cy="18" r="2" stroke="#C41E1E" strokeWidth="1"/>
      <circle cx="18" cy="18" r="2" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M3 15h2a2 2 0 012-2h8l3-5H3" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  greet: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7" r="3" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M5 21v-2a7 7 0 0114 0v2" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <path d="M16 11l2 2 4-4" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  journey: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M12 7v5l3 3" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1" fill="#C41E1E"/>
    </svg>
  ),
}

export default function ATProcess({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const stepRefs   = useRef([])
  const lineRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%' }

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 1.6, ease: 'power3.out', delay: 0.4, scrollTrigger: st }
      )
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, x: isRTL ? 30 : -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 + i * 0.12, scrollTrigger: st }
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

      <div style={{ padding: 'clamp(64px, 9vw, 120px) clamp(24px, 6vw, 96px)' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap',
            gap: '24px', marginBottom: 'clamp(48px, 7vw, 96px)',
            paddingBottom: 'clamp(32px, 5vw, 56px)',
            borderBottom: '1px solid #EBEBEB', opacity: 0,
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
          <div style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, fontStyle: 'italic',
            color: 'rgba(10,10,10,0.06)',
            userSelect: 'none', lineHeight: 1,
          }}>
            {String(content.steps.length).padStart(2, '0')}
          </div>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>

          {/* Vertical connecting line */}
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              top: '24px', bottom: '24px',
              left: isRTL ? 'auto' : '19px',
              right: isRTL ? '19px' : 'auto',
              width: '1px',
              backgroundColor: '#EBEBEB',
              zIndex: 0,
            }}
            className="atp-line-hide"
          />

          {content.steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              style={{
                display: 'flex', gap: 'clamp(20px, 4vw, 48px)',
                alignItems: 'flex-start',
                paddingBottom: i < content.steps.length - 1 ? 'clamp(32px, 5vw, 56px)' : '0',
                position: 'relative', zIndex: 1,
                opacity: 0,
              }}
            >
              {/* Number dot */}
              <div style={{
                width: '40px', height: '40px', flexShrink: 0,
                border: '1px solid #EBEBEB',
                backgroundColor: '#FFFFFF',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {StepIcons[step.icon]}
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingTop: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '10px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 500, letterSpacing: '0.18em', color: '#C41E1E',
                  }}>
                    {step.number}
                  </span>
                  <h3 style={{
                    fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 400, color: '#0A0A0A', lineHeight: 1.2,
                  }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{
                  fontSize: '14px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 300, color: '#666', lineHeight: 1.8,
                  maxWidth: '560px',
                }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        @media (max-width: 640px) {
          .atp-line-hide { display: none !important; }
        }
      `}</style>
    </section>
  )
}