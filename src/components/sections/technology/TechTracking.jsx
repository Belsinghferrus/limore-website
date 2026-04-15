'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const t = {
  en: {
    eyebrow: '01 — Real-Time Tracking',
    heading: 'Your Car. Live.',
    body:    'Every Limore vehicle transmits live GPS coordinates updated every 2 seconds. Clients see their chauffeur moving in real time — no refresh required, no estimated positions.',
    points:  [
      'Live vehicle position on an interactive map',
      'Push notification when the chauffeur departs',
      'Automatic ETA recalculation during traffic',
      'Journey history and route replay for corporate accounts',
    ],
    tag:     'Sub-2 second refresh',
  },
  ar: {
    eyebrow: '01 — التتبع في الوقت الفعلي',
    heading: 'سيارتك. مباشرة.',
    body:    'كل مركبة ليمور تبث إحداثيات GPS حية تتحدث كل ثانيتين. يرى العملاء سائقهم يتحرك في الوقت الفعلي.',
    points:  [
      'موقع المركبة مباشرة على خريطة تفاعلية',
      'إشعار فوري عند مغادرة السائق',
      'إعادة حساب وقت الوصول تلقائيا خلال الازدحام',
      'سجل الرحلات وإعادة تشغيل المسار للحسابات المؤسسية',
    ],
    tag:     'تحديث أقل من ثانيتين',
  },
  fr: {
    eyebrow: '01 — Suivi en Temps Reel',
    heading: 'Votre Voiture. En Direct.',
    body:    'Chaque vehicule Limore transmet des coordonnees GPS en direct mises a jour toutes les 2 secondes. Les clients voient leur chauffeur se deplacer en temps reel.',
    points:  [
      'Position du vehicule en direct sur une carte interactive',
      'Notification push au depart du chauffeur',
      'Recalcul automatique de l\'ETA en cas de trafic',
      'Historique des trajets et replay pour comptes entreprises',
    ],
    tag:     'Actualisation inferieure a 2 secondes',
  },
}

