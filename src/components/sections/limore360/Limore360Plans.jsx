'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow:   'Membership Plans',
    headline:  'Choose Your Hours.',
    sub:       'All plans include the full Limore 360 benefit stack. The only difference is volume.',
    recommended: 'Most Popular',
    plans: [
      {
        id:    'essential',
        name:  'Essential',
        hours: '20',
        unit:  'hours',
        desc:  'For individuals and small executive teams with regular but moderate travel requirements.',
        rate:  'Fixed rate per hour',
        perks: [
          'Priority dispatch',
          'Fixed locked pricing',
          'Named chauffeur assignment',
          'Flight tracking on all airport runs',
          'Saved traveller profiles',
          'Monthly usage statement',
          'Direct account line (business hours)',
        ],
        cta: 'Enquire — Essential',
      },
      {
        id:    'prestige',
        name:  'Prestige',
        hours: '50',
        unit:  'hours',
        desc:  'For corporate teams, UHNW individuals, and organisations with frequent multi-city travel patterns.',
        rate:  'Reduced rate per hour',
        perks: [
          'Everything in Essential',
          'Dedicated account manager (24/7)',
          'Complimentary vehicle class upgrades',
          'Hour rollover to next billing period',
          'Multi-traveller account management',
          'Cost centre reporting & export',
          'Priority access to new fleet additions',
          'White-label chauffeur presentation option',
        ],
        cta: 'Enquire — Prestige',
        highlighted: true,
      },
      {
        id:    'bespoke',
        name:  'Bespoke',
        hours: 'Custom',
        unit:  '',
        desc:  'For institutional clients, family offices, and enterprises requiring tailored volume, multi-location coverage, and contractual SLAs.',
        rate:  'Negotiated rate — volume pricing',
        perks: [
          'Everything in Prestige',
          'Contracted SLAs and KPIs',
          'Dedicated operations team',
          'Custom API integration',
          'Multi-country billing',
          'Quarterly executive reviews',
          'Event & roadshow coordination',
          'Co-branded or white-label options',
        ],
        cta: 'Speak to Corporate Team',
      },
    ],
    noteLong: 'Pricing is provided upon enquiry. All plans are invoiced monthly. Hours do not expire within a 12-month membership term.',
  },
  ar: {
    eyebrow:   'خطط العضوية',
    headline:  'اختر ساعاتك.',
    sub:       'جميع الخطط تتضمن حزمة المزايا الكاملة لليمور ٣٦٠.',
    recommended: 'الأكثر شيوعاً',
    plans: [
      {
        id: 'essential', name: 'الأساسية', hours: '٢٠', unit: 'ساعة',
        desc: 'للأفراد والفرق التنفيذية الصغيرة ذات متطلبات السفر المنتظمة.',
        rate: 'سعر ثابت للساعة',
        perks: ['أولوية الإرسال','أسعار مقفلة','تعيين سائق محدد','تتبع الرحلات','ملفات مسافرين محفوظة','كشف استخدام شهري','خط حساب مباشر'],
        cta: 'استفسار — الأساسية',
      },
      {
        id: 'prestige', name: 'البريستيج', hours: '٥٠', unit: 'ساعة',
        desc: 'للفرق المؤسسية والأفراد ذوي الثروات العالية.',
        rate: 'سعر مخفض للساعة',
        perks: ['كل ما في الأساسية','مدير حساب مخصص ٢٤/٧','ترقيات مركبة مجانية','ترحيل الساعات','إدارة متعددة المسافرين','تقارير مراكز التكلفة','أولوية الوصول للأسطول الجديد','خيار تقديم العلامة البيضاء'],
        cta: 'استفسار — البريستيج', highlighted: true,
      },
      {
        id: 'bespoke', name: 'المخصصة', hours: 'مخصص', unit: '',
        desc: 'للعملاء المؤسسيين ومكاتب العائلة والشركات.',
        rate: 'سعر تفاوضي',
        perks: ['كل ما في البريستيج','اتفاقيات مستوى خدمة مُعاقَد عليها','فريق عمليات مخصص','تكامل API مخصص','فواتير متعددة الدول','مراجعات تنفيذية ربع سنوية','تنسيق الفعاليات','خيارات العلامة البيضاء'],
        cta: 'تحدث مع الفريق المؤسسي',
      },
    ],
    noteLong: 'تُقدَّم الأسعار عند الاستفسار. تُصدر فواتير جميع الخطط شهرياً.',
  },
  fr: {
    eyebrow:   'Formules d\'Abonnement',
    headline:  'Choisissez vos Heures.',
    sub:       'Toutes les formules incluent l\'ensemble des avantages Limore 360. La seule différence est le volume.',
    recommended: 'La Plus Populaire',
    plans: [
      {
        id: 'essential', name: 'Essential', hours: '20', unit: 'heures',
        desc: 'Pour les particuliers et petites équipes dirigeantes aux besoins de déplacement réguliers.',
        rate: 'Tarif fixe à l\'heure',
        perks: ['Dispatch prioritaire','Tarification bloquée','Chauffeur attitré','Suivi des vols','Profils voyageurs sauvegardés','Relevé mensuel','Ligne directe (heures ouvrables)'],
        cta: 'Demande — Essential',
      },
      {
        id: 'prestige', name: 'Prestige', hours: '50', unit: 'heures',
        desc: 'Pour les équipes corporate, UHNW et organisations avec des déplacements fréquents multi-villes.',
        rate: 'Tarif réduit à l\'heure',
        perks: ['Tout dans Essential','Account manager dédié 24/7','Upgrades de véhicule gratuits','Report d\'heures','Gestion multi-voyageurs','Reporting par centre de coût','Accès prioritaire aux nouvelles flottes','Option présentation marque blanche'],
        cta: 'Demande — Prestige', highlighted: true,
      },
      {
        id: 'bespoke', name: 'Sur-Mesure', hours: 'Personnalisé', unit: '',
        desc: 'Pour les clients institutionnels, family offices et entreprises nécessitant un volume sur mesure.',
        rate: 'Tarif négocié — volume',
        perks: ['Tout dans Prestige','SLAs contractuels','Équipe dédiée','Intégration API personnalisée','Facturation multi-pays','Revues trimestrielles','Coordination événements','Options marque blanche'],
        cta: 'Parler à l\'Équipe Corporate',
      },
    ],
    noteLong: 'Les tarifs sont fournis sur demande. Toutes les formules sont facturées mensuellement.',
  },
}

