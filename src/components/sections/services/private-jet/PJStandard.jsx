'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
  en: {
    label: 'The Ground Standard',
    heading: 'Private Aviation\nDeserves a Ground\nExperience to Match.',
    body1: 'Private jet travel removes every friction point of commercial aviation. No queues. No terminals. No shared spaces. The moment a passenger lands, that standard should continue uninterrupted onto the ground.',
    body2: 'Most ground transport fails private aviation clients not because the car is wrong but because the coordination is wrong. A vehicle arrives at the commercial terminal. A driver waits in arrivals. The aircraft lands at an FBO on the other side of the airfield. That gap is where the luxury experience ends.',
    body3: 'Limore closes that gap. We coordinate directly with your FBO, your crew, and your tail number. The vehicle is positioned airside before wheels down. You walk from the aircraft to your car without a single unnecessary step.',
    highlight: 'Airside positioning. Zero gap between aircraft and vehicle.',
    img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85',
    imgAlt: 'Private jet tarmac to vehicle — Limore chauffeur standard',
    imgCaption: 'Airside Standard — Limore',
  },
  ar: {
    label: 'المعيار الأرضي',
    heading: 'الطيران الخاص\nيستحق تجربة أرضية\nعلى مستواه.',
    body1: 'تزيل رحلات الطائرات الخاصة كل نقطة احتكاك في الطيران التجاري. لا طوابير. لا صالات. لا مساحات مشتركة. في اللحظة التي يهبط فيها الراكب، يجب أن يستمر ذلك المعيار دون انقطاع على الأرض.',
    body2: 'تفشل معظم وسائل النقل الأرضي في خدمة عملاء الطيران الخاص ليس لأن السيارة خاطئة بل لأن التنسيق خاطئ. تصل مركبة إلى الصالة التجارية. يتهبط الطائرة في مجمع طيران خاص على الجانب الآخر من المطار.',
    body3: 'ليمور تسد هذه الفجوة. ننسق مباشرة مع مجمع الطيران وطاقمك ورقم ذيل طائرتك. المركبة مُوضعة على الجانب الجوي قبل الهبوط. تمشي من الطائرة إلى سيارتك دون خطوة غير ضرورية واحدة.',
    highlight: 'توقع جوي. فجوة صفرية بين الطائرة والمركبة.',
    img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85',
    imgAlt: 'من المدرج إلى المركبة — معيار سائق ليمور',
    imgCaption: 'المعيار الجوي — ليمور',
  },
  fr: {
    label: 'Le Standard Terrestre',
    heading: 'L\'Aviation Privée\nMérite une Expérience\nTerrestre à la Hauteur.',
    body1: 'Le voyage en jet privé supprime chaque point de friction de l\'aviation commerciale. Pas de files. Pas de terminaux. Pas d\'espaces partagés. Au moment où un passager atterrit, ce standard doit continuer sans interruption au sol.',
    body2: 'La plupart des transports terrestres échouent les clients de l\'aviation privée non pas parce que la voiture est mauvaise mais parce que la coordination est mauvaise. Un véhicule arrive au terminal commercial. Un chauffeur attend aux arrivées. L\'aéronef atterrit à un FBO de l\'autre côté du terrain.',
    body3: 'Limore comble cet écart. Nous coordonnons directement avec votre FBO, votre équipage et votre immatriculation. Le véhicule est positionné côté piste avant l\'atterrissage. Vous passez de l\'aéronef à votre voiture sans une seule étape inutile.',
    highlight: 'Positionnement côté piste. Zéro écart entre aéronef et véhicule.',
    img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=85',
    imgAlt: 'Tarmac vers véhicule — standard chauffeur Limore',
    imgCaption: 'Standard Côté Piste — Limore',
  },
}

