'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Unique images per card — no repeats ──────────────────────────────────────
const IMAGES = {
  financial: '/images/limore11.jpg',
  launch: '/images/limore5.jpg',
  investor: '/images/limore3.jpg',
  gala: '/images/limore7.jpg',
}

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
        items: [
          'Pre-trip route planning',
          'Dedicated vehicle per executive',
          'City-to-city handoff coordination',
          'Flight monitoring for international legs',
          'Confidential NDA-covered operations',
        ],
        imgKey: 'financial',
        imgAlt: 'Financial roadshow chauffeur service',
      },
      {
        index: '02',
        title: 'Product Launches',
        sub: 'Guest arrivals, VIP transfers, and media movement',
        body: 'First impressions begin before the venue doors open. We manage branded arrival experiences, VIP holding areas, and sequential guest transfers so no two arrivals clash and every guest feels attended to from the moment they are collected.',
        items: [
          'Timed arrival sequencing',
          'Branded vehicle wraps available',
          'VIP and press lane management',
          'Post-event departure coordination',
          'Overflow vehicle contingency',
        ],
        imgKey: 'launch',
        imgAlt: 'Luxury product launch event transfer',
      },
      {
        index: '03',
        title: 'Investor & Board Days',
        sub: 'High-security, high-discretion executive movement',
        body: 'Board meetings and investor days involve individuals who expect their movement to be invisible. Limore drivers are briefed on NDA requirements. Routes are planned to avoid public exposure. Vehicles are swept and confirmed before collection.',
        items: [
          'Driver NDA briefing standard',
          'Route privacy planning',
          'Vehicle security confirmation',
          'Zero social media protocol',
          'Direct accountability to event PA',
        ],
        imgKey: 'investor',
        imgAlt: 'Investor day executive chauffeur transfer',
      },
      {
        index: '04',
        title: 'Galas, Awards & Private Dinners',
        sub: 'Arrival experiences for luxury-level events',
        body: 'The red carpet experience starts in the vehicle. Limore provides curated fleet selections matched to event dress code and brand identity. Drivers are uniformed, briefed, and positioned before guests arrive at collection points.',
        items: [
          'Fleet matched to event aesthetic',
          'Uniformed and briefed drivers',
          'Arrival time precision to the minute',
          'Return and after-event transfers',
          'Spousal and companion coordination',
        ],
        imgKey: 'gala',
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
        items: [
          'تخطيط المسار قبل الرحلة',
          'مركبة مخصصة لكل مسؤول تنفيذي',
          'تنسيق التسليم بين المدن',
          'مراقبة الرحلات للأجزاء الدولية',
          'عمليات سرية مشمولة باتفاقية عدم الإفصاح',
        ],
        imgKey: 'financial',
        imgAlt: 'خدمة سائق جولة الترويج المالي',
      },
      {
        index: '02',
        title: 'إطلاق المنتجات',
        sub: 'وصول الضيوف ونقل كبار الشخصيات وتنقلات الإعلام',
        body: 'الانطباعات الأولى تبدأ قبل فتح أبواب المكان. ندير تجارب الوصول المميزة ومناطق استقبال كبار الشخصيات.',
        items: [
          'تسلسل الوصول الزمني',
          'تغليف المركبات بالعلامة التجارية',
          'إدارة مسار كبار الشخصيات والصحافة',
          'تنسيق المغادرة بعد الفعالية',
          'مركبات احتياطية',
        ],
        imgKey: 'launch',
        imgAlt: 'نقل فعالية إطلاق المنتج الفاخر',
      },
      {
        index: '03',
        title: 'أيام المستثمرين واجتماعات مجلس الإدارة',
        sub: 'تنقل المسؤولين التنفيذيين بأمان عالٍ وتكتم تام',
        body: 'تجمع اجتماعات مجلس الإدارة وأيام المستثمرين أفراداً يتوقعون أن تكون تنقلاتهم غير مرئية.',
        items: [
          'معيار إحاطة السائق باتفاقية عدم الإفصاح',
          'تخطيط خصوصية المسار',
          'تأكيد أمان المركبة',
          'بروتوكول صارم لوسائل التواصل الاجتماعي',
          'مسؤولية مباشرة أمام المساعد الشخصي للفعالية',
        ],
        imgKey: 'investor',
        imgAlt: 'نقل سائق مسؤول تنفيذي في يوم المستثمر',
      },
      {
        index: '04',
        title: 'حفلات الغالا وتوزيع الجوائز والعشاء الخاص',
        sub: 'تجارب الوصول للفعاليات على مستوى الفخامة',
        body: 'تجربة السجادة الحمراء تبدأ في المركبة. توفر ليمور تشكيلات أسطول منسقة تتناسب مع قواعد اللباس في الفعالية وهوية العلامة التجارية.',
        items: [
          'أسطول متناسب مع جماليات الفعالية',
          'سائقون في زي رسمي ومُحاطون بالتعليمات',
          'دقة في وقت الوصول إلى الدقيقة',
          'نقل العودة وما بعد الفعالية',
          'تنسيق المرافقين',
        ],
        imgKey: 'gala',
        imgAlt: 'وصول سائق حفل الغالا وتوزيع الجوائز',
      },
    ],
  },
  fr: {
    label: "Types d'Événements",
    heading: 'Ce que Nous Gérons',
    events: [
      {
        index: '01',
        title: 'Roadshows Financiers',
        sub: 'Réunions investisseurs multi-villes et événements marchés de capitaux',
        body: "Les DAF, DRI et équipes banque d'investissement nécessitent un transport qui correspond au rythme et à la discrétion des conversations au niveau des transactions.",
        items: [
          "Planification d'itinéraire avant le voyage",
          'Véhicule dédié par dirigeant',
          'Coordination de transfert ville à ville',
          'Surveillance des vols pour les étapes internationales',
          'Opérations confidentielles sous NDA',
        ],
        imgKey: 'financial',
        imgAlt: 'Service chauffeur roadshow financier',
      },
      {
        index: '02',
        title: 'Lancements de Produits',
        sub: 'Arrivées guests, transferts VIP et mouvement des médias',
        body: "Les premières impressions commencent avant que les portes du lieu s'ouvrent. Nous gérons les expériences d'arrivée brandées, les zones VIP et les transferts séquentiels.",
        items: [
          'Séquençage des arrivées chronométré',
          'Habillage véhicule brandé disponible',
          'Gestion voie VIP et presse',
          'Coordination des départs post-événement',
          'Contingence véhicules supplémentaires',
        ],
        imgKey: 'launch',
        imgAlt: 'Transfert événement lancement produit luxe',
      },
      {
        index: '03',
        title: 'Journées Investisseurs et Réunions Conseil',
        sub: 'Déplacements dirigeants haute sécurité, haute discrétion',
        body: 'Les réunions de conseil et journées investisseurs impliquent des personnes dont les déplacements doivent rester invisibles.',
        items: [
          'Standard de briefing chauffeur NDA',
          'Planification de confidentialité itinéraire',
          'Confirmation de sécurité du véhicule',
          'Protocole zéro réseaux sociaux',
          'Responsabilité directe envers assistante événementielle',
        ],
        imgKey: 'investor',
        imgAlt: 'Transfert chauffeur dirigeant journée investisseurs',
      },
      {
        index: '04',
        title: 'Galas, Cérémonies & Dîners Privés',
        sub: "Expériences d'arrivée pour événements de niveau luxe",
        body: "L'expérience tapis rouge commence dans le véhicule. Limore fournit des sélections de flotte curatées correspondant au code vestimentaire de l'événement.",
        items: [
          "Flotte adaptée à l'esthétique de l'événement",
          'Chauffeurs en uniforme et briefés',
          "Précision de l'heure d'arrivée à la minute",
          'Transferts de retour et après-événement',
          'Coordination des accompagnateurs',
        ],
        imgKey: 'gala',
        imgAlt: 'Arrivée chauffeur gala et cérémonie de remise de prix',
      },
    ],
  },
}

