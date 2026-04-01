'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Who We Are',
    heading: 'A Global Mobility Partner\nBuilt for the World\'s Best',
    body: 'Limore is not a car service. We are a precision mobility partner trusted by luxury brands, corporations, and private clients across the world\'s most important cities. Every journey is managed, every detail is owned.',
    cta: 'Our Story',
  },
  ar: {
    label: 'من نحن',
    heading: 'شريك تنقل عالمي\nمصمم لافضل العملاء',
    body: 'ليمور ليست مجرد خدمة سيارات. نحن شريك تنقل دقيق موثوق به من قبل العلامات التجارية الفاخرة والشركات والعملاء الخاصين في اهم مدن العالم.',
    cta: 'قصتنا',
  },
  fr: {
    label: 'Qui Sommes-Nous',
    heading: 'Un Partenaire Mondial\nPour les Meilleurs',
    body: 'Limore n\'est pas un simple service de voiture. Nous sommes un partenaire de mobilite de precision, approuve par les marques de luxe, les entreprises et les clients prives.',
    cta: 'Notre Histoire',
  },
}

export default function AboutStatement({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL = locale === 'ar'
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const bodyRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      )
      gsap.fromTo(bodyRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      )
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const localePath = (href) => '/' + locale + href

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div className="container-default">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}
          className="about-grid"
        >
          {/* Left — text */}
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
              <span style={{
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C41E1E',
              }}>
                {content.label}
              </span>
            </div>

            <h2
              ref={headingRef}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400,
                color: '#0A0A0A',
                lineHeight: 1.1,
                letterSpacing: '0.02em',
                marginBottom: '28px',
                whiteSpace: 'pre-line',
              }}
            >
              {content.heading}
            </h2>

            <p
              ref={bodyRef}
              style={{
                fontSize: '1.05rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                color: '#6B6B6B',
                lineHeight: 1.8,
                marginBottom: '36px',
              }}
            >
              {content.body}
            </p>

            <div ref={ctaRef}>
              <Link
                href={localePath('/about')}
                className="about-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#0A0A0A',
                  textDecoration: 'none',
                  borderBottom: '1px solid #0A0A0A',
                  paddingBottom: '3px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
              >
                {content.cta}
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right — decorative number */}
          <div
            className="about-right"
            style={{
              display: 'none',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <div style={{
              position: 'relative',
              width: '280px',
              height: '280px',
              border: '1px solid #E5E4E0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontSize: '10rem',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 300,
                color: 'rgba(10,10,10,0.06)',
                lineHeight: 1,
                userSelect: 'none',
              }}>
                L
              </span>
              <div style={{
                position: 'absolute',
                top: '-1px',
                left: '-1px',
                width: '40px',
                height: '40px',
                borderTop: '2px solid #C41E1E',
                borderLeft: '2px solid #C41E1E',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-1px',
                right: '-1px',
                width: '40px',
                height: '40px',
                borderBottom: '2px solid #C41E1E',
                borderRight: '2px solid #C41E1E',
              }} />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-cta:hover {
          color: #C41E1E !important;
          border-color: #C41E1E !important;
        }
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-right {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  )
}