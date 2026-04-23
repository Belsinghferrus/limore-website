'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSearchParams } from 'next/navigation'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PlacesInput from '@/components/ui/PlacesInput'
import { submitForm } from '@/app/actions/submitForm'

gsap.registerPlugin(ScrollTrigger)

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const RED = '#C41E1E'
const RED_HOVER = '#A51818'
const BG = '#FFFFFF'
const SURFACE = '#F8F7F4'
const BORDER = '#E5E4E0'
const TEXT = '#0A0A0A'
const MUTED = '#4A4A4A'
const FAINT = '#767676'
const FONT_D = "'Cormorant Garamond', Georgia, serif"
const FONT_B = "'Inter', 'Helvetica Neue', sans-serif"

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL

// ─── Vehicle fleet ─────────────────────────────────────────────────────────────
const VEHICLES = {
  en: [
    { value: '', label: 'Select Vehicle' },
    { value: 'bmw-5-series', label: 'BMW 5 Series', group: 'Executive' },
    { value: 'audi-a6', label: 'Audi A6', group: 'Executive' },
    { value: 'mercedes-s-class', label: 'Mercedes S-Class', group: 'Luxury Sedan' },
    { value: 'bmw-7-series', label: 'BMW 7 Series', group: 'Luxury Sedan' },
    { value: 'audi-a8', label: 'Audi A8', group: 'Luxury Sedan' },
    { value: 'range-rover-vogue', label: 'Range Rover Vogue', group: 'Luxury SUV' },
    { value: 'mercedes-g-class', label: 'Mercedes G-Class', group: 'Luxury SUV' },
    { value: 'rolls-royce', label: 'Rolls-Royce', group: 'Ultra Luxury' },
    { value: 'mercedes-maybach', label: 'Mercedes-Maybach', group: 'Ultra Luxury' },
    { value: 'mercedes-v-class', label: 'Mercedes V-Class', group: 'People Carrier' },
    { value: 'gmc-yukon', label: 'GMC Yukon', group: 'People Carrier' },
    { value: 'cadillac-escalade', label: 'Cadillac Escalade', group: 'People Carrier' },
    { value: 'mercedes-sprinter', label: 'Mercedes Sprinter', group: 'Van & Coach' },
    { value: 'luxury-coaches', label: 'Luxury Coaches', group: 'Van & Coach' },
    { value: 'mercedes-eqs', label: 'Mercedes EQS', group: 'Electric Fleet' },
    { value: 'bmw-i7', label: 'BMW i7', group: 'Electric Fleet' },
    { value: 'tesla-model-s', label: 'Tesla Model S', group: 'Electric Fleet' },
  ],
  ar: [
    { value: '', label: 'اختر المركبة' },
    { value: 'bmw-5-series', label: 'BMW الفئة 5', group: 'تنفيذية' },
    { value: 'audi-a6', label: 'Audi A6', group: 'تنفيذية' },
    { value: 'mercedes-s-class', label: 'مرسيدس الفئة S', group: 'سيدان فاخرة' },
    { value: 'bmw-7-series', label: 'BMW الفئة 7', group: 'سيدان فاخرة' },
    { value: 'audi-a8', label: 'Audi A8', group: 'سيدان فاخرة' },
    { value: 'range-rover-vogue', label: 'رينج روفر فوج', group: 'SUV فاخرة' },
    { value: 'mercedes-g-class', label: 'مرسيدس الفئة G', group: 'SUV فاخرة' },
    { value: 'rolls-royce', label: 'رولز رويس', group: 'فاخرة للغاية' },
    { value: 'mercedes-maybach', label: 'مرسيدس مايباخ', group: 'فاخرة للغاية' },
    { value: 'mercedes-v-class', label: 'مرسيدس الفئة V', group: 'ناقل الأشخاص' },
    { value: 'gmc-yukon', label: 'GMC يوكون', group: 'ناقل الأشخاص' },
    { value: 'cadillac-escalade', label: 'كاديلاك إسكاليد', group: 'ناقل الأشخاص' },
    { value: 'mercedes-sprinter', label: 'مرسيدس سبرينتر', group: 'الحافلات' },
    { value: 'luxury-coaches', label: 'حافلات فاخرة', group: 'الحافلات' },
    { value: 'mercedes-eqs', label: 'مرسيدس EQS', group: 'أسطول كهربائي' },
    { value: 'bmw-i7', label: 'BMW i7', group: 'أسطول كهربائي' },
    { value: 'tesla-model-s', label: 'Tesla Model S', group: 'أسطول كهربائي' },
  ],
  fr: [
    { value: '', label: 'Sélectionner le Véhicule' },
    { value: 'bmw-5-series', label: 'BMW Série 5', group: 'Exécutive' },
    { value: 'audi-a6', label: 'Audi A6', group: 'Exécutive' },
    { value: 'mercedes-s-class', label: 'Mercedes Classe S', group: 'Berline Luxe' },
    { value: 'bmw-7-series', label: 'BMW Série 7', group: 'Berline Luxe' },
    { value: 'audi-a8', label: 'Audi A8', group: 'Berline Luxe' },
    { value: 'range-rover-vogue', label: 'Range Rover Vogue', group: 'SUV Luxe' },
    { value: 'mercedes-g-class', label: 'Mercedes Classe G', group: 'SUV Luxe' },
    { value: 'rolls-royce', label: 'Rolls-Royce', group: 'Ultra Luxe' },
    { value: 'mercedes-maybach', label: 'Mercedes-Maybach', group: 'Ultra Luxe' },
    { value: 'mercedes-v-class', label: 'Mercedes Classe V', group: 'Monospace' },
    { value: 'gmc-yukon', label: 'GMC Yukon', group: 'Monospace' },
    { value: 'cadillac-escalade', label: 'Cadillac Escalade', group: 'Monospace' },
    { value: 'mercedes-sprinter', label: 'Mercedes Sprinter', group: 'Van & Coach' },
    { value: 'luxury-coaches', label: 'Autocars de Luxe', group: 'Van & Coach' },
    { value: 'mercedes-eqs', label: 'Mercedes EQS', group: 'Flotte Électrique' },
    { value: 'bmw-i7', label: 'BMW i7', group: 'Flotte Électrique' },
    { value: 'tesla-model-s', label: 'Tesla Model S', group: 'Flotte Électrique' },
  ],
}

