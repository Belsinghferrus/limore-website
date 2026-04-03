'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'The Limore Standard',
    heading: 'Corporate Travel\nDone Once.\nDone Correctly.',
    body1: 'Most ground transport fails corporate clients not through incompetence but through inconsistency. A driver who was excellent last week is unavailable this week. A vehicle that impressed in London does not exist in Dubai. Limore was built specifically to eliminate that inconsistency.',
    body2: 'Every corporate account at Limore is assigned a dedicated operations manager. That person knows your travel patterns, your executive preferences, your billing structure, and your confidentiality requirements before the first journey is made.',
    body3: 'We do not send a different driver and hope for the best. We build a system around your business and maintain it permanently.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
    imageAlt: 'Corporate precision — Limore operations',
    imageCaption: 'Operations Standard — Global',
    pullQuote: 'Consistency is not a goal. It is the baseline.',
  },
  ar: {
    label: 'معيار ليمور',
    heading: 'السفر المؤسسي\nيُنفَّذ مرة واحدة.\nيُنفَّذ بشكل صحيح.',
    body1: 'معظم وسائل النقل البري تفشل في خدمة العملاء المؤسسيين ليس بسبب عدم الكفاءة بل بسبب عدم الاتساق. ليمور بُنيت تحديداً للقضاء على هذا التناقض.',
    body2: 'كل حساب مؤسسي في ليمور يُخصص له مدير عمليات مخصص يعرف أنماط سفرك وتفضيلات مديريك وهيكل فوترتك ومتطلبات سريتك قبل أول رحلة.',
    body3: 'لا نرسل سائقاً مختلفاً ونأمل في الأفضل. نبني نظاماً حول عملك ونحافظ عليه بشكل دائم.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
    imageAlt: 'دقة مؤسسية — عمليات ليمور',
    imageCaption: 'معيار العمليات — عالمي',
    pullQuote: 'الاتساق ليس هدفاً. إنه الخط الأساسي.',
  },
  fr: {
    label: 'Le Standard Limore',
    heading: 'Voyages Corporate\nFaits Une Fois.\nFaits Correctement.',
    body1: 'La plupart des transports terrestres échouent les clients corporate non pas par incompétence mais par incohérence. Limore a été construit précisément pour éliminer cette incohérence.',
    body2: 'Chaque compte corporate chez Limore est assigné à un responsable des opérations dédié qui connaît vos habitudes de voyage et vos exigences de confidentialité avant le premier trajet.',
    body3: 'Nous ne envoyons pas un chauffeur différent en espérant le meilleur. Nous construisons un système autour de votre entreprise et le maintenons en permanence.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
    imageAlt: 'Précision corporate — Opérations Limore',
    imageCaption: 'Standard Opérationnel — Mondial',
    pullQuote: 'La cohérence n\'est pas un objectif. C\'est la ligne de base.',
  },
}

export default function CCProposition({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const imageRef   = useRef(null)
  const textRef    = useRef(null)
  const quoteRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 72%' }

      gsap.fromTo(imageRef.current,
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 1.4, ease: 'power4.inOut', scrollTrigger: st }
      )
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.25, scrollTrigger: st }
      )
      gsap.fromTo(quoteRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.55, scrollTrigger: st }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <div className="ccp-grid">

        {/* Left: image panel */}
        <div
          ref={imageRef}
          style={{
            position: 'relative',
            overflow: 'hidden',
            clipPath: 'inset(0 0 100% 0)',
            minHeight: 'clamp(360px, 50vw, 680px)',
          }}
          className="ccp-img-panel"
        >
          <img
            src={content.image}
            alt={content.imageAlt}
            width={1200} height={1600} loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 20%',
              display: 'block',
              transition: 'transform 0.8s ease',
            }}
            className="ccp-img"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 55%)',
            pointerEvents: 'none',
          }} />

          {/* Corner marks */}
          <div style={{
            position: 'absolute', top: '20px', left: '20px',
            width: '24px', height: '24px',
            borderTop: '1px solid rgba(196,30,30,0.55)',
            borderLeft: '1px solid rgba(196,30,30,0.55)',
          }} />
          <div style={{
            position: 'absolute', bottom: '20px', right: '20px',
            width: '24px', height: '24px',
            borderBottom: '1px solid rgba(196,30,30,0.55)',
            borderRight: '1px solid rgba(196,30,30,0.55)',
          }} />

          <p style={{
            position: 'absolute', bottom: '20px', left: '20px',
            fontSize: '9px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(248,247,244,0.55)',
          }}>
            {content.imageCaption}
          </p>
        </div>

        {/* Right: text */}
        <div
          ref={textRef}
          style={{
            padding: 'clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px)',
            opacity: 0,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ width: '36px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.24em',
              textTransform: 'uppercase', color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 3.8rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400, color: '#0A0A0A',
            lineHeight: 1.04, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em', marginBottom: '32px',
          }}>
            {content.heading}
          </h2>

          {/* Body paragraphs */}
          {[content.body1, content.body2, content.body3].map((para, i) => (
            <p key={i} style={{
              fontSize: 'clamp(0.88rem, 1.2vw, 0.98rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: '#5A5A5A', lineHeight: 1.85,
              marginBottom: i < 2 ? '18px' : '36px',
            }}>
              {para}
            </p>
          ))}

          {/* Pull quote */}
          <div
            ref={quoteRef}
            style={{
              borderLeft: isRTL ? 'none' : '2px solid #C41E1E',
              borderRight: isRTL ? '2px solid #C41E1E' : 'none',
              paddingLeft: isRTL ? '0' : '20px',
              paddingRight: isRTL ? '20px' : '0',
              opacity: 0,
            }}
          >
            <p style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, fontStyle: 'italic',
              color: '#0A0A0A', lineHeight: 1.5,
            }}>
              {content.pullQuote}
            </p>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .ccp-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .ccp-grid { grid-template-columns: 1fr 1fr; min-height: 680px; }
        }
        .ccp-img-panel { display: none; }
        @media (min-width: 768px) {
          .ccp-img-panel { display: block; }
        }
        .ccp-img-panel:hover .ccp-img { transform: scale(1.03); }
      `}</style>
    </section>
  )
}