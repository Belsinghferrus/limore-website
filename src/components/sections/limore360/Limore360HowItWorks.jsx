'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow:  'How It Works',
    headline: 'Active in Four Steps.',
    steps: [
      {
        num: '01', icon: 'enquire', title: 'Submit Your Enquiry',
        text: 'Complete the Limore 360 application below. Specify your preferred plan and typical travel patterns. Takes under three minutes.',
      },
      {
        num: '02', icon: 'proposal', title: 'Receive Your Proposal',
        text: 'Within two business hours, your Corporate Advisor will send a tailored proposal including your fixed hourly rate and membership terms.',
      },
      {
        num: '03', icon: 'setup', title: 'Account Setup',
        text: 'Once confirmed, your account is configured in under two hours. Traveller profiles are created, preferences are recorded, and your chauffeur is briefed.',
      },
      {
        num: '04', icon: 'travel', title: 'Travel. Immediately.',
        text: 'Your first booking can be placed within minutes of account activation. From that point, Limore 360 operates silently in the background of every journey.',
      },
    ],
    note: 'No lengthy contracts. No setup fees. Cancel or adjust at any renewal date.',
  },
  ar: {
    eyebrow:  'كيف يعمل',
    headline: 'نشط في أربع خطوات.',
    steps: [
      { num: '٠١', icon: 'enquire',  title: 'قدّم استفسارك',  text: 'أكمل طلب ليمور ٣٦٠ أدناه. حدد خطتك المفضلة وأنماط سفرك المعتادة.' },
      { num: '٠٢', icon: 'proposal', title: 'استلم عرضك',     text: 'في غضون ساعتين، سيرسل مستشارك المؤسسي عرضاً مخصصاً.' },
      { num: '٠٣', icon: 'setup',    title: 'إعداد الحساب',   text: 'بعد التأكيد، يُهيَّأ حسابك في أقل من ساعتين.' },
      { num: '٠٤', icon: 'travel',   title: 'سافر فوراً.',    text: 'يمكن تقديم حجزك الأول في غضون دقائق من تفعيل الحساب.' },
    ],
    note: 'لا عقود طويلة. لا رسوم إعداد. ألغِ أو عدّل في أي تاريخ تجديد.',
  },
  fr: {
    eyebrow:  'Comment ça Marche',
    headline: 'Actif en Quatre Étapes.',
    steps: [
      { num: '01', icon: 'enquire',  title: 'Soumettez votre Demande',   text: 'Complétez la demande Limore 360 ci-dessous. Précisez votre formule préférée et vos habitudes de déplacement.' },
      { num: '02', icon: 'proposal', title: 'Recevez votre Proposition', text: 'Dans les deux heures ouvrables, votre Conseiller enverra une proposition personnalisée.' },
      { num: '03', icon: 'setup',    title: 'Configuration du Compte',   text: 'Une fois confirmé, votre compte est configuré en moins de deux heures.' },
      { num: '04', icon: 'travel',   title: 'Voyagez. Immédiatement.',   text: 'Votre première réservation peut être passée dans les minutes suivant l\'activation.' },
    ],
    note: 'Pas de contrats longs. Pas de frais de mise en place. Annulez ou ajustez à chaque renouvellement.',
  },
}

// ✅ All icon strokes → #C8102E when active
const StepIcon = ({ id, highlight }) => {
  const color = highlight ? '#C8102E' : '#CCCCCC'
  const s = { width: 24, height: 24, stroke: color, strokeWidth: '1.1', strokeLinecap: 'round', strokeLinejoin: 'round' }
  const icons = {
    enquire: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...s}>
        <rect x="3" y="3" width="18" height="14" rx="1" />
        <path d="M8 9h8M8 12h5" />
        <path d="M3 21l4-4" />
      </svg>
    ),
    proposal: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...s}>
        <path d="M14 3H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8l-5-5z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    ),
    setup: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...s}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    travel: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...s}>
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="1" />
        <circle cx="12" cy="21" r="1" fill={color} stroke="none" />
        <circle cx="20" cy="21" r="1" fill={color} stroke="none" />
      </svg>
    ),
  }
  return icons[id] || null
}

