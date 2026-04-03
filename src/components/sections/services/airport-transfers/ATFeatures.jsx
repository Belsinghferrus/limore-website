'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'What Is Included',
    heading: 'Every Transfer\nComes Standard With',
    features: [
      { title: 'Real-Time Flight Tracking', body: 'Your flight is monitored from departure gate to touchdown. We adjust in real time — so your chauffeur is always there at the right moment.', icon: 'radar' },
      { title: 'Professional Meet and Greet', body: 'Your chauffeur stands in the arrivals hall with a name board. Smart uniform. Courteous. On time. Every time.', icon: 'person' },
      { title: 'Luggage Assistance', body: 'From carousel to vehicle — all luggage is handled by your chauffeur. No trolleys. No waiting. No effort from you.', icon: 'luggage' },
      { title: 'Onboard Amenities', body: 'Still or sparkling water, Wi-Fi, phone chargers, and newspapers where available. Preferences are saved after your first journey.', icon: 'amenities' },
      { title: 'Privacy and Discretion', body: 'Partition screens, no unnecessary conversation, and complete NDA compliance. What happens in a Limore vehicle remains private.', icon: 'shield' },
      { title: 'No Waiting Charge Policy', body: 'We absorb up to 60 minutes of post-landing time at no extra charge. Delays are not your responsibility. They are ours to manage.', icon: 'clock' },
    ],
    imageCaption: 'Arrivals Protocol — Dubai International',
  },
  ar: {
    label: 'ما هو مشمول',
    heading: 'كل نقل يأتي\nبشكل معياري مع',
    features: [
      { title: 'تتبع الرحلة في الوقت الفعلي', body: 'يتم مراقبة رحلتك من بوابة المغادرة حتى الهبوط. نتكيف في الوقت الفعلي.', icon: 'radar' },
      { title: 'استقبال احترافي', body: 'سائقك يقف في صالة الوصول بلوحة باسمك. زي أنيق. مؤدب. في الوقت المحدد.', icon: 'person' },
      { title: 'مساعدة في الأمتعة', body: 'من حزام الأمتعة إلى السيارة — سائقك يتولى جميع الأمتعة.', icon: 'luggage' },
      { title: 'وسائل الراحة على المتن', body: 'مياه ومشروبات وواي فاي وشواحن. تفضيلاتك محفوظة بعد رحلتك الأولى.', icon: 'amenities' },
      { title: 'الخصوصية والتكتم', body: 'شاشات عازلة وامتثال كامل لاتفاقية عدم الإفصاح.', icon: 'shield' },
      { title: 'سياسة عدم رسوم الانتظار', body: 'نستوعب ما يصل إلى 60 دقيقة من وقت ما بعد الهبوط دون رسوم إضافية.', icon: 'clock' },
    ],
    imageCaption: 'بروتوكول الوصول — دبي الدولي',
  },
  fr: {
    label: 'Ce qui Est Inclus',
    heading: 'Chaque Transfert\nInclut en Standard',
    features: [
      { title: 'Suivi de Vol en Temps Réel', body: 'Votre vol est surveillé de la porte d\'embarquement jusqu\'à l\'atterrissage.', icon: 'radar' },
      { title: 'Accueil Professionnel', body: 'Votre chauffeur vous attend en salle d\'arrivées avec une pancarte nominative.', icon: 'person' },
      { title: 'Assistance Bagages', body: 'Du tapis roulant au véhicule — tous les bagages sont pris en charge.', icon: 'luggage' },
      { title: 'Équipements à Bord', body: 'Eau, Wi-Fi, chargeurs de téléphone. Vos préférences sont mémorisées dès le premier trajet.', icon: 'amenities' },
      { title: 'Confidentialité', body: 'Cloisons de séparation et conformité totale aux NDA.', icon: 'shield' },
      { title: 'Politique Sans Frais d\'Attente', body: 'Nous absorbons jusqu\'à 60 minutes après l\'atterrissage sans frais supplémentaires.', icon: 'clock' },
    ],
    imageCaption: 'Protocole d\'Arrivées — Dubaï International',
  },
}

