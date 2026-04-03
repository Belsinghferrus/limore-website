'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'What We Provide',
    heading: 'Built Around\nYour Organisation',
    features: [
      {
        number: '01',
        title: 'Dedicated Account Manager',
        body: 'One person, one number, total ownership. Your account manager is responsible for every journey made under your account. No call centres. No ticket queues.',
      },
      {
        number: '02',
        title: 'Same-Day and Advance Booking',
        body: 'Urgent last-minute journeys are handled with the same standard as those booked three weeks ahead. Our operations desk is staffed continuously.',
      },
      {
        number: '03',
        title: 'Consolidated Monthly Invoicing',
        body: 'All journeys across all cities, all travellers, and all service types consolidated into a single monthly invoice. Full journey data included for your finance team.',
      },
      {
        number: '04',
        title: 'Multi-Passenger Coordination',
        body: 'Managing simultaneous journeys for multiple executives across different cities. One briefing to us. Complete coordination on our side.',
      },
      {
        number: '05',
        title: 'NDA and Confidentiality',
        body: 'We operate under strict non-disclosure. Passenger identities, travel patterns, and destination information are never shared with any third party.',
      },
      {
        number: '06',
        title: 'Travel Policy Compliance',
        body: 'We adapt to your internal travel policy. Preferred vehicles, approval flows, cost centre coding, and spend caps are configured before the first booking.',
      },
    ],
  },
  ar: {
    label: 'ما نقدمه',
    heading: 'مبني حول\nمؤسستك',
    features: [
      { number: '01', title: 'مدير حساب مخصص', body: 'شخص واحد، رقم واحد، مسؤولية كاملة. مدير حسابك مسؤول عن كل رحلة تحت حسابك.' },
      { number: '02', title: 'الحجز في نفس اليوم والمسبق', body: 'الرحلات العاجلة تُعالَج بنفس المعيار كتلك المحجوزة قبل ثلاثة أسابيع. مكتب عملياتنا يعمل على مدار الساعة.' },
      { number: '03', title: 'فوترة شهرية موحدة', body: 'جميع الرحلات عبر جميع المدن والمسافرين وأنواع الخدمات في فاتورة شهرية واحدة.' },
      { number: '04', title: 'تنسيق الركاب المتعددين', body: 'إدارة الرحلات المتزامنة لعدة مديرين تنفيذيين عبر مدن مختلفة. إحاطة واحدة منك. تنسيق كامل من جانبنا.' },
      { number: '05', title: 'اتفاقية عدم الإفصاح والسرية', body: 'نعمل بموجب عدم الإفصاح الصارم. هويات الركاب وأنماط السفر ومعلومات الوجهة لا تُشارك أبداً.' },
      { number: '06', title: 'الامتثال لسياسة السفر', body: 'نتكيف مع سياسة السفر الداخلية الخاصة بك. المركبات المفضلة وتدفقات الموافقة ورموز مراكز التكلفة تُهيأ قبل الحجز الأول.' },
    ],
  },
  fr: {
    label: 'Ce que Nous Offrons',
    heading: 'Construit Autour\nde Votre Organisation',
    features: [
      { number: '01', title: 'Gestionnaire de Compte Dédié', body: 'Une personne, un numéro, responsabilité totale. Votre gestionnaire est responsable de chaque trajet sous votre compte.' },
      { number: '02', title: 'Réservation le Jour Même et à l\'Avance', body: 'Les trajets urgents sont traités avec le même standard que ceux réservés trois semaines à l\'avance.' },
      { number: '03', title: 'Facturation Mensuelle Consolidée', body: 'Tous les trajets dans toutes les villes consolidés en une seule facture mensuelle avec données complètes.' },
      { number: '04', title: 'Coordination Multi-Passagers', body: 'Gestion de trajets simultanés pour plusieurs dirigeants dans différentes villes. Un briefing de votre part. Coordination complète de notre côté.' },
      { number: '05', title: 'NDA et Confidentialité', body: 'Nous opérons sous non-divulgation stricte. Les identités des passagers et les informations de destination ne sont jamais partagées.' },
      { number: '06', title: 'Conformité à la Politique de Voyage', body: 'Nous nous adaptons à votre politique de voyage interne. Véhicules préférés, flux d\'approbation et codes de centre de coûts configurés dès le départ.' },
    ],
  },
}

const icons = [
  // 01 person
  <svg key="01" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="5.5" r="3" stroke="#C41E1E" strokeWidth="1"/>
    <path d="M3 18v-1.5a7 7 0 0114 0V18" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
  </svg>,
  // 02 clock
  <svg key="02" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke="#C41E1E" strokeWidth="1"/>
    <path d="M10 5.5v4.5l2.5 2.5" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>,
  // 03 document
  <svg key="03" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="4" y="2" width="12" height="16" rx="1" stroke="#C41E1E" strokeWidth="1"/>
    <line x1="7" y1="7" x2="13" y2="7" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    <line x1="7" y1="10" x2="13" y2="10" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    <line x1="7" y1="13" x2="10" y2="13" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
  </svg>,
  // 04 users
  <svg key="04" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="7" cy="6" r="2.5" stroke="#C41E1E" strokeWidth="1"/>
    <circle cx="13" cy="6" r="2.5" stroke="#C41E1E" strokeWidth="1"/>
    <path d="M1 17v-1a6 6 0 0112 0v1" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    <path d="M13.5 10a6 6 0 015.5 6v1" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
  </svg>,
  // 05 shield
  <svg key="05" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2L2 5v6c0 4.4 3.5 8.5 8 9.5 4.5-1 8-5.1 8-9.5V5L10 2z" stroke="#C41E1E" strokeWidth="1"/>
    <polyline points="6.5,10 9,12.5 13.5,8" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // 06 settings
  <svg key="06" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="2.5" stroke="#C41E1E" strokeWidth="1"/>
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
  </svg>,
]

export default function CCFeatures({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 74%' }
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: i * 0.09, scrollTrigger: st }
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
      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px) clamp(40px, 6vw, 64px)',
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
            fontSize: 'clamp(2.2rem, 4.5vw, 4.8rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 1.02, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        <span style={{
          fontSize: 'clamp(3.5rem, 7vw, 6rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, fontStyle: 'italic',
          color: 'rgba(248,247,244,0.04)',
          userSelect: 'none', lineHeight: 1, flexShrink: 0,
        }}>
          06
        </span>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1px',
          backgroundColor: '#141414',
        }}
      >
        {content.features.map((f, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="ccf-card"
            style={{
              backgroundColor: '#0A0A0A',
              padding: 'clamp(28px, 4vw, 44px)',
              opacity: 0,
              transition: 'background-color 0.25s ease',
              cursor: 'default',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', marginBottom: '20px',
            }}>
              <div style={{
                width: '36px', height: '36px',
                border: '1px solid #1E1E1E',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {icons[i]}
              </div>
              <span style={{
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.16em', color: '#2A2A2A',
              }}>
                {f.number}
              </span>
            </div>
            <h3 style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, color: '#F8F7F4',
              marginBottom: '12px', lineHeight: 1.2,
            }}>
              {f.title}
            </h3>
            <p style={{
              fontSize: '13px', fontFamily: 'Inter, sans-serif',
              fontWeight: 300, color: 'rgba(248,247,244,0.38)',
              lineHeight: 1.8,
            }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <style>{`
        .ccf-card:hover { background-color: #0F0F0F !important; }
      `}</style>
    </section>
  )
}