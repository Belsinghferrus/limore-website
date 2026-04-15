'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Services',
    heading: 'Choose Your\nService',
    services: [
      {
        number: '01',
        title: 'Airport\nTransfers',
        sub: 'Private arrivals, departures and connections across eight international airports.',
        detail: 'Flight tracking, meet and greet, name board, luggage handling, fixed pricing — no metered surprises.',
        href: '/services/airport-transfers',
        cta: 'View Service',
        tags: ['Arrivals', 'Departures', 'Connections'],
        img: '/images/limore14.jpg',
        imgAlt: 'Airport transfer luxury chauffeur — Limore',
      },
      {
        number: '02',
        title: 'Corporate\nChauffeur',
        sub: 'Dedicated chauffeur services for executives, boards and visiting delegations.',
        detail: 'Hourly, daily, and multi-day engagements. Confidential. On time. Consistent across cities.',
        href: '/services/corporate-chauffeur',
        cta: 'View Service',
        tags: ['Hourly', 'Daily', 'Multi-City'],
        img: '/images/limore2.jpg',
        imgAlt: 'Corporate chauffeur service — Limore',
      },
      {
        number: '03',
        title: 'Roadshows\n& Events',
        sub: 'Ground transport logistics for investor roadshows, product launches, and UHNW events.',
        detail: 'Multi-vehicle fleets, advance route planning, on-site transport management, and full event coordination.',
        href: '/services/roadshows-events',
        cta: 'View Service',
        tags: ['Roadshows', 'Product Launches', 'VIP Events'],
        img: '/images/events.jpg',
        imgAlt: 'Event transport logistics — Limore',
      },
      {
        number: '04',
        title: 'Private Jet\nTransfers',
        sub: 'Tarmac-to-destination transfers with direct FBO coordination and airside staging.',
        detail: 'Standing FBO relationships in all eight cities. Vehicle on apron before wheels down. Zero gap.',
        href: '/services/private-jet-transfers',
        cta: 'View Service',
        tags: ['FBO Access', 'Tarmac', 'Airside'],
        img: '/images/limore13.jpg',
        imgAlt: 'Private jet tarmac transfer — Limore',
      },
    ],
  },
  ar: {
    label: 'الخدمات',
    heading: 'اختر\nخدمتك',
    services: [
      {
        number: '01', title: 'نقل\nالمطار',
        sub: 'وصول وإقلاع وتحويل خاص عبر ثمانية مطارات دولية.',
        detail: 'تتبع الرحلات، استقبال وترحيب، لافتة الاسم، معالجة الأمتعة، تسعير ثابت.',
        href: '/services/airport-transfers', cta: 'عرض الخدمة',
        tags: ['وصول', 'إقلاع', 'تحويل'],
        img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80',
        imgAlt: 'نقل المطار الفاخر — ليمور',
      },
      {
        number: '02', title: 'السائق\nالمؤسسي',
        sub: 'خدمات سائق مخصصة للمديرين التنفيذيين والمجالس والوفود الزائرة.',
        detail: 'مشاركات بالساعة واليومية ومتعددة الأيام. سرية. في الوقت المحدد. متسق عبر المدن.',
        href: '/services/corporate-chauffeur', cta: 'عرض الخدمة',
        tags: ['بالساعة', 'يومي', 'متعدد المدن'],
        img: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=900&q=80',
        imgAlt: 'خدمة السائق المؤسسي — ليمور',
      },
      {
        number: '03', title: 'جولات الترويج\nوالفعاليات',
        sub: 'لوجستيات النقل الأرضي لجولات المستثمرين وإطلاق المنتجات وفعاليات UHNW.',
        detail: 'أساطيل متعددة المركبات، تخطيط مسبق للمسارات، إدارة النقل في الموقع.',
        href: '/services/roadshows-events', cta: 'عرض الخدمة',
        tags: ['جولات ترويج', 'إطلاق منتجات', 'فعاليات VIP'],
        img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80',
        imgAlt: 'لوجستيات نقل الفعاليات — ليمور',
      },
      {
        number: '04', title: 'نقل الطائرات\nالخاصة',
        sub: 'نقل من المدرج إلى الوجهة مع تنسيق مباشر لمجمع الطيران وتوقع جوي.',
        detail: 'علاقات قائمة مع مجمعات الطيران في جميع المدن الثماني. المركبة على الساحة قبل الهبوط.',
        href: '/services/private-jet-transfers', cta: 'عرض الخدمة',
        tags: ['وصول FBO', 'مدرج', 'جوي'],
        img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&q=80',
        imgAlt: 'نقل مدرج الطائرة الخاصة — ليمور',
      },
    ],
  },
  fr: {
    label: 'Services',
    heading: 'Choisissez\nVotre Service',
    services: [
      {
        number: '01', title: 'Transferts\nAéroport',
        sub: 'Arrivées, départs et correspondances privés dans huit aéroports internationaux.',
        detail: 'Suivi de vol, accueil, panneau nominatif, gestion des bagages, tarification fixe.',
        href: '/services/airport-transfers', cta: 'Voir le Service',
        tags: ['Arrivées', 'Départs', 'Correspondances'],
        img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80',
        imgAlt: 'Transfert aéroport chauffeur luxe — Limore',
      },
      {
        number: '02', title: 'Chauffeur\nCorporate',
        sub: 'Services chauffeur dédiés pour dirigeants, conseils d\'administration et délégations.',
        detail: 'Engagements à l\'heure, journaliers et multi-jours. Confidentiel. Ponctuel. Cohérent.',
        href: '/services/corporate-chauffeur', cta: 'Voir le Service',
        tags: ['Horaire', 'Journalier', 'Multi-Ville'],
        img: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=900&q=80',
        imgAlt: 'Service chauffeur corporate — Limore',
      },
      {
        number: '03', title: 'Roadshows\net Événements',
        sub: 'Logistique de transport terrestre pour roadshows, lancements de produits et événements UHNW.',
        detail: 'Flottes multi-véhicules, planification d\'itinéraires, gestion transport sur site.',
        href: '/services/roadshows-events', cta: 'Voir le Service',
        tags: ['Roadshows', 'Lancements', 'Événements VIP'],
        img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80',
        imgAlt: 'Logistique transport événementiel — Limore',
      },
      {
        number: '04', title: 'Transferts\nJet Privé',
        sub: 'Transferts tarmac-destination avec coordination FBO directe et positionnement côté piste.',
        detail: 'Relations FBO permanentes dans les huit villes. Véhicule sur aire avant l\'atterrissage.',
        href: '/services/private-jet-transfers', cta: 'Voir le Service',
        tags: ['Accès FBO', 'Tarmac', 'Côté Piste'],
        img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&q=80',
        imgAlt: 'Transfert tarmac jet privé — Limore',
      },
    ],
  },
}

