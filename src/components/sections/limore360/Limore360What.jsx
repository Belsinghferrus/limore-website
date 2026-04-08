'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow:  'What is Limore 360',
    headline: 'Not a Booking. A Relationship.',
    body1:    'Limore 360 is not a subscription in the conventional sense. It is a retainer - a private arrangement between you and a team of dedicated professionals who understand that your time is the most finite resource you have.',
    body2:    'When you hold a Limore 360 membership, you are not competing for availability. You are not subject to surge pricing. You are not explaining your preferences each time. Your account is pre-loaded, your chauffeur is briefed, and your vehicle is staged before you ask.',
    items: [
      {
        icon: 'clock',
        title: 'Pre-purchased hours',
        text:  'Buy a block of hours at a fixed rate. Use them across any city in our network, for any service category, whenever you need.',
      },
      {
        icon: 'shield',
        title: 'Locked pricing',
        text:  'Your rate per hour is agreed at the point of purchase and does not change — regardless of market conditions, season, or demand.',
      },
      {
        icon: 'user',
        title: 'Named chauffeurs',
        text:  'We assign preferred chauffeurs to your account. They know your seat position, temperature preference, and privacy requirements by default.',
      },
      {
        icon: 'globe',
        title: 'Global redemption',
        text:  'Your hours are valid across every city Limore operates in. One membership, one rate, every market.',
      },
    ],
  },
  ar: {
    eyebrow:  'ما هو ليمور ٣٦٠',
    headline: 'ليس حجزاً. إنها علاقة.',
    body1:    'ليمور ٣٦٠ ليس اشتراكاً بالمعنى التقليدي. إنه ترتيب خاص بينك وبين فريق متخصص يفهم أن وقتك هو أكثر مواردك ندرة.',
    body2:    'عندما تمتلك عضوية ليمور ٣٦٠، لا تتنافس على التوفر ولا تخضع لأسعار متذبذبة ولا تشرح تفضيلاتك في كل مرة.',
    items: [
      { icon: 'clock',  title: 'ساعات مسبقة الشراء', text: 'اشترِ كتلة من الساعات بسعر ثابت. استخدمها في أي مدينة في شبكتنا.' },
      { icon: 'shield', title: 'أسعار مضمونة',        text: 'سعرك للساعة متفق عليه عند الشراء ولا يتغير بغض النظر عن ظروف السوق.' },
      { icon: 'user',   title: 'سائقون بالاسم',       text: 'نخصص سائقين مفضلين لحسابك يعرفون تفضيلاتك بشكل افتراضي.' },
      { icon: 'globe',  title: 'استرداد عالمي',       text: 'ساعاتك صالحة في كل مدينة تعمل فيها ليمور. عضوية واحدة، سعر واحد.' },
    ],
  },
  fr: {
    eyebrow:  'Qu\'est-ce que Limore 360',
    headline: 'Pas une Réservation. Une Relation.',
    body1:    'Limore 360 n\'est pas un abonnement au sens conventionnel. C\'est un retainer — un arrangement privé entre vous et une équipe dédiée qui comprend que votre temps est votre ressource la plus précieuse.',
    body2:    'Avec Limore 360, vous ne concourez pas pour la disponibilité. Vous n\'êtes pas soumis à des tarifs variables. Vous n\'expliquez pas vos préférences à chaque fois.',
    items: [
      { icon: 'clock',  title: 'Heures prépayées',     text: 'Achetez un bloc d\'heures à tarif fixe. Utilisez-les dans n\'importe quelle ville de notre réseau.' },
      { icon: 'shield', title: 'Tarification bloquée', text: 'Votre tarif à l\'heure est convenu à l\'achat et ne change pas, quelle que soit la demande.' },
      { icon: 'user',   title: 'Chauffeurs attitrés',  text: 'Nous assignons des chauffeurs préférés à votre compte qui connaissent vos préférences par défaut.' },
      { icon: 'globe',  title: 'Utilisation mondiale', text: 'Vos heures sont valables dans chaque ville où Limore opère. Un abonnement, un tarif, tous les marchés.' },
    ],
  },
}

