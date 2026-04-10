'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Custom Requirements',
    line1: 'Need Something',
    line2: 'Specific?',
    body: 'We maintain vehicles beyond this public list — armoured variants, specific configurations, and last-minute requirements. Contact our operations team directly.',
    cta: 'Speak to Operations',
    ctaSecondary: 'WhatsApp',
    whatsapp: 'https://wa.me/971563454698',
    note: 'Available 24 hours, 7 days.',
  },
  ar: {
    label: 'متطلبات مخصصة',
    line1: 'تحتاج إلى شيء',
    line2: 'محدد؟',
    body: 'نحافظ على مركبات تتجاوز هذه القائمة العامة — متغيرات مدرعة وتكوينات محددة ومتطلبات اللحظة الأخيرة. تواصل مع فريق العمليات مباشرة.',
    cta: 'تحدث إلى العمليات',
    ctaSecondary: 'واتساب',
    whatsapp: 'https://wa.me/971563454698',
    note: 'متاح 24 ساعة، 7 أيام.',
  },
  fr: {
    label: 'Exigences Personnalisées',
    line1: 'Besoin de',
    line2: 'Quelque Chose de Spécifique?',
    body: 'Nous disposons de véhicules au-delà de cette liste publique — variantes blindées, configurations spécifiques et besoins de dernière minute. Contactez directement notre équipe opérationnelle.',
    cta: 'Parler aux Opérations',
    ctaSecondary: 'WhatsApp',
    whatsapp: 'https://wa.me/971563454698',
    note: 'Disponible 24h/24, 7j/7.',
  },
}

export default function FleetCTA({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const lp         = (href) => `/${locale}${href}`
  const sectionRef = useRef(null)
  const innerRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <div
        ref={innerRef}
        style={{
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'clamp(32px, 5vw, 56px)',
          opacity: 0,
        }}
      >
        {/* ── Left copy ── */}
        <div style={{ maxWidth: '520px' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '18px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '1px',
                backgroundColor: '#C41E1E',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#C41E1E',
              }}
            >
              {content.label}
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 5rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 300,
              color: '#F8F7F4',
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              marginBottom: '20px',
            }}
          >
            {content.line1}
            <br />
            <span
              style={{
                fontStyle: 'italic',
                color: 'rgba(248,247,244,0.42)',
              }}
            >
              {content.line2}
            </span>
          </h2>

          {/* Body */}
          <p
            style={{
              fontSize: 'clamp(0.85rem, 1.2vw, 0.96rem)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              color: 'rgba(248,247,244,0.35)',
              lineHeight: 1.9,
              marginBottom: '10px',
              maxWidth: '480px',
            }}
          >
            {content.body}
          </p>

          {/* Note */}
          <p
            style={{
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              color: 'rgba(248,247,244,0.16)',
              letterSpacing: '0.08em',
            }}
          >
            {content.note}
          </p>
        </div>

        {/* ── Right CTAs ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            flexShrink: 0,
            width: 'min(100%, 240px)',
          }}
        >
          {/* Primary CTA */}
          <Link
            href={lp('/contact')}
            className="fcta-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              padding: '14px 24px',
              backgroundColor: '#C41E1E',
              color: '#fff',
              fontSize: '10px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background-color 0.25s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {content.cta}
            <svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M1 4.5h11M7.5 1l4 3.5-4 3.5"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* WhatsApp CTA */}
          <a
            href={content.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="fcta-whatsapp"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              padding: '14px 24px',
              backgroundColor: 'transparent',
              color: 'rgba(248,247,244,0.55)',
              border: '1px solid rgba(248,247,244,0.1)',
              fontSize: '10px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'border-color 0.25s ease, color 0.25s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {content.ctaSecondary}
            {/* WhatsApp icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Hover styles ── */}
      <style>{`
        .fcta-primary:hover {
          background-color: #A01515 !important;
        }
        .fcta-whatsapp:hover {
          border-color: rgba(248,247,244,0.35) !important;
          color: rgba(248,247,244,0.85) !important;
        }

        /* Mobile: stack full width */
        @media (max-width: 600px) {
          .fcta-primary,
          .fcta-whatsapp {
            width: 100% !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </section>
  )
}