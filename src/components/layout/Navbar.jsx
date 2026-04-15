'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { NAV_LINKS, SERVICES } from '@/lib/constants'
import { Menu, X, ChevronDown } from 'lucide-react'
import NextImage from 'next/image'
export default function Navbar({ locale = 'en' }) {
  const navRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  const localePath = (href) => '/' + locale + href

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Main Header ── */}
      <header
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: '#0A0A0A',
          transition: 'box-shadow 0.4s ease',
          boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {/* Red top line */}
        <div style={{ height: '2px', backgroundColor: '#C41E1E' }} />


        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
          }}
          role="navigation"
          aria-label="Main navigation"
        >

          {/* Logo */}
          <Link href={localePath('/')} aria-label="Limore Home" style={{ display: 'flex', alignItems: 'center', paddingLeft: 'clamp(16px, 3vw, 40px)' }}>
            <LimoreLogo />
          </Link>

          {/* Desktop Links */}
          <ul
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="lg-nav"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith('/' + locale + link.href)

              if (link.label === 'Services') {
                return (
                  <li key={link.href} style={{ position: 'relative' }}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: '12px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                    >
                      Services
                      <ChevronDown
                        size={12}
                        color="#C41E1E"
                        style={{
                          transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </button>

                    {/* Dropdown */}
                    {servicesOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '240px',
                          backgroundColor: '#0A0A0A',
                          border: '1px solid #2A2A2A',
                          borderTop: '1px solid #C41E1E',
                          zIndex: 100,
                        }}
                      >
                        {SERVICES.map((service, i) => (
                          <Link
                            key={service.href}
                            href={localePath(service.href)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '14px 20px',
                              color: 'rgba(255,255,255,0.6)',
                              fontSize: '13px',
                              fontFamily: 'Inter, sans-serif',
                              textDecoration: 'none',
                              borderBottom: i < SERVICES.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#fff'
                              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                              e.currentTarget.style.backgroundColor = 'transparent'
                            }}
                          >
                            {service.label}
                            <span style={{ color: '#C41E1E', fontSize: '12px' }}>→</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                )
              }

              return (
                <li key={link.href}>
                  <Link
                    href={localePath(link.href)}
                    style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.75)',
                      fontSize: '12px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      borderBottom: isActive ? '1px solid #C41E1E' : '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.borderBottomColor = '#C41E1E'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isActive ? '#fff' : 'rgba(255,255,255,0.75)'
                      e.currentTarget.style.borderBottomColor = isActive ? '#C41E1E' : 'transparent'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingRight: 'clamp(16px, 3vw, 40px)' }}>
            {/* Language switcher — desktop */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingRight: '20px',
                borderRight: '1px solid rgba(255,255,255,0.1)',
              }}
              className="hide-mobile"
            >
              {['en', 'ar', 'fr'].map((lang) => (
                <Link
                  key={lang}
                  href={pathname.replace('/' + locale, '/' + lang)}
                  style={{
                    fontSize: '11px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: lang === locale ? '#C41E1E' : 'rgba(255,255,255,0.35)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { if (lang !== locale) e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
                  onMouseLeave={(e) => { if (lang !== locale) e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
                >
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>

            <div style={{ gap: '10px' }}></div>
            {/* Book Now — desktop */}
            <Link
              href={localePath('/contact')}
              className="hide-mobile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                border: '1px solid #C41E1E',
                color: '#fff',
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C41E1E'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Book Now
            </Link>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#fff',
                padding: '8px',
                display: 'none',
              }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} color="#fff" /> : <Menu size={22} color="#fff" />}
            </button>
          </div>

        </nav>

      </header>

      {/* ── Mobile Menu ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          backgroundColor: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
        }}
      >
        <div style={{ height: '74px' }} />
        <div style={{ height: '1px', backgroundColor: '#C41E1E' }} />

        <div style={{ flex: 1, overflowY: 'auto', padding: '32px 24px' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map((link) => {
              if (link.label === 'Services') {
                return (
                  <li
                    key={link.href}
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '20px 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#fff',
                        fontSize: '26px',
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                        fontWeight: 300,
                        letterSpacing: '0.04em',
                      }}
                    >
                      Services
                      <ChevronDown
                        size={16}
                        color="#C41E1E"
                        style={{
                          transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </button>

                    {servicesOpen && (
                      <ul
                        style={{
                          listStyle: 'none',
                          margin: 0,
                          padding: '0 0 16px 16px',
                          borderLeft: '1px solid #C41E1E',
                        }}
                      >
                        {SERVICES.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={localePath(service.href)}
                              style={{
                                display: 'block',
                                padding: '12px 0',
                                color: 'rgba(255,255,255,0.5)',
                                fontSize: '15px',
                                fontFamily: 'Inter, sans-serif',
                                letterSpacing: '0.04em',
                                textDecoration: 'none',
                                transition: 'color 0.2s ease',
                              }}
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }

              return (
                <li
                  key={link.href}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <Link
                    href={localePath(link.href)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 0',
                      color: '#fff',
                      fontSize: '26px',
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      fontWeight: 300,
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                    <span style={{ color: '#C41E1E', fontSize: '14px' }}>→</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile bottom */}
          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
              {['en', 'ar', 'fr'].map((lang) => (
                <Link
                  key={lang}
                  href={pathname.replace('/' + locale, '/' + lang)}
                  style={{
                    fontSize: '11px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: lang === locale ? '#C41E1E' : 'rgba(255,255,255,0.35)',
                  }}
                >
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>

            <Link
              href={localePath('/contact')}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '16px',
                backgroundColor: '#C41E1E',
                color: '#fff',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 1024px) {
          .lg-nav { display: flex !important; }
          .hide-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 1023px) {
          .lg-nav { display: none !important; }
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function LimoreLogo() {
  return (


    <NextImage
      src="/images/limore-logo.png"
      alt="Limore"
      width={120}
      height={32}
      priority
      style={{ objectFit: 'contain' }}
    />


  )
}