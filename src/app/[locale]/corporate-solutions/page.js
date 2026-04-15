

import { buildMeta } from '@/lib/seo'

import CorporateHero           from '@/components/sections/corporate/CorporateHero'
import CorporateLogos          from '@/components/sections/corporate/CorporateLogos'
import CorporateWhy            from '@/components/sections/corporate/CorporateWhy'
import CorporateBookingSystem  from '@/components/sections/corporate/CorporateBookingSystem'
import CorporateAccountManager from '@/components/sections/corporate/CorporateAccountManager'
import CorporateBilling        from '@/components/sections/corporate/CorporateBilling'
import CorporateIndustries     from '@/components/sections/corporate/CorporateIndustries'
import CorporateEnquiry        from '@/components/sections/corporate/CorporateEnquiry'

const OG_IMAGE = 'https://thelimore.com/images/limore5.jpg'

const meta = {
  en: {
          title: 'Corporate Chauffeur Solutions | Global Ground Transport for Business — Limore',
          description: 'Limore provides dedicated corporate chauffeur accounts for financial institutions, luxury brands, and enterprise clients. Managed billing, global coverage, and a dedicated account manager.',
          keywords: 'corporate chauffeur service, business ground transport, executive car service, corporate travel management, luxury chauffeur contract',
        },
        ar: {
          title: 'حلول السائق للشركات | النقل البري العالمي للأعمال — ليمور',
          description: 'تقدم ليمور حسابات سائق مخصصة للشركات للمؤسسات المالية والعلامات التجارية الفاخرة وعملاء المؤسسات.',
          keywords: 'خدمة سائق للشركات، نقل الأعمال، سيارة تنفيذية',
        },
        fr: {
          title: 'Solutions Chauffeur Corporate | Transport Terrestre Mondial — Limore',
          description: 'Limore propose des comptes chauffeur corporate dédiés pour les institutions financières, les marques de luxe et les grandes entreprises.',
          keywords: 'service chauffeur corporate, transport affaires, voiture executive, gestion voyage corporate',
        },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/corporate',
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
    name:       'Limore Corporate Chauffeur Solutions',
    description:'Dedicated corporate ground transport accounts with global coverage, dedicated account managers, managed monthly billing and executive-grade vehicles for enterprise clients in Dubai and worldwide.',
    url:        `https://thelimore.com/${locale}/corporate`,
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
    serviceType: 'Corporate Chauffeur Service',
    areaServed: [
      { '@type': 'City',    name: 'Dubai'     },
      { '@type': 'City',    name: 'Abu Dhabi' },
      { '@type': 'City',    name: 'London'    },
      { '@type': 'City',    name: 'Paris'     },
      { '@type': 'City',    name: 'New York'  },
      { '@type': 'Country', name: 'UAE'       },
    ],
    audience: {
      '@type':       'Audience',
      audienceType:  'Corporate Clients, Financial Institutions, Luxury Brands, Event Agencies, Enterprise',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Corporate Chauffeur Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Executive Airport Transfers Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Staff Transport Luxury UAE'        } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B Chauffeur Account Management'  } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Employee Transport Solutions UAE'  } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Travel Management UAE'    } },
      ],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',      item: `https://thelimore.com/${locale}`           },
        { '@type': 'ListItem', position: 2, name: 'Corporate', item: `https://thelimore.com/${locale}/corporate` },
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

export default async function CorporatePage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <CorporateHero           locale={locale} />
        <CorporateLogos          locale={locale} />
        <CorporateWhy            locale={locale} />
        <CorporateBookingSystem  locale={locale} />
        <CorporateAccountManager locale={locale} />
        <CorporateBilling        locale={locale} />
        <CorporateIndustries     locale={locale} />
        <CorporateEnquiry        locale={locale} />
      </main>
    </>
  )
}