const FeatureIcons = {
  radar: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="9" stroke="#C41E1E" strokeWidth="1"/>
      <circle cx="11" cy="11" r="5" stroke="#C41E1E" strokeWidth="1" strokeDasharray="2 2"/>
      <circle cx="11" cy="11" r="2" fill="#C41E1E"/>
      <line x1="11" y1="2" x2="11" y2="5" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="20" y1="11" x2="17" y2="11" stroke="#C41E1E" strokeWidth="1"/>
    </svg>
  ),
  person: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="6" r="3" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M4 20v-2a7 7 0 0114 0v2" stroke="#C41E1E" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  luggage: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="6" y="7" width="10" height="12" rx="1" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M9 7V5a2 2 0 014 0v2" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="11" y1="10" x2="11" y2="16" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="8" y1="13" x2="14" y2="13" stroke="#C41E1E" strokeWidth="1"/>
    </svg>
  ),
  amenities: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M7 3h8l2 7H5L7 3z" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M5 10v8a1 1 0 001 1h10a1 1 0 001-1v-8" stroke="#C41E1E" strokeWidth="1"/>
      <line x1="11" y1="3" x2="11" y2="10" stroke="#C41E1E" strokeWidth="1"/>
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2L3 5.5v6.5c0 5 3.5 9.2 8 10.5 4.5-1.3 8-5.5 8-10.5V5.5L11 2z" stroke="#C41E1E" strokeWidth="1"/>
      <polyline points="7.5,11 10,13.5 14.5,9" stroke="#C41E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="9" stroke="#C41E1E" strokeWidth="1"/>
      <path d="M11 6v5l3 3" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
}

export default function ATFeatures({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const imageRef   = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 73%' }

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      gsap.fromTo(imageRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.inOut', delay: 0.2, scrollTrigger: st }
      )
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: 0.2 + i * 0.09, scrollTrigger: st }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#161616' }} />

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 100px) clamp(24px, 6vw, 96px) clamp(40px, 6vw, 64px)',
          borderBottom: '1px solid #161616', opacity: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.25em',
            textTransform: 'uppercase', color: '#C41E1E',
          }}>
            {content.label}
          </span>
        </div>
        <h2 style={{
          fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, color: '#F8F7F4',
          lineHeight: 1.02, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
        }}>
          {content.heading}
        </h2>
      </div>

      {/* Content grid */}
      <div className="atf-grid">

        {/* Left — features */}
        <div style={{
          padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 64px)',
          borderRight: '1px solid #161616',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1px',
          alignContent: 'start',
          backgroundColor: '#161616',
        }}>
          {content.features.map((f, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="atf-card"
              style={{
                backgroundColor: '#0A0A0A',
                padding: 'clamp(20px, 3vw, 32px)',
                opacity: 0,
                transition: 'background-color 0.3s ease',
              }}
            >
              <div style={{ marginBottom: '14px' }}>{FeatureIcons[f.icon]}</div>
              <h3 style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#F8F7F4',
                marginBottom: '10px', lineHeight: 1.2,
              }}>
                {f.title}
              </h3>
              <p style={{
                fontSize: '13px', fontFamily: 'Inter, sans-serif',
                fontWeight: 300, color: 'rgba(248,247,244,0.4)',
                lineHeight: 1.75,
              }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Right — editorial image */}
        <div
          ref={imageRef}
          style={{
            position: 'relative', overflow: 'hidden',
            clipPath: 'inset(0 100% 0 0)',
            minHeight: '400px',
          }}
          className="atf-img-panel"
        >
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1000&q=85"
            alt="Limore airport transfer chauffeur"
            width={1000} height={1400} loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block',
              transition: 'transform 0.8s ease',
              filter: 'brightness(0.85)',
            }}
            className="atf-img"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '24px', left: '24px',
          }}>
            <p style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(248,247,244,0.6)',
            }}>
              {content.imageCaption}
            </p>
          </div>
          <div style={{
            position: 'absolute', top: '24px', right: '24px',
            width: '24px', height: '24px',
            borderTop: '1.5px solid rgba(196,30,30,0.6)',
            borderRight: '1.5px solid rgba(196,30,30,0.6)',
          }} />
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#161616' }} />

      <style>{`
        .atf-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .atf-grid { grid-template-columns: 1.4fr 1fr; }
        }
        .atf-img-panel { display: none; }
        @media (min-width: 768px) {
          .atf-img-panel { display: block; }
        }
        .atf-card:hover { background-color: #111 !important; }
        .atf-img-panel:hover .atf-img { transform: scale(1.03); }
      `}</style>
    </section>
  )
}