'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Corporate Enquiries',
    heading: 'Set Up Your\nCorporate Account.',
    sub: 'Tell us your organisation, your cities, and your requirements. We respond within two business hours with a proposed account structure.',
    cta: 'Submit Enquiry',
    ctaSecondary: 'WhatsApp Us',
    whatsapp: 'https://wa.me/971563454698',
    note: 'All enquiries are handled in strict confidence. Your details are never shared.',
    links: [
      { label: 'Airport Transfers',     href: '/services/airport-transfers' },
      { label: 'Roadshows and Events',  href: '/services/roadshows-events' },
      { label: 'Private Jet Transfers', href: '/services/private-jet-transfers' },
    ],
    otherLabel: 'Other Services',
  },
  ar: {
    label: 'استفسارات المؤسسات',
    heading: 'أنشئ حسابك\nالمؤسسي.',
    sub: 'أخبرنا بمؤسستك ومدنك ومتطلباتك. نرد في غضون ساعتي عمل بهيكل حساب مقترح.',
    cta: 'أرسل استفساراً',
    ctaSecondary: 'واتساب',
    whatsapp: 'https://wa.me/971563454698',
    note: 'جميع الاستفسارات تُعالَج بسرية تامة. لا تُشارك تفاصيلك أبداً.',
    links: [
      { label: 'نقل المطار',          href: '/services/airport-transfers' },
      { label: 'الفعاليات والعروض',    href: '/services/roadshows-events' },
      { label: 'نقل الطائرات الخاصة', href: '/services/private-jet-transfers' },
    ],
    otherLabel: 'خدمات أخرى',
  },
  fr: {
    label: 'Demandes Corporate',
    heading: 'Créez Votre\nCompte Corporate.',
    sub: 'Dites-nous votre organisation, vos villes et vos besoins. Nous répondons dans les deux heures ouvrables avec une structure de compte proposée.',
    cta: 'Soumettre une Demande',
    ctaSecondary: 'WhatsApp',
    whatsapp: 'https://wa.me/971563454698',
    note: 'Toutes les demandes sont traitées en toute confidentialité. Vos coordonnées ne sont jamais partagées.',
    links: [
      { label: 'Transferts Aéroport',   href: '/services/airport-transfers' },
      { label: 'Roadshows et Événements', href: '/services/roadshows-events' },
      { label: 'Transferts Jet Privé',  href: '/services/private-jet-transfers' },
    ],
    otherLabel: 'Autres Services',
  },
}

export default function CCCTA({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)

  const localePath = (href) => '/' + locale + href

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%' }
      gsap.fromTo(leftRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: isRTL ? -24 : 24 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.2, scrollTrigger: st }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <div className="cccta-grid">

        {/* Left */}
        <div
          ref={leftRef}
          style={{
            padding: 'clamp(64px, 9vw, 112px) clamp(24px, 6vw, 96px)',
            borderRight: '1px solid #EBEBEB',
            opacity: 0,
          }}
        >
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
            fontSize: 'clamp(2.4rem, 5vw, 5.5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#0A0A0A',
            lineHeight: 1.0, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em', marginBottom: '24px',
          }}>
            {content.heading}
          </h2>

          <p style={{
            fontSize: '14px', fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: '#888',
            lineHeight: 1.8, maxWidth: '400px', marginBottom: '40px',
          }}>
            {content.sub}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <Link
              href={localePath('/corporate-solutions')}
              className="cccta-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 30px',
                backgroundColor: '#0A0A0A', color: '#F8F7F4',
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
              className="cccta-wa"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '9px',
                padding: '12px 24px',
                backgroundColor: 'transparent', color: '#555',
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid #E0E0E0',
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

          <p style={{
            fontSize: '11px', fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: '#BBBBBB',
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
          <p style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#C0C0C0',
            marginBottom: '24px',
          }}>
            {content.otherLabel}
          </p>
          {content.links.map((s, i) => (
            <Link
              key={i}
              href={localePath(s.href)}
              className="cccta-svc"
              style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 0',
                borderBottom: '1px solid #F0F0F0',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease',
              }}
            >
              <span
                className="cccta-svc-text"
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400, color: '#C0C0C0',
                  transition: 'color 0.2s ease', lineHeight: 1.2,
                }}
              >
                {s.label}
              </span>
              <svg
                width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true"
                style={{ flexShrink: 0, marginLeft: '12px', opacity: 0.3, transition: 'opacity 0.2s ease, transform 0.2s ease' }}
                className="cccta-svc-arrow"
              >
                <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .cccta-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .cccta-grid { grid-template-columns: 1.4fr 1fr; }
        }
        .cccta-primary:hover { background-color: #C41E1E !important; transform: translateY(-1px); }
        .cccta-wa:hover { border-color: #C0C0C0 !important; color: #0A0A0A !important; }
        .cccta-svc:hover .cccta-svc-text { color: #0A0A0A !important; }
        .cccta-svc:hover .cccta-svc-arrow { opacity: 0.7 !important; transform: translateX(4px); }
      `}</style>
    </section>
  )
}