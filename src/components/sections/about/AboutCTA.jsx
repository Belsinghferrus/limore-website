'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Work With Us',
    heading: 'Ready to Experience\nthe Limore Standard?',
    sub: 'Whether you are a corporate travel manager, a private client, or a luxury brand seeking a reliable ground partner — we would like to speak with you.',
    cta1: 'Make an Enquiry',
    cta2: 'View Our Services',
    items: [
      { icon: 'phone', text: 'Available 24 hours a day, 7 days a week' },
      { icon: 'globe', text: 'Operating across 8 global cities' },
      { icon: 'shield', text: 'Trusted by Fortune 500 companies' },
    ],
  },
  ar: {
    label: 'اعمل معنا',
    heading: 'هل أنت مستعد لتجربة\nمعيار ليمور؟',
    sub: 'سواء كنت مديرا لسفر الشركات أو عميلا خاصا أو علامة تجارية فاخرة تبحث عن شريك أرضي موثوق — يسعدنا التحدث معك.',
    cta1: 'تقديم استفسار',
    cta2: 'خدماتنا',
    items: [
      { icon: 'phone', text: 'متاح 24 ساعة، 7 أيام في الأسبوع' },
      { icon: 'globe', text: 'نعمل في 8 مدن عالمية' },
      { icon: 'shield', text: 'موثوق به من قبل كبرى الشركات' },
    ],
  },
  fr: {
    label: 'Travailler Avec Nous',
    heading: 'Prêt à Vivre\nle Standard Limore?',
    sub: 'Que vous soyez responsable voyages d\'entreprise, client privé, ou marque de luxe cherchant un partenaire terrestre fiable — nous souhaitons vous parler.',
    cta1: 'Faire une Demande',
    cta2: 'Nos Services',
    items: [
      { icon: 'phone', text: 'Disponible 24h/24, 7j/7' },
      { icon: 'globe', text: 'Opérant dans 8 villes mondiales' },
      { icon: 'shield', text: 'Approuvé par des entreprises Fortune 500' },
    ],
  },
}

const CTAIcons = {
  phone: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 1h4l2 5-2.5 1.5a11 11 0 005 5L13 10l5 2v4a2 2 0 01-2 2A16 16 0 011 3a2 2 0 012-2z" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  globe: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M2 9h14M9 2a10 10 0 010 14M9 2a10 10 0 000 14" stroke="#C41E1E" strokeWidth="1"/>
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1L2 4v6c0 4.4 3 8 7 9 4-1 7-4.6 7-9V4L9 1z" stroke="#C41E1E" strokeWidth="1"/>
      <polyline points="6,9 8,11 12,7" stroke="#C41E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

export default function AboutCTA({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const innerRef   = useRef(null)
  const itemRefs   = useRef([])

  const localePath = (href) => '/' + locale + href

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%' }
      gsap.fromTo(innerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.4 + i * 0.1, scrollTrigger: st }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <div style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Background image with overlay */}
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
          alt=""
          aria-hidden="true"
          width={1800} height={900} loading="lazy"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.06,
            display: 'block',
          }}
        />

        <div
          ref={innerRef}
          style={{
            position: 'relative', zIndex: 2,
            padding: 'clamp(72px, 10vw, 140px) clamp(24px, 6vw, 96px)',
            display: 'flex', flexDirection: 'column',
            alignItems: isRTL ? 'flex-end' : 'flex-start',
            opacity: 0,
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
            fontSize: 'clamp(2.6rem, 6vw, 6.5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#0A0A0A',
            lineHeight: 1.0, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
            marginBottom: '32px',
          }}>
            {content.heading}
          </h2>

          <p style={{
            fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            color: '#666', lineHeight: 1.8,
            maxWidth: '520px', marginBottom: '48px',
          }}>
            {content.sub}
          </p>

          {/* CTA row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '56px' }}>
            <Link
              href={localePath('/contact')}
              className="acta-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                padding: '16px 40px',
                backgroundColor: '#C41E1E', color: '#FFFFFF',
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {content.cta1}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link
              href={localePath('/services')}
              className="acta-ghost"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                padding: '15px 36px',
                backgroundColor: 'transparent', color: '#0A0A0A',
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                border: '1px solid rgba(10,10,10,0.2)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {content.cta2}
            </Link>
          </div>

          {/* Trust items */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            {content.items.map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0 }}
              >
                {CTAIcons[item.icon]}
                <span style={{
                  fontSize: '12px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 300, color: '#888', letterSpacing: '0.04em',
                }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .acta-primary:hover {
          background-color: #A01515 !important;
          transform: translateY(-1px);
        }
        .acta-ghost:hover {
          background-color: rgba(10,10,10,0.05) !important;
          border-color: rgba(10,10,10,0.4) !important;
        }
      `}</style>
    </section>
  )
}