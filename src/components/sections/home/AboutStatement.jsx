'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Who We Are',
    heading: 'A Global Mobility\nPartner Built for\nthe World\'s Best',
    body: 'Limore is not a car service. We are a precision mobility partner trusted by luxury brands, corporations, and private clients across the world\'s most important cities.',
    bodySecond: 'Every journey is managed end to end. Every detail is owned. No exceptions.',
    cta: 'Our Story',
    stat1val: '8', stat1label: 'Global Cities',
    stat2val: '100%', stat2label: 'Delivery Rate',
    stat3val: '24/7', stat3label: 'Operations',
  },
  ar: {
    label: 'من نحن',
    heading: 'شريك تنقل عالمي\nمصمم لأفضل\nالعملاء في العالم',
    body: 'ليمور ليست مجرد خدمة سيارات. نحن شريك تنقل دقيق موثوق به من قبل العلامات التجارية الفاخرة والشركات والعملاء الخاصين في أهم مدن العالم.',
    bodySecond: 'كل رحلة تُدار من البداية إلى النهاية. كل تفصيل في عهدتنا. بلا استثناء.',
    cta: 'قصتنا',
    stat1val: '8', stat1label: 'مدن عالمية',
    stat2val: '100%', stat2label: 'معدل التسليم',
    stat3val: '24/7', stat3label: 'عمليات مستمرة',
  },
  fr: {
    label: 'Qui Sommes-Nous',
    heading: 'Un Partenaire Mondial\nde Mobilité Pour\nles Meilleurs',
    body: 'Limore n\'est pas un simple service de voiture. Nous sommes un partenaire de mobilité de précision, approuvé par les marques de luxe, les entreprises et les clients privés.',
    bodySecond: 'Chaque trajet est géré de bout en bout. Chaque détail est maîtrisé. Sans exception.',
    cta: 'Notre Histoire',
    stat1val: '8', stat1label: 'Villes Mondiales',
    stat2val: '100%', stat2label: 'Taux de Livraison',
    stat3val: '24/7', stat3label: 'Opérations',
  },
}

