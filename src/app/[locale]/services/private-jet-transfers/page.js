import { buildMeta } from '@/lib/seo'

import PJHero     from '@/components/sections/services/private-jet/PJHero'
import PJStandard from '@/components/sections/services/private-jet/PJStandard'
import PJProcess  from '@/components/sections/services/private-jet/PJProcess'
import PJFBOs     from '@/components/sections/services/private-jet/PJFBOs'
import PJCTA      from '@/components/sections/services/private-jet/PJCTA'

const OG_IMAGE = 'https://thelimore.com/images/limore14.jpg'

const meta = {
  en: {
    title:       'Private Jet Transfer Service | FBO Chauffeur, Tarmac Pickup & VIP Ground Transport | Limore',
    description: 'Luxury chauffeur transfers for private jet passengers. Direct tarmac coordination, FBO access, flight monitoring, and discreet ground transport from aircraft to destination across Dubai, London, Paris, Geneva and 4 more cities.',
    keywords:    'private jet transfer Dubai, FBO chauffeur service Dubai, tarmac pickup Dubai, private aviation ground transport, luxury jet transfer Dubai, private jet chauffeur London, FBO transfer service, VIP transport Dubai private jet, discreet chauffeur service Dubai, elite chauffeur service UAE, ultra luxury chauffeur Dubai, exclusive chauffeur Dubai, private luxury transport Dubai, high profile client transport UAE, VIP transfer Dubai',
  },
  ar: {
    title:       'خدمة نقل الطائرة الخاصة دبي — سائق FBO، استقبال على المدرج ونقل VIP | ليمور',
    description: 'نقل فاخر بالسائق لركاب الطائرات الخاصة في دبي ولندن وباريس وجنيف. تنسيق مباشر على المدرج والوصول إلى مجمعات الطيران الخاص ومراقبة الرحلات ونقل أرضي سري.',
    keywords:    'نقل طائرة خاصة دبي، خدمة سائق FBO دبي، استقبال على المدرج دبي، نقل أرضي طيران خاص، نقل فاخر طائرة خاصة دبي، سائق خاص طائرة لندن',
  },
  fr: {
    title:       'Service Transfert Jet Prive | Chauffeur FBO, Prise en Charge Tarmac & VIP | Limore',
    description: 'Transferts chauffeur luxe pour passagers jet prive. Coordination directe sur le tarmac, acces FBO, suivi de vol et transport terrestre discret a Dubai, Londres, Paris, Geneve et plus.',
    keywords:    'transfert jet prive Dubai, service chauffeur FBO Dubai, prise en charge tarmac Dubai, transport aviation privee luxe, transfert jet prive luxe Dubai, chauffeur jet prive Londres, service FBO transfer',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/services/private-jet-transfers',
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
    name:       locale === 'ar'
      ? 'خدمة نقل الطائرة الخاصة — ليمور'
      : locale === 'fr'
      ? 'Service Transfert Jet Prive — Limore'
      : 'Private Jet Transfer Service — Limore',
    description:'Luxury chauffeur transfers for private jet passengers. Tarmac coordination, FBO access, real-time flight monitoring and discreet ground transport from aircraft to destination across global cities.',
    url:        `https://thelimore.com/${locale}/services/private-jet-transfers`,
    image:      OG_IMAGE,
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
    serviceType: 'Private Jet Chauffeur Transfer',
    areaServed: [
      { '@type': 'City',    name: 'Dubai'      },
      { '@type': 'City',    name: 'Abu Dhabi'  },
      { '@type': 'City',    name: 'Riyadh'     },
      { '@type': 'City',    name: 'London'     },
      { '@type': 'City',    name: 'Paris'      },
      { '@type': 'City',    name: 'Geneva'     },
      { '@type': 'City',    name: 'Zurich'     },
      { '@type': 'City',    name: 'Frankfurt'  },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    audience: {
      '@type':      'Audience',
      audienceType: 'Private Jet Passengers, UHNW Clients, VIP Travellers, Celebrity Clients, Royal Clients',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Private Jet Transfer Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FBO Chauffeur Service Dubai'                  } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tarmac Pickup & Drop-off Dubai'              } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Aviation Ground Transport UAE'       } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Discreet Chauffeur Service Dubai'            } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ultra Luxury Chauffeur Dubai'                } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'High Profile Client Transport UAE'           } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VIP Private Jet Transfer London'             } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FBO Transfer Service Geneva'                 } },
      ],
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Tarmac Access',       value: 'Yes — direct aircraft-side coordination'    },
      { '@type': 'PropertyValue', name: 'FBO Coordination',    value: 'Yes — all major FBOs globally'              },
      { '@type': 'PropertyValue', name: 'Flight Monitoring',   value: 'Yes — real-time private flight tracking'    },
      { '@type': 'PropertyValue', name: 'Discretion',          value: 'Full NDA available, unmarked vehicles'      },
      { '@type': 'PropertyValue', name: 'Availability',        value: '24/7 — 365 days'                           },
      { '@type': 'PropertyValue', name: 'Vehicle Classes',     value: 'Ultra Luxury, Maybach, Rolls-Royce, SUV'    },
    ],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',                    item: `https://thelimore.com/${locale}`                                          },
        { '@type': 'ListItem', position: 2, name: 'Services',                item: `https://thelimore.com/${locale}/services`                                 },
        { '@type': 'ListItem', position: 3, name: 'Private Jet Transfers',   item: `https://thelimore.com/${locale}/services/private-jet-transfers`           },
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

export default async function PrivateJetTransfersPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <PJHero     locale={locale} />
        <PJStandard locale={locale} />
        <PJProcess  locale={locale} />
        <PJFBOs     locale={locale} />
        <PJCTA      locale={locale} />
      </main>
    </>
  )
}