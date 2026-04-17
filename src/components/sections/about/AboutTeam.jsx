'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IMG = {
  shrishin:  '/images/team/person.png',
  aamira:    '/images/team/person.png',
  pamil:     '/images/team/person.png',
  blessy:    '/images/team/person.png',
  lolita:    '/images/team/person.png',
  belsingh:  '/images/team/ferrus.JPEG',
  raza:      '/images/team/raza.jpeg',
  honielyn:  '/images/team/person.png',
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
      en: 'Shrishin is the person who opens doors. He builds the relationships with companies, institutions, and partners that bring Limore into new cities and new markets — and keeps those relationships strong long after the first handshake.',
      ar: 'شريشين هو الشخص الذي يفتح الأبواب. يبني العلاقات مع الشركات والمؤسسات والشركاء التي تجلب ليمور إلى مدن وأسواق جديدة، وتبقى هذه العلاقات متينة بعد المصافحة الأولى بفترة طويلة.',
      fr: 'Shrishin est la personne qui ouvre les portes. Il construit les relations avec les entreprises, les institutions et les partenaires qui amènent Limore dans de nouvelles villes et de nouveaux marchés — et maintient ces relations solides bien après la première poignée de main.',
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
      en: 'Aamira is the reason every booking actually works. She runs the systems and the people behind the scenes — so that from the moment a client confirms to the moment they arrive, everything just happens the way it should.',
      ar: 'عامرة هي السبب في نجاح كل حجز فعلياً. تدير الأنظمة والفريق خلف الكواليس، بحيث من لحظة تأكيد العميل إلى لحظة وصوله، كل شيء يسير كما ينبغي.',
      fr: 'Aamira est la raison pour laquelle chaque réservation fonctionne réellement. Elle gère les systèmes et les personnes en coulisses — pour que du moment où un client confirme jusqu\'à son arrivée, tout se passe comme il se doit.',
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
      en: 'Pamil looks after Limore\'s most important clients personally. She makes sure that every interaction — before the trip, during it, and after — feels considered and effortless. His clients don\'t just stay, they refer.',
      ar: 'يهتم باميل بأهم عملاء ليمور شخصياً. يحرص على أن كل تفاعل — قبل الرحلة وخلالها وبعدها — يبدو مدروساً وسهلاً. عملاؤه لا يبقون فحسب، بل يُحيلون آخرين.',
      fr: 'Pamil prend personnellement soin des clients les plus importants de Limore. Il veille à ce que chaque interaction — avant le trajet, pendant et après — soit réfléchie et sans effort. Ses clients ne restent pas seulement, ils recommandent.',
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
      en: 'Blessy finds the right people and makes sure they stay. She understands that the quality of a luxury service comes down to who is delivering it — and she has built a team that genuinely takes pride in the work.',
      ar: 'تجد بليسي الأشخاص المناسبين وتضمن بقاءهم. تفهم أن جودة الخدمة الفاخرة تعتمد على من يقدمها، وقد بنت فريقاً يفخر حقاً بعمله.',
      fr: 'Blessy trouve les bonnes personnes et s\'assure qu\'elles restent. Elle comprend que la qualité d\'un service de luxe dépend de ceux qui le délivrent — et elle a constitué une équipe qui est véritablement fière de son travail.',
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
      en: 'Lolita handles the complicated jobs — the ones with ten vehicles, tight schedules, and no margin for error. Whether it\'s a financial roadshow across three cities or transfers for a major gala, she coordinates every moving part so nothing gets missed.',
      ar: 'تتولى لوليتا المهام المعقدة — تلك التي تتضمن عشر مركبات وجداول زمنية ضيقة وهامش خطأ معدوم. سواء كانت جولة ترويج مالي عبر ثلاث مدن أو نقل لحفل غالا كبير، تنسق كل جزء متحرك حتى لا يفوت شيء.',
      fr: 'Lolita gère les missions complexes — celles avec dix véhicules, des horaires serrés et aucune marge d\'erreur. Qu\'il s\'agisse d\'un roadshow financier dans trois villes ou de transferts pour un grand gala, elle coordonne chaque élément pour que rien ne soit manqué.',
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
      en: 'Ferrus is the reason clients never have to think about the technology. He holds the technical standard to the same level as the service standard.  When a client experiences zero friction, it\'s because he engineered it that way.',
      ar: 'فيروس هو السبب في أن العملاء لا يحتاجون أبداً إلى التفكير في التكنولوجيا. بنى منصة الحجز وأدوات السائق والأنظمة التي تربطها معاً. يرفع المعيار التقني إلى مستوى معيار الخدمة تماماً. عندما لا يشعر العميل بأي احتكاك، فذلك لأنه صممه على هذا النحو.',
      fr: 'Ferrus est la raison pour laquelle les clients nont jamais à penser à la technologie. Il a construit la plateforme de réservation, les outils chauffeurs et les systèmes qui les relient. Il maintient lexigence technique au même niveau que lexigence de service. Quand un client ne ressent aucune friction, cest parce quil la conçu ainsi.',
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
      en: 'Raza shapes how the world sees Limore. Every visual, every word, every campaign goes through him — because before a client ever books, how the brand looks and sounds is what earns their trust.',
      ar: 'يشكّل رضا كيف يرى العالم ليمور. كل صورة وكل كلمة وكل حملة تمر من خلاله — لأنه قبل أن يحجز العميل، فإن مظهر العلامة التجارية وصوتها هما ما يكسبان ثقته.',
      fr: 'Raza façonne la façon dont le monde voit Limore. Chaque visuel, chaque mot, chaque campagne passe par lui — car avant qu\'un client réserve, l\'apparence et la voix de la marque sont ce qui mérite sa confiance.',
    },
  },
  {
    key:      'honielyn',
    name:     'Honielyn Maquiling',
    initials: 'HM',
    role: {
      en: 'Sales Lead',
      ar: 'قائد المبيعات',
      fr: 'Responsable des Ventes',
    },
    desc: {
      en: 'Honielyn is the first person most clients talk to. She understands what they actually need, matches them to the right service, and makes the process of booking with Limore feel natural — not transactional.',
      ar: 'هونييلين هي أول شخص يتحدث إليه معظم العملاء. تفهم ما يحتاجونه فعلاً، وتطابقهم مع الخدمة المناسبة، وتجعل عملية الحجز مع ليمور تبدو طبيعية — لا تجارية.',
      fr: 'Honielyn est la première personne à qui la plupart des clients parlent. Elle comprend ce dont ils ont réellement besoin, les oriente vers le bon service, et rend le processus de réservation avec Limore naturel — pas transactionnel.',
    },
  },
]

