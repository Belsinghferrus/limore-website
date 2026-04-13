'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow: 'Monthly Billing & Contracts',
    headline: 'Finance-Grade Billing. No Surprises.',
    body: 'Designed for procurement teams and finance departments who require clean, auditable expense records. Our billing infrastructure is built to corporate treasury standards.',
    tiers: [
      {
        name: 'Corporate Account',
        tag: 'Most Popular',
        forWhom: 'Businesses with regular executive travel',
        features: [
          'Monthly consolidated invoice',
          'Cost centre coding per trip',
          'VAT-compliant documentation',
          'Dedicated account manager',
          'Up to 50 traveller profiles',
          'Standard SLA: 30-min response',
        ],
        cta: 'Open Corporate Account',
        ctaType: 'enquiry',
      },
      {
        name: 'Enterprise Contract',
        tag: 'For Institutions',
        forWhom: 'Financial institutions, luxury groups, global corps',
        features: [
          'Custom billing cycle & currency',
          'Multi-entity invoicing',
          'ERP / SAP integration',
          'Named senior relationship manager',
          'Unlimited traveller profiles',
          'Priority SLA: 10-min response',
          'White-label operations available',
          'Quarterly executive business review',
        ],
        cta: 'Access Corporate Portal',
        ctaType: 'portal',
      },
    ],
    billing: [
      { icon: '📋', title: 'Consolidated Invoice',  text: 'One clean monthly invoice covering all trips, all cities, all travellers.' },
      { icon: '🔒', title: 'Secure Data Handling',  text: 'Traveller PII handled under GDPR and regional data protection frameworks.' },
      { icon: '⚡', title: 'NET 30 / NET 60 Terms', text: 'Standard payment terms aligned with corporate treasury cycles.' },
    ],
    portal: {
      title: 'Limore Corporate Portal',
      lines: [
        'The Limore Corporate Portal is available exclusively to contracted enterprise clients.',
        'Access is provisioned by your dedicated Limore relationship manager upon contract execution.',
      ],
      note: 'To request access, contact your Limore advisor or write to',
      email: 'office@thelimore.com',
      dismiss: 'Close',
      tag: 'Restricted Access',
    },
  },

  ar: {
    eyebrow: 'الفواتير الشهرية والعقود',
    headline: 'فوترة على مستوى المؤسسات. بلا مفاجآت.',
    body: 'مصمم لفرق المشتريات والإدارات المالية التي تحتاج إلى سجلات نفقات نظيفة وقابلة للتدقيق.',
    tiers: [
      {
        name: 'الحساب المؤسسي',
        tag: 'الأكثر شيوعاً',
        forWhom: 'الشركات ذات السفر التنفيذي المنتظم',
        features: ['فاتورة شهرية موحدة', 'ترميز مركز التكلفة لكل رحلة', 'وثائق متوافقة مع ضريبة القيمة المضافة', 'مدير حساب مخصص', 'حتى ٥٠ ملف تعريف للمسافر', 'مستوى خدمة قياسي: رد خلال ٣٠ دقيقة'],
        cta: 'افتح حساباً مؤسسياً',
        ctaType: 'enquiry',
      },
      {
        name: 'العقد المؤسسي',
        tag: 'للمؤسسات الكبرى',
        forWhom: 'المؤسسات المالية ومجموعات الفخامة',
        features: ['دورة فوترة وعملة مخصصة', 'فواتير متعددة الكيانات', 'تكامل ERP / SAP', 'مدير علاقات أول', 'ملفات مسافرين غير محدودة', 'أولوية مستوى الخدمة: ١٠ دقائق', 'عمليات العلامة البيضاء', 'مراجعة أعمال تنفيذية ربع سنوية'],
        cta: 'الوصول إلى البوابة المؤسسية',
        ctaType: 'portal',
      },
    ],
    billing: [
      { icon: '📋', title: 'فاتورة موحدة', text: 'فاتورة شهرية واحدة نظيفة تغطي جميع الرحلات والمدن والمسافرين.' },
      { icon: '🔒', title: 'معالجة آمنة للبيانات', text: 'معالجة البيانات الشخصية وفق اللائحة الأوروبية GDPR.' },
      { icon: '⚡', title: 'شروط NET 30 / NET 60', text: 'شروط دفع قياسية تتوافق مع دورات الخزينة المؤسسية.' },
    ],
    portal: {
      title: 'بوابة ليمور المؤسسية',
      lines: [
        'بوابة ليمور المؤسسية متاحة حصرياً للعملاء المؤسسيين المتعاقدين.',
        'يتم تفعيل الوصول من قِبل مدير علاقتك المخصص في ليمور عند إبرام العقد.',
      ],
      note: 'لطلب الوصول، تواصل مع مستشار ليمور أو راسلنا على',
      email: 'office@thelimore.com',
      dismiss: 'إغلاق',
      tag: 'وصول مقيّد',
    },
  },

  fr: {
    eyebrow: 'Facturation Mensuelle & Contrats',
    headline: 'Facturation Niveau Finance. Aucune Surprise.',
    body: 'Conçu pour les équipes d\'achat et les départements financiers qui exigent des relevés de dépenses propres et auditables.',
    tiers: [
      {
        name: 'Compte Corporate',
        tag: 'Le Plus Populaire',
        forWhom: 'Entreprises avec voyages exécutifs réguliers',
        features: ['Facture mensuelle consolidée', 'Codage centre de coût par trajet', 'Documentation conforme TVA', 'Account manager dédié', "Jusqu'à 50 profils voyageurs", 'SLA standard : réponse 30 min'],
        cta: 'Ouvrir un Compte Corporate',
        ctaType: 'enquiry',
      },
      {
        name: 'Contrat Enterprise',
        tag: 'Pour Institutions',
        forWhom: 'Institutions financières, groupes luxe, multinationales',
        features: ['Cycle de facturation et devise personnalisés', 'Facturation multi-entités', 'Intégration ERP / SAP', 'Directeur de relation senior', 'Profils voyageurs illimités', 'SLA prioritaire : réponse 10 min', 'Opérations en marque blanche', 'Revue trimestrielle dirigeants'],
        cta: 'Accéder au Portail Corporate',
        ctaType: 'portal',
      },
    ],
    billing: [
      { icon: '📋', title: 'Facture Consolidée', text: 'Une seule facture mensuelle couvrant tous les trajets, villes et voyageurs.' },
      { icon: '🔒', title: 'Gestion Sécurisée', text: 'Données voyageurs traitées sous RGPD et cadres de protection régionaux.' },
      { icon: '⚡', title: 'Conditions NET 30 / 60', text: 'Conditions de paiement standard alignées sur les cycles de trésorerie.' },
    ],
    portal: {
      title: 'Portail Corporate Limore',
      lines: [
        'Le Portail Corporate Limore est réservé exclusivement aux clients entreprise sous contrat.',
        'L\'accès est provisionné par votre directeur de relation Limore dédié à la signature du contrat.',
      ],
      note: 'Pour demander un accès, contactez votre conseiller Limore ou écrivez à',
      email: 'office@thelimore.com',
      dismiss: 'Fermer',
      tag: 'Accès Restreint',
    },
  },
}

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const RED    = '#C41E1E'
const TEXT   = '#0A0A0A'
const MUTED  = '#777777'
const FONT_D = "'Cormorant Garamond', Georgia, serif"
const FONT_B = "'Inter', 'Helvetica Neue', sans-serif"

