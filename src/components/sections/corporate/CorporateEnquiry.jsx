'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    eyebrow:     'Corporate Accounts',
    line1:       'Let\'s Build',
    line2:       'Your Programme.',
    sub:         'A dedicated Corporate Advisor will respond within two business hours with a tailored proposal. No automated responses.',
    trustLabel:  'Trusted by',
    trustNames:  ['Chanel', 'Richemont', 'Cartier', 'Chopard', 'Apple'],
    steps: [
      { num: '01', label: 'Submit enquiry' },
      { num: '02', label: 'Advisor responds < 2hrs' },
      { num: '03', label: 'Proposal & onboarding' },
    ],
    fields: {
      company:  'Company Name',
      name:     'Full Name',
      role:     'Role / Title',
      email:    'Work Email',
      phone:    'Phone Number',
      cities:   'Primary Cities Required',
      volume:   'Estimated Monthly Trips',
      message:  'Additional Requirements',
    },
    volumes: [
      '1–10 trips / month',
      '11–30 trips / month',
      '31–100 trips / month',
      '100+ trips / month',
    ],
    required:    '* Required fields',
    submit:      'Submit Enquiry',
    submitting:  'Sending...',
    success:     'Received. Your Corporate Advisor will be in touch within two business hours.',
    note:        'Handled with complete discretion.',
    whatsapp:    'https://wa.me/971500000000',
    whatsappCta: 'Prefer WhatsApp?',
    direct:      'Speak directly',
  },
  ar: {
    eyebrow:     'حسابات الشركات',
    line1:       'دعنا نبني',
    line2:       'برنامجك.',
    sub:         'سيرد عليك مستشار مؤسسي مخصص في غضون ساعتين من ساعات العمل.',
    trustLabel:  'موثوق به من',
    trustNames:  ['شانيل', 'ريشمونت', 'كارتييه', 'تشوبار', 'آبل'],
    steps: [
      { num: '٠١', label: 'إرسال الاستفسار' },
      { num: '٠٢', label: 'رد المستشار < ٢ ساعة' },
      { num: '٠٣', label: 'الاقتراح والإعداد' },
    ],
    fields: {
      company:  'اسم الشركة',
      name:     'الاسم الكامل',
      role:     'الدور / اللقب',
      email:    'البريد الإلكتروني للعمل',
      phone:    'رقم الهاتف',
      cities:   'المدن الرئيسية المطلوبة',
      volume:   'الرحلات الشهرية المقدرة',
      message:  'متطلبات إضافية',
    },
    volumes: [
      '١–١٠ رحلات / شهر',
      '١١–٣٠ رحلة / شهر',
      '٣١–١٠٠ رحلة / شهر',
      '١٠٠+ رحلة / شهر',
    ],
    required:    '* الحقول المطلوبة',
    submit:      'إرسال الاستفسار',
    submitting:  'جارٍ الإرسال...',
    success:     'شكراً. سيتواصل معك مستشارك المؤسسي خلال ساعتين.',
    note:        'تُعالَج بسرية تامة.',
    whatsapp:    'https://wa.me/971500000000',
    whatsappCta: 'تفضل واتساب؟',
    direct:      'تحدث مباشرة',
  },
  fr: {
    eyebrow:     'Comptes Entreprise',
    line1:       'Construisons',
    line2:       'Votre Programme.',
    sub:         'Un Conseiller Corporate dédié vous répondra dans les deux heures ouvrables avec une proposition sur mesure.',
    trustLabel:  'Approuvé par',
    trustNames:  ['Chanel', 'Richemont', 'Cartier', 'Chopard', 'Apple'],
    steps: [
      { num: '01', label: 'Soumettre la demande' },
      { num: '02', label: 'Réponse conseiller < 2h' },
      { num: '03', label: 'Proposition & onboarding' },
    ],
    fields: {
      company:  'Nom de l\'Entreprise',
      name:     'Nom Complet',
      role:     'Rôle / Titre',
      email:    'Email Professionnel',
      phone:    'Numéro de Téléphone',
      cities:   'Villes Principales',
      volume:   'Trajets Mensuels Estimés',
      message:  'Exigences Supplémentaires',
    },
    volumes: [
      '1–10 trajets / mois',
      '11–30 trajets / mois',
      '31–100 trajets / mois',
      '100+ trajets / mois',
    ],
    required:    '* Champs obligatoires',
    submit:      'Soumettre la Demande',
    submitting:  'Envoi en cours...',
    success:     'Reçu. Votre Conseiller Corporate vous contactera dans les deux heures.',
    note:        'Traité avec stricte confidentialité.',
    whatsapp:    'https://wa.me/971500000000',
    whatsappCta: 'Préférez WhatsApp?',
    direct:      'Parler directement',
  },
}

