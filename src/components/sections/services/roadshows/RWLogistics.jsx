'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'Operations Framework',
    heading: 'How Event Logistics\nActually Work at Limore',
    sub: 'The difference between good event transport and seamless event transport is the preparation that happens before the first vehicle moves.',
    steps: [
      {
        phase: 'Pre-Event',
        title: 'Event Transport Brief',
        body: 'We take a full brief from your event producer or PA. Guest list, VIP tier, venue addresses, timings, and contingency allowances. All documented and confirmed in writing.',
        tag: '14 days before',
      },
      {
        phase: 'Pre-Event',
        title: 'Fleet and Driver Assignment',
        body: 'Vehicles are allocated per guest tier. Drivers are briefed individually. Backup vehicles are confirmed for every principal journey. Nothing is left to availability on the day.',
        tag: '7 days before',
      },
      {
        phase: 'Pre-Event',
        title: 'Route and Timing Lock',
        body: 'All collection points, drop-off locations, and intercity transfers are route-planned with timing buffers. Flight data is integrated for arrivals from other cities.',
        tag: '48 hours before',
      },
      {
        phase: 'Live',
        title: 'Operations Centre Active',
        body: 'A dedicated event operations controller monitors every journey in real time. Any delay is intercepted and resolved before the passenger knows it occurred.',
        tag: 'Event day',
      },
      {
        phase: 'Live',
        title: 'Guest Communication Managed',
        body: 'Your guests receive driver details and vehicle information at the correct time. No confusion at collection points. No guests left waiting.',
        tag: 'Event day',
      },
      {
        phase: 'Post',
        title: 'Event Debrief and Reporting',
        body: 'A full transport report is issued after every event. Journey times, vehicle utilisation, and any incident notes are documented for your records and future planning.',
        tag: 'Next business day',
      },
    ],
    phaseTitles: {
      'Pre-Event': 'Pre-Event',
      'Live': 'Live Operations',
      'Post': 'Post-Event',
    },
  },
  ar: {
    label: 'إطار العمليات',
    heading: 'كيف تعمل لوجستيات\nالفعاليات فعلياً في ليمور',
    sub: 'الفرق بين نقل الفعاليات الجيد والسلس هو التحضير الذي يحدث قبل تحرك أول مركبة.',
    steps: [
      {
        phase: 'Pre-Event',
        title: 'موجز نقل الفعالية',
        body: 'نأخذ موجزاً كاملاً من منتج فعاليتك أو مساعدك الشخصي. قائمة الضيوف وتسلسل كبار الشخصيات وعناوين المكان والمواعيد وبدائل الطوارئ. كل شيء موثق ومؤكد كتابياً.',
        tag: 'قبل 14 يوماً',
      },
      {
        phase: 'Pre-Event',
        title: 'تخصيص الأسطول والسائق',
        body: 'تُخصص المركبات لكل مستوى من الضيوف. يُحاط السائقون بالتعليمات بشكل فردي. تُؤكد المركبات الاحتياطية لكل رحلة رئيسية.',
        tag: 'قبل 7 أيام',
      },
      {
        phase: 'Pre-Event',
        title: 'تحديد المسار والتوقيت',
        body: 'يُخطط مسار جميع نقاط الجمع والإنزال والنقل بين المدن مع هوامش زمنية. تُدمج بيانات الرحلة للوصول من مدن أخرى.',
        tag: 'قبل 48 ساعة',
      },
      {
        phase: 'Live',
        title: 'مركز العمليات نشط',
        body: 'يراقب مشغل عمليات الفعالية المخصص كل رحلة في الوقت الفعلي. أي تأخير يُعترض ويُحل قبل أن يعلم الركاب.',
        tag: 'يوم الفعالية',
      },
      {
        phase: 'Live',
        title: 'إدارة تواصل الضيوف',
        body: 'يتلقى ضيوفك تفاصيل السائق ومعلومات المركبة في الوقت المناسب. لا ارتباك في نقاط الجمع. لا ضيوف في الانتظار.',
        tag: 'يوم الفعالية',
      },
      {
        phase: 'Post',
        title: 'تقرير ما بعد الفعالية',
        body: 'يُصدر تقرير نقل كامل بعد كل فعالية. أوقات الرحلة واستخدام المركبات وأي ملاحظات موثقة لسجلاتك والتخطيط المستقبلي.',
        tag: 'اليوم التالي',
      },
    ],
    phaseTitles: {
      'Pre-Event': 'ما قبل الفعالية',
      'Live': 'العمليات المباشرة',
      'Post': 'ما بعد الفعالية',
    },
  },
  fr: {
    label: 'Cadre Opérationnel',
    heading: 'Comment la Logistique\nFonctionne chez Limore',
    sub: 'La différence entre un bon transport et un transport parfaitement fluide réside dans la preparation effectuée avant le premier déplacement.',
    steps: [
      {
        phase: 'Pre-Event',
        title: 'Brief Transport Événementiel',
        body: 'Nous prenons un brief complet auprès de votre producteur. Liste des guests, hiérarchie VIP, adresses du lieu, horaires et contingences. Tout documenté et confirmé par écrit.',
        tag: '14 jours avant',
      },
      {
        phase: 'Pre-Event',
        title: 'Attribution Flotte et Chauffeurs',
        body: 'Les véhicules sont alloués par niveau de guest. Les chauffeurs sont briefés individuellement. Les véhicules de remplacement sont confirmés pour chaque trajet principal.',
        tag: '7 jours avant',
      },
      {
        phase: 'Pre-Event',
        title: 'Verrouillage Itinéraire et Timing',
        body: 'Tous les points de collecte, déposes et transferts interurbains sont planifiés avec des marges horaires. Les données de vols sont intégrées.',
        tag: '48 heures avant',
      },
      {
        phase: 'Live',
        title: 'Centre Opérationnel Actif',
        body: 'Un contrôleur dédié surveille chaque trajet en temps réel. Tout retard est intercepté et résolu avant que le passager le réalise.',
        tag: 'Jour J',
      },
      {
        phase: 'Live',
        title: 'Communication Guests Gérée',
        body: 'Vos guests reçoivent les détails du chauffeur au bon moment. Aucune confusion aux points de collecte. Aucun guest en attente.',
        tag: 'Jour J',
      },
      {
        phase: 'Post',
        title: 'Débriefing et Rapport Événementiel',
        body: 'Un rapport transport complet est émis après chaque événement. Temps de trajet, utilisation véhicules et incidents documentés.',
        tag: 'Lendemain ouvrable',
      },
    ],
    phaseTitles: {
      'Pre-Event': 'Pré-Événement',
      'Live': 'Opérations Live',
      'Post': 'Post-Événement',
    },
  },
}

