'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Why Limore',
    heading: 'The Standard That\nSets Us Apart',
    points: [
      { number: '01', title: 'One Client, One Manager', description: 'Every client is assigned a dedicated account manager available around the clock. You always deal with the same person.' },
      { number: '02', title: 'Global Standardized Service', description: 'Whether you are in Dubai, London or New York - you receive the same Limore standard. No compromise across borders.' },
      { number: '03', title: '24/7 Operations', description: 'Our operations center never closes. Early departures, late arrivals, last-minute changes - we are always ready.' },
      { number: '04', title: 'No Failure Guarantee', description: 'If we commit to a booking, we deliver it. Our backup fleet and driver redundancy means no client is ever left waiting.' },
    ],
  },
  ar: {
    label: 'لماذا ليمور',
    heading: 'المعيار الذي\nيميزنا عن الآخرين',
    points: [
      { number: '01', title: 'عميل واحد، مدير واحد', description: 'يُخصص لكل عميل مدير حساب متاح على مدار الساعة. ستتعامل دائما مع نفس الشخص.' },
      { number: '02', title: 'خدمة موحدة عالميا', description: 'سواء كنت في دبي او لندن او نيويورك، ستحصل على نفس معيار ليمور دون أي تنازل.' },
      { number: '03', title: 'عمليات مستمرة 24/7', description: 'مركز عملياتنا لا يغلق أبدا. مغادرات مبكرة ووصول متأخر وتغييرات اللحظة الاخيرة - نحن دائما مستعدون.' },
      { number: '04', title: 'ضمان عدم الفشل', description: 'إذا التزمنا بحجز، فإننا ننفذه. أسطولنا الاحتياطي يعني أن لا عميل ينتظر أبدا.' },
    ],
  },
  fr: {
    label: 'Pourquoi Limore',
    heading: 'La Norme Qui\nNous Distingue',
    points: [
      { number: '01', title: 'Un Client, Un Manager', description: 'Chaque client dispose d\'un responsable de compte dedie, disponible a toute heure. Vous traitez toujours avec la meme personne.' },
      { number: '02', title: 'Service Mondial Standardise', description: 'Dubai, Londres ou New York - vous recevez le meme standard Limore. Aucun compromis aux frontieres.' },
      { number: '03', title: 'Operations 24/7', description: 'Notre centre operationnel ne ferme jamais. Departs matinaux, arrivees tardives - nous sommes toujours prets.' },
      { number: '04', title: 'Garantie sans Defaillance', description: 'Si nous confirmons une reservation, nous l\'honorons. Notre flotte de secours garantit qu\'aucun client n\'attend jamais.' },
    ],
  },
}

export default function WhyLimore({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL = locale === 'ar'
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((item, i) => {
        if (!item) return
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{
        backgroundColor: '#0A0A0A',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div className="container-default">

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
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
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400,
            color: '#F8F7F4',
            lineHeight: 1.1,
            letterSpacing: '0.02em',
            whiteSpace: 'pre-line',
          }}>
            {content.heading}
          </h2>
        </div>

        {/* Points grid */}
        <div className="why-grid">
          {content.points.map((point, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              style={{
                borderTop: '1px solid #2A2A2A',
                paddingTop: '32px',
                paddingBottom: '32px',
              }}
            >
              <span style={{
                display: 'block',
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.15em',
                color: '#C41E1E',
                marginBottom: '16px',
              }}>
                {point.number}
              </span>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 400,
                color: '#F8F7F4',
                marginBottom: '14px',
                lineHeight: 1.2,
              }}>
                {point.title}
              </h3>
              <p style={{
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                color: 'rgba(248,247,244,0.45)',
                lineHeight: 1.75,
              }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        @media (min-width: 768px) {
          .why-grid { grid-template-columns: 1fr 1fr; gap: 0 48px; }
        }
        @media (min-width: 1024px) {
          .why-grid { grid-template-columns: repeat(4, 1fr); gap: 0 32px; }
        }
      `}</style>
    </section>
  )
}