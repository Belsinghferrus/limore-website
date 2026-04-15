'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Apps Script endpoint ──────────────────────────────────────────────────────
const APPS_SCRIPT_URL = process.env.LIMORE360_APPLY_URL

function toFormEncoded(obj) {
  return Object.entries(obj)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v ?? ''))
    .join('&')
}

// ─── Translations ──────────────────────────────────────────────────────────────
const t = {
  en: {
    eyebrow:  'Apply for Membership',
    line1:    'Your Programme',
    line2:    'Starts Here.',
    sub:      'Tell us about your travel requirements. A dedicated Limore 360 Advisor will respond within two business hours with a personalised proposal.',
    planLabel: 'Select Your Plan',
    plans: [
      { value: 'essential', label: 'Limore 360 — Essential (20 hours)' },
      { value: 'prestige',  label: 'Limore 360 — Prestige  (50 hours)' },
      { value: 'bespoke',   label: 'Limore 360 — Bespoke   (Custom volume)' },
    ],
    fields: {
      name:    'Full Name',
      company: 'Company / Organisation',
      role:    'Role / Title',
      email:   'Work Email',
      phone:   'Phone Number',
      cities:  'Primary Cities of Travel',
      starts:  'Desired Start Date',
      message: 'Anything else we should know',
    },
    required:    '* Required fields',
    submit:      'Submit Application',
    submitting:  'Sending…',
    success:     'Application received. Your Limore 360 Advisor will be in touch within two business hours.',
    successSub:  'You will receive a confirmation to your email shortly.',
    note:        'Treated with complete discretion.',
    whatsapp:    'https://wa.me/971563454698',
    whatsappCta: 'Prefer WhatsApp?',
    assurance: [
      { icon: 'lock',  text: 'Strictly confidential' },
      { icon: 'clock', text: 'Response within 2 hrs' },
      { icon: 'check', text: 'No commitment required' },
    ],
    errorMsg: 'Something went wrong. Please try again or contact us directly.',
  },
  ar: {
    eyebrow:  'التقدم للعضوية',
    line1:    'برنامجك',
    line2:    'يبدأ هنا.',
    sub:      'أخبرنا عن متطلبات سفرك. سيرد مستشار ليمور ٣٦٠ المخصص في غضون ساعتين من ساعات العمل باقتراح شخصي.',
    planLabel: 'اختر خطتك',
    plans: [
      { value: 'essential', label: 'ليمور ٣٦٠ — الأساسية (٢٠ ساعة)' },
      { value: 'prestige',  label: 'ليمور ٣٦٠ — البريستيج (٥٠ ساعة)' },
      { value: 'bespoke',   label: 'ليمور ٣٦٠ — المخصصة (حجم مخصص)' },
    ],
    fields: {
      name:    'الاسم الكامل',
      company: 'الشركة / المؤسسة',
      role:    'الدور / اللقب',
      email:   'البريد الإلكتروني للعمل',
      phone:   'رقم الهاتف',
      cities:  'مدن السفر الرئيسية',
      starts:  'تاريخ البدء المطلوب',
      message: 'أي شيء آخر يجب أن نعرفه',
    },
    required:    '* الحقول المطلوبة',
    submit:      'إرسال الطلب',
    submitting:  'جارٍ الإرسال…',
    success:     'تم استلام طلبك. سيتواصل معك مستشار ليمور ٣٦٠ المخصص في غضون ساعتين.',
    successSub:  'ستتلقى تأكيداً على بريدك الإلكتروني قريباً.',
    note:        'يُعالَج بسرية تامة.',
    whatsapp:    'https://wa.me/971563454698',
    whatsappCta: 'تفضل واتساب؟',
    assurance: [
      { icon: 'lock',  text: 'سرية تامة' },
      { icon: 'clock', text: 'رد خلال ٢ ساعة' },
      { icon: 'check', text: 'لا يُشترط الالتزام' },
    ],
    errorMsg: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.',
  },
  fr: {
    eyebrow:  'Demander une Adhésion',
    line1:    'Votre Programme',
    line2:    'Commence Ici.',
    sub:      'Parlez-nous de vos besoins de déplacement. Un Conseiller Limore 360 dédié vous répondra dans les deux heures ouvrables avec une proposition personnalisée.',
    planLabel: 'Sélectionnez votre Formule',
    plans: [
      { value: 'essential', label: 'Limore 360 — Essential (20 heures)' },
      { value: 'prestige',  label: 'Limore 360 — Prestige  (50 heures)' },
      { value: 'bespoke',   label: 'Limore 360 — Sur-Mesure (volume personnalisé)' },
    ],
    fields: {
      name:    'Nom Complet',
      company: 'Société / Organisation',
      role:    'Rôle / Titre',
      email:   'Email Professionnel',
      phone:   'Numéro de Téléphone',
      cities:  'Villes de Déplacement Principales',
      starts:  'Date de Début Souhaitée',
      message: 'Autre information utile',
    },
    required:    '* Champs obligatoires',
    submit:      'Soumettre la Demande',
    submitting:  'Envoi en cours…',
    success:     'Demande reçue. Votre Conseiller Limore 360 vous contactera dans les deux heures ouvrables.',
    successSub:  'Vous recevrez une confirmation par email sous peu.',
    note:        'Traité avec stricte confidentialité.',
    whatsapp:    'https://wa.me/971563454698',
    whatsappCta: 'Préférez WhatsApp?',
    assurance: [
      { icon: 'lock',  text: 'Strictement confidentiel' },
      { icon: 'clock', text: 'Réponse sous 2 heures' },
      { icon: 'check', text: 'Sans engagement' },
    ],
    errorMsg: 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement.',
  },
}

