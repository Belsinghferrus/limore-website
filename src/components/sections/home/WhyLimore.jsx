'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const t = {
    en: {
        label: 'Why Limore',
        heading: 'The Standard That\nSets Us Apart',
        sub: 'Built for those who cannot afford disruption. Every system, every process, every person — engineered for one outcome: flawless delivery.',
        points: [
            {
                number: '01',
                title: 'One Client,\nOne Manager',
                description: 'Every client is assigned a dedicated account manager available around the clock. You always deal with the same person — no call centres, no transfers.',
                stat: '100%',
                statLabel: 'Direct Access',
            },
            {
                number: '02',
                title: 'Global Standardised\nService',
                description: 'Whether you are in Dubai, London or New York — you receive the same Limore standard. No compromise across borders, no variation in quality.',
                stat: '60+',
                statLabel: 'Cities, One Standard',
            },
            {
                number: '03',
                title: '24/7\nOperations',
                description: 'Our operations centre never closes. Early departures, late arrivals, last-minute changes — we are always ready, always reachable.',
                stat: '24/7',
                statLabel: 'Always On',
            },
            {
                number: '04',
                title: 'No Failure\nGuarantee',
                description: 'If we commit to a booking, we deliver it. Our backup fleet and driver redundancy means no client is ever left waiting.',
                stat: '0',
                statLabel: 'Failures To Date',
            },
        ],
    },
    ar: {
        label: 'لماذا ليمور',
        heading: 'المعيار الذي\nيميزنا عن الآخرين',
        sub: 'مصمم لمن لا يتحملون الاضطراب. كل نظام، كل عملية، كل شخص — مهندَس لنتيجة واحدة: التسليم المثالي.',
        points: [
            {
                number: '01',
                title: 'عميل واحد\nمدير واحد',
                description: 'يُخصص لكل عميل مدير حساب متاح على مدار الساعة. ستتعامل دائما مع نفس الشخص.',
                stat: '100%',
                statLabel: 'وصول مباشر',
            },
            {
                number: '02',
                title: 'خدمة موحدة\nعالميا',
                description: 'سواء كنت في دبي أو لندن أو نيويورك، ستحصل على نفس معيار ليمور دون أي تنازل.',
                stat: '8',
                statLabel: 'مدن، معيار واحد',
            },
            {
                number: '03',
                title: 'عمليات مستمرة\n24/7',
                description: 'مركز عملياتنا لا يغلق أبدا. مغادرات مبكرة، وصول متأخر، تغييرات اللحظة الأخيرة — نحن دائما مستعدون.',
                stat: '24/7',
                statLabel: 'دائما متاح',
            },
            {
                number: '04',
                title: 'ضمان\nعدم الفشل',
                description: 'إذا التزمنا بحجز، فإننا ننفذه. أسطولنا الاحتياطي يعني أن لا عميل ينتظر أبدا.',
                stat: '0',
                statLabel: 'إخفاقات حتى الآن',
            },
        ],
    },
    fr: {
        label: 'Pourquoi Limore',
        heading: 'La Norme Qui\nNous Distingue',
        sub: 'Conçu pour ceux qui ne peuvent pas se permettre les perturbations. Chaque système, chaque processus — pour un seul résultat : une exécution parfaite.',
        points: [
            {
                number: '01',
                title: 'Un Client,\nUn Manager',
                description: 'Chaque client dispose d\'un responsable de compte dédié, disponible à toute heure. Vous traitez toujours avec la même personne.',
                stat: '100%',
                statLabel: 'Accès Direct',
            },
            {
                number: '02',
                title: 'Service Mondial\nStandardisé',
                description: 'Dubai, Londres ou New York — vous recevez le même standard Limore. Aucun compromis aux frontières.',
                stat: '8',
                statLabel: 'Villes, Un Standard',
            },
            {
                number: '03',
                title: 'Opérations\n24/7',
                description: 'Notre centre opérationnel ne ferme jamais. Départs matinaux, arrivées tardives — nous sommes toujours prêts.',
                stat: '24/7',
                statLabel: 'Toujours Disponible',
            },
            {
                number: '04',
                title: 'Garantie sans\nDéfaillance',
                description: 'Si nous confirmons une réservation, nous l\'honorons. Notre flotte de secours garantit qu\'aucun client n\'attend jamais.',
                stat: '0',
                statLabel: 'Défaillances à ce jour',
            },
        ],
    },
}

