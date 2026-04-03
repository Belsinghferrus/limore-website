'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Event Types',
    heading: 'What We Manage',
    events: [
      {
        index: '01',
        title: 'Financial Roadshows',
        sub: 'Multi-city investor meetings and capital market events',
        body: 'CFOs, IROs, and investment banking teams require transport that matches the pace and discretion of deal-level conversations. Limore provides dedicated vehicles and drivers across every city on the roadshow calendar, with real-time coordination between legs.',
        items: ['Pre-trip route planning', 'Dedicated vehicle per executive', 'City-to-city handoff coordination', 'Flight monitoring for international legs', 'Confidential NDA-covered operations'],
        img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=82',
        imgAlt: 'Financial roadshow chauffeur service',
      },
      {
        index: '02',
        title: 'Product Launches',
        sub: 'Guest arrivals, VIP transfers, and media movement',
        body: 'First impressions begin before the venue doors open. We manage branded arrival experiences, VIP holding areas, and sequential guest transfers so no two arrivals clash and every guest feels attended to from the moment they are collected.',
        items: ['Timed arrival sequencing', 'Branded vehicle wraps available', 'VIP and press lane management', 'Post-event departure coordination', 'Overflow vehicle contingency'],
        img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=82',
        imgAlt: 'Luxury product launch event transfer',
      },
      {
        index: '03',
        title: 'Investor and Board Days',
        sub: 'High-security, high-discretion executive movement',
        body: 'Board meetings and investor days involve individuals who expect their movement to be invisible. Limore drivers are briefed on NDA requirements. Routes are planned to avoid public exposure. Vehicles are swept and confirmed before collection.',
        items: ['Driver NDA briefing standard', 'Route privacy planning', 'Vehicle security confirmation', 'Zero social media protocol', 'Direct accountability to event PA'],
        img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=82',
        imgAlt: 'Investor day executive chauffeur transfer',
      },
      {
        index: '04',
        title: 'Galas, Award Ceremonies, and Private Dinners',
        sub: 'Arrival experiences for luxury-level events',
        body: 'The red carpet experience starts in the vehicle. Limore provides curated fleet selections matched to event dress code and brand identity. Drivers are uniformed, briefed, and positioned before guests arrive at collection points.',
        items: ['Fleet matched to event aesthetic', 'Uniformed and briefed drivers', 'Arrival time precision to the minute', 'Return and after-event transfers', 'Spousal and companion coordination'],
        img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=82',
        imgAlt: 'Gala and award ceremony chauffeur arrival',
      },
    ],
  },
  ar: {
    label: 'أنواع الفعاليات',
    heading: 'ما نديره',
    events: [
      {
        index: '01',
        title: 'جولات الترويج المالي',
        sub: 'اجتماعات المستثمرين متعددة المدن وفعاليات أسواق رأس المال',
        body: 'يتطلب المديرون الماليون ومسؤولو علاقات المستثمرين وفرق الخدمات المصرفية الاستثمارية نقلاً يتماشى مع وتيرة المحادثات على مستوى الصفقات وسريتها.',
        items: ['تخطيط المسار قبل الرحلة', 'مركبة مخصصة لكل مسؤول تنفيذي', 'تنسيق التسليم بين المدن', 'مراقبة الرحلات للأجزاء الدولية', 'عمليات سرية مشمولة باتفاقية عدم الإفصاح'],
        img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=82',
        imgAlt: 'خدمة سائق جولة الترويج المالي',
      },
      {
        index: '02',
        title: 'إطلاق المنتجات',
        sub: 'وصول الضيوف ونقل كبار الشخصيات وتنقلات الإعلام',
        body: 'الانطباعات الأولى تبدأ قبل فتح أبواب المكان. ندير تجارب الوصول المميزة ومناطق استقبال كبار الشخصيات.',
        items: ['تسلسل الوصول الزمني', 'تغليف المركبات بالعلامة التجارية', 'إدارة مسار كبار الشخصيات والصحافة', 'تنسيق المغادرة بعد الفعالية', 'مركبات احتياطية'],
        img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=82',
        imgAlt: 'نقل فعالية إطلاق المنتج الفاخر',
      },
      {
        index: '03',
        title: 'أيام المستثمرين واجتماعات مجلس الإدارة',
        sub: 'تنقل المسؤولين التنفيذيين بأمان عالٍ وتكتم تام',
        body: 'تجمع اجتماعات مجلس الإدارة وأيام المستثمرين أفراداً يتوقعون أن تكون تنقلاتهم غير مرئية. يتم إحاطة سائقي ليمور بمتطلبات عدم الإفصاح.',
        items: ['معيار إحاطة السائق باتفاقية عدم الإفصاح', 'تخطيط خصوصية المسار', 'تأكيد أمان المركبة', 'بروتوكول صارم لوسائل التواصل الاجتماعي', 'مسؤولية مباشرة أمام المساعد الشخصي للفعالية'],
        img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=82',
        imgAlt: 'نقل سائق مسؤول تنفيذي في يوم المستثمر',
      },
      {
        index: '04',
        title: 'حفلات الغالا وحفلات توزيع الجوائز والعشاء الخاص',
        sub: 'تجارب الوصول للفعاليات على مستوى الفخامة',
        body: 'تجربة السجادة الحمراء تبدأ في المركبة. توفر ليمور تشكيلات أسطول منسقة تتناسب مع قواعد اللباس في الفعالية وهوية العلامة التجارية.',
        items: ['أسطول متناسب مع جماليات الفعالية', 'سائقون في زي رسمي ومُحاطون بالتعليمات', 'دقة في وقت الوصول إلى الدقيقة', 'نقل العودة وما بعد الفعالية', 'تنسيق المرافقين'],
        img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=82',
        imgAlt: 'وصول سائق حفل الغالا وتوزيع الجوائز',
      },
    ],
  },
  fr: {
    label: 'Types d\'Événements',
    heading: 'Ce que Nous Gérons',
    events: [
      {
        index: '01',
        title: 'Roadshows Financiers',
        sub: 'Réunions investisseurs multi-villes et événements marchés de capitaux',
        body: 'Les DAF, DRI et équipes banque d\'investissement nécessitent un transport qui correspond au rythme et à la discrétion des conversations au niveau des transactions.',
        items: ['Planification d\'itinéraire avant le voyage', 'Véhicule dédié par dirigeant', 'Coordination de transfert ville à ville', 'Surveillance des vols pour les étapes internationales', 'Opérations confidentielles sous NDA'],
        img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=82',
        imgAlt: 'Service chauffeur roadshow financier',
      },
      {
        index: '02',
        title: 'Lancements de Produits',
        sub: 'Arrivées guests, transferts VIP et mouvement des médias',
        body: 'Les premières impressions commencent avant que les portes du lieu s\'ouvrent. Nous gérons les expériences d\'arrivée brandées, les zones VIP et les transferts séquentiels.',
        items: ['Séquençage des arrivées chronométré', 'Habillage véhicule brandé disponible', 'Gestion voie VIP et presse', 'Coordination des départs post-événement', 'Contingence véhicules supplémentaires'],
        img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=82',
        imgAlt: 'Transfert événement lancement produit luxe',
      },
      {
        index: '03',
        title: 'Journées Investisseurs et Réunions Conseil',
        sub: 'Déplacements dirigeants haute sécurité, haute discrétion',
        body: 'Les réunions de conseil et journées investisseurs impliquent des personnes dont les déplacements doivent rester invisibles. Les chauffeurs Limore sont briefés sur les exigences NDA.',
        items: ['Standard de briefing chauffeur NDA', 'Planification de confidentialité d\'itinéraire', 'Confirmation de sécurité du véhicule', 'Protocole zéro réseaux sociaux', 'Responsabilité directe envers l\'assistante événementielle'],
        img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=82',
        imgAlt: 'Transfert chauffeur dirigeant journée investisseurs',
      },
      {
        index: '04',
        title: 'Galas, Cérémonies et Dîners Privés',
        sub: 'Expériences d\'arrivée pour événements de niveau luxe',
        body: 'L\'expérience tapis rouge commence dans le véhicule. Limore fournit des sélections de flotte curatées correspondant au code vestimentaire de l\'événement.',
        items: ['Flotte adaptée à l\'esthétique de l\'événement', 'Chauffeurs en uniforme et briefés', 'Précision de l\'heure d\'arrivée à la minute', 'Transferts de retour et après-événement', 'Coordination des accompagnateurs'],
        img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=82',
        imgAlt: 'Arrivée chauffeur gala et cérémonie de remise de prix',
      },
    ],
  },
}

