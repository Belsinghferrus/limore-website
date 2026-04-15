import { buildMeta } from '@/lib/seo'

import ServicesHero    from '@/components/sections/services/overview/ServicesHero'
import ServicesGrid    from '@/components/sections/services/overview/ServicesGrid'
import ServicesProcess from '@/components/sections/services/overview/ServicesProcess'
import ServicesCTA     from '@/components/sections/services/overview/ServicesCTA'

const OG_IMAGE = 'https://thelimore.com/images/limore14.jpg'

const meta = {
  en: {
    title:       'Luxury Chauffeur Services | Airport Transfers, Corporate, Events & Private Jet | Limore',
    description: 'Limore offers four categories of premium chauffeur services: luxury airport transfers, corporate chauffeur, roadshows and event transportation, and private jet transfers. Available across Dubai, London, Paris, Geneva and five more cities.',
    keywords:    'luxury chauffeur service Dubai, premium chauffeur service Dubai, professional chauffeur service Dubai, VIP chauffeur Dubai, chauffeur service Dubai, private chauffeur Dubai, luxury airport transfer Dubai, corporate chauffeur services Dubai, event transportation Dubai, VIP event chauffeur service, private jet transfer Dubai, executive chauffeur service UAE, car with driver Dubai, hire chauffeur Dubai, luxury car rental with driver Dubai',
  },
  ar: {
    title:       'خدمات السائق الفاخر دبي — نقل المطار، المؤسسات، الفعاليات والطائرات الخاصة | ليمور',
    description: 'تقدم ليمور أربع فئات من خدمات السائق المميزة: نقل مطار فاخر، سائق مؤسسي، نقل جولات ترويجية وفعاليات، ونقل طائرات خاصة. متاحة في دبي ولندن وباريس وجنيف وخمس مدن أخرى.',
    keywords:    'خدمة سائق فاخر دبي، خدمة سائق متميزة دبي، سائق VIP دبي، نقل مطار فاخر دبي، سائق مؤسسي دبي، نقل فعاليات دبي، نقل طائرة خاصة دبي',
  },
  fr: {
    title:       'Services Chauffeur Luxe | Aeroport, Corporate, Evenements & Jet Prive | Limore',
    description: 'Limore propose quatre categories de services chauffeur premium: transferts aeroport luxe, chauffeur corporate, transport roadshows et evenements, et transferts jet prive. Disponible a Dubai, Londres, Paris, Geneve et cinq autres villes.',
    keywords:    'service chauffeur luxe Dubai, service chauffeur premium Dubai, chauffeur VIP Dubai, transfert aeroport luxe Dubai, chauffeur corporate Dubai, transport evenementiel Dubai, transfert jet prive Dubai, location voiture avec chauffeur Dubai',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/services',
      locale,
      ogImage: OG_IMAGE,
    }),
    keywords,
  }
}

function JsonLd({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'ItemList',
    name:       locale === 'ar'
      ? 'خدمات ليمور للسائق الفاخر'
      : locale === 'fr'
      ? 'Services Chauffeur Luxe Limore'
      : 'Limore Luxury Chauffeur Services',
    description:'Premium chauffeur and ground transport services across Dubai, London, Paris, Geneva and global cities.',
    url:        `https://thelimore.com/${locale}/services`,
    numberOfItems: 4,
    provider: {
      '@type': 'Organization',
      name:    'Limore',
      url:     'https://thelimore.com',
      logo:    'https://thelimore.com/images/limore-logo.png',
      sameAs: [
        'https://www.instagram.com/limore',
        'https://www.linkedin.com/company/limore',
      ],
    },
    itemListElement: [
      {
        '@type':    'ListItem',
        position:   1,
        name:       'Luxury Airport Transfers Dubai',
        url:        `https://thelimore.com/${locale}/services/airport-transfers`,
        item: {
          '@type':      'Service',
          name:         'Luxury Airport Transfer Service',
          description:  'Flight-tracked VIP airport transfers with meet and greet. Available 24/7 across 8 global cities.',
          serviceType:  'Airport Transfer',
        },
      },
      {
        '@type':    'ListItem',
        position:   2,
        name:       'Corporate Chauffeur Services Dubai',
        url:        `https://thelimore.com/${locale}/services/corporate-chauffeur`,
        item: {
          '@type':      'Service',
          name:         'Corporate Chauffeur Service',
          description:  'Dedicated executive transport for global businesses. Dedicated account managers, same-day dispatch and monthly invoicing.',
          serviceType:  'Corporate Chauffeur',
        },
      },
      {
        '@type':    'ListItem',
        position:   3,
        name:       'Event & Roadshow Transportation Dubai',
        url:        `https://thelimore.com/${locale}/services/roadshows-events`,
        item: {
          '@type':      'Service',
          name:         'Event & Roadshow Chauffeur Service',
          description:  'VIP event transportation, exhibition transport and roadshow logistics across Dubai and worldwide.',
          serviceType:  'Event Transportation',
        },
      },
      {
        '@type':    'ListItem',
        position:   4,
        name:       'Private Jet Transfer Service Dubai',
        url:        `https://thelimore.com/${locale}/services/private-jet-transfers`,
        item: {
          '@type':      'Service',
          name:         'Private Jet Transfer Service',
          description:  'Tarmac-to-destination luxury chauffeur for private jet passengers. FBO access and discreet ground transport worldwide.',
          serviceType:  'Private Jet Transfer',
        },
      },
    ],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: `https://thelimore.com/${locale}`          },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `https://thelimore.com/${locale}/services` },
      ],
    },
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