// ✅ All strokes → #C8102E
const icons = {
  clock: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="9.5" stroke="#C8102E" strokeWidth="1.1"/>
      <path d="M11 6v5.5l3.5 2" stroke="#C8102E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  shield: (
    <svg width="20" height="23" viewBox="0 0 20 23" fill="none" aria-hidden="true">
      <path d="M10 1.5L1.5 5.5v6c0 5.5 4 9.5 8.5 10 4.5-.5 8.5-4.5 8.5-10v-6L10 1.5z" stroke="#C8102E" strokeWidth="1.1" strokeLinejoin="round"/>
      <path d="M6.5 11.5l2.5 2.5 4.5-5" stroke="#C8102E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  user: (
    <svg width="20" height="23" viewBox="0 0 20 23" fill="none" aria-hidden="true">
      <circle cx="10" cy="7" r="4.5" stroke="#C8102E" strokeWidth="1.1"/>
      <path d="M1.5 21.5c0-4.4 3.8-8 8.5-8s8.5 3.6 8.5 8" stroke="#C8102E" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="9.5" stroke="#C8102E" strokeWidth="1.1"/>
      <path d="M11 1.5c0 0-4 4-4 9.5s4 9.5 4 9.5M11 1.5c0 0 4 4 4 9.5s-4 9.5-4 9.5M1.5 11h19" stroke="#C8102E" strokeWidth="1.1"/>
    </svg>
  ),
}

export default function Limore360What({ locale = 'en' }) {
  const c        = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const secRef   = useRef(null)
  const topRef   = useRef(null)
  const imgRef   = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.3, ease: 'power3.out',
          scrollTrigger: { trigger: imgRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(topRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: topRef.current, start: 'top 82%' } }
      )
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.1,
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
        direction: isRTL ? 'rtl' : 'ltr',
        overflow: 'hidden',
      }}
    >
      {/* ── Full-width image strip ── */}
      <div
        ref={imgRef}
        style={{
          width: '100%',
          height: 'clamp(200px, 32vw, 460px)',
          position: 'relative',
          overflow: 'hidden',
          opacity: 0,
        }}
      >
      <img
  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=85"
  alt="Limore chauffeur vehicle interior — refined private travel"
  loading="lazy"
  style={{
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 35%',
  }}
/>
        {/* Dark fade top & bottom so it connects to white sections */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 30%, transparent 65%, rgba(255,255,255,0.85) 100%)',
        }} />
        {/* Red hairline at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(to right, transparent 5%, #C8102E 50%, transparent 95%)',
        }} />
        {/* Floating label */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(16px, 3vw, 28px)',
          left: isRTL ? 'auto' : 'clamp(20px, 6vw, 96px)',
          right: isRTL ? 'clamp(20px, 6vw, 96px)' : 'auto',
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '7px 16px',
          backgroundColor: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(200,16,46,0.18)',
        }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#C8102E', flexShrink: 0 }} />
          <span style={{
            fontSize: '9px', letterSpacing: '0.2em',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500, textTransform: 'uppercase', color: '#C8102E',
          }}>Limore 360 — Private Membership</span>
        </div>
      </div>

      {/* ── Copy + cards ── */}
      <div style={{ padding: 'clamp(48px, 8vw, 96px) clamp(20px, 6vw, 96px)' }}>

        {/* Top copy block */}
        <div
          ref={topRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(24px, 5vw, 72px)',
            marginBottom: 'clamp(48px, 8vw, 80px)',
            alignItems: 'end',
            opacity: 0,
          }}
        >
          <div>
            {/* ✅ Red eyebrow line + text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '1px', backgroundColor: '#C8102E', flexShrink: 0 }} />
              <span style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: '#C8102E',
              }}>
                {c.eyebrow}
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 5rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 300, color: '#0A0A0A',
              lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0,
            }}>
              {c.headline}
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{
              fontSize: 'clamp(0.84rem, 1.3vw, 0.97rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: '#555555', lineHeight: 1.9, margin: 0,
            }}>
              {c.body1}
            </p>
            <p style={{
              fontSize: 'clamp(0.84rem, 1.3vw, 0.97rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: '#555555', lineHeight: 1.9, margin: 0,
            }}>
              {c.body2}
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '1px',
          backgroundColor: '#ECECEC',
          border: '1px solid #ECECEC',
        }}>
          {c.items.map((item, i) => (
            <div
              key={i}
              ref={el => (cardRefs.current[i] = el)}
              className="l360-what-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: 'clamp(28px, 4vw, 44px) clamp(22px, 3vw, 36px)',
                opacity: 0,
                transition: 'background-color 0.3s ease',
                position: 'relative',
              }}
            >
              <div style={{ marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>
                {icons[item.icon]}
              </div>
              <h3 style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 500, color: '#0A0A0A',
                margin: '0 0 12px', lineHeight: 1.2,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                color: '#777777', lineHeight: 1.85, margin: 0,
              }}>
                {item.text}
              </p>
              {/* ✅ Red hover line — was gold */}
              <div className="l360-what-line" style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '2px', backgroundColor: '#C8102E',
                transform: 'scaleX(0)', transformOrigin: isRTL ? 'right' : 'left',
                transition: 'transform 0.35s ease',
              }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .l360-what-card:hover { background-color: #FDF8F8 !important; }
        .l360-what-card:hover .l360-what-line { transform: scaleX(1) !important; }
      `}</style>
    </section>
  )
}