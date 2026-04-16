const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thelimore.com'

const locales = ['en', 'ar', 'fr']

const routes = [
  { path: '',           priority: 1.0,  changeFrequency: 'weekly'  },
  { path: '/services',  priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/fleet',     priority: 0.9,  changeFrequency: 'monthly' },
  { path: '/technology',priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/about',     priority: 0.7,  changeFrequency: 'monthly' },
  { path: '/contact',   priority: 0.7,  changeFrequency: 'monthly' },
  { path: '/corporate', priority: 0.8,  changeFrequency: 'monthly' },
  { path: '/partner',   priority: 0.6,  changeFrequency: 'monthly' },
]

export default function sitemap() {
  const entries = []

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url:              `${BASE_URL}/${locale}${route.path}`,
        lastModified:     new Date(),
        changeFrequency:  route.changeFrequency,
        priority:         route.priority,
      })
    }
  }

  return entries
}