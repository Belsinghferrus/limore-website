import ServicesHero    from '@/components/sections/services/overview/ServicesHero'
import ServicesGrid    from '@/components/sections/services/overview/ServicesGrid'
import ServicesProcess from '@/components/sections/services/overview/ServicesProcess'
import ServicesCTA     from '@/components/sections/services/overview/ServicesCTA'

export async function generateMetadata({ params }) {
  const { locale } = await params

  const meta = {
    en: {
      title: 'Chauffeur Services | Airport, Corporate, Events, Private Jet — Limore',
      description: 'Limore offers four categories of premium chauffeur services: airport transfers, corporate chauffeur, roadshows and events, and private jet transfers. Available across Dubai, London, Paris, Geneva and five more cities.',
      keywords: 'luxury chauffeur services, premium ground transport, airport transfer, corporate chauffeur, private jet transfer, event transport, Limore',
    },
    ar: {
      title: 'خدمات السائق | المطار، المؤسسات، الفعاليات، الطائرات الخاصة — ليمور',
      description: 'تقدم ليمور أربع فئات من خدمات السائق المميزة: نقل المطار، السائق المؤسسي، جولات الترويج والفعاليات، ونقل الطائرات الخاصة.',
      keywords: 'خدمات سائق فاخر، نقل أرضي متميز، نقل مطار، سائق مؤسسي، نقل طائرة خاصة',
    },
    fr: {
      title: 'Services Chauffeur | Aéroport, Corporate, Événements, Jet Privé — Limore',
      description: 'Limore propose quatre catégories de services chauffeur premium : transferts aéroport, chauffeur corporate, roadshows et événements, et transferts jet privé.',
      keywords: 'services chauffeur luxe, transport terrestre premium, transfert aéroport, chauffeur corporate, transfert jet privé',
    },
  }

  const m = meta[locale] || meta.en

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    openGraph: {
      title: m.title,
      description: m.description,
      type: 'website',
    },
    alternates: {
      canonical: `https://thelimore.com/${locale}/services`,
      languages: {
        en: 'https://thelimore.com/en/services',
        ar: 'https://thelimore.com/ar/services',
        fr: 'https://thelimore.com/fr/services',
      },
    },
  }
}

function JsonLd({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: locale === 'ar'
      ? 'خدمات ليمور للسائق'
      : locale === 'fr'
      ? 'Services Chauffeur Limore'
      : 'Limore Chauffeur Services',
    description: 'Premium chauffeur and ground transport services across global cities.',
    itemListElement: [
      {
        '@type': 'ListItem', position: 1,
        name: 'Airport Transfers',
        url: `https://thelimore.com/${locale}/services/airport-transfers`,
      },
      {
        '@type': 'ListItem', position: 2,
        name: 'Corporate Chauffeur',
        url: `https://thelimore.com/${locale}/services/corporate-chauffeur`,
      },
      {
        '@type': 'ListItem', position: 3,
        name: 'Roadshows and Events',
        url: `https://thelimore.com/${locale}/services/roadshows-events`,
      },
      {
        '@type': 'ListItem', position: 4,
        name: 'Private Jet Transfers',
        url: `https://thelimore.com/${locale}/services/private-jet-transfers`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function ServicesPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <ServicesHero    locale={locale} />
        <ServicesGrid    locale={locale} />
        <ServicesProcess locale={locale} />
        <ServicesCTA     locale={locale} />
      </main>
    </>
  )
}