'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow: 'Global Booking System',
    headline: 'Book Anywhere. Track Everything.',
    body: 'Your corporate account comes with a dedicated booking portal. Schedule rides across every city we operate in, track your entire fleet in real-time, and pull complete reporting by traveller, cost centre, or destination.',
    features: [
      { title: 'Multi-city booking',       text: 'Book for any city in our network from one interface, in any timezone.' },
      { title: 'Real-time tracking',       text: 'Live vehicle position, ETA updates, and chauffeur contact — shared directly with the traveller.' },
      { title: 'Traveller profiles',       text: 'Store preferences, clearance levels, and special instructions per employee.' },
      { title: 'Cost centre reporting',    text: 'Full trip data exportable by department, project code, or individual traveller.' },
      { title: 'API integration',          text: 'Connect your internal travel management system via our REST API.' },
      { title: 'Approvals workflow',       text: 'Configure spending thresholds and multi-level approval chains per department.' },
    ],
    badge: 'SOC 2 Type II Compliant',
  },
  ar: {
    eyebrow: 'نظام الحجز العالمي',
    headline: 'احجز في أي مكان. تتبع كل شيء.',
    body: 'حسابك المؤسسي مزوّد ببوابة حجز مخصصة. جدولة الرحلات عبر كل مدينة، وتتبع أسطولك بالكامل في الوقت الفعلي.',
    features: [
      { title: 'الحجز متعدد المدن', text: 'احجز في أي مدينة في شبكتنا من واجهة واحدة.' },
      { title: 'التتبع في الوقت الفعلي', text: 'موقع المركبة الحي وتحديثات وقت الوصول.' },
      { title: 'ملفات تعريف المسافرين', text: 'تخزين التفضيلات والتعليمات الخاصة لكل موظف.' },
      { title: 'تقارير مراكز التكلفة', text: 'بيانات رحلات كاملة قابلة للتصدير.' },
      { title: 'تكامل API', text: 'ربط نظام إدارة السفر الداخلي عبر REST API.' },
      { title: 'سير عمل الموافقات', text: 'تكوين حدود الإنفاق وسلاسل الموافقة متعددة المستويات.' },
    ],
    badge: 'متوافق مع SOC 2 النوع الثاني',
  },
  fr: {
    eyebrow: 'Système de Réservation Mondial',
    headline: 'Réservez Partout. Suivez Tout.',
    body: 'Votre compte corporate dispose d\'un portail de réservation dédié. Planifiez des trajets dans chaque ville, suivez votre flotte en temps réel et extrayez des rapports complets.',
    features: [
      { title: 'Réservation multi-villes', text: 'Réservez dans n\'importe quelle ville de notre réseau depuis une interface.' },
      { title: 'Suivi en temps réel', text: 'Position du véhicule en direct, mises à jour ETA et contact chauffeur.' },
      { title: 'Profils voyageurs', text: 'Enregistrez les préférences et instructions spéciales par employé.' },
      { title: 'Reporting par centre de coût', text: 'Données de trajet complètes exportables par département ou code projet.' },
      { title: 'Intégration API', text: 'Connectez votre système de gestion des voyages via notre API REST.' },
      { title: 'Workflow d\'approbation', text: 'Configurez des seuils de dépenses et des chaînes d\'approbation multi-niveaux.' },
    ],
    badge: 'Conforme SOC 2 Type II',
  },
}

export default function CorporateBookingSystem({ locale = 'en' }) {
  const c      = t[locale] || t.en
  const isRTL  = locale === 'ar'
  const secRef = useRef(null)
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: isRTL ? 40 : -40 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(rightRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: rightRef.current, start: 'top 78%' } }
      )
    }, secRef)
    return () => ctx.revert()
  }, [isRTL])

  return (
    <section
      ref={secRef}
      style={{
        backgroundColor: '#0A0A0A',
        padding: 'clamp(64px, 10vw, 120px) clamp(20px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
        gap: 'clamp(40px, 7vw, 96px)',
        alignItems: 'start',
      }}>
        {/* Left — text */}
        <div ref={leftRef} style={{ opacity: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C41E1E' }} />
            <span style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E' }}>
              {c.eyebrow}
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 4rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            margin: '0 0 clamp(16px, 3vw, 24px)',
          }}>
            {c.headline}
          </h2>

          <p style={{
            fontSize: 'clamp(0.82rem, 1.2vw, 0.92rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            color: 'rgba(248,247,244,0.38)', lineHeight: 1.9,
            margin: '0 0 clamp(24px, 4vw, 40px)',
          }}>
            {c.body}
          </p>

          {/* Compliance badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '10px 18px',
            border: '1px solid rgba(196,30,30,0.3)',
            backgroundColor: 'rgba(196,30,30,0.05)',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L2 3.5v4C2 10.5 4.5 13 7 13s5-2.5 5-5.5v-4L7 1z" stroke="#C41E1E" strokeWidth="1.1" fill="none"/>
              <path d="M4.5 7l2 2 3-3" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C41E1E' }}>
              {c.badge}
            </span>
          </div>
        </div>

        {/* Right — feature list */}
        <div ref={rightRef}>
          {c.features.map((f, i) => (
            <div
              key={i}
              className="corp-feat-row"
              style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                padding: 'clamp(16px, 2.5vw, 22px) 0',
                borderBottom: i < c.features.length - 1 ? '1px solid rgba(248,247,244,0.06)' : 'none',
                opacity: 0,
                transition: 'background-color 0.25s ease',
                cursor: 'default',
              }}
            >
              {/* Number */}
              <span style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 400, color: 'rgba(196,30,30,0.5)',
                letterSpacing: '0.1em', flexShrink: 0,
                paddingTop: '2px', minWidth: '22px',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div style={{ minWidth: 0 }}>
                <h4 style={{
                  fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 500, color: '#F8F7F4',
                  margin: '0 0 6px', lineHeight: 1.2,
                }}>
                  {f.title}
                </h4>
                <p style={{
                  fontSize: 'clamp(0.78rem, 1.1vw, 0.85rem)',
                  fontFamily: 'Inter, sans-serif', fontWeight: 300,
                  color: 'rgba(248,247,244,0.35)', lineHeight: 1.8, margin: 0,
                }}>
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}