export default function TechTracking({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const textRef    = useRef(null)
  const visualRef  = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0, x: isRTL ? 30 : -30 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
      gsap.fromTo(visualRef.current,
        { opacity: 0, x: isRTL ? -30 : 30 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )

      // Pulse animation on the map dot
      gsap.to('.track-ping', {
        scale: 2.5, opacity: 0, repeat: -1, duration: 1.4, ease: 'power2.out',
        stagger: { each: 0.7 },
      })

      // Car path draw
      gsap.fromTo('.track-path',
        { strokeDashoffset: 300 },
        { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut', repeat: -1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [locale])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#FAFAF8',
        padding:         'clamp(72px,10vw,120px) clamp(24px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px,100%), 1fr))',
        gap:                 'clamp(40px,6vw,96px)',
        alignItems:          'center',
      }}>

        {/* Text */}
        <div ref={textRef} style={{ opacity: 0 }}>
          <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E', marginBottom: '16px' }}>
            {content.eyebrow}
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: '#0A0A0A', margin: '0 0 20px', lineHeight: 1.1 }}>
            {content.heading}
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.8rem,1.1vw,0.9rem)', fontWeight: 300, color: 'rgba(10,10,10,0.55)', lineHeight: 1.9, margin: '0 0 32px', maxWidth: '400px' }}>
            {content.body}
          </p>

          {/* Points */}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {content.points.map((pt, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                  <rect x="0.5" y="0.5" width="13" height="13" stroke="rgba(196,30,30,0.3)"/>
                  <path d="M4 7l2 2 4-4" stroke="#C41E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.76rem,1vw,0.84rem)', fontWeight: 300, color: 'rgba(10,10,10,0.6)', lineHeight: 1.7 }}>
                  {pt}
                </span>
              </li>
            ))}
          </ul>

          {/* Tag */}
          <div style={{ marginTop: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', border: '1px solid rgba(196,30,30,0.2)', backgroundColor: 'rgba(196,30,30,0.04)' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C41E1E' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C41E1E' }}>
              {content.tag}
            </span>
          </div>
        </div>

        {/* Visual — Map mock */}
        <div
          ref={visualRef}
          style={{
            opacity:         0,
            backgroundColor: '#0E1117',
            padding:         'clamp(24px,3vw,40px)',
            aspectRatio:     '4/3',
            position:        'relative',
            overflow:        'hidden',
          }}
          aria-hidden="true"
        >
          {/* Map grid */}
          <svg width="100%" height="100%" viewBox="0 0 400 300" style={{ position: 'absolute', inset: 0 }}>
            {/* Grid lines */}
            {[1,2,3,4].map(i => (
              <line key={`h${i}`} x1="0" y1={i * 60} x2="400" y2={i * 60} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            ))}
            {[1,2,3,4,5,6].map(i => (
              <line key={`v${i}`} x1={i * 66} y1="0" x2={i * 66} y2="300" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            ))}

            {/* Road shapes */}
            <path d="M40 250 Q120 200 200 150 Q280 100 360 80" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <path d="M40 250 Q120 200 200 150 Q280 100 360 80" stroke="rgba(255,255,255,0.03)" strokeWidth="14" fill="none" strokeLinecap="round"/>
            <path d="M10 150 Q100 180 200 150 Q300 120 390 160" stroke="rgba(255,255,255,0.06)" strokeWidth="5" fill="none" strokeLinecap="round"/>
            <path d="M200 10 L200 290" stroke="rgba(255,255,255,0.05)" strokeWidth="5" fill="none"/>
            <path d="M80 10 Q60 150 80 290" stroke="rgba(255,255,255,0.04)" strokeWidth="4" fill="none"/>
            <path d="M320 10 Q340 150 320 290" stroke="rgba(255,255,255,0.04)" strokeWidth="4" fill="none"/>

            {/* Route path (animated) */}
            <path
              className="track-path"
              d="M60 240 Q140 200 210 155 Q270 115 320 90"
              stroke="#C41E1E"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="300"
              strokeDashoffset="300"
              opacity="0.7"
            />

            {/* Destination pin */}
            <circle cx="320" cy="90" r="4" fill="rgba(196,30,30,0.4)"/>
            <circle cx="320" cy="90" r="2" fill="#C41E1E"/>

            {/* Car position */}
            <g transform="translate(145, 190)">
              {/* Pulse rings */}
              <circle className="track-ping" cx="0" cy="0" r="8" fill="none" stroke="rgba(196,30,30,0.4)" strokeWidth="1"/>
              <circle className="track-ping" cx="0" cy="0" r="8" fill="none" stroke="rgba(196,30,30,0.4)" strokeWidth="1" style={{ animationDelay: '0.7s' }}/>
              {/* Car dot */}
              <circle cx="0" cy="0" r="5" fill="#C41E1E"/>
              <circle cx="0" cy="0" r="3" fill="#fff"/>
            </g>

            {/* Block shapes (city) */}
            {[[50,80,30,18],[100,60,24,14],[280,200,28,16],[320,220,20,12],[60,190,22,14],[340,130,18,10]].map(([x,y,w,h], i) => (
              <rect key={i} x={x} y={y} width={w} height={h} fill="rgba(255,255,255,0.03)" rx="1"/>
            ))}
          </svg>

          {/* ETA chip */}
          <div style={{
            position:        'absolute',
            top:             '16px',
            right:           isRTL ? 'auto' : '16px',
            left:            isRTL ? '16px' : 'auto',
            backgroundColor: 'rgba(10,10,10,0.85)',
            border:          '1px solid rgba(255,255,255,0.08)',
            padding:         '10px 14px',
            display:         'flex',
            flexDirection:   'column',
            gap:             '2px',
            backdropFilter:  'blur(6px)',
          }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.3)' }}>ETA</span>
            <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 300, color: '#F8F7F4', lineHeight: 1 }}>4 min</span>
          </div>

          {/* Status bar */}
          <div style={{
            position:        'absolute',
            bottom:          0,
            left:            0,
            right:           0,
            backgroundColor: 'rgba(10,10,10,0.9)',
            borderTop:       '1px solid rgba(255,255,255,0.05)',
            padding:         '10px 16px',
            display:         'flex',
            alignItems:      'center',
            gap:             '8px',
            backdropFilter:  'blur(6px)',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 300, color: 'rgba(248,247,244,0.5)', letterSpacing: '0.04em' }}>
              Chauffeur en route — Mercedes S-Class
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}