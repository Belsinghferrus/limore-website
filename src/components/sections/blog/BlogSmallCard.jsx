// src/components/blog/BlogSmallCard.jsx
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

export default function BlogSmallCard({ post, locale, delay = 0 }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay,
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      }
    )
  }, [delay])

  const imgUrl  = post?.coverImage?.asset?.url || null
  const blurUrl = post?.coverImage?.asset?.metadata?.lqip || null
  const readCTA = { en: 'Read', ar: 'اقرأ', fr: 'Lire' }[locale] || 'Read'

  return (
    <Link href={`/${locale}/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <article
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: '#0D0D0D',
          border: '1px solid rgba(255,255,255,0.07)',
          overflow: 'hidden', position: 'relative', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', height: '100%',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', overflow: 'hidden', flexShrink: 0 }}>
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={t(post.coverImage?.alt, locale) || t(post.title, locale)}
              fill loading="lazy"
              sizes="(max-width:768px) 100vw, 33vw"
              style={{
                objectFit: 'cover',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}
              placeholder={blurUrl ? 'blur' : 'empty'}
              blurDataURL={blurUrl || undefined}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#111' }} />
          )}
          {post.category && (
            <div style={{
              position: 'absolute', top: '12px', left: '12px',
              padding: '3px 10px',
              border: '1px solid rgba(200,16,46,0.4)',
              backgroundColor: 'rgba(200,16,46,0.07)',
              fontSize: '8px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8102E',
            }}>
              {t(post.category, locale)}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: 'clamp(16px, 2.5vw, 24px)', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p style={{
            fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 400,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(248,247,244,0.22)', margin: '0 0 10px',
          }}>
            {formatDate(post.publishedAt, locale)}
            {post.readTime ? ` · ${post.readTime} min` : ''}
          </p>
          <h3 style={{
            margin: '0 0 10px', flex: 1,
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.45rem)',
            fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.01em',
            color: hovered ? '#C8102E' : '#F8F7F4',
            transition: 'color 0.3s ease',
          }}>
            {t(post.title, locale)}
          </h3>
          <p style={{
            margin: '0 0 16px',
            fontSize: 'clamp(0.78rem, 1vw, 0.84rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            color: 'rgba(248,247,244,0.32)', lineHeight: 1.75,
            display: '-webkit-box', WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {t(post.excerpt, locale)}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontSize: '9px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: hovered ? '#C8102E' : 'rgba(248,247,244,0.18)',
              transition: 'color 0.3s ease',
            }}>
              {readCTA}
            </span>
            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" aria-hidden="true"
              style={{ transition: 'transform 0.3s ease', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}>
              <path d="M1 3h10M7 1l3.5 2L7 5" stroke="#C8102E" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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