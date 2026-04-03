'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Arrange a Transfer',
    heading: 'Share Your\nFlight Details.',
    sub: 'Tail number, FBO, arrival time. That is all we need. We take it from there and have your vehicle staged before you land.',
    fields: [
      'Tail number or charter operator',
      'FBO name and city',
      'Estimated arrival or departure time',
      'Number of passengers and luggage pieces',
      'Destination address',
    ],
    fieldsLabel: 'Information We Need',
    cta: 'Send Flight Details',
    ctaSecondary: 'WhatsApp',
    whatsapp: 'https://wa.me/971500000000',
    note: 'All passenger and flight details are handled with complete discretion.',
    related: [
      { label: 'Airport Transfers',      href: '/services/airport-transfers' },
      { label: 'Corporate Chauffeur',    href: '/services/corporate-chauffeur' },
      { label: 'Roadshows and Events',   href: '/services/roadshows-events' },
    ],
    relatedLabel: 'Related Services',
  },
  ar: {
    label: 'ترتيب نقل',
    heading: 'شارك\nتفاصيل رحلتك.',
    sub: 'رقم الذيل، مجمع الطيران، وقت الوصول. هذا كل ما نحتاجه. نتولى الباقي ونضع مركبتك في الموضع قبل هبوطك.',
    fields: [
      'رقم الذيل أو مشغل الرحلة الشاركة',
      'اسم مجمع الطيران والمدينة',
      'وقت الوصول أو المغادرة المقدر',
      'عدد الركاب وقطع الأمتعة',
      'عنوان الوجهة',
    ],
    fieldsLabel: 'المعلومات التي نحتاجها',
    cta: 'أرسل تفاصيل الرحلة',
    ctaSecondary: 'واتساب',
    whatsapp: 'https://wa.me/971500000000',
    note: 'جميع تفاصيل الركاب والرحلة تُعالَج بتكتم تام.',
    related: [
      { label: 'نقل المطار',             href: '/services/airport-transfers' },
      { label: 'سائق مؤسسي',            href: '/services/corporate-chauffeur' },
      { label: 'جولات الترويج والفعاليات', href: '/services/roadshows-events' },
    ],
    relatedLabel: 'خدمات ذات صلة',
  },
  fr: {
    label: 'Organiser un Transfert',
    heading: 'Partagez les\nDétails de Vol.',
    sub: 'Immatriculation, FBO, heure d\'arrivée. C\'est tout ce dont nous avons besoin. Nous prenons en charge le reste et positionnons votre véhicule avant votre atterrissage.',
    fields: [
      'Immatriculation ou opérateur charter',
      'Nom du FBO et ville',
      'Heure d\'arrivée ou de départ estimée',
      'Nombre de passagers et de bagages',
      'Adresse de destination',
    ],
    fieldsLabel: 'Informations Nécessaires',
    cta: 'Envoyer les Détails de Vol',
    ctaSecondary: 'WhatsApp',
    whatsapp: 'https://wa.me/971500000000',
    note: 'Tous les détails passagers et vol sont traités avec une discrétion totale.',
    related: [
      { label: 'Transferts Aéroport',    href: '/services/airport-transfers' },
      { label: 'Chauffeur Corporate',    href: '/services/corporate-chauffeur' },
      { label: 'Roadshows et Événements', href: '/services/roadshows-events' },
    ],
    relatedLabel: 'Services Connexes',
  },
}

