'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────── */
const t = {
    en: {
        eyebrow: 'Trusted By',
        heading: 'The World\'s Most\nRecognised Names',
        sub: 'From the fashion capitals of Milan and Paris to the boardrooms of Dubai and New York - Limore is the mobility partner of choice for brands that accept nothing less than excellence.',
        stat1: '500+', stat1label: 'Global Clients',
        stat2: '40+', stat2label: 'Luxury Brands',
        stat3: '20+', stat3label: 'Events Served',
        tabs: ['All', 'Hospitality', 'Luxury', 'Corporate', 'Aviation', 'Events'],
        cta: 'Become a Client',
    },
    ar: {
        eyebrow: 'يثق بنا',
        heading: 'اكثر الاسماء\nشهرة في العالم',
        sub: 'من عواصم الموضة في ميلانو وباريس الى غرف الاجتماعات في دبي ونيويورك - ليمور هي شريك التنقل المفضل للعلامات التي لا تقبل باقل من التميز.',
        stat1: '500+', stat1label: 'عميل عالمي',
        stat2: '40+', stat2label: 'علامة فاخرة',
        stat3: '20+', stat3label: 'فعالية دولية',
        tabs: ['الكل', 'الضيافة', 'الفاخرة', 'الشركات', 'الطيران', 'الفعاليات'],
        cta: 'كن عميلا',
    },
    fr: {
        eyebrow: 'Ils Nous Font Confiance',
        heading: 'Les Noms Les Plus\nReconnus Au Monde',
        sub: 'Des capitales de la mode de Milan et Paris aux salles de conseil de Dubai et New York - Limore est le partenaire de mobilite de reference pour les marques qui n\'acceptent rien de moins que l\'excellence.',
        stat1: '500+', stat1label: 'Clients Mondiaux',
        stat2: '40+', stat2label: 'Marques Luxe',
        stat3: '20+', stat3label: 'Evenements',
        tabs: ['Tout', 'Hospitalite', 'Luxe', 'Corporate', 'Aviation', 'Evenements'],
        cta: 'Devenir Client',
    },
}

