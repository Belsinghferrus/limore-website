'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Event Enquiries',
    eyebrow: 'Your Next Event',
    line1: 'Tell Us the Brief.',
    line2: 'We Handle the Rest.',
    body: 'Send us your event outline. Dates, cities, guest numbers, and any known VIP requirements. We respond within four business hours with a proposed transport framework.',
    cta: 'Submit Event Brief',
    ctaSecondary: 'WhatsApp Directly',
    whatsapp: 'https://wa.me/971563454698',
    note: 'All event details are handled under strict confidentiality.',
    guarantees: [
      'Response within 4 business hours',
      'Dedicated event transport manager assigned',
      'Full proposal with vehicle and pricing included',
    ],
    relatedLabel: 'Related Services',
    related: [
      { label: 'Corporate Chauffeur',    href: '/services/corporate-chauffeur' },
      { label: 'Airport Transfers',      href: '/services/airport-transfers' },
      { label: 'Private Jet Transfers',  href: '/services/private-jet-transfers' },
    ],
  },
  ar: {
    label: 'استفسارات الفعاليات',
    eyebrow: 'فعاليتك القادمة',
    line1: 'أخبرنا بالموجز.',
    line2: 'نحن نتولى الباقي.',
    body: 'أرسل لنا ملخص فعاليتك. التواريخ والمدن وأعداد الضيوف وأي متطلبات معروفة لكبار الشخصيات. نرد في غضون أربع ساعات عمل باقتراح إطار نقل كامل.',
    cta: 'أرسل موجز الفعالية',
    ctaSecondary: 'واتساب مباشر',
    whatsapp: 'https://wa.me/971563454698',
    note: 'جميع تفاصيل الفعالية تُعالَج بسرية تامة.',
    guarantees: [
      'رد في غضون 4 ساعات عمل',
      'تعيين مدير نقل فعاليات مخصص',
      'اقتراح كامل بالمركبات والتسعير',
    ],
    relatedLabel: 'خدمات ذات صلة',
    related: [
      { label: 'سائق مؤسسي',            href: '/services/corporate-chauffeur' },
      { label: 'نقل المطار',             href: '/services/airport-transfers' },
      { label: 'نقل الطائرات الخاصة',   href: '/services/private-jet-transfers' },
    ],
  },
  fr: {
    label: 'Demandes Événementielles',
    eyebrow: 'Votre Prochain Événement',
    line1: 'Donnez-nous le Brief.',
    line2: 'Nous Gérons le Reste.',
    body: 'Envoyez-nous votre résumé d\'événement. Dates, villes, nombre de guests et exigences VIP connues. Nous répondons dans les quatre heures ouvrables avec un cadre transport proposé.',
    cta: 'Soumettre le Brief',
    ctaSecondary: 'WhatsApp Direct',
    whatsapp: 'https://wa.me/971563454698',
    note: 'Tous les détails événementiels sont traités en toute confidentialité.',
    guarantees: [
      'Réponse dans les 4 heures ouvrables',
      'Responsable transport événementiel assigné',
      'Proposition complète avec véhicules et tarification',
    ],
    relatedLabel: 'Services Connexes',
    related: [
      { label: 'Chauffeur Corporate',    href: '/services/corporate-chauffeur' },
      { label: 'Transferts Aéroport',    href: '/services/airport-transfers' },
      { label: 'Transferts Jet Privé',   href: '/services/private-jet-transfers' },
    ],
  },
}

