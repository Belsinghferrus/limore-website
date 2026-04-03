'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { regions } from '@/data/coverage'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow:      'Our Presence',
    headline:     'We Operate Globally.',
    sub:          'One standard of service, delivered across every major market in the world.',
    allRegions:   'All Regions',
    cities:       'cities',
    countries:    'countries',
    expand:       'Explore',
    collapse:     'Close',
    citiesIn:     'Cities in',
  },
  ar: {
    eyebrow:      'حضورنا',
    headline:     'نعمل عالمياً.',
    sub:          'معيار خدمة واحد، مُقدَّم في كل الأسواق الرئيسية حول العالم.',
    allRegions:   'كل المناطق',
    cities:       'مدن',
    countries:    'دول',
    expand:       'استكشاف',
    collapse:     'إغلاق',
    citiesIn:     'مدن في',
  },
  fr: {
    eyebrow:      'Notre Présence',
    headline:     'Nous opérons mondiallement.',
    sub:          'Un seul standard de service, délivré dans chaque grand marché mondial.',
    allRegions:   'Toutes Régions',
    cities:       'villes',
    countries:    'pays',
    expand:       'Explorer',
    collapse:     'Fermer',
    citiesIn:     'Villes en',
  },
}

// ── Utility ──────────────────────────────────────────────
function hex2rgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

// ── Tab bar ───────────────────────────────────────────────
function RegionTabs({ locale, active, onChange }) {
  const isRTL   = locale === 'ar'
  const ui      = t[locale] || t.en
  const inkRef  = useRef(null)
  const btnRefs = useRef([])
  const barRef  = useRef(null)

  const allOption = { id: 'all', label: { en: ui.allRegions, ar: ui.allRegions, fr: ui.allRegions }, color: '#0A0A0A' }
  const tabs = [allOption, ...regions.map(r => ({ id: r.id, label: r.label, color: r.color }))]

  const moveInk = useCallback((el, color) => {
    if (!el || !inkRef.current || !barRef.current) return
    const bar  = barRef.current.getBoundingClientRect()
    const pill = el.getBoundingClientRect()
    gsap.to(inkRef.current, {
      x:     pill.left - bar.left + barRef.current.scrollLeft,
      width: pill.width,
      backgroundColor: color || '#0A0A0A',
      duration: 0.4, ease: 'power3.inOut',
    })
  }, [])

  useEffect(() => {
    const idx = tabs.findIndex(p => p.id === active)
    const el  = btnRefs.current[idx]
    const col = tabs[idx]?.color
    if (el) {
      // small delay so DOM is painted
      requestAnimationFrame(() => moveInk(el, col))
    }
  }, [active, moveInk])

  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 30,
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E8E8E8',
      direction: isRTL ? 'rtl' : 'ltr',
    }}>
      <div
        ref={barRef}
        className="cov2-bar"
        style={{
          display: 'flex', overflowX: 'auto', position: 'relative',
          padding: '0 clamp(20px, 5vw, 80px)',
          scrollbarWidth: 'none',
          gap: '0',
        }}
      >
        {/* Sliding ink underline */}
        <div
          ref={inkRef}
          style={{
            position: 'absolute', bottom: '-1px',
            height: '2px', width: '80px',
            backgroundColor: '#0A0A0A',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={el => (btnRefs.current[i] = el)}
            onClick={() => { onChange(tab.id); moveInk(btnRefs.current[i], tab.color) }}
            className="cov2-tab"
            aria-pressed={active === tab.id}
            style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: 'clamp(16px, 2vw, 20px) clamp(14px, 2vw, 24px)',
              background: 'none', border: 'none', cursor: 'pointer',
              whiteSpace: 'nowrap', flexShrink: 0,
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: active === tab.id ? 600 : 400,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: active === tab.id ? '#0A0A0A' : '#AAAAAA',
              transition: 'color 0.22s ease, font-weight 0.22s ease',
            }}
          >
            {/* Color dot for regions (not for "all") */}
            {tab.id !== 'all' && (
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                backgroundColor: active === tab.id ? tab.color : '#DDDDDD',
                flexShrink: 0,
                transition: 'background-color 0.3s ease',
              }} />
            )}
            {tab.label[locale] || tab.label.en}
          </button>
        ))}
      </div>
      <style>{`
        .cov2-bar::-webkit-scrollbar { display: none; }
        .cov2-tab:hover { color: #0A0A0A !important; }
      `}</style>
    </div>
  )
}

