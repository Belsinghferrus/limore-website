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
    services: [
      {
        number: '01',
        title: 'Airport Transfers',
        description: 'Flight-tracked pickups, meet and greet, and seamless terminal connections in every city we operate.',
        href: '/services/airport-transfers',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      },
      {
        number: '02',
        title: 'Corporate Chauffeur',
        description: 'Dedicated account managers, monthly billing, and standardized service across all global offices.',
        href: '/services/corporate-chauffeur',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
      },
      {
        number: '03',
        title: 'Roadshows & Events',
        description: 'Multi-city roadshow logistics, event transportation, and VIP movement management.',
        href: '/services/roadshows-events',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      },
      {
        number: '04',
        title: 'Private Jet Transfers',
        description: 'FBO to destination in complete privacy. Trusted partner of Jetex and leading private aviation operators.',
        href: '/services/private-jet-transfers',
        image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80',
      },
    ],
    cta: 'View All Services',
  },
  ar: {
    label: 'ما نقدمه',
    heading: 'خدمات مصممة\nللدقة والراحة',
    services: [
      { number: '01', title: 'نقل المطار', description: 'استقبال متابع للرحلات وخدمة الاستقبال والترحيب في كل مدينة نعمل بها.', href: '/services/airport-transfers', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80' },
      { number: '02', title: 'سائق مؤسسي', description: 'مديرو حسابات مخصصون وفواتير شهرية وخدمة موحدة في جميع المكاتب العالمية.', href: '/services/corporate-chauffeur', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80' },
      { number: '03', title: 'فعاليات وعروض ترويجية', description: 'لوجستيات الجولات الترويجية متعددة المدن وادارة حركة كبار الشخصيات.', href: '/services/roadshows-events', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
      { number: '04', title: 'نقل الطائرات الخاصة', description: 'من الطائرة الى الوجهة بخصوصية تامة. شريك موثوق لـ Jetex وكبار مشغلي الطيران الخاص.', href: '/services/private-jet-transfers', image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80' },
    ],
    cta: 'جميع الخدمات',
  },
  fr: {
    label: 'Nos Services',
    heading: 'Services Concus pour\nla Precision et le Confort',
    services: [
      { number: '01', title: 'Transferts Aeroport', description: 'Prise en charge avec suivi de vol, accueil et connexions fluides dans chaque ville.', href: '/services/airport-transfers', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80' },
      { number: '02', title: 'Chauffeur Corporate', description: 'Gestionnaires de compte dedies, facturation mensuelle et service standardise dans tous vos bureaux.', href: '/services/corporate-chauffeur', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80' },
      { number: '03', title: 'Roadshows et Evenements', description: 'Logistique multi-villes, transport evenementiel et gestion des deplacements VIP.', href: '/services/roadshows-events', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
      { number: '04', title: 'Transferts Jet Prive', description: 'Du FBO a destination en toute discretion. Partenaire de confiance de Jetex.', href: '/services/private-jet-transfers', image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80' },
    ],
    cta: 'Voir Tous les Services',
  },
}

export default function ServicesSection({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL = locale === 'ar'
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const localePath = (href) => '/' + locale + href

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        backgroundColor: '#F8F7F4',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div className="container-default">

        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
            <span style={{
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400,
            color: '#0A0A0A',
            lineHeight: 1.1,
            letterSpacing: '0.02em',
            whiteSpace: 'pre-line',
          }}>
            {content.heading}
          </h2>
        </div>

        {/* Services grid */}
        <div className="services-grid">
          {content.services.map((service, i) => (
            <Link
              key={i}
              href={localePath(service.href)}
              ref={(el) => (cardsRef.current[i] = el)}
              className="service-card"
              style={{
                display: 'block',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#0A0A0A',
                aspectRatio: i === 0 ? '4/3' : '1/1',
              }}
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                width={800}
                height={600}
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.45,
                  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                }}
                className="service-card-img"
              />

              {/* Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 60%)',
                zIndex: 1,
              }} />

              {/* Content */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  color: '#C41E1E',
                  marginBottom: '12px',
                  display: 'block',
                }}>
                  {service.number}
                </span>
                <h3 style={{
                  fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 400,
                  color: '#F8F7F4',
                  marginBottom: '10px',
                  lineHeight: 1.2,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  color: 'rgba(248,247,244,0.55)',
                  lineHeight: 1.65,
                  marginBottom: '20px',
                }}>
                  {service.description}
                </p>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C41E1E',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'gap 0.3s ease',
                }}
                  className="service-card-arrow"
                >
                  Learn More <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <Link
            href={localePath('/services')}
            className="view-all-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 36px',
              border: '1px solid #0A0A0A',
              color: '#0A0A0A',
              fontSize: '12px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {content.cta} →
          </Link>
        </div>

      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px;
        }
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: 2fr 1fr 1fr;
            grid-template-rows: auto auto;
          }
          .services-grid > *:first-child {
            grid-row: span 2;
            aspect-ratio: auto !important;
          }
        }
        .service-card:hover .service-card-img {
          transform: scale(1.05);
          opacity: 0.55;
        }
        .view-all-cta:hover {
          background-color: #0A0A0A !important;
          color: #F8F7F4 !important;
        }
      `}</style>
    </section>
  )
}