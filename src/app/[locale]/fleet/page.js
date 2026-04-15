import { buildMeta } from '@/lib/seo'

import FleetHero   from '@/components/sections/fleet/FleetHero'
import FleetFilter from '@/components/sections/fleet/FleetFilter'
import FleetGrid   from '@/components/sections/fleet/FleetGrid'
import FleetCTA    from '@/components/sections/fleet/FleetCTA'

const OG_IMAGE = 'https://thelimore.com/images/limore3.jpg'

const meta = {
  en: {
    title:       'Luxury Chauffeur Fleet - Mercedes S-Class, Rolls-Royce, Maybach & More | Limore',
    description: 'Browse the Limore fleet — Mercedes S-Class, Rolls-Royce Phantom, Range Rover Vogue, Maybach, BMW 7 Series and more. Executive, premium, SUV, ultra luxury, electric and group vehicles available across 8 global cities.',
    keywords:    'Mercedes S Class chauffeur Dubai, Rolls Royce chauffeur Dubai, Maybach chauffeur service Dubai, BMW 7 Series chauffeur service, luxury SUV chauffeur Dubai, executive sedan chauffeur UAE, luxury van with driver Dubai, Tesla chauffeur Dubai, luxury chauffeur fleet, Range Rover chauffeur Dubai, Cadillac Escalade chauffeur Dubai, Mercedes V Class chauffeur Dubai, ultra luxury chauffeur Dubai',
  },
  ar: {
    title:       'أسطول سائق فاخر في دبي — مرسيدس S، رولز رويس، مايباخ والمزيد | ليمور',
    description: 'تصفح أسطول ليمور — مرسيدس فئة S، رولز رويس فانتوم، رنج روفر فوج، مايباخ، BMW الفئة السابعة والمزيد. مركبات تنفيذية وفاخرة وSUV متاحة في 8 مدن عالمية.',
    keywords:    'سائق مرسيدس فئة S دبي، سائق رولز رويس دبي، سائق مايباخ دبي، سائق BMW الفئة السابعة، سائق SUV فاخر دبي، سائق سيدان تنفيذي الإمارات',
  },
  fr: {
    title:       'Flotte Chauffeur Luxe Dubai — Mercedes Classe S, Rolls-Royce, Maybach | Limore',
    description: 'Parcourez la flotte Limore — Mercedes Classe S, Rolls-Royce Phantom, Range Rover Vogue, Maybach, BMW Serie 7 et plus. Vehicules executifs, premium, SUV, ultra luxe, electriques et de groupe disponibles dans 8 villes mondiales.',
    keywords:    'chauffeur Mercedes Classe S Dubai, chauffeur Rolls-Royce Dubai, chauffeur Maybach Dubai, chauffeur BMW Serie 7, chauffeur SUV luxe Dubai, chauffeur berline executive UAE, van avec chauffeur Dubai',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/fleet',
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
    name:       'Limore Luxury Chauffeur Fleet — Dubai & Worldwide',
    description:'Premium chauffeur vehicles available for corporate and private hire in Dubai, London, Paris, New York and beyond.',
    url:        `https://thelimore.com/${locale}/fleet`,
    numberOfItems: 12,
    itemListElement: [
      { '@type': 'ListItem', position: 1,  name: 'Mercedes-Benz S-Class',    url: `https://thelimore.com/${locale}/fleet#mercedes-s-class`    },
      { '@type': 'ListItem', position: 2,  name: 'BMW 7 Series',             url: `https://thelimore.com/${locale}/fleet#bmw-7-series`         },
      { '@type': 'ListItem', position: 3,  name: 'Audi A8',                  url: `https://thelimore.com/${locale}/fleet#audi-a8`              },
      { '@type': 'ListItem', position: 4,  name: 'Rolls-Royce Phantom',      url: `https://thelimore.com/${locale}/fleet#rolls-royce-phantom`  },
      { '@type': 'ListItem', position: 5,  name: 'Mercedes-Maybach S 680',   url: `https://thelimore.com/${locale}/fleet#mercedes-maybach`     },
      { '@type': 'ListItem', position: 6,  name: 'Bentley Flying Spur',      url: `https://thelimore.com/${locale}/fleet#bentley-flying-spur`  },
      { '@type': 'ListItem', position: 7,  name: 'Range Rover Vogue',        url: `https://thelimore.com/${locale}/fleet#range-rover-vogue`    },
      { '@type': 'ListItem', position: 8,  name: 'Mercedes-Benz G-Class',    url: `https://thelimore.com/${locale}/fleet#mercedes-g-class`     },
      { '@type': 'ListItem', position: 9,  name: 'Cadillac Escalade',        url: `https://thelimore.com/${locale}/fleet#cadillac-escalade`    },
      { '@type': 'ListItem', position: 10, name: 'Mercedes-Benz V-Class',    url: `https://thelimore.com/${locale}/fleet#mercedes-v-class`     },
      { '@type': 'ListItem', position: 11, name: 'Tesla Model S',            url: `https://thelimore.com/${locale}/fleet#tesla-model-s`        },
      { '@type': 'ListItem', position: 12, name: 'Mercedes-Benz Sprinter',   url: `https://thelimore.com/${locale}/fleet#mercedes-sprinter`    },
    ],
    provider: {
      '@type': 'Organization',
      name:    'Limore',
      url:     'https://thelimore.com',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',  item: `https://thelimore.com/${locale}`        },
        { '@type': 'ListItem', position: 2, name: 'Fleet', item: `https://thelimore.com/${locale}/fleet`  },
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

export default async function FleetPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <FleetHero   locale={locale} />
        {/* <FleetFilter locale={locale} /> */}
        <FleetGrid   locale={locale} />
        <FleetCTA    locale={locale} />
      </main>
    </>
  )
}