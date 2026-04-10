'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Request a Transfer',
    heading: 'Your Next Arrival\nDeserves Better.',
    sub: 'No delays. No uncertainty. No compromise. Submit your transfer request and a Limore account manager will confirm within 30 minutes.',
    cta: 'Request a Transfer',
    ctaSecondary: 'Contact Us via WhatsApp',
    whatsapp: 'https://wa.me/971563454698',
    note: 'For same-day bookings, please contact us directly via WhatsApp.',
    services: [
      { label: 'Corporate Chauffeur', href: '/services/corporate-chauffeur' },
      { label: 'Roadshows and Events', href: '/services/roadshows-events' },
      { label: 'Private Jet Transfers', href: '/services/private-jet-transfers' },
    ],
    otherLabel: 'Other Services',
  },
  ar: {
    label: 'طلب نقل',
    heading: 'وصولك القادم\nيستحق الأفضل.',
    sub: 'لا تأخير. لا غموض. لا تنازل. أرسل طلب النقل وسيقوم مدير حساب ليمور بالتأكيد خلال 30 دقيقة.',
    cta: 'طلب نقل',
    ctaSecondary: 'تواصل عبر واتساب',
    whatsapp: 'https://wa.me/971563454698',
    note: 'للحجوزات في نفس اليوم، يرجى التواصل مباشرة عبر واتساب.',
    services: [
      { label: 'السائق المؤسسي', href: '/services/corporate-chauffeur' },
      { label: 'الفعاليات والعروض', href: '/services/roadshows-events' },
      { label: 'نقل الطائرات الخاصة', href: '/services/private-jet-transfers' },
    ],
    otherLabel: 'خدمات أخرى',
  },
  fr: {
    label: 'Demander un Transfert',
    heading: 'Votre Prochaine Arrivée\nMérite Mieux.',
    sub: 'Aucun délai. Aucune incertitude. Aucun compromis. Soumettez votre demande et un gestionnaire Limore confirmera dans les 30 minutes.',
    cta: 'Demander un Transfert',
    ctaSecondary: 'Contacter via WhatsApp',
    whatsapp: 'https://wa.me/971563454698',
    note: 'Pour les réservations du jour même, contactez-nous directement via WhatsApp.',
    services: [
      { label: 'Chauffeur Corporate', href: '/services/corporate-chauffeur' },
      { label: 'Roadshows et Événements', href: '/services/roadshows-events' },
      { label: 'Transferts Jet Privé', href: '/services/private-jet-transfers' },
    ],
    otherLabel: 'Autres Services',
  },
}

export default function ATCTA({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const innerRef   = useRef(null)
  const sideRef    = useRef(null)

  const localePath = (href) => '/' + locale + href

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%' }
      gsap.fromTo(innerRef.current,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      gsap.fromTo(sideRef.current,
        { opacity: 0, x: isRTL ? -24 : 24 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.2, scrollTrigger: st }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#161616' }} />

      <div className="atcta-grid">

        {/* Left — main CTA */}
        <div
          ref={innerRef}
          style={{
            padding: 'clamp(64px, 9vw, 120px) clamp(24px, 6vw, 96px)',
            borderRight: '1px solid #161616', opacity: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
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
            fontSize: 'clamp(2.4rem, 5vw, 5.5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 1.0, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
            marginBottom: '28px',
          }}>
            {content.heading}
          </h2>

          <p style={{
            fontSize: '14px', fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: 'rgba(248,247,244,0.45)',
            lineHeight: 1.8, maxWidth: '440px', marginBottom: '44px',
          }}>
            {content.sub}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '24px' }}>
            <Link
              href={localePath('/contact')}
              className="atcta-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                padding: '15px 36px',
                backgroundColor: '#C41E1E', color: '#fff',
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {content.cta}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </Link>
            <a
              href={content.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="atcta-wa"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 28px',
                backgroundColor: 'transparent', color: 'rgba(248,247,244,0.7)',
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid rgba(248,247,244,0.15)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {content.ctaSecondary}
            </a>
          </div>

          <p style={{
            fontSize: '11px', fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: 'rgba(248,247,244,0.25)',
            letterSpacing: '0.04em',
          }}>
            {content.note}
          </p>
        </div>

        {/* Right — other services */}
        <div
          ref={sideRef}
          style={{
            padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 64px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            opacity: 0,
          }}
        >
          <p style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(248,247,244,0.25)',
            marginBottom: '28px',
          }}>
            {content.otherLabel}
          </p>
          {content.services.map((s, i) => (
            <Link
              key={i}
              href={localePath(s.href)}
              className="atcta-service-link"
              style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 0',
                borderBottom: '1px solid #1A1A1A',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease',
              }}
            >
              <span style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: 'rgba(248,247,244,0.45)',
                transition: 'color 0.2s ease', lineHeight: 1.2,
              }}
                className="atcta-sl-text"
              >
                {s.label}
              </span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"
                style={{ flexShrink: 0, marginLeft: '12px', opacity: 0.3, transition: 'opacity 0.2s ease, transform 0.2s ease' }}
                className="atcta-sl-arrow"
              >
                <path d="M1 5h12M8 1l5 4-5 4" stroke="#C41E1E" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#161616' }} />

      <style>{`
        .atcta-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .atcta-grid { grid-template-columns: 1.4fr 1fr; }
        }
        .atcta-primary:hover { background-color: #A01515 !important; transform: translateY(-1px); }
        .atcta-wa:hover { border-color: rgba(248,247,244,0.4) !important; color: #F8F7F4 !important; }
        .atcta-service-link:hover .atcta-sl-text { color: rgba(248,247,244,0.85) !important; }
        .atcta-service-link:hover .atcta-sl-arrow { opacity: 0.8 !important; transform: translateX(4px); }
        .atcta-service-link:hover { border-color: #2A2A2A !important; }
      `}</style>
    </section>
  )
}