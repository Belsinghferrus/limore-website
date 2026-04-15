'use client'

import { useState } from 'react'

const t = {
    en: {
        eyebrow: 'Apply to Partner',
        heading: 'Begin Your Application',
        sub: 'Fill in the details below. Our partnerships team reviews every application within 5 business days.',
        fields: {
            name: 'Full Name',
            company: 'Company / Operator Name',
            city: 'Operating City',
            country: 'Country',
            fleet: 'Fleet Size (number of vehicles)',
            email: 'Business Email',
            phone: 'Phone Number',
            message: 'Tell us about your operation',
        },
        cities: ['Paris', 'Milan', 'Other'],
        submit: 'Submit Application',
        submitting: 'Sending...',
        success: 'Application received. Our team will contact you within 5 business days.',
        error: 'Something went wrong. Please try again or email us directly.',
        note: 'By submitting you agree to Limore\'s partner confidentiality terms.',
    },
    ar: {
        eyebrow: 'تقدم للشراكة',
        heading: 'ابدأ طلبك',
        sub: 'أدخل التفاصيل أدناه. يراجع فريق الشراكات لدينا كل طلب في غضون 5 أيام عمل.',
        fields: {
            name: 'الاسم الكامل',
            company: 'اسم الشركة / المشغل',
            city: 'مدينة التشغيل',
            country: 'البلد',
            fleet: 'حجم الأسطول (عدد المركبات)',
            email: 'البريد الإلكتروني للعمل',
            phone: 'رقم الهاتف',
            message: 'أخبرنا عن عملياتك',
        },
        cities: ['باريس', 'ميلانو', 'أخرى'],
        submit: 'إرسال الطلب',
        submitting: 'جارٍ الإرسال...',
        success: 'تم استلام طلبك. سيتصل بك فريقنا خلال 5 أيام عمل.',
        error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
        note: 'بالإرسال توافق على شروط سرية شركاء ليمور.',
    },
    fr: {
        eyebrow: 'Candidater',
        heading: 'Commencer Votre Candidature',
        sub: 'Remplissez les informations ci-dessous. Notre equipe evalue chaque candidature sous 5 jours ouvrables.',
        fields: {
            name: 'Nom complet',
            company: 'Nom de la societe / operateur',
            city: 'Ville d\'exploitation',
            country: 'Pays',
            fleet: 'Taille de la flotte (nombre de vehicules)',
            email: 'Email professionnel',
            phone: 'Numero de telephone',
            message: 'Parlez-nous de votre activite',
        },
        cities: ['Paris', 'Milan', 'Autre'],
        submit: 'Soumettre la candidature',
        submitting: 'Envoi en cours...',
        success: 'Candidature recue. Notre equipe vous contactera sous 5 jours ouvrables.',
        error: 'Une erreur est survenue. Veuillez reessayer.',
        note: 'En soumettant, vous acceptez les conditions de confidentialite partenaire de Limore.',
    },
}

const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#F8F7F4',
    fontFamily: 'Inter, sans-serif',
    fontSize: '13px',
    fontWeight: 300,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
}

const labelStyle = {
    display: 'block',
    fontFamily: 'Inter, sans-serif',
    fontSize: '9px',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(248,247,244,0.35)',
    marginBottom: '8px',
}

