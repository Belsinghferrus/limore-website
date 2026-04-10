'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'How It Works',
    heading: 'From First Enquiry\nto Permanent Partnership',
    steps: [
      {
        number: '01',
        title: 'Initial Consultation',
        body: 'You contact us with your organisation\'s requirements. We arrange a 30-minute briefing to understand your travel volume, cities, executive profiles, and billing preferences.',
        tag: 'Day 1',
      },
      {
        number: '02',
        title: 'Account Configuration',
        body: 'We build your account structure. Preferred vehicles assigned. Billing codes set up. Confidentiality parameters agreed in writing. Your dedicated account manager introduced.',
        tag: 'Days 2 to 3',
      },
      {
        number: '03',
        title: 'First Journey',
        body: 'Your first journey is treated as an audit. Every detail is reviewed after completion. Any preference adjustments are made before the second booking is placed.',
        tag: 'Week 1',
      },
      {
        number: '04',
        title: 'Ongoing Operations',
        body: 'Journeys are booked through your account manager, our app, or direct WhatsApp. Monthly invoices are issued with full journey data attached.',
        tag: 'Ongoing',
      },
      {
        number: '05',
        title: 'Quarterly Review',
        body: 'Every quarter we review your usage data with you. City expansion, vehicle upgrades, and process refinements are discussed proactively.',
        tag: 'Quarterly',
      },
    ],
  },
  ar: {
    label: 'كيف يعمل',
    heading: 'من الاستفسار الأول\nإلى الشراكة الدائمة',
    steps: [
      { number: '01', title: 'الاستشارة الأولية', body: 'تتصل بنا بمتطلبات مؤسستك. نرتب إحاطة مدتها 30 دقيقة لفهم حجم سفرك ومدنك وملفات المديرين التنفيذيين.', tag: 'اليوم الأول' },
      { number: '02', title: 'إعداد الحساب', body: 'نبني هيكل حسابك. تُخصص المركبات المفضلة. تُحدد رموز الفوترة. تُتفق معايير السرية كتابياً.', tag: 'الأيام 2 إلى 3' },
      { number: '03', title: 'الرحلة الأولى', body: 'تُعامل رحلتك الأولى كتدقيق. تُراجع كل التفاصيل بعد الاكتمال. أي تعديلات تُجرى قبل الحجز الثاني.', tag: 'الأسبوع الأول' },
      { number: '04', title: 'العمليات الجارية', body: 'تُحجز الرحلات عبر مدير حسابك أو تطبيقنا أو واتساب المباشر. تُصدر فواتير شهرية مع بيانات الرحلة الكاملة.', tag: 'مستمر' },
      { number: '05', title: 'المراجعة الفصلية', body: 'كل ربع سنة نراجع بيانات استخدامك معك. يُناقش توسع المدن وترقيات المركبات وتحسينات العمليات بشكل استباقي.', tag: 'كل ربع سنة' },
    ],
  },
  fr: {
    label: 'Comment ça Marche',
    heading: 'De la Première Demande\nau Partenariat Permanent',
    steps: [
      { number: '01', title: 'Consultation Initiale', body: 'Vous nous contactez avec les besoins de votre organisation. Nous organisons un briefing de 30 minutes pour comprendre vos volumes de voyage.', tag: 'Jour 1' },
      { number: '02', title: 'Configuration du Compte', body: 'Nous construisons votre structure de compte. Véhicules préférés assignés. Codes de facturation configurés. Gestionnaire dédié présenté.', tag: 'Jours 2 à 3' },
      { number: '03', title: 'Premier Trajet', body: 'Votre premier trajet est traité comme un audit. Chaque détail est examiné après. Les ajustements sont effectués avant la deuxième réservation.', tag: 'Semaine 1' },
      { number: '04', title: 'Opérations Courantes', body: 'Les trajets sont réservés via votre gestionnaire, notre application ou WhatsApp. Factures mensuelles avec données complètes.', tag: 'Continu' },
      { number: '05', title: 'Revue Trimestrielle', body: 'Chaque trimestre nous examinons vos données d\'utilisation. Expansion de villes et améliorations discutées de façon proactive.', tag: 'Trimestriel' },
    ],
  },
}

export default function CCProcess({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const stepRefs   = useRef([])
  const imageRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 73%' }

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.3, ease: 'power3.out', delay: 0.2, scrollTrigger: st }
      )
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, x: isRTL ? 24 : -24 },
          { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', delay: 0.25 + i * 0.1, scrollTrigger: st }
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

      <div className="ccp2-grid">

        {/* Left: steps */}
        <div style={{ padding: 'clamp(56px, 8vw, 96px) clamp(24px, 5vw, 72px)' }}>

          {/* Header */}
          <div ref={headerRef} style={{ marginBottom: 'clamp(40px, 6vw, 64px)', opacity: 0 }}>
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
              fontSize: 'clamp(2rem, 3.5vw, 3.8rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, color: '#0A0A0A',
              lineHeight: 1.04, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
            }}>
              {content.heading}
            </h2>
          </div>

          {/* Steps */}
          {content.steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: '20px',
                paddingBottom: i < content.steps.length - 1 ? 'clamp(24px, 4vw, 40px)' : '0',
                marginBottom: i < content.steps.length - 1 ? 'clamp(24px, 4vw, 40px)' : '0',
                borderBottom: i < content.steps.length - 1 ? '1px solid #F0F0F0' : 'none',
                opacity: 0,
              }}
            >
              {/* Number column */}
              <div style={{ paddingTop: '2px' }}>
                <span style={{
                  fontSize: '11px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.14em', color: '#C41E1E',
                  display: 'block',
                }}>
                  {step.number}
                </span>
              </div>

              {/* Content column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h3 style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 400, color: '#0A0A0A', lineHeight: 1.2,
                  }}>
                    {step.title}
                  </h3>
                  <span style={{
                    fontSize: '9px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 500, letterSpacing: '0.18em',
                    textTransform: 'uppercase', color: 'rgba(10,10,10,0.28)',
                    backgroundColor: '#F5F5F5',
                    padding: '3px 10px',
                  }}>
                    {step.tag}
                  </span>
                </div>
                <p style={{
                  fontSize: '13px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 300, color: '#666', lineHeight: 1.8,
                }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: image */}
        <div
          ref={imageRef}
          style={{ position: 'relative', overflow: 'hidden', opacity: 0 }}
          className="ccp2-img-panel"
        >
          <img
            src="/images/limore17.jpg"
            alt="Corporate operations process — Limore"
            width={1000} height={1400} loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 15%',
              display: 'block',
              transition: 'transform 0.8s ease',
            }}
            className="ccp2-img"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent 60%)',
            pointerEvents: 'none',
          }} />
          {/* Decorative number */}
          <div style={{
            position: 'absolute', top: '24px', right: '24px',
            fontSize: 'clamp(4rem, 8vw, 8rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: 'rgba(248,247,244,0.07)',
            lineHeight: 1, userSelect: 'none',
          }}>
            05
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .ccp2-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .ccp2-grid { grid-template-columns: 1fr 1fr; min-height: 720px; }
        }
        .ccp2-img-panel { display: none; }
        @media (min-width: 768px) {
          .ccp2-img-panel { display: block; }
        }
        .ccp2-img-panel:hover .ccp2-img { transform: scale(1.03); }
      `}</style>
    </section>
  )
}