'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow:  'Member Benefits',
    headline: 'Every Detail. Already Handled.',
    benefits: [
      { icon: 'priority',  title: 'Priority Dispatch',      text: 'Members are dispatched before non-member bookings. During peak periods, your request is always first.' },
      { icon: 'pricing',   title: 'Fixed Hour Rate',        text: 'No surge, no seasonal uplift. Your rate is locked from day one and applies globally.' },
      { icon: 'support',   title: 'Dedicated Account Line', text: 'A direct number to your account manager — not a call centre. Answered within 3 rings, guaranteed.' },
      { icon: 'flight',    title: 'Flight Tracking',        text: 'Every airport transfer auto-adjusts to your live flight data. Land early or late — your chauffeur knows.' },
      { icon: 'profile',   title: 'Saved Preferences',      text: 'Seat position, cabin temperature, music, reading material, water preference — noted and always applied.' },
      { icon: 'rollover',  title: 'Hour Rollover',          text: 'Unused hours in your current period roll into the next. Nothing is wasted.' },
      { icon: 'upgrade',   title: 'Complimentary Upgrades', text: 'Where fleet availability allows, members receive free vehicle class upgrades at no additional charge.' },
      { icon: 'reporting', title: 'Monthly Usage Reports',  text: 'Detailed statements showing hours used, journeys, destinations, and cost centre allocation — auto-delivered.' },
    ],
  },
  ar: {
    eyebrow:  'مزايا العضوية',
    headline: 'كل التفاصيل. تمت معالجتها.',
    benefits: [
      { icon: 'priority',  title: 'أولوية الإرسال',      text: 'يُرسل الأعضاء قبل الحجوزات العادية. في أوقات الذروة، طلبك دائماً في المقدمة.' },
      { icon: 'pricing',   title: 'سعر ساعة ثابت',       text: 'لا أسعار متذبذبة. سعرك مقفل منذ اليوم الأول ويطبق عالمياً.' },
      { icon: 'support',   title: 'خط حساب مخصص',        text: 'رقم مباشر لمدير حسابك — وليس مركز اتصال.' },
      { icon: 'flight',    title: 'تتبع الرحلات',         text: 'كل تحويل مطار يُعدَّل تلقائياً وفق بيانات رحلتك الحية.' },
      { icon: 'profile',   title: 'تفضيلات محفوظة',       text: 'وضع المقعد ودرجة الحرارة والموسيقى — مسجلة ومطبقة دائماً.' },
      { icon: 'rollover',  title: 'ترحيل الساعات',        text: 'الساعات غير المستخدمة تنتقل إلى الفترة التالية. لا شيء يضيع.' },
      { icon: 'upgrade',   title: 'ترقيات مجانية',        text: 'حيثما توفرت الأسطول، يحصل الأعضاء على ترقيات مجانية لفئة المركبة.' },
      { icon: 'reporting', title: 'تقارير استخدام شهرية', text: 'كشوف تفصيلية تُسلَّم تلقائياً.' },
    ],
  },
  fr: {
    eyebrow:  'Avantages Membres',
    headline: 'Chaque Détail. Déjà Géré.',
    benefits: [
      { icon: 'priority',  title: 'Dispatch Prioritaire',     text: 'Les membres sont dépêchés avant les réservations non-membres. Pendant les périodes de pointe, votre demande est toujours en premier.' },
      { icon: 'pricing',   title: 'Tarif Horaire Fixe',       text: 'Pas de surcharge, pas d\'augmentation saisonnière. Votre tarif est bloqué dès le premier jour.' },
      { icon: 'support',   title: 'Ligne de Compte Dédiée',   text: 'Un numéro direct vers votre account manager — pas un centre d\'appels. Répondu en 3 sonneries.' },
      { icon: 'flight',    title: 'Suivi des Vols',           text: 'Chaque transfert aéroport s\'ajuste automatiquement à vos données de vol en direct.' },
      { icon: 'profile',   title: 'Préférences Enregistrées', text: 'Position du siège, température, musique, eau — notées et toujours appliquées.' },
      { icon: 'rollover',  title: 'Report d\'Heures',         text: 'Les heures non utilisées sont reportées à la période suivante. Rien n\'est perdu.' },
      { icon: 'upgrade',   title: 'Upgrades Gratuits',        text: 'Les membres reçoivent des surclassements de véhicule gratuits selon la disponibilité.' },
      { icon: 'reporting', title: 'Rapports Mensuels',        text: 'Relevés détaillés livrés automatiquement avec heures, trajets, et allocation par centre de coût.' },
    ],
  },
}