export default function RWServices({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%' }

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: st }
      )

      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
            },
            delay: 0.05 * i,
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

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px) clamp(32px, 5vw, 56px)',
          borderBottom: '1px solid #141414',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '16px', opacity: 0,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '36px', height: '1px', backgroundColor: '#C41E1E' }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.24em',
              textTransform: 'uppercase', color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, fontStyle: 'italic',
            color: '#F8F7F4', lineHeight: 1.0,
            letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        <span style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, color: 'rgba(248,247,244,0.04)',
          userSelect: 'none', lineHeight: 1, flexShrink: 0,
        }}>
          04
        </span>
      </div>

      {/* Event cards -- alternating layout */}
      <div>
        {content.events.map((ev, i) => {
          const imgLeft = i % 2 === 0
          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{
                borderBottom: i < content.events.length - 1 ? '1px solid #141414' : 'none',
                opacity: 0,
              }}
            >
              <div
                className={`rwe-row ${imgLeft ? 'rwe-row-normal' : 'rwe-row-reverse'}`}
                style={{ display: 'grid', gridTemplateColumns: '1fr' }}
              >
                {/* Image */}
                <div
                  className="rwe-img-wrap"
                  style={{
                    position: 'relative', overflow: 'hidden',
                    minHeight: 'clamp(280px, 35vw, 480px)',
                  }}
                >
                  <img
                    src={ev.img}
                    alt={ev.imgAlt}
                    width={900} height={600}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.7s ease',
                    }}
                    className="rwe-img"
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.6), transparent 50%)',
                    pointerEvents: 'none',
                  }} />
                  <span style={{
                    position: 'absolute', top: '16px',
                    left: isRTL ? 'auto' : '16px',
                    right: isRTL ? '16px' : 'auto',
                    fontSize: '11px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 500, letterSpacing: '0.16em',
                    color: 'rgba(248,247,244,0.3)',
                  }}>
                    {ev.index}
                  </span>
                </div>

                {/* Content */}
                <div style={{
                  padding: 'clamp(36px, 5vw, 64px) clamp(24px, 5vw, 64px)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  backgroundColor: '#0A0A0A',
                }}>
                  <h3 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 400, color: '#F8F7F4',
                    lineHeight: 1.1, marginBottom: '6px',
                  }}>
                    {ev.title}
                  </h3>
                  <p style={{
                    fontSize: '11px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 400, letterSpacing: '0.1em',
                    color: '#C41E1E', textTransform: 'uppercase',
                    marginBottom: '20px',
                  }}>
                    {ev.sub}
                  </p>
                  <p style={{
                    fontSize: '13px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 300, color: 'rgba(248,247,244,0.4)',
                    lineHeight: 1.85, marginBottom: '28px',
                    maxWidth: '480px',
                  }}>
                    {ev.body}
                  </p>

                  {/* Feature list */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {ev.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{
                          width: '4px', height: '4px',
                          borderRadius: '50%',
                          backgroundColor: '#C41E1E',
                          flexShrink: 0,
                          marginTop: '7px',
                        }} />
                        <span style={{
                          fontSize: '12px', fontFamily: 'Inter, sans-serif',
                          fontWeight: 300, color: 'rgba(248,247,244,0.42)',
                          lineHeight: 1.6,
                        }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#141414' }} />

      <style>{`
        .rwe-row {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .rwe-row { grid-template-columns: 1fr 1fr; min-height: 420px; }
          .rwe-row-reverse .rwe-img-wrap { order: 2; }
          .rwe-row-reverse > div:last-child { order: 1; }
        }
        .rwe-img-wrap:hover .rwe-img { transform: scale(1.04); }
      `}</style>
    </section>
  )
}