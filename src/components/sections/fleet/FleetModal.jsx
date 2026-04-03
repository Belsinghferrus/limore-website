'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const uiText = {
  en: {
    title: 'Request This Vehicle',
    subtitle: 'No pricing displayed. All quotes are tailored to your itinerary.',
    vehicleLabel: 'Vehicle',
    fields: {
      name:    { label: 'Full Name',              placeholder: 'Your full name' },
      phone:   { label: 'Phone / WhatsApp',       placeholder: '+971 50 000 0000' },
      date:    { label: 'Travel Date',            placeholder: '' },
      from:    { label: 'From',                   placeholder: 'Departure location' },
      to:      { label: 'To',                     placeholder: 'Destination' },
      message: { label: 'Additional Requirements',placeholder: 'Flight number, special requests, number of passengers…' },
    },
    submit: 'Send Enquiry',
    submitting: 'Sending…',
    successTitle: 'Enquiry Received',
    successMsg: 'A member of our team will contact you within the hour.',
    close: 'Close',
    required: 'required',
    note: 'All enquiries are handled in strict confidence.',
  },
  ar: {
    title: 'طلب هذه المركبة',
    subtitle: 'لا يتم عرض الأسعار. جميع العروض مخصصة وفق مسار رحلتك.',
    vehicleLabel: 'المركبة',
    fields: {
      name:    { label: 'الاسم الكامل',           placeholder: 'اسمك الكامل' },
      phone:   { label: 'الهاتف / واتساب',        placeholder: '+971 50 000 0000' },
      date:    { label: 'تاريخ السفر',             placeholder: '' },
      from:    { label: 'من',                      placeholder: 'موقع المغادرة' },
      to:      { label: 'إلى',                     placeholder: 'الوجهة' },
      message: { label: 'متطلبات إضافية',          placeholder: 'رقم الرحلة، طلبات خاصة، عدد الركاب…' },
    },
    submit: 'إرسال الاستفسار',
    submitting: 'جارٍ الإرسال…',
    successTitle: 'تم استلام الاستفسار',
    successMsg: 'سيتصل بك أحد أعضاء فريقنا في غضون ساعة.',
    close: 'إغلاق',
    required: 'مطلوب',
    note: 'جميع الاستفسارات تُعالَج بسرية تامة.',
  },
  fr: {
    title: 'Demander ce Véhicule',
    subtitle: 'Aucun tarif affiché. Tous les devis sont personnalisés selon votre itinéraire.',
    vehicleLabel: 'Véhicule',
    fields: {
      name:    { label: 'Nom Complet',             placeholder: 'Votre nom complet' },
      phone:   { label: 'Téléphone / WhatsApp',    placeholder: '+33 6 00 00 00 00' },
      date:    { label: 'Date de Voyage',          placeholder: '' },
      from:    { label: 'De',                      placeholder: 'Lieu de départ' },
      to:      { label: 'À',                       placeholder: 'Destination' },
      message: { label: 'Exigences Supplémentaires',placeholder: 'Numéro de vol, demandes spéciales, nombre de passagers…' },
    },
    submit: 'Envoyer la Demande',
    submitting: 'Envoi en cours…',
    successTitle: 'Demande Reçue',
    successMsg: 'Un membre de notre équipe vous contactera dans l\'heure.',
    close: 'Fermer',
    required: 'requis',
    note: 'Toutes les demandes sont traitées en toute confidentialité.',
  },
}

function InputField({ id, label, type = 'text', placeholder, value, onChange, required, isRTL }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label htmlFor={id} style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888' }}>
        {label}
        {required && <span style={{ color: '#C41E1E', marginLeft: '3px' }}>*</span>}
      </label>
      <input
        id={id} type={type} placeholder={placeholder}
        value={value} onChange={e => onChange(e.target.value)}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', padding: '12px 14px',
          backgroundColor: '#FAFAFA',
          border: `1px solid ${focused ? '#C41E1E' : '#E8E8E8'}`,
          outline: 'none',
          fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 300,
          color: '#0A0A0A',
          transition: 'border-color 0.2s ease',
          direction: isRTL ? 'rtl' : 'ltr',
          borderRadius: 0,
        }}
      />
    </div>
  )
}