// Row split: first 4, last 4
const ROW_1 = MEMBERS.slice(0, 4)
const ROW_2 = MEMBERS.slice(4)

const t = {
  en: {
    label:      'Leadership',
    line1:      'The People',
    line2:      'Behind the Standard.',
    sub:        'Eight disciplines. One standard. The individuals responsible for every Limore experience.',
    count:      '08',
    countLabel: 'Senior Leaders',
  },
  ar: {
    label:      'القيادة',
    line1:      'الأشخاص',
    line2:      'خلف هذا المعيار.',
    sub:        'ثمانية تخصصات. معيار واحد. الأفراد المسؤولون عن كل تجربة ليمور.',
    count:      '٠٨',
    countLabel: 'قادة كبار',
  },
  fr: {
    label:      'Direction',
    line1:      'Les Personnes',
    line2:      'Derrière le Standard.',
    sub:        'Huit disciplines. Un seul standard. Les individus responsables de chaque expérience Limore.',
    count:      '08',
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
          <div className="at-photo-grad" aria-hidden="true" />
          <div className="at-corner-tr" aria-hidden="true" />
          <span className="at-badge" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="at-info">
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

      {/* Row 1: 4 cards */}
      <div className="at-grid at-grid-4">
        {ROW_1.map((m, i) => renderCard(m, i))}
      </div>

      <div className="at-rule" />

      {/* Row 2: 4 cards */}
      <div className="at-grid at-grid-4">
        {ROW_2.map((m, i) => renderCard(m, i + 4))}
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
          .at-grid-4 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 639px) {
          .at-grid-4 { grid-template-columns: repeat(1, 1fr); }

          .at-header-right {
            align-items: flex-start;
            flex: 1 1 auto;
          }
          .at-sub { text-align: left; max-width: 100%; }

          .at-info { padding: 16px 16px 20px; }
          .at-info-inner { padding-left: 8px; }
          .at-name { font-size: 1rem; }
          .at-role { font-size: 8px; }
          .at-desc { font-size: 11px; }
        }
      `}</style>
    </section>
  )
}