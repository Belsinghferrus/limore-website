'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'What We Do',
    heading: 'Services Built for\nPrecision and Comfort',
    sub: 'Four specialised service lines. One global standard.',
    services: [
      {
        number: '01',
        title: 'Airport Transfers',
        description: 'Flight-tracked pickups, meet and greet, and seamless terminal connections in every city we operate.',
        tag: 'Available 24/7',
        href: '/services/airport-transfers',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85',
      },
      {
        number: '02',
        title: 'Corporate Chauffeur',
        description: 'Dedicated account managers, monthly billing, and standardised service across all global offices.',
        tag: 'Corporate Accounts',
        href: '/services/corporate-chauffeur',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=85',
      },
      {
        number: '03',
        title: 'Roadshows & Events',
        description: 'Multi-city roadshow logistics, event transportation, and VIP movement management at scale.',
        tag: 'Multi-City',
        href: '/services/roadshows-events',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85',
      },
      {
        number: '04',
        title: 'Private Jet Transfers',
        description: 'FBO to destination in complete privacy. Trusted partner of Jetex and leading private aviation operators.',
        tag: 'Private Aviation',
        href: '/services/private-jet-transfers',
        image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&q=85',
      },
    ],
    cta: 'View All Services',
    learnMore: 'Explore',
  },
  ar: {
    label: 'ما نقدمه',
    heading: 'خدمات مصممة\nللدقة والراحة',
    sub: 'أربعة خطوط خدمات متخصصة. معيار عالمي واحد.',
    services: [
      { number: '01', title: 'نقل المطار', description: 'استقبال متابع للرحلات وخدمة الاستقبال في كل مدينة.', tag: 'متاح 24/7', href: '/services/airport-transfers', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85' },
      { number: '02', title: 'سائق مؤسسي', description: 'مديرو حسابات مخصصون وخدمة موحدة في جميع المكاتب.', tag: 'حسابات مؤسسية', href: '/services/corporate-chauffeur', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=85' },
      { number: '03', title: 'فعاليات وعروض ترويجية', description: 'لوجستيات الجولات متعددة المدن وإدارة حركة كبار الشخصيات.', tag: 'متعدد المدن', href: '/services/roadshows-events', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85' },
      { number: '04', title: 'نقل الطائرات الخاصة', description: 'من الطائرة إلى الوجهة بخصوصية تامة. شريك موثوق لـ Jetex.', tag: 'طيران خاص', href: '/services/private-jet-transfers', image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&q=85' },
    ],
    cta: 'جميع الخدمات',
    learnMore: 'استكشاف',
  },
  fr: {
    label: 'Nos Services',
    heading: 'Services Conçus pour\nla Précision et le Confort',
    sub: 'Quatre lignes de services spécialisées. Un standard mondial.',
    services: [
      { number: '01', title: 'Transferts Aéroport', description: 'Prise en charge avec suivi de vol et accueil dans chaque ville.', tag: 'Disponible 24/7', href: '/services/airport-transfers', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85' },
      { number: '02', title: 'Chauffeur Corporate', description: 'Gestionnaires dédiés, facturation mensuelle, service standardisé.', tag: 'Comptes Corporate', href: '/services/corporate-chauffeur', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=85' },
      { number: '03', title: 'Roadshows & Événements', description: 'Logistique multi-villes et gestion des déplacements VIP.', tag: 'Multi-Villes', href: '/services/roadshows-events', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85' },
      { number: '04', title: 'Transferts Jet Privé', description: 'Du FBO à destination en toute discrétion. Partenaire de Jetex.', tag: 'Aviation Privée', href: '/services/private-jet-transfers', image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&q=85' },
    ],
    cta: 'Voir Tous les Services',
    learnMore: 'Explorer',
  },
}

export default function ServicesSection({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'

  const sectionRef  = useRef(null)
  const headerRef   = useRef(null)
  const ruleRef     = useRef(null)
  const cardsRef    = useRef([])
  const imgRefs     = useRef([])

  const localePath = (href) => '/' + locale + href

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Top rule */
      gsap.fromTo(ruleRef.current,
        { scaleX: 0, transformOrigin: isRTL ? 'right center' : 'left center' },
        { scaleX: 1, duration: 1.4, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )

      /* Header */
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } }
      )

      /* Cards — staggered slide up */
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
          }
        )
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  /* Mouse parallax on card images */
  function handleCardMouseMove(e, i) {
    const img = imgRefs.current[i]
    if (!img) return
    const card = cardsRef.current[i]
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    gsap.to(img, { x, y, duration: 0.6, ease: 'power2.out' })
  }

  function handleCardMouseLeave(i) {
    gsap.to(imgRefs.current[i], { x: 0, y: 0, duration: 0.6, ease: 'power2.out' })
  }

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#F8F7F4',
        direction: isRTL ? 'rtl' : 'ltr',
        overflow: 'hidden',
      }}
    >

      {/* ── TOP RULE ── */}
      <div
        ref={ruleRef}
        style={{ width: '100%', height: '1px', backgroundColor: '#E5E4E0' }}
      />

      {/* ── HEADER — full bleed, split layout ── */}
      <div
        ref={headerRef}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          padding: 'clamp(48px, 7vw, 96px) clamp(24px, 6vw, 96px) clamp(36px, 5vw, 64px)',
          borderBottom: '1px solid #E5E4E0',
          opacity: 0,
        }}
      >
        {/* Left */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400,
            color: '#0A0A0A',
            lineHeight: 1.02,
            whiteSpace: 'pre-line',
            letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>

        {/* Right */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isRTL ? 'flex-start' : 'flex-end',
          gap: '24px',
        }}>
          <p style={{
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            color: '#888',
            letterSpacing: '0.04em',
            textAlign: isRTL ? 'left' : 'right',
          }}>
            {content.sub}
          </p>
          <Link
            href={localePath('/services')}
            className="ss-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '13px 32px',
              border: '1px solid #0A0A0A',
              color: '#0A0A0A',
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {content.cta}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ── SERVICES GRID — full bleed, 2px gap ── */}
      {/*
          Desktop layout:
          ┌──────────────┬───────────┬───────────┐
          │   01 LARGE   │  02 TOP   │  03 TOP   │
          │  (span 2 row)├───────────┼───────────┤
          │              │  04 BTM   │  (empty→  │
          └──────────────┴───────────┘   CTA)    │
          Actually: 2 rows × 3 cols, card 01 spans rows
          Cleaner: 4-col equal on desktop, 2-col on tablet
      */}
      <div className="ss-grid">
        {content.services.map((service, i) => (
          <Link
            key={i}
            href={localePath(service.href)}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`ss-card ${i === 0 ? 'ss-card-featured' : ''}`}
            style={{
              display: 'block',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#0A0A0A',
              opacity: 0,
            }}
            onMouseMove={(e) => handleCardMouseMove(e, i)}
            onMouseLeave={() => handleCardMouseLeave(i)}
            aria-label={service.title}
          >
            {/* Image */}
            <div style={{
              position: 'absolute',
              inset: '-8%',
              willChange: 'transform',
            }}
              ref={(el) => (imgRefs.current[i] = el)}
            >
              <img
                src={service.image}
                alt={service.title}
                width={900}
                height={700}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.4,
                  transition: 'opacity 0.5s ease',
                  display: 'block',
                }}
                className="ss-card-img"
              />
            </div>

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(160deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.88) 70%)',
              zIndex: 1,
              transition: 'opacity 0.4s ease',
            }}
              className="ss-card-overlay"
            />

            {/* Content */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              padding: 'clamp(24px, 3vw, 40px)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>

              {/* Top row — number + tag */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  color: '#C41E1E',
                }}>
                  {service.number}
                </span>
                <span style={{
                  fontSize: '9px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.4)',
                  border: '1px solid rgba(248,247,244,0.15)',
                  padding: '4px 10px',
                }}>
                  {service.tag}
                </span>
              </div>

              {/* Bottom — title + desc + cta */}
              <div>
                <h3 style={{
                  fontSize: i === 0
                    ? 'clamp(1.6rem, 3vw, 2.6rem)'
                    : 'clamp(1.2rem, 2vw, 1.6rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400,
                  color: '#F8F7F4',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                  letterSpacing: '0.01em',
                }}>
                  {service.title}
                </h3>

                <p
                  className="ss-card-desc"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    color: 'rgba(248,247,244,0.5)',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                    maxWidth: '340px',
                  }}
                >
                  {service.description}
                </p>

                {/* Arrow CTA */}
                <div
                  className="ss-card-arrow"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '10px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(248,247,244,0.7)',
                    transition: 'color 0.3s ease, gap 0.3s ease',
                    paddingBottom: '3px',
                    borderBottom: '1px solid rgba(248,247,244,0.2)',
                  }}
                >
                  {content.learnMore}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true" className="ss-arrow-svg">
                    <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── BOTTOM RULE ── */}
      <div style={{ width: '100%', height: '1px', backgroundColor: '#E5E4E0' }} />

      <style>{`
        .ss-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background-color: #E5E4E0;
        }
        @media (max-width: 640px) {
          .ss-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 1024px) {
          .ss-grid {
            grid-template-columns: 1.6fr 1fr 1fr 1fr;
          }
          .ss-card-featured {
            grid-row: span 1;
          }
        }

        /* Card heights */
        .ss-card {
          min-height: 380px;
        }
        .ss-card-featured {
          min-height: 500px;
        }
        @media (min-width: 1024px) {
          .ss-card { min-height: 520px; }
          .ss-card-featured { min-height: 520px; }
        }

        /* Hover states */
        .ss-card:hover .ss-card-img {
          opacity: 0.6 !important;
        }
        .ss-card:hover .ss-card-overlay {
          opacity: 0.7 !important;
        }
        .ss-card:hover .ss-card-arrow {
          color: #F8F7F4 !important;
          gap: 16px !important;
          border-bottom-color: rgba(196,30,30,0.6) !important;
        }
        .ss-card:hover .ss-card-desc {
          color: rgba(248,247,244,0.65) !important;
        }

        /* Header CTA */
        .ss-cta:hover {
          background-color: #0A0A0A !important;
          color: #F8F7F4 !important;
        }
      `}</style>
    </section>
  )
}