export default function FleetModal({ vehicle, locale, onClose }) {
  const isRTL    = locale === 'ar'
  const ui       = uiText[locale] || uiText.en
  const overlayRef = useRef(null)
  const drawerRef  = useRef(null)
  const [form, setForm] = useState({
    name: '', phone: '', date: '', from: '', to: '', message: '',
    vehicle: `${vehicle.make} ${vehicle.model}`,
  })
  const [submitted, setSubmitted]   = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    )
    gsap.fromTo(drawerRef.current,
      { x: isRTL ? '-100%' : '100%' },
      { x: '0%', duration: 0.5, ease: 'power4.out' }
    )
    return () => { document.body.style.overflow = '' }
  }, [])

  const close = () => {
    gsap.to(drawerRef.current, {
      x: isRTL ? '-100%' : '100%', duration: 0.35, ease: 'power3.in',
    })
    gsap.to(overlayRef.current, {
      opacity: 0, duration: 0.3, delay: 0.1,
      onComplete: onClose,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  const set = (field) => (val) => setForm(f => ({ ...f, [field]: val }))

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={close}
        style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(3px)',
        }}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={ui.title}
        style={{
          position: 'absolute',
          top: 0, bottom: 0,
          right: isRTL ? 'auto' : 0,
          left:  isRTL ? 0 : 'auto',
          width: 'min(520px, 100vw)',
          backgroundColor: '#FFFFFF',
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      >
        {/* Header */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          backgroundColor: '#0A0A0A',
          padding: 'clamp(20px, 3vw, 28px) clamp(20px, 3vw, 32px)',
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: '16px',
          flexShrink: 0,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '28px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
              <span style={{ fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E' }}>
                {ui.vehicleLabel}
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400, color: '#F8F7F4', lineHeight: 1.1, margin: '0 0 4px' }}>
              {vehicle.make} {vehicle.model}
            </h2>
            <p style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'rgba(248,247,244,0.35)', margin: 0 }}>
              {ui.subtitle}
            </p>
          </div>
          <button
            onClick={close}
            aria-label={ui.close}
            style={{
              width: '36px', height: '36px', flexShrink: 0,
              border: '1px solid rgba(248,247,244,0.12)',
              backgroundColor: 'transparent',
              color: 'rgba(248,247,244,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s',
              borderRadius: 0,
            }}
            className="modal-close-btn"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Vehicle preview strip */}
        <div style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={vehicle.img}
            alt={vehicle.imgAlt}
            width={900} height={394}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(255,255,255,0.8) 0%, transparent 50%)',
          }} />
          {/* Features on image */}
          <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {(vehicle.features[locale] || vehicle.features.en).map((f, i) => (
              <span key={i} style={{
                fontSize: '9px', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.14em',
                textTransform: 'uppercase',
                backgroundColor: 'rgba(10,10,10,0.65)',
                backdropFilter: 'blur(4px)',
                color: 'rgba(248,247,244,0.75)',
                padding: '4px 9px',
              }}>
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 'clamp(24px, 4vw, 36px)', flex: 1 }}>
          {submitted ? (
            /* Success state */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 0' }}>
              {/* Check */}
              <div style={{
                width: '56px', height: '56px',
                border: '1px solid rgba(196,30,30,0.3)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
                  <path d="M1 8l6 6L19 1" stroke="#C41E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400, color: '#0A0A0A', marginBottom: '10px' }}>
                {ui.successTitle}
              </h3>
              <p style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#888', lineHeight: 1.7, maxWidth: '320px', marginBottom: '28px' }}>
                {ui.successMsg}
              </p>
              <button
                onClick={close}
                style={{
                  padding: '11px 28px',
                  backgroundColor: '#0A0A0A', color: '#F8F7F4',
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  border: 'none', cursor: 'pointer',
                  borderRadius: 0,
                }}
              >
                {ui.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Vehicle (prefilled, readonly) */}
              <div style={{ padding: '12px 14px', backgroundColor: '#F7F7F7', border: '1px solid #EBEBEB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#AAAAAA' }}>
                  {ui.vehicleLabel}
                </span>
                <span style={{ fontSize: '13px', fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400, color: '#0A0A0A' }}>
                  {vehicle.make} {vehicle.model}
                </span>
              </div>

              <InputField id="fm-name"    label={ui.fields.name.label}    placeholder={ui.fields.name.placeholder}    value={form.name}    onChange={set('name')}    required isRTL={isRTL} />
              <InputField id="fm-phone"   label={ui.fields.phone.label}   placeholder={ui.fields.phone.placeholder}   value={form.phone}   onChange={set('phone')}   required isRTL={isRTL} type="tel" />
              <InputField id="fm-date"    label={ui.fields.date.label}    placeholder={ui.fields.date.placeholder}    value={form.date}    onChange={set('date')}    required isRTL={isRTL} type="date" />

              {/* From → To row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <InputField id="fm-from" label={ui.fields.from.label} placeholder={ui.fields.from.placeholder} value={form.from} onChange={set('from')} required isRTL={isRTL} />
                <InputField id="fm-to"   label={ui.fields.to.label}   placeholder={ui.fields.to.placeholder}   value={form.to}   onChange={set('to')}   required isRTL={isRTL} />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="fm-message" style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888' }}>
                  {ui.fields.message.label}
                </label>
                <textarea
                  id="fm-message"
                  placeholder={ui.fields.message.placeholder}
                  value={form.message}
                  onChange={e => set('message')(e.target.value)}
                  rows={4}
                  style={{
                    width: '100%', padding: '12px 14px',
                    backgroundColor: '#FAFAFA',
                    border: '1px solid #E8E8E8',
                    outline: 'none', resize: 'vertical',
                    fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 300,
                    color: '#0A0A0A', lineHeight: 1.7,
                    direction: isRTL ? 'rtl' : 'ltr',
                    borderRadius: 0,
                  }}
                  onFocus={e => e.target.style.borderColor = '#C41E1E'}
                  onBlur={e  => e.target.style.borderColor = '#E8E8E8'}
                />
              </div>

              {/* Note */}
              <p style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: '#BBBBBB', letterSpacing: '0.04em', lineHeight: 1.6 }}>
                {ui.note}
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="modal-submit-btn"
                style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '10px',
                  padding: '14px 24px',
                  backgroundColor: submitting ? '#555' : '#C41E1E',
                  color: '#fff', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
                  fontSize: '10px', fontFamily: 'Inter, sans-serif',
                  fontWeight: 500, letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  transition: 'background-color 0.25s ease',
                  width: '100%', borderRadius: 0,
                }}
              >
                {submitting ? ui.submitting : ui.submit}
                {!submitting && (
                  <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
                    <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </aside>

      <style>{`
        .modal-close-btn:hover { border-color: rgba(248,247,244,0.4) !important; color: #F8F7F4 !important; }
        .modal-submit-btn:hover:not(:disabled) { background-color: #A01515 !important; }
      `}</style>
    </div>
  )
}