// ─── Assurance Icons ───────────────────────────────────────────────────────────
const AssuranceIcon = ({ id }) => {
  const shared = { width: 15, height: 15, viewBox: '0 0 15 15', fill: 'none', 'aria-hidden': 'true' }
  if (id === 'lock') return (
    <svg {...shared}>
      <rect x="2.5" y="6.5" width="10" height="7" rx="0.5" stroke="#C8102E" strokeWidth="1"/>
      <path d="M5 6.5V4.5a2.5 2.5 0 015 0v2" stroke="#C8102E" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="7.5" cy="10" r="1" fill="#C8102E"/>
    </svg>
  )
  if (id === 'clock') return (
    <svg {...shared}>
      <circle cx="7.5" cy="7.5" r="5.5" stroke="#C8102E" strokeWidth="1"/>
      <path d="M7.5 4.5v3.25l2.25 1.25" stroke="#C8102E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  if (id === 'check') return (
    <svg {...shared}>
      <circle cx="7.5" cy="7.5" r="5.5" stroke="#C8102E" strokeWidth="1"/>
      <path d="M5 7.5l2 2 3.5-3" stroke="#C8102E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  return null
}

// ─── Shared input base styles ──────────────────────────────────────────────────
const base = {
  width:           '100%',
  boxSizing:       'border-box',
  padding:         '13px 14px',
  fontSize:        '14px',
  fontFamily:      "'Inter', sans-serif",
  fontWeight:      300,
  color:           '#F8F7F4',
  backgroundColor: 'rgba(255,255,255,0.03)',
  border:          '1px solid rgba(248,247,244,0.1)',
  borderRadius:    0,
  outline:         'none',
  appearance:      'none',
  transition:      'border-color 0.2s ease, background-color 0.2s ease',
}

function FieldLabel({ text }) {
  return (
    <span style={{
      fontSize:      '9px',
      fontFamily:    "'Inter', sans-serif",
      fontWeight:    500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color:         'rgba(248,247,244,0.3)',
    }}>
      {text}
    </span>
  )
}

function InputField({ label, type = 'text', value, onChange, required, isRTL, autoComplete = 'off' }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '100%' }}>
      <FieldLabel text={label} />
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...base,
          direction:       isRTL ? 'rtl' : 'ltr',
          borderColor:     focused ? '#C8102E' : 'rgba(248,247,244,0.1)',
          backgroundColor: focused ? 'rgba(200,16,46,0.06)' : 'rgba(255,255,255,0.03)',
        }}
      />
    </div>
  )
}

function SelectField({ label, value, onChange, options, isRTL, placeholder = '—' }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '100%' }}>
      <FieldLabel text={label} />
      <div style={{ position: 'relative', width: '100%' }}>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...base,
            color:           value ? '#F8F7F4' : 'rgba(248,247,244,0.28)',
            direction:       isRTL ? 'rtl' : 'ltr',
            paddingRight:    isRTL ? '14px' : '38px',
            paddingLeft:     isRTL ? '38px' : '14px',
            cursor:          'pointer',
            borderColor:     focused ? '#C8102E' : 'rgba(248,247,244,0.1)',
            backgroundColor: focused ? 'rgba(200,16,46,0.06)' : 'rgba(255,255,255,0.03)',
          }}
        >
          <option value="">{placeholder}</option>
          {options.map(o => (
            <option key={o.value} value={o.value}
              style={{ backgroundColor: '#141414', color: '#F8F7F4' }}>
              {o.label}
            </option>
          ))}
        </select>
        <span style={{
          position:      'absolute',
          top:           '50%',
          transform:     'translateY(-50%)',
          right:         isRTL ? 'auto' : '14px',
          left:          isRTL ? '14px'  : 'auto',
          pointerEvents: 'none',
          color:         'rgba(248,247,244,0.3)',
          display:       'flex',
          alignItems:    'center',
        }}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  )
}