/* ─────────────────────────────────────────────
   CLIENT DATA  — category + SVG logo
───────────────────────────────────────────── */
const CLIENTS = [
    // HOSPITALITY
    {
        category: 'Hospitality',
        name: 'Kerzner Group',
        logo: (
            <svg viewBox="0 0 180 36" fill="none" style={{ width: '120px', height: '24px' }}>
                <text x="0" y="26" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="24" fontWeight="400" letterSpacing="3" fill="currentColor">KERZNER</text>
            </svg>
        ),
    },
    {
        category: 'Hospitality',
        name: 'Meydan Hotels',
        logo: (
            <svg viewBox="0 0 180 36" fill="none" style={{ width: '130px', height: '24px' }}>
                <text x="0" y="26" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="22" fontWeight="400" letterSpacing="2" fill="currentColor">MEYDAN</text>
            </svg>
        ),
    },
    {
        category: 'Hospitality',
        name: 'VOCO Monaco',
        logo: (
            <svg viewBox="0 0 120 36" fill="none" style={{ width: '90px', height: '26px' }}>
                <text x="0" y="26" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="200" letterSpacing="6" fill="currentColor">VOCO</text>
            </svg>
        ),
    },
    {
        category: 'Hospitality',
        name: 'Amazonica',
        logo: (
            <svg viewBox="0 0 200 36" fill="none" style={{ width: '140px', height: '24px' }}>
                <text x="0" y="26" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="22" fontWeight="400" letterSpacing="2" fill="currentColor">AMAZONICA</text>
            </svg>
        ),
    },

    // LUXURY
    {
        category: 'Luxury',
        name: 'Prada',
        logo: (
            <svg viewBox="0 0 120 40" fill="none" style={{ width: '80px', height: '28px' }}>
                <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="300" letterSpacing="8" fill="currentColor">PRADA</text>
            </svg>
        ),
    },
    {
        category: 'Luxury',
        name: 'Gucci',
        logo: (
            <svg viewBox="0 0 120 40" fill="none" style={{ width: '80px', height: '28px' }}>
                <text x="0" y="28" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="24" fontWeight="400" letterSpacing="5" fill="currentColor">GUCCI</text>
            </svg>
        ),
    },
    {
        category: 'Luxury',
        name: 'Louis Vuitton',
        logo: (
            <svg viewBox="0 0 220 40" fill="none" style={{ width: '150px', height: '24px' }}>
                <text x="0" y="26" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="300" letterSpacing="4" fill="currentColor">LOUIS VUITTON</text>
            </svg>
        ),
    },
    {
        category: 'Luxury',
        name: 'Chanel',
        logo: (
            <svg viewBox="0 0 160 40" fill="none" style={{ width: '110px', height: '28px' }}>
                {/* Interlocking CC mark */}
                <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="300" letterSpacing="6" fill="currentColor">CHANEL</text>
            </svg>
        ),
    },
    {
        category: 'Luxury',
        name: 'Piaget',
        logo: (
            <svg viewBox="0 0 140 40" fill="none" style={{ width: '95px', height: '26px' }}>
                <text x="0" y="26" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="22" fontWeight="400" letterSpacing="5" fill="currentColor">PIAGET</text>
            </svg>
        ),
    },
    {
        category: 'Luxury',
        name: 'Jimmy Choo',
        logo: (
            <svg viewBox="0 0 200 40" fill="none" style={{ width: '140px', height: '24px' }}>
                <text x="0" y="26" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="20" fontWeight="400" letterSpacing="3" fill="currentColor">JIMMY CHOO</text>
            </svg>
        ),
    },

    // CORPORATE
    {
        category: 'Corporate',
        name: 'Denevo Corporate',
        logo: (
            <svg viewBox="0 0 220 36" fill="none" style={{ width: '150px', height: '22px' }}>
                <text x="0" y="24" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="300" letterSpacing="3" fill="currentColor">DENEVO</text>
            </svg>
        ),
    },
    {
        category: 'Corporate',
        name: 'Liberty Capital',
        logo: (
            <svg viewBox="0 0 220 36" fill="none" style={{ width: '150px', height: '22px' }}>
                <text x="0" y="24" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="300" letterSpacing="2" fill="currentColor">LIBERTY CAPITAL</text>
            </svg>
        ),
    },
    {
        category: 'Corporate',
        name: 'Dubai Racing Club',
        logo: (
            <svg viewBox="0 0 230 36" fill="none" style={{ width: '160px', height: '22px' }}>
                <text x="0" y="24" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="300" letterSpacing="2" fill="currentColor">DUBAI RACING CLUB</text>
            </svg>
        ),
    },
    {
        category: 'Corporate',
        name: 'Reliance Middle East',
        logo: (
            <svg viewBox="0 0 260 36" fill="none" style={{ width: '175px', height: '22px' }}>
                <text x="0" y="24" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="300" letterSpacing="2" fill="currentColor">RELIANCE MIDDLE EAST</text>
            </svg>
        ),
    },

    // AVIATION
    {
        category: 'Aviation',
        name: 'Jetex',
        logo: (
            <svg viewBox="0 0 110 40" fill="none" style={{ width: '80px', height: '28px' }}>
                <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" letterSpacing="2" fill="currentColor">JETEX</text>
            </svg>
        ),
    },
    {
        category: 'Aviation',
        name: 'Hotac',
        logo: (
            <svg viewBox="0 0 110 40" fill="none" style={{ width: '80px', height: '26px' }}>
                <text x="0" y="26" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="300" letterSpacing="4" fill="currentColor">HOTAC</text>
            </svg>
        ),
    },
    {
        category: 'Aviation',
        name: 'UAS',
        logo: (
            <svg viewBox="0 0 80 40" fill="none" style={{ width: '55px', height: '28px' }}>
                <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" letterSpacing="4" fill="currentColor">UAS</text>
            </svg>
        ),
    },
    {
        category: 'Aviation',
        name: 'JET365',
        logo: (
            <svg viewBox="0 0 120 40" fill="none" style={{ width: '85px', height: '26px' }}>
                <text x="0" y="26" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="300" letterSpacing="3" fill="currentColor">JET365</text>
            </svg>
        ),
    },

    // EVENTS
    {
        category: 'Events',
        name: 'Formula 1',
        logo: (
            <svg viewBox="0 0 160 40" fill="none" style={{ width: '110px', height: '28px' }}>
                <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="19" fontWeight="700" letterSpacing="1" fill="currentColor">FORMULA 1</text>
            </svg>
        ),
    },
    {
        category: 'Events',
        name: 'Dubai Airshow',
        logo: (
            <svg viewBox="0 0 210 36" fill="none" style={{ width: '145px', height: '22px' }}>
                <text x="0" y="24" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="300" letterSpacing="2" fill="currentColor">DUBAI AIRSHOW</text>
            </svg>
        ),
    },
    {
        category: 'Events',
        name: 'IDEX',
        logo: (
            <svg viewBox="0 0 90 40" fill="none" style={{ width: '65px', height: '28px' }}>
                <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" letterSpacing="4" fill="currentColor">IDEX</text>
            </svg>
        ),
    },
    {
        category: 'Events',
        name: 'COP 28',
        logo: (
            <svg viewBox="0 0 110 40" fill="none" style={{ width: '80px', height: '26px' }}>
                <text x="0" y="26" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="300" letterSpacing="4" fill="currentColor">COP 28</text>
            </svg>
        ),
    },
    {
        category: 'Events',
        name: 'Milan Fashion Week',
        logo: (
            <svg viewBox="0 0 240 36" fill="none" style={{ width: '165px', height: '22px' }}>
                <text x="0" y="24" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="16" fontWeight="400" letterSpacing="2" fill="currentColor">MILAN FASHION WEEK</text>
            </svg>
        ),
    },
    {
        category: 'Events',
        name: 'FIFA',
        logo: (
            <svg viewBox="0 0 80 40" fill="none" style={{ width: '55px', height: '28px' }}>
                <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" letterSpacing="4" fill="currentColor">FIFA</text>
            </svg>
        ),
    },
]