// ─── Translations ──────────────────────────────────────────────────────────────
const copy = {
  en: {
    dir: 'ltr',
    eyebrow: 'Booking Enquiry',
    headlineTop: 'Reserve Your',
    headlineBottom: 'Experience.',
    sub: 'Complete the form below and your dedicated Limore advisor will confirm availability within two business hours.',
    required: '* Required fields',
    note: 'All bookings are handled with complete discretion.',
    submit: 'Submit Booking',
    submitting: 'Sending…',
    success: 'Your booking request has been received.',
    successSub: 'A confirmation has been sent to your email. A Limore advisor will be in touch within 2 hours.',
    errorMsg: 'Something went wrong. Please try again or contact us directly.',
    validationMsg: 'Please fill in all required fields before submitting.',
    sections: { journey: 'Journey Details', client: 'Your Information' },
    fields: {
      pickupDate: 'Pick Up Date',
      pickupTime: 'Pick Up Time',
      bookingType: 'Booking Type',
      flightNo: 'Flight Number',
      pickupLocation: 'Pick Up Location',
      dropoff: 'Drop Off Location',
      vehicleName: 'Vehicle Preference',
      guestName: 'Your Full Name',
      companyName: 'Company Name',
      contact: 'Email Address',
      phone: 'Phone Number',
      specialRequest: 'Special Request',
    },
    bookingTypes: [
      { value: '', label: 'Select Booking Type' },
      { value: 'Arrival', label: 'Arrival' },
      { value: 'Departure', label: 'Departure' },
      { value: 'Full Day', label: 'Full Day — 10 Hours' },
      { value: 'Half Day', label: 'Half Day — 5 Hours' },
      { value: 'Hourly', label: 'Hourly — Minimum 3 Hours' },
    ],
  },
  ar: {
    dir: 'rtl',
    eyebrow: 'استفسار حجز',
    headlineTop: 'احجز',
    headlineBottom: 'تجربتك.',
    sub: 'أكمل النموذج أدناه وسيتواصل معك مستشار ليمور المخصص لتأكيد التوفر خلال ساعتي عمل.',
    required: '* الحقول المطلوبة',
    note: 'جميع الحجوزات تُعالج بسرية تامة.',
    submit: 'إرسال الحجز',
    submitting: 'جارٍ الإرسال…',
    success: 'تم استلام طلب الحجز الخاص بك.',
    successSub: 'تم إرسال تأكيد إلى بريدك الإلكتروني. سيتواصل معك مستشار ليمور خلال ساعتين.',
    errorMsg: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرةً.',
    validationMsg: 'يرجى ملء جميع الحقول المطلوبة قبل الإرسال.',
    sections: { journey: 'تفاصيل الرحلة', client: 'معلوماتك' },
    fields: {
      pickupDate: 'تاريخ الاستلام',
      pickupTime: 'وقت الاستلام',
      bookingType: 'نوع الحجز',
      flightNo: 'رقم الرحلة',
      pickupLocation: 'موقع الاستلام',
      dropoff: 'موقع التوصيل',
      vehicleName: 'تفضيل المركبة',
      guestName: 'الاسم الكامل',
      companyName: 'اسم الشركة',
      contact: 'عنوان البريد الإلكتروني',
      phone: 'رقم الهاتف',
      specialRequest: 'طلب خاص',
    },
    bookingTypes: [
      { value: '', label: 'اختر نوع الحجز' },
      { value: 'Arrival', label: 'وصول' },
      { value: 'Departure', label: 'مغادرة' },
      { value: 'Full Day', label: 'يوم كامل — ١٠ ساعات' },
      { value: 'Half Day', label: 'نصف يوم — ٥ ساعات' },
      { value: 'Hourly', label: 'بالساعة — ٣ ساعات كحد أدنى' },
    ],
  },
  fr: {
    dir: 'ltr',
    eyebrow: 'Demande de Réservation',
    headlineTop: 'Réservez Votre',
    headlineBottom: 'Expérience.',
    sub: 'Complétez le formulaire ci-dessous et votre conseiller Limore dédié confirmera la disponibilité dans les deux heures ouvrables.',
    required: '* Champs obligatoires',
    note: 'Toutes les réservations sont traitées avec une entière discrétion.',
    submit: 'Soumettre la Réservation',
    submitting: 'Envoi en cours…',
    success: 'Votre demande de réservation a été reçue.',
    successSub: 'Une confirmation a été envoyée à votre email. Un conseiller Limore vous contactera dans les 2 heures.',
    errorMsg: "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.",
    validationMsg: 'Veuillez remplir tous les champs obligatoires avant de soumettre.',
    sections: { journey: 'Détails du Trajet', client: 'Vos Informations' },
    fields: {
      pickupDate: 'Date de Prise en Charge',
      pickupTime: 'Heure de Prise en Charge',
      bookingType: 'Type de Réservation',
      flightNo: 'Numéro de Vol',
      pickupLocation: 'Lieu de Prise en Charge',
      dropoff: 'Lieu de Dépose',
      vehicleName: 'Préférence de Véhicule',
      guestName: 'Votre Nom Complet',
      companyName: 'Nom de la Société',
      contact: 'Adresse Email',
      phone: 'Numéro de Téléphone',
      specialRequest: 'Demande Spéciale',
    },
    bookingTypes: [
      { value: '', label: 'Sélectionner le Type' },
      { value: 'Arrival', label: 'Arrivée' },
      { value: 'Departure', label: 'Départ' },
      { value: 'Full Day', label: 'Journée Complète — 10 Heures' },
      { value: 'Half Day', label: 'Demi-Journée — 5 Heures' },
      { value: 'Hourly', label: 'Horaire — Minimum 3 Heures' },
    ],
  },
}