// ── Reusable field components ─────────────────────────────

function Label({ text }) {
  return (
    <span style={{
      fontSize: '9px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#999999',
    }}>
      {text}
    </span>
  )
}

const baseInput = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '13px 14px',
  fontSize: '14px',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 300,
  color: '#0A0A0A',
  backgroundColor: '#F7F7F7',
  border: '1px solid #E4E4E4',
  borderRadius: 0,
  outline: 'none',
  transition: 'border-color 0.2s ease, background-color 0.2s ease',
  appearance: 'none',
}

function InputField({ label, type = 'text', value, onChange, required, isRTL, placeholder = '' }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '100%' }}>
      <Label text={label} />
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...baseInput,
          borderColor: focused ? '#C41E1E' : '#E4E4E4',
          backgroundColor: focused ? '#FFFFFF' : '#F7F7F7',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      />
    </div>
  )
}

function SelectField({ label, value, onChange, options, isRTL }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '100%' }}>
      <Label text={label} />
      <div style={{ position: 'relative', width: '100%' }}>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...baseInput,
            color: value ? '#0A0A0A' : '#AAAAAA',
            borderColor: focused ? '#C41E1E' : '#E4E4E4',
            backgroundColor: focused ? '#FFFFFF' : '#F7F7F7',
            paddingRight: isRTL ? '14px' : '36px',
            paddingLeft:  isRTL ? '36px' : '14px',
            cursor: 'pointer',
            direction: isRTL ? 'rtl' : 'ltr',
          }}
        >
          <option value="">—</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        {/* Custom chevron */}
        <span style={{
          position: 'absolute',
          top: '50%', transform: 'translateY(-50%)',
          right: isRTL ? 'auto' : '13px',
          left:  isRTL ? '13px'  : 'auto',
          pointerEvents: 'none',
          color: '#AAAAAA',
          display: 'flex', alignItems: 'center',
        }}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  )
}

function TextareaField({ label, value, onChange, isRTL }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', width: '100%' }}>
      <Label text={label} />
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={3}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...baseInput,
          resize: 'none',
          borderColor: focused ? '#C41E1E' : '#E4E4E4',
          backgroundColor: focused ? '#FFFFFF' : '#F7F7F7',
          direction: isRTL ? 'rtl' : 'ltr',
          lineHeight: 1.7,
        }}
      />
    </div>
  )
}

// ── Success state ─────────────────────────────────────────
function SuccessPanel({ message }) {
  const ref = useRef(null)
  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    )
  }, [])
  return (
    <div ref={ref} style={{
      backgroundColor: '#FFFFFF',
      border: '1px solid #E8E8E8',
      borderTop: '2px solid #C41E1E',
      padding: 'clamp(40px, 6vw, 64px) clamp(28px, 4vw, 48px)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', textAlign: 'center', gap: '20px',
      opacity: 0,
    }}>
      <div style={{
        width: '52px', height: '52px',
        border: '1px solid #C41E1E',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" aria-hidden="true">
          <path d="M1 7.5l6 6L19 1" stroke="#C41E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p style={{
        fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontWeight: 400, color: '#0A0A0A',
        lineHeight: 1.6, margin: 0, maxWidth: '380px',
      }}>
        {message}
      </p>
    </div>
  )
}