function TextareaField({ label, value, onChange, isRTL, rows = 3 }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '100%' }}>
      <FieldLabel text={label} />
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...base,
          resize:          'none',
          lineHeight:      1.7,
          direction:       isRTL ? 'rtl' : 'ltr',
          borderColor:     focused ? '#C8102E' : 'rgba(248,247,244,0.1)',
          backgroundColor: focused ? 'rgba(200,16,46,0.06)' : 'rgba(255,255,255,0.03)',
        }}
      />
    </div>
  )
}

// ─── Success State ─────────────────────────────────────────────────────────────
function SuccessState({ message, sub }) {
  const ref = useRef(null)
  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
  }, [])
  return (
    <div ref={ref} style={{
      display:         'flex',
      flexDirection:   'column',
      alignItems:      'center',
      justifyContent:  'center',
      textAlign:       'center',
      padding:         'clamp(48px,8vw,80px) clamp(24px,4vw,48px)',
      border:          '1px solid rgba(200,16,46,0.25)',
      backgroundColor: 'rgba(200,16,46,0.04)',
      gap:             '20px',
      opacity:         0,
      minHeight:       '360px',
    }}>
      <div style={{
        width:           '60px',
        height:          '60px',
        border:          '1px solid #C8102E',
        borderRadius:    '50%',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        flexShrink:      0,
      }}>
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
          <path d="M1.5 9l7 7L22.5 1.5" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <p style={{
          fontSize:   'clamp(1rem,2vw,1.3rem)',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 300,
          fontStyle:  'italic',
          color:      '#F8F7F4',
          lineHeight: 1.55,
          margin:     '0 0 10px',
          maxWidth:   '400px',
        }}>
          {message}
        </p>
        <p style={{
          fontSize:      '11px',
          fontFamily:    "'Inter', sans-serif",
          fontWeight:    300,
          color:         'rgba(248,247,244,0.3)',
          letterSpacing: '0.08em',
          margin:        0,
        }}>
          {sub}
        </p>
      </div>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Limore360Apply({ locale = 'en', defaultPlan = '' }) {
  const c        = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const secRef   = useRef(null)
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  const [form, setForm] = useState({
    plan: defaultPlan, name: '', company: '', role: '',
    email: '', phone: '', cities: '', starts: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const set = (field) => (val) => setForm(prev => ({ ...prev, [field]: val }))

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: isRTL ? 40 : -40 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: isRTL ? -40 : 40 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.1,
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%' } }
      )
    }, secRef)
    return () => ctx.revert()
  }, [isRTL])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const payload = {
      ...form,
      locale,
      submittedAt: new Date().toISOString(),
    }

    try {
      await fetch(APPS_SCRIPT_URL, {
        method:  'POST',
        mode:    'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    toFormEncoded(payload),
      })
      setStatus('success')
    } catch (err) {
      console.error('Limore 360 apply error:', err)
      setStatus('error')
    }
  }

  return (
    <section
      id="apply"
      ref={secRef}
      style={{
        backgroundColor: '#060606',
        padding:         'clamp(64px,10vw,120px) clamp(20px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
        position:        'relative',
        overflow:        'hidden',
      }}
    >
      {/* Top ambient line */}
      <div style={{
        position:      'absolute',
        top:           0,
        left:          '10%',
        right:         '10%',
        height:        '1px',
        background:    'linear-gradient(to right, transparent, rgba(200,16,46,0.55), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,340px),1fr))',
        gap:                 'clamp(44px,8vw,100px)',
        alignItems:          'start',
      }}>

        {/* ── LEFT ── */}
        <div ref={leftRef} style={{ opacity: 0 }}>

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C8102E', flexShrink: 0 }} />
            <span style={{
              fontSize:      '10px',
              fontFamily:    "'Inter', sans-serif",
              fontWeight:    500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         '#C8102E',
            }}>
              {c.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize:      'clamp(2.2rem,5.5vw,6rem)',
            fontFamily:    "'Cormorant Garamond', Georgia, serif",
            fontWeight:    300,
            color:         '#F8F7F4',
            lineHeight:    0.92,
            letterSpacing: '-0.025em',
            margin:        '0 0 clamp(18px,3vw,28px)',
          }}>
            {c.line1}
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(200,16,46,0.85)' }}>
              {c.line2}
            </span>
          </h2>

          {/* Sub copy */}
          <p style={{
            fontSize:   'clamp(0.84rem,1.3vw,0.97rem)',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            color:      'rgba(248,247,244,0.35)',
            lineHeight: 1.9,
            margin:     '0 0 clamp(32px,5vw,52px)',
            maxWidth:   '400px',
          }}>
            {c.sub}
          </p>

          {/* Assurance trio */}
          <div style={{
            display:       'flex',
            flexDirection: 'column',
            marginBottom:  'clamp(32px,5vw,48px)',
            border:        '1px solid rgba(248,247,244,0.07)',
          }}>
            {c.assurance.map((item, i) => (
              <div key={i} style={{
                display:      'flex',
                alignItems:   'center',
                gap:          '14px',
                padding:      'clamp(14px,2.2vw,18px) clamp(16px,2.5vw,24px)',
                borderBottom: i < c.assurance.length - 1
                  ? '1px solid rgba(248,247,244,0.06)'
                  : 'none',
              }}>
                <AssuranceIcon id={item.icon} />
                <span style={{
                  fontSize:   'clamp(0.78rem,1.1vw,0.88rem)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  color:      'rgba(248,247,244,0.45)',
                  letterSpacing: '0.03em',
                }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Plan selector pills */}
          <div style={{
            display:       'flex',
            flexDirection: 'column',
            gap:           '10px',
            marginBottom:  'clamp(28px,4vw,40px)',
          }}>
            {c.plans.map((plan) => {
              const isSelected = form.plan === plan.value
              return (
                <button
                  key={plan.value}
                  type="button"
                  onClick={() => set('plan')(plan.value)}
                  className="l360-plan-pill"
                  style={{
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'space-between',
                    padding:         '12px 16px',
                    width:           '100%',
                    boxSizing:       'border-box',
                    backgroundColor: isSelected ? 'rgba(200,16,46,0.10)' : 'transparent',
                    border:          `1px solid ${isSelected ? 'rgba(200,16,46,0.50)' : 'rgba(248,247,244,0.07)'}`,
                    cursor:          'pointer',
                    transition:      'border-color 0.25s ease, background-color 0.25s ease',
                    textAlign:       isRTL ? 'right' : 'left',
                  }}
                >
                  <span style={{
                    fontSize:   'clamp(0.78rem,1.1vw,0.87rem)',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    color:      isSelected ? '#C8102E' : 'rgba(248,247,244,0.38)',
                    letterSpacing: '0.04em',
                    transition: 'color 0.25s ease',
                  }}>
                    {plan.label}
                  </span>
                  {isSelected && (
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden="true">
                      <path d="M1 4.5l3.5 3.5L11 1" stroke="#C8102E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              )
            })}
          </div>

          {/* WhatsApp link */}
          <a
            href={c.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="l360-wa-link"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            '9px',
              fontSize:       '10px',
              fontFamily:     "'Inter', sans-serif",
              fontWeight:     500,
              letterSpacing:  '0.18em',
              textTransform:  'uppercase',
              color:          'rgba(248,247,244,0.28)',
              textDecoration: 'none',
              transition:     'color 0.2s ease',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {c.whatsappCta}
          </a>
        </div>

        {/* ── RIGHT — Form ── */}
        <div ref={rightRef} style={{ opacity: 0 }}>
          {status === 'success' ? (
            <SuccessState message={c.success} sub={c.successSub} />
          ) : (
            <div style={{
              borderTop:       '2px solid #C8102E',
              borderRight:     '1px solid rgba(248,247,244,0.08)',
              borderBottom:    '1px solid rgba(248,247,244,0.08)',
              borderLeft:      '1px solid rgba(248,247,244,0.08)',
              backgroundColor: 'rgba(255,255,255,0.02)',
            }}>
              {/* Form header */}
              <div style={{
                padding:        'clamp(16px,2.5vw,22px) clamp(20px,3vw,32px)',
                borderBottom:   '1px solid rgba(248,247,244,0.06)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'space-between',
                flexWrap:       'wrap',
                gap:            '8px',
              }}>
                <span style={{
                  fontSize:      '10px',
                  fontFamily:    "'Inter', sans-serif",
                  fontWeight:    500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color:         'rgba(248,247,244,0.55)',
                }}>
                  Limore 360 — Application
                </span>
                <span style={{
                  fontSize:      '9px',
                  fontFamily:    "'Inter', sans-serif",
                  fontWeight:    300,
                  color:         'rgba(248,247,244,0.2)',
                  letterSpacing: '0.1em',
                }}>
                  {c.required}
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  padding:       'clamp(22px,3vw,36px)',
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           '14px',
                }}
              >
                <SelectField
                  label={c.planLabel}
                  value={form.plan}
                  onChange={set('plan')}
                  options={c.plans}
                  isRTL={isRTL}
                  placeholder="—"
                />

                <div style={{ height: '1px', backgroundColor: 'rgba(248,247,244,0.06)', margin: '2px 0' }} />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,150px),1fr))', gap: '14px' }}>
                  <InputField label={c.fields.name}    value={form.name}    onChange={set('name')}    required isRTL={isRTL} autoComplete="name" />
                  <InputField label={c.fields.company} value={form.company} onChange={set('company')} required isRTL={isRTL} autoComplete="organization" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,150px),1fr))', gap: '14px' }}>
                  <InputField label={c.fields.role}  value={form.role}  onChange={set('role')}  required isRTL={isRTL} />
                  <InputField label={c.fields.email} value={form.email} onChange={set('email')} required isRTL={isRTL} type="email" autoComplete="email" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,150px),1fr))', gap: '14px' }}>
                  <InputField label={c.fields.phone}  value={form.phone}  onChange={set('phone')}  required isRTL={isRTL} type="tel" autoComplete="tel" />
                  <InputField label={c.fields.cities} value={form.cities} onChange={set('cities')} isRTL={isRTL} />
                </div>

                <InputField label={c.fields.starts} value={form.starts} onChange={set('starts')} isRTL={isRTL} type="date" />

                <TextareaField label={c.fields.message} value={form.message} onChange={set('message')} isRTL={isRTL} rows={3} />

                <div style={{ height: '1px', backgroundColor: 'rgba(248,247,244,0.06)', margin: '4px 0' }} />

                {/* Error banner */}
                {status === 'error' && (
                  <div style={{
                    padding:         '10px 14px',
                    backgroundColor: 'rgba(200,16,46,0.08)',
                    borderTop:       '1px solid rgba(200,16,46,0.3)',
                    borderRight:     '1px solid rgba(200,16,46,0.3)',
                    borderBottom:    '1px solid rgba(200,16,46,0.3)',
                    borderLeft:      '2px solid #C8102E',
                  }}>
                    <p style={{
                      fontSize:   '11px',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      color:      'rgba(248,247,244,0.7)',
                      margin:     0,
                    }}>
                      {c.errorMsg}
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="l360-submit-btn"
                  style={{
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'space-between',
                    width:           '100%',
                    boxSizing:       'border-box',
                    padding:         '16px 22px',
                    backgroundColor: status === 'submitting' ? '#5A5A5A' : '#C8102E',
                    color:           '#FFFFFF',
                    fontSize:        '10px',
                    fontFamily:      "'Inter', sans-serif",
                    fontWeight:      500,
                    letterSpacing:   '0.2em',
                    textTransform:   'uppercase',
                    border:          'none',
                    cursor:          status === 'submitting' ? 'not-allowed' : 'pointer',
                    transition:      'background-color 0.25s ease',
                  }}
                >
                  <span>{status === 'submitting' ? c.submitting : c.submit}</span>
                  {status !== 'submitting' && (
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
                      <path d="M1 4.5h12M8.5 1l5 3.5-5 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>

                {/* Confidentiality note */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px' }}>
                  <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
                    <path d="M5.5 1L1 3.5v3c0 3 2 5 4.5 5.5C8 11.5 10 9.5 10 6.5v-3L5.5 1z" stroke="rgba(248,247,244,0.2)" strokeWidth="0.9"/>
                  </svg>
                  <span style={{
                    fontSize:      '9px',
                    fontFamily:    "'Inter', sans-serif",
                    fontWeight:    300,
                    letterSpacing: '0.12em',
                    color:         'rgba(248,247,244,0.2)',
                  }}>
                    {c.note}
                  </span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .l360-wa-link:hover                     { color: #25D366 !important; }
        .l360-submit-btn:hover:not(:disabled)   { background-color: #A50D25 !important; }
        .l360-plan-pill:hover                   { border-color: rgba(200,16,46,0.35) !important; }
        @media (max-width: 480px) {
          .l360-submit-btn { padding: 15px 16px !important; }
        }
      `}</style>
    </section>
  )
}