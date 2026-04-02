'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Leadership',
    heading: 'The People\nBehind the Standard',
    sub: 'A team that has built, operated and scaled luxury service businesses across three continents.',
    members: [
      { name: 'Khalid Al Rashid', role: 'Founder and Chief Executive', location: 'Dubai', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
      { name: 'James Whitmore', role: 'Chief Operations Officer', location: 'London', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80' },
      { name: 'Aisha Benali', role: 'Head of Client Experience', location: 'Paris', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=600&q=80' },
      { name: 'Marcus Chen', role: 'Head of Technology', location: 'Singapore', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80' },
    ],
  },
  ar: {
    label: 'القيادة',
    heading: 'الأشخاص خلف\nهذا المعيار',
    sub: 'فريق بنى وأدار وطوّر أعمال خدمات فاخرة عبر ثلاث قارات.',
    members: [
      { name: 'خالد الراشد', role: 'المؤسس والرئيس التنفيذي', location: 'دبي', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
      { name: 'جيمس ويتمور', role: 'مدير العمليات', location: 'لندن', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80' },
      { name: 'عائشة بنعلي', role: 'رئيسة تجربة العملاء', location: 'باريس', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=600&q=80' },
      { name: 'ماركوس تشن', role: 'رئيس التكنولوجيا', location: 'سنغافورة', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80' },
    ],
  },
  fr: {
    label: 'Direction',
    heading: 'Les Personnes\nDerrière le Standard',
    sub: 'Une équipe qui a construit, opéré et fait évoluer des entreprises de services de luxe sur trois continents.',
    members: [
      { name: 'Khalid Al Rashid', role: 'Fondateur et Directeur Général', location: 'Dubai', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
      { name: 'James Whitmore', role: 'Directeur des Opérations', location: 'Londres', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80' },
      { name: 'Aisha Benali', role: 'Responsable Expérience Client', location: 'Paris', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=600&q=80' },
      { name: 'Marcus Chen', role: 'Responsable Technologie', location: 'Singapour', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80' },
    ],
  },
}

export default function AboutTeam({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%' }
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 44 },
          { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: i * 0.1, scrollTrigger: st }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 100px) clamp(24px, 6vw, 96px) clamp(40px, 5vw, 64px)',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '24px', borderBottom: '1px solid #EBEBEB', opacity: 0,
        }}
      >
        <div>
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
            fontSize: 'clamp(2.4rem, 5vw, 5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400, color: '#0A0A0A',
            lineHeight: 1.02, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        <p style={{
          fontSize: '14px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: '#888', lineHeight: 1.7,
          maxWidth: '320px',
        }}>
          {content.sub}
        </p>
      </div>

      {/* Team grid */}
      <div className="at-grid">
        {content.members.map((m, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{
              position: 'relative', overflow: 'hidden',
              borderRight: '1px solid #EBEBEB', opacity: 0,
            }}
            className="at-card"
          >
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src={m.image}
                alt={m.name}
                width={600} height={800} loading="lazy"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  objectPosition: 'top center',
                  filter: 'grayscale(20%)',
                  transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.5s ease',
                  display: 'block',
                }}
                className="at-card-img"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', top: '16px', right: '16px',
                width: '20px', height: '20px',
                borderTop: '1px solid rgba(196,30,30,0.6)',
                borderRight: '1px solid rgba(196,30,30,0.6)',
              }} />
            </div>
            <div style={{ padding: '24px 24px 28px', borderTop: '1px solid #EBEBEB' }}>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#0A0A0A',
                marginBottom: '6px', lineHeight: 1.2,
              }}>
                {m.name}
              </p>
              <p style={{
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 400, color: '#888',
                letterSpacing: '0.08em', marginBottom: '6px',
              }}>
                {m.role}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true">
                  <path d="M5 1C3.07 1 1.5 2.57 1.5 4.5 1.5 7.25 5 11 5 11s3.5-3.75 3.5-6.5C8.5 2.57 6.93 1 5 1zm0 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#C41E1E" fillOpacity="0.7"/>
                </svg>
                <span style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, color: '#ADADAD', letterSpacing: '0.1em',
                }}>
                  {m.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .at-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background-color: #EBEBEB;
        }
        @media (min-width: 1024px) {
          .at-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .at-card:hover .at-card-img {
          transform: scale(1.04);
          filter: grayscale(0%) !important;
        }
      `}</style>
    </section>
  )
}