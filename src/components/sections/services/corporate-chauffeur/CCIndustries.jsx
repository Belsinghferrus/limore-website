'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Who We Serve',
    heading: 'The Organisations\nThat Trust Limore',
    sub: 'We work with companies where the cost of ground transport failure is measured not in inconvenience but in consequences.',
    industries: [
      {
        title: 'Investment Banking and Finance',
        body: 'Roadshow teams, deal-closing travel, and board-level movements require absolute punctuality and confidentiality. We serve the world\'s leading financial institutions.',
        icon: 'finance',
      },
      {
        title: 'Luxury Retail and Fashion',
        body: 'Brand representation does not stop at the showroom door. Clients arriving in a Limore vehicle arrive in a brand-consistent environment.',
        icon: 'luxury',
      },
      {
        title: 'Legal and Professional Services',
        body: 'Counsel, senior partners, and visiting clients are transported with discretion as standard. No conversations are overheard. No routes are shared.',
        icon: 'legal',
      },
      {
        title: 'Technology and Media',
        body: 'Fast-moving organisations with global travel needs. We handle same-day bookings, multiple cities, and high-frequency journeys without operational friction.',
        icon: 'tech',
      },
      {
        title: 'Hospitality and Luxury Hotels',
        body: 'Partner hotels use Limore to extend their service standard beyond the lobby. We are the ground transfer partner of choice for properties that cannot afford an inconsistent arrival experience.',
        icon: 'hotel',
      },
      {
        title: 'Private Equity and Family Offices',
        body: 'Portfolio company visits, LP meetings, and principal travel managed with the level of discretion that private capital requires.',
        icon: 'equity',
      },
    ],
    note: 'If your organisation does not appear here, contact us directly. We work across all sectors.',
  },
  ar: {
    label: 'من نخدم',
    heading: 'المؤسسات التي\nتثق في ليمور',
    sub: 'نعمل مع شركات تُقاس فيها تكلفة فشل النقل البري ليس بعدم الراحة بل بالعواقب.',
    industries: [
      { title: 'الخدمات المصرفية الاستثمارية والمالية', body: 'فرق جولات الترويج والسفر لإغلاق الصفقات تتطلب دقة مطلقة وسرية. نخدم المؤسسات المالية الرائدة في العالم.', icon: 'finance' },
      { title: 'التجزئة الفاخرة والأزياء', body: 'تمثيل العلامة التجارية لا يتوقف عند باب صالة العرض. العملاء الذين يصلون في سيارة ليمور يصلون في بيئة متسقة مع العلامة التجارية.', icon: 'luxury' },
      { title: 'الخدمات القانونية والمهنية', body: 'ينقل المستشارون وكبار الشركاء والعملاء الزائرون بتكتم كامل. لا محادثات تُسمع. لا مسارات تُشارك.', icon: 'legal' },
      { title: 'التكنولوجيا والإعلام', body: 'مؤسسات سريعة الحركة ذات احتياجات سفر عالمية. نتعامل مع الحجوزات في نفس اليوم وعدة مدن.', icon: 'tech' },
      { title: 'الضيافة والفنادق الفاخرة', body: 'تستخدم الفنادق الشريكة ليمور لتمديد معيار خدمتها خارج بهو الفندق. نحن شريك النقل الأرضي المفضل.', icon: 'hotel' },
      { title: 'الأسهم الخاصة والمكاتب العائلية', body: 'زيارات شركات المحفظة ولقاءات الشركاء المحدودين وسفر المديرين الرئيسيين تُدار بمستوى السرية الذي يتطلبه رأس المال الخاص.', icon: 'equity' },
    ],
    note: 'إذا لم تظهر مؤسستك هنا، تواصل معنا مباشرة. نعمل في جميع القطاعات.',
  },
  fr: {
    label: 'Qui Nous Servons',
    heading: 'Les Organisations\nqui Font Confiance à Limore',
    sub: 'Nous travaillons avec des entreprises où le coût d\'un échec de transport terrestre se mesure non pas en inconvénient mais en conséquences.',
    industries: [
      { title: 'Banque d\'Investissement et Finance', body: 'Les équipes de roadshow et les voyages de clôture d\'opérations exigent une ponctualité absolue et une confidentialité totale.', icon: 'finance' },
      { title: 'Retail de Luxe et Mode', body: 'La représentation de marque ne s\'arrête pas à la porte du showroom. Les clients arrivant en Limore arrivent dans un environnement cohérent avec la marque.', icon: 'luxury' },
      { title: 'Services Juridiques et Professionnels', body: 'Avocats, associés seniors et clients sont transportés avec discrétion. Aucune conversation n\'est entendue. Aucun itinéraire n\'est partagé.', icon: 'legal' },
      { title: 'Technologie et Médias', body: 'Organisations en mouvement rapide avec des besoins de voyage mondiaux. Réservations le jour même, plusieurs villes, sans friction opérationnelle.', icon: 'tech' },
      { title: 'Hôtellerie et Hôtels de Luxe', body: 'Les hôtels partenaires utilisent Limore pour étendre leur standard de service au-delà du hall. Nous sommes le partenaire de transfert de référence.', icon: 'hotel' },
      { title: 'Private Equity et Family Offices', body: 'Visites de sociétés en portefeuille, réunions LP et voyages des dirigeants gérés avec la discrétion requise par le capital privé.', icon: 'equity' },
    ],
    note: 'Si votre organisation n\'apparaît pas ici, contactez-nous directement. Nous travaillons dans tous les secteurs.',
  },
}