export default function Limore360HowItWorks({ locale = 'en' }) {
  const c        = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const secRef   = useRef(null)
  const headRef  = useRef(null)
  const stepRefs = useRef([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 82%' } }
      )
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, x: isRTL ? 32 : -32 },
          { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.12,
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })
    }, secRef)
    return () => ctx.revert()
  }, [isRTL])

  return (
    <section
      ref={secRef}
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(64px, 10vw, 120px) clamp(20px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Header */}
      <div ref={headRef} style={{ marginBottom: 'clamp(44px, 7vw, 72px)', opacity: 0, maxWidth: '600px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          {/* ✅ Red line + text */}
          <div style={{ width: '28px', height: '1px', backgroundColor: '#C8102E', flexShrink: 0 }} />
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#C8102E',
          }}>
            {c.eyebrow}
          </span>
        </div>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4.5vw, 5rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, color: '#0A0A0A',
          lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0,
        }}>
          {c.headline}
        </h2>
      </div>

      {/* Steps */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        marginBottom: 'clamp(32px, 5vw, 48px)',
      }}>
        {c.steps.map((step, i) => {
          const isActive = active === i
          return (
            <div
              key={i}
              ref={el => (stepRefs.current[i] = el)}
              onClick={() => setActive(isActive ? -1 : i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setActive(isActive ? -1 : i)}
              aria-expanded={isActive}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 'clamp(16px, 3vw, 32px)',
                alignItems: 'start',
                padding: 'clamp(20px, 3vw, 28px) 0',
                borderBottom: '1px solid #EBEBEB',
                cursor: 'pointer',
                opacity: 0,
                outline: 'none',
              }}
            >
              {/* Icon box — ✅ red border + bg when active */}
              <div style={{
                width: '44px', height: '44px', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${isActive ? '#C8102E' : '#E4E4E4'}`,
                backgroundColor: isActive ? 'rgba(200,16,46,0.06)' : 'transparent',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
              }}>
                <StepIcon id={step.icon} highlight={isActive} />
              </div>

              {/* Content */}
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  marginBottom: isActive ? '10px' : '0',
                }}>
                  {/* ✅ Red step number when active */}
                  <span style={{
                    fontSize: '9px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 400, letterSpacing: '0.14em',
                    color: isActive ? '#C8102E' : '#CCCCCC',
                    transition: 'color 0.3s ease',
                  }}>
                    {step.num}
                  </span>
                  <h3 style={{
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 500,
                    color: isActive ? '#0A0A0A' : '#444444',
                    margin: 0, lineHeight: 1.2,
                    transition: 'color 0.3s ease',
                  }}>
                    {step.title}
                  </h3>
                </div>
                {isActive && (
                  <p style={{
                    fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                    fontFamily: 'Inter, sans-serif', fontWeight: 300,
                    color: '#666666', lineHeight: 1.85,
                    margin: 0, maxWidth: '560px',
                  }}>
                    {step.text}
                  </p>
                )}
              </div>

              {/* Chevron — ✅ red when active */}
              <div style={{
                width: '20px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'transform 0.3s ease',
                transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              }}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                  <path
                    d="M1 1.5l5 5 5-5"
                    stroke={isActive ? '#C8102E' : '#CCCCCC'}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          )
        })}
      </div>

      {/* Note — ✅ red info icon */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="6" stroke="#C8102E" strokeWidth="0.9" />
          <path d="M7 6v4M7 4.5v.5" stroke="#C8102E" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <p style={{
          fontSize: '11px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: '#AAAAAA',
          lineHeight: 1.6, margin: 0,
        }}>
          {c.note}
        </p>
      </div>
    </section>
  )
}