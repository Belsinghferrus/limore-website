'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IMG = {
  shrishin: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/51cdff83538b2f5ad3c477670cfc87b1002559b2.jpg',
  aamira:   'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0e5c55e469fa0d67a3d7bb2c608806b382a5af3a.jpg',
  pamil:    'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/62a9c7aebf2b799d844003bab5628209c78cf879.jpg',
  blessy:   'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/cb095c1e513f3a170b142f2067ef18decb20131f.jpg',
  lolita:   'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/78cadc431524b1b1a070c828a6f2e997763868df.jpg',
  belsingh: 'https://pplx-res.cloudinary.com/image/upload/pplx_search_images/3ae2c23c67a82c6ce4baacedd8d10ca63ae5e404.jpg',
  raza:     '/images/team/raza.jpeg',
}

const MEMBERS = [
  {
    key:      'shrishin',
    name:     'Shrishin Sreenivasan',
    initials: 'SS',
    role: {
      en: 'VP — Global Sales & Strategic Alliances',
      ar: 'نائب الرئيس — المبيعات العالمية والتحالفات',
      fr: 'VP — Ventes Mondiales & Alliances',
    },
    desc: {
      en: 'Shrishin leads Limore\'s commercial expansion across key markets, building the strategic relationships and institutional partnerships that anchor the brand in every city we operate in.',
      ar: 'يقود شريشين التوسع التجاري لليمور في الأسواق الرئيسية، ويبني العلاقات الاستراتيجية والشراكات المؤسسية التي تُرسّخ العلامة التجارية في كل مدينة نعمل فيها.',
      fr: 'Shrishin dirige l\'expansion commerciale de Limore sur les marchés clés, construisant les relations stratégiques et les partenariats institutionnels qui ancrent la marque dans chaque ville où nous opérons.',
    },
  },
  {
    key:      'aamira',
    name:     'Aamira Taj',
    initials: 'AT',
    role: {
      en: 'Operations & Service Delivery',
      ar: 'العمليات وتقديم الخدمات',
      fr: 'Opérations & Prestation de Services',
    },
    desc: {
      en: 'Aamira is the operational backbone of Limore — responsible for the systems, processes, and people that ensure every booking executes without fault, from first confirmation to final drop-off.',
      ar: 'عامرة هي العمود الفقري التشغيلي لليمور، وهي مسؤولة عن الأنظمة والعمليات والأشخاص الذين يضمنون تنفيذ كل حجز دون أخطاء، من التأكيد الأول حتى التوصيل الأخير.',
      fr: 'Aamira est la colonne vertébrale opérationnelle de Limore — responsable des systèmes, des processus et des personnes qui garantissent que chaque réservation s\'exécute sans faille, de la première confirmation au dernier dépôt.',
    },
  },
  {
    key:      'pamil',
    name:     'Pamil Kathir',
    initials: 'PK',
    role: {
      en: 'Client Experience & Key Accounts',
      ar: 'تجربة العميل والحسابات الرئيسية',
      fr: 'Expérience Client & Comptes Clés',
    },
    desc: {
      en: 'Pamil manages Limore\'s most demanding client relationships, ensuring that every touchpoint — from pre-trip briefing to post-service follow-up — meets the exacting standard that defines the brand.',
      ar: 'يدير باميل علاقات عملاء ليمور الأكثر تطلباً، ويضمن أن كل نقطة تواصل — من الإحاطة قبل الرحلة إلى المتابعة بعد الخدمة — تلبي المعيار الدقيق الذي يُعرّف العلامة التجارية.',
      fr: 'Pamil gère les relations clients les plus exigeantes de Limore, en s\'assurant que chaque point de contact — du briefing pré-voyage au suivi post-service — répond au standard précis qui définit la marque.',
    },
  },
  {
    key:      'blessy',
    name:     'Blessy Varghese',
    initials: 'BV',
    role: {
      en: 'Human Resources & Org. Development',
      ar: 'الموارد البشرية والتطوير التنظيمي',
      fr: 'Ressources Humaines & Développement',
    },
    desc: {
      en: 'Blessy shapes the culture that makes consistent service possible — recruiting the rare people who belong in a luxury environment and building the structures that allow them to perform at their best.',
      ar: 'تشكّل بليسي الثقافة التي تجعل الخدمة المتسقة ممكنة، إذ تستقطب الأشخاص النادرين الذين ينتمون إلى بيئة فاخرة، وتبني الهياكل التي تمكّنهم من الأداء بأفضل ما يمكن.',
      fr: 'Blessy façonne la culture qui rend possible un service cohérent — recrutant les personnes rares qui appartiennent à un environnement de luxe et construisant les structures qui leur permettent de performer au mieux.',
    },
  },
  {
    key:      'lolita',
    name:     'Lolita Mathias',
    initials: 'LM',
    role: {
      en: 'Logistics, Planning & Event Operations',
      ar: 'اللوجستيات والتخطيط وعمليات الفعاليات',
      fr: 'Logistique, Planification & Événements',
    },
    desc: {
      en: 'Lolita orchestrates the ground transport logistics for Limore\'s most complex assignments — multi-vehicle financial roadshows, gala transfers, and event fleets — where timing and precision leave no room for error.',
      ar: 'تدير لوليتا لوجستيات النقل البري لأكثر مهمات ليمور تعقيداً — جولات الترويج المالي متعددة المركبات ونقل حفلات الغالا وأساطيل الفعاليات — حيث لا يتسع التوقيت والدقة لأي خطأ.',
      fr: 'Lolita orchestre la logistique de transport terrestre pour les missions les plus complexes de Limore — roadshows financiers multi-véhicules, transferts de gala et flottes événementielles — où le timing et la précision ne laissent aucune place à l\'erreur.',
    },
  },
  {
    key:      'belsingh',
    name:     'Belsingh Ferrus',
    initials: 'BF',
    role: {
      en: 'Technology & Systems',
      ar: 'التكنولوجيا والأنظمة',
      fr: 'Technologie & Systèmes',
    },
    desc: {
      en: 'Ferrus architects the digital infrastructure that makes Limore operationally invisible to the client — the booking systems, driver platforms, and real-time logistics tools that keep every journey on time and on brief.',
      ar: 'يُصمّم بيلسينغ البنية التحتية الرقمية التي تجعل ليمور غير مرئية تشغيلياً للعميل — أنظمة الحجز ومنصات السائقين وأدوات اللوجستيات الفورية التي تُبقي كل رحلة في موعدها وفق التعليمات.',
      fr: 'Belsingh conçoit l\'infrastructure numérique qui rend Limore opérationnellement invisible pour le client — les systèmes de réservation, les plateformes chauffeurs et les outils logistiques en temps réel qui maintiennent chaque trajet à l\'heure et selon les instructions.',
    },
  },
  {
    key:      'raza',
    name:     'Raza Mohsan',
    initials: 'RM',
    role: {
      en: 'Marketing & Brand Communications',
      ar: 'التسويق والاتصالات التجارية',
      fr: 'Marketing & Communications de Marque',
    },
    desc: {
      en: 'Raza controls how Limore presents itself to the world — managing the visual language, brand voice, and market positioning that communicate a standard of service before a single journey is taken.',
      ar: 'يتحكم رضا في كيفية تقديم ليمور لنفسها للعالم، إذ يدير اللغة البصرية وصوت العلامة التجارية والتموضع في السوق التي توصل معيار الخدمة قبل أن تُقطع أي رحلة.',
      fr: 'Raza contrôle la façon dont Limore se présente au monde — gérant le langage visuel, la voix de marque et le positionnement sur le marché qui communiquent un standard de service avant même qu\'un seul trajet soit effectué.',
    },
  },
]

