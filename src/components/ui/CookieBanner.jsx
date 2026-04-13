'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ─── Tokens ────────────────────────────────────────────────────────────────────
const RED = '#C8102E'
const BG = '#0D0D0D'
const BORDER = 'rgba(255,255,255,0.07)'
const TEXT = '#F8F7F4'
const MUTED = 'rgba(248,247,244,0.45)'
const FAINT = 'rgba(248,247,244,0.15)'
const FONT_B = 'Inter, sans-serif'
const FONT_D = 'Cormorant Garamond, Georgia, serif'

const STORAGE_KEY = 'limore_cookie_consent'

// ─── Translations ──────────────────────────────────────────────────────────────
const COPY = {
    en: {
        dir: 'ltr',
        eyebrow: 'Privacy',
        headline: 'We use cookies',
        body: 'We use essential cookies to keep the site running and optional analytics cookies to understand how you use it. You can accept all or manage your preferences.',
        accept: 'Accept All',
        necessary: 'Necessary Only',
        manage: 'Manage Preferences',
        policy: 'Privacy Policy',
        policyHref: '/en/privacy',
        panel: {
            title: 'Cookie Preferences',
            save: 'Save Preferences',
            categories: [
                { id: 'necessary', label: 'Strictly Necessary', description: 'Required for the website to function. Cannot be disabled.', locked: true },
                { id: 'analytics', label: 'Analytics', description: 'Help us understand how visitors interact with the site.', locked: false },
                { id: 'marketing', label: 'Marketing', description: 'Used to show relevant ads and track campaign performance.', locked: false },
            ],
        },
    },
    ar: {
        dir: 'rtl',
        eyebrow: 'الخصوصية',
        headline: 'نستخدم ملفات تعريف الارتباط',
        body: 'نستخدم ملفات تعريف الارتباط الأساسية لتشغيل الموقع وملفات تعريف الارتباط التحليلية الاختيارية لفهم كيفية استخدامك له.',
        accept: 'قبول الكل',
        necessary: 'الضرورية فقط',
        manage: 'إدارة التفضيلات',
        policy: 'سياسة الخصوصية',
        policyHref: '/ar/privacy',
        panel: {
            title: 'تفضيلات ملفات تعريف الارتباط',
            save: 'حفظ التفضيلات',
            categories: [
                { id: 'necessary', label: 'ضرورية تمامًا', description: 'مطلوبة لتشغيل الموقع. لا يمكن تعطيلها.', locked: true },
                { id: 'analytics', label: 'تحليلية', description: 'تساعدنا على فهم كيفية تفاعل الزوار مع الموقع.', locked: false },
                { id: 'marketing', label: 'تسويقية', description: 'تُستخدم لعرض إعلانات ذات صلة وتتبع أداء الحملات.', locked: false },
            ],
        },
    },
    fr: {
        dir: 'ltr',
        eyebrow: 'Confidentialité',
        headline: 'Nous utilisons des cookies',
        body: 'Nous utilisons des cookies essentiels au fonctionnement du site et des cookies analytiques optionnels pour comprendre votre utilisation.',
        accept: 'Tout accepter',
        necessary: 'Nécessaires uniquement',
        manage: 'Gérer les préférences',
        policy: 'Politique de confidentialité',
        policyHref: '/fr/privacy',
        panel: {
            title: 'Préférences des cookies',
            save: 'Enregistrer',
            categories: [
                { id: 'necessary', label: 'Strictement nécessaires', description: 'Requis pour le fonctionnement du site. Ne peuvent pas être désactivés.', locked: true },
                { id: 'analytics', label: 'Analytiques', description: 'Nous aident à comprendre comment les visiteurs interagissent avec le site.', locked: false },
                { id: 'marketing', label: 'Marketing', description: 'Utilisés pour afficher des publicités pertinentes et mesurer les campagnes.', locked: false },
            ],
        },
    },
}