export default function PJStandard({ locale = 'en' }) {
  const content    = t[locale] || t.en
  const isRTL      = locale === 'ar'
  const sectionRef = useRef(null)
  const textRef    = useRef(null)
  const imgRef     = useRef(null)
  const hlRef      = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: 'top 73%' }

      gsap.fromTo(textRef.current,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: st }
      )
      gsap.fromTo(imgRef.current,
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'power4.inOut', delay: 0.15, scrollTrigger: st }
      )
      gsap.fromTo(hlRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5, scrollTrigger: st }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#FFFFFF', direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <div className="pjs-grid">

        {/* Text column */}
        <div
          ref={textRef}
          style={{
            padding: 'clamp(64px, 9vw, 112px) clamp(24px, 5vw, 72px)',
            opacity: 0,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ width: '36px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
            <span style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif',
              fontWeight: 500, letterSpacing: '0.24em',
              textTransform: 'uppercase', color: '#C41E1E',
            }}>
              {content.label}
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 4rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 400, color: '#0A0A0A',
            lineHeight: 1.03, whiteSpace: 'pre-line',
            letterSpacing: '-0.01em', marginBottom: '32px',
          }}>
            {content.heading}
          </h2>

          {/* Body */}
          {[content.body1, content.body2, content.body3].map((p, i) => (
            <p key={i} style={{
              fontSize: 'clamp(0.88rem, 1.2vw, 0.98rem)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300, color: '#5A5A5A', lineHeight: 1.85,
              marginBottom: i < 2 ? '18px' : '36px',
            }}>
              {p}
            </p>
          ))}

          {/* Highlight */}
          <div
            ref={hlRef}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '14px 20px',
              backgroundColor: '#F7F7F7',
              borderLeft: isRTL ? 'none' : '2px solid #C41E1E',
              borderRight: isRTL ? '2px solid #C41E1E' : 'none',
              opacity: 0,
            }}
          >
            <p style={{
              fontSize: 'clamp(0.88rem, 1.3vw, 1.05rem)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 400, fontStyle: 'italic',
              color: '#0A0A0A', lineHeight: 1.4, margin: 0,
            }}>
              {content.highlight}
            </p>
          </div>
        </div>

        {/* Image column */}
        <div
          ref={imgRef}
          style={{
            position: 'relative', overflow: 'hidden',
            clipPath: 'inset(100% 0 0 0)',
          }}
          className="pjs-img-panel"
        >
          <img
            src={content.img}
            alt={content.imgAlt}
            width={1200} height={1600}
            loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block',
              transition: 'transform 0.8s ease',
            }}
            className="pjs-img"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent 55%)',
            pointerEvents: 'none',
          }} />
          {/* Corner marks */}
          <div style={{
            position: 'absolute', top: '20px',
            right: isRTL ? 'auto' : '20px',
            left: isRTL ? '20px' : 'auto',
            width: '20px', height: '20px',
            borderTop: '1px solid rgba(196,30,30,0.5)',
            borderRight: isRTL ? 'none' : '1px solid rgba(196,30,30,0.5)',
            borderLeft: isRTL ? '1px solid rgba(196,30,30,0.5)' : 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '20px',
            left: isRTL ? 'auto' : '20px',
            right: isRTL ? '20px' : 'auto',
            width: '20px', height: '20px',
            borderBottom: '1px solid rgba(196,30,30,0.5)',
            borderLeft: isRTL ? 'none' : '1px solid rgba(196,30,30,0.5)',
            borderRight: isRTL ? '1px solid rgba(196,30,30,0.5)' : 'none',
          }} />
          <p style={{
            position: 'absolute', bottom: '20px',
            right: isRTL ? 'auto' : '20px',
            left: isRTL ? '20px' : 'auto',
            fontSize: '9px', fontFamily: 'Inter, sans-serif',
            fontWeight: 500, letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.45)',
          }}>
            {content.imgCaption}
          </p>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#EBEBEB' }} />

      <style>{`
        .pjs-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .pjs-grid { grid-template-columns: 1fr 1fr; min-height: 700px; }
        }
        .pjs-img-panel { display: none; }
        @media (min-width: 768px) { .pjs-img-panel { display: block; } }
        .pjs-img-panel:hover .pjs-img { transform: scale(1.03); }
      `}</style>
    </section>
  )
}