export default function ServicesGrid({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const lp         = (href) => `/${locale}${href}`
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      cardRefs.current.forEach((el) => {
        if (!el) return
        const img = el.querySelector('.sg-img')
        gsap.fromTo(el,
          { opacity: 0, y: 36 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%' },
          }
        )
        // Hover parallax on image
        el.addEventListener('mouseenter', () => {
          gsap.to(img, { scale: 1.05, duration: 0.7, ease: 'power2.out' })
        })
        el.addEventListener('mouseleave', () => {
          gsap.to(img, { scale: 1, duration: 0.7, ease: 'power2.out' })
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services-grid"
      style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px) clamp(40px, 5vw, 56px)',
          borderBottom: '1px solid #EBEBEB',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '20px', opacity: 0,
        }}
      >
        <div>
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
            fontSize: 'clamp(2.4rem, 5vw, 6rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400, color: '#0A0A0A',
            lineHeight: 1.0, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        {/* Count */}
        <span style={{
          fontSize: 'clamp(4rem, 9vw, 10rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, color: '#F2F2F2',
          lineHeight: 1, letterSpacing: '-0.04em',
          userSelect: 'none',
        }}>
          04
        </span>
      </div>

      {/* Grid — 2 col on desktop */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1px',
        backgroundColor: '#EBEBEB',
        padding: '1px',
      }}>
        {content.services.map((svc, i) => (
          <Link
            key={i}
            href={lp(svc.href)}
            ref={(el) => (cardRefs.current[i] = el)}
            className="sg-card"
            style={{
              display: 'flex', flexDirection: 'column',
              textDecoration: 'none',
              backgroundColor: '#FFFFFF',
              overflow: 'hidden',
              opacity: 0,
              cursor: 'pointer',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
              <img
                src={svc.img}
                alt={svc.imgAlt}
                width={900} height={506}
                loading="lazy"
                className="sg-img"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 0.7s ease',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent 60%)',
                pointerEvents: 'none',
              }} />
              {/* Number overlay */}
              <span style={{
                position: 'absolute',
                top: '16px',
                right: isRTL ? 'auto' : '18px',
                left: isRTL ? '18px' : 'auto',
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em',
                color: 'rgba(248,247,244,0.35)',
              }}>
                {svc.number}
              </span>
            </div>

            {/* Body */}
            <div style={{ padding: 'clamp(24px, 3vw, 36px)', flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {svc.tags.map((tag, j) => (
                  <span key={j} style={{
                    fontSize: '9px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 500, letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: j === 0 ? '#C41E1E' : '#BBBBBB',
                    border: `1px solid ${j === 0 ? 'rgba(196,30,30,0.2)' : '#EBEBEB'}`,
                    padding: '4px 9px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#0A0A0A',
                lineHeight: 1.05, whiteSpace: 'pre-line',
                letterSpacing: '-0.01em', marginBottom: '12px',
              }}>
                {svc.title}
              </h3>

              {/* Sub */}
              <p style={{
                fontSize: '13px', fontFamily: 'Inter, sans-serif',
                fontWeight: 400, color: '#666', lineHeight: 1.7,
                marginBottom: '10px',
              }}>
                {svc.sub}
              </p>

              {/* Detail */}
              <p style={{
                fontSize: '12px', fontFamily: 'Inter, sans-serif',
                fontWeight: 300, color: '#AAAAAA', lineHeight: 1.7,
                marginBottom: '28px', flex: 1,
              }}>
                {svc.detail}
              </p>

              {/* CTA row */}
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '18px',
                borderTop: '1px solid #F0F0F0',
              }}>
                <span style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: '#C41E1E',
                  transition: 'letter-spacing 0.2s ease',
                }}
                  className="sg-cta-text"
                >
                  {svc.cta}
                </span>
                <div style={{
                  width: '28px', height: '28px',
                  border: '1px solid rgba(196,30,30,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background-color 0.2s, border-color 0.2s',
                }}
                  className="sg-arrow-box"
                >
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden="true">
                    <path d="M1 4h9M6 1l3 3-3 3" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .sg-card:hover .sg-arrow-box {
          background-color: #C41E1E !important;
          border-color: #C41E1E !important;
        }
        .sg-card:hover .sg-arrow-box svg path { stroke: #fff; }
        .sg-card:hover .sg-cta-text { letter-spacing: 0.28em !important; }
      `}</style>
    </section>
  )
}