// ─── Shared input base style ───────────────────────────────────────────────────
const inputBase = (focused, dir) => ({
  width: '100%',
  boxSizing: 'border-box',
  padding: '13px 14px',
  fontSize: '14px',
  fontFamily: FONT_B,
  fontWeight: 400,
  color: TEXT,
  backgroundColor: focused ? 'rgba(196,30,30,0.03)' : '#FFFFFF',
  border: `1px solid ${focused ? RED : BORDER}`,
  borderRadius: 0,
  outline: 'none',
  appearance: 'none',
  WebkitAppearance: 'none',
  transition: 'border-color 0.2s ease, background-color 0.2s ease',
  direction: dir,
  lineHeight: 1.5,
})

const labelStyle = {
  fontSize: '10px',
  fontFamily: FONT_B,
  fontWeight: 600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: MUTED,
  display: 'block',
}

const reqStar = { color: RED, marginLeft: '3px' }

// ─── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, required, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && (
        <label style={labelStyle}>
          {label}
          {required && <span style={reqStar}>*</span>}
        </label>
      )}
      {children}
    </div>
  )
}

// ─── Input ────────────────────────────────────────────────────────────────────
function Input({ label, type = 'text', value, onChange, required, dir,
  autoComplete = 'off', placeholder = '' }) {
  const [focused, setFocused] = useState(false)
  return (
    <Field label={label} required={required}>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={inputBase(focused, dir)}
      />
    </Field>
  )
}

// ─── Select ───────────────────────────────────────────────────────────────────
function Select({ label, value, onChange, options, required, dir, grouped = false }) {
  const [focused, setFocused] = useState(false)
  const groups = grouped
    ? [...new Set(options.filter(o => o.value).map(o => o.group))]
    : null

  return (
    <Field label={label} required={required}>
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...inputBase(focused, dir),
            cursor: 'pointer',
            paddingRight: dir === 'rtl' ? '14px' : '36px',
            paddingLeft: dir === 'rtl' ? '36px' : '14px',
            color: value ? TEXT : FAINT,
          }}
        >
          {grouped ? (
            <>
              <option value="" style={{ backgroundColor: '#FFF', color: FAINT }}>
                {options[0].label}
              </option>
              {groups.map(grp => (
                <optgroup key={grp} label={grp}
                  style={{ backgroundColor: '#FFF', color: MUTED, fontWeight: 600 }}>
                  {options.filter(o => o.group === grp).map(o => (
                    <option key={o.value} value={o.value}
                      style={{ backgroundColor: '#FFF', color: TEXT }}>
                      {o.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </>
          ) : (
            options.map(o => (
              <option key={o.value} value={o.value}
                style={{ backgroundColor: '#FFF', color: o.value ? TEXT : FAINT }}>
                {o.label}
              </option>
            ))
          )}
        </select>
        <svg
          width="10" height="6" viewBox="0 0 10 6" fill="none"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            right: dir === 'rtl' ? 'auto' : '12px',
            left: dir === 'rtl' ? '12px' : 'auto',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: MUTED,
          }}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Field>
  )
}

// ─── Textarea ─────────────────────────────────────────────────────────────────
function Textarea({ label, value, onChange, dir, rows = 4 }) {
  const [focused, setFocused] = useState(false)
  return (
    <Field label={label}>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...inputBase(focused, dir), resize: 'none', lineHeight: 1.8 }}
      />
    </Field>
  )
}

// ─── DateField — wraps react-datepicker to match inputBase exactly ─────────────
function DateField({ label, required, selected, onChange, showTimeSelectOnly = false, dir }) {
  const [focused, setFocused] = useState(false)

  // ✅ FIX 1: isMounted instead of typeof window — safe for SSR hydration
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // ✅ FIX 1: Only evaluate window.innerWidth after mount — never during SSR
  const isMobile = isMounted && window.innerWidth < 640

  const sharedProps = {
    selected,
    onChange,
    onCalendarOpen: () => setFocused(true),
    onCalendarClose: () => setFocused(false),
    showPopperArrow: false,
    popperClassName: 'limore-dp-popper',
    // Mobile: render in portal overlay instead of inline popper
    // withPortal: typeof window !== 'undefined' && window.innerWidth < 640,

    withPortal: isMobile,
    // ✅ FIX 2: Portal target is document.body so it escapes stacking contexts
    portalId: isMobile ? 'limore-dp-portal' : undefined,
  }

  const inputStyle = {
    ...inputBase(focused, dir),
    cursor: 'pointer',
    paddingLeft: '40px',
  }

  if (showTimeSelectOnly) {
    return (
      <Field label={label} required={required}>
        <div style={{ position: 'relative' }}>
          {/* Clock icon */}
          <span style={{
            position: 'absolute',
            left: dir === 'rtl' ? 'auto' : '13px',
            right: dir === 'rtl' ? '13px' : 'auto',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            // Red if a time is selected OR the picker is focused, faint otherwise
            color: (selected || focused) ? RED : FAINT,
            display: 'flex',
            transition: 'color 0.2s',
            zIndex: 1,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <DatePicker
            {...sharedProps}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption=""
            dateFormat="h:mm aa"
            placeholderText="Select time"
            className="limore-dp-input"
            wrapperClassName="limore-dp-wrapper"
            customInput={<input style={inputStyle} readOnly />}
          />
        </div>
      </Field>
    )
  }

  return (
    <Field label={label} required={required}>
      <div style={{ position: 'relative' }}>
        {/* Calendar icon */}
        <span style={{
          position: 'absolute',
          left: dir === 'rtl' ? 'auto' : '13px',
          right: dir === 'rtl' ? '13px' : 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: (selected || focused) ? RED : FAINT,
          display: 'flex',
          transition: 'color 0.2s',
          zIndex: 1,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" />
          </svg>
        </span>
        <DatePicker
          {...sharedProps}
          dateFormat="dd MMM yyyy"
          placeholderText="Select date"
          minDate={new Date()}
          calendarStartDay={1}
          className="limore-dp-input"
          wrapperClassName="limore-dp-wrapper"
          customInput={<input style={inputStyle} readOnly />}
        />
      </div>
    </Field>
  )
}

// ─── Form section ─────────────────────────────────────────────────────────────
function FormSection({ title, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '18px', height: '1px', backgroundColor: RED, flexShrink: 0 }} />
        <span style={{
          fontSize: '9px',
          fontFamily: FONT_B,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: RED,
        }}>
          {title}
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: BORDER }} />
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
        gap: '16px',
      }}>
        {children}
      </div>
    </div>
  )
}

