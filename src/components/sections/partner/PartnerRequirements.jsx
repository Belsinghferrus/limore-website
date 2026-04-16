'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const t = {
  en: {
    eyebrow:  'Who We Work With',
    heading:  'The Standard We Expect',
    sub:      'Limore\'s reputation is built on consistency. Every partner must meet these baseline requirements before onboarding.',
    fleet: {
      label: 'Fleet',
      tag:   '5 requirements',
      items: [
        'Minimum 3 vehicles in service',
        'Vehicles no older than 4 years',
        'Executive class minimum: Mercedes E-Class, BMW 5 Series, or equivalent',
        'All vehicles must be black, dark navy, or deep grey',
        'Interior: clean, no visible wear, leather or premium upholstery',
      ],
    },
    chauffeur: {
      label: 'Chauffeurs',
      tag:   '5 requirements',
      items: [
        'Valid commercial driving licence for the operating city',
        'Minimum 3 years professional chauffeur experience',
        'Professional attire at all times (dark suit, tie optional)',
        'Fluent in English plus local language',
        'Background check clearance required',
      ],
    },
    ops: {
      label: 'Operations',
      tag:   '5 requirements',
      items: [
        'Ability to receive bookings 24 hours in advance',
        'Response time under 15 minutes to any dispatch',
        'GPS tracking enabled on all vehicles',
        'Invoicing capability in EUR or GBP',
        'Liability insurance minimum as per local regulation',
      ],
    },
  },
  ar: {
    eyebrow:  'من نعمل معه',
    heading:  'المعيار الذي نتوقعه',
    sub:      'سمعة ليمور مبنية على الاتساق. يجب أن يستوفي كل شريك هذه المتطلبات الأساسية قبل الانضمام.',
    fleet:     { label: 'الأسطول',  tag: '5 متطلبات', items: ['3 مركبات على الأقل', 'لا يزيد عمر المركبات عن 4 سنوات', 'الحد الأدنى: مرسيدس E أو BMW الفئة 5', 'جميع المركبات سوداء أو كحلية داكنة', 'داخلية نظيفة بمقاعد جلدية'] },
    chauffeur: { label: 'السائقون', tag: '5 متطلبات', items: ['رخصة قيادة تجارية سارية', 'خبرة لا تقل عن 3 سنوات', 'زي رسمي داكن في جميع الأوقات', 'إجادة الإنجليزية واللغة المحلية', 'تصريح أمني مطلوب'] },
    ops:       { label: 'العمليات', tag: '5 متطلبات', items: ['استقبال الحجوزات قبل 24 ساعة', 'وقت الاستجابة أقل من 15 دقيقة', 'تتبع GPS على جميع المركبات', 'القدرة على الفوترة باليورو أو الجنيه', 'تأمين المسؤولية وفق اللوائح المحلية'] },
  },
  fr: {
    eyebrow:  'Avec Qui Nous Travaillons',
    heading:  'Le Standard Que Nous Exigeons',
    sub:      'La reputation de Limore est fondee sur la coherence. Chaque partenaire doit satisfaire ces exigences avant l\'integration.',
    fleet:     { label: 'Flotte',     tag: '5 exigences', items: ['Minimum 3 vehicules en service', 'Vehicules de moins de 4 ans', 'Minimum Mercedes Classe E ou BMW Serie 5', 'Tous les vehicules noirs, bleu marine ou gris fonce', 'Interieur propre, sellerie cuir ou premium'] },
    chauffeur: { label: 'Chauffeurs', tag: '5 exigences', items: ['Permis de conduire commercial valide', 'Minimum 3 ans d\'experience professionnelle', 'Tenue professionnelle en permanence', 'Anglais courant et langue locale', 'Casier judiciaire vierge requis'] },
    ops:       { label: 'Operations', tag: '5 exigences', items: ['Reception des reservations 24h a l\'avance', 'Temps de reponse inferieur a 15 minutes', 'Suivi GPS active sur tous les vehicules', 'Facturation en EUR ou GBP', 'Assurance responsabilite civile conforme'] },
  },
}

