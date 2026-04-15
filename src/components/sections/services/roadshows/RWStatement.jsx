'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'The Challenge',
    heading: 'An Event Has No\nRoom for Ground\nTransport Failure.',
    paragraphs: [
      'A roadshow fails when an executive misses a meeting. A product launch fails when a guest queue becomes a complaint. The vehicle that arrives late is not a transport problem. It is a brand problem.',
      'Limore does not treat event transport as bookings taken one at a time. We treat it as a logistics operation with a single objective: every person moves from A to B exactly when they need to, every time.',
      'We assign a dedicated event transport manager to every engagement. That person maps every journey, every vehicle, and every driver before the first day of the event begins.',
    ],
    aside: [
      { value: '300+', desc: 'Events managed globally' },
      { value: '60+', desc: 'Cities with standing operations' },
      { value: '15 min', desc: 'Average dispatch response' },
    ],
  },
  ar: {
    label: 'التحدي',
    heading: 'لا مجال لأي فشل\nفي نقل الفعاليات.',
    paragraphs: [
      'تفشل جولة الترويج عندما يفوت مسؤول تنفيذي اجتماعاً. ليمور لا تعامل نقل الفعاليات كحجوزات فردية. نعاملها كعملية لوجستية بهدف واحد: كل شخص ينتقل من نقطة أ إلى نقطة ب بالضبط عندما يحتاج.',
      'نعين مدير نقل فعاليات مخصصاً لكل مشاركة. يرسم ذلك الشخص كل رحلة وكل مركبة وكل سائق قبل بداية اليوم الأول.',
      'نتابع في الوقت الفعلي. كل تأخير يُكتشف في ثوانٍ. كل تعديل يُنفذ قبل أن يدرك الضيف أن هناك مشكلة.',
    ],
    aside: [
      { value: '+300', desc: 'فعاليات مُدارة عالمياً' },
      { value: '60+', desc: 'مدن بعمليات قائمة' },
      { value: '15 دقيقة', desc: 'متوسط وقت الاستجابة' },
    ],
  },
  fr: {
    label: 'Le Défi',
    heading: 'Un Événement ne\nTolérerait aucun Échec\nde Transport.',
    paragraphs: [
      'Un roadshow échoue quand un dirigeant rate une réunion. Un lancement produit échoue quand l\'attente de guest devient une plainte. Le retard n\'est pas un problème de transport. C\'est un problème de marque.',
      'Limore ne traite pas le transport événementiel comme des réservations individuelles. Nous le traitons comme une opération logistique avec un objectif unique : chaque personne se déplace de A à B exactement quand elle en a besoin.',
      'Nous assignons un responsable transport événementiel dédié. Cette personne cartographie chaque trajet, chaque véhicule et chaque chauffeur avant le premier jour.',
    ],
    aside: [
      { value: '300+', desc: 'Événements gérés mondialement' },
      { value: '60+', desc: 'Villes en opération permanente' },
      { value: '15 min', desc: 'Temps de réponse dispatch moyen' },
    ],
  },
}

export default function RWStatement({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const labelRef   = useRef(null)
  const headRef    = useRef(null)
  const parasRef   = useRef([])
  const asideRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 74%' }

      gsap.fromTo(labelRef.current,
        { opacity: 0, x: isRTL ? 16 : -16 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: st }
      )
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out', delay: 0.1, scrollTrigger: st }
      )
      parasRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.25 + i * 0.12, scrollTrigger: st }
        )
      })
      gsap.fromTo(asideRef.current?.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12, delay: 0.4, scrollTrigger: st }
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

      <div style={{ padding: 'clamp(64px, 9vw, 120px) clamp(24px, 6vw, 96px)' }}>

        {/* Label */}
        <div
          ref={labelRef}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px', opacity: 0 }}
        >
          <div style={{ width: '36px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
          <span style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.24em',
            textTransform: 'uppercase', color: '#C41E1E',
          }}>
            {content.label}
          </span>
        </div>

        <div className="rws-layout">

          {/* Heading column */}
          <div className="rws-col-head">
            <h2
              ref={headRef}
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 5.5rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400, color: '#0A0A0A',
                lineHeight: 1.02, whiteSpace: 'pre-line',
                letterSpacing: '-0.015em', opacity: 0,
                position: 'sticky', top: 'clamp(80px, 12vh, 120px)',
              }}
            >
              {content.heading}
            </h2>
          </div>

          {/* Body column */}
          <div className="rws-col-body">
            {content.paragraphs.map((p, i) => (
              <p
                key={i}
                ref={(el) => (parasRef.current[i] = el)}
                style={{
                  fontSize: 'clamp(0.9rem, 1.25vw, 1.02rem)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300, color: '#5A5A5A', lineHeight: 1.9,
                  marginBottom: i < content.paragraphs.length - 1 ? '22px' : '48px',
                  opacity: 0,
                }}
              >
                {p}
              </p>
            ))}

            {/* Stats aside */}
            <div
              ref={asideRef}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                backgroundColor: '#EBEBEB',
                border: '1px solid #EBEBEB',
              }}
            >
              {content.aside.map((s, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FAFAFA',
                    padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 24px)',
                    opacity: 0,
                  }}
                >
                  <p style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontWeight: 400, color: '#0A0A0A', lineHeight: 1,
                    marginBottom: '6px',
                  }}>
                    {s.value}
                  </p>
                  <p style={{
                    fontSize: '11px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 300, color: '#999', lineHeight: 1.5,
                  }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .rws-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 5vw, 64px);
        }
        @media (min-width: 1024px) {
          .rws-layout {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }
        .rws-col-head, .rws-col-body { width: 100%; }
      `}</style>
    </section>
  )
}