export default function RWCTA({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const lp         = (href) => `/${locale}${href}`
  const sectionRef = useRef(null)
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)
  const guardsRef  = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 76%' }

      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: isRTL ? -28 : 28 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.2, scrollTrigger: st }
      )

      guardsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            delay: 0.5 + i * 0.1,
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

      <div className="rwcta-grid">

        {/* ── Left panel ── */}
        <div
          ref={leftRef}
          style={{
            padding: 'clamp(64px, 9vw, 112px) clamp(24px, 6vw, 96px)',
            borderRight: isRTL ? 'none' : '1px solid #141414',
            borderLeft:  isRTL ? '1px solid #141414' : 'none',
            opacity: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
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

          {/* Eyebrow */}
          <p style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 400, letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.2)',
            marginBottom: '14px',
          }}>
            {content.eyebrow}
          </p>

          {/* Headline */}
          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 6rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 1.0, letterSpacing: '-0.01em',
            marginBottom: '28px',
          }}>
            {content.line1}
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(248,247,244,0.45)' }}>
              {content.line2}
            </span>
          </h2>

          {/* Body */}
          <p style={{
            fontSize: 'clamp(0.85rem, 1.25vw, 0.98rem)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: 'rgba(248,247,244,0.38)',
            lineHeight: 1.9, maxWidth: '420px',
            marginBottom: '40px',
          }}>
            {content.body}
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
            <Link
              href={lp('/contact')}
              className="rwcta-btn-primary"
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
              className="rwcta-btn-ghost"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '9px',
                padding: '12px 24px',
                backgroundColor: 'transparent',
                color: 'rgba(248,247,244,0.5)',
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

          {/* Confidentiality note */}
          <p style={{
            fontSize: '11px', fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: 'rgba(248,247,244,0.18)',
            letterSpacing: '0.04em', lineHeight: 1.6,
          }}>
            {content.note}
          </p>
        </div>

        {/* ── Right panel ── */}
        <div
          ref={rightRef}
          style={{
            padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 64px)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', gap: '0',
            opacity: 0,
          }}
        >
          {/* Guarantees block */}
          <div style={{ marginBottom: 'clamp(48px, 7vw, 72px)' }}>
            <p style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(248,247,244,0.18)',
              marginBottom: '24px',
            }}>
              What Happens Next
            </p>
            {content.guarantees.map((g, i) => (
              <div
                key={i}
                ref={(el) => (guardsRef.current[i] = el)}
                style={{
                  display: 'flex', alignItems: 'flex-start',
                  gap: '16px',
                  padding: 'clamp(14px, 2vw, 20px) 0',
                  borderBottom: i < content.guarantees.length - 1
                    ? '1px solid #141414'
                    : 'none',
                  opacity: 0,
                }}
              >
                {/* Step number */}
                <span style={{
                  fontSize: '11px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.14em',
                  color: '#C41E1E', flexShrink: 0,
                  paddingTop: '2px',
                }}>
                  0{i + 1}
                </span>
                <p style={{
                  fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400, color: 'rgba(248,247,244,0.6)',
                  lineHeight: 1.4, margin: 0,
                }}>
                  {g}
                </p>
              </div>
            ))}
          </div>

          {/* Related services */}
          <div>
            <p style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(248,247,244,0.18)',
              marginBottom: '16px',
            }}>
              {content.relatedLabel}
            </p>
            {content.related.map((s, i) => (
              <Link
                key={i}
                href={lp(s.href)}
                className="rwcta-svc-link"
                style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px 0',
                  borderBottom: '1px solid #141414',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <span
                  className="rwcta-svc-text"
                  style={{
                    fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 400,
                    color: 'rgba(248,247,244,0.25)',
                    transition: 'color 0.2s ease',
                    lineHeight: 1.2,
                  }}
                >
                  {s.label}
                </span>
                <svg
                  width="13" height="9" viewBox="0 0 13 9" fill="none"
                  aria-hidden="true"
                  className="rwcta-svc-arrow"
                  style={{
                    flexShrink: 0,
                    marginLeft: '12px',
                    opacity: 0.2,
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                  }}
                >
                  <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <style>{`
        .rwcta-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .rwcta-grid {
            grid-template-columns: 1.3fr 1fr;
            min-height: 620px;
          }
        }
        .rwcta-btn-primary:hover {
          background-color: #A01515 !important;
          transform: translateY(-1px);
        }
        .rwcta-btn-ghost:hover {
          border-color: rgba(248,247,244,0.35) !important;
          color: #F8F7F4 !important;
        }
        .rwcta-svc-link:hover .rwcta-svc-text {
          color: #F8F7F4 !important;
        }
        .rwcta-svc-link:hover .rwcta-svc-arrow {
          opacity: 0.7 !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  )
}