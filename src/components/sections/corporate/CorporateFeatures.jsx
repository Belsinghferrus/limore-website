'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { features } from '@/data/corporate'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: { eyebrow: 'How It Works', headline: 'The Corporate\nInfrastructure.' },
  ar: { eyebrow: 'كيف يعمل', headline: 'البنية التحتية\nالمؤسسية.' },
  fr: { eyebrow: 'Comment Ça Fonctionne', headline: 'L\'Infrastructure\nCorporate.' },
}

// Icon components per feature
function FeatureIcon({ id, color }) {
  const style = { width: '22px', height: '22px', color }
  switch (id) {
    case 'booking':
      return (
        <svg {...style} viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="1.5" y="3.5" width="19" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M6 8h10M6 12h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M18.5 16.5l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      )
    case 'account':
      return (
        <svg {...style} viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <circle cx="11" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M3.5 19c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M15 2l1.5 1.5L18 2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'billing':
      return (
        <svg {...style} viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="17" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M7 8h8M7 11h5M7 14h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      )
    case 'contracts':
      return (
        <svg {...style} viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M4 2h10l4 4v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M14 2v4h4M7 10h8M7 13h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M7 16l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    default: return null
  }
}

export default function CorporateFeatures({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const [active, setActive] = useState(features[0].id)
  const sectionRef = useRef(null)
  const headRef    = useRef(null)
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)
  const panelRef   = useRef(null)

  const activeFeature = features.find(f => f.id === active) || features[0]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 82%' } }
      )
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: isRTL ? 24 : -24 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.1,
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: isRTL ? -24 : 24 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [isRTL])

  const switchFeature = (id) => {
    if (id === active) return
    gsap.to(panelRef.current, {
      opacity: 0, y: 8, duration: 0.18, ease: 'power2.in',
      onComplete: () => {
        setActive(id)
        gsap.fromTo(panelRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.32, ease: 'power3.out' }
        )
      },
    })
  }

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#F7F7F7',
        padding: 'clamp(64px, 10vw, 112px) clamp(20px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Section head */}
      <div ref={headRef} style={{ marginBottom: 'clamp(40px, 6vw, 64px)', opacity: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '1px', backgroundColor: '#C41E1E' }} />
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#C41E1E',
          }}>
            {content.eyebrow}
          </span>
        </div>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4.5vw, 4.5rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, color: '#0A0A0A',
          lineHeight: 0.95, letterSpacing: '-0.02em',
          whiteSpace: 'pre-line',
        }}>
          {content.headline}
        </h2>
      </div>

      {/* Two-column layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: 'clamp(24px, 4vw, 48px)',
        alignItems: 'start',
      }}>
        {/* Left — feature menu */}
        <div ref={leftRef} style={{ opacity: 0 }}>
          {features.map((f, i) => {
            const isOn = active === f.id
            return (
              <button
                key={f.id}
                onClick={() => switchFeature(f.id)}
                className="corp-feat-btn"
                aria-pressed={isOn}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  cursor: 'pointer',
                  textAlign: isRTL ? 'right' : 'left',
                  padding: 'clamp(16px, 2.5vw, 22px) clamp(16px, 2.5vw, 22px)',
                  display: 'flex', alignItems: 'center',
                  gap: '16px',
                  backgroundColor: isOn ? '#FFFFFF' : 'transparent',
                  borderLeft: isRTL ? 'none' : `3px solid ${isOn ? '#C41E1E' : 'transparent'}`,
                  borderRight: isRTL ? `3px solid ${isOn ? '#C41E1E' : 'transparent'}` : 'none',
                  borderBottom: i < features.length - 1 ? '1px solid #EBEBEB' : 'none',
                  transition: 'background-color 0.25s ease, border-color 0.25s ease',
                }}
              >
                {/* Number */}
                <span style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.1em',
                  color: isOn ? '#C41E1E' : '#CCCCCC',
                  minWidth: '20px', flexShrink: 0,
                  transition: 'color 0.25s ease',
                }}>
                  {f.number}
                </span>

                {/* Icon */}
                <span style={{ flexShrink: 0 }}>
                  <FeatureIcon id={f.id} color={isOn ? '#C41E1E' : '#CCCCCC'} />
                </span>

                {/* Label */}
                <span style={{
                  fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 500, color: isOn ? '#0A0A0A' : '#888888',
                  lineHeight: 1.2, transition: 'color 0.25s ease',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                }}>
                  {f.title[locale] || f.title.en}
                </span>
              </button>
            )
          })}
          <style>{`
            .corp-feat-btn:hover { background-color: #FFFFFF !important; }
          `}</style>
        </div>

        {/* Right — active feature detail */}
        <div ref={rightRef} style={{ opacity: 0 }}>
          <div
            ref={panelRef}
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(28px, 4vw, 44px)',
              borderTop: '2px solid #C41E1E',
            }}
          >
            {/* Number + icon header */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', marginBottom: '24px',
            }}>
              <span style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 300, color: 'rgba(10,10,10,0.06)',
                lineHeight: 1, letterSpacing: '-0.04em',
                userSelect: 'none',
              }}>
                {activeFeature.number}
              </span>
              <span>
                <FeatureIcon id={activeFeature.id} color="#C41E1E" />
              </span>
            </div>

            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, color: '#0A0A0A',
              lineHeight: 1.1, marginBottom: '16px',
              letterSpacing: '-0.01em',
            }}>
              {activeFeature.title[locale] || activeFeature.title.en}
            </h3>

            <p style={{
              fontSize: 'clamp(0.85rem, 1.3vw, 0.97rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: '#444444', lineHeight: 1.95,
              marginBottom: '20px',
            }}>
              {activeFeature.body[locale] || activeFeature.body.en}
            </p>

            {/* Divider */}
            <div style={{ width: '40px', height: '1px', backgroundColor: '#EBEBEB', marginBottom: '16px' }} />

            <p style={{
              fontSize: 'clamp(0.78rem, 1.1vw, 0.88rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: '#999999', lineHeight: 1.85,
            }}>
              {activeFeature.detail[locale] || activeFeature.detail.en}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}