export default function WhyLimore({ locale = 'en' }) {
    const content = t[locale] || t.en
    const isRTL = locale === 'ar'

    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const lineRef = useRef(null)
    const itemRefs = useRef([])
    const statRefs = useRef([])
    const numberRefs = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* ── Header line draw ── */
            gsap.fromTo(lineRef.current,
                { scaleX: 0, transformOrigin: 'left center' },
                {
                    scaleX: 1, duration: 1.2, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
                }
            )

            /* ── Header fade up ── */
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
                }
            )

            /* ── Each card ── */
            itemRefs.current.forEach((item, i) => {
                if (!item) return

                /* Card slide up */
                gsap.fromTo(item,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1, y: 0,
                        duration: 0.9,
                        ease: 'power3.out',
                        delay: i * 0.14,
                        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
                    }
                )

                /* Number count-up (for numeric stats) */
            /* Number count-up (for numeric stats) */
const statEl = statRefs.current[i]
if (statEl) {
  const raw = content.points[i].stat
  const isNumeric = /^\d+$/.test(raw)
  if (isNumeric) {
    const counter = { val: 0 }
    gsap.to(counter, {
      val: parseInt(raw, 10),
      duration: 1.6,
      ease: 'power2.out',
      delay: i * 0.14 + 0.3,
      onUpdate: () => {
        if (statRefs.current[i]) {
          statRefs.current[i].textContent = Math.round(counter.val).toString()
        }
      },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
      },
    })
  }
}
            })

            /* ── Vertical dividers draw in ── */
            const dividers = sectionRef.current.querySelectorAll('.wl-divider')
            gsap.fromTo(dividers,
                { scaleY: 0, transformOrigin: 'top center' },
                {
                    scaleY: 1, duration: 1.4, ease: 'power3.out', stagger: 0.12,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
                }
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            style={{
                backgroundColor: '#0A0A0A',
                direction: isRTL ? 'rtl' : 'ltr',
                overflow: 'hidden',
            }}
        >

            {/* ── HEADER BAND — full width ── */}
            <div
                ref={headerRef}
                style={{
                    borderBottom: '1px solid #161616',
                    padding: 'clamp(56px, 8vw, 100px) clamp(24px, 5vw, 80px) clamp(40px, 6vw, 72px)',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '32px',
                    maxWidth: '100%',
                }}
                className="wl-header"
            >
                <div>
                    {/* Label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <div
                            ref={lineRef}
                            style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E', flexShrink: 0 }}
                        />
                        <span style={{
                            fontSize: '11px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 500,
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: '#C41E1E',
                        }}>
                            {content.label}
                        </span>
                    </div>

                    <div className="wl-header-inner">
                        {/* Heading */}
                        <h2 style={{
                            fontSize: 'clamp(2.6rem, 5vw, 5rem)',
                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                            fontWeight: 400,
                            color: '#F8F7F4',
                            lineHeight: 1.02,
                            whiteSpace: 'pre-line',
                            letterSpacing: '0.01em',
                        }}>
                            {content.heading}
                        </h2>

                        {/* Sub text */}
                        <p style={{
                            fontSize: '15px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 300,
                            color: 'rgba(248,247,244,0.45)',
                            lineHeight: 1.85,
                            maxWidth: '440px',
                            alignSelf: 'flex-end',
                        }}>
                            {content.sub}
                        </p>
                    </div>
                </div>
            </div>

            {/* ── 4 COLUMNS — full width, no container ── */}
            <div className="wl-grid">
                {content.points.map((point, i) => (
                    <div
                        key={i}
                        ref={(el) => (itemRefs.current[i] = el)}
                        className="wl-card"
                        style={{ position: 'relative' }}
                    >
                        {/* Vertical right-border divider (not on last) */}
                        {i < content.points.length - 1 && (
                            <div
                                className="wl-divider"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '1px',
                                    height: '100%',
                                    backgroundColor: '#161616',
                                }}
                            />
                        )}

                        {/* Number */}
                        <span style={{
                            display: 'block',
                            fontSize: '11px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 500,
                            letterSpacing: '0.2em',
                            color: '#C41E1E',
                            marginBottom: '28px',
                        }}>
                            {point.number}
                        </span>

                        {/* Title */}
                        <h3 style={{
                            fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                            fontWeight: 400,
                            color: '#F8F7F4',
                            lineHeight: 1.1,
                            whiteSpace: 'pre-line',
                            marginBottom: '20px',
                            letterSpacing: '0.02em',
                        }}>
                            {point.title}
                        </h3>

                        {/* Thin separator */}
                        <div style={{
                            width: '24px',
                            height: '1px',
                            backgroundColor: '#C41E1E',
                            marginBottom: '20px',
                            opacity: 0.6,
                        }} />

                        {/* Description */}
                        <p style={{
                            fontSize: '13.5px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 300,
                            color: 'rgba(248,247,244,0.45)',
                            lineHeight: 1.8,
                            flexGrow: 1,
                        }}>
                            {point.description}
                        </p>

                        {/* Stat block — bottom of card */}
                        <div style={{
                            marginTop: '40px',
                            paddingTop: '24px',
                            borderTop: '1px solid #161616',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            gap: '8px',
                        }}>
                            <p
                                ref={(el) => (statRefs.current[i] = el)}
                                style={{
                                    fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
                                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                                    fontWeight: 400,
                                    color: '#F8F7F4',
                                    lineHeight: 1,
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                {point.stat}
                            </p>
                            <p style={{
                                fontSize: '9px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: 'rgba(248,247,244,0.28)',
                                textAlign: isRTL ? 'left' : 'right',
                                lineHeight: 1.4,
                                maxWidth: '80px',
                            }}>
                                {point.statLabel}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            <style>{`
        .wl-header-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 1024px) {
          .wl-header-inner {
            grid-template-columns: 1fr 1fr;
            align-items: end;
            gap: 80px;
          }
          .wl-header {
            padding-bottom: clamp(40px, 6vw, 72px) !important;
          }
        }
        .wl-grid {
          display: grid;
          grid-template-columns: 1fr;
          border-bottom: 1px solid #161616;
        }
        @media (min-width: 640px) {
          .wl-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .wl-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .wl-card {
          padding: clamp(32px, 4vw, 56px) clamp(24px, 3.5vw, 48px);
          border-top: 1px solid #161616;
          display: flex;
          flex-direction: column;
          transition: background-color 0.4s ease;
        }
        .wl-card:hover {
          background-color: rgba(255,255,255,0.02);
        }
        .wl-card:hover .wl-divider {
          background-color: #C41E1E;
          transition: background-color 0.4s ease;
        }
      `}</style>
        </section>
    )
}