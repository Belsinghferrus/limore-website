'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const t = {
  en: {
    eyebrow: 'How We Operate',
    heading: 'The Limore Standard',
    sub:     'Every booking routed through Limore is held to a single standard, regardless of city or operator.',
    items: [
      { code: 'T+15', label: 'Arrival Window',    body: 'Chauffeur must be on location 15 minutes before the scheduled pickup. No exceptions.' },
      { code: '24/7', label: 'Dispatch Coverage', body: 'Limore dispatch is available around the clock. Partners must maintain response capability at all hours.' },
      { code: '100%', label: 'Uniform Protocol',  body: 'Vehicle presentation, chauffeur attire, and client greeting follow Limore\'s exact protocol on every trip.' },
      { code: '0',    label: 'Cancellation Zone', body: 'Zero tolerance for same-day cancellations by the operator. A confirmed booking is a commitment.' },
    ],
  },
  ar: {
    eyebrow: 'كيف نعمل',
    heading: 'معيار ليمور',
    sub:     'كل حجز عبر ليمور يخضع لمعيار واحد بغض النظر عن المدينة أو المشغل.',
    items: [
      { code: 'T+15', label: 'نافذة الوصول',         body: 'يجب أن يكون السائق في الموقع قبل 15 دقيقة من موعد الاستلام المحدد.' },
      { code: '24/7', label: 'تغطية الإرسال',         body: 'إرسال ليمور متاح على مدار الساعة. يجب على الشركاء الحفاظ على القدرة على الاستجابة في جميع الأوقات.' },
      { code: '100%', label: 'بروتوكول موحد',         body: 'عرض المركبة وزي السائق وتحية العميل تتبع بروتوكول ليمور الدقيق في كل رحلة.' },
      { code: '0',    label: 'منطقة الإلغاء الصفرية', body: 'تسامح صفري مع إلغاء المشغل في نفس اليوم. الحجز المؤكد التزام.' },
    ],
  },
  fr: {
    eyebrow: 'Notre Facon d\'Operer',
    heading: 'Le Standard Limore',
    sub:     'Chaque reservation Limore respecte un standard unique, quelle que soit la ville ou l\'operateur.',
    items: [
      { code: 'T+15', label: 'Fenetre d\'Arrivee',  body: 'Le chauffeur doit etre sur place 15 minutes avant le pickup. Sans exception.' },
      { code: '24/7', label: 'Couverture Dispatch',  body: 'Le dispatch Limore est disponible 24h/24. Les partenaires doivent maintenir une capacite de reponse a toute heure.' },
      { code: '100%', label: 'Protocole Uniforme',   body: 'Presentation du vehicule, tenue et accueil client suivent le protocole exact de Limore a chaque trajet.' },
      { code: '0',    label: 'Zone Zero Annulation', body: 'Tolerance zero pour les annulations le jour meme par l\'operateur. Une reservation confirmee est un engagement.' },
    ],
  },
}

