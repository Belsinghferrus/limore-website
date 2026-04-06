'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { testimonial } from '@/data/corporate'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: { eyebrow: 'Client Perspective' },
  ar: { eyebrow: 'منظور العميل' },
  fr: { eyebrow: 'Perspective Client' },
}

export default function CorporateTestimonial({ locale = 'en' }) {
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const quoteRef   = useRef(null)
  const metaRef    = useRef(null)
  const lineRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      })
      tl.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, ease: 'power3.out', transformOrigin: isRTL ? 'right' : 'left' }
      )
      tl.fromTo(quoteRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        '-=0.2'
      )
      tl.fromTo(metaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [isRTL])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#0A0A0A',
        padding: 'clamp(64px, 10vw, 112px) clamp(20px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ maxWidth: '800px', margin: isRTL ? '0 0 0 auto' : '0 auto 0 0' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '28px', height: '1px', backgroundColor: '#C41E1E' }} />
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#C41E1E',
          }}>
            {t[locale]?.eyebrow || t.en.eyebrow}
          </span>
        </div>

        {/* Quote mark decoration */}
        <div style={{
          fontSize: 'clamp(4rem, 10vw, 9rem)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, color: 'rgba(196,30,30,0.15)',
          lineHeight: 0.7, marginBottom: '8px',
          userSelect: 'none', pointerEvents: 'none',
        }} aria-hidden="true">
          "
        </div>

        {/* Quote */}
        <blockquote
          ref={quoteRef}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.9rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, fontStyle: 'italic',
            color: '#F8F7F4', lineHeight: 1.55,
            letterSpacing: '-0.005em',
            margin: '0 0 clamp(28px, 4vw, 40px)',
            opacity: 0,
          }}
        >
          {testimonial.quote[locale] || testimonial.quote.en}
        </blockquote>

        {/* Divider line */}
        <div
          ref={lineRef}
          style={{
            width: '48px', height: '1px',
            backgroundColor: '#C41E1E',
            marginBottom: 'clamp(16px, 2.5vw, 24px)',
            transformOrigin: isRTL ? 'right' : 'left',
          }}
        />

        {/* Meta */}
        <div ref={metaRef} style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', opacity: 0 }}>
          <div>
            <p style={{
              fontSize: '11px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(248,247,244,0.65)',
              margin: '0 0 3px',
            }}>
              {testimonial.author[locale] || testimonial.author.en}
            </p>
            <p style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 300, letterSpacing: '0.08em',
              color: 'rgba(248,247,244,0.28)', margin: 0,
            }}>
              {testimonial.company[locale] || testimonial.company.en}
            </p>
          </div>
          {/* Client type badge */}
          <span style={{
            fontSize: '9px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#C41E1E',
            border: '1px solid rgba(196,30,30,0.3)',
            padding: '4px 10px',
          }}>
            {testimonial.type[locale] || testimonial.type.en}
          </span>
        </div>
      </div>
    </section>
  )
}