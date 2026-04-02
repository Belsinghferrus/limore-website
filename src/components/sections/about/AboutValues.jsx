'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Our Values',
    heading: 'The Principles\nWe Never Compromise',
    values: [
      {
        number: '01', title: 'Accountability',
        body: 'Every team member owns their role completely. When something goes wrong, we fix it immediately and tell the client the truth.',
        detail: 'No excuses. Ever.',
      },
      {
        number: '02', title: 'Standardisation',
        body: 'The Limore experience is identical regardless of city, driver, or vehicle. Our standards are written, trained, and audited.',
        detail: 'Same quality. Every time.',
      },
      {
        number: '03', title: 'Discretion',
        body: 'We work with individuals and organisations for whom privacy is not a preference but a requirement. We protect it unconditionally.',
        detail: 'Trust is non-negotiable.',
      },
      {
        number: '04', title: 'Reliability',
        body: 'A confirmed booking is a guarantee. Our backup infrastructure exists for one reason — so we never have to use it, but are always ready.',
        detail: 'Zero tolerance for failure.',
      },
      {
        number: '05', title: 'Refinement',
        body: 'The vehicles, the uniforms, the communication — everything is curated to reflect the calibre of the clients we serve.',
        detail: 'Details define excellence.',
      },
      {
        number: '06', title: 'Responsiveness',
        body: 'No ticket systems. No queues. When a client needs us, they reach a person within seconds — at any hour, in any city.',
        detail: 'Always reachable.',
      },
    ],
  },
  ar: {
    label: 'قيمنا',
    heading: 'المبادئ التي\nلا نتنازل عنها أبدا',
    values: [
      { number: '01', title: 'المساءلة', body: 'كل عضو في الفريق يمتلك دوره بالكامل. عندما يحدث خطأ، نصلحه فورا ونخبر العميل بالحقيقة.', detail: 'لا أعذار. أبدا.' },
      { number: '02', title: 'التوحيد', body: 'تجربة ليمور متطابقة بغض النظر عن المدينة أو السائق أو السيارة.', detail: 'نفس الجودة. في كل مرة.' },
      { number: '03', title: 'السرية', body: 'نعمل مع أفراد ومنظمات تُعدّ فيها الخصوصية ضرورة لا تفضيلا. نحمي ذلك دون قيد أو شرط.', detail: 'الثقة غير قابلة للتفاوض.' },
      { number: '04', title: 'الموثوقية', body: 'الحجز المؤكد ضمان. بنيتنا التحتية الاحتياطية موجودة لسبب واحد.', detail: 'عدم تحمل الفشل.' },
      { number: '05', title: 'الرقي', body: 'السيارات والزي والتواصل — كل شيء منسق ليعكس مستوى العملاء الذين نخدمهم.', detail: 'التفاصيل تحدد التميز.' },
      { number: '06', title: 'سرعة الاستجابة', body: 'لا أنظمة تذاكر. لا قوائم انتظار. عندما يحتاجنا العميل، يصل إلى شخص خلال ثوانٍ.', detail: 'دائما في متناول اليد.' },
    ],
  },
  fr: {
    label: 'Nos Valeurs',
    heading: 'Les Principes sur\nlesquels Nous ne Transigeons Jamais',
    values: [
      { number: '01', title: 'Responsabilité', body: 'Chaque membre de l\'équipe assume pleinement son rôle. Quand quelque chose va mal, nous le corrigeons immédiatement.', detail: 'Aucune excuse. Jamais.' },
      { number: '02', title: 'Standardisation', body: 'L\'expérience Limore est identique quelle que soit la ville, le chauffeur ou le véhicule.', detail: 'Même qualité. À chaque fois.' },
      { number: '03', title: 'Discrétion', body: 'Nous travaillons avec des individus pour qui la confidentialité est une exigence, pas une préférence.', detail: 'La confiance est non négociable.' },
      { number: '04', title: 'Fiabilité', body: 'Une réservation confirmée est une garantie. Notre infrastructure de secours existe pour une raison.', detail: 'Zéro tolérance pour l\'échec.' },
      { number: '05', title: 'Raffinement', body: 'Les véhicules, les uniformes, la communication — tout est conçu pour refléter le calibre de nos clients.', detail: 'Les détails définissent l\'excellence.' },
      { number: '06', title: 'Réactivité', body: 'Pas de systèmes de tickets. Quand un client a besoin de nous, il atteint une personne en quelques secondes.', detail: 'Toujours joignable.' },
    ],
  },
}

export default function AboutValues({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 75%' }
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st }
      )
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.09, scrollTrigger: st }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#0A0A0A', direction: isRTL ? 'rtl' : 'ltr', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#161616' }} />

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 100px) clamp(24px, 6vw, 96px) clamp(40px, 6vw, 72px)',
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '24px', borderBottom: '1px solid #161616', opacity: 0,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 5vw, 5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 1.02, whiteSpace: 'pre-line', letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        <div style={{
          width: '48px', height: '48px',
          border: '1px solid #2A2A2A',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12M10 4l6 6-6 6" stroke="#C41E1E" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Values grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1px',
          backgroundColor: '#161616',
        }}
      >
        {content.values.map((v, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="av-card"
            style={{
              backgroundColor: '#0A0A0A',
              padding: 'clamp(28px, 4vw, 48px)',
              opacity: 0,
              transition: 'background-color 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span style={{
                fontSize: '11px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.18em', color: '#C41E1E',
              }}>
                {v.number}
              </span>
              <div style={{ width: '24px', height: '1px', backgroundColor: '#2A2A2A' }} />
            </div>
            <h3 style={{
              fontSize: 'clamp(1.15rem, 1.8vw, 1.5rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, color: '#F8F7F4',
              marginBottom: '14px', lineHeight: 1.2,
            }}>
              {v.title}
            </h3>
            <p style={{
              fontSize: '13px', fontFamily: 'Inter, sans-serif',
              fontWeight: 300, color: 'rgba(248,247,244,0.45)',
              lineHeight: 1.75, marginBottom: '16px',
            }}>
              {v.body}
            </p>
            <p style={{
              fontSize: '11px', fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontStyle: 'italic', fontWeight: 400,
              color: 'rgba(196,30,30,0.7)', letterSpacing: '0.02em',
            }}>
              {v.detail}
            </p>
          </div>
        ))}
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#161616' }} />

      <style>{`
        .av-card:hover {
          background-color: #111111 !important;
        }
      `}</style>
    </section>
  )
}