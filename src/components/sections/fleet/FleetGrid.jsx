'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { fleet } from '@/data/fleet'
import FleetFilter from './FleetFilter'

const icons = {
  seats: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="3.5" r="2" stroke="currentColor" strokeWidth="1"/>
      <path d="M2 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
  luggage: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="2.5" y="4.5" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1"/>
      <path d="M4.5 4.5V3a1.5 1.5 0 013 0v1.5" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
}

const categoryLabel = {
  en: { executive: 'Executive', premium: 'Premium', suv: 'Elite SUV', ultra: 'Ultra Luxury', van: 'Family & SUV', group: 'Group', electric: 'Electric' },
  ar: { executive: 'تنفيذي', premium: 'بريميوم', suv: 'SUV النخبة', ultra: 'فائق الفخامة', van: 'عائلي وفان', group: 'مجموعة', electric: 'كهربائي' },
  fr: { executive: 'Exécutif', premium: 'Premium', suv: 'SUV Élite', ultra: 'Ultra Luxe', van: 'Famille & SUV', group: 'Groupe', electric: 'Électrique' },
}

const uiText = {
  en: { requestBtn: 'Request This Vehicle', seatsLabel: 'Passengers', luggageLabel: 'Luggage', noResults: 'No vehicles in this category.' },
  ar: { requestBtn: 'طلب هذه المركبة', seatsLabel: 'ركاب', luggageLabel: 'أمتعة', noResults: 'لا توجد مركبات في هذه الفئة.' },
  fr: { requestBtn: 'Demander ce Véhicule', seatsLabel: 'Passagers', luggageLabel: 'Bagages', noResults: 'Aucun véhicule dans cette catégorie.' },
}

