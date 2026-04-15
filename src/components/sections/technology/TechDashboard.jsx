'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const t = {
  en: {
    eyebrow:  '03 — Client Dashboard',
    heading:  'Every Trip. One Place.',
    body:     'Corporate accounts and frequent clients get a private dashboard — booking history, invoices, chauffeur preferences, and upcoming rides. Built for travel managers and executive assistants.',
    features: [
      { icon: 'calendar', label: 'Booking History',       desc: 'Full log of past and upcoming rides with receipts.' },
      { icon: 'user',     label: 'Chauffeur Preferences', desc: 'Favourite drivers, language requirements, ride notes.' },
      { icon: 'file',     label: 'Invoice Management',    desc: 'Download PDF invoices filtered by date, city or cost centre.' },
      { icon: 'users',    label: 'Team Access',           desc: 'Add travel managers and assistants with role-based permissions.' },
    ],
    access:   'Available to corporate & frequent clients',
  },
  ar: {
    eyebrow:  '03 — لوحة تحكم العميل',
    heading:  'كل رحلة. مكان واحد.',
    body:     'الحسابات المؤسسية والعملاء المنتظمون يحصلون على لوحة تحكم خاصة لسجل الحجوزات والفواتير وتفضيلات السائق.',
    features: [
      { icon: 'calendar', label: 'سجل الحجوزات',         desc: 'سجل كامل للرحلات السابقة والقادمة مع الإيصالات.' },
      { icon: 'user',     label: 'تفضيلات السائق',        desc: 'السائقون المفضلون ومتطلبات اللغة وملاحظات الرحلة.' },
      { icon: 'file',     label: 'إدارة الفواتير',        desc: 'تنزيل فواتير PDF مفلترة حسب التاريخ أو المدينة.' },
      { icon: 'users',    label: 'وصول الفريق',           desc: 'إضافة مديري السفر والمساعدين بصلاحيات محددة.' },
    ],
    access:   'متاح للحسابات المؤسسية والعملاء المنتظمين',
  },
  fr: {
    eyebrow:  '03 — Tableau de Bord Client',
    heading:  'Chaque Trajet. Un Seul Endroit.',
    body:     'Les comptes entreprises et clients frequents disposent d\'un tableau de bord prive avec historique, factures, preferences chauffeur et prochains trajets.',
    features: [
      { icon: 'calendar', label: 'Historique des Reservations', desc: 'Journal complet des trajets passe et futurs avec recu.' },
      { icon: 'user',     label: 'Preferences Chauffeur',       desc: 'Chauffeurs favoris, exigences linguistiques, notes de trajet.' },
      { icon: 'file',     label: 'Gestion des Factures',        desc: 'Telecharger des factures PDF filtrees par date, ville ou centre de cout.' },
      { icon: 'users',    label: 'Acces Equipe',                desc: 'Ajouter des gestionnaires de voyage avec des permissions par role.' },
    ],
    access:   'Disponible pour comptes entreprises et clients frequents',
  },
}