export default function PartnerApply({ locale = 'en' }) {
    const content = t[locale] || t.en
    const isRTL = locale === 'ar'

    const [form, setForm] = useState({ name: '', company: '', city: '', country: '', fleet: '', email: '', phone: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | loading | success | error

    function handleChange(e) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('loading')
        try {
            const res = await fetch('/api/partner-apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, locale }),
            })
            if (!res.ok) throw new Error()
            setStatus('success')
        } catch {
            setStatus('error')
        }
    }

    return (
        <section
            style={{
                backgroundColor: '#050505',
                padding: 'clamp(72px,10vw,120px) clamp(24px,6vw,96px)',
                direction: isRTL ? 'rtl' : 'ltr',
            }}
        >
            <div style={{ maxWidth: '780px' }}>

                {/* Header */}
                <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E', marginBottom: '16px' }}>
                    {content.eyebrow}
                </p>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 300, color: '#F8F7F4', margin: '0 0 16px', lineHeight: 1.1 }}>
                    {content.heading}
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.78rem,1.1vw,0.88rem)', fontWeight: 300, color: 'rgba(248,247,244,0.38)', lineHeight: 1.8, margin: '0 0 48px', maxWidth: '440px' }}>
                    {content.sub}
                </p>

                {status === 'success' ? (
                    <div style={{ padding: '32px', border: '1px solid rgba(196,30,30,0.3)', backgroundColor: 'rgba(196,30,30,0.06)' }}>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 300, color: 'rgba(248,247,244,0.7)', lineHeight: 1.7, margin: 0 }}>
                            {content.success}
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        {/* Row: name + company */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px,100%), 1fr))', gap: '24px' }}>
                            {['name', 'company'].map((field) => (
                                <div key={field}>
                                    <label htmlFor={`pa-${field}`} style={labelStyle}>{content.fields[field]}</label>
                                    <input
                                        id={`pa-${field}`}
                                        name={field}
                                        type="text"
                                        required
                                        value={form[field]}
                                        onChange={handleChange}
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = 'rgba(196,30,30,0.5)'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Row: city select + country */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px,100%), 1fr))', gap: '24px' }}>
                            <div>
                                <label htmlFor="pa-city" style={labelStyle}>{content.fields.city}</label>
                                <select
                                    id="pa-city"
                                    name="city"
                                    required
                                    value={form.city}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                                    onFocus={e => e.target.style.borderColor = 'rgba(196,30,30,0.5)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                >
                                    <option value="" disabled style={{ backgroundColor: '#0A0A0A' }}>--</option>
                                    {content.cities.map((c) => (
                                        <option key={c} value={c} style={{ backgroundColor: '#0A0A0A' }}>{c}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="pa-country" style={labelStyle}>{content.fields.country}</label>
                                <input
                                    id="pa-country"
                                    name="country"
                                    type="text"
                                    required
                                    value={form.country}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = 'rgba(196,30,30,0.5)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                />
                            </div>
                        </div>

                        {/* Row: fleet + email + phone */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px,100%), 1fr))', gap: '24px' }}>
                            {['fleet', 'email', 'phone'].map((field) => (
                                <div key={field}>
                                    <label htmlFor={`pa-${field}`} style={labelStyle}>{content.fields[field]}</label>
                                    <input
                                        id={`pa-${field}`}
                                        name={field}
                                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'number'}
                                        required={field !== 'phone'}
                                        value={form[field]}
                                        onChange={handleChange}
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = 'rgba(196,30,30,0.5)'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="pa-message" style={labelStyle}>{content.fields.message}</label>
                            <textarea
                                id="pa-message"
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                                onFocus={e => e.target.style.borderColor = 'rgba(196,30,30,0.5)'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                            />
                        </div>

                        {/* Error */}
                        {status === 'error' && (
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#C41E1E', margin: 0 }}>
                                {content.error}
                            </p>
                        )}

                        {/* Submit row */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '14px 32px',
                                    backgroundColor: status === 'loading' ? 'rgba(196,30,30,0.5)' : '#C41E1E',
                                    border: '1px solid #C41E1E',
                                    color: '#fff',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '10px',
                                    fontWeight: 500,
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                    transition: 'background-color 0.25s ease',
                                    whiteSpace: 'nowrap',
                                }}
                                onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.backgroundColor = '#A01515' }}
                                onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.backgroundColor = '#C41E1E' }}
                            >
                                {status === 'loading' ? content.submitting : content.submit}
                                {status !== 'loading' && (
                                    <svg width="12" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
                                        <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                                    </svg>
                                )}
                            </button>

                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 300, color: 'rgba(248,247,244,0.2)', lineHeight: 1.6, margin: 0, maxWidth: '280px' }}>
                                {content.note}
                            </p>
                        </div>

                    </form>
                )}
            </div>
        </section>
    )
}