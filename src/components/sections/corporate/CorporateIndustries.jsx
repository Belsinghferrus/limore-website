'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow: 'Industries We Serve',
    headline: 'Built for Sectors Where Reputation is Everything.',
    sectors: [
      {
        num: '01',
        title: 'Financial Services',
        examples: 'Private equity, asset management, investment banking, family offices',
        text: 'Discretion and punctuality are non-negotiable when your movements inform market sentiment. Limore operates invisibly around your deal cycle.',
        clients: 'BlackRock-type, private equity, family offices',
      },
      {
        num: '02',
        title: 'Luxury & Fashion',
        examples: 'LVMH, Richemont group brands, haute couture, jewellery maisons',
        text: 'The vehicle that arrives for your guest is a continuation of your brand narrative. Our fleet and chauffeur presentation is calibrated accordingly.',
        clients: 'Chanel, Cartier, Chopard, Louis Vuitton',
      },
      {
        num: '03',
        title: 'Technology & Media',
        examples: 'Global tech companies, media groups, streaming platforms',
        text: 'Fast-moving, multi-city itineraries handled with the same precision as boardroom transfers. Integration with internal travel stacks available.',
        clients: 'Apple, Meta-type, media conglomerates',
      },
      {
        num: '04',
        title: 'Events & PR',
        examples: 'Fashion weeks, product launches, award ceremonies, summits',
        text: 'When hundreds of VIP guests arrive at a single venue window, coordination is everything. Our dedicated events team manages the entire ground sequence.',
        clients: 'Global PR agencies, event producers, embassies',
      },
    ],
  },
  ar: {
    eyebrow: 'القطاعات التي نخدمها',
    headline: 'مبني للقطاعات التي تكون فيها السمعة كل شيء.',
    sectors: [
      { num: '٠١', title: 'الخدمات المالية', examples: 'الأسهم الخاصة، إدارة الأصول، المصارف الاستثمارية', text: 'السرية والدقة غير قابلتين للتفاوض. تعمل ليمور بشكل غير مرئي حول دورة صفقاتك.', clients: 'BlackRock وما شابه، صناديق الثروة العائلية' },
      { num: '٠٢', title: 'الفخامة والأزياء', examples: 'مجموعة LVMH، علامات Richemont', text: 'المركبة التي تصل ضيفك هي امتداد لسرد علامتك التجارية.', clients: 'شانيل، كارتييه، تشوبار، لويس فيتون' },
      { num: '٠٣', title: 'التكنولوجيا والإعلام', examples: 'شركات التكنولوجيا العالمية، مجموعات الإعلام', text: 'مسارات متعددة المدن تُدار بنفس دقة اجتماعات مجلس الإدارة.', clients: 'آبل، شركات إعلام كبرى' },
      { num: '٠٤', title: 'الفعاليات والعلاقات العامة', examples: 'أسابيع الموضة، إطلاق المنتجات، حفلات التوزيع', text: 'عندما يصل مئات من كبار الضيوف، التنسيق هو كل شيء.', clients: 'وكالات العلاقات العامة، منظمو الفعاليات' },
    ],
  },
  fr: {
    eyebrow: 'Secteurs que Nous Servons',
    headline: 'Conçu pour les Secteurs où la Réputation est Primordiale.',
    sectors: [
      { num: '01', title: 'Services Financiers', examples: 'Capital-investissement, gestion d\'actifs, banque d\'investissement', text: 'La discrétion et la ponctualité ne sont pas négociables quand vos mouvements informent le sentiment du marché.', clients: 'Type BlackRock, private equity, family offices' },
      { num: '02', title: 'Luxe & Mode', examples: 'LVMH, marques Richemont, haute couture', text: 'Le véhicule qui accueille votre invité prolonge le récit de votre marque.', clients: 'Chanel, Cartier, Chopard, Louis Vuitton' },
      { num: '03', title: 'Technologie & Médias', examples: 'Grandes entreprises tech, groupes médias', text: 'Itinéraires multi-villes gérés avec la même précision que les transferts de salle de conseil.', clients: 'Apple, groupes médias mondiaux' },
      { num: '04', title: 'Événements & RP', examples: 'Fashion weeks, lancements produits, cérémonies', text: 'Quand des centaines de VIP arrivent dans une même fenêtre, la coordination est tout.', clients: 'Agences RP mondiales, producteurs d\'événements' },
    ],
  },
}

export default function CorporateIndustries({ locale = 'en' }) {
  const c      = t[locale] || t.en
  const isRTL  = locale === 'ar'
  const secRef = useRef(null)
  const headRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 82%' } }
      )
      gsap.utils.toArray('.corp-sector-row').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            delay: i * 0.07,
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secRef}
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(64px, 10vw, 120px) clamp(20px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Header */}
      <div ref={headRef} style={{ marginBottom: 'clamp(40px, 7vw, 64px)', opacity: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '1px', backgroundColor: '#C41E1E' }} />
          <span style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E' }}>
            {c.eyebrow}
          </span>
        </div>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 4.5rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, color: '#0A0A0A',
          lineHeight: 1.0, letterSpacing: '-0.02em', margin: 0,
          maxWidth: '800px',
        }}>
          {c.headline}
        </h2>
      </div>

      {/* Sectors — horizontal accordion rows */}
      <div style={{ borderTop: '1px solid #E8E8E8' }}>
        {c.sectors.map((s, i) => (
          <div
            key={i}
            className="corp-sector-row"
            style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(36px, 5vw, 56px) 1fr auto',
              gap: 'clamp(16px, 3vw, 36px)',
              alignItems: 'start',
              padding: 'clamp(24px, 4vw, 40px) 0',
              borderBottom: '1px solid #E8E8E8',
              opacity: 0,
              transition: 'background-color 0.25s ease',
              cursor: 'default',
            }}
          >
            {/* Number */}
            <span style={{
              fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400, color: '#C41E1E',
              letterSpacing: '0.1em', paddingTop: '4px',
            }}>
              {s.num}
            </span>

            {/* Main content */}
            <div>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#0A0A0A',
                margin: '0 0 6px', lineHeight: 1.1, letterSpacing: '-0.01em',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 400, color: '#BBBBBB',
                letterSpacing: '0.1em', margin: '0 0 clamp(10px, 2vw, 16px)',
                fontStyle: 'italic',
              }}>
                {s.examples}
              </p>
              <p style={{
                fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                color: '#666666', lineHeight: 1.85,
                maxWidth: '580px', margin: 0,
              }}>
                {s.text}
              </p>
            </div>

            {/* Client tag — right aligned, hidden on small screens via wrapping */}
            <div style={{
              display: 'flex', alignItems: 'flex-start',
              paddingTop: '4px', flexShrink: 0, maxWidth: 'clamp(100px, 18vw, 200px)',
            }}>
              <span style={{
                fontSize: '9px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#CCCCCC',
                lineHeight: 1.6, textAlign: isRTL ? 'left' : 'right',
              }}>
                {s.clients}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}