export default function PJCTA({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const lp         = (href) => `/${locale}${href}`
  const sectionRef = useRef(null)
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)
  const fieldRefs  = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 76%' }

      gsap.fromTo(leftRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: isRTL ? -28 : 28 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.2, scrollTrigger: st }
      )
      fieldRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, x: isRTL ? 16 : -16 },
          {
            opacity: 1, x: 0, duration: 0.6, ease: 'power3.out',
            delay: 0.4 + i * 0.08,
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

      <div className="pjcta-grid">

        {/* Left */}
        <div
          ref={leftRef}
          style={{
            padding: 'clamp(64px, 9vw, 112px) clamp(24px, 6vw, 96px)',
            borderRight: isRTL ? 'none' : '1px solid #141414',
            borderLeft:  isRTL ? '1px solid #141414' : 'none',
            opacity: 0,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '36px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.24em',
              textTransform: 'uppercase', color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2.6rem, 5.5vw, 6.5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 0.98, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em', marginBottom: '24px',
          }}>
            {content.heading}
          </h2>

          {/* Sub */}
          <p style={{
            fontSize: 'clamp(0.85rem, 1.25vw, 0.98rem)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: 'rgba(248,247,244,0.35)',
            lineHeight: 1.9, maxWidth: '400px',
            marginBottom: '40px',
          }}>
            {content.sub}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
            <Link
              href={lp('/contact')}
              className="pjcta-btn-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 30px',
                backgroundColor: '#C41E1E', color: '#fff',
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {content.cta}
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
                <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </Link>
            <a
              href={content.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pjcta-btn-ghost"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '9px',
                padding: '12px 24px',
                backgroundColor: 'transparent',
                color: 'rgba(248,247,244,0.45)',
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid rgba(248,247,244,0.1)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {content.ctaSecondary}
            </a>
          </div>

          {/* Note */}
          <p style={{
            fontSize: '11px', fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: 'rgba(248,247,244,0.15)',
            letterSpacing: '0.04em', lineHeight: 1.6,
          }}>
            {content.note}
          </p>
        </div>

        {/* Right */}
        <div
          ref={rightRef}
          style={{
            padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 64px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            opacity: 0,
          }}
        >
          {/* Fields we need */}
          <p style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.18)',
            marginBottom: '20px',
          }}>
            {content.fieldsLabel}
          </p>

          <div style={{ marginBottom: 'clamp(48px, 7vw, 72px)' }}>
            {content.fields.map((f, i) => (
              <div
                key={i}
                ref={(el) => (fieldRefs.current[i] = el)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: 'clamp(14px, 2vw, 20px) 0',
                  borderBottom: i < content.fields.length - 1 ? '1px solid #141414' : 'none',
                  opacity: 0,
                }}
              >
                <span style={{
                  fontSize: '11px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.12em',
                  color: '#C41E1E', flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400, color: 'rgba(248,247,244,0.5)',
                  lineHeight: 1.4, margin: 0,
                }}>
                  {f}
                </p>
              </div>
            ))}
          </div>

          {/* Related services */}
          <p style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.18)',
            marginBottom: '14px',
          }}>
            {content.relatedLabel}
          </p>
          {content.related.map((s, i) => (
            <Link
              key={i}
              href={lp(s.href)}
              className="pjcta-svc"
              style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 0',
                borderBottom: '1px solid #141414',
                textDecoration: 'none',
              }}
            >
              <span
                className="pjcta-svc-text"
                style={{
                  fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400,
                  color: 'rgba(248,247,244,0.22)',
                  transition: 'color 0.2s ease',
                  lineHeight: 1.2,
                }}
              >
                {s.label}
              </span>
              <svg
                width="13" height="9" viewBox="0 0 13 9" fill="none"
                aria-hidden="true"
                className="pjcta-svc-arrow"
                style={{
                  flexShrink: 0, marginLeft: '12px',
                  opacity: 0.15,
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
              >
                <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <style>{`
        .pjcta-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .pjcta-grid { grid-template-columns: 1.3fr 1fr; min-height: 680px; }
        }
        .pjcta-btn-primary:hover { background-color: #A01515 !important; transform: translateY(-1px); }
        .pjcta-btn-ghost:hover { border-color: rgba(248,247,244,0.35) !important; color: #F8F7F4 !important; }
        .pjcta-svc:hover .pjcta-svc-text { color: #F8F7F4 !important; }
        .pjcta-svc:hover .pjcta-svc-arrow { opacity: 0.6 !important; transform: translateX(4px); }
      `}</style>
    </section>
  )
}