const IndustryIcons = {
  finance: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="14" width="4" height="7" stroke="#C41E1E" strokeWidth="1"/>
      <rect x="9" y="9" width="4" height="12" stroke="#C41E1E" strokeWidth="1"/>
      <rect x="16" y="4" width="4" height="17" stroke="#C41E1E" strokeWidth="1"/>
      <polyline points="2,10 9,6 16,2" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  luxury: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <polygon points="11,2 13.5,8 20,8.5 15,13 16.5,20 11,16.5 5.5,20 7,13 2,8.5 8.5,8" stroke="#C41E1E" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  ),
  legal: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <line x1="11" y1="2" x2="11" y2="20" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <line x1="5" y1="5" x2="17" y2="5" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <path d="M5 5l-3 6h6L5 5z" stroke="#C41E1E" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M17 5l-3 6h6L17 5z" stroke="#C41E1E" strokeWidth="1" strokeLinejoin="round"/>
      <line x1="4" y1="20" x2="18" y2="20" stroke="#C41E1E" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  tech: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="18" height="12" rx="1" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="7" y1="19" x2="15" y2="19" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <line x1="11" y1="15" x2="11" y2="19" stroke="#C41E1E" strokeWidth="1"/>
      <circle cx="11" cy="9" r="2" stroke="#C41E1E" strokeWidth="1"/>
    </svg>
  ),
  hotel: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="16" height="17" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="3" y1="4" x2="11" y2="2" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <line x1="11" y1="2" x2="19" y2="4" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
      <rect x="8" y="14" width="6" height="7" stroke="#C41E1E" strokeWidth="1"/>
      <rect x="6" y="8" width="3" height="3" stroke="#C41E1E" strokeWidth="1"/>
      <rect x="13" y="8" width="3" height="3" stroke="#C41E1E" strokeWidth="1"/>
    </svg>
  ),
  equity: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M11 7v4l3 2" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M7 2.5C8.5 2 9.7 1.8 11 2" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
}

export default function CCIndustries({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const rowRefs    = useRef([])
  const noteRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 74%' }
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      rowRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: 0.2 + i * 0.08, scrollTrigger: st }
        )
      })
      gsap.fromTo(noteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.7, scrollTrigger: st }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px) clamp(40px, 6vw, 56px)',
          borderBottom: '1px solid #141414',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '32px', opacity: 0,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
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
            fontSize: 'clamp(2.2rem, 4.5vw, 4.8rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 1.02, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        <p style={{
          fontSize: '13px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: 'rgba(248,247,244,0.38)',
          lineHeight: 1.8, maxWidth: '340px',
        }}>
          {content.sub}
        </p>
      </div>

      {/* Industry list */}
      <div style={{ padding: '0 clamp(24px, 6vw, 96px)' }}>
        {content.industries.map((item, i) => (
          <div
            key={i}
            ref={(el) => (rowRefs.current[i] = el)}
            className="cci-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '44px 1fr',
              gap: '24px',
              padding: 'clamp(20px, 3vw, 32px) 0',
              borderBottom: i < content.industries.length - 1 ? '1px solid #141414' : 'none',
              alignItems: 'start',
              opacity: 0,
              transition: 'background-color 0.2s ease',
            }}
          >
            {/* Icon */}
            <div style={{
              width: '36px', height: '36px',
              border: '1px solid #1E1E1E',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, marginTop: '2px',
            }}>
              {IndustryIcons[item.icon]}
            </div>

            {/* Text */}
            <div>
              <h3 style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#F8F7F4',
                marginBottom: '8px', lineHeight: 1.2,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '13px', fontFamily: 'Inter, sans-serif',
                fontWeight: 300, color: 'rgba(248,247,244,0.38)',
                lineHeight: 1.8, maxWidth: '640px',
              }}>
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div
        ref={noteRef}
        style={{
          padding: 'clamp(24px, 4vw, 40px) clamp(24px, 6vw, 96px)',
          borderTop: '1px solid #141414',
          display: 'flex', alignItems: 'center', gap: '12px',
          opacity: 0,
        }}
      >
        <div style={{ width: '4px', height: '4px', backgroundColor: '#C41E1E', borderRadius: '50%', flexShrink: 0 }} />
        <p style={{
          fontSize: '12px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: 'rgba(248,247,244,0.28)',
          letterSpacing: '0.04em', lineHeight: 1.6,
        }}>
          {content.note}
        </p>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <style>{`
        .cci-row:hover { background-color: rgba(255,255,255,0.015) !important; }
      `}</style>
    </section>
  )
}