// Row split: first 3, last 4
const ROW_1 = MEMBERS.slice(0, 3)
const ROW_2 = MEMBERS.slice(3)

const t = {
  en: {
    label:  'Leadership',
    line1:  'The People',
    line2:  'Behind the Standard.',
    sub:    'Seven disciplines. One standard. The individuals responsible for every Limore experience.',
    count:  '07',
    countLabel: 'Senior Leaders',
  },
  ar: {
    label:  'القيادة',
    line1:  'الأشخاص',
    line2:  'خلف هذا المعيار.',
    sub:    'سبعة تخصصات. معيار واحد. الأفراد المسؤولون عن كل تجربة ليمور.',
    count:  '٠٧',
    countLabel: 'قادة كبار',
  },
  fr: {
    label:  'Direction',
    line1:  'Les Personnes',
    line2:  'Derrière le Standard.',
    sub:    'Sept disciplines. Un seul standard. Les individus responsables de chaque expérience Limore.',
    count:  '07',
    countLabel: 'Dirigeants',
  },
}

function MemberCard({ m, locale, index, cardRef }) {
  const roleText = m.role[locale] || m.role.en
  const descText = m.desc[locale] || m.desc.en

  return (
    <article
      ref={cardRef}
      className="at-card"
      style={{ opacity: 0 }}
    >
      {/* Photo */}
      <div className="at-photo-outer">
        <div className="at-photo-wrap">
          <img
            src={IMG[m.key]}
            alt={m.name}
            width={480}
            height={600}
            loading="lazy"
            className="at-photo"
          />
          {/* Gradient */}
          <div className="at-photo-grad" aria-hidden="true" />
          {/* Corner accent top-right */}
          <div className="at-corner-tr" aria-hidden="true" />
          {/* Index badge */}
          <span className="at-badge" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Info panel */}
      <div className="at-info">
        {/* Static red accent bar */}
        <div className="at-accent-bar" aria-hidden="true" />
        <div className="at-info-inner">
          <p className="at-name">{m.name}</p>
          <p className="at-role">{roleText}</p>
          <p className="at-desc">{descText}</p>
        </div>
      </div>
    </article>
  )
}