// ── Main component ────────────────────────────────────────
export default function CorporateEnquiry({ locale = 'en' }) {
  const c      = t[locale] || t.en
  const isRTL  = locale === 'ar'
  const secRef = useRef(null)
  const leftRef  = useRef(null)
  const formRef  = useRef(null)

  const [form, setForm] = useState({
    company: '', name: '', role: '',
    email: '', phone: '', cities: '',
    volume: '', message: '',
  })
  const [status, setStatus] = useState('idle')
  const set = (field) => (val) => setForm(prev => ({ ...prev, [field]: val }))

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: isRTL ? 32 : -32 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(formRef.current,
        { opacity: 0, x: isRTL ? -32 : 32 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.08,
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' } }
      )
    }, secRef)
    return () => ctx.revert()
  }, [isRTL])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <section
      id="enquiry"
      ref={secRef}
      style={{
        backgroundColor: '#FAFAFA',
        padding: 'clamp(64px, 10vw, 112px) clamp(20px, 6vw, 96px)',
        direction: isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div style={{
        display: 'grid',
        // 2 columns on wide screens, 1 column on mobile — auto-fit handles the breakpoint
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: 'clamp(40px, 8vw, 96px)',
        alignItems: 'start',
      }}>

        {/* ── LEFT PANEL ──────────────────────────────── */}
        <div ref={leftRef} style={{ opacity: 0 }}>

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#C41E1E',
            }}>
              {c.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 5rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300, color: '#0A0A0A',
            lineHeight: 0.95, letterSpacing: '-0.025em',
            margin: '0 0 clamp(18px, 3vw, 26px)',
          }}>
            {c.line1}
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(10,10,10,0.35)' }}>
              {c.line2}
            </span>
          </h2>

          {/* Sub copy */}
          <p style={{
            fontSize: 'clamp(0.84rem, 1.3vw, 0.97rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            color: '#666666', lineHeight: 1.9,
            margin: '0 0 clamp(32px, 5vw, 48px)',
            maxWidth: '380px',
          }}>
            {c.sub}
          </p>

          {/* Process steps */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '0',
            marginBottom: 'clamp(32px, 5vw, 48px)',
          }}>
            {c.steps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: 'clamp(12px, 2vw, 16px) 0',
                borderBottom: i < c.steps.length - 1 ? '1px solid #EBEBEB' : 'none',
              }}>
                {/* Step number */}
                <span style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.14em',
                  color: '#C41E1E', minWidth: '22px', flexShrink: 0,
                }}>
                  {step.num}
                </span>
                {/* Connector line */}
                <div style={{
                  width: '20px', height: '1px',
                  backgroundColor: '#E0E0E0', flexShrink: 0,
                }} />
                {/* Label */}
                <span style={{
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
                  fontFamily: 'Inter, sans-serif', fontWeight: 400,
                  color: '#444444', letterSpacing: '0.01em',
                }}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div style={{
            padding: 'clamp(16px, 2.5vw, 22px)',
            backgroundColor: '#FFFFFF',
            border: '1px solid #EBEBEB',
            marginBottom: 'clamp(20px, 3vw, 28px)',
          }}>
            <p style={{
              fontSize: '9px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#CCCCCC',
              margin: '0 0 12px',
            }}>
              {c.trustLabel}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px' }}>
              {c.trustNames.map((name, i) => (
                <span key={i} style={{
                  fontSize: 'clamp(0.7rem, 1.1vw, 0.8rem)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontWeight: 600, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#BBBBBB',
                }}>
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={c.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="corp-wa-link"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '9px',
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#AAAAAA',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            {/* WhatsApp icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {c.whatsappCta}
          </a>
        </div>

        {/* ── RIGHT PANEL — Form ───────────────────────── */}
        <div ref={formRef} style={{ opacity: 0 }}>
          {status === 'success' ? (
            <SuccessPanel message={c.success} />
          ) : (
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E8E8E8',
              borderTop: '2px solid #C41E1E',
            }}>
              {/* Form header bar */}
              <div style={{
                padding: 'clamp(18px, 2.5vw, 24px) clamp(20px, 3vw, 32px)',
                borderBottom: '1px solid #F0F0F0',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: '12px',
                flexWrap: 'wrap',
              }}>
                <span style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#0A0A0A',
                }}>
                  Corporate Enquiry Form
                </span>
                <span style={{
                  fontSize: '9px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, letterSpacing: '0.12em',
                  color: '#CCCCCC',
                }}>
                  {c.required}
                </span>
              </div>

              {/* Fields */}
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  padding: 'clamp(20px, 3vw, 32px)',
                  display: 'flex', flexDirection: 'column', gap: '14px',
                }}
              >
                {/* Row 1 — Company + Name */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                  gap: '14px',
                }}>
                  <InputField
                    label={c.fields.company}
                    value={form.company}
                    onChange={set('company')}
                    required
                    isRTL={isRTL}
                  />
                  <InputField
                    label={c.fields.name}
                    value={form.name}
                    onChange={set('name')}
                    required
                    isRTL={isRTL}
                  />
                </div>

                {/* Row 2 — Role + Email */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                  gap: '14px',
                }}>
                  <InputField
                    label={c.fields.role}
                    value={form.role}
                    onChange={set('role')}
                    required
                    isRTL={isRTL}
                  />
                  <InputField
                    label={c.fields.email}
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    required
                    isRTL={isRTL}
                  />
                </div>

                {/* Row 3 — Phone + Cities */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                  gap: '14px',
                }}>
                  <InputField
                    label={c.fields.phone}
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    required
                    isRTL={isRTL}
                  />
                  <InputField
                    label={c.fields.cities}
                    value={form.cities}
                    onChange={set('cities')}
                    isRTL={isRTL}
                  />
                </div>

                {/* Volume — full width */}
                <SelectField
                  label={c.fields.volume}
                  value={form.volume}
                  onChange={set('volume')}
                  options={c.volumes}
                  isRTL={isRTL}
                />

                {/* Message — full width */}
                <TextareaField
                  label={c.fields.message}
                  value={form.message}
                  onChange={set('message')}
                  isRTL={isRTL}
                />

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: '#F0F0F0', margin: '4px 0' }} />

                {/* Submit row */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="corp-submit-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '16px 22px',
                      backgroundColor: status === 'submitting' ? '#AAAAAA' : '#C41E1E',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      transition: 'background-color 0.25s ease',
                    }}
                  >
                    <span>{status === 'submitting' ? c.submitting : c.submit}</span>
                    {status !== 'submitting' && (
                      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
                        <path d="M1 4.5h12M8 1l5 3.5L8 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>

                  {/* Confidentiality note */}
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: '7px',
                  }}>
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" aria-hidden="true">
                      <path d="M5.5 1L1 3.5v3c0 2.5 2 4.5 4.5 4.5S10 9 10 6.5v-3L5.5 1z" stroke="#CCCCCC" strokeWidth="0.9"/>
                    </svg>
                    <span style={{
                      fontSize: '9px', fontFamily: 'Inter, sans-serif',
                      fontWeight: 400, letterSpacing: '0.12em',
                      color: '#CCCCCC',
                    }}>
                      {c.note}
                    </span>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .corp-wa-link:hover { color: #25D366 !important; }
        .corp-submit-btn:hover:not(:disabled) { background-color: #A01515 !important; }
        @media (max-width: 480px) {
          .corp-submit-btn { padding: 15px 18px !important; }
        }
      `}</style>
    </section>
  )
}