function toFormData(obj) {
  return Object.entries(obj)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v ?? ''))
    .join('&')
}

// ─── Success state ────────────────────────────────────────────────────────────
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: '320px',
      padding: 'clamp(48px,8vw,80px) clamp(24px,4vw,48px)',
      border: '1px solid rgba(196,30,30,0.2)',
      backgroundColor: 'rgba(196,30,30,0.03)',
      gap: '20px',
      opacity: 0,
    }}>
      <div style={{
        width: '56px',
        height: '56px',
        border: `1px solid ${RED}`,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
          <path d="M1.5 8l6 6L20.5 1.5" stroke={RED} strokeWidth="1.4"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p style={{
          fontSize: 'clamp(1rem,2vw,1.3rem)',
          fontFamily: FONT_D,
          fontWeight: 300,
          fontStyle: 'italic',
          color: TEXT,
          lineHeight: 1.55,
          margin: '0 0 10px',
          maxWidth: '380px',
        }}>
          {message}
        </p>
        <p style={{
          fontSize: '12px',
          fontFamily: FONT_B,
          fontWeight: 400,
          color: MUTED,
          letterSpacing: '0.04em',
          margin: 0,
          maxWidth: '400px',
        }}>
          {sub}
        </p>
      </div>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function ContactBookingForm({ locale = 'en' }) {
  const c = copy[locale] || copy.en
  const dir = c.dir
  const searchParams = useSearchParams()

  const sectionRef = useRef(null)
  const headRef = useRef(null)

  const [form, setForm] = useState({
    pickupDate: '',
    pickupTime: '',
    bookingType: '',
    flightNo: '',
    pickupLocation: '',
    dropoff: '',
    vehicleName: '',
    guestName: '',
    companyName: '',
    contact: '',
    phone: '',
    specialRequest: '',
  })

  const [submitStatus, setSubmitStatus] = useState('idle')
  const [validationErr, setValidationErr] = useState('')

  const set = field => val => setForm(prev => ({ ...prev, [field]: val }))

  const flightVisible = ['Arrival', 'Departure'].includes(form.bookingType)

  // ── GSAP scroll animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current.querySelectorAll('.cbf-animate'),
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
        }
      )
      gsap.fromTo(sectionRef.current.querySelector('.cbf-form-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // ── Pre-fill vehicle from URL ──
  useEffect(() => {
    const vehicleFromUrl = searchParams.get('vehicle')
    if (!vehicleFromUrl) return
    const vehicles = VEHICLES[locale] || VEHICLES.en
    const match = vehicles.find(v => v.value === vehicleFromUrl)
    if (match) {
      setForm(prev => ({ ...prev, vehicleName: match.value }))
      setTimeout(() => {
        const el = document.getElementById('booking-form')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  }, [searchParams, locale])

  // ── Custom validation — prevent premature submit ──
  const validate = () => {
    const required = [
      { key: 'pickupDate', label: c.fields.pickupDate },
      { key: 'pickupTime', label: c.fields.pickupTime },
      { key: 'bookingType', label: c.fields.bookingType },
      { key: 'pickupLocation', label: c.fields.pickupLocation },
      { key: 'dropoff', label: c.fields.dropoff },
      { key: 'guestName', label: c.fields.guestName },
      { key: 'contact', label: c.fields.contact },
      { key: 'phone', label: c.fields.phone },
    ]
    if (flightVisible) required.push({ key: 'flightNo', label: c.fields.flightNo })

    for (const { key, label } of required) {
      if (!form[key] || !form[key].toString().trim()) {
        return `${label} is required.`
      }
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(form.contact)) return 'Please enter a valid email address.'

    return null
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setValidationErr('')

    const err = validate()
    if (err) { setValidationErr(err); return }

    setSubmitStatus('submitting')

    const payload = {
      guestName: form.guestName,
      companyName: form.companyName,
      contact: form.contact,
      phone: form.phone,
      pickupDate: form.pickupDate,
      pickupTime: form.pickupTime,
      bookingType: form.bookingType,
      flightNo: form.flightNo,
      pickupLocation: form.pickupLocation,
      dropoff: form.dropoff,
      vehicleName: form.vehicleName,
      specialRequest: form.specialRequest,
      locale,
      clientPrice: '',
      extraCharges: '',
      amenitiesCharges: '',
      outsourcePrice: '',
      bookingCountry: '',
      chauffeurDetails: '',
      status: 'New',
      clientType: '',
      salesPerson: '',
      paymentStatus: '',
    }

    try {
      await submitForm('booking', payload)
      // await fetch(APPS_SCRIPT_URL, {
      //   method: 'POST',
      //   mode: 'no-cors',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: toFormData(payload),
      // })
      setSubmitStatus('success')
    } catch (err) {
      console.error('Booking submit error:', err)
      setSubmitStatus('error')
    }
  }

  // ── Time value helpers ──
  const timeToDate = val => {
    if (!val) return null
    const d = new Date()
    const [h, m] = val.split(':')
    d.setHours(+h, +m, 0, 0)
    return d
  }
  const dateToTime = d =>
    d ? `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}` : ''

  return (
    <section
      ref={sectionRef}
      id="booking-form"
      style={{
        backgroundColor: BG,
        padding: 'clamp(64px,10vw,120px) clamp(20px,6vw,96px)',
        direction: dir,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top red accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '8%',
        right: '8%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(196,30,30,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      {/* ── Header ── */}
      <div
        ref={headRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(24px,4vw,64px)',
          alignItems: 'end',
          marginBottom: 'clamp(40px,6vw,64px)',
        }}
      >
        <div>
          <div className="cbf-animate" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '18px',
            opacity: 0,
          }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: RED }} />
            <span style={{
              fontSize: '10px',
              fontFamily: FONT_B,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: RED,
            }}>
              {c.eyebrow}
            </span>
          </div>
          <h2 className="cbf-animate" style={{
            fontSize: 'clamp(2rem,5vw,5.5rem)',
            fontFamily: FONT_D,
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: '-0.025em',
            margin: 0,
            opacity: 0,
          }}>
            <span style={{ display: 'block', color: TEXT }}>{c.headlineTop}</span>
            <span style={{ display: 'block', fontStyle: 'italic', color: RED }}>
              {c.headlineBottom}
            </span>
          </h2>
        </div>

        <p className="cbf-animate" style={{
          fontSize: 'clamp(0.9rem,1.25vw,1rem)',
          fontFamily: FONT_B,
          fontWeight: 400,
          lineHeight: 1.9,
          color: MUTED,
          margin: 0,
          maxWidth: '480px',
          opacity: 0,
        }}>
          {c.sub}
        </p>
      </div>

      {/* ── Form card ── */}
      <div
        className="cbf-form-card"
        style={{
          backgroundColor: SURFACE,
          borderTop: `2px solid ${RED}`,
          borderRight: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          borderLeft: `1px solid ${BORDER}`,
          opacity: 0,
        }}
      >
        {/* Card header bar */}
        <div style={{
          padding: 'clamp(14px,2vw,20px) clamp(20px,3vw,32px)',
          borderBottom: `1px solid ${BORDER}`,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <span style={{
            fontSize: '10px',
            fontFamily: FONT_B,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: TEXT,
          }}>
            Limore — {c.eyebrow}
          </span>
          <span style={{
            fontSize: '10px',
            fontFamily: FONT_B,
            fontWeight: 400,
            letterSpacing: '0.08em',
            color: MUTED,
          }}>
            {c.required}
          </span>
        </div>

        {/* ── States ── */}
        {submitStatus === 'success' ? (
          <div style={{ padding: 'clamp(24px,4vw,48px)' }}>
            <SuccessState message={c.success} sub={c.successSub} />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              padding: 'clamp(24px,3.5vw,40px) clamp(20px,3vw,36px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '36px',
              backgroundColor: '#FFFFFF',
            }}
          >
            {/* ── Journey Details ── */}
            <FormSection title={c.sections.journey}>

              {/* Date picker */}
              <DateField
                label={c.fields.pickupDate}
                required
                dir={dir}
                selected={form.pickupDate ? new Date(form.pickupDate) : null}
                onChange={date => {
                  if (!date) return set('pickupDate')('')
                  // Use local date parts — no UTC conversion
                  const y = date.getFullYear()
                  const m = String(date.getMonth() + 1).padStart(2, '0')
                  const d = String(date.getDate()).padStart(2, '0')
                  set('pickupDate')(`${y}-${m}-${d}`)
                }}
              />

              <DateField
                label={c.fields.pickupTime}
                required
                dir={dir}
                selected={timeToDate(form.pickupTime)}
                onChange={date => set('pickupTime')(dateToTime(date))}
                showTimeSelectOnly
              />



              <Select
                label={c.fields.bookingType}
                value={form.bookingType}
                onChange={set('bookingType')}
                options={c.bookingTypes}

                dir={dir}
              />

              {flightVisible && (
                <div style={{ gridColumn: '1 / -1' }}>
                  <Input
                    label={c.fields.flightNo}
                    value={form.flightNo}
                    onChange={set('flightNo')}
                    dir={dir}
                    placeholder="e.g. EK 215"
                  />
                </div>
              )}



              <PlacesInput
                label={c.fields.pickupLocation}
                value={form.pickupLocation}
                onChange={set('pickupLocation')}
                required
                dir={dir}
              />
              <PlacesInput
                label={c.fields.dropoff}
                value={form.dropoff}
                onChange={set('dropoff')}
                required
                dir={dir}
              />

              <Select
                label={c.fields.vehicleName}
                value={form.vehicleName}
                onChange={set('vehicleName')}
                options={VEHICLES[locale] || VEHICLES.en}
                dir={dir}
                grouped
              />
            </FormSection>

            <div style={{ height: '1px', backgroundColor: BORDER }} />

            {/* ── Your Information ── */}
            <FormSection title={c.sections.client}>
              <Input
                label={c.fields.guestName}
                value={form.guestName}
                onChange={set('guestName')}
                required dir={dir}
                autoComplete="name"
              />
              <Input
                label={c.fields.companyName}
                value={form.companyName}
                onChange={set('companyName')}
                dir={dir}
                autoComplete="organization"
              />
              <Input
                label={c.fields.contact}
                type="email"
                value={form.contact}
                onChange={set('contact')}
                required dir={dir}
                autoComplete="email"
                placeholder="you@email.com"
              />
              <Input
                label={c.fields.phone}
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                required dir={dir}
                autoComplete="tel"
                placeholder="+971 56 345 4698"
              />
              <div style={{ gridColumn: '1 / -1' }}>
                <Textarea
                  label={c.fields.specialRequest}
                  value={form.specialRequest}
                  onChange={set('specialRequest')}
                  dir={dir}
                  rows={4}
                />
              </div>
            </FormSection>

            <div style={{ height: '1px', backgroundColor: BORDER }} />

            {/* ── Validation error ── */}
            {validationErr && (
              <div style={{
                padding: '13px 16px',
                backgroundColor: 'rgba(196,30,30,0.05)',
                border: '1px solid rgba(196,30,30,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6" stroke={RED} strokeWidth="1" />
                  <path d="M7 4v3.5M7 10h.01" stroke={RED} strokeWidth="1.1"
                    strokeLinecap="round" />
                </svg>
                <span style={{
                  fontSize: '13px',
                  fontFamily: FONT_B,
                  fontWeight: 400,
                  color: RED,
                }}>
                  {validationErr}
                </span>
              </div>
            )}

            {/* ── Submit error ── */}
            {submitStatus === 'error' && (
              <div style={{
                padding: '13px 16px',
                backgroundColor: 'rgba(196,30,30,0.05)',
                border: '1px solid rgba(196,30,30,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6" stroke={RED} strokeWidth="1" />
                  <path d="M7 4v3.5M7 10h.01" stroke={RED} strokeWidth="1.1"
                    strokeLinecap="round" />
                </svg>
                <span style={{
                  fontSize: '13px',
                  fontFamily: FONT_B,
                  fontWeight: 400,
                  color: RED,
                }}>
                  {c.errorMsg}
                </span>
              </div>
            )}

            {/* ── Submit row ── */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
                  <path d="M5.5 1L1 3.5v3c0 3 2 5 4.5 5.5C8 11.5 10 9.5 10 6.5v-3L5.5 1z"
                    stroke={FAINT} strokeWidth="0.9" />
                </svg>
                <span style={{
                  fontSize: '11px',
                  fontFamily: FONT_B,
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: MUTED,
                }}>
                  {c.note}
                </span>
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="cbf-submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 28px',
                  backgroundColor: submitStatus === 'submitting' ? '#999' : RED,
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontFamily: FONT_B,
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: submitStatus === 'submitting' ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.25s ease',
                  flexShrink: 0,
                }}
              >
                <span>{submitStatus === 'submitting' ? c.submitting : c.submit}</span>
                {submitStatus !== 'submitting' && (
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                    <path d="M1 4h10M7 1l4 3-4 3"
                      stroke="currentColor" strokeWidth="1.1"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* ── Styles: datepicker + submit hover ── */}
      <style>{`
  /* ── Wrapper ── */
  .limore-dp-wrapper {
    width: 100%;
    display: block;
  }
  .limore-dp-wrapper input {
    width: 100% !important;
    box-sizing: border-box !important;
    font-size: 14px !important;
    font-family: ${FONT_B} !important;
    font-weight: 400 !important;
    color: ${TEXT} !important;
    cursor: pointer !important;
  }
  .limore-dp-wrapper input::placeholder {
    color: ${FAINT} !important;
    font-weight: 400 !important;
  }

  /* ── Calendar popup ── */
  .limore-dp-popper {
    z-index: 9999 !important;
  }
  .limore-dp-popper .react-datepicker {
    background:    #FFFFFF !important;
    border:        1px solid ${BORDER} !important;
    border-top:    2px solid ${RED} !important;
    border-radius: 0 !important;
    font-family:   ${FONT_B} !important;
    box-shadow:    0 16px 48px rgba(0,0,0,0.12) !important;
    overflow:      hidden !important;
  }
  .limore-dp-popper .react-datepicker__triangle {
    display: none !important;
  }

  /* ── Header ── */
  .limore-dp-popper .react-datepicker__header {
    background:    #F8F7F4 !important;
    border-bottom: 1px solid ${BORDER} !important;
    border-radius: 0 !important;
    padding:       14px 0 10px !important;
  }
  .limore-dp-popper .react-datepicker__current-month {
    color:          #1A1A1A !important;
    font-size:      11px !important;
    font-weight:    600 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    font-family:    ${FONT_B} !important;
  }

  /* ── Nav arrows ── */
  .limore-dp-popper .react-datepicker__navigation-icon::before {
    border-color: rgba(10,10,10,0.35) !important;
  }
  .limore-dp-popper .react-datepicker__navigation:hover .react-datepicker__navigation-icon::before {
    border-color: ${RED} !important;
  }

  /* ── Day names row ── */
  .limore-dp-popper .react-datepicker__day-names {
    display:         flex !important;
    justify-content: center !important;
    margin-bottom:   4px !important;
  }
  .limore-dp-popper .react-datepicker__day-name {
    color:          rgba(10,10,10,0.4) !important;
    font-size:      9px !important;
    font-weight:    600 !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    font-family:    ${FONT_B} !important;
    width:          2.2rem !important;
    margin:         0 !important;
    padding:        0 !important;
    text-align:     center !important;
  }

  /* ── Week rows ── */
  .limore-dp-popper .react-datepicker__week {
    display:         flex !important;
    justify-content: center !important;
  }

  /* ── Month container ── */
  .limore-dp-popper .react-datepicker__month {
    margin: 8px 4px !important;
  }

  /* ── Days ── */
  .limore-dp-popper .react-datepicker__day {
    color:         #1A1A1A !important;
    font-size:     12px !important;
    font-weight:   400 !important;
    font-family:   ${FONT_B} !important;
    border-radius: 0 !important;
    width:         2.2rem !important;
    line-height:   2.2rem !important;
    margin:        0 !important;
    padding:       0 !important;
    text-align:    center !important;
    transition:    background 0.15s !important;
  }
  .limore-dp-popper .react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
    background:    rgba(200,16,46,0.08) !important;
    border-radius: 0 !important;
    color:         #1A1A1A !important;
  }

  /* Selected + keyboard-selected ── kills blue */
  .limore-dp-popper .react-datepicker__day--selected,
  .limore-dp-popper .react-datepicker__day--selected:hover,
  .limore-dp-popper .react-datepicker__day--keyboard-selected,
  .limore-dp-popper .react-datepicker__day--keyboard-selected:hover,
  .limore-dp-popper .react-datepicker__month .react-datepicker__day--selected,
  .limore-dp-popper .react-datepicker__month .react-datepicker__day--keyboard-selected {
    background-color: ${RED} !important;
    background:       ${RED} !important;
    color:            #FFFFFF !important;
    font-weight:      600 !important;
    border-radius:    0 !important;
    outline:          none !important;
    box-shadow:       none !important;
  }

  /* Today */
  .limore-dp-popper .react-datepicker__day--today,
  .limore-dp-popper .react-datepicker__month .react-datepicker__day--today {
    background-color: transparent !important;
    background:       transparent !important;
    border:           1px solid rgba(200,16,46,0.4) !important;
    border-radius:    0 !important;
    color:            ${RED} !important;
    font-weight:      600 !important;
  }

  /* Today + selected */
  .limore-dp-popper .react-datepicker__day--today.react-datepicker__day--selected,
  .limore-dp-popper .react-datepicker__day--today.react-datepicker__day--keyboard-selected,
  .limore-dp-popper .react-datepicker__month .react-datepicker__day--today.react-datepicker__day--selected {
    background-color: ${RED} !important;
    background:       ${RED} !important;
    color:            #FFFFFF !important;
    border:           none !important;
    border-radius:    0 !important;
  }

  /* Disabled */
  .limore-dp-popper .react-datepicker__day--disabled {
    color:  rgba(10,10,10,0.22) !important;
    cursor: not-allowed !important;
  }
  .limore-dp-popper .react-datepicker__day--disabled:hover {
    background: transparent !important;
  }

  /* ── Time list ── */
  .limore-dp-popper .react-datepicker__time-container {
    border-left: 1px solid ${BORDER} !important;
    width:       110px !important;
  }
  .limore-dp-popper .react-datepicker__time,
  .limore-dp-popper .react-datepicker__time-box {
    background:    #FFFFFF !important;
    border-radius: 0 !important;
    width:         100% !important;
  }
  .limore-dp-popper .react-datepicker__time-list-item {
    color:       rgba(10,10,10,0.55) !important;
    font-size:   12px !important;
    font-weight: 400 !important;
    font-family: ${FONT_B} !important;
    height:      auto !important;
    padding:     10px 16px !important;
    transition:  all 0.15s !important;
  }
  .limore-dp-popper .react-datepicker__time-list-item:hover:not(.react-datepicker__time-list-item--selected) {
    background: rgba(200,16,46,0.07) !important;
    color:      #1A1A1A !important;
  }
  .limore-dp-popper .react-datepicker__time-list-item--selected,
  .limore-dp-popper .react-datepicker__time-list-item--selected:hover {
    background-color: ${RED} !important;
    background:       ${RED} !important;
    color:            #FFFFFF !important;
    font-weight:      600 !important;
  }

  /* Time header */
  .limore-dp-popper .react-datepicker__header--time {
    background:    #F8F7F4 !important;
    border-bottom: 1px solid ${BORDER} !important;
    padding:       12px !important;
  }
  .limore-dp-popper .react-datepicker-time__header {
    font-size:      10px !important;
    font-weight:    600 !important;
    letter-spacing: 0.14em !important;
    text-transform: uppercase !important;
    color:          rgba(10,10,10,0.4) !important;
    font-family:    ${FONT_B} !important;
  }

  /* ── Mobile portal ── */
  .react-datepicker-portal {
    position:        fixed !important;
    inset:           0 !important;
    z-index:         99999 !important;
    display:         flex !important;
    align-items:     center !important;
    justify-content: center !important;
    background:      rgba(0,0,0,0.65) !important;
    backdrop-filter: blur(3px) !important;
  }
  .react-datepicker-portal .react-datepicker {
    position:      relative !important;
    top:           auto !important;
    left:          auto !important;
    transform:     none !important;
    width:         calc(100vw - 32px) !important;
    max-width:     340px !important;
    border-top:    2px solid ${RED} !important;
    border-radius: 0 !important;
    font-family:   ${FONT_B} !important;
    box-shadow:    0 20px 60px rgba(0,0,0,0.8) !important;
    overflow:      hidden !important;
  }
  .react-datepicker-portal .react-datepicker__triangle {
    display: none !important;
  }
  .react-datepicker-portal .react-datepicker__header {
    background:    #F8F7F4 !important;
    border-bottom: 1px solid ${BORDER} !important;
    border-radius: 0 !important;
    padding:       14px 0 10px !important;
  }
  .react-datepicker-portal .react-datepicker__current-month {
    color:          #1A1A1A !important;
    font-size:      11px !important;
    font-weight:    600 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    font-family:    ${FONT_B} !important;
  }
  .react-datepicker-portal .react-datepicker__day-names {
    display:         flex !important;
    justify-content: center !important;
    margin-bottom:   4px !important;
  }
  .react-datepicker-portal .react-datepicker__day-name {
    color:       rgba(10,10,10,0.4) !important;
    font-family: ${FONT_B} !important;
    width:       2.2rem !important;
    margin:      0 !important;
    padding:     0 !important;
    text-align:  center !important;
  }
  .react-datepicker-portal .react-datepicker__week {
    display:         flex !important;
    justify-content: center !important;
  }
  .react-datepicker-portal .react-datepicker__month {
    margin: 8px 4px !important;
  }
  .react-datepicker-portal .react-datepicker__day {
    color:         #1A1A1A !important;
    font-family:   ${FONT_B} !important;
    border-radius: 0 !important;
    width:         2.2rem !important;
    line-height:   2.2rem !important;
    margin:        0 !important;
    padding:       0 !important;
    text-align:    center !important;
    transition:    background 0.15s !important;
  }
  .react-datepicker-portal .react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
    background:    rgba(200,16,46,0.08) !important;
    border-radius: 0 !important;
  }
  .react-datepicker-portal .react-datepicker__day--selected,
  .react-datepicker-portal .react-datepicker__day--selected:hover,
  .react-datepicker-portal .react-datepicker__day--keyboard-selected,
  .react-datepicker-portal .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker-portal .react-datepicker__month .react-datepicker__day--selected,
  .react-datepicker-portal .react-datepicker__month .react-datepicker__day--keyboard-selected {
    background-color: ${RED} !important;
    background:       ${RED} !important;
    color:            #FFFFFF !important;
    font-weight:      600 !important;
    border-radius:    0 !important;
    outline:          none !important;
    box-shadow:       none !important;
  }
  .react-datepicker-portal .react-datepicker__day--today {
    background:    transparent !important;
    border:        1px solid rgba(200,16,46,0.4) !important;
    border-radius: 0 !important;
    color:         ${RED} !important;
    font-weight:   600 !important;
  }
  .react-datepicker-portal .react-datepicker__day--today.react-datepicker__day--selected,
  .react-datepicker-portal .react-datepicker__day--today.react-datepicker__day--keyboard-selected {
    background-color: ${RED} !important;
    background:       ${RED} !important;
    color:            #FFFFFF !important;
    border:           none !important;
  }
  .react-datepicker-portal .react-datepicker__day--disabled {
    color:  rgba(10,10,10,0.22) !important;
    cursor: not-allowed !important;
  }
  .react-datepicker-portal .react-datepicker__day--disabled:hover {
    background: transparent !important;
  }
  .react-datepicker-portal .react-datepicker__navigation-icon::before {
    border-color: rgba(10,10,10,0.35) !important;
  }
  .react-datepicker-portal .react-datepicker__navigation:hover .react-datepicker__navigation-icon::before {
    border-color: ${RED} !important;
  }
  .react-datepicker-portal .react-datepicker__time-container {
    border-left: 1px solid ${BORDER} !important;
  }
  .react-datepicker-portal .react-datepicker__time-list-item {
    color:       rgba(10,10,10,0.55) !important;
    font-size:   12px !important;
    font-family: ${FONT_B} !important;
    height:      auto !important;
    padding:     10px 16px !important;
    transition:  all 0.15s !important;
  }
  .react-datepicker-portal .react-datepicker__time-list-item--selected,
  .react-datepicker-portal .react-datepicker__time-list-item--selected:hover {
    background-color: ${RED} !important;
    background:       ${RED} !important;
    color:            #FFFFFF !important;
    font-weight:      600 !important;
  }
  .react-datepicker-portal .react-datepicker__time-list-item:hover:not(.react-datepicker__time-list-item--selected) {
    background: rgba(200,16,46,0.07) !important;
    color:      #1A1A1A !important;
  }

  /* ── Global nuclear override — last resort for stubborn blue ── */
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${RED} !important;
    color: #FFFFFF !important;
    border-radius: 0 !important;
  }
  .react-datepicker__time-list-item--selected {
    background-color: ${RED} !important;
    color: #FFFFFF !important;
  }

  /* ── Submit button ── */
  .cbf-submit:hover:not(:disabled) {
    background-color: ${RED_HOVER} !important;
  }

  /* ── Hide native pickers ── */
  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  /* ── Select options ── */
  select option, optgroup {
    background-color: #FFFFFF;
    color: ${TEXT};
  }
`}</style>
    </section>
  )
}
