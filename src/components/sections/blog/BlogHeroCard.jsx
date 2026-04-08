// src/components/blog/BlogHeroCard.jsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'

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

export default function BlogHeroCard({ post, locale, T }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.15 }
    )
  }, [])

  const imgUrl  = post?.coverImage?.asset?.url || null
  const blurUrl = post?.coverImage?.asset?.metadata?.lqip || null
  const readCTA = { en: 'Read Article', ar: 'اقرأ المقال', fr: "Lire l'article" }[locale] || 'Read Article'

  return (
    <Link href={`/${locale}/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative', overflow: 'hidden', cursor: 'pointer',
          backgroundColor: '#0D0D0D',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', overflow: 'hidden' }}>
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={t(post.coverImage?.alt, locale) || t(post.title, locale)}
              fill priority
              sizes="(max-width:768px) 100vw, 90vw"
              style={{
                objectFit: 'cover',
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
              placeholder={blurUrl ? 'blur' : 'empty'}
              blurDataURL={blurUrl || undefined}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#111' }} />
          )}

          {/* Dark gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.45) 55%, rgba(8,8,8,0.1) 100%)',
          }} />

          {/* Category pill */}
          {post.category && (
            <div style={{
              position: 'absolute', top: '24px', left: '24px',
              padding: '4px 12px',
              border: '1px solid rgba(200,16,46,0.45)',
              backgroundColor: 'rgba(200,16,46,0.08)',
              fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8102E',
            }}>
              {t(post.category, locale)}
            </div>
          )}

          {/* Text overlay */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(24px, 4vw, 52px)' }}>
            <p style={{
              fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(248,247,244,0.3)', margin: '0 0 14px',
            }}>
              {formatDate(post.publishedAt, locale)}
              {post.readTime ? ` · ${post.readTime} min read` : ''}
            </p>
            <h2 style={{
              margin: '0 0 14px',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 5.5rem)',
              fontWeight: 300, lineHeight: 0.93, letterSpacing: '-0.02em',
              color: '#F8F7F4', maxWidth: '820px',
            }}>
              {t(post.title, locale)}
            </h2>
            <p style={{
              margin: '0 0 24px',
              fontSize: 'clamp(0.8rem, 1.1vw, 0.92rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: 'rgba(248,247,244,0.38)', lineHeight: 1.9, maxWidth: '540px',
            }}>
              {t(post.excerpt, locale)}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: hovered ? '#C8102E' : 'rgba(248,247,244,0.3)',
                transition: 'color 0.3s ease',
              }}>
                {readCTA}
              </span>
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true"
                style={{ transition: 'transform 0.3s ease', transform: hovered ? 'translateX(5px)' : 'translateX(0)' }}>
                <path d="M1 4h14M9 1l5 3-5 3" stroke="#C8102E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Red bottom bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          backgroundColor: '#C8102E',
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        }} />
      </article>
    </Link>
  )
}