import { groq } from 'next-sanity'

// All posts — card data only (no body), newest first
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    "slug": slug.current,
    title, excerpt, publishedAt, readTime, featured, author, category,
    coverImage {
      asset->{ _id, url, metadata { lqip, dimensions } },
      hotspot, alt
    }
  }
`

// Single post by slug — full data including body
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title, excerpt, publishedAt, readTime, featured, author, category,
    coverImage {
      asset->{ _id, url, metadata { lqip, dimensions } },
      hotspot, alt
    },
    body, seo
  }
`

// Related posts — same category, excluding current, max 3
export const relatedPostsQuery = groq`
  *[
    _type == "post" &&
    slug.current != $currentSlug &&
    category.en == $category
  ] | order(publishedAt desc) [0...3] {
    _id,
    "slug": slug.current,
    title, excerpt, publishedAt, readTime, category,
    coverImage {
      asset->{ _id, url, metadata { lqip, dimensions } },
      hotspot, alt
    }
  }
`

// Fallback related — latest 3 posts if no category match
export const latestPostsExcludingQuery = groq`
  *[_type == "post" && slug.current != $currentSlug]
  | order(publishedAt desc) [0...3] {
    _id,
    "slug": slug.current,
    title, excerpt, publishedAt, readTime, category,
    coverImage {
      asset->{ _id, url, metadata { lqip, dimensions } },
      hotspot, alt
    }
  }
`

// Static paths for generateStaticParams
export const allPostSlugsQuery = groq`
  *[_type == "post"]{ "slug": slug.current }
`