export default function AboutTeam({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        }
      )
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 36 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            delay: (i % 4) * 0.08,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [locale])

  const renderCard = (m, globalIndex) => (
    <MemberCard
      key={m.key}
      m={m}
      locale={locale}
      index={globalIndex}
      cardRef={(el) => (cardRefs.current[globalIndex] = el)}
    />
  )

  return (
    <section
      ref={sectionRef}
      className="at-section"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div className="at-rule" />

      {/* Header */}
      <div ref={headerRef} className="at-header" style={{ opacity: 0 }}>
        <div className="at-header-left">
          <div className="at-eyebrow">
            <span className="at-eyebrow-dash" aria-hidden="true" />
            <span className="at-eyebrow-label">{content.label}</span>
          </div>
          <h2 className="at-heading">
            <span className="at-h-serif">{content.line1}</span>
            <span className="at-h-italic">{content.line2}</span>
          </h2>
        </div>

        <div className="at-header-right">
          <p className="at-sub">{content.sub}</p>
          <div className="at-stat">
            <span className="at-stat-num">{content.count}</span>
            <span className="at-stat-label">{content.countLabel}</span>
          </div>
        </div>
      </div>

      {/* Row 1: 3 cards */}
      <div className="at-grid at-grid-3">
        {ROW_1.map((m, i) => renderCard(m, i))}
      </div>

      <div className="at-rule" />

      {/* Row 2: 4 cards */}
      <div className="at-grid at-grid-4">
        {ROW_2.map((m, i) => renderCard(m, i + 3))}
      </div>

      <div className="at-rule" />

      <style>{`
        .at-section {
          background: #FAFAF8;
          overflow: hidden;
          box-sizing: border-box;
        }
        .at-rule {
          width: 100%;
          height: 1px;
          background: #E5E4E0;
        }

        .at-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          padding: clamp(60px, 8vw, 104px) clamp(24px, 6vw, 96px) clamp(44px, 5vw, 68px);
          border-bottom: 1px solid #E5E4E0;
          background: #fff;
          box-sizing: border-box;
        }
        .at-header-left { flex: 1 1 auto; }
        .at-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 24px;
          flex: 0 1 340px;
        }

        .at-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }
        .at-eyebrow-dash {
          display: block;
          width: 28px; height: 1px;
          background: #C41E1E;
          flex-shrink: 0;
        }
        .at-eyebrow-label {
          font-size: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C41E1E;
        }

        .at-heading {
          margin: 0;
          display: flex;
          flex-direction: column;
        }
        .at-h-serif {
          display: block;
          font-size: clamp(2.6rem, 5vw, 6rem);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 400;
          color: #0A0A0A;
          line-height: 1.0;
          letter-spacing: -0.015em;
        }
        .at-h-italic {
          display: block;
          font-size: clamp(2.6rem, 5vw, 6rem);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-style: italic;
          color: #C41E1E;
          line-height: 1.0;
          letter-spacing: -0.015em;
        }

        .at-sub {
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          color: #999;
          line-height: 1.85;
          margin: 0;
          max-width: 300px;
          text-align: right;
        }
        .at-stat {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .at-stat-num {
          font-size: clamp(2rem, 3.5vw, 3.6rem);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          color: rgba(10,10,10,0.12);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .at-stat-label {
          font-size: 9px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(10,10,10,0.28);
        }

        .at-grid {
          display: grid;
          gap: 0;
          background: #E5E4E0;
        }
        .at-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .at-grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .at-card {
          position: relative;
          overflow: hidden;
          background: #fff;
          outline: 1px solid #E5E4E0;
          outline-offset: -1px;
        }

        .at-photo-outer {
          position: relative;
          overflow: hidden;
        }
        .at-grid-3 .at-photo-outer { aspect-ratio: 3 / 4; }
        .at-grid-4 .at-photo-outer { aspect-ratio: 3 / 4.2; }

        .at-photo-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .at-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: grayscale(22%) brightness(0.97);
          transition: filter 0.35s ease;
        }
        .at-card:hover .at-photo {
          filter: grayscale(0%) brightness(1);
        }

        .at-photo-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(5,5,5,0.72) 0%,
            rgba(5,5,5,0.18) 45%,
            transparent 70%
          );
          pointer-events: none;
        }

        .at-corner-tr {
          position: absolute;
          top: 16px; right: 16px;
          width: 20px; height: 20px;
          border-top: 1px solid rgba(196,30,30,0.4);
          border-right: 1px solid rgba(196,30,30,0.4);
          pointer-events: none;
        }

        .at-badge {
          position: absolute;
          bottom: 16px; left: 16px;
          font-size: 9px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: 0.14em;
          color: rgba(248,247,244,0.2);
          pointer-events: none;
          user-select: none;
        }

        .at-info {
          position: relative;
          padding: 20px 22px 24px;
          background: #fff;
          border-top: 1px solid #E5E4E0;
          box-sizing: border-box;
        }

        .at-accent-bar {
          position: absolute;
          top: 0; left: 0;
          width: 2px;
          height: 100%;
          background: #C41E1E;
          opacity: 0.55;
        }

        .at-info-inner {
          padding-left: 10px;
        }
        .at-name {
          font-size: clamp(0.92rem, 1.3vw, 1.12rem);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 400;
          color: #0A0A0A;
          margin: 0 0 5px;
          line-height: 1.2;
          letter-spacing: 0.01em;
        }
        .at-role {
          font-size: 9px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C41E1E;
          margin: 0 0 10px;
          line-height: 1.4;
        }
        .at-desc {
          font-size: 11.5px;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          color: #777;
          line-height: 1.8;
          margin: 0;
        }

        .at-card:hover .at-info {
          background: #FAFAF8;
        }

        @media (max-width: 1023px) {
          .at-grid-3 { grid-template-columns: repeat(3, 1fr); }
          .at-grid-4 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 639px) {
          .at-grid-3 { grid-template-columns: repeat(1, 1fr); }
          .at-grid-4 { grid-template-columns: repeat(1, 1fr); }

          .at-header-right {
            align-items: flex-start;
            flex: 1 1 auto;
          }
          .at-sub { text-align: left; max-width: 100%; }

          .at-info {
            padding: 16px 16px 20px;
          }
          .at-info-inner { padding-left: 8px; }
          .at-name { font-size: 1rem; }
          .at-role { font-size: 8px; }
          .at-desc { font-size: 11px; }
        }
      `}</style>
    </section>
  )
}