export default function PartnerRequirements({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {

      // Header
      gsap.fromTo('.pr2-eyebrow',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } }
      )
      gsap.fromTo('.pr2-heading',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } }
      )
      gsap.fromTo('.pr2-sub',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } }
      )

      // Columns
      gsap.fromTo('.pr2-col',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.pr2-grid', start: 'top 75%' },
        }
      )

      // Items
      gsap.fromTo('.pr2-item',
        { opacity: 0, x: isRTL ? 10 : -10 },
        {
          opacity: 1, x: 0, duration: 0.45, ease: 'power2.out', stagger: 0.05,
          scrollTrigger: { trigger: '.pr2-grid', start: 'top 68%' },
        }
      )

    }, sectionRef)
    return () => ctx.revert()
  }, [locale])

  const cols = [content.fleet, content.chauffeur, content.ops]

  // Column number labels
  const colNums = ['01', '02', '03']

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#080808',
        padding:         'clamp(80px,10vw,128px) clamp(24px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
      }}
    >

      {/* ── Header ── */}
      <div style={{ marginBottom: 'clamp(56px,7vw,88px)' }}>
        <p
          className="pr2-eyebrow"
          style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: '#C41E1E', marginBottom: '20px', opacity: 0,
          }}
        >
          {content.eyebrow}
        </p>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <h2
            className="pr2-heading"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(2.2rem,4.5vw,4rem)', fontWeight: 300,
              color: '#F8F7F4', margin: 0, lineHeight: 1.08,
              maxWidth: '520px', opacity: 0,
            }}
          >
            {content.heading}
          </h2>
          <p
            className="pr2-sub"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.8rem,1.1vw,0.9rem)', fontWeight: 300,
              color: 'rgba(248,247,244,0.45)', lineHeight: 1.9,
              maxWidth: '320px', margin: 0,
              paddingTop: '8px', opacity: 0,
            }}
          >
            {content.sub}
          </p>
        </div>
      </div>

      {/* ── 3-column grid ── */}
      <div
        className="pr2-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px,100%), 1fr))',
          gap:                 '0',
          border:              '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {cols.map((col, ci) => (
          <div
            key={col.label}
            className="pr2-col"
            style={{
              padding:     'clamp(32px,3.5vw,52px)',
              borderRight: ci < cols.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              opacity:     0,
              display:     'flex',
              flexDirection: 'column',
            }}
          >
            {/* Top: number + label */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px' }}>
              <div>
                <span style={{
                  display: 'block',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '3rem', fontWeight: 300,
                  color: 'rgba(255,255,255,0.06)',
                  lineHeight: 1, marginBottom: '12px',
                }}>
                  {colNums[ci]}
                </span>
                <span style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif', fontSize: '11px',
                  fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#F8F7F4',
                }}>
                  {col.label}
                </span>
              </div>

              {/* Tag pill */}
              <div style={{
                padding:         '4px 10px',
                border:          '1px solid rgba(196,30,30,0.5)',
                backgroundColor: 'rgba(196,30,30,0.1)',
              }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '9px',
                  fontWeight: 500, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#e05555',
                }}>
                  {col.tag}
                </span>
              </div>
            </div>

            {/* Full-width red rule */}
            <div style={{ height: '1px', backgroundColor: '#C41E1E', marginBottom: '28px', opacity: 0.7 }} />

            {/* Items */}
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0', flex: 1 }}>
              {col.items.map((item, i) => (
                <li
                  key={i}
                  className="pr2-item"
                  style={{
                    display:      'flex',
                    alignItems:   'flex-start',
                    gap:          '14px',
                    padding:      '14px 0',
                    borderBottom: i < col.items.length - 1
                      ? '1px solid rgba(255,255,255,0.05)'
                      : 'none',
                    opacity: 0,
                  }}
                >
                  {/* Red square bullet */}
                  <div style={{
                    width:           '6px',
                    height:          '6px',
                    backgroundColor: '#C41E1E',
                    flexShrink:      0,
                    marginTop:       '6px',
                  }} />

                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.78rem,1vw,0.86rem)',
                    fontWeight: 300,
                    color: 'rgba(248,247,244,0.72)',
                    lineHeight: 1.75,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom note ── */}
      <div style={{
        marginTop:   '32px',
        display:     'flex',
        alignItems:  'center',
        gap:         '16px',
        flexWrap:    'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 400,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.22)',
          }}>
            15 total requirements
          </span>
        </div>
        <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <span style={{
          fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 400,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'rgba(248,247,244,0.22)',
        }}>
          All must be met before onboarding
        </span>
      </div>

    </section>
  )
}