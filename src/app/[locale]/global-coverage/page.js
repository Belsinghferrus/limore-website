import CoverageHero   from '@/components/sections/coverage/CoverageHero'
import CoverageStats  from '@/components/sections/coverage/CoverageStats'
import CoverageGrid   from '@/components/sections/coverage/CoverageGrid'
import CoverageCTA    from '@/components/sections/coverage/CoverageCTA'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const meta = {
    en: {
      title: 'Global Coverage | Luxury Chauffeur Worldwide — Limore',
      description: 'Limore operates across 6 regions, 30+ countries and 60+ cities — Middle East, Europe, Asia, Americas, Russia, and India. One standard. Everywhere.',
      keywords: 'global chauffeur service, luxury car service worldwide, chauffeur Dubai London Paris New York Tokyo, international chauffeur',
    },
    ar: {
      title: 'التغطية العالمية | سائق فاخر في جميع أنحاء العالم — ليمور',
      description: 'تعمل ليمور في 6 مناطق وأكثر من 30 دولة وأكثر من 60 مدينة.',
      keywords: 'خدمة سائق عالمية، سيارة فاخرة في جميع أنحاء العالم',
    },
    fr: {
      title: 'Couverture Mondiale | Chauffeur Luxe Partout — Limore',
      description: 'Limore opère dans 6 régions, 30+ pays et 60+ villes — Moyen-Orient, Europe, Asie, Amériques, Russie et Inde.',
      keywords: 'service chauffeur mondial, voiture de luxe internationale, chauffeur Dubai Londres Paris New York Tokyo',
    },
  }
  const m = meta[locale] || meta.en
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    openGraph: { title: m.title, description: m.description, type: 'website' },
    alternates: {
      canonical: `https://thelimore.com/${locale}/coverage`,
      languages: {
        en: 'https://thelimore.com/en/coverage',
        ar: 'https://thelimore.com/ar/coverage',
        fr: 'https://thelimore.com/fr/coverage',
      },
    },
  }
}

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Limore Global Chauffeur Service',
    description: 'Premium chauffeur service operating across the Middle East, Europe, Asia, Americas, Russia and India.',
    areaServed: [
      'United Arab Emirates','Saudi Arabia','United Kingdom','France',
      'Switzerland','Italy','Germany','Japan','Singapore','United States','India',
    ],
    provider: { '@type': 'Organization', name: 'Limore', url: 'https://thelimore.com' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default async function CoveragePage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd />
      <main>
        <CoverageHero  locale={locale} />
        <CoverageStats locale={locale} />
        <CoverageGrid  locale={locale} />
        <CoverageCTA   locale={locale} />
      </main>
    </>
  )
}