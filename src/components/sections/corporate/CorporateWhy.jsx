'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow: 'Why Corporates Choose Limore',
    headline: 'The Standard Institutions Demand.',
    body: 'When the margin for error is zero and the client in the back seat represents your firm, the vehicle that arrives is a statement. Limore is that statement.',
    pillars: [
      {
        num: '01',
        title: 'Discretion as Policy',
        text: 'Every chauffeur operates under strict NDA protocols. Conversations, schedules, and passenger identities remain entirely confidential — always.',
      },
      {
        num: '02',
        title: 'Zero Tolerance for Lateness',
        text: 'Real-time flight tracking, 60-minute pre-departure staging, and live traffic rerouting ensure your executive is never waiting on the kerb.',
      },
      {
        num: '03',
        title: 'A Single Global Standard',
        text: 'Whether you are hosting a client in Geneva or flying your team to Singapore, the vehicle class, briefing protocol, and presentation are identical.',
      },
      {
        num: '04',
        title: 'White-Label Operations',
        text: 'We operate invisibly under your corporate identity. No Limore branding visible to your guests unless you choose otherwise.',
      },
    ],
  },
  ar: {
    eyebrow: 'لماذا تختار الشركات ليمور',
    headline: 'المعيار الذي تطلبه المؤسسات.',
    body: 'عندما لا يكون هناك هامش للخطأ والعميل في المقعد الخلفي يمثل شركتك، فإن السيارة التي تصل هي بيان. ليمور هو ذلك البيان.',
    pillars: [
      { num: '٠١', title: 'السرية كسياسة', text: 'يعمل كل سائق بموجب بروتوكولات اتفاقية عدم إفشاء السرية. تظل المحادثات والجداول الزمنية وهويات الركاب سرية تماماً.' },
      { num: '٠٢', title: 'التسامح الصفري مع التأخير', text: 'تتبع الرحلات في الوقت الفعلي والتحضير قبل ٦٠ دقيقة من الإقلاع وإعادة التوجيه الحي لحركة المرور.' },
      { num: '٠٣', title: 'معيار عالمي موحد', text: 'سواء كنت تستضيف عميلاً في جنيف أو تُسافر بفريقك إلى سنغافورة، فإن فئة المركبة ومستوى الخدمة متطابقان.' },
      { num: '٠٤', title: 'عمليات العلامة البيضاء', text: 'نعمل بشكل غير مرئي تحت هويتك المؤسسية. لا توجد علامة ليمور مرئية لضيوفك ما لم تختر غير ذلك.' },
    ],
  },
  fr: {
    eyebrow: 'Pourquoi les Entreprises Choisissent Limore',
    headline: 'Le Standard qu\'Exigent les Institutions.',
    body: 'Quand la marge d\'erreur est nulle et que le client à l\'arrière représente votre firm, le véhicule qui arrive est une déclaration. Limore est cette déclaration.',
    pillars: [
      { num: '01', title: 'La Discrétion comme Politique', text: 'Chaque chauffeur opère sous des protocoles NDA stricts. Les conversations, plannings et identités restent entièrement confidentiels.' },
      { num: '02', title: 'Tolérance Zéro pour le Retard', text: 'Suivi des vols en temps réel, mise en position 60 min avant, reroutage en direct assurent que votre exécutif n\'attend jamais.' },
      { num: '03', title: 'Un Standard Mondial Unique', text: 'De Genève à Singapour, la classe du véhicule, le briefing et la présentation sont identiques.' },
      { num: '04', title: 'Opérations en Marque Blanche', text: 'Nous opérons sous votre identité corporate. Aucune marque Limore visible pour vos invités, sauf si vous en décidez autrement.' },
    ],
  },
}

export default function CorporateWhy({ locale = 'en' }) {
  const c      = t[locale] || t.en
  const isRTL  = locale === 'ar'
  const secRef = useRef(null)
  const headRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 82%' } }
      )
      cardRefs.current.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secRef}
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(64px, 10vw, 120px) clamp(20px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      {/* Header block */}
      <div
        ref={headRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: 'clamp(24px, 4vw, 64px)',
          marginBottom: 'clamp(48px, 8vw, 80px)',
          opacity: 0,
          alignItems: 'end',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C41E1E' }} />
            <span style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E' }}>
              {c.eyebrow}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 4.5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#0A0A0A',
            lineHeight: 1.0, letterSpacing: '-0.02em', margin: 0,
          }}>
            {c.headline}
          </h2>
        </div>
        <p style={{
          fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
          fontFamily: 'Inter, sans-serif', fontWeight: 300,
          color: '#777777', lineHeight: 1.85,
          maxWidth: '480px',
          margin: isRTL ? '0 0 0 auto' : '0',
        }}>
          {c.body}
        </p>
      </div>

      {/* Pillars grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
        gap: 'clamp(1px, 0.15vw, 2px)',
        backgroundColor: '#E8E8E8',
        border: '1px solid #E8E8E8',
      }}>
        {c.pillars.map((p, i) => (
          <div
            key={i}
            ref={el => (cardRefs.current[i] = el)}
            className="corp-why-card"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(28px, 4vw, 48px)',
              opacity: 0,
              transition: 'background-color 0.3s ease',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Ghost number */}
            <span aria-hidden="true" style={{
              position: 'absolute', top: '12px',
              right: isRTL ? 'auto' : '20px',
              left:  isRTL ? '20px' : 'auto',
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 300, color: 'rgba(0,0,0,0.04)',
              lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
              letterSpacing: '-0.04em',
            }}>
              {p.num}
            </span>

            {/* Accent bar */}
            <div style={{
              width: '24px', height: '2px',
              backgroundColor: '#C41E1E',
              marginBottom: 'clamp(18px, 3vw, 28px)',
            }} />

            <h3 style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 500, color: '#0A0A0A',
              lineHeight: 1.2, margin: '0 0 14px',
              letterSpacing: '0.01em',
            }}>
              {p.title}
            </h3>

            <p style={{
              fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: '#777777', lineHeight: 1.85, margin: 0,
            }}>
              {p.text}
            </p>

            {/* Hover bottom line */}
            <div className="corp-why-line" style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '2px', backgroundColor: '#C41E1E',
              transform: 'scaleX(0)', transformOrigin: isRTL ? 'right' : 'left',
              transition: 'transform 0.35s ease',
            }} />
          </div>
        ))}
      </div>

      <style>{`
        .corp-why-card:hover { background-color: #FAFAFA !important; }
        .corp-why-card:hover .corp-why-line { transform: scaleX(1) !important; }
      `}</style>
    </section>
  )
}