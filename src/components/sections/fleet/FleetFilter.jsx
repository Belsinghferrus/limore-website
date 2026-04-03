'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { fleetCategories } from '@/data/fleet'

export default function FleetFilter({ locale = 'en', active, onChange }) {
  const isRTL      = locale === 'ar'
  const barRef     = useRef(null)
  const pillRefs   = useRef([])
  const inkRef     = useRef(null)

  // Animate ink indicator to active pill
  const moveInk = (el) => {
    if (!el || !inkRef.current) return
    const bar  = barRef.current.getBoundingClientRect()
    const pill = el.getBoundingClientRect()
    gsap.to(inkRef.current, {
      x: pill.left - bar.left + barRef.current.scrollLeft,
      width: pill.width,
      duration: 0.4,
      ease: 'power3.out',
    })
  }

  useEffect(() => {
    // Initial position on mount
    const activeEl = pillRefs.current[fleetCategories.findIndex(c => c.id === active)]
    if (activeEl) moveInk(activeEl)
  }, [active])

  useEffect(() => {
    gsap.fromTo(barRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    )
  }, [])

  return (
    <div style={{
      position: 'sticky', top: '0', zIndex: 30,
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #EBEBEB',
      boxShadow: '0 1px 0 #EBEBEB',
    }}>
      <div
        ref={barRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          position: 'relative',
          padding: '0 clamp(16px, 5vw, 80px)',
          gap: '0',
          scrollbarWidth: 'none',
          direction: isRTL ? 'rtl' : 'ltr',
          opacity: 0,
        }}
        className="fleet-filter-bar"
      >
        {/* Sliding ink underline */}
        <div
          ref={inkRef}
          style={{
            position: 'absolute',
            bottom: 0,
            height: '2px',
            backgroundColor: '#C41E1E',
            pointerEvents: 'none',
            width: '80px',
            transformOrigin: 'left',
            transition: 'none',
          }}
        />

        {fleetCategories.map((cat, i) => {
          const isActive = cat.id === active
          return (
            <button
              key={cat.id}
              ref={(el) => (pillRefs.current[i] = el)}
              onClick={() => {
                onChange(cat.id)
                moveInk(pillRefs.current[i])
              }}
              style={{
                padding: 'clamp(14px, 2vw, 18px) clamp(14px, 2vw, 22px)',
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: isActive ? 500 : 400,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: isActive ? '#0A0A0A' : '#AAAAAA',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease',
                flexShrink: 0,
              }}
              className="fleet-filter-pill"
              aria-pressed={isActive}
              aria-label={cat.label[locale] || cat.label.en}
            >
              {cat.label[locale] || cat.label.en}
            </button>
          )
        })}
      </div>

      <style>{`
        .fleet-filter-bar::-webkit-scrollbar { display: none; }
        .fleet-filter-pill:hover { color: #0A0A0A !important; }
      `}</style>
    </div>
  )
}