// Minimal inline icons
function Icon({ name }) {
  const icons = {
    calendar: <path d="M3 5h10M3 9h10M3 13h6M1 3h12v12H1V3zM5 1v4M9 1v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>,
    user:     <><circle cx="7" cy="5" r="3" stroke="currentColor" strokeWidth="1.2"/><path d="M1 15c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></>,
    file:     <path d="M3 1h7l3 3v11H3V1zM10 1v3h3M5 7h6M5 10h6M5 13h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>,
    users:    <><circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2"/><path d="M0 13c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="11" cy="4" r="2" stroke="currentColor" strokeWidth="1.2"/><path d="M14 13c0-2.2-1.3-4-3-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></>,
  }
  return (
    <svg width="16" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default function TechDashboard({ locale = 'en' }) {
  const content  = t[locale] || t.en
  const isRTL    = locale === 'ar'
  const sectionRef = useRef(null)
  const textRef    = useRef(null)
  const mockRef    = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0, x: isRTL ? -24 : 24 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
      gsap.fromTo(mockRef.current,
        { opacity: 0, x: isRTL ? 24 : -24 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
      // Animate mock rows
      gsap.fromTo('.db-row',
        { opacity: 0, x: 12 },
        {
          opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [locale])

  const mockRows = [
    { city: 'Paris CDG', date: 'Apr 14', driver: 'Jean-Pierre M.', status: 'Completed',  statusColor: '#22c55e' },
    { city: 'Milan MXP', date: 'Apr 12', driver: 'Marco B.',       status: 'Completed',  statusColor: '#22c55e' },
    { city: 'London LHR', date: 'Apr 18', driver: 'TBA',           status: 'Upcoming',   statusColor: '#C41E1E' },
    { city: 'Dubai DXB', date: 'Apr 20', driver: 'TBA',            status: 'Upcoming',   statusColor: '#C41E1E' },
  ]

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#FAFAF8',
        padding:         'clamp(72px,10vw,120px) clamp(24px,6vw,96px)',
        direction:       isRTL ? 'rtl' : 'ltr',
      }}
    >
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px,100%), 1fr))',
        gap:                 'clamp(40px,6vw,96px)',
        alignItems:          'center',
      }}>

        {/* Dashboard Mock — shown first on desktop */}
        <div
          ref={mockRef}
          style={{
            opacity:         0,
            backgroundColor: '#0E1117',
            overflow:        'hidden',
            boxShadow:       '0 24px 64px rgba(0,0,0,0.18)',
          }}
          aria-hidden="true"
        >
          {/* Dashboard header bar */}
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)' }} />
            <div style={{ flex: 1 }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 400, letterSpacing: '0.12em', color: 'rgba(248,247,244,0.2)' }}>limore.com/dashboard</span>
          </div>

          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { label: 'Total Trips', value: '47' },
              { label: 'This Month',  value: '6'  },
              { label: 'Saved',       value: '3'  },
            ].map((k) => (
              <div key={k.label} style={{ padding: '16px', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.2)', marginBottom: '6px' }}>{k.label}</span>
                <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.6rem', fontWeight: 300, color: '#F8F7F4', lineHeight: 1 }}>{k.value}</span>
              </div>
            ))}
          </div>

          {/* Table */}
          <div style={{ padding: '0' }}>
            {/* Table header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 100px 80px', padding: '10px 20px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              {['Route', 'Date', 'Chauffeur', 'Status'].map(h => (
                <span key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.18)' }}>{h}</span>
              ))}
            </div>

            {mockRows.map((row) => (
              <div
                key={row.city}
                className="db-row"
                style={{
                  display:     'grid',
                  gridTemplateColumns: '1fr 80px 100px 80px',
                  padding:     '12px 20px',
                  borderBottom:'1px solid rgba(255,255,255,0.03)',
                  opacity:     0,
                  alignItems:  'center',
                }}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 300, color: 'rgba(248,247,244,0.7)' }}>{row.city}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 300, color: 'rgba(248,247,244,0.3)' }}>{row.date}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 300, color: 'rgba(248,247,244,0.3)' }}>{row.driver}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 400, letterSpacing: '0.1em', color: row.statusColor }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} style={{ opacity: 0 }}>
          <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E', marginBottom: '16px' }}>
            {content.eyebrow}
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: '#0A0A0A', margin: '0 0 20px', lineHeight: 1.1 }}>
            {content.heading}
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.8rem,1.1vw,0.9rem)', fontWeight: 300, color: 'rgba(10,10,10,0.55)', lineHeight: 1.9, margin: '0 0 36px', maxWidth: '400px' }}>
            {content.body}
          </p>

          {/* Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(10,10,10,0.06)' }}>
            {content.features.map((f) => (
              <div
                key={f.label}
                style={{
                  backgroundColor: '#FAFAF8',
                  padding:         '18px 20px',
                  display:         'flex',
                  alignItems:      'flex-start',
                  gap:             '16px',
                }}
              >
                <div style={{ width: '32px', height: '32px', border: '1px solid rgba(10,10,10,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#C41E1E' }}>
                  <Icon name={f.icon} />
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0A0A0A', marginBottom: '4px' }}>{f.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.74rem,0.9vw,0.82rem)', fontWeight: 300, color: 'rgba(10,10,10,0.5)', lineHeight: 1.7 }}>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Access note */}
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.3)', marginTop: '20px' }}>
            {content.access}
          </p>
        </div>

      </div>
    </section>
  )
}