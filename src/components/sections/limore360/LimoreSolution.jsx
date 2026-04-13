'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

// ─── Translations ──────────────────────────────────────────────────────────────
const t = {
  en: {
    eyebrow: 'Our Solutions',
    headline: 'Everything Your\nOrganisation Needs.',
    sub: 'From a single journey to a fully managed corporate programme - Limore delivers across every dimension of executive mobility and lifestyle.',
    cta: 'Learn More',
    solutions: [
      {
        id: 'relocation',
        title: 'Relocation',
        desc: 'Seamless door-to-door relocation logistics for executives, families, and corporate teams. We manage every detail — from vehicle coordination to interim accommodation transfers.',
        tags: ['Executive Moves', 'Family Relocation', 'International'],
        img: '/images/limore1.jpg',
        size: 'large',
      },
      {
        id: 'events',
        title: 'Corporate Event Management',
        desc: 'End-to-end planning and execution of corporate events, gala dinners, board retreats, and brand activations. Precision logistics, curated venues, flawless delivery.',
        tags: ['Galas', 'Conferences', 'Retreats'],
        img: '/images/corporate1.jpg',
        size: 'medium',
      },
      {
        id: 'recreation',
        title: 'Staff Recreation',
        desc: 'Curated experiences that reward and energise your team — yacht days, city escapes, team retreats, and bespoke group activities designed for high-performing organisations.',
        tags: ['Team Retreats', 'Yacht Days', 'Group Experiences'],
        img: '/images/corporate2.jpg',
        size: 'medium',
      },
      {
        id: 'rental',
        title: 'Car Rental & Mobility Solutions',
        desc: 'A curated fleet of premium and ultra-luxury vehicles available on demand. Daily, weekly, or monthly engagements with full-service delivery and collection.',
        tags: ['Premium Fleet', 'On-Demand', 'Long-Term'],
        img: '/images/limmore16.jpg',
        size: 'wide',
      },
      {
        id: 'travel',
        title: 'Tailor Made Travel Planning',
        desc: 'Private jet coordination, villa bookings, bespoke itineraries, and on-the-ground concierge for individuals and families who expect more than a standard travel package.',
        tags: ['Private Jet', 'Bespoke Itineraries', 'Concierge'],
        img: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e2d1e147a41fe4e662931064017c1c41778c27b0.jpg',
        size: 'large',
      },
      {
        id: 'investments',
        title: 'Investments',
        desc: 'Access to curated real estate, hospitality, and mobility investment opportunities. Structured for UHNW individuals and family offices seeking strategic asset diversification.',
        tags: ['Real Estate', 'Family Office', 'UHNW'],
        img: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f28a964a59460e7985aed60fb5a8a19ce378699d.jpg',
        size: 'medium',
      },
      {
        id: 'fleet',
        title: 'Luxury Fleet Management',
        desc: 'Full-spectrum fleet management for corporates and private clients — maintenance scheduling, driver management, insurance oversight, and asset optimisation.',
        tags: ['Fleet Operations', 'Asset Management', 'Driver Services'],
        img: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8718aab1f0a4d510f974708fdcbfcdd431080d27.jpg',
        size: 'medium',
      },
    ],
  },
  ar: {
    eyebrow: 'حلولنا',
    headline: 'كل ما تحتاجه\nمؤسستك.',
    sub: 'من رحلة واحدة إلى برنامج مؤسسي متكامل — ليمور تُقدّم خدماتها عبر كل أبعاد التنقل التنفيذي.',
    cta: 'اعرف المزيد',
    solutions: [
      { id: 'relocation', title: 'الانتقال', desc: 'لوجستيات انتقال سلسة من الباب إلى الباب للمديرين والعائلات والفرق المؤسسية.', tags: ['انتقالات تنفيذية', 'عائلية', 'دولية'], img: '/images/limore1.jpg', size: 'large' },
      { id: 'events', title: 'إدارة الفعاليات المؤسسية', desc: 'تخطيط وتنفيذ شامل للفعاليات المؤسسية وحفلات العشاء وملتقيات مجالس الإدارة.', tags: ['حفلات', 'مؤتمرات', 'ملتقيات'], img: '/images/corporate1.jpg', size: 'medium' },
      { id: 'recreation', title: 'ترفيه الموظفين', desc: 'تجارب مُختارة تُكافئ فريقك — أيام يخوت، رحلات جماعية، وفعاليات مصممة للفرق عالية الأداء.', tags: ['رحلات', 'يخوت', 'مجموعات'], img: '/images/corporate2.jpg', size: 'medium' },
      { id: 'rental', title: 'تأجير السيارات وحلول التنقل', desc: 'أسطول مُختار من المركبات الفاخرة المتاحة عند الطلب — يومي أو أسبوعي أو شهري.', tags: ['أسطول متميز', 'عند الطلب', 'طويل الأمد'], img: '/images/limmore16.jpg', size: 'wide' },
      { id: 'travel', title: 'تخطيط سفر مخصص', desc: 'تنسيق الطيران الخاص وحجوزات الفيلات وبرامج السفر المصممة خصيصاً مع خدمة الكونسيرج.', tags: ['طيران خاص', 'برامج مخصصة', 'كونسيرج'], img: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e2d1e147a41fe4e662931064017c1c41778c27b0.jpg', size: 'large' },
      { id: 'investments', title: 'الاستثمارات', desc: 'فرص استثمارية مُختارة في العقارات والضيافة والتنقل لأصحاب الثروات والمكاتب العائلية.', tags: ['عقارات', 'مكاتب عائلية', 'ثروات عالية'], img: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f28a964a59460e7985aed60fb5a8a19ce378699d.jpg', size: 'medium' },
      { id: 'fleet', title: 'إدارة أسطول فاخر', desc: 'إدارة أسطول شاملة للشركات والعملاء الخاصين — صيانة، إدارة سائقين، إشراف على التأمين.', tags: ['عمليات الأسطول', 'إدارة الأصول', 'خدمات السائقين'], img: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8718aab1f0a4d510f974708fdcbfcdd431080d27.jpg', size: 'medium' },
    ],
  },
  fr: {
    eyebrow: 'Nos Solutions',
    headline: 'Tout ce dont votre\nOrganisation a Besoin.',
    sub: 'D\'un seul trajet à un programme corporate entièrement géré — Limore intervient sur chaque dimension de la mobilité executive.',
    cta: 'En savoir plus',
    solutions: [
      { id: 'relocation', title: 'Relocation', desc: 'Logistique de relocation de bout en bout pour dirigeants, familles et équipes corporate. Chaque détail est géré.', tags: ['Déménagements Exécutifs', 'Famille', 'International'], img: '/images/limore1.jpg', size: 'large' },
      { id: 'events', title: 'Gestion d\'Événements Corporate', desc: 'Planification et exécution complètes d\'événements corporate, galas, retraites de direction et activations de marque.', tags: ['Galas', 'Conférences', 'Retraites'], img: '/images/corporate1.jpg', size: 'medium' },
      { id: 'recreation', title: 'Loisirs du Personnel', desc: 'Expériences sur-mesure pour récompenser vos équipes — journées yachts, escapades urbaines, retraites de groupe.', tags: ['Retraites', 'Journées Yacht', 'Groupes'], img: '/images/corporate2.jpg', size: 'medium' },
      { id: 'rental', title: 'Location & Solutions de Mobilité', desc: 'Une flotte de véhicules premium et ultra-luxe disponible à la demande. Engagements journaliers, hebdomadaires ou mensuels.', tags: ['Flotte Premium', 'À la Demande', 'Long Terme'], img: '/images/limmore16.jpg', size: 'wide' },
      { id: 'travel', title: 'Voyage Sur Mesure', desc: 'Coordination de jets privés, réservations de villas, itinéraires sur mesure et conciergerie sur place.', tags: ['Jet Privé', 'Itinéraires', 'Conciergerie'], img: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/e2d1e147a41fe4e662931064017c1c41778c27b0.jpg', size: 'large' },
      { id: 'investments', title: 'Investissements', desc: 'Accès à des opportunités d\'investissement dans l\'immobilier, l\'hôtellerie et la mobilité pour UHNW et family offices.', tags: ['Immobilier', 'Family Office', 'UHNW'], img: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/f28a964a59460e7985aed60fb5a8a19ce378699d.jpg', size: 'medium' },
      { id: 'fleet', title: 'Gestion de Flotte Luxe', desc: 'Gestion complète de flotte pour entreprises et clients privés — maintenance, chauffeurs, assurance, optimisation d\'actifs.', tags: ['Opérations', 'Gestion d\'Actifs', 'Chauffeurs'], img: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/8718aab1f0a4d510f974708fdcbfcdd431080d27.jpg', size: 'medium' },
    ],
  },
}

// ─── Arrow icon ────────────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path d="M1 4h10M7 1l4 3-4 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── Single solution card ──────────────────────────────────────────────────────
function SolutionCard({ solution, locale, isRTL, cardRef }) {
  const [hovered, setHovered] = useState(false)
  const lp = (href) => `/${locale}${href}`

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`limore-sol-card limore-sol-card--${solution.size}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0D0D0D',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        opacity: 0,
        cursor: 'pointer',
        // grid-span handled via className + CSS
      }}
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: solution.size === 'large' ? 'clamp(220px, 28vw, 340px)'
          : solution.size === 'wide' ? 'clamp(180px, 22vw, 260px)'
            : 'clamp(160px, 20vw, 220px)',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <img
          src={solution.img}
          alt={solution.title}

          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            filter: hovered ? 'brightness(0.75)' : 'brightness(0.6)',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(13,13,13,0.85) 100%)',
          pointerEvents: 'none',
        }} />
        {/* Number badge */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: isRTL ? 'auto' : '16px',
          right: isRTL ? '16px' : 'auto',
          fontSize: '9px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.2em',
          color: '#C8102E',
          backgroundColor: 'rgba(13,13,13,0.75)',
          backdropFilter: 'blur(4px)',
          padding: '4px 10px',
          border: '1px solid rgba(200,16,46,0.3)',
        }}>
          {String(t.en.solutions.findIndex(s => s.id === solution.id) + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div style={{
        padding: 'clamp(18px, 2.5vw, 26px) clamp(18px, 2.5vw, 26px)',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '10px',
        direction: isRTL ? 'rtl' : 'ltr',
      }}>
        {/* Title */}
        <h3 style={{
          fontSize: 'clamp(1rem, 2vw, 1.35rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 400,
          color: '#F8F7F4',
          lineHeight: 1.15,
          letterSpacing: '-0.01em',
          margin: 0,
          transition: 'color 0.25s ease',
        }}>
          {solution.title}
        </h3>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {solution.tags.map((tag, i) => (
            <span key={i} style={{
              fontSize: '8px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(200,16,46,0.8)',
              padding: '3px 8px',
              border: '1px solid rgba(200,16,46,0.2)',
              backgroundColor: 'rgba(200,16,46,0.05)',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          margin: '2px 0',
        }} />

        {/* Description */}
        <p style={{
          fontSize: 'clamp(0.78rem, 1.1vw, 0.87rem)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300,
          color: 'rgba(248,247,244,0.38)',
          lineHeight: 1.85,
          margin: 0,
          flex: 1,
        }}>
          {solution.desc}
        </p>

        {/* CTA link */}
        <Link
          href={lp(`/solutions/${solution.id}`)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '9px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: hovered ? '#C8102E' : 'rgba(248,247,244,0.3)',
            textDecoration: 'none',
            transition: 'color 0.25s ease',
            marginTop: '4px',
            alignSelf: isRTL ? 'flex-end' : 'flex-start',
          }}
          onClick={e => e.stopPropagation()}
        >
          <span>{t[locale]?.cta || t.en.cta}</span>
          <ArrowIcon />
        </Link>
      </div>

      {/* Bottom red accent line — reveals on hover */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: '#C8102E',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: isRTL ? 'right' : 'left',
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
      }} />
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function LimoreSolutions({ locale = 'en' }) {
  const c = t[locale] || t.en
  const isRTL = locale === 'ar'
  const secRef = useRef(null)
  const headRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 82%' }
        }
      )
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
            delay: (i % 3) * 0.1,
            scrollTrigger: { trigger: el, start: 'top 90%' }
          }
        )
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secRef}
      id="solutions"
      style={{
        backgroundColor: '#080808',
        padding: 'clamp(64px, 10vw, 120px) clamp(20px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle red top border */}
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(200,16,46,0.55), transparent)',
        pointerEvents: 'none',
      }} />

      {/* ── Header ── */}
      <div
        ref={headRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(24px, 4vw, 64px)',
          alignItems: 'end',
          marginBottom: 'clamp(44px, 7vw, 72px)',
          opacity: 0,
        }}
      >
        {/* Left — eyebrow + headline */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C8102E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#C8102E',
            }}>
              {c.eyebrow}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 5.5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 0.93, letterSpacing: '-0.025em',
            margin: 0,
            whiteSpace: 'pre-line',
          }}>
            {c.headline}
          </h2>
        </div>

        {/* Right — sub copy + count */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{
            fontSize: 'clamp(0.84rem, 1.3vw, 0.97rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            color: 'rgba(248,247,244,0.35)', lineHeight: 1.9, margin: 0,
            maxWidth: '440px',
          }}>
            {c.sub}
          </p>
          {/* Solution count pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            alignSelf: isRTL ? 'flex-end' : 'flex-start',
          }}>
            <span style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 300, color: '#C8102E', lineHeight: 1,
            }}>
              07
            </span>
            <span style={{
              fontSize: '9px', fontFamily: 'Inter, sans-serif',
              fontWeight: 400, letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(248,247,244,0.2)',
              lineHeight: 1.4, maxWidth: '80px',
            }}>
              Service Verticals
            </span>
          </div>
        </div>
      </div>

      {/* ── Bento grid ── */}
      <div className="limore-sol-grid">
        {c.solutions.map((solution, i) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            locale={locale}
            isRTL={isRTL}
            cardRef={el => (cardRefs.current[i] = el)}
          />
        ))}
      </div>

      {/* ── CSS ── */}
      <style>{`
        /* Bento grid — 3 col desktop */
        .limore-sol-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* Size modifiers */
        .limore-sol-card--large  { grid-column: span 1; }
        .limore-sol-card--medium { grid-column: span 1; }
        .limore-sol-card--wide   { grid-column: span 3; }

        /*
          Row layout intent:
          Row 1: Relocation (large) | Events (medium) | Recreation (medium)
          Row 2: Car Rental (wide — full width)
          Row 3: Travel (large) | Investments (medium) | Fleet (medium)
        */

        /* Tablet — 2 col */
        @media (max-width: 900px) {
          .limore-sol-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .limore-sol-card--large  { grid-column: span 1; }
          .limore-sol-card--wide   { grid-column: span 2; }
        }

        /* Mobile — 1 col */
        @media (max-width: 580px) {
          .limore-sol-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .limore-sol-card--large,
          .limore-sol-card--medium,
          .limore-sol-card--wide {
            grid-column: span 1;
          }
        }

        /* Card focus-visible ring */
        .limore-sol-card:focus-visible {
          outline: 2px solid #C8102E;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  )
}