function EventCard({ ev, cardRef }) {
  return (
    <article ref={cardRef} className="rws-card" style={{ opacity: 0 }}>
      <div className="rws-media">
        <div className="rws-media-inner">
          <img
            src={IMAGES[ev.imgKey]}
            alt={ev.imgAlt}
            width={900}
            height={600}
            loading="lazy"
            className="rws-img"
          />
          <div className="rws-overlay" />
          <span className="rws-index">{ev.index}</span>
        </div>
      </div>

      <div className="rws-content">
        <div className="rws-content-inner">
          <div className="rws-line" />
          <h3 className="rws-title">{ev.title}</h3>
          <p className="rws-sub">{ev.sub}</p>
          <p className="rws-body">{ev.body}</p>

          <ul className="rws-list">
            {ev.items.map((item, j) => (
              <li key={j} className="rws-item">
                <span className="rws-dot" />
                <span className="rws-item-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function RWServices({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 82%',
          },
        }
      )

      cardRefs.current.forEach((el) => {
        if (!el) return

        const media = el.querySelector('.rws-media-inner')
        const content = el.querySelector('.rws-content-inner')

        gsap.set(el, { opacity: 1 })

        gsap.fromTo(
          media,
          { opacity: 0, scale: 1.04 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        )

        gsap.fromTo(
          content,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: 0.12,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [locale])

  return (
    <section
      ref={sectionRef}
      className="rws-section"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div className="rws-header" ref={headerRef} style={{ opacity: 0 }}>
        <div className="rws-eyebrow">
          <div className="rws-eyebrow-line" />
          <span className="rws-eyebrow-text">{content.label}</span>
        </div>
        <h2 className="rws-heading">{content.heading}</h2>
      </div>

      <div className="rws-grid">
        {content.events.map((ev, i) => (
          <EventCard
            key={i}
            ev={ev}
            cardRef={(el) => (cardRefs.current[i] = el)}
          />
        ))}
      </div>

      <style>{`
        .rws-section {
          background: #0A0A0A;
          overflow: hidden;
        }

        .rws-header {
          padding: clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px) clamp(36px, 5vw, 60px);
          border-top: 1px solid #161616;
          border-bottom: 1px solid #161616;
        }

        .rws-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .rws-eyebrow-line {
          width: 32px;
          height: 1px;
          background: #C41E1E;
          flex-shrink: 0;
        }

        .rws-eyebrow-text {
          font-size: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #C41E1E;
        }

        .rws-heading {
          margin: 0;
          font-size: clamp(2.3rem, 5vw, 5rem);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-style: italic;
          line-height: 1;
          letter-spacing: -0.01em;
          color: #F8F7F4;
        }

        .rws-grid {
          display: flex;
          flex-direction: column;
        }

        .rws-card {
          display: grid;
          grid-template-columns: 1fr;
          border-bottom: 1px solid #161616;
          background: #0A0A0A;
        }

        .rws-media {
          position: relative;
          min-height: 280px;
        }

        .rws-media-inner {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .rws-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.8s ease;
        }

        .rws-card:hover .rws-img {
          transform: scale(1.04);
        }

        .rws-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10,10,10,0.52) 0%, rgba(10,10,10,0.12) 60%, transparent 100%);
          pointer-events: none;
        }

        .rws-index {
          position: absolute;
          bottom: 18px;
          right: 18px;
          font-size: clamp(2.4rem, 5vw, 4.4rem);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          line-height: 1;
          color: rgba(248,247,244,0.08);
          user-select: none;
          pointer-events: none;
        }

        [dir="rtl"] .rws-index {
          right: auto;
          left: 18px;
        }

        .rws-content {
          display: flex;
          align-items: center;
          padding: clamp(36px, 5vw, 72px) clamp(24px, 5vw, 72px);
          background: #0A0A0A;
        }

        .rws-content-inner {
          width: 100%;
          max-width: 520px;
        }

        .rws-line {
          width: 32px;
          height: 1px;
          background: #C41E1E;
          margin-bottom: 26px;
        }

        .rws-title {
          margin: 0 0 10px;
          font-size: clamp(1.45rem, 2.6vw, 2.3rem);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #F8F7F4;
        }

        .rws-sub {
          margin: 0 0 22px;
          font-size: 11px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C41E1E;
          line-height: 1.55;
        }

        .rws-body {
          margin: 0 0 30px;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          line-height: 1.9;
          color: rgba(248,247,244,0.52);
          max-width: 480px;
        }

        .rws-list {
          list-style: none;
          padding: 24px 0 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
          border-top: 1px solid #161616;
        }

        .rws-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .rws-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #C41E1E;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .rws-item-text {
          font-size: 12px;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(248,247,244,0.46);
        }

        @media (min-width: 768px) {
          .rws-card {
            grid-template-columns: 1fr 1fr;
            min-height: 500px;
          }

          .rws-media {
            min-height: unset;
          }

          .rws-grid .rws-card:nth-child(odd) .rws-media {
            order: 1;
          }

          .rws-grid .rws-card:nth-child(odd) .rws-content {
            order: 2;
          }

          .rws-grid .rws-card:nth-child(even) .rws-media {
            order: 2;
          }

          .rws-grid .rws-card:nth-child(even) .rws-content {
            order: 1;
          }

          [dir="rtl"] .rws-grid .rws-card:nth-child(odd) .rws-media {
            order: 2;
          }

          [dir="rtl"] .rws-grid .rws-card:nth-child(odd) .rws-content {
            order: 1;
          }

          [dir="rtl"] .rws-grid .rws-card:nth-child(even) .rws-media {
            order: 1;
          }

          [dir="rtl"] .rws-grid .rws-card:nth-child(even) .rws-content {
            order: 2;
          }
        }

        @media (min-width: 1200px) {
          .rws-card {
            min-height: 560px;
          }

          .rws-content {
            padding: 80px;
          }
        }

        @media (max-width: 767px) {
          .rws-media {
            min-height: 260px;
          }

          .rws-content {
            padding: 32px 24px 40px;
          }

          .rws-body {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  )
}