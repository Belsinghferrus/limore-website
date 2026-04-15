

import { buildMeta } from '@/lib/seo'

import CoverageHero  from '@/components/sections/coverage/CoverageHero'
import CoverageStats from '@/components/sections/coverage/CoverageStats'
import CoverageGrid  from '@/components/sections/coverage/CoverageGrid'
import CoverageCTA   from '@/components/sections/coverage/CoverageCTA'

const OG_IMAGE = 'https://thelimore.com/images/limore6.jpg'

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

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/coverage',
      locale,
      ogImage: OG_IMAGE,
    }),
    keywords,
  }
}

function JsonLd({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'Service',
    name:       'Limore Global Chauffeur Service',
    description:'Premium luxury chauffeur service operating across the Middle East, Europe, Asia, Americas, Russia and India. One consistent standard across 60+ cities worldwide.',
    url:        `https://thelimore.com/${locale}/coverage`,
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
    serviceType: 'Luxury Chauffeur Service',
    areaServed: [
      // Middle East
      { '@type': 'City',    name: 'Dubai'         },
      { '@type': 'City',    name: 'Abu Dhabi'      },
      { '@type': 'City',    name: 'Ras Al Khaimah' },
      { '@type': 'City',    name: 'Riyadh'         },
      { '@type': 'City',    name: 'Doha'           },
      // Europe
      { '@type': 'City',    name: 'London'         },
      { '@type': 'City',    name: 'Paris'          },
      { '@type': 'City',    name: 'Zurich'         },
      { '@type': 'City',    name: 'Milan'          },
      { '@type': 'City',    name: 'Geneva'         },
      { '@type': 'City',    name: 'Frankfurt'      },
      // Americas
      { '@type': 'City',    name: 'New York'       },
      { '@type': 'City',    name: 'Los Angeles'    },
      { '@type': 'City',    name: 'Miami'          },
      // Asia
      { '@type': 'City',    name: 'Singapore'      },
      { '@type': 'City',    name: 'Tokyo'          },
      { '@type': 'City',    name: 'Hong Kong'      },
      // India
      { '@type': 'City',    name: 'Mumbai'         },
      { '@type': 'City',    name: 'Delhi'          },
      // Countries
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia'         },
      { '@type': 'Country', name: 'United Kingdom'       },
      { '@type': 'Country', name: 'France'               },
      { '@type': 'Country', name: 'Switzerland'          },
      { '@type': 'Country', name: 'Italy'                },
      { '@type': 'Country', name: 'Germany'              },
      { '@type': 'Country', name: 'Japan'                },
      { '@type': 'Country', name: 'Singapore'            },
      { '@type': 'Country', name: 'United States'        },
      { '@type': 'Country', name: 'India'                },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Global Chauffeur Coverage',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Chauffeur Service Dubai'       } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chauffeur Service London Luxury'      } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chauffeur Service Paris VIP'          } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chauffeur Service Zurich Premium'     } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chauffeur Service New York VIP'       } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Event Transportation'   } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Global Corporate Travel Management'   } },
      ],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: `https://thelimore.com/${locale}`           },
        { '@type': 'ListItem', position: 2, name: 'Coverage', item: `https://thelimore.com/${locale}/coverage`  },
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

export default async function CoveragePage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <CoverageHero  locale={locale} />
        <CoverageStats locale={locale} />
        <CoverageGrid  locale={locale} />
        <CoverageCTA   locale={locale} />
      </main>
    </>
  )
}