// ✅ All strokes → #C8102E
const BenefitIcon = ({ id }) => {
  const s = {
    width: 20, height: 20,
    stroke: '#C8102E', strokeWidth: '1.1',
    strokeLinecap: 'round', strokeLinejoin: 'round',
  }
  const icons = {
    priority: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...s}>
        <path d="M10 2v8M10 2L6 6M10 2l4 4M4 14h12M4 17.5h8" />
      </svg>
    ),
    pricing: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...s}>
        <rect x="1.5" y="1.5" width="17" height="17" rx="1" />
        <path d="M10 5.5v9M7 7.5c0-1.1.9-2 2-2h2a2 2 0 010 4H9a2 2 0 000 4h2a2 2 0 002-2" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...s}>
        <path d="M3 6.5A7 7 0 0117 6.5v2a2 2 0 01-2 2h-1a1 1 0 01-1-1V7a1 1 0 011-1h.5M3 6.5v2a2 2 0 002 2h1a1 1 0 001-1V7a1 1 0 00-1-1H5.5"/>
        <path d="M17 10.5v1a4 4 0 01-4 4h-1.5" />
        <circle cx="10" cy="16.5" r="1" fill="#C8102E" stroke="none"/>
      </svg>
    ),
    flight: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...s}>
        <path d="M2 13.5l2-1 5 2 6.5-8.5a1.5 1.5 0 012.3 1.9L10 17l-5-1.5-3 .5.5-2.5z" />
        <path d="M2 17.5h16" />
      </svg>
    ),
    profile: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...s}>
        <circle cx="10" cy="6.5" r="4" />
        <path d="M2 18.5c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
    rollover: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...s}>
        <path d="M2 10a8 8 0 1116 0" />
        <path d="M18 10l-2-3-2 3" />
        <path d="M10 6v4l3 2" />
      </svg>
    ),
    upgrade: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...s}>
        <path d="M10 2l3 6H7l3-6zM4 12h12M4 16h8" />
      </svg>
    ),
    reporting: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...s}>
        <rect x="3" y="2" width="14" height="16" rx="1" />
        <path d="M7 7h6M7 10h6M7 13h4" />
      </svg>
    ),
  }
  return icons[id] || null
}

export default function Limore360Benefits({ locale = 'en' }) {
  const c        = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const secRef   = useRef(null)
  const imgRef   = useRef(null)
  const headRef  = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: imgRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 82%' } }
      )
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: i * 0.07,
            scrollTrigger: { trigger: el, start: 'top 90%' } }
        )
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={secRef}
      style={{
        backgroundColor: '#050505',
        direction: isRTL ? 'rtl' : 'ltr',
        overflow: 'hidden',
      }}
    >
      {/* ── Full-width image strip ── */}
      <div
        ref={imgRef}
        style={{
          width: '100%',
          height: 'clamp(180px, 28vw, 400px)',
          position: 'relative',
          overflow: 'hidden',
          opacity: 0,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1800&q=85"
          alt="Limore 360 — member benefits, luxury fleet on the road"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
          loading="lazy"
          sizes="100vw"
        />
        {/* Dark vignette fading into section bg */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0.6) 65%, #050505 100%)',
        }} />
        {/* ✅ Red hairline at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(to right, transparent 5%, #C8102E 50%, transparent 95%)',
        }} />
        {/* Floating label */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(14px, 3vw, 26px)',
          left: isRTL ? 'auto' : 'clamp(20px, 6vw, 96px)',
          right: isRTL ? 'clamp(20px, 6vw, 96px)' : 'auto',
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '7px 16px',
          backgroundColor: 'rgba(5,5,5,0.80)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(200,16,46,0.25)',
        }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#C8102E', flexShrink: 0 }} />
          <span style={{
            fontSize: '9px', letterSpacing: '0.2em',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500, textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.55)',
          }}>8 Member Benefits — Active from Day One</span>
        </div>
      </div>

      {/* ── Header + grid ── */}
      <div style={{ padding: 'clamp(48px, 8vw, 88px) clamp(20px, 6vw, 96px)' }}>

        {/* Header */}
        <div ref={headRef} style={{
          marginBottom: 'clamp(40px, 7vw, 64px)',
          maxWidth: '640px',
          opacity: 0,
        }}>
          {/* ✅ Red eyebrow */}
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
            fontWeight: 300, color: '#F8F7F4',
            lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0,
          }}>
            {c.headline}
          </h2>
        </div>

        {/* Benefits grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
          gap: '1px',
          backgroundColor: '#1A1A1A',
        }}>
          {c.benefits.map((b, i) => (
            <div
              key={i}
              ref={el => (itemRefs.current[i] = el)}
              className="l360-benefit-card"
              style={{
                backgroundColor: '#0A0A0A',
                padding: 'clamp(24px, 3.5vw, 36px) clamp(20px, 3vw, 32px)',
                opacity: 0,
                transition: 'background-color 0.3s ease',
                display: 'flex', flexDirection: 'column', gap: '14px',
              }}
            >
              {/* ✅ Red icon ring */}
              <div
                className="l360-benefit-icon-ring"
                style={{
                  width: '44px', height: '44px',
                  border: '1px solid rgba(200,16,46,0.28)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'border-color 0.3s ease, background-color 0.3s ease',
                }}
              >
                <BenefitIcon id={b.icon} />
              </div>
              <div>
                <h3 style={{
                  fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 500, color: '#F8F7F4',
                  margin: '0 0 8px', lineHeight: 1.2,
                }}>
                  {b.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(0.78rem, 1.1vw, 0.85rem)',
                  fontFamily: 'Inter, sans-serif', fontWeight: 300,
                  color: 'rgba(248,247,244,0.38)', lineHeight: 1.85, margin: 0,
                }}>
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .l360-benefit-card:hover { background-color: #111111 !important; }
        .l360-benefit-card:hover .l360-benefit-icon-ring {
          border-color: rgba(200,16,46,0.65) !important;
          background-color: rgba(200,16,46,0.07) !important;
        }
      `}</style>
    </section>
  )
}