// ─── Portal Access Modal ───────────────────────────────────────────────────────
function PortalModal({ content, isRTL, onClose }) {
  const overlayRef = useRef(null)
  const cardRef    = useRef(null)

  useEffect(() => {
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    )
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 32, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' }
    )
  }, [])

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, onComplete: onClose })
  }

  return (
    <div
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) handleClose() }}
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          9999,
        backgroundColor: 'rgba(0,0,0,0.72)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        padding:         'clamp(16px,4vw,48px)',
        backdropFilter:  'blur(4px)',
        direction:       isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div
        ref={cardRef}
        style={{
          backgroundColor: '#0A0A0A',
          borderTop:       `2px solid ${RED}`,
          borderRight:     '1px solid rgba(248,247,244,0.08)',
          borderBottom:    '1px solid rgba(248,247,244,0.08)',
          borderLeft:      '1px solid rgba(248,247,244,0.08)',
          maxWidth:        '520px',
          width:           '100%',
          padding:         'clamp(32px,5vw,56px)',
          position:        'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position:        'absolute',
            top:             '20px',
            right:           isRTL ? 'auto' : '20px',
            left:            isRTL ? '20px' : 'auto',
            width:           '32px',
            height:          '32px',
            backgroundColor: 'rgba(248,247,244,0.06)',
            border:          '1px solid rgba(248,247,244,0.1)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            cursor:          'pointer',
            color:           'rgba(248,247,244,0.4)',
            transition:      'color 0.2s ease, background 0.2s ease',
          }}
          className="portal-close-btn"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Restricted tag */}
        <div style={{
          display:         'inline-flex',
          alignItems:      'center',
          gap:             '7px',
          padding:         '4px 12px',
          backgroundColor: 'rgba(196,30,30,0.12)',
          marginBottom:    '28px',
        }}>
          {/* Lock icon */}
          <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden="true">
            <rect x="1" y="4" width="6" height="5.5" rx="0.5"
              stroke={RED} strokeWidth="0.9"/>
            <path d="M2.5 4V2.8a1.5 1.5 0 0 1 3 0V4"
              stroke={RED} strokeWidth="0.9" strokeLinecap="round"/>
          </svg>
          <span style={{
            fontSize:      '8px',
            fontFamily:    FONT_B,
            fontWeight:    600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color:         RED,
          }}>
            {content.tag}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize:      'clamp(1.6rem,3vw,2.4rem)',
          fontFamily:    FONT_D,
          fontWeight:    300,
          fontStyle:     'italic',
          color:         '#F8F7F4',
          lineHeight:    1.1,
          margin:        '0 0 20px',
          letterSpacing: '-0.02em',
        }}>
          {content.title}
        </h3>

        {/* Divider */}
        <div style={{
          width:           '40px',
          height:          '1px',
          backgroundColor: RED,
          marginBottom:    '24px',
        }} />

        {/* Lines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
          {content.lines.map((line, i) => (
            <p key={i} style={{
              fontSize:   'clamp(0.83rem,1.2vw,0.93rem)',
              fontFamily: FONT_B,
              fontWeight: 300,
              color:      'rgba(248,247,244,0.55)',
              lineHeight: 1.85,
              margin:     0,
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Email contact line */}
        <div style={{
          padding:         'clamp(14px,2vw,20px)',
          backgroundColor: 'rgba(248,247,244,0.03)',
          borderTop:       '1px solid rgba(248,247,244,0.06)',
          borderRight:     '1px solid rgba(248,247,244,0.06)',
          borderBottom:    '1px solid rgba(248,247,244,0.06)',
          borderLeft:      `2px solid ${RED}`,
          marginBottom:    '28px',
          display:         'flex',
          flexWrap:        'wrap',
          alignItems:      'center',
          gap:             '6px',
        }}>
          <span style={{
            fontSize:   'clamp(0.78rem,1.1vw,0.85rem)',
            fontFamily: FONT_B,
            fontWeight: 300,
            color:      'rgba(248,247,244,0.4)',
          }}>
            {content.note}
          </span>
          <a
            href={`mailto:${content.email}`}
            style={{
              fontSize:      'clamp(0.78rem,1.1vw,0.85rem)',
              fontFamily:    FONT_B,
              fontWeight:    500,
              color:         '#F8F7F4',
              textDecoration:'none',
              letterSpacing: '0.02em',
            }}
          >
            {content.email}
          </a>
        </div>

        {/* Dismiss */}
        <button
          onClick={handleClose}
          className="portal-dismiss-btn"
          style={{
            width:           '100%',
            padding:         '13px 24px',
            backgroundColor: 'transparent',
            borderTop:       '1px solid rgba(248,247,244,0.15)',
            borderRight:     '1px solid rgba(248,247,244,0.15)',
            borderBottom:    '1px solid rgba(248,247,244,0.15)',
            borderLeft:      '1px solid rgba(248,247,244,0.15)',
            color:           'rgba(248,247,244,0.5)',
            fontSize:        '10px',
            fontFamily:      FONT_B,
            fontWeight:      500,
            letterSpacing:   '0.18em',
            textTransform:   'uppercase',
            cursor:          'pointer',
            transition:      'color 0.2s ease, border-color 0.2s ease',
          }}
        >
          {content.dismiss}
        </button>
      </div>

      <style>{`
        .portal-close-btn:hover  { color: #F8F7F4 !important; background-color: rgba(248,247,244,0.1) !important; }
        .portal-dismiss-btn:hover { color: #F8F7F4 !important; border-color: rgba(248,247,244,0.4) !important; }
      `}</style>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function CorporateBilling({ locale = 'en' }) {
  const c      = t[locale] || t.en
  const isRTL  = locale === 'ar'
  const router = useRouter()

  const [portalOpen, setPortalOpen] = useState(false)

  const secRef   = useRef(null)
  const headRef  = useRef(null)
  const tiersRef = useRef(null)
  const billRef  = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 82%' } }
      )
      gsap.fromTo(tiersRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: tiersRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(billRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: billRef.current, start: 'top 82%' } }
      )
    }, secRef)
    return () => ctx.revert()
  }, [])

  const handleCTA = (type) => {
    if (type === 'enquiry') {
      router.push(`/${locale}/corporate/enquiry`)
    } else {
      setPortalOpen(true)
    }
  }

  return (
    <>
      {portalOpen && (
        <PortalModal
          content={c.portal}
          isRTL={isRTL}
          onClose={() => setPortalOpen(false)}
        />
      )}

      <section
        ref={secRef}
        style={{
          backgroundColor: '#F7F7F7',
          padding:         'clamp(64px,10vw,120px) clamp(20px,6vw,96px)',
          direction:       isRTL ? 'rtl' : 'ltr',
        }}
      >
        {/* ── Header ── */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(40px,7vw,72px)', opacity: 0 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: RED }} />
            <span style={{ fontSize: '10px', fontFamily: FONT_B, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: RED }}>
              {c.eyebrow}
            </span>
            <div style={{ width: '28px', height: '1px', backgroundColor: RED }} />
          </div>
          <h2 style={{
            fontSize:      'clamp(1.8rem,4vw,4.5rem)',
            fontFamily:    FONT_D,
            fontWeight:    300,
            color:         TEXT,
            lineHeight:    1.0,
            letterSpacing: '-0.02em',
            margin:        '0 0 16px',
          }}>
            {c.headline}
          </h2>
          <p style={{
            fontSize:   'clamp(0.82rem,1.2vw,0.92rem)',
            fontFamily: FONT_B,
            fontWeight: 300,
            color:      MUTED,
            lineHeight: 1.85,
            maxWidth:   '520px',
            margin:     '0 auto',
          }}>
            {c.body}
          </p>
        </div>

        {/* ── Tiers ── */}
        <div
          ref={tiersRef}
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px,100%),1fr))',
            gap:                 'clamp(12px,2vw,20px)',
            marginBottom:        'clamp(40px,6vw,64px)',
          }}
        >
          {c.tiers.map((tier, ti) => (
            <div
              key={ti}
              className="corp-tier-card"
              style={{
                backgroundColor: ti === 1 ? '#0A0A0A' : '#FFFFFF',
                borderTop:       ti === 1 ? `2px solid ${RED}` : '1px solid #E8E8E8',
                borderRight:     '1px solid #E8E8E8',
                borderBottom:    '1px solid #E8E8E8',
                borderLeft:      '1px solid #E8E8E8',
                padding:         'clamp(28px,4vw,48px)',
                position:        'relative',
                opacity:         0,
                transition:      'box-shadow 0.3s ease',
              }}
            >
              {/* Tag */}
              <div style={{
                display:         'inline-block',
                padding:         '4px 12px',
                marginBottom:    '20px',
                backgroundColor: ti === 1 ? 'rgba(196,30,30,0.15)' : 'rgba(196,30,30,0.07)',
                fontSize:        '9px',
                fontFamily:      FONT_B,
                fontWeight:      500,
                letterSpacing:   '0.18em',
                textTransform:   'uppercase',
                color:           RED,
              }}>
                {tier.tag}
              </div>

              <h3 style={{
                fontSize:   'clamp(1.2rem,2.5vw,1.8rem)',
                fontFamily: FONT_D,
                fontWeight: 400,
                color:      ti === 1 ? '#F8F7F4' : TEXT,
                margin:     '0 0 8px',
                lineHeight: 1.1,
              }}>
                {tier.name}
              </h3>

              <p style={{
                fontSize:   'clamp(0.78rem,1.1vw,0.85rem)',
                fontFamily: FONT_B,
                fontWeight: 300,
                color:      ti === 1 ? 'rgba(248,247,244,0.38)' : '#999999',
                lineHeight: 1.7,
                margin:     '0 0 clamp(20px,3vw,28px)',
              }}>
                {tier.forWhom}
              </p>

              <div style={{
                height:          '1px',
                backgroundColor: ti === 1 ? 'rgba(248,247,244,0.08)' : '#EFEFEF',
                marginBottom:    'clamp(18px,3vw,24px)',
              }} />

              <ul style={{
                listStyle:     'none',
                margin:        '0 0 clamp(24px,4vw,36px)',
                padding:       0,
                display:       'flex',
                flexDirection: 'column',
                gap:           '10px',
              }}>
                {tier.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{
                      width:           '16px',
                      height:          '16px',
                      flexShrink:      0,
                      border:          `1px solid ${ti === 1 ? 'rgba(196,30,30,0.4)' : RED}`,
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      marginTop:       '1px',
                    }}>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
                        <path d="M1 3.5l2 2 3-3" stroke={RED} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span style={{
                      fontSize:   'clamp(0.78rem,1.1vw,0.85rem)',
                      fontFamily: FONT_B,
                      fontWeight: 300,
                      color:      ti === 1 ? 'rgba(248,247,244,0.6)' : '#555555',
                      lineHeight: 1.6,
                    }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                onClick={() => handleCTA(tier.ctaType)}
                className={ti === 1 ? 'corp-cta-red' : 'corp-cta-outline'}
                style={{
                  width:           '100%',
                  padding:         '14px 24px',
                  backgroundColor: ti === 1 ? RED : 'transparent',
                  borderTop:       ti === 1 ? `1px solid ${RED}` : '1px solid #0A0A0A',
                  borderRight:     ti === 1 ? `1px solid ${RED}` : '1px solid #0A0A0A',
                  borderBottom:    ti === 1 ? `1px solid ${RED}` : '1px solid #0A0A0A',
                  borderLeft:      ti === 1 ? `1px solid ${RED}` : '1px solid #0A0A0A',
                  color:           ti === 1 ? '#FFFFFF' : TEXT,
                  fontSize:        '10px',
                  fontFamily:      FONT_B,
                  fontWeight:      500,
                  letterSpacing:   '0.16em',
                  textTransform:   'uppercase',
                  cursor:          'pointer',
                  transition:      'all 0.25s ease',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  gap:             '10px',
                }}
              >
                {/* Portal card gets a lock icon, enquiry card gets arrow */}
                {tier.ctaType === 'portal' ? (
                  <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
                    <rect x="1" y="4.5" width="7" height="6" rx="0.5" stroke="currentColor" strokeWidth="1"/>
                    <path d="M3 4.5V3a1.5 1.5 0 0 1 3 0v1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                ) : null}
                <span>{tier.cta}</span>
                {tier.ctaType === 'enquiry' ? (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1 5h8M5.5 1.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : null}
              </button>
            </div>
          ))}
        </div>

        {/* ── Billing pillars ── */}
        <div
          ref={billRef}
          style={{
            display:         'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px,100%),1fr))',
            gap:             '1px',
            backgroundColor: '#E0E0E0',
            border:          '1px solid #E0E0E0',
          }}
        >
          {c.billing.map((b, i) => (
            <div key={i} style={{
              backgroundColor: '#FFFFFF',
              padding:         'clamp(20px,3vw,32px)',
              opacity:         0,
            }}>
              <p style={{ fontSize: 'clamp(1.2rem,2vw,1.8rem)', margin: '0 0 12px', lineHeight: 1 }}>{b.icon}</p>
              <h4 style={{
                fontSize:   'clamp(0.88rem,1.4vw,1rem)',
                fontFamily: FONT_D,
                fontWeight: 500,
                color:      TEXT,
                margin:     '0 0 8px',
                lineHeight: 1.2,
              }}>
                {b.title}
              </h4>
              <p style={{
                fontSize:   'clamp(0.78rem,1.1vw,0.85rem)',
                fontFamily: FONT_B,
                fontWeight: 300,
                color:      MUTED,
                lineHeight: 1.8,
                margin:     0,
              }}>
                {b.text}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          .corp-tier-card:hover  { box-shadow: 0 8px 32px rgba(0,0,0,0.08) !important; }
          .corp-cta-red:hover    { background-color: #A01818 !important; border-color: #A01818 !important; }
          .corp-cta-outline:hover { background-color: #0A0A0A !important; color: #FFFFFF !important; }
        `}</style>
      </section>
    </>
  )
}