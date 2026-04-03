'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Get Started',
    line1: 'Ready When',
    line2: 'You Are.',
    sub: 'Send us your requirement — route, date, number of passengers — and we respond with a confirmed vehicle, chauffeur name, and pricing within the hour.',
    cta: 'Make an Enquiry',
    ctaSecondary: 'WhatsApp Us',
    whatsapp: 'https://wa.me/971500000000',
    note: 'No obligation. No automated responses.',
    links: [
      { label: 'View Our Fleet',        href: '/fleet' },
      { label: 'Corporate Solutions',   href: '/corporate' },
      { label: 'Global Coverage',       href: '/global-coverage' },
    ],
  },
  ar: {
    label: 'ابدأ الآن',
    line1: 'جاهزون',
    line2: 'حين تكون جاهزاً.',
    sub: 'أرسل لنا متطلبك — المسار والتاريخ وعدد الركاب — ونرد بمركبة مؤكدة واسم السائق والتسعير في غضون ساعة.',
    cta: 'إجراء استفسار',
    ctaSecondary: 'واتساب',
    whatsapp: 'https://wa.me/971500000000',
    note: 'بدون التزام. بدون ردود آلية.',
    links: [
      { label: 'عرض أسطولنا',          href: '/fleet' },
      { label: 'الحلول المؤسسية',       href: '/corporate' },
      { label: 'التغطية العالمية',      href: '/global-coverage' },
    ],
  },
  fr: {
    label: 'Commencer',
    line1: 'Prêts Quand',
    line2: 'Vous l\'Êtes.',
    sub: 'Envoyez-nous votre demande — itinéraire, date, nombre de passagers — et nous répondons avec un véhicule confirmé, le nom du chauffeur et la tarification dans l\'heure.',
    cta: 'Faire une Demande',
    ctaSecondary: 'WhatsApp',
    whatsapp: 'https://wa.me/971500000000',
    note: 'Sans engagement. Sans réponses automatisées.',
    links: [
      { label: 'Voir Notre Flotte',     href: '/fleet' },
      { label: 'Solutions Corporate',   href: '/corporate' },
      { label: 'Couverture Mondiale',   href: '/global-coverage' },
    ],
  },
}

export default function ServicesCTA({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const lp         = (href) => `/${locale}${href}`
  const sectionRef = useRef(null)
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)

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
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <div className="svccta-grid">

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

          <h2 style={{
            fontSize: 'clamp(2.8rem, 6vw, 7rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 0.96, letterSpacing: '-0.01em',
            marginBottom: '26px',
          }}>
            {content.line1}
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(248,247,244,0.45)' }}>
              {content.line2}
            </span>
          </h2>

          <p style={{
            fontSize: 'clamp(0.85rem, 1.25vw, 0.98rem)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300, color: 'rgba(248,247,244,0.35)',
            lineHeight: 1.9, maxWidth: '400px',
            marginBottom: '36px',
          }}>
            {content.sub}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '26px' }}>
            <Link
              href={lp('/contact')}
              className="svccta-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 30px',
                backgroundColor: '#C41E1E', color: '#fff',
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'background-color 0.3s, transform 0.2s',
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
              className="svccta-ghost"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '9px',
                padding: '12px 24px',
                backgroundColor: 'transparent',
                color: 'rgba(248,247,244,0.45)',
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid rgba(248,247,244,0.1)',
                transition: 'all 0.3s',
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
            fontWeight: 300, color: 'rgba(248,247,244,0.15)',
            letterSpacing: '0.04em',
          }}>
            {content.note}
          </p>
        </div>

        {/* Right — quick links */}
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
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.18)',
            marginBottom: '20px',
          }}>
            Explore Further
          </p>

          {content.links.map((l, i) => (
            <Link
              key={i}
              href={lp(l.href)}
              className="svccta-link"
              style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'clamp(16px, 2.2vw, 22px) 0',
                borderBottom: '1px solid #141414',
                textDecoration: 'none',
              }}
            >
              <span
                className="svccta-link-text"
                style={{
                  fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400,
                  color: 'rgba(248,247,244,0.2)',
                  transition: 'color 0.2s ease',
                  lineHeight: 1.1,
                }}
              >
                {l.label}
              </span>
              <svg
                width="14" height="10" viewBox="0 0 14 10" fill="none"
                aria-hidden="true"
                className="svccta-link-arrow"
                style={{
                  flexShrink: 0, opacity: 0.12,
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
              >
                <path d="M1 5h12M8 1.5l4 3.5-4 3.5" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <style>{`
        .svccta-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .svccta-grid { grid-template-columns: 1.2fr 1fr; min-height: 600px; }
        }
        .svccta-primary:hover { background-color: #A01515 !important; transform: translateY(-1px); }
        .svccta-ghost:hover { border-color: rgba(248,247,244,0.35) !important; color: #F8F7F4 !important; }
        .svccta-link:hover .svccta-link-text { color: #F8F7F4 !important; }
        .svccta-link:hover .svccta-link-arrow { opacity: 0.6 !important; transform: translateX(4px); }
      `}</style>
    </section>
  )
}