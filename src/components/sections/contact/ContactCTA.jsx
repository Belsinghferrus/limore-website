'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const RED       = '#C8102E'
const RED_HOVER = '#A50D25'
const BG        = '#080808'
const SURFACE   = '#0D0D0D'
const BORDER    = 'rgba(255,255,255,0.07)'
const TEXT      = '#F8F7F4'
const MUTED     = 'rgba(248,247,244,0.38)'
const FAINT     = 'rgba(248,247,244,0.18)'
const FONT_D    = 'Cormorant Garamond, Georgia, serif'
const FONT_B    = 'Inter, sans-serif'

// ─── Translations ──────────────────────────────────────────────────────────────
const copy = {
  en: {
    dir: 'ltr',
    eyebrow: 'Our Programmes',
    cards: [
      {
        tag:         'Limore 360',
        headline:    'The Membership\nFor Those Who Move.',
        sub:         'A dedicated corporate subscription programme — Essential, Prestige, and Bespoke tiers designed for executives and enterprises who demand consistency, privacy, and uncompromising service.',
        cta:         'Explore Limore 360',
        href:        '/en/limore-360',
        accent:      true,
        pillars: ['Essential — 20 hrs', 'Prestige — 50 hrs', 'Bespoke — Custom'],
      },
      {
        tag:         'Corporate',
        headline:    'Mobility Built\nFor Business.',
        sub:         'Dedicated corporate accounts for financial institutions, luxury brands, and enterprise clients. Managed billing, a personal account manager, and global ground coverage.',
        cta:         'Corporate Enquiry',
        href:        '/en/corporate-solutions',
        accent:      false,
        pillars: ['Dedicated Account Manager', 'Monthly Billing', 'Global Coverage'],
      },
    ],
  },
  ar: {
    dir: 'rtl',
    eyebrow: 'برامجنا',
    cards: [
      {
        tag:         'ليمور ٣٦٠',
        headline:    'العضوية\nلمن يتحرك.',
        sub:         'برنامج اشتراك مؤسسي مخصص — مستويات أساسية وبريستيج ومخصصة مصممة للمديرين التنفيذيين والمؤسسات الذين يطالبون بالاتساق والخصوصية والخدمة الفائقة.',
        cta:         'استكشف ليمور ٣٦٠',
        href:        '/ar/limore-360',
        accent:      true,
        pillars: ['أساسي — ٢٠ ساعة', 'بريستيج — ٥٠ ساعة', 'مخصص'],
      },
      {
        tag:         'الشركات',
        headline:    'تنقل مصمم\nللأعمال.',
        sub:         'حسابات مؤسسية مخصصة للمؤسسات المالية والعلامات التجارية الفاخرة وعملاء المؤسسات. فواتير مُدارة ومدير حساب شخصي وتغطية عالمية.',
        cta:         'استفسار مؤسسي',
        href:        '/ar/corporate',
        accent:      false,
        pillars: ['مدير حساب مخصص', 'فواتير شهرية', 'تغطية عالمية'],
      },
    ],
  },
  fr: {
    dir: 'ltr',
    eyebrow: 'Nos Programmes',
    cards: [
      {
        tag:         'Limore 360',
        headline:    'L\'Adhésion\nPour Ceux Qui Bougent.',
        sub:         'Un programme d\'abonnement corporate dédié - niveaux Essential, Prestige et Bespoke conçus pour les dirigeants et les entreprises qui exigent cohérence, confidentialité et service irréprochable.',
        cta:         'Découvrir Limore 360',
        href:        '/fr/limore-360',
        accent:      true,
        pillars: ['Essential — 20h', 'Prestige — 50h', 'Bespoke — Sur Mesure'],
      },
      {
        tag:         'Corporate',
        headline:    'La Mobilité\nAu Service des Affaires.',
        sub:         'Comptes corporate dédiés pour institutions financières, marques de luxe et grandes entreprises. Facturation gérée, account manager personnel et couverture mondiale.',
        cta:         'Demande Corporate',
        href:        '/fr/corporate',
        accent:      false,
        pillars: ['Account Manager Dédié', 'Facturation Mensuelle', 'Couverture Mondiale'],
      },
    ],
  },
}

// ─── Icons ─────────────────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path d="M1 4h10M7 1l4 3-4 3"
        stroke="currentColor" strokeWidth="1.1"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
      <path d="M1 4l3 3 5-6"
        stroke={RED} strokeWidth="1.1"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── CTA Card ─────────────────────────────────────────────────────────────────