// ─── Toggle ────────────────────────────────────────────────────────────────────
function Toggle({ checked, onChange, disabled }) {
    return (
        <button
            role="switch"
            aria-checked={checked}
            onClick={() => !disabled && onChange(!checked)}
            style={{
                width: '44px',
                height: '24px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: disabled ? 'rgba(200,16,46,0.5)' : checked ? RED : 'rgba(255,255,255,0.12)',
                position: 'relative',
                cursor: disabled ? 'not-allowed' : 'pointer',
                flexShrink: 0,
                transition: 'background-color 0.25s ease',
                padding: 0,
                // min touch target
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* inner pill */}
            <div style={{
                position: 'absolute',
                top: '4px',
                left: checked || disabled ? '22px' : '4px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: 'white',
                transition: 'left 0.25s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.35)',
            }} />
        </button>
    )
}

// ─── Icons ─────────────────────────────────────────────────────────────────────
function ShieldIcon() {
    return (
        <svg width="13" height="15" viewBox="0 0 14 16" fill="none" aria-hidden="true">
            <path d="M7 1L1 4v4c0 4 2.5 6.5 6 7.5C10.5 14.5 13 12 13 8V4L7 1z"
                stroke={RED} strokeWidth="1" strokeLinejoin="round" />
            <path d="M4.5 8l2 2 3-3"
                stroke={RED} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function CloseIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 2l10 10M12 2L2 12"
                stroke={MUTED} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    )
}

function BackIcon() {
    return (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M13 5H1M5 1L1 5l4 4"
                stroke={MUTED} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function CookieBanner({ locale = 'en' }) {
    const t = COPY[locale] || COPY.en

    const [mounted, setMounted] = useState(false)
    const [visible, setVisible] = useState(false)
    const [showPanel, setShowPanel] = useState(false)
    const [hiding, setHiding] = useState(false)
    const [dismissed, setDismissed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [prefs, setPrefs] = useState({ necessary: true, analytics: false, marketing: false })

    useEffect(() => {
        setMounted(true)
        // check saved consent
        try {
            if (localStorage.getItem(STORAGE_KEY)) { setDismissed(true); return }
        } catch { }
        // detect mobile
        const mq = window.matchMedia('(max-width: 600px)')
        setIsMobile(mq.matches)
        const handler = (e) => setIsMobile(e.matches)
        mq.addEventListener('change', handler)
        // entrance delay
        const t1 = setTimeout(() => setVisible(true), 800)
        return () => { clearTimeout(t1); mq.removeEventListener('change', handler) }
    }, [])

    const save = (consent) => {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(consent)) } catch { }
        setHiding(true)
        setTimeout(() => setDismissed(true), 420)
    }

    const handleAcceptAll = () => save({ necessary: true, analytics: true, marketing: true })
    const handleNecessaryOnly = () => save({ necessary: true, analytics: false, marketing: false })
    const handleSavePrefs = () => save(prefs)

    if (!mounted || dismissed) return null

    // ─── Responsive position/size ───────────────────────────────────────────────
    const bannerStyle = isMobile
        ? {
            // Mobile — full-width bottom sheet
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            borderRadius: '12px 12px 0 0',
            borderTop: `2px solid ${RED}`,
            borderLeft: `1px solid ${BORDER}`,
            borderRight: `1px solid ${BORDER}`,
            borderBottom: 'none',
            maxHeight: '90dvh',
            overflowY: 'auto',
            // drag handle hint
            paddingTop: '8px',
        }
        : {
            // Desktop — centered floating card
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(680px, calc(100vw - 32px))',
            borderRadius: 0,
            borderTop: `2px solid ${RED}`,
            border: `1px solid ${BORDER}`,
            borderTopWidth: '2px',
        }

    return (
        <>
            <style>{`
        @keyframes cb-slidein-desktop {
          from { opacity: 0; transform: translateX(-50%) translateY(28px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes cb-slideout-desktop {
          from { opacity: 1; transform: translateX(-50%) translateY(0); }
          to   { opacity: 0; transform: translateX(-50%) translateY(28px); }
        }
        @keyframes cb-slidein-mobile {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cb-slideout-mobile {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(100%); }
        }
        @keyframes cb-panel-in {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        /* Scrollbar inside panel on mobile */
        .cb-scroll::-webkit-scrollbar { width: 3px; }
        .cb-scroll::-webkit-scrollbar-track { background: transparent; }
        .cb-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>

            <div
                role="dialog"
                aria-label="Cookie consent"
                aria-modal="false"
                className="cb-scroll"
                style={{
                    ...bannerStyle,
                    backgroundColor: BG,
                    boxShadow: '0 -8px 48px rgba(0,0,0,0.6)',
                    direction: t.dir,
                    zIndex: 9998,
                    animation: hiding
                        ? isMobile ? 'cb-slideout-mobile 0.4s cubic-bezier(0.16,1,0.3,1) forwards'
                            : 'cb-slideout-desktop 0.4s cubic-bezier(0.16,1,0.3,1) forwards'
                        : visible
                            ? isMobile ? 'cb-slidein-mobile 0.45s cubic-bezier(0.16,1,0.3,1) forwards'
                                : 'cb-slidein-desktop 0.45s cubic-bezier(0.16,1,0.3,1) forwards'
                            : 'none',
                    opacity: visible ? undefined : 0,
                }}
            >
                {/* Mobile drag handle */}
                {isMobile && (
                    <div style={{
                        width: '36px',
                        height: '3px',
                        borderRadius: '2px',
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        margin: '0 auto 12px',
                    }} />
                )}

                {/* ── Banner view ── */}
                {!showPanel && (
                    <div style={{ padding: isMobile ? '4px 20px 32px' : '24px 28px 22px' }}>

                        {/* Top row: eyebrow + close */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            gap: '12px',
                            marginBottom: '10px',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <ShieldIcon />
                                <span style={{
                                    fontSize: '9px',
                                    fontFamily: FONT_B,
                                    fontWeight: 500,
                                    letterSpacing: '0.22em',
                                    textTransform: 'uppercase',
                                    color: RED,
                                }}>
                                    {t.eyebrow}
                                </span>
                            </div>

                            {/* Close — necessary only */}
                            <button
                                onClick={handleNecessaryOnly}
                                aria-label="Close, accept necessary cookies only"
                                style={{
                                    background: 'transparent',
                                    border: `1px solid ${BORDER}`,
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    minWidth: '44px',
                                    minHeight: '44px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                    marginTop: '-6px',
                                    marginRight: isMobile ? '-6px' : '0',
                                }}
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Headline */}
                        <h2 style={{
                            fontSize: isMobile ? '1.3rem' : 'clamp(1rem,2vw,1.3rem)',
                            fontFamily: FONT_D,
                            fontWeight: 300,
                            color: TEXT,
                            margin: '0 0 10px',
                            letterSpacing: '-0.01em',
                        }}>
                            {t.headline}
                        </h2>

                        {/* Body */}
                        <p style={{
                            fontSize: isMobile ? '0.82rem' : 'clamp(0.78rem,1.1vw,0.86rem)',
                            fontFamily: FONT_B,
                            fontWeight: 300,
                            lineHeight: 1.85,
                            color: MUTED,
                            margin: '0 0 20px',
                        }}>
                            {t.body}{' '}
                            <Link
                                href={t.policyHref}
                                style={{ color: RED, textDecorationLine: isMobile ? 'none' : 'underline', borderBottom: `1px solid rgba(200,16,46,0.3)` }}
                            >
                                {t.policy}
                            </Link>
                        </p>

                        {/* Actions */}
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            flexWrap: isMobile ? 'nowrap' : 'wrap',
                            gap: isMobile ? '10px' : '10px',
                            alignItems: isMobile ? 'stretch' : 'center',
                        }}>
                            {/* Accept All */}
                            <button
                                onClick={handleAcceptAll}
                                style={{
                                    padding: isMobile ? '14px 24px' : '11px 24px',
                                    backgroundColor: RED,
                                    color: 'white',
                                    border: 'none',
                                    fontSize: '10px',
                                    fontFamily: FONT_B,
                                    fontWeight: 500,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.25s ease',
                                    textAlign: 'center',
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A50D25'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = RED}
                            >
                                {t.accept}
                            </button>

                            {/* Necessary Only */}
                            <button
                                onClick={handleNecessaryOnly}
                                style={{
                                    padding: isMobile ? '14px 24px' : '11px 20px',
                                    backgroundColor: 'transparent',
                                    color: MUTED,
                                    border: `1px solid ${BORDER}`,
                                    fontSize: '10px',
                                    fontFamily: FONT_B,
                                    fontWeight: 400,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s, border-color 0.2s',
                                    textAlign: 'center',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = TEXT; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
                                onMouseLeave={e => { e.currentTarget.style.color = MUTED; e.currentTarget.style.borderColor = BORDER }}
                            >
                                {t.necessary}
                            </button>

                            {/* Manage Preferences */}
                            <button
                                onClick={() => setShowPanel(true)}
                                style={{
                                    padding: isMobile ? '14px 24px' : '11px 16px',
                                    backgroundColor: 'transparent',
                                    color: FAINT,
                                    border: isMobile ? `1px solid ${BORDER}` : 'none',
                                    fontSize: '10px',
                                    fontFamily: FONT_B,
                                    fontWeight: 400,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    textDecorationLine: isMobile ? 'none' : 'underline',
                                    textDecorationColor: FAINT,
                                    transition: 'color 0.2s',
                                    textAlign: 'center',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = MUTED}
                                onMouseLeave={e => e.currentTarget.style.color = FAINT}
                            >
                                {t.manage}
                            </button>
                        </div>
                    </div>
                )}

                {/* ── Manage Preferences Panel ── */}
                {showPanel && (
                    <div style={{
                        padding: isMobile ? '4px 20px 40px' : '24px 28px 24px',
                        animation: 'cb-panel-in 0.3s cubic-bezier(0.16,1,0.3,1) forwards',
                    }}>
                        {/* Panel header */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '20px',
                        }}>
                            <button
                                onClick={() => setShowPanel(false)}
                                aria-label="Back to cookie banner"
                                style={{
                                    background: 'transparent',
                                    border: `1px solid ${BORDER}`,
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    minWidth: '44px',
                                    minHeight: '44px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                }}
                            >
                                <BackIcon />
                            </button>
                            <h2 style={{
                                fontSize: isMobile ? '1.2rem' : 'clamp(1rem,2vw,1.2rem)',
                                fontFamily: FONT_D,
                                fontWeight: 300,
                                color: TEXT,
                                margin: 0,
                            }}>
                                {t.panel.title}
                            </h2>
                        </div>

                        {/* Categories */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {t.panel.categories.map((cat, i) => (
                                <div
                                    key={cat.id}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '16px',
                                        padding: isMobile ? '16px 0' : '14px 0',
                                        borderBottom: i < t.panel.categories.length - 1
                                            ? `1px solid ${BORDER}` : 'none',
                                    }}
                                >
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{
                                            fontSize: isMobile ? '13px' : '12px',
                                            fontFamily: FONT_B,
                                            fontWeight: 500,
                                            color: TEXT,
                                            marginBottom: '4px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            gap: '6px',
                                        }}>
                                            {cat.label}
                                            {cat.locked && (
                                                <span style={{
                                                    fontSize: '8px',
                                                    fontFamily: FONT_B,
                                                    letterSpacing: '0.15em',
                                                    textTransform: 'uppercase',
                                                    color: RED,
                                                    padding: '2px 6px',
                                                    border: '1px solid rgba(200,16,46,0.25)',
                                                    backgroundColor: 'rgba(200,16,46,0.06)',
                                                }}>
                                                    Always on
                                                </span>
                                            )}
                                        </div>
                                        <p style={{
                                            fontSize: isMobile ? '12px' : '11px',
                                            fontFamily: FONT_B,
                                            fontWeight: 300,
                                            color: MUTED,
                                            margin: 0,
                                            lineHeight: 1.65,
                                        }}>
                                            {cat.description}
                                        </p>
                                    </div>
                                    <Toggle
                                        checked={cat.locked ? true : prefs[cat.id]}
                                        onChange={(val) => setPrefs(p => ({ ...p, [cat.id]: val }))}
                                        disabled={cat.locked}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Save */}
                        <div style={{ marginTop: '20px' }}>
                            <button
                                onClick={handleSavePrefs}
                                style={{
                                    width: isMobile ? '100%' : 'auto',
                                    padding: isMobile ? '15px 24px' : '12px 28px',
                                    backgroundColor: RED,
                                    color: 'white',
                                    border: 'none',
                                    fontSize: '10px',
                                    fontFamily: FONT_B,
                                    fontWeight: 500,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.25s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A50D25'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = RED}
                            >
                                {t.panel.save}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}