const PHASES = ['Pre-Event', 'Live', 'Post']

const phaseColors = {
  'Pre-Event': {
    dot: '#C41E1E',
    bg: 'rgba(196,30,30,0.06)',
    text: '#C41E1E',
    border: 'rgba(196,30,30,0.15)',
  },
  'Live': {
    dot: '#0A0A0A',
    bg: 'rgba(10,10,10,0.04)',
    text: '#555',
    border: '#EBEBEB',
  },
  'Post': {
    dot: '#BBBBBB',
    bg: 'rgba(10,10,10,0.02)',
    text: '#AAAAAA',
    border: '#EBEBEB',
  },
}

export default function RWLogistics({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const stepRefs   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 73%' },
        }
      )

      stepRefs.current.forEach((el) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, x: isRTL ? 20 : -20 },
          {
            opacity: 1, x: 0, duration: 0.75, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const grouped = PHASES.map((phase) => ({
    phase,
    label: content.phaseTitles[phase],
    steps: content.steps.filter((s) => s.phase === phase),
  }))

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 96px) clamp(40px, 6vw, 60px)',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'flex-end', justifyContent: 'space-between',
          gap: '24px',
          borderBottom: '1px solid #EBEBEB',
          opacity: 0,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
            <div style={{ width: '36px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.24em',
              textTransform: 'uppercase', color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.8vw, 4.2rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400, color: '#0A0A0A',
            lineHeight: 1.03, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em',
          }}>
            {content.heading}
          </h2>
        </div>
        <p style={{
          fontSize: '13px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: '#999',
          lineHeight: 1.85, maxWidth: '380px',
        }}>
          {content.sub}
        </p>
      </div>

      {/* Timeline grouped by phase */}
      <div style={{ padding: '0 clamp(24px, 6vw, 96px)' }}>
        {grouped.map(({ phase, label, steps }, gi) => {
          const colors = phaseColors[phase]
          return (
            <div
              key={phase}
              style={{
                borderBottom: gi < grouped.length - 1 ? '1px solid #F0F0F0' : 'none',
              }}
            >
              {/* Phase label */}
              <div style={{
                padding: 'clamp(28px, 4vw, 44px) 0 clamp(16px, 2vw, 24px)',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <div style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  backgroundColor: colors.dot,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '11px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: '#0A0A0A',
                }}>
                  {label}
                </span>
              </div>

              {/* Steps grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1px',
                backgroundColor: '#F0F0F0',
                marginBottom: 'clamp(28px, 4vw, 44px)',
              }}>
                {steps.map((step, si) => {
                  const refIndex = content.steps.findIndex(
                    (s) => s.title === step.title && s.phase === step.phase
                  )
                  return (
                    <div
                      key={si}
                      ref={(el) => (stepRefs.current[refIndex] = el)}
                      style={{
                        backgroundColor: '#FFFFFF',
                        padding: 'clamp(24px, 3vw, 36px)',
                        opacity: 0,
                      }}
                    >
                      {/* Title + tag row */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '14px',
                        gap: '12px',
                        flexWrap: 'wrap',
                      }}>
                        <h3 style={{
                          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                          fontFamily: 'Cormorant Garamond, Georgia, serif',
                          fontWeight: 400, color: '#0A0A0A',
                          lineHeight: 1.2, flex: 1,
                          margin: 0,
                        }}>
                          {step.title}
                        </h3>
                        <span style={{
                          fontSize: '9px', fontFamily: 'Inter, sans-serif',
                          fontWeight: 500, letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: colors.text,
                          backgroundColor: colors.bg,
                          border: `1px solid ${colors.border}`,
                          padding: '3px 10px',
                          flexShrink: 0, whiteSpace: 'nowrap',
                        }}>
                          {step.tag}
                        </span>
                      </div>

                      <p style={{
                        fontSize: '13px', fontFamily: 'Inter, sans-serif',
                        fontWeight: 300, color: '#777',
                        lineHeight: 1.8, margin: 0,
                      }}>
                        {step.body}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />
    </section>
  )
}