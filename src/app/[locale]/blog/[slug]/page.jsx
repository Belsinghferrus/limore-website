// src/app/[locale]/blog/[slug]/page.jsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { client } from '@/lib/sanity'
import { postBySlugQuery, relatedPostsQuery, latestPostsExcludingQuery } from '@/lib/sanity/queries'
import { getBlogTranslations } from '@/lib/sanity/translations'
import BlogEyebrow from '@/components/sections/blog/BlogEyebrow'
import BlogRelatedCard from '@/components/sections/blog/BlogRelatedCard'
import PortableTextRenderer from '@/components/sections/blog/PortableTextRenderer'

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

export default function BlogPostPage() {
  const params = useParams()
  const locale = params?.locale || 'en'
  const slug   = params?.slug
  const isRtl  = locale === 'ar'
  const T      = getBlogTranslations(locale)

  const [post,    setPost]    = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  const heroRef    = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (!slug) return
    client.fetch(postBySlugQuery, { slug }).then(async (data) => {
      setPost(data)
      if (data) {
        const category = data.category?.en || ''
        let rel = []
        if (category) {
          rel = await client.fetch(relatedPostsQuery, { currentSlug: slug, category })
        }
        if (!rel?.length) {
          rel = await client.fetch(latestPostsExcludingQuery, { currentSlug: slug })
        }
        setRelated(rel || [])
      }
      setLoading(false)
    })
  }, [slug])

  useEffect(() => {
    if (loading || !post || !heroRef.current) return
    gsap.fromTo(
      heroRef.current.querySelectorAll('.art-anim'),
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1 }
    )
  }, [loading, post])

  useEffect(() => {
    if (loading || !post || !contentRef.current) return
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.4 }
    )
  }, [loading, post])

  // ── Loading state ──────────────────────────────────────────────────────────
  if (loading) {
    return (
      <main style={{ backgroundColor: '#080808', minHeight: '100vh', paddingTop: '72px' }}>
        <div style={{ padding: 'clamp(48px, 8vw, 96px) clamp(20px, 6vw, 96px)' }}>
          <div style={{ height: '80px', background: '#0D0D0D', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.05)' }} />
          <div style={{ height: '500px', background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.05)' }} />
        </div>
      </main>
    )
  }

  // ── 404 state ──────────────────────────────────────────────────────────────
  if (!post) {
    return (
      <main style={{
        backgroundColor: '#080808', minHeight: '100vh', paddingTop: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '1px', height: '60px', background: '#C8102E', margin: '0 auto 24px' }} />
          <p style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.4rem, 3vw, 2.5rem)',
            fontWeight: 300, color: 'rgba(248,247,244,0.28)', margin: '0 0 24px',
          }}>
            {locale === 'ar' ? 'المقال غير موجود.' : locale === 'fr' ? 'Article introuvable.' : 'Article not found.'}
          </p>
          <Link href={`/${locale}/blog`} style={{
            fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#C8102E', textDecoration: 'none',
          }}>
            {T.backToAll}
          </Link>
        </div>
      </main>
    )
  }

  const imgUrl      = post?.coverImage?.asset?.url || null
  const blurUrl     = post?.coverImage?.asset?.metadata?.lqip || null
  const bodyContent = post.body?.[locale] || post.body?.en

  return (
    <>
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(200,16,46,0.55), transparent)' }} />

      <main style={{
        backgroundColor: '#080808', minHeight: '100vh',
        paddingTop: '72px', direction: isRtl ? 'rtl' : 'ltr',
      }}>

        {/* ── Article Hero ──────────────────────────────────────────────── */}
        <div ref={heroRef}>

          {/* Breadcrumb */}
          <div style={{ padding: 'clamp(32px, 5vw, 56px) clamp(20px, 6vw, 96px) 0' }}>
            <nav aria-label="Breadcrumb" className="art-anim">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link href={`/${locale}`} style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.2)', textDecoration: 'none',
                }}>
                  Limore
                </Link>
                <span style={{ color: 'rgba(248,247,244,0.12)', fontSize: '10px' }}>›</span>
                <Link href={`/${locale}/blog`} style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.2)', textDecoration: 'none',
                }}>
                  {T.breadcrumbJournal}
                </Link>
                <span style={{ color: 'rgba(248,247,244,0.12)', fontSize: '10px' }}>›</span>
                <span style={{
                  fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
                  letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8102E',
                }}>
                  {t(post.category, locale) || T.breadcrumbArticle}
                </span>
              </div>
            </nav>
          </div>

          {/* Title */}
          <div style={{ padding: 'clamp(24px, 4vw, 48px) clamp(20px, 6vw, 96px) clamp(32px, 5vw, 48px)', maxWidth: '920px' }}>
            {post.category && (
              <div className="art-anim">
                <BlogEyebrow>{t(post.category, locale)}</BlogEyebrow>
              </div>
            )}
            <h1 className="art-anim" style={{
              margin: '0 0 clamp(16px, 2.5vw, 24px)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(2.2rem, 6vw, 7rem)',
              fontWeight: 300, lineHeight: 0.93, letterSpacing: '-0.02em',
              color: '#F8F7F4',
            }}>
              {t(post.title, locale)}
            </h1>
            <p className="art-anim" style={{
              margin: '0 0 clamp(20px, 3vw, 32px)',
              fontSize: 'clamp(0.85rem, 1.2vw, 0.96rem)',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              color: 'rgba(248,247,244,0.38)', lineHeight: 1.9, maxWidth: '560px',
            }}>
              {t(post.excerpt, locale)}
            </p>

            {/* Meta row */}
            <div className="art-anim" style={{
              display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap',
              paddingTop: 'clamp(16px, 2.5vw, 24px)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}>
              {[
                `${T.by} ${post.author || 'The Limore Team'}`,
                formatDate(post.publishedAt, locale),
                post.readTime ? `${post.readTime} ${T.minRead}` : null,
              ].filter(Boolean).map((item, i, arr) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{
                    fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400,
                    letterSpacing: '0.12em', color: 'rgba(248,247,244,0.28)', textTransform: 'uppercase',
                  }}>
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Cover image */}
          {imgUrl && (
            <div className="art-anim" style={{
              margin: '0 clamp(20px, 6vw, 96px)',
              position: 'relative',
              aspectRatio: '16/7', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <Image
                src={imgUrl}
                alt={t(post.coverImage?.alt, locale) || t(post.title, locale)}
                fill priority
                sizes="(max-width:768px) 100vw, 90vw"
                style={{ objectFit: 'cover' }}
                placeholder={blurUrl ? 'blur' : 'empty'}
                blurDataURL={blurUrl || undefined}
              />
            </div>
          )}
        </div>

        {/* ── Article Body ──────────────────────────────────────────────── */}
        <div
          ref={contentRef}
          style={{
            padding: 'clamp(48px, 7vw, 96px) clamp(20px, 6vw, 96px)',
            maxWidth: 'min(800px, 100%)',
            marginInline: 'auto',
          }}
        >
          <PortableTextRenderer value={bodyContent} />
        </div>

        {/* Divider */}
        <div style={{
          margin: '0 clamp(20px, 6vw, 96px)', height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(200,16,46,0.55), transparent)',
        }} />

        {/* ── Related Posts ─────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section style={{ padding: 'clamp(56px, 8vw, 96px) clamp(20px, 6vw, 96px)' }}>
            <BlogEyebrow>{T.relatedEyebrow}</BlogEyebrow>
            <h2 style={{
              margin: '0 0 clamp(32px, 5vw, 56px)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 4rem)',
              fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.02em', color: '#F8F7F4',
            }}>
              Further Reading{' '}
              <em style={{ fontStyle: 'italic', color: 'rgba(248,247,244,0.22)' }}>
                {T.relatedTitle}
              </em>
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(12px, 1.5vw, 18px)',
            }}>
              {related.map((rp, i) => (
                <BlogRelatedCard key={rp._id} post={rp} locale={locale} index={i} />
              ))}
            </div>

            {/* Back to blog */}
            <div style={{ marginTop: 'clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
              <Link href={`/${locale}/blog`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 32px',
                border: '1px solid rgba(200,16,46,0.35)',
                color: 'rgba(248,247,244,0.5)',
                fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}>
                {T.backToAll}
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  )
}