const TAB_KEYS = ['All', 'Hospitality', 'Luxury', 'Corporate', 'Aviation', 'Events']

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ClientSection({ locale = 'en' }) {
    const content = t[locale] || t.en
    const isRTL = locale === 'ar'

    const [activeTab, setActiveTab] = useState(0)

    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const statsRef = useRef(null)
    const marqueeRef1 = useRef(null)
    const marqueeRef2 = useRef(null)
    const gridRef = useRef(null)
    const anim1 = useRef(null)
    const anim2 = useRef(null)

    const filtered =
        activeTab === 0
            ? CLIENTS
            : CLIENTS.filter((c) => c.category === TAB_KEYS[activeTab])

    const half = Math.ceil(CLIENTS.length / 2)
    const row1 = CLIENTS.slice(0, half)
    const row2 = CLIENTS.slice(half)

    /* entrance */
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headingRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
                }
            )
            gsap.fromTo(statsRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
                    scrollTrigger: { trigger: statsRef.current, start: 'top 80%' }
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    /* marquee */
    useEffect(() => {
        if (!marqueeRef1.current || !marqueeRef2.current) return
      
        anim1.current && anim1.current.kill()
        anim2.current && anim2.current.kill()
      
        // Row 1 — scroll left
        const w1 = marqueeRef1.current.scrollWidth / 3
        gsap.set(marqueeRef1.current, { x: 0 })
        anim1.current = gsap.to(marqueeRef1.current, {
          x: -w1,
          duration: 40,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % w1),
          },
        })
      
        // Row 2 — scroll right (start offset so it's not empty)
        const w2 = marqueeRef2.current.scrollWidth / 3
        gsap.set(marqueeRef2.current, { x: -w2 })
        anim2.current = gsap.to(marqueeRef2.current, {
          x: 0,
          duration: 50,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % w2),
          },
        })
      
        return () => {
          anim1.current && anim1.current.kill()
          anim2.current && anim2.current.kill()
        }
      }, [])

    /* grid fade on tab change */
    useEffect(() => {
        if (!gridRef.current) return
        gsap.fromTo(gridRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
        )
    }, [activeTab])

    const localePath = (href) => '/' + locale + href

    return (
        <section
            ref={sectionRef}
            style={{
                backgroundColor: '#FFFFFF',
                overflow: 'hidden',
                direction: isRTL ? 'rtl' : 'ltr',
                position: 'relative',
            }}
        >

            {/* ── Decorative corner accents ── */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '120px', pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', top: '40px', left: '40px', width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
                <div style={{ position: 'absolute', top: '40px', left: '40px', width: '1px', height: '40px', backgroundColor: '#C41E1E' }} />
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', top: '40px', right: '40px', width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
                <div style={{ position: 'absolute', top: '40px', right: '40px', width: '1px', height: '40px', backgroundColor: '#C41E1E' }} />
            </div>

            {/* ── HEADER ── */}
            <div className="container-default" style={{ paddingTop: '100px', paddingBottom: '72px', position: 'relative', zIndex: 1 }}>
                <div ref={headingRef}>

                    {/* Eyebrow */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <div style={{ width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
                        <span style={{
                            fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
                            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E',
                        }}>
                            {content.eyebrow}
                        </span>
                    </div>

                    {/* Heading + sub side by side */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '32px',
                        alignItems: 'end',
                    }} className="client-header-grid">
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                            fontWeight: 400, color: '#0A0A0A',
                            lineHeight: 1.0, letterSpacing: '0.01em',
                            whiteSpace: 'pre-line',
                        }}>
                            {content.heading}
                        </h2>
                        <div>
                            <div style={{ width: '1px', height: '60px', backgroundColor: '#E5E4E0', marginBottom: '24px' }} className="client-divider" />
                            <p style={{
                                fontSize: '15px', fontFamily: 'Inter, sans-serif',
                                fontWeight: 300, color: '#6B6B6B', lineHeight: 1.8,
                                maxWidth: '400px',
                            }}>
                                {content.sub}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div ref={statsRef} className="client-stats">
                    {[
                        { value: content.stat1, label: content.stat1label },
                        { value: content.stat2, label: content.stat2label },
                        { value: content.stat3, label: content.stat3label },
                    ].map((s, i) => (
                        <div key={i} style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            padding: '32px 24px', borderLeft: i > 0 ? '1px solid #E5E4E0' : 'none',
                            flex: 1,
                        }}>
                            <span style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontFamily: 'Cormorant Garamond, Georgia, serif',
                                fontWeight: 400, color: '#0A0A0A', lineHeight: 1,
                            }}>
                                {s.value}
                            </span>
                            <span style={{
                                fontSize: '10px', fontFamily: 'Inter, sans-serif',
                                fontWeight: 500, letterSpacing: '0.18em',
                                textTransform: 'uppercase', color: '#ADADAD',
                                marginTop: '8px',
                            }}>
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── MARQUEE STRIP ── */}
            <div style={{
                backgroundColor: '#F8F7F4',
                borderTop: '1px solid #EBEBEB',
                borderBottom: '1px solid #EBEBEB',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1,
            }}>

                {/* Fade edges */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, bottom: 0, width: '120px',
                    background: 'linear-gradient(to right, #F8F7F4, transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', top: 0, right: 0, bottom: 0, width: '120px',
                    background: 'linear-gradient(to left, #F8F7F4, transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />

                {/* Row 1 */}
                <div
                    style={{ overflow: 'hidden', borderBottom: '1px solid #EBEBEB' }}
                    onMouseEnter={() => anim1.current && anim1.current.pause()}
                    onMouseLeave={() => anim1.current && anim1.current.resume()}
                >
                    <div ref={marqueeRef1} style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
                        {[...row1, ...row1, ...row1].map((c, i) => (
                            <MarqueeItem key={i} client={c} />
                        ))}
                    </div>
                </div>

                {/* Row 2 */}
                <div
                    style={{ overflow: 'hidden' }}
                    onMouseEnter={() => anim2.current && anim2.current.pause()}
                    onMouseLeave={() => anim2.current && anim2.current.resume()}
                >
                    <div ref={marqueeRef2} style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
                        {[...row2, ...row2, ...row2].map((c, i) => (
                            <MarqueeItem key={i} client={c} reverse />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── TABS + GRID ── */}
            <div className="container-default" style={{ paddingTop: '80px', paddingBottom: '100px', position: 'relative', zIndex: 1 }}>

                {/* Tab label */}
                <p style={{
                    fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: '#ADADAD', marginBottom: '20px',
                }}>
                    Filter by sector
                </p>

                {/* Tabs */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', marginBottom: '56px', borderBottom: '1px solid #E5E4E0' }}>
                    {content.tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className="cs-tab"
                            style={{
                                padding: '12px 24px',
                                fontSize: '12px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: activeTab === i ? 500 : 400,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                border: 'none',
                                borderBottom: activeTab === i ? '2px solid #C41E1E' : '2px solid transparent',
                                backgroundColor: 'transparent',
                                color: activeTab === i ? '#0A0A0A' : '#ADADAD',
                                transition: 'all 0.25s ease',
                                marginBottom: '-1px',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Grid of logos */}
                <div ref={gridRef} className="cs-logo-grid">
                    {filtered.map((client, i) => (
                        <LogoCard key={i} client={client} index={i} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{
                    marginTop: '72px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
                    borderTop: '1px solid #E5E4E0', paddingTop: '48px',
                    textAlign: 'center',
                }}>
                    <p style={{
                        fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 300,
                        color: '#ADADAD', letterSpacing: '0.04em',
                    }}>
                        Join an elite portfolio of global clients
                    </p>
                    <a
                        href={localePath('/contact')}
                        className="cs-cta"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '14px 36px', border: '1px solid #0A0A0A',
                            color: '#0A0A0A', fontSize: '12px',
                            fontFamily: 'Inter, sans-serif', fontWeight: 500,
                            letterSpacing: '0.15em', textTransform: 'uppercase',
                            textDecoration: 'none', transition: 'all 0.3s ease',
                        }}
                    >
                        {content.cta} →
                    </a>
                </div>

            </div>

            {/* ── Bottom corner accents ── */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '120px', height: '120px', pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '1px', height: '40px', backgroundColor: '#C41E1E' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '120px', height: '120px', pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '40px', height: '1px', backgroundColor: '#C41E1E' }} />
                <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '1px', height: '40px', backgroundColor: '#C41E1E' }} />
            </div>

            <style>{`
        .client-header-grid {
          margin-bottom: 60px;
        }
        @media (min-width: 1024px) {
          .client-header-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 80px !important;
          }
          .client-divider { display: block !important; }
        }
        @media (max-width: 1023px) {
          .client-divider { display: none !important; }
        }
        .client-stats {
          display: flex;
          border: 1px solid #E5E4E0;
          overflow: hidden;
          max-width: 600px;
        }
        .cs-tab:hover { color: #0A0A0A !important; }
        .cs-logo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background-color: #EBEBEB;
          border: 1px solid #EBEBEB;
        }
        @media (min-width: 640px) {
          .cs-logo-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .cs-logo-grid { grid-template-columns: repeat(5, 1fr); }
        }
        .logo-card {
          background-color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          min-height: 120px;
          position: relative;
          overflow: hidden;
          transition: background-color 0.3s ease;
          cursor: default;
        }
        .logo-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background-color: #C41E1E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .logo-card:hover {
          background-color: #FAFAF9;
        }
        .logo-card:hover::after {
          transform: scaleX(1);
        }
        .logo-card:hover .logo-svg {
          opacity: 1 !important;
          transform: translateY(-2px) !important;
        }
        .logo-card:hover .logo-cat-tag {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .logo-svg {
          transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1) !important;
        }
        .logo-cat-tag {
          transition: opacity 0.3s ease, transform 0.3s ease !important;
        }
        .marquee-logo-item {
          display: flex;
          align-items: center;
          padding: 20px 48px;
          border-right: 1px solid #E5E4E0;
          cursor: default;
          transition: background-color 0.25s ease;
        }
        .marquee-logo-item:hover { background-color: #FFFFFF; }
        .marquee-logo-item:hover .mq-logo { opacity: 1 !important; }
        .mq-logo {
          transition: opacity 0.25s ease;
        }
        .cs-cta:hover {
          background-color: #0A0A0A !important;
          color: #F8F7F4 !important;
        }
      `}</style>
        </section>
    )
}

/* ─────────────────────────────────────────────
   MARQUEE ITEM
───────────────────────────────────────────── */
function MarqueeItem({ client, reverse }) {
    return (
        <div className="marquee-logo-item">
            <div
                className="mq-logo"
                style={{
                    color: '#0A0A0A',
                    opacity: reverse ? 0.25 : 0.45,
                    display: 'flex', alignItems: 'center',
                }}
            >
                {client.logo}
            </div>
            <div style={{
                width: '4px', height: '4px', borderRadius: '50%',
                backgroundColor: '#C41E1E', marginLeft: '48px', flexShrink: 0,
                opacity: 0.4,
            }} />
        </div>
    )
}

/* ─────────────────────────────────────────────
   LOGO CARD (filtered grid)
───────────────────────────────────────────── */
const CAT_LABEL_COLOR = {
    Hospitality: '#7A5C1E',
    Luxury: '#5C3D7A',
    Corporate: '#1A4D7A',
    Aviation: '#1A6B52',
    Events: '#7A1A2A',
}

function LogoCard({ client, index }) {
    return (
        <div className="logo-card">
            {/* Logo SVG */}
            <div
                className="logo-svg"
                style={{
                    color: '#0A0A0A',
                    opacity: 0.55,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'translateY(0)',
                }}
            >
                {client.logo}
            </div>

            {/* Category tag — hidden, reveals on hover */}
            <span
                className="logo-cat-tag"
                style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(4px)',
                    fontSize: '9px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: CAT_LABEL_COLOR[client.category] || '#C41E1E',
                    opacity: 0,
                    whiteSpace: 'nowrap',
                }}
            >
                {client.category}
            </span>
        </div>
    )
}