export default function AboutStatement({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'

  const sectionRef   = useRef(null)
  const labelRef     = useRef(null)
  const line1Ref     = useRef(null)
  const line2Ref     = useRef(null)
  const line3Ref     = useRef(null)
  const body1Ref     = useRef(null)
  const body2Ref     = useRef(null)
  const ctaRef       = useRef(null)
  const imageRef     = useRef(null)
  const statsRef     = useRef([])
  const ruleRef      = useRef(null)

  const localePath = (href) => '/' + locale + href

  useEffect(() => {
    const ctx = gsap.context(() => {

      const st = { trigger: sectionRef.current, start: 'top 72%' }

      /* Top rule draw */
      gsap.fromTo(ruleRef.current,
        { scaleX: 0, transformOrigin: isRTL ? 'right center' : 'left center' },
        { scaleX: 1, duration: 1.4, ease: 'power4.out',
          scrollTrigger: st }
      )

      /* Label */
      gsap.fromTo(labelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2,
          scrollTrigger: st }
      )

      /* Heading lines clip-reveal */
      ;[line1Ref, line2Ref, line3Ref].forEach((ref, i) => {
        gsap.fromTo(ref.current,
          { yPercent: 105, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
            delay: 0.3 + i * 0.12,
            scrollTrigger: st }
        )
      })

      /* Body paragraphs */
      gsap.fromTo(body1Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.55,
          scrollTrigger: st }
      )
      gsap.fromTo(body2Ref.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.68,
          scrollTrigger: st }
      )

      /* CTA */
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.82,
          scrollTrigger: st }
      )

      /* Stats count-up */
      statsRef.current.forEach((el, i) => {
        if (!el) return
        const vals = [content.stat1val, content.stat2val, content.stat3val]
        const raw = vals[i]
        const isNumeric = /^\d+$/.test(raw)
        if (isNumeric) {
          const counter = { val: 0 }
          gsap.to(counter, {
            val: parseInt(raw, 10),
            duration: 1.6,
            ease: 'power2.out',
            delay: 0.6 + i * 0.15,
            onUpdate: () => {
              if (statsRef.current[i]) {
                statsRef.current[i].textContent = Math.round(counter.val).toString()
              }
            },
            scrollTrigger: st,
          })
        }
      })

      /* Image reveal — from right, clip-path wipe */
      gsap.fromTo(imageRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.3, ease: 'power4.inOut',
          delay: 0.3,
          scrollTrigger: st }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const headingLines = [
    { ref: line1Ref, text: content.heading.split('\n')[0] },
    { ref: line2Ref, text: content.heading.split('\n')[1] },
    { ref: line3Ref, text: content.heading.split('\n')[2] },
  ]

  const stats = [
    { ref: 0, val: content.stat1val, label: content.stat1label },
    { ref: 1, val: content.stat2val, label: content.stat2label },
    { ref: 2, val: content.stat3val, label: content.stat3label },
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#FFFFFF',
        direction: isRTL ? 'rtl' : 'ltr',
        overflow: 'hidden',
      }}
    >

      {/* ── TOP RULE — full width ── */}
      <div
        ref={ruleRef}
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#E8E6E1',
        }}
      />

      {/* ── MAIN GRID — full width, no container ── */}
      <div className="as-grid">

        {/* LEFT — text panel */}
        <div style={{
          padding: 'clamp(56px, 8vw, 110px) clamp(24px, 6vw, 96px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: '1px solid #EBEBEB',
        }}>

          {/* Label */}
          <div
            ref={labelRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '32px',
              opacity: 0,
            }}
          >
            <div style={{
              width: '40px', height: '1px',
              backgroundColor: '#C41E1E', flexShrink: 0,
            }} />
            <span style={{
              fontSize: '10px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>

          {/* Heading — 3 clipped lines */}
          <div style={{ marginBottom: '40px' }}>
            {headingLines.map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <div ref={line.ref} style={{ opacity: 0 }}>
                  <span style={{
                    display: 'block',
                    fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: i === 2 ? 300 : 400,
                    fontStyle: i === 2 ? 'italic' : 'normal',
                    color: '#0A0A0A',
                    lineHeight: 1.02,
                    letterSpacing: '-0.01em',
                  }}>
                    {line.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Thin red separator */}
          <div style={{
            width: '32px', height: '1px',
            backgroundColor: '#C41E1E',
            marginBottom: '28px',
            opacity: 0.7,
          }} />

          {/* Body copy */}
          <p
            ref={body1Ref}
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              color: '#555555',
              lineHeight: 1.85,
              marginBottom: '16px',
              maxWidth: '480px',
              opacity: 0,
            }}
          >
            {content.body}
          </p>

          <p
            ref={body2Ref}
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.6,
              marginBottom: '44px',
              maxWidth: '420px',
              opacity: 0,
            }}
          >
            {content.bodySecond}
          </p>

          {/* CTA */}
          <div ref={ctaRef} style={{ opacity: 0 }}>
            <Link
              href={localePath('/about')}
              className="as-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#0A0A0A',
                textDecoration: 'none',
                transition: 'color 0.25s ease, gap 0.25s ease',
              }}
            >
              <span>{content.cta}</span>
              <svg width="32" height="1" viewBox="0 0 32 1" aria-hidden="true" className="as-cta-line">
                <line x1="0" y1="0.5" x2="32" y2="0.5" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                <path d="M1 5h10M6 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            gap: '0',
            marginTop: '56px',
            paddingTop: '32px',
            borderTop: '1px solid #EBEBEB',
          }}>
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  paddingInline: i > 0 ? '24px' : '0 24px',
                  borderLeft: i > 0 ? '1px solid #EBEBEB' : 'none',
                }}
              >
                <p
                  ref={(el) => (statsRef.current[i] = el)}
                  style={{
                    fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 400,
                    color: '#0A0A0A',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {s.val}
                </p>
                <p style={{
                  fontSize: '9px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#ADADAD',
                }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT — full height editorial image */}
        <div
          ref={imageRef}
          style={{
            position: 'relative',
            minHeight: 'clamp(400px, 60vw, 700px)',
            overflow: 'hidden',
            clipPath: 'inset(0 100% 0 0)',
          }}
          className="as-image-panel"
        >
          <img
            src="/images/limore17.jpg"
            alt="Limore premium chauffeur vehicle — global luxury mobility"
            width={1200}
            height={1600}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              filter: 'grayscale(15%) contrast(1.05)',
              transition: 'transform 0.8s ease',
            }}
            className="as-img"
          />

          {/* Subtle left fade into white */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 25%)',
            pointerEvents: 'none',
          }} />

          {/* Bottom caption */}
          <div style={{
            position: 'absolute',
            bottom: '28px',
            left: '28px',
            right: '28px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
            <div>
              <p style={{
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.9)',
                marginBottom: '4px',
              }}>
                Fleet Excellence
              </p>
              <p style={{
                fontSize: '9px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.5)',
              }}>
                S-Class · Phantom · Cullinan
              </p>
            </div>
            {/* Red corner accent */}
            <div style={{
              width: '32px',
              height: '32px',
              borderBottom: '1.5px solid #C41E1E',
              borderRight: '1.5px solid #C41E1E',
            }} />
          </div>

          {/* Top left corner accent */}
          <div style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            width: '28px',
            height: '28px',
            borderTop: '1.5px solid rgba(196,30,30,0.7)',
            borderLeft: '1.5px solid rgba(196,30,30,0.7)',
          }} />
        </div>

      </div>

      {/* ── BOTTOM RULE ── */}
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: '#E8E6E1',
      }} />

      <style>{`
        .as-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .as-grid {
            grid-template-columns: 1fr 1fr;
            min-height: 700px;
          }
        }
        .as-image-panel {
          display: none;
        }
        @media (min-width: 768px) {
          .as-image-panel {
            display: block;
          }
        }
        .as-img:hover {
          transform: scale(1.03);
        }
        .as-cta:hover {
          color: #C41E1E !important;
        }
        .as-cta:hover .as-cta-line {
          stroke: #C41E1E;
          width: 48px;
        }
      `}</style>
    </section>
  )
}