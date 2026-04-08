// src/components/blog/BlogWideCard.jsx
// Spans 2 columns in the magazine grid — horizontal layout
'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function t(field, locale) {
  if (!field) return ''
  return field[locale] || field['en'] || ''
}

function formatDate(dateStr, locale) {
  if (!dateStr) return ''
  const map = { en: 'en-GB', ar: 'ar-AE', fr: 'fr-FR' }
  return new Date(dateStr).toLocaleDateString(map[locale] || 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default function BlogWideCard({ post, locale }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      }
    )
  }, [])

  const imgUrl  = post?.coverImage?.asset?.url || null
  const blurUrl = post?.coverImage?.asset?.metadata?.lqip || null
  const readCTA = { en: 'Read →', ar: '← اقرأ', fr: 'Lire →' }[locale] || 'Read →'

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      style={{ textDecoration: 'none', display: 'block', gridColumn: 'span 2' }}
    >
      <article
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: '#0D0D0D',
          border: '1px solid rgba(255,255,255,0.07)',
          overflow: 'hidden', position: 'relative', cursor: 'pointer',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', minHeight: '300px', overflow: 'hidden' }}>
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={t(post.coverImage?.alt, locale) || t(post.title, locale)}
              fill loading="lazy"
              sizes="(max-width:768px) 100vw, 50vw"
              style={{
                objectFit: 'cover',
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}
              placeholder={blurUrl ? 'blur' : 'empty'}
              blurDataURL={blurUrl || undefined}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#111' }} />
          )}
        </div>

        {/* Text side */}
        <div style={{
          padding: 'clamp(28px, 4vw, 52px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          borderLeft: '1px solid rgba(255,255,255,0.05)',
        }}>
          {post.category && (
            <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '20px', height: '1px', backgroundColor: '#C8102E' }} />
              <span style={{
                fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8102E',
              }}>
                {t(post.category, locale)}
              </span>
            </div>
          )}
          <h3 style={{
            margin: '0 0 14px',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.6rem)',
            fontWeight: 300, lineHeight: 1.0, letterSpacing: '-0.02em',
            color: hovered ? '#C8102E' : '#F8F7F4',
            transition: 'color 0.3s ease',
          }}>
            {t(post.title, locale)}
          </h3>
          <p style={{
            margin: '0 0 24px',
            fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            color: 'rgba(248,247,244,0.36)', lineHeight: 1.9,
          }}>
            {t(post.excerpt, locale)}
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <span style={{
              fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 400,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(248,247,244,0.2)',
            }}>
              {formatDate(post.publishedAt, locale)}
              {post.readTime ? ` · ${post.readTime} min` : ''}
            </span>
            <span style={{
              fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: hovered ? '#C8102E' : 'rgba(248,247,244,0.2)',
              transition: 'color 0.3s ease',
            }}>
              {readCTA}
            </span>
          </div>
        </div>

        {/* Red bottom bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          backgroundColor: '#C8102E',
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
        }} />
      </article>
    </Link>
  )
}