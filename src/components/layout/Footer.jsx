'use client'


import Link from 'next/link'
import { SERVICES, SITE_NAME } from '@/lib/constants'
import NextImage from 'next/image'

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Technology', href: '/technology' },
  { label: 'Limore 360', href: '/limore-360' },
  { label: 'Partner With Us', href: '/partner-with-us' },
  { label: 'Blog', href: '/blog' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookies', href: '/cookies' },
]

const SOCIALS = ['Instagram', 'LinkedIn', 'X']

export default function Footer({ locale = 'en' }) {
  const localePath = (href) => '/' + locale + href
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#0A0A0A' }}>

      {/* Red rule */}
      <div style={{ height: '1px', backgroundColor: '#C41E1E' }} />

      {/* Main grid */}
      <div
        className="container-default"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '48px',
          }}
          className="footer-grid"
        >

          {/* Brand */}
          <div>
            <LimoreLogo />
            <p
              style={{
                marginTop: '24px',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                color: 'rgba(255,255,255,1.35)',
                lineHeight: '1.7',
                maxWidth: '280px',
              }}
            >
              Premium chauffeur-driven luxury across global cities.
              Discretion, precision, excellence - delivered.
            </p>

            <div
              style={{
                marginTop: '28px',
                height: '1px',
                width: '40px',
                backgroundColor: '#C41E1E',
              }}
            />

            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '11px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.25)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C41E1E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p
              style={{
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C41E1E',
                marginBottom: '24px',
              }}
            >
              Services
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {SERVICES.map((service) => (
                <li key={service.href} style={{ marginBottom: '14px' }}>
                  <Link
                    href={localePath(service.href)}
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              style={{
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C41E1E',
                marginBottom: '24px',
              }}
            >
              Company
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {COMPANY_LINKS.map((item) => (
                <li key={item.href} style={{ marginBottom: '14px' }}>
                  <Link
                    href={localePath(item.href)}
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C41E1E',
                marginBottom: '24px',
              }}
            >
              Get In Touch
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '6px' }}>
                  Email
                </p>
                <a
                  href="mailto:info@thelimore.com"
                  style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                >
                  office@thelimore.com
                </a>
              </div>

              <div>
                <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '6px' }}>
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/971563454698"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                >
                  +971 56 345 4698
                </a>
              </div>

              <div>
                <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '6px' }}>
                  Global Coverage
                </p>
                <Link
                  href={localePath('/global-coverage')}
                  style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
                >
                  View all cities →
                </Link>
              </div>

              <Link
                href={localePath('/contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  border: '1px solid #C41E1E',
                  color: '#fff',
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'background 0.3s ease',
                  width: 'fit-content',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C41E1E'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Book a Chauffeur →
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="container-default"
          style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.04em' }}>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {LEGAL_LINKS.map((item) => (
              <Link
                key={item.href}
                href={localePath(item.href)}
                style={{
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  color: 'rgba(255,255,255,0.18)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.18)'}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive grid */}
      <style>{`
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 2fr !important;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

    </footer>
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