export default function PartnerStandards({ locale = 'en' }) {
  const content   = t[locale] || t.en
  const isRTL     = locale === 'ar'
  const sectionRef = useRef(null)
  const lineRef    = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {

      // Animated progress line (drawn left to right on scroll)
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: 'power2.inOut',
          transformOrigin: isRTL ? 'right center' : 'left center',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )

      // Cards stagger in
      gsap.fromTo('.ps-card',
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
        }
      )

      // Code value — clip reveal from bottom
      gsap.fromTo('.ps-code',
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0, opacity: 1,
          duration: 0.8,
          ease: 'power4.out',
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      )

      // Hover — card lift
      document.querySelectorAll('.ps-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -6, boxShadow: '0 16px 40px rgba(196,30,30,0.08)', duration: 0.3, ease: 'power2.out' })
          gsap.to(card.querySelector('.ps-fill'), { scaleX: 1, duration: 0.35, ease: 'power2.out' })
          gsap.to(card.querySelector('.ps-code'), { color: '#C41E1E', duration: 0.25 })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, boxShadow: '0 1px 2px rgba(10,10,10,0.04)', duration: 0.3, ease: 'power2.inOut' })
          gsap.to(card.querySelector('.ps-fill'), { scaleX: 0, duration: 0.3, ease: 'power2.inOut' })
          gsap.to(card.querySelector('.ps-code'), { color: '#1a1a1a', duration: 0.25 })
        })
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [locale])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#FAFAF8',
        padding:         'clamp(72px,10vw,120px) clamp(24px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
        borderTop:       '1px solid rgba(10,10,10,0.06)',
        borderBottom:    '1px solid rgba(10,10,10,0.06)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 'clamp(12px,3vw,24px)' }}>
        <p style={{
          fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#C41E1E', marginBottom: '16px',
        }}>
          {content.eyebrow}
        </p>
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300,
            color: '#0A0A0A', margin: 0, lineHeight: 1.1,
          }}>
            {content.heading}
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.78rem,1.1vw,0.88rem)', fontWeight: 300,
            color: 'rgba(10,10,10,0.45)', lineHeight: 1.8,
            maxWidth: '340px', margin: 0,
          }}>
            {content.sub}
          </p>
        </div>
      </div>

      {/* Animated progress line */}
      <div style={{ position: 'relative', margin: 'clamp(28px,4vw,48px) 0', height: '1px', backgroundColor: 'rgba(10,10,10,0.07)' }}>
        <div
          ref={lineRef}
          style={{
            position: 'absolute', inset: 0,
            backgroundColor: '#C41E1E',
            transformOrigin: isRTL ? 'right center' : 'left center',
            transform: 'scaleX(0)',
          }}
        />
        {/* Step markers */}
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%', transform: 'translateY(-50%)',
            left: `${i === 0 ? 0 : i === 3 ? 100 : i === 1 ? 33 : 66}%`,
            width: '6px', height: '6px', borderRadius: '50%',
            backgroundColor: '#C41E1E',
            outline: '3px solid #FAFAF8',
          }} />
        ))}
      </div>

      {/* Cards */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px,100%), 1fr))',
        gap:                 'clamp(12px,2vw,20px)',
      }}>
        {content.items.map((item, idx) => (
          <div
            key={item.code}
            className="ps-card"
            style={{
              backgroundColor: '#fff',
              padding:         'clamp(28px,3vw,44px)',
              display:         'flex',
              flexDirection:   'column',
              gap:             '14px',
              border:          '1px solid rgba(10,10,10,0.07)',
              boxShadow:       '0 1px 2px rgba(10,10,10,0.04)',
              cursor:          'default',
              position:        'relative',
              overflow:        'hidden',
              opacity:         0,
            }}
          >
            {/* Bottom fill bar on hover */}
            <div
              className="ps-fill"
              style={{
                position:        'absolute',
                bottom:          0, left: 0, right: 0,
                height:          '2px',
                backgroundColor: '#C41E1E',
                transform:       'scaleX(0)',
                transformOrigin: isRTL ? 'right center' : 'left center',
              }}
            />

            {/* Index */}
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(10,10,10,0.2)',
            }}>
              0{idx + 1}
            </span>

            {/* Code value */}
            <div style={{ overflow: 'hidden' }}>
              <span
                className="ps-code"
                style={{
                  display: 'block',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(2.4rem,4vw,3.2rem)', fontWeight: 300,
                  color: '#1a1a1a', lineHeight: 1,
                  opacity: 0,
                }}
              >
                {item.code}
              </span>
            </div>

            {/* Divider */}
            <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(196,30,30,0.35)' }} />

            {/* Label */}
            <h3 style={{
              fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#0A0A0A', margin: 0,
            }}>
              {item.label}
            </h3>

            {/* Body */}
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.76rem,1vw,0.84rem)', fontWeight: 300,
              color: 'rgba(10,10,10,0.48)', lineHeight: 1.85, margin: 0,
            }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}