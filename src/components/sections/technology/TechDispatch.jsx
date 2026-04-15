'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const t = {
  en: {
    eyebrow:  '02 — Global Dispatch',
    heading:  'One Booking. Any City.',
    body:     'Our dispatch infrastructure routes confirmed bookings to vetted local operators across 40+ cities without any manual coordination required from the client.',
    how:      'How it works',
    steps: [
      { n: '01', title: 'Client Books',       body: 'A booking is confirmed through the Limore platform or via account manager in under 60 seconds.' },
      { n: '02', title: 'Dispatch Routes',    body: 'Our system identifies the highest-rated available operator in the destination city and assigns the booking.' },
      { n: '03', title: 'Operator Confirms',  body: 'The local operator acknowledges within 15 minutes or the booking is automatically escalated to the next available.' },
      { n: '04', title: 'Client Notified',    body: 'Chauffeur details, vehicle information and live tracking link are sent directly to the client.' },
    ],
  },
  ar: {
    eyebrow:  '02 — الإرسال العالمي',
    heading:  'حجز واحد. أي مدينة.',
    body:     'تقوم بنية الإرسال الخاصة بنا بتوجيه الحجوزات المؤكدة إلى مشغلين محليين معتمدين في أكثر من 40 مدينة.',
    how:      'كيف يعمل',
    steps: [
      { n: '01', title: 'العميل يحجز',          body: 'يتم تأكيد الحجز عبر منصة ليمور أو مدير الحساب في أقل من 60 ثانية.' },
      { n: '02', title: 'توجيه الإرسال',         body: 'يحدد نظامنا أعلى مشغل متاح تقييما في مدينة الوجهة ويسند الحجز.' },
      { n: '03', title: 'تأكيد المشغل',          body: 'يؤكد المشغل المحلي خلال 15 دقيقة وإلا ينتقل الحجز تلقائيا للتالي.' },
      { n: '04', title: 'إشعار العميل',          body: 'تفاصيل السائق والمركبة ورابط التتبع المباشر يُرسل مباشرة للعميل.' },
    ],
  },
  fr: {
    eyebrow:  '02 — Dispatch Mondial',
    heading:  'Une Reservation. N\'importe Quelle Ville.',
    body:     'Notre infrastructure de dispatch achemine les reservations aux operateurs locaux verifies dans 40+ villes sans coordination manuelle du client.',
    how:      'Comment ca fonctionne',
    steps: [
      { n: '01', title: 'Le Client Reserve',      body: 'Une reservation est confirmee via la plateforme Limore ou par un gestionnaire de compte en moins de 60 secondes.' },
      { n: '02', title: 'Le Dispatch Achemine',   body: 'Notre systeme identifie l\'operateur disponible le mieux note dans la ville de destination.' },
      { n: '03', title: 'L\'Operateur Confirme',  body: 'L\'operateur local accuse reception dans les 15 minutes sinon la reservation est escaladee automatiquement.' },
      { n: '04', title: 'Le Client est Notifie',  body: 'Les coordonnees du chauffeur, les details du vehicule et le lien de suivi sont envoyes au client.' },
    ],
  },
}

export default function TechDispatch({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.dispatch-step',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
      // Connecting line draw
      gsap.fromTo('.dispatch-connector',
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1.2, ease: 'power2.inOut', transformOrigin: 'top center',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [locale])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#080808',
        padding:         'clamp(72px,10vw,120px) clamp(24px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 'clamp(48px,6vw,80px)' }}>
        <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E', marginBottom: '16px' }}>
          {content.eyebrow}
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: '#F8F7F4', margin: 0, lineHeight: 1.1 }}>
            {content.heading}
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.78rem,1.1vw,0.88rem)', fontWeight: 300, color: 'rgba(248,247,244,0.38)', lineHeight: 1.8, maxWidth: '360px', margin: 0 }}>
            {content.body}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 'clamp(32px,4vw,56px)' }}>
        <div style={{ width: '2px', height: '14px', backgroundColor: '#C41E1E' }} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.3)' }}>
          {content.how}
        </span>
      </div>

      {/* Steps */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px,100%), 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }}>
        {content.steps.map((step, i) => (
          <div
            key={step.n}
            className="dispatch-step"
            style={{
              backgroundColor: '#080808',
              padding:         'clamp(28px,3vw,40px)',
              display:         'flex',
              flexDirection:   'column',
              gap:             '16px',
              opacity:         0,
              position:        'relative',
            }}
          >
            {/* Step number */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 300, color: 'rgba(196,30,30,0.2)', lineHeight: 1 }}>
                {step.n}
              </span>
              {i < content.steps.length - 1 && (
                <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />
              )}
            </div>

            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F8F7F4', margin: 0 }}>
              {step.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.76rem,1vw,0.84rem)', fontWeight: 300, color: 'rgba(248,247,244,0.4)', lineHeight: 1.85, margin: 0 }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}