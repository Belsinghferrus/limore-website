// src/app/[locale]/blog/page.jsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { client } from '@/lib/sanity'
// CORRECT (matches your structure)
import { allPostsQuery } from '@/lib/sanity/queries'
import { getBlogTranslations } from '@/lib/sanity/translations'
import BlogEyebrow from '@/components/sections/blog/BlogEyebrow'
import BlogHeroCard from '@/components/sections/blog/BlogHeroCard'
import BlogSmallCard from '@/components/sections/blog/BlogSmallCard'
import BlogWideCard from '@/components/sections/blog/BlogWideCard'

gsap.registerPlugin(ScrollTrigger)

export default function BlogListingPage() {
  const params    = useParams()
  const locale    = params?.locale || 'en'
  const isRtl     = locale === 'ar'
  const T         = getBlogTranslations(locale)

  const [posts,   setPosts]   = useState([])
  const [loading, setLoading] = useState(true)
  const headerRef = useRef(null)

  useEffect(() => {
    client.fetch(allPostsQuery).then((data) => {
      setPosts(data || [])
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (loading || !headerRef.current) return
    gsap.fromTo(
      headerRef.current.querySelectorAll('.blog-h-anim'),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 }
    )
  }, [loading])

  const hero      = posts.find(p => p.featured) || posts[0]
  const remaining = posts.filter(p => p !== hero)

  return (
    <>
      {/* Section top border */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(200,16,46,0.55), transparent)' }} />

      <main style={{
        backgroundColor: '#080808',
        minHeight: '100vh',
        paddingTop: '72px',
        direction: isRtl ? 'rtl' : 'ltr',
      }}>

        {/* Page Header */}
        <div ref={headerRef} style={{ padding: 'clamp(48px, 8vw, 96px) clamp(20px, 6vw, 96px) clamp(32px, 5vw, 48px)' }}>
          <div className="blog-h-anim">
            <BlogEyebrow>{T.eyebrow}</BlogEyebrow>
          </div>
          <h1 className="blog-h-anim" style={{
            margin: 0,
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(3rem, 9vw, 10rem)',
            fontWeight: 300, lineHeight: 0.9, letterSpacing: '-0.03em',
            color: '#F8F7F4',
          }}>
            {T.pageTitle}{' '}
            <em style={{ fontStyle: 'italic', color: 'rgba(248,247,244,0.22)' }}>
              {T.pageTitleItalic}
            </em>
          </h1>
          <div className="blog-h-anim" style={{
            marginTop: 'clamp(20px, 3vw, 32px)', height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(200,16,46,0.55), transparent)',
          }} />
        </div>

        <div style={{ padding: '0 clamp(20px, 6vw, 96px) clamp(64px, 10vw, 120px)' }}>

          {/* Loading skeleton */}
          {loading && (
            <>
              <div style={{ marginBottom: '20px', background: '#0D0D0D', aspectRatio: '16/7', border: '1px solid rgba(255,255,255,0.05)' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: '16px' }}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} style={{ background: '#0D0D0D', aspectRatio: '4/5', border: '1px solid rgba(255,255,255,0.05)' }} />
                ))}
              </div>
            </>
          )}

          {/* Empty state */}
          {!loading && posts.length === 0 && (
            <div style={{ paddingBlock: 'clamp(80px, 12vw, 160px)', textAlign: 'center' }}>
              <div style={{ width: '1px', height: '60px', background: '#C8102E', margin: '0 auto 32px' }} />
              <p style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(1.4rem, 3vw, 2.5rem)',
                fontWeight: 300, color: 'rgba(248,247,244,0.28)', margin: 0,
              }}>
                {T.noArticles}
              </p>
            </div>
          )}

          {/* Posts */}
          {!loading && posts.length > 0 && (
            <>
              {/* Hero card */}
              {hero && (
                <div style={{ marginBottom: 'clamp(14px, 2vw, 20px)' }}>
                  <BlogHeroCard post={hero} locale={locale} T={T} />
                </div>
              )}

              {/* Magazine grid
                  Pattern per 5 cards: small | small | wide(span 2) | small | small
                  index % 5 === 2  → WideCard
                  otherwise         → SmallCard
              */}
              {remaining.length > 0 && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
                  gap: 'clamp(12px, 1.5vw, 18px)',
                }}>
                  {remaining.map((post, i) => (
                    i % 5 === 2
                      ? <BlogWideCard  key={post._id} post={post} locale={locale} />
                      : <BlogSmallCard key={post._id} post={post} locale={locale} delay={(i % 3) * 0.08} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  )
}