function VehicleCard({ vehicle, locale, onRequest, index }) {
  const isRTL   = locale === 'ar'
  const ui      = uiText[locale] || uiText.en
  const catLbl  = categoryLabel[locale] || categoryLabel.en
  const cardRef = useRef(null)
  const imgRef  = useRef(null)

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
        delay: (index % 3) * 0.08,
      }
    )
    const card = cardRef.current
    const img  = imgRef.current
    const onIn  = () => gsap.to(img, { scale: 1.06, duration: 0.7, ease: 'power2.out' })
    const onOut = () => gsap.to(img, { scale: 1,    duration: 0.7, ease: 'power2.out' })
    card.addEventListener('mouseenter', onIn)
    card.addEventListener('mouseleave', onOut)
    return () => { card.removeEventListener('mouseenter', onIn); card.removeEventListener('mouseleave', onOut) }
  }, [index])

  return (
    <article
      ref={cardRef}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EBEBEB',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
        opacity: 0,
        direction: isRTL ? 'rtl' : 'ltr',
      }}
      className="fleet-card"
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
        <img
          ref={imgRef}
          src={vehicle.img}
          alt={vehicle.imgAlt}
          width={900} height={675}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        {/* Overlay on hover */}
        <div className="fleet-card-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 55%)',
          opacity: 0, transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }} />
        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '14px',
          left: isRTL ? 'auto' : '14px',
          right: isRTL ? '14px' : 'auto',
          fontSize: '9px', fontFamily: 'Inter, sans-serif',
          fontWeight: 500, letterSpacing: '0.18em',
          textTransform: 'uppercase',
          backgroundColor: 'rgba(10,10,10,0.7)',
          backdropFilter: 'blur(6px)',
          color: 'rgba(248,247,244,0.7)',
          padding: '5px 10px',
        }}>
          {catLbl[vehicle.category]}
        </div>
        {/* Special badge */}
        {vehicle.badge && (
          <div style={{
            position: 'absolute', top: '14px',
            right: isRTL ? 'auto' : '14px',
            left: isRTL ? '14px' : 'auto',
            fontSize: '9px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.16em',
            textTransform: 'uppercase',
            backgroundColor: '#C41E1E',
            color: '#fff',
            padding: '5px 10px',
          }}>
            {vehicle.badge[locale] || vehicle.badge.en}
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 'clamp(18px, 2.5vw, 28px)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Make + Model */}
        <div style={{ marginBottom: '14px' }}>
          <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BBBBBB', marginBottom: '4px' }}>
            {vehicle.make}
          </p>
          <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.7rem)', fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400, color: '#0A0A0A', lineHeight: 1.1, margin: 0 }}>
            {vehicle.model}
          </h3>
        </div>

        {/* Specs row */}
        <div style={{ display: 'flex', gap: '18px', marginBottom: '16px' }}>
          {[
            { icon: icons.seats,   val: vehicle.seats,   label: ui.seatsLabel },
            { icon: icons.luggage, val: vehicle.luggage, label: ui.luggageLabel },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#C41E1E', display: 'flex', alignItems: 'center' }}>{s.icon}</span>
              <span style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#888' }}>
                {s.val} {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Features */}
        {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '20px', flex: 1 }}>
          {(vehicle.features[locale] || vehicle.features.en).slice(0, 4).map((f, i) => (
            <span key={i} style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 400, letterSpacing: '0.06em',
              color: '#999',
              backgroundColor: '#F7F7F7',
              border: '1px solid #EFEFEF',
              padding: '4px 10px',
            }}>
              {f}
            </span>
          ))}
          {(vehicle.features[locale] || vehicle.features.en).length > 4 && (
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 400, color: '#C41E1E',
              border: '1px solid rgba(196,30,30,0.15)',
              padding: '4px 10px',
            }}>
              +{(vehicle.features[locale] || vehicle.features.en).length - 4}
            </span>
          )}
        </div> */}

        {/* CTA */}
        <button
          onClick={() => onRequest(vehicle)}
          className="fleet-card-cta"
          style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            backgroundColor: '#0A0A0A',
            color: '#F8F7F4',
            border: 'none', cursor: 'pointer',
            transition: 'background-color 0.25s ease',
            width: '100%',
          }}
          aria-label={`${ui.requestBtn} — ${vehicle.make} ${vehicle.model}`}
        >
          <span style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {ui.requestBtn}
          </span>
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
            <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <style>{`
        .fleet-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08) !important; border-color: #DCDCDC !important; }
        .fleet-card:hover .fleet-card-overlay { opacity: 1 !important; }
        .fleet-card-cta:hover { background-color: #C41E1E !important; }
      `}</style>
    </article>
  )
}

export default function FleetGrid({ locale = 'en' }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const isRTL   = locale === 'ar'
  const ui      = uiText[locale] || uiText.en
  const gridRef = useRef(null)
  const router  = useRouter()

  const filtered = activeFilter === 'all'
    ? fleet
    : fleet.filter(v => v.category === activeFilter)

  const handleFilterChange = (id) => {
    gsap.to(gridRef.current, {
      opacity: 0, y: 10, duration: 0.2, ease: 'power2.in',
      onComplete: () => {
        setActiveFilter(id)
        gsap.fromTo(gridRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
        )
      },
    })
  }

  const handleRequest = (vehicle) => {
    router.push(`/${locale}/contact?vehicle=${vehicle.id}`)
  }

  return (
    <>
      <FleetFilter locale={locale} active={activeFilter} onChange={handleFilterChange} />

      <section
        style={{
          backgroundColor: '#F9F9F9',
          padding: 'clamp(40px, 6vw, 72px) clamp(16px, 5vw, 80px)',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      >
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
            gap: 'clamp(16px, 2vw, 24px)',
          }}
        >
          {filtered.length > 0
            ? filtered.map((v, i) => (
                <VehicleCard
                  key={v.id}
                  vehicle={v}
                  locale={locale}
                  onRequest={handleRequest}
                  index={i}
                />
              ))
            : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '80px 0', color: '#AAAAAA' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 400 }}>
                  {ui.noResults}
                </p>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}