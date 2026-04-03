import RWHero      from '@/components/sections/services/roadshows/RWHero'
import RWStatement from '@/components/sections/services/roadshows/RWStatement'
import RWServices  from '@/components/sections/services/roadshows/RWServices'
import RWLogistics from '@/components/sections/services/roadshows/RWLogistics'
import RWNumbers   from '@/components/sections/services/roadshows/RWNumbers'
import RWCTA       from '@/components/sections/services/roadshows/RWCTA'

export async function generateMetadata({ params }) {
  const { locale } = await params

  const meta = {
    en: {
      title: 'Roadshow and Event Chauffeur Services | Limore Global',
      description: 'Premium chauffeur services for financial roadshows, investor meetings, product launches, and global corporate events. Dedicated fleet management, multi-city coordination, and executive ground transport across 8 cities.',
      keywords: 'roadshow chauffeur service, event ground transport, financial roadshow transfer, luxury event transportation, corporate event chauffeur, investor meeting transport, product launch chauffeur',
    },
    ar: {
      title: 'خدمات سائق جولات الترويج والفعاليات | ليمور العالمية',
      description: 'خدمات سائق متميزة لجولات الترويج المالي ولقاءات المستثمرين وإطلاق المنتجات والفعاليات المؤسسية العالمية.',
      keywords: 'خدمة سائق جولات الترويج, نقل فعاليات, نقل جولة ترويج مالي',
    },
    fr: {
      title: 'Services Chauffeur Roadshow et Événements | Limore Mondial',
      description: 'Services chauffeur premium pour roadshows financiers, réunions investisseurs, lancements produits et événements corporate mondiaux à travers 8 villes.',
      keywords: 'service chauffeur roadshow, transport événementiel luxe, chauffeur roadshow financier',
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
      canonical: `https://thelimore.com/${locale}/services/roadshows-events`,
      languages: {
        'en': 'https://thelimore.com/en/services/roadshows-events',
        'ar': 'https://thelimore.com/ar/services/roadshows-events',
        'fr': 'https://thelimore.com/fr/services/roadshows-events',
      },
    },
  }
}

// JSON-LD structured data for SEO
function JsonLd({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: locale === 'ar' ? 'خدمات سائق جولات الترويج والفعاليات' : locale === 'fr' ? 'Services Chauffeur Roadshow et Événements' : 'Roadshow and Event Chauffeur Services',
    provider: {
      '@type': 'Organization',
      name: 'Limore',
      url: 'https://thelimore.com',
    },
    description: 'Premium chauffeur and ground transport services for financial roadshows, corporate events, product launches, and investor meetings across global cities.',
    areaServed: ['Dubai', 'Abu Dhabi', 'London', 'Paris', 'Geneva', 'Zurich', 'Frankfurt', 'Riyadh'],
    serviceType: 'Luxury Chauffeur Transportation',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function RoadshowsEventsPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <RWHero      locale={locale} />
        <RWStatement locale={locale} />
        <RWServices  locale={locale} />
        <RWLogistics locale={locale} />
        <RWNumbers   locale={locale} />
        <RWCTA       locale={locale} />
      </main>
    </>
  )
}