// ── City chip ─────────────────────────────────────────────
function CityChip({ city, locale, color }) {
  return (
    <span
      className="cov2-city-chip"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        padding: '6px 14px',
        fontSize: '10px', fontFamily: 'Inter, sans-serif',
        fontWeight: 400, letterSpacing: '0.1em',
        color: '#555555',
        border: '1px solid #EBEBEB',
        backgroundColor: '#FAFAFA',
        cursor: 'default',
        transition: 'all 0.2s ease',
        '--chip-color': color,
      }}
    >
      <span style={{
        width: '4px', height: '4px', borderRadius: '50%',
        backgroundColor: color, flexShrink: 0,
      }} />
      {city[locale] || city.en}
      <style>{`
        .cov2-city-chip:hover {
          background-color: var(--chip-color, #C41E1E)10 !important;
          border-color: var(--chip-color, #C41E1E)30 !important;
          color: #0A0A0A !important;
        }
      `}</style>
    </span>
  )
}

// ── Country row (inside a region panel) ───────────────────
function CountryRow({ country, locale, color, index, isLast }) {
  const isRTL     = locale === 'ar'
  const [open, setOpen] = useState(false)
  const drawerRef = useRef(null)
  const rowRef    = useRef(null)

  useEffect(() => {
    gsap.fromTo(rowRef.current,
      { opacity: 0, x: isRTL ? 20 : -20 },
      {
        opacity: 1, x: 0, duration: 0.55, ease: 'power3.out',
        delay: index * 0.05,
        scrollTrigger: { trigger: rowRef.current, start: 'top 90%' },
      }
    )
  }, [index, isRTL])

  const toggle = () => {
    if (!open) {
      setOpen(true)
      gsap.fromTo(drawerRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
      )
    } else {
      gsap.to(drawerRef.current, {
        height: 0, opacity: 0, duration: 0.3, ease: 'power3.in',
        onComplete: () => setOpen(false),
      })
    }
  }

  return (
    <div
      ref={rowRef}
      style={{
        opacity: 0,
        borderBottom: isLast ? 'none' : '1px solid #F0F0F0',
      }}
    >
      {/* Row header */}
      <button
        onClick={toggle}
        aria-expanded={open}
        className="cov2-country-row"
        style={{
          width: '100%', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: isRTL ? 'right' : 'left',
          padding: 'clamp(14px, 2vw, 18px) 0',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '16px',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
          {/* Flag */}
          <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', lineHeight: 1, flexShrink: 0 }}>
            {country.flag}
          </span>
          {/* Name */}
          <span style={{
            fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 500, color: '#0A0A0A', letterSpacing: '0.01em',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {country.name[locale] || country.name.en}
          </span>
          {/* City count pill */}
          <span style={{
            fontSize: '9px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.12em',
            color: open ? '#FFFFFF' : color,
            backgroundColor: open ? color : hex2rgba(color, 0.08),
            padding: '3px 9px',
            transition: 'all 0.28s ease',
            flexShrink: 0,
          }}>
            {country.cities.length}
          </span>
        </div>

        {/* Expand icon */}
        <span style={{
          width: '28px', height: '28px', flexShrink: 0,
          border: `1px solid ${open ? color : '#E0E0E0'}`,
          backgroundColor: open ? color : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.28s ease',
        }}>
          <svg
            width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true"
            style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.28s ease' }}
          >
            <path d="M4.5 1v7M1 4.5h7" stroke={open ? '#fff' : '#AAAAAA'} strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      {/* Cities drawer */}
      <div ref={drawerRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <div style={{
          paddingBottom: 'clamp(14px, 2vw, 20px)',
          display: 'flex', flexWrap: 'wrap', gap: '8px',
        }}>
          {country.cities.map((city, i) => (
            <CityChip key={i} city={city} locale={locale} color={color} />
          ))}
        </div>
      </div>

      <style>{`
        .cov2-country-row:hover > div > span:last-child { color: #0A0A0A !important; }
      `}</style>
    </div>
  )
}

// ── Region panel (accordion item) ─────────────────────────
function RegionPanel({ region, locale, index, isActive, onToggle }) {
  const isRTL      = locale === 'ar'
  const panelRef   = useRef(null)
  const bodyRef    = useRef(null)
  const numRef     = useRef(null)
  const headerRef  = useRef(null)

  const totalCities = region.countries.reduce((acc, c) => acc + c.cities.length, 0)

  useEffect(() => {
    gsap.fromTo(panelRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        delay: index * 0.07,
        scrollTrigger: { trigger: panelRef.current, start: 'top 85%' },
      }
    )
  }, [index])

  useEffect(() => {
    if (!bodyRef.current) return
    if (isActive) {
      gsap.fromTo(bodyRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' }
      )
    } else {
      gsap.to(bodyRef.current, {
        height: 0, opacity: 0, duration: 0.38, ease: 'power3.in',
      })
    }
  }, [isActive])

  // Hover parallax on the large number
  const onMouseMove = (e) => {
    if (!numRef.current || !headerRef.current) return
    const rect = headerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8
    gsap.to(numRef.current, { x, y, duration: 0.6, ease: 'power2.out' })
  }
  const onMouseLeave = () => {
    gsap.to(numRef.current, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' })
  }

  return (
    <div
      ref={panelRef}
      className="cov2-region-panel"
      style={{
        opacity: 0,
        borderTop: '1px solid #E8E8E8',
        backgroundColor: isActive ? '#FAFAFA' : '#FFFFFF',
        transition: 'background-color 0.35s ease',
      }}
    >
      {/* ── Panel header ── */}
      <button
        ref={headerRef}
        onClick={() => onToggle(region.id)}
        aria-expanded={isActive}
        className="cov2-region-header"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          width: '100%', background: 'none', border: 'none',
          cursor: 'pointer',
          padding: 'clamp(24px, 4vw, 40px) clamp(20px, 5vw, 80px)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '24px',
          direction: isRTL ? 'rtl' : 'ltr',
          position: 'relative', overflow: 'hidden',
          textAlign: isRTL ? 'right' : 'left',
        }}
      >
        {/* Ghost number (parallax decoration) */}
        <span
          ref={numRef}
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: isRTL ? 'auto' : 'clamp(60px, 8vw, 120px)',
            left:  isRTL ? 'clamp(60px, 8vw, 120px)' : 'auto',
            top: '50%', transform: 'translateY(-50%)',
            fontSize: 'clamp(5rem, 12vw, 11rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300,
            color: isActive ? hex2rgba(region.color, 0.07) : 'rgba(0,0,0,0.03)',
            lineHeight: 1, pointerEvents: 'none',
            userSelect: 'none',
            transition: 'color 0.4s ease',
            letterSpacing: '-0.04em',
          }}
        >
          0{index + 1}
        </span>

        {/* Left — region info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 3vw, 32px)', minWidth: 0 }}>
          {/* Color bar */}
          <div style={{
            width: '3px', alignSelf: 'stretch', minHeight: '40px',
            backgroundColor: isActive ? region.color : '#E0E0E0',
            flexShrink: 0,
            transition: 'background-color 0.35s ease',
          }} />

          <div style={{ minWidth: 0 }}>
            {/* Region name */}
            <h2 style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 3rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: isActive ? 400 : 300,
              color: isActive ? '#0A0A0A' : '#4A4A4A',
              margin: 0, lineHeight: 1.1,
              letterSpacing: '-0.01em',
              transition: 'color 0.3s ease, font-weight 0.3s ease',
            }}>
              {region.label[locale] || region.label.en}
            </h2>

            {/* Meta line */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              marginTop: '6px', flexWrap: 'wrap',
            }}>
              <span style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 400, letterSpacing: '0.14em',
                color: '#AAAAAA',
              }}>
                {region.countries.length} {t[locale]?.countries || 'countries'}
              </span>
              <span style={{ color: '#DDDDDD', fontSize: '10px' }}>—</span>
              <span style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 400, letterSpacing: '0.14em',
                color: '#AAAAAA',
              }}>
                {totalCities} {t[locale]?.cities || 'cities'}
              </span>
            </div>
          </div>
        </div>

        {/* Right — open/close indicator */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          flexShrink: 0,
        }}>
          {/* Animated ring */}
          <div style={{
            width: 'clamp(40px, 5vw, 52px)', height: 'clamp(40px, 5vw, 52px)',
            borderRadius: '50%',
            border: `1px solid ${isActive ? region.color : '#E0E0E0'}`,
            backgroundColor: isActive ? region.color : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.35s ease',
          }}>
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
              style={{
                transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.35s ease',
              }}
            >
              <path
                d="M6 1v10M1 6h10"
                stroke={isActive ? '#FFFFFF' : '#AAAAAA'}
                strokeWidth="1.3" strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* ── Panel body ── */}
      <div ref={bodyRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <div style={{
          padding: '0 clamp(20px, 5vw, 80px) clamp(28px, 4vw, 48px)',
          direction: isRTL ? 'rtl' : 'ltr',
        }}>
          {/* Countries list */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
            gap: '0 clamp(24px, 5vw, 64px)',
          }}>
            {region.countries.map((country, i) => (
              <CountryRow
                key={country.id}
                country={country}
                locale={locale}
                color={region.color}
                index={i}
                isLast={i === region.countries.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cov2-region-panel:last-child { border-bottom: 1px solid #E8E8E8; }
        .cov2-region-header:hover h2 { color: #0A0A0A !important; }
      `}</style>
    </div>
  )
}

// ── Section headline block ────────────────────────────────
function CoverageHeadline({ locale }) {
  const isRTL  = locale === 'ar'
  const ui     = t[locale] || t.en
  const ref    = useRef(null)
  const h2Ref  = useRef(null)
  const subRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top 82%' },
      })
      tl.fromTo(h2Ref.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out' }
      )
      tl.fromTo(subRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 80px) clamp(24px, 4vw, 40px)',
        backgroundColor: '#FFFFFF',
        direction: isRTL ? 'rtl' : 'ltr',
        borderBottom: '1px solid #E8E8E8',
      }}
    >
      {/* Eyebrow */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{ width: '28px', height: '1px', backgroundColor: '#C41E1E' }} />
        <span style={{
          fontSize: '10px', fontFamily: 'Inter, sans-serif',
          fontWeight: 500, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: '#C41E1E',
        }}>
          {ui.eyebrow}
        </span>
      </div>

      {/* Headline */}
      <div style={{ overflow: 'hidden' }}>
        <h2 ref={h2Ref} style={{
          fontSize: 'clamp(2rem, 5.5vw, 6.5rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, color: '#0A0A0A',
          lineHeight: 0.95, letterSpacing: '-0.02em',
          margin: '0 0 clamp(12px, 2vw, 20px)',
          opacity: 0,
        }}>
          {ui.headline}
        </h2>
      </div>

      <p ref={subRef} style={{
        fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 300, color: '#888888',
        lineHeight: 1.8, maxWidth: '480px', opacity: 0,
      }}>
        {ui.sub}
      </p>
    </div>
  )
}

// ── Main export ───────────────────────────────────────────
export default function CoverageGrid({ locale = 'en' }) {
  const [activeRegion, setActiveRegion] = useState(null)
  const [filterRegion, setFilterRegion] = useState('all')
  const isRTL      = locale === 'ar'
  const contentRef = useRef(null)

  const visibleRegions = filterRegion === 'all'
    ? regions
    : regions.filter(r => r.id === filterRegion)

  const handleFilterChange = (id) => {
    if (id === filterRegion) return
    gsap.to(contentRef.current, {
      opacity: 0, y: 12, duration: 0.2, ease: 'power2.in',
      onComplete: () => {
        setFilterRegion(id)
        setActiveRegion(null)
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' }
        )
      },
    })
  }

  const handlePanelToggle = (id) => {
    setActiveRegion(prev => prev === id ? null : id)
  }

  return (
    <section style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr' }}>
      <CoverageHeadline locale={locale} />
      <RegionTabs locale={locale} active={filterRegion} onChange={handleFilterChange} />

      <div ref={contentRef}>
        {visibleRegions.map((region, i) => (
          <RegionPanel
            key={region.id}
            region={region}
            locale={locale}
            index={i}
            isActive={activeRegion === region.id}
            onToggle={handlePanelToggle}
          />
        ))}
      </div>
    </section>
  )
}