'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const t = {
  en: {
    category: 'Service',
    label: 'Roadshows and Events',
    eyebrow: 'Ground Transport for High-Stakes Events',
    line1: 'Every Detail.',
    line2: 'Every City.',
    line3: 'On Schedule.',
    sub: 'From one-city product launches to month-long multi-country financial roadshows, Limore manages ground transport at the level your event demands.',
    cta: 'Plan Your Event',
    ctaSecondary: 'View Fleet',
    tag1: 'Financial Roadshows',
    tag2: 'Product Launches',
    tag3: 'Investor Days',
    tag4: 'Gala Transfers',
  },
  ar: {
    category: 'الخدمة',
    label: 'جولات الترويج والفعاليات',
    eyebrow: 'النقل البري للفعاليات عالية المخاطر',
    line1: 'كل تفصيل.',
    line2: 'كل مدينة.',
    line3: 'في الموعد.',
    sub: 'من إطلاق المنتجات في مدينة واحدة إلى جولات ترويج مالي متعددة الدول، تدير ليمور النقل البري بالمستوى الذي تتطلبه فعاليتك.',
    cta: 'خطط لفعاليتك',
    ctaSecondary: 'عرض الأسطول',
    tag1: 'جولات ترويج مالي',
    tag2: 'إطلاق المنتجات',
    tag3: 'أيام المستثمرين',
    tag4: 'نقل حفلات الغالا',
  },
  fr: {
    category: 'Service',
    label: 'Roadshows et Événements',
    eyebrow: 'Transport Terrestre pour Événements à Fort Enjeu',
    line1: 'Chaque Détail.',
    line2: 'Chaque Ville.',
    line3: 'Dans les Temps.',
    sub: "Des lancements produit dans une seule ville aux roadshows financiers multi-pays d'un mois, Limore gère le transport terrestre au niveau qu'exige votre événement.",
    cta: 'Planifier votre Événement',
    ctaSecondary: 'Voir la Flotte',
    tag1: 'Roadshows Financiers',
    tag2: 'Lancements Produits',
    tag3: 'Journées Investisseurs',
    tag4: 'Transferts Gala',
  },
}

