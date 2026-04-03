'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { regionCount, countryCount, cityCount } from '@/data/coverage'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    stats: [
      { value: regionCount,  label: 'Regions',   suffix: '' },
      { value: countryCount, label: 'Countries', suffix: '+' },
      { value: cityCount,    label: 'Cities',    suffix: '+' },
      { value: 24,           label: 'Hours',     suffix: '/7' },
    ],
    tagline: 'The same briefing, the same vehicle standard, the same service protocol — regardless of city.',
  },
  ar: {
    stats: [
      { value: regionCount,  label: 'مناطق',  suffix: '' },
      { value: countryCount, label: 'دول',    suffix: '+' },
      { value: cityCount,    label: 'مدن',    suffix: '+' },
      { value: 24,           label: 'ساعة',   suffix: '/7' },
    ],
    tagline: 'نفس التعليمات، نفس معيار المركبة، نفس بروتوكول الخدمة — بغض النظر عن المدينة.',
  },
  fr: {
    stats: [
      { value: regionCount,  label: 'Régions',  suffix: '' },
      { value: countryCount, label: 'Pays',     suffix: '+' },
      { value: cityCount,    label: 'Villes',   suffix: '+' },
      { value: 24,           label: 'Heures',   suffix: '/7' },
    ],
    tagline: 'Le même briefing, le même standard de véhicule, le même protocole de service — quelle que soit la ville.',
  },
}

function CountUp({ target, suffix, started }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!started) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: target, duration: 1.8, ease: 'power2.out',
      onUpdate: () => setDisplay(Math.round(obj.val)),
    })
  }, [started, target])
  return <>{display}{suffix}</>
}

export default function CoverageStats({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => setStarted(true),
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#0A0A0A',
        padding: 'clamp(48px, 7vw, 80px) clamp(24px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Stats row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: 'clamp(24px, 4vw, 0px)',
        borderTop: '1px solid rgba(248,247,244,0.06)',
        borderBottom: '1px solid rgba(248,247,244,0.06)',
        paddingBlock: 'clamp(32px, 4vw, 48px)',
        marginBottom: 'clamp(28px, 4vw, 40px)',
      }}>
        {content.stats.map((s, i) => (
          <div key={i} style={{
            textAlign: 'center',
            borderLeft: i > 0 ? '1px solid rgba(248,247,244,0.06)' : 'none',
            padding: '0 clamp(16px, 3vw, 32px)',
          }}>
            <p style={{
              fontSize: 'clamp(2rem, 4vw, 4rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, color: '#F8F7F4', lineHeight: 1,
              marginBottom: '8px',
              fontVariantNumeric: 'tabular-nums',
            }}>
              <CountUp target={s.value} suffix={s.suffix} started={started} />
            </p>
            <p style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(248,247,244,0.25)',
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Tagline */}
      <p style={{
        fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
        fontFamily: 'Inter, sans-serif', fontWeight: 300,
        color: 'rgba(248,247,244,0.28)', lineHeight: 1.9,
        maxWidth: '600px',
        margin: isRTL ? '0 0 0 auto' : '0 auto 0 0',
      }}>
        {content.tagline}
      </p>
    </section>
  )
}