function CTACard({ card, dir, index }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 44 },
      {
        opacity: 1, y: 0,
        duration: 0.85, ease: 'power3.out',
        delay: index * 0.15,
        scrollTrigger: { trigger: cardRef.current, start: 'top 88%' },
      }
    )
  }, [index])

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         'flex',
        flexDirection:   'column',
        justifyContent:  'space-between',
        padding:         'clamp(28px,4vw,48px)',
        backgroundColor: card.accent
          ? hovered ? 'rgba(200,16,46,0.08)' : 'rgba(200,16,46,0.04)'
          : hovered ? 'rgba(255,255,255,0.04)' : SURFACE,
     
        
        position:        'relative',
        overflow:        'hidden',
        opacity:         0,
        transition:      'background-color 0.3s ease, border-color 0.3s ease',
        minHeight:       'clamp(340px,40vw,480px)',
      }}
    >
      {/* Subtle corner accent for 360 card */}
      {card.accent && (
        <div style={{
          position:   'absolute',
          top:        0,
          right:      dir === 'rtl' ? 'auto' : 0,
          left:       dir === 'rtl' ? 0 : 'auto',
          width:      '120px',
          height:     '120px',
          background: 'radial-gradient(circle at top right, rgba(200,16,46,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Top row — tag */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(18px,3vw,28px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize:        '9px',
            fontFamily:      FONT_B,
            fontWeight:      500,
            letterSpacing:   '0.22em',
            textTransform:   'uppercase',
            color:           card.accent ? RED : FAINT,
            padding:         '5px 12px',
            border:          `1px solid ${card.accent ? 'rgba(200,16,46,0.3)' : 'rgba(248,247,244,0.1)'}`,
            backgroundColor: card.accent ? 'rgba(200,16,46,0.06)' : 'transparent',
          }}>
            {card.tag}
          </span>

          {/* Animated arrow */}
          <span style={{
            color:      hovered ? (card.accent ? RED : TEXT) : FAINT,
            transition: 'color 0.25s ease, transform 0.25s ease',
            transform:  hovered ? 'translate(3px, -3px)' : 'translate(0,0)',
          }}>
            <ArrowIcon />
          </span>
        </div>

        {/* Headline */}
        <h3 style={{
          fontSize:      'clamp(1.5rem,3.2vw,3rem)',
          fontFamily:    FONT_D,
          fontWeight:    300,
          lineHeight:    0.95,
          letterSpacing: '-0.025em',
          color:         TEXT,
          margin:        0,
          whiteSpace:    'pre-line',
        }}>
          {card.headline}
        </h3>

        {/* Sub */}
        <p style={{
          fontSize:   'clamp(0.82rem,1.1vw,0.92rem)',
          fontFamily: FONT_B,
          fontWeight: 300,
          lineHeight: 1.9,
          color:      MUTED,
          margin:     0,
        }}>
          {card.sub}
        </p>

        {/* Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {card.pillars.map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckIcon />
              <span style={{
                fontSize:   'clamp(0.78rem,1vw,0.86rem)',
                fontFamily: FONT_B,
                fontWeight: 300,
                color:      hovered ? MUTED : FAINT,
                transition: 'color 0.25s ease',
              }}>
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div style={{ marginTop: 'clamp(24px,4vw,36px)' }}>
        <Link
          href={card.href}
          className={card.accent ? 'ccta-btn-primary' : 'ccta-btn-ghost'}
          style={{
            display:         'inline-flex',
            alignItems:      'center',
            justifyContent:  'space-between',
            gap:             '12px',
            width:           '100%',
            boxSizing:       'border-box',
            padding:         '14px 20px',
            backgroundColor: card.accent ? RED : 'transparent',
            color:           card.accent ? '#FFFFFF' : TEXT,
            textDecoration:  'none',
            fontSize:        '10px',
            fontFamily:      FONT_B,
            fontWeight:      500,
            letterSpacing:   '0.2em',
            textTransform:   'uppercase',
            border:          card.accent ? 'none' : `1px solid ${BORDER}`,
            transition:      'background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease',
          }}
        >
          <span>{card.cta}</span>
          <ArrowIcon />
        </Link>
      </div>

      {/* Bottom hover bar */}
      <div style={{
        position:       'absolute',
        bottom:         0,
        left:           0,
        right:          0,
        height:         '2px',
        backgroundColor: RED,
        transform:      hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: dir === 'rtl' ? 'right' : 'left',
        transition:     'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
      }} />
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function ContactCTA({ locale = 'en' }) {
  const c        = copy[locale] || copy.en
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: eyebrowRef.current, start: 'top 88%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: BG,
        padding:         'clamp(64px,10vw,120px) clamp(20px,6vw,96px)',
        direction:       c.dir,
        position:        'relative',
        overflow:        'hidden',
      }}
    >
      {/* Top border */}
      <div style={{
        position:   'absolute',
        top:        0,
        left:       '8%',
        right:      '8%',
        height:     '1px',
        background: 'linear-gradient(to right, transparent, rgba(200,16,46,0.45), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Eyebrow */}
      <div
        ref={eyebrowRef}
        style={{
          display:      'flex',
          alignItems:   'center',
          gap:          '12px',
          marginBottom: 'clamp(32px,5vw,52px)',
          opacity:      0,
        }}
      >
        <div style={{ width: '28px', height: '1px', backgroundColor: RED, flexShrink: 0 }} />
        <span style={{
          fontSize:      '10px',
          fontFamily:    FONT_B,
          fontWeight:    500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color:         RED,
        }}>
          {c.eyebrow}
        </span>
      </div>

      {/* Cards grid */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap:                 'clamp(16px,2.5vw,24px)',
      }}>
        {c.cards.map((card, i) => (
          <CTACard
            key={card.tag}
            card={card}
            dir={c.dir}
            index={i}
          />
        ))}
      </div>

      <style>{`
        .ccta-btn-primary:hover {
          background-color: ${RED_HOVER} !important;
        }
        .ccta-btn-ghost:hover {
          border-color:     rgba(200,16,46,0.4)  !important;
          color:            ${RED}               !important;
          background-color: rgba(200,16,46,0.05) !important;
        }
      `}</style>
    </section>
  )
}