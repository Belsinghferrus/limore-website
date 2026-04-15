export const BASE_URL = 'https://thelimore.com'

export function getOgImage(seed) {
  const num = seed || Math.floor(Math.random() * 15) + 1
  return `${BASE_URL}/images/limore${num}.jpg`
}

export function buildMeta({ title, description, path, locale, ogImage }) {
  const url      = `${BASE_URL}/${locale}${path}`
  const image    = ogImage || getOgImage()
  const isRTL    = locale === 'ar'

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'en': `${BASE_URL}/en${path}`,
        'ar': `${BASE_URL}/ar${path}`,
        'fr': `${BASE_URL}/fr${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName:  'Limore',
      type:      'website',
      locale:    locale === 'ar' ? 'ar_AE' : locale === 'fr' ? 'fr_FR' : 'en_AE',
      images: [
        {
          url,
          width:  1200,
          height: 630,
          alt:    title,
        },
      ],
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description,
      images:      [image],
      site:        '@limore',
      creator:     '@limore',
    },
    robots: {
      index:          true,
      follow:         true,
      googleBot: {
        index:             true,
        follow:            true,
        'max-image-preview':    'large',
        'max-snippet':          -1,
        'max-video-preview':    -1,
      },
    },
    icons: {
      icon:       '/favicon.ico',
      shortcut:   '/favicon-16x16.png',
      apple:      '/apple-touch-icon.png',
    },
    verification: {
      google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN',
    },
  }
}