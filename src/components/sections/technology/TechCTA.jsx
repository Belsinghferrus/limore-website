'use client'

import Link from 'next/link'

const t = {
    en: {
        eyebrow: 'Get Started',
        heading: 'See It In Action.',
        sub: 'Request a platform demo or speak to our corporate accounts team. We will walk you through every feature.',
        cta1: { label: 'Request a Demo', href: '/contact' },
        cta2: { label: 'Corporate Accounts', href: '/corporate' },
        cta3: { label: 'Partner With Us', href: '/partner' },
    },
    ar: {
        eyebrow: 'ابدأ الآن',
        heading: 'شاهده على أرض الواقع.',
        sub: 'اطلب عرضا توضيحيا للمنصة أو تحدث مع فريق الحسابات المؤسسية.',
        cta1: { label: 'طلب عرض توضيحي', href: '/ar/contact' },
        cta2: { label: 'الحسابات المؤسسية', href: '/ar/corporate' },
        cta3: { label: 'شراكة معنا', href: '/ar/partner' },
    },
    fr: {
        eyebrow: 'Commencer',
        heading: 'Voyez-Le en Action.',
        sub: 'Demandez une demonstration de la plateforme ou parlez a notre equipe comptes entreprises.',
        cta1: { label: 'Demander une Demo', href: '/fr/contact' },
        cta2: { label: 'Comptes Entreprises', href: '/fr/corporate' },
        cta3: { label: 'Devenir Partenaire', href: '/fr/partner' },
    },
}

export default function TechCTA({ locale = 'en' }) {
    const content = t[locale] || t.en
    const isRTL = locale === 'ar'

    return (
        <section
            style={{
                backgroundColor: '#050505',
                padding: 'clamp(88px,12vw,140px) clamp(24px,6vw,96px)',
                direction: isRTL ? 'rtl' : 'ltr',
                borderTop: '1px solid rgba(255,255,255,0.04)',
            }}
        >
            <div style={{ maxWidth: '720px' }}>

                <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E', marginBottom: '16px' }}>
                    {content.eyebrow}
                </p>

                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.2rem,5vw,5rem)', fontWeight: 300, color: '#F8F7F4', margin: '0 0 20px', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                    {content.heading}
                </h2>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.8rem,1.1vw,0.9rem)', fontWeight: 300, color: 'rgba(248,247,244,0.4)', lineHeight: 1.9, margin: '0 0 clamp(36px,5vh,56px)', maxWidth: '400px' }}>
                    {content.sub}
                </p>

                {/* CTA group */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>

                    {/* Primary */}
                    <Link
                        href={content.cta1.href}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '14px 32px',
                            backgroundColor: '#C41E1E',
                            border: '1px solid #C41E1E',
                            color: '#fff',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '10px',
                            fontWeight: 500,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            transition: 'background-color 0.25s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A01515'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C41E1E'}
                    >
                        {content.cta1.label}
                        <svg width="12" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
                            <path d="M1 4.5h11M7.5 1l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                        </svg>
                    </Link>

                    {/* Secondary */}
                    <Link
                        href={content.cta2.href}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '14px 28px',
                            backgroundColor: 'transparent',
                            border: '1px solid rgba(248,247,244,0.15)',
                            color: 'rgba(248,247,244,0.6)',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '10px',
                            fontWeight: 400,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            transition: 'border-color 0.25s ease, color 0.25s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(248,247,244,0.4)'; e.currentTarget.style.color = '#F8F7F4' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,247,244,0.15)'; e.currentTarget.style.color = 'rgba(248,247,244,0.6)' }}
                    >
                        {content.cta2.label}
                    </Link>

                    {/* Ghost */}
                    <Link
                        href={content.cta3.href}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '14px 20px',
                            backgroundColor: 'transparent',
                            border: '1px solid transparent',
                            color: 'rgba(248,247,244,0.28)',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '10px',
                            fontWeight: 400,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            transition: 'color 0.25s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'rgba(248,247,244,0.7)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.28)'}
                    >
                        {content.cta3.label}
                    </Link>
                </div>

            </div>
        </section>
    )
}