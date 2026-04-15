

import { buildMeta } from '@/lib/seo'

import ATHero     from '@/components/sections/services/airport-transfers/ATHero'
import ATProcess  from '@/components/sections/services/airport-transfers/ATProcess'
import ATFeatures from '@/components/sections/services/airport-transfers/ATFeatures'
import ATCoverage from '@/components/sections/services/airport-transfers/ATCoverage'
import ATCTA      from '@/components/sections/services/airport-transfers/ATCTA'

const OG_IMAGE = 'https://thelimore.com/images/limore4.jpg'

const meta = {
  en: {
    title:       'Luxury Airport Transfer | VIP Meet & Greet, DXB Chauffeur Service | Limore',
    description: 'Flight-tracked luxury airport transfers with meet and greet service in Dubai, London, Paris and 8 global cities. Private airport transfer, business class chauffeur pickup and VIP limousine service available 24/7. No delays. No compromise.',
    keywords:    'luxury airport transfer Dubai, Dubai airport chauffeur service, private airport transfer Dubai, VIP airport transfer Dubai, airport pickup chauffeur Dubai, Dubai airport limousine service, DXB airport luxury transfer, chauffeur airport pickup UAE, business class airport transfer Dubai, meet and greet airport chauffeur Dubai, airport chauffeur London, airport transfer Paris VIP, private airport transfer worldwide',
  },
  ar: {
    title:       'نقل مطار فاخر دبي — استقبال VIP، خدمة سائق DXB | ليمور',
    description: 'نقل مطار فاخر مع تتبع الرحلات وخدمة الاستقبال والترحيب في دبي ولندن وباريس و8 مدن عالمية. نقل مطار خاص وخدمة سيارة أجرة فاخرة متاحة على مدار الساعة.',
    keywords:    'نقل مطار فاخر دبي، خدمة سائق مطار دبي، نقل مطار خاص دبي، نقل مطار VIP دبي، سائق مطار دبي، خدمة ليموزين مطار دبي، نقل فاخر مطار DXB',
  },
  fr: {
    title:       'Transfert Aeroport Luxe | Accueil VIP, Chauffeur DXB | Limore',
    description: 'Transferts aeroport luxe avec suivi de vol et service d\'accueil a Dubai, Londres, Paris et 8 villes mondiales. Transfert aeroport prive, chauffeur classe affaires et service limousine VIP disponibles 24h/24.',
    keywords:    'transfert aeroport luxe Dubai, service chauffeur aeroport Dubai, transfert aeroport prive Dubai, transfert aeroport VIP Dubai, chauffeur aeroport Dubai, service limousine aeroport Dubai, transfert luxe DXB, chauffeur aeroport UAE classe affaires, accueil VIP aeroport Dubai',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/services/airport-transfers',
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
    name:       'Limore Luxury Airport Transfer Service',
    description:'Flight-tracked VIP airport transfers with meet and greet, private chauffeur pickup and luxury limousine service in Dubai and worldwide. Available 24/7.',
    url:        `https://thelimore.com/${locale}/services/airport-transfers`,
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
    serviceType: 'Airport Transfer',
    areaServed: [
      { '@type': 'Airport', name: 'Dubai International Airport',         iataCode: 'DXB' },
      { '@type': 'Airport', name: 'Al Maktoum International Airport',    iataCode: 'DWC' },
      { '@type': 'Airport', name: 'Heathrow Airport',                    iataCode: 'LHR' },
      { '@type': 'Airport', name: 'Charles de Gaulle Airport',           iataCode: 'CDG' },
      { '@type': 'Airport', name: 'John F. Kennedy International Airport',iataCode: 'JFK' },
      { '@type': 'Airport', name: 'Singapore Changi Airport',            iataCode: 'SIN' },
      { '@type': 'Airport', name: 'Zurich Airport',                      iataCode: 'ZRH' },
      { '@type': 'Airport', name: 'Milan Malpensa Airport',              iataCode: 'MXP' },
    ],
    availableChannel: {
      '@type':        'ServiceChannel',
      serviceUrl:     `https://thelimore.com/${locale}/contact`,
      availableLanguage: ['English', 'Arabic', 'French'],
      hoursAvailable: 'Mo-Su 00:00-24:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Airport Transfer Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VIP Meet and Greet Airport Chauffeur Dubai'       } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Class Airport Transfer Dubai'            } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Airport Transfer Dubai'                  } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dubai Airport Limousine Service'                 } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DXB Airport Luxury Transfer'                     } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flight-Tracked Chauffeur Pickup UAE'             } },
      ],
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Flight Tracking',    value: 'Yes — real-time flight monitoring'         },
      { '@type': 'PropertyValue', name: 'Meet and Greet',     value: 'Yes — name board, lounge assistance'       },
      { '@type': 'PropertyValue', name: 'Wait Time',          value: 'Complimentary 60 min wait on all arrivals' },
      { '@type': 'PropertyValue', name: 'Availability',       value: '24/7 — 365 days'                          },
      { '@type': 'PropertyValue', name: 'Vehicle Classes',    value: 'Executive, Premium, SUV, Ultra Luxury'     },
    ],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',              item: `https://thelimore.com/${locale}`                              },
        { '@type': 'ListItem', position: 2, name: 'Services',          item: `https://thelimore.com/${locale}/services`                     },
        { '@type': 'ListItem', position: 3, name: 'Airport Transfers', item: `https://thelimore.com/${locale}/services/airport-transfers`   },
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

export default async function AirportTransfersPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <ATHero     locale={locale} />
        <ATProcess  locale={locale} />
        <ATFeatures locale={locale} />
        <ATCoverage locale={locale} />
        <ATCTA      locale={locale} />
      </main>
    </>
  )
}