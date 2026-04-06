'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow: 'Dedicated Account Manager',
    headline: 'A Single Point of Contact. Globally.',
    body: 'From the moment your account is active, one senior relationship manager owns your account. They know your executives by name, your preferred vehicles by default, and your travel patterns in advance.',
    points: [
      'Named account manager - direct line, no call centres',
      'Proactive scheduling based on your corporate calendar',
      'Pre-trip briefing sent to each traveller automatically',
      'Quarterly account reviews with full trip analytics',
      'Escalation resolved in under 15 minutes, guaranteed',
    ],
    quote: '"The level of anticipation is unlike anything we have experienced with any other provider."',
    quoteSource: '— Head of Operations, European Private Equity Firm',
    onboarding: 'Onboarding within 2 hours',
  },
  ar: {
    eyebrow: 'مدير حساب مخصص',
    headline: 'نقطة تواصل واحدة. عالمياً.',
    body: 'منذ لحظة تفعيل حسابك، يتولى مدير علاقات أول ملفك. يعرف مديريك التنفيذيين بالاسم، ومركباتهم المفضلة مسبقاً.',
    points: [
      'مدير حساب بالاسم — خط مباشر، لا مراكز اتصال',
      'جدولة استباقية بناءً على تقويمك المؤسسي',
      'إرسال إحاطة ما قبل الرحلة لكل مسافر تلقائياً',
      'مراجعات ربع سنوية مع تحليلات رحلات كاملة',
      'حل التصعيد في أقل من ١٥ دقيقة، مضمون',
    ],
    quote: '"مستوى الاستباقية غير مسبوق مع أي مزود آخر."',
    quoteSource: '— رئيس العمليات، شركة أسهم خاصة أوروبية',
    onboarding: 'الإعداد خلال ساعتين',
  },
  fr: {
    eyebrow: 'Account Manager Dédié',
    headline: 'Un Seul Interlocuteur. Partout.',
    body: 'Dès que votre compte est actif, un directeur de relation senior prend en charge votre compte. Il connaît vos dirigeants par leur nom, leurs véhicules préférés par défaut.',
    points: [
      'Account manager nommé — ligne directe, pas de centre d\'appels',
      'Planification proactive selon votre calendrier corporate',
      'Briefing pré-voyage envoyé automatiquement à chaque voyageur',
      'Revues de compte trimestrielles avec analytiques complets',
      'Escalade résolue en moins de 15 minutes, garantie',
    ],
    quote: '"Le niveau d\'anticipation est sans précédent avec tout autre prestataire."',
    quoteSource: '— Responsable des Opérations, Société de Private Equity Européenne',
    onboarding: 'Onboarding en 2 heures',
  },
}

export default function CorporateAccountManager({ locale = 'en' }) {
  const c      = t[locale] || t.en
  const isRTL  = locale === 'ar'
  const secRef = useRef(null)
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: isRTL ? -40 : 40 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%' } }
      )
    }, secRef)
    return () => ctx.revert()
  }, [isRTL])

  return (
    <section
      ref={secRef}
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(64px, 10vw, 120px) clamp(20px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
        gap: 'clamp(40px, 7vw, 96px)',
        alignItems: 'center',
      }}>
        {/* Left */}
        <div ref={leftRef} style={{ opacity: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C41E1E' }} />
            <span style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E' }}>
              {c.eyebrow}
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 4rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#0A0A0A',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            margin: '0 0 clamp(16px, 3vw, 24px)',
          }}>
            {c.headline}
          </h2>
          <p style={{
            fontSize: 'clamp(0.82rem, 1.2vw, 0.92rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            color: '#777777', lineHeight: 1.9,
            margin: '0 0 clamp(24px, 4vw, 40px)',
          }}>
            {c.body}
          </p>

          {/* Points */}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {c.points.map((p, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{
                  width: '18px', height: '18px', flexShrink: 0,
                  border: '1px solid #C41E1E',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginTop: '1px',
                }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <path d="M1.5 4l2 2 3-3" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span style={{
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                  fontFamily: 'Inter, sans-serif', fontWeight: 300,
                  color: '#555555', lineHeight: 1.7,
                }}>
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — quote card */}
        <div ref={rightRef} style={{ opacity: 0 }}>
          <div style={{
            backgroundColor: '#0A0A0A',
            padding: 'clamp(32px, 5vw, 56px)',
            position: 'relative',
          }}>
            {/* Opening quote mark */}
            <span aria-hidden="true" style={{
              position: 'absolute', top: 'clamp(16px, 2.5vw, 24px)',
              left: isRTL ? 'auto' : 'clamp(24px, 4vw, 40px)',
              right: isRTL ? 'clamp(24px, 4vw, 40px)' : 'auto',
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 300, color: 'rgba(196,30,30,0.15)',
              lineHeight: 1, pointerEvents: 'none',
            }}>
              "
            </span>

            <blockquote style={{
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, fontStyle: 'italic',
              color: '#F8F7F4', lineHeight: 1.6,
              margin: '0 0 clamp(20px, 3vw, 32px)',
              paddingTop: 'clamp(24px, 3vw, 32px)',
            }}>
              {c.quote}
            </blockquote>

            <p style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 400, letterSpacing: '0.12em',
              color: 'rgba(248,247,244,0.35)', margin: '0 0 clamp(28px, 4vw, 40px)',
            }}>
              {c.quoteSource}
            </p>

            {/* Onboarding badge */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              paddingTop: 'clamp(20px, 3vw, 28px)',
              borderTop: '1px solid rgba(248,247,244,0.08)',
            }}>
              <div style={{
                width: '32px', height: '32px',
                border: '1px solid rgba(196,30,30,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="5.5" stroke="#C41E1E" strokeWidth="1.1"/>
                  <path d="M7 4v3.5l2 1.5" stroke="#C41E1E" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'rgba(248,247,244,0.5)',
              }}>
                {c.onboarding}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}