export default function Limore360Plans({ locale = 'en' }) {
  const c        = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const secRef   = useRef(null)
  const imgRef   = useRef(null)
  const headRef  = useRef(null)
  const cardRefs = useRef([])
  const lp       = (href) => `/${locale}${href}`

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
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: i * 0.12,
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="plans"
      ref={secRef}
      style={{
        backgroundColor: '#F7F7F5',
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
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1800&q=85"
          alt="Limore 360 — membership plans, executive fleet"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          loading="lazy"
          sizes="100vw"
        />
        {/* Fade into light section bg */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(247,247,245,0.1) 0%, transparent 30%, transparent 60%, rgba(247,247,245,0.95) 100%)',
        }} />
        {/* ✅ Red hairline */}
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
          backgroundColor: 'rgba(247,247,245,0.90)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(200,16,46,0.18)',
        }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#C8102E', flexShrink: 0 }} />
          <span style={{
            fontSize: '9px', letterSpacing: '0.2em',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500, textTransform: 'uppercase', color: '#C8102E',
          }}>3 Plans — Essential · Prestige · Bespoke</span>
        </div>
      </div>

      {/* ── Header + cards ── */}
      <div style={{ padding: 'clamp(48px, 8vw, 88px) clamp(20px, 6vw, 96px)' }}>

        {/* Header */}
        <div ref={headRef} style={{
          textAlign: 'center', marginBottom: 'clamp(44px, 7vw, 72px)', opacity: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            {/* ✅ Red lines */}
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C8102E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#C8102E',
            }}>
              {c.eyebrow}
            </span>
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C8102E', flexShrink: 0 }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#0A0A0A',
            lineHeight: 0.95, letterSpacing: '-0.025em',
            margin: '0 0 16px',
          }}>
            {c.headline}
          </h2>
          <p style={{
            fontSize: 'clamp(0.83rem, 1.2vw, 0.95rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            color: '#777777', lineHeight: 1.8,
            margin: '0 auto', maxWidth: '480px',
          }}>
            {c.sub}
          </p>
        </div>

        {/* Plans grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '20px',
          marginBottom: 'clamp(28px, 4vw, 44px)',
        }}>
          {c.plans.map((plan, i) => (
            <div
              key={plan.id}
              ref={el => (cardRefs.current[i] = el)}
              style={{
                backgroundColor: plan.highlighted ? '#0A0A0A' : '#FFFFFF',
                // ✅ Highlighted card border → red
                border: plan.highlighted ? '2px solid #C8102E' : '1px solid #E4E4E4',
                padding: 'clamp(28px, 4vw, 40px) clamp(22px, 3vw, 32px)',
                opacity: 0,
                position: 'relative',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="l360-plan-card"
            >
              {/* ✅ Recommended badge → red */}
              {plan.highlighted && (
                <div style={{
                  position: 'absolute', top: '-1px',
                  left: isRTL ? 'auto' : '50%',
                  right: isRTL ? '50%' : 'auto',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#C8102E',
                  padding: '5px 16px',
                }}>
                  <span style={{
                    fontSize: '9px', fontFamily: 'Inter, sans-serif',
                    fontWeight: 500, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: '#FFFFFF',
                    whiteSpace: 'nowrap',
                  }}>
                    {c.recommended}
                  </span>
                </div>
              )}

              {/* Plan name — ✅ red on highlighted */}
              <p style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: plan.highlighted ? '#C8102E' : '#AAAAAA',
                margin: plan.highlighted ? '20px 0 12px' : '0 0 12px',
              }}>
                {plan.name}
              </p>

              {/* Hours */}
              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{
                  fontSize: plan.hours.length > 4 ? 'clamp(2rem, 5vw, 3.5rem)' : 'clamp(3rem, 7vw, 5.5rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 300,
                  color: plan.highlighted ? '#F8F7F4' : '#0A0A0A',
                  lineHeight: 1, letterSpacing: '-0.03em',
                }}>
                  {plan.hours}
                </span>
                {plan.unit && (
                  <span style={{
                    fontSize: 'clamp(0.7rem, 1vw, 0.82rem)',
                    fontFamily: 'Inter, sans-serif', fontWeight: 300,
                    color: plan.highlighted ? 'rgba(248,247,244,0.35)' : '#AAAAAA',
                    letterSpacing: '0.12em', textTransform: 'lowercase',
                    paddingBottom: '4px',
                  }}>
                    {plan.unit}
                  </span>
                )}
              </div>

              {/* Rate tag — ✅ red tint on highlighted */}
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '5px 10px',
                backgroundColor: plan.highlighted ? 'rgba(200,16,46,0.12)' : '#F5F5F5',
                marginBottom: '16px', alignSelf: 'flex-start',
              }}>
                <span style={{
                  fontSize: '9px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase',
                  // ✅ red on highlighted
                  color: plan.highlighted ? '#C8102E' : '#888888',
                }}>
                  {plan.rate}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(0.8rem, 1.1vw, 0.87rem)',
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                color: plan.highlighted ? 'rgba(248,247,244,0.4)' : '#777777',
                lineHeight: 1.85,
                margin: '0 0 clamp(20px, 3vw, 28px)',
                paddingBottom: 'clamp(20px, 3vw, 28px)',
                borderBottom: `1px solid ${plan.highlighted ? 'rgba(248,247,244,0.08)' : '#ECECEC'}`,
              }}>
                {plan.desc}
              </p>

              {/* Perks list — ✅ red ticks */}
              <ul style={{
                listStyle: 'none', padding: 0,
                margin: '0 0 clamp(24px, 4vw, 36px)',
                display: 'flex', flexDirection: 'column', gap: '10px', flex: 1,
              }}>
                {plan.perks.map((perk, pi) => {
                  const isInherit = perk.toLowerCase().includes('everything') || perk.includes('كل ما') || perk.includes('Tout')
                  return (
                    <li key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
                        {isInherit && (
                          <circle cx="7" cy="7" r="5.5" stroke="#C8102E" strokeWidth="1" fill="rgba(200,16,46,0.10)"/>
                        )}
                        <path d="M3 7l3 3 5-5" stroke="#C8102E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{
                        fontSize: 'clamp(0.78rem, 1.1vw, 0.85rem)',
                        fontFamily: 'Inter, sans-serif', fontWeight: 300,
                        color: plan.highlighted ? 'rgba(248,247,244,0.55)' : '#555555',
                        lineHeight: 1.55,
                      }}>
                        {perk}
                      </span>
                    </li>
                  )
                })}
              </ul>

              {/* CTA — ✅ highlighted button red, hover states red */}
              <Link
                href={lp('/limore-360#apply')}
                className={`l360-plan-cta l360-plan-cta-${plan.id}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 20px',
                  backgroundColor: plan.highlighted ? '#C8102E' : 'transparent',
                  border: plan.highlighted ? '1px solid #C8102E' : '1px solid #D8D8D8',
                  color: plan.highlighted ? '#FFFFFF' : '#555555',
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease',
                  boxSizing: 'border-box',
                }}
              >
                <span>{plan.cta}</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                  <path d="M1 4h10M7 1l4 3-4 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{
          fontSize: '11px', fontFamily: 'Inter, sans-serif',
          fontWeight: 300, color: '#AAAAAA',
          lineHeight: 1.7, textAlign: 'center',
          maxWidth: '580px', margin: '0 auto',
        }}>
          {c.noteLong}
        </p>
      </div>

      <style>{`
        .l360-plan-card:hover { transform: translateY(-3px) !important; box-shadow: 0 12px 36px rgba(0,0,0,0.09) !important; }
        .l360-plan-cta-essential:hover { background-color: #0A0A0A !important; color: #FFFFFF !important; border-color: #0A0A0A !important; }
        .l360-plan-cta-prestige:hover  { background-color: #A50D25 !important; border-color: #A50D25 !important; }
        .l360-plan-cta-bespoke:hover   { background-color: #0A0A0A !important; color: #FFFFFF !important; border-color: #0A0A0A !important; }
      `}</style>
    </section>
  )
}