export default function RWHero({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'
  const lp      = (href) => `/${locale}${href}`

  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const breadRef   = useRef(null)
  const eyebrowRef = useRef(null)
  const linesRef   = useRef([])
  const tagsRef    = useRef(null)
  const subRef     = useRef(null)
  const ctaRef     = useRef(null)
  const scrollRef  = useRef(null)
  const metaRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background image entrance
      gsap.fromTo(
        imgRef.current,
        { scale: 1.08, filter: 'brightness(0.3)' },
        { scale: 1, filter: 'brightness(0.6)', duration: 2.6, ease: 'power2.out' }
      )

      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(
        breadRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
      .fromTo(
        eyebrowRef.current,
        { opacity: 0, letterSpacing: '0.5em' },
        { opacity: 1, letterSpacing: '0.22em', duration: 0.8, ease: 'power3.out' },
        '-=0.2'
      )

      linesRef.current.forEach((el, i) => {
        if (!el) return
        tl.fromTo(
          el,
          { yPercent: 105, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.95, ease: 'power4.out' },
          i === 0 ? '-=0.3' : '-=0.72'
        )
      })

      tl.fromTo(
        tagsRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.35'
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.35'
      )
      .fromTo(
        metaRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.3'
      )

      // Looping scroll dot
      gsap.to('.rwh-scroll-dot', {
        y: 22,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'power1.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [locale])

  const tags  = [content.tag1, content.tag2, content.tag3, content.tag4]
  const lines = [content.line1, content.line2, content.line3]

  return (
    <section
      ref={sectionRef}
      className="rwh-section"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      aria-label={content.label}
    >
      {/* ── Background ── */}
      <div className="rwh-bg">
        <img
          ref={imgRef}
          src="/images/event2.jpg"
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="rwh-bg-img"
        />
      </div>

      {/* ── Gradient overlays ── */}
      <div className="rwh-overlay-top"    aria-hidden="true" />
      <div className="rwh-overlay-bottom" aria-hidden="true" />
      <div className="rwh-overlay-side"   aria-hidden="true" />

      {/* ── Decorative rules ── */}
      <div className="rwh-h-rule" aria-hidden="true" />
      <div className={`rwh-v-rule ${isRTL ? 'rwh-v-rule-rtl' : ''}`} aria-hidden="true" />

      {/* ── Main content ── */}
      <div className="rwh-content">

        {/* Breadcrumb */}
        <nav
          ref={breadRef}
          className="rwh-breadcrumb"
          aria-label="Breadcrumb"
          style={{ opacity: 0 }}
        >
          {[
            { label: 'Limore', href: '/' },
            { label: content.category, href: '/services' },
          ].map((c, i) => (
            <span key={i} className="rwh-breadcrumb-item">
              <Link href={lp(c.href)} className="rwh-breadcrumb-link">
                {c.label}
              </Link>
              <span className="rwh-breadcrumb-sep" aria-hidden="true">›</span>
            </span>
          ))}
          <span className="rwh-breadcrumb-current">{content.label}</span>
        </nav>

        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          className="rwh-eyebrow"
          style={{ opacity: 0 }}
        >
          {content.eyebrow}
        </p>

        {/* Headline */}
        <div className="rwh-headline-wrap">
          {lines.map((line, i) => (
            <div key={i} className="rwh-line-clip">
              <h1
                ref={(el) => (linesRef.current[i] = el)}
                className={`rwh-line rwh-line-${i}`}
                style={{ opacity: 0 }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div
          ref={tagsRef}
          className="rwh-tags"
          style={{ opacity: 0 }}
        >
          {tags.map((tag, i) => (
            <span key={i} className={`rwh-tag ${i === 0 ? 'rwh-tag-accent' : ''}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom row: sub + CTA */}
        <div className="rwh-bottom">
          <p
            ref={subRef}
            className="rwh-sub"
            style={{ opacity: 0 }}
          >
            {content.sub}
          </p>

          <div
            ref={ctaRef}
            className="rwh-cta-group"
            style={{ opacity: 0 }}
          >
            <Link href={lp('/contact')} className="rwh-btn-primary">
              {content.cta}
              <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
                <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link href={lp('/fleet')} className="rwh-btn-ghost">
              {content.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Meta: count indicator */}
        <div
          ref={metaRef}
          className="rwh-meta"
          style={{ opacity: 0 }}
          aria-hidden="true"
        >
          <span className="rwh-meta-num">04</span>
          <span className="rwh-meta-label">Event categories managed</span>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        ref={scrollRef}
        className={`rwh-scroll ${isRTL ? 'rwh-scroll-rtl' : ''}`}
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        <div className="rwh-scroll-track">
          <div className="rwh-scroll-dot" />
        </div>
        <span className="rwh-scroll-label">Scroll</span>
      </div>

      <style>{`
        /* ── Section ── */
        .rwh-section {
          position: relative;
          width: 100%;
          min-height: 100svh;
          overflow: hidden;
          background: #050505;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        /* ── Background ── */
        .rwh-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .rwh-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
          display: block;
        }

        /* ── Overlays ── */
        .rwh-overlay-top {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            170deg,
            rgba(5,5,5,0.95) 0%,
            rgba(5,5,5,0.72) 40%,
            rgba(5,5,5,0.2) 100%
          );
        }
        .rwh-overlay-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 55%;
          z-index: 2;
          background: linear-gradient(to top, #050505 0%, transparent 100%);
          pointer-events: none;
        }
        .rwh-overlay-side {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to right,
            rgba(5,5,5,0.7) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        /* ── Decorative rules ── */
        .rwh-h-rule {
          position: absolute;
          top: 80px; left: 0; right: 0;
          height: 1px;
          background: rgba(248,247,244,0.05);
          z-index: 3;
        }
        .rwh-v-rule {
          display: none;
        }
        @media (min-width: 1280px) {
          .rwh-v-rule {
            display: block;
            position: absolute;
            top: 80px; bottom: 0;
            right: clamp(48px, 7vw, 120px);
            width: 1px;
            background: rgba(248,247,244,0.04);
            z-index: 3;
          }
          .rwh-v-rule-rtl {
            right: auto;
            left: clamp(48px, 7vw, 120px);
          }
        }

        /* ── Content wrapper ── */
        .rwh-content {
          position: relative;
          z-index: 5;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(96px, 12vw, 148px)
                   clamp(24px, 6vw, 96px)
                   clamp(56px, 8vh, 88px);
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
        }

        /* ── Breadcrumb ── */
        .rwh-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px 6px;
          margin-bottom: 28px;
        }
        .rwh-breadcrumb-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .rwh-breadcrumb-link {
          font-size: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(248,247,244,0.22);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .rwh-breadcrumb-link:hover {
          color: rgba(248,247,244,0.55);
        }
        .rwh-breadcrumb-sep {
          color: rgba(248,247,244,0.14);
          font-size: 10px;
        }
        .rwh-breadcrumb-current {
          font-size: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #C41E1E;
        }

        /* ── Eyebrow ── */
        .rwh-eyebrow {
          font-size: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(248,247,244,0.3);
          margin: 0 0 18px;
        }

        /* ── Headline ── */
        .rwh-headline-wrap {
          margin-bottom: clamp(22px, 3vh, 34px);
        }
        .rwh-line-clip {
          overflow: hidden;
          line-height: 1;
        }
        .rwh-line {
          margin: 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
          /* Key fix: clamp min is 2rem not 3.2rem — prevents overflow on 375px */
          font-size: clamp(2rem, 8.5vw, 10rem);
          line-height: 0.95;
          letter-spacing: -0.02em;
          color: #F8F7F4;
          font-weight: 500;
          font-style: normal;
        }
        .rwh-line-2 {
          font-weight: 300;
          font-style: italic;
          color: rgba(248,247,244,0.52);
        }

        /* ── Tags ── */
        .rwh-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: clamp(20px, 3vh, 30px);
        }
        .rwh-tag {
          font-size: 9px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(248,247,244,0.25);
          border: 1px solid rgba(248,247,244,0.08);
          padding: 5px 11px;
          white-space: nowrap;
        }
        .rwh-tag-accent {
          color: #C41E1E;
          border-color: rgba(196,30,30,0.38);
        }

        /* ── Bottom row ── */
        .rwh-bottom {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 24px 48px;
        }
        .rwh-sub {
          font-size: clamp(0.78rem, 1.2vw, 0.92rem);
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          color: rgba(248,247,244,0.42);
          line-height: 1.95;
          max-width: 380px;
          margin: 0;
          flex: 1 1 260px;
        }

        /* ── CTA group ── */
        .rwh-cta-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          flex: 0 1 auto;
          align-self: flex-end;
        }
        .rwh-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          background: #C41E1E;
          color: #fff;
          font-size: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.25s ease, transform 0.2s ease;
          box-sizing: border-box;
        }
        .rwh-btn-primary:hover {
          background: #A01515;
          transform: translateY(-1px);
        }
        .rwh-btn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: transparent;
          color: rgba(248,247,244,0.5);
          font-size: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid rgba(248,247,244,0.12);
          white-space: nowrap;
          transition: border-color 0.25s ease, color 0.25s ease;
          box-sizing: border-box;
        }
        .rwh-btn-ghost:hover {
          border-color: rgba(248,247,244,0.38);
          color: #F8F7F4;
        }

        /* ── Meta count ── */
        .rwh-meta {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid rgba(248,247,244,0.06);
        }
        .rwh-meta-num {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          color: rgba(248,247,244,0.14);
          line-height: 1;
        }
        .rwh-meta-label {
          font-size: 10px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(248,247,244,0.2);
        }

        /* ── Scroll indicator ── */
        .rwh-scroll {
          position: absolute;
          bottom: clamp(24px, 4vh, 40px);
          right: clamp(20px, 5vw, 72px);
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .rwh-scroll-rtl {
          right: auto;
          left: clamp(20px, 5vw, 72px);
        }
        .rwh-scroll-track {
          width: 1px;
          height: 48px;
          background: rgba(248,247,244,0.08);
          position: relative;
          overflow: hidden;
        }
        .rwh-scroll-dot {
          position: absolute;
          top: 0;
          width: 1px;
          height: 14px;
          background: #C41E1E;
        }
        .rwh-scroll-label {
          font-size: 9px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(248,247,244,0.16);
          writing-mode: vertical-rl;
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .rwh-content {
            /* Extra bottom padding so scroll indicator doesn't overlap */
            padding-bottom: clamp(72px, 10vh, 96px);
          }
          .rwh-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .rwh-cta-group {
            width: 100%;
            flex-direction: column;
            gap: 8px;
          }
          .rwh-btn-primary,
          .rwh-btn-ghost {
            width: 100%;
            justify-content: center;
            white-space: normal;
            text-align: center;
          }
          .rwh-sub {
            max-width: 100%;
          }
          .rwh-meta {
            margin-top: 28px;
          }
          .rwh-scroll {
            /* Hide on mobile — not needed, takes up space */
            display: none;
          }
          .rwh-tags {
            gap: 6px;
          }
        }

        /* ── Small phones (≤390px) ── */
        @media (max-width: 390px) {
          .rwh-line {
            font-size: clamp(1.7rem, 9vw, 2.8rem);
          }
          .rwh-breadcrumb-current {
            font-size: 9px;
          }
        }
      `}</style>
    </section>
  )
}