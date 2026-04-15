// import { buildMeta } from '@/lib/seo'

import CCHero        from '@/components/sections/services/corporate-chauffeur/CCHero'
import CCProposition from '@/components/sections/services/corporate-chauffeur/CCProposition'
import CCFeatures    from '@/components/sections/services/corporate-chauffeur/CCFeatures'
import CCProcess     from '@/components/sections/services/corporate-chauffeur/CCProcess'
import CCIndustries  from '@/components/sections/services/corporate-chauffeur/CCIndustries'
import CCCTA         from '@/components/sections/services/corporate-chauffeur/CCCTA'

const OG_IMAGE = 'https://thelimore.com/images/limore5.jpg'

const meta = {
  en: {
    title:       'Corporate Chauffeur Services | Executive Transport & Business Travel UAE | Limore',
    description: 'Dedicated corporate chauffeur services for global businesses in Dubai and UAE. Dedicated account managers, same-day dispatch, monthly invoicing, complete confidentiality and executive-grade vehicles across 8 global cities.',
    keywords:    'corporate chauffeur services Dubai, executive transport services Dubai, business travel management UAE, corporate transportation Dubai, company chauffeur service Dubai, B2B chauffeur service UAE, business chauffeur hire Dubai, staff transport luxury UAE, employee transport solutions UAE, corporate airport transfers Dubai, executive car service Dubai, discreet chauffeur service Dubai, high profile client transport UAE, corporate ground transport Dubai',
  },
  ar: {
    title:       'خدمات السائق المؤسسي دبي — النقل التنفيذي وسفر الأعمال الإمارات | ليمور',
    description: 'خدمات سائق مؤسسي مخصصة للشركات العالمية في دبي والإمارات. مديرو حسابات مخصصون وإرسال في نفس اليوم وفوترة شهرية وسرية تامة ومركبات تنفيذية في 8 مدن عالمية.',
    keywords:    'خدمات سائق مؤسسي دبي، خدمات النقل التنفيذي دبي، إدارة سفر الأعمال الإمارات، نقل الشركات دبي، خدمة سائق الشركات دبي، خدمة سائق B2B الإمارات، نقل الموظفين الفاخر الإمارات',
  },
  fr: {
    title:       'Services Chauffeur Corporate | Transport Executif & Voyage Affaires UAE | Limore',
    description: 'Services chauffeur corporate dedies pour les entreprises mondiales a Dubai et aux Emirats. Gestionnaires dedies, dispatch le jour meme, facturation mensuelle et confidentialite totale dans 8 villes mondiales.',
    keywords:    'services chauffeur corporate Dubai, transport executif Dubai, gestion voyage affaires UAE, transport corporate Dubai, service chauffeur entreprise Dubai, chauffeur B2B UAE, transport personnel luxe UAE, transferts aeroport corporate Dubai',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/services/corporate-chauffeur',
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
    name:       'Limore Corporate Chauffeur Service',
    description:'Dedicated corporate chauffeur service for global businesses in Dubai and worldwide. Executive transport, same-day dispatch, monthly invoicing, account management and complete confidentiality.',
    url:        `https://thelimore.com/${locale}/services/corporate-chauffeur`,
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
    serviceType: 'Corporate Chauffeur Service',
    areaServed: [
      { '@type': 'City',    name: 'Dubai'     },
      { '@type': 'City',    name: 'Abu Dhabi' },
      { '@type': 'City',    name: 'London'    },
      { '@type': 'City',    name: 'Paris'     },
      { '@type': 'City',    name: 'Zurich'    },
      { '@type': 'City',    name: 'Milan'     },
      { '@type': 'City',    name: 'New York'  },
      { '@type': 'City',    name: 'Singapore' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    audience: {
      '@type':      'Audience',
      audienceType: 'Corporate Clients, Financial Institutions, Luxury Brands, Law Firms, Consulting Firms, Event Agencies',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Corporate Chauffeur Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Executive Transport Services Dubai'        } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Airport Transfers Dubai'         } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Staff Transport Luxury UAE'               } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B Chauffeur Account Service UAE'        } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Employee Transport Solutions UAE'         } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Discreet Chauffeur Service Dubai'         } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'High Profile Client Transport UAE'        } },
      ],
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Dedicated Account Manager', value: 'Yes — named contact, 24/7'              },
      { '@type': 'PropertyValue', name: 'Same-Day Dispatch',         value: 'Yes — subject to availability'          },
      { '@type': 'PropertyValue', name: 'Monthly Invoicing',         value: 'Yes — consolidated billing per cost centre' },
      { '@type': 'PropertyValue', name: 'Confidentiality',           value: 'Full NDA available on request'          },
      { '@type': 'PropertyValue', name: 'Vehicle Classes',           value: 'Executive, Premium, SUV, Ultra Luxury'  },
      { '@type': 'PropertyValue', name: 'Global Coverage',           value: '60+ cities across 6 regions'            },
    ],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',                 item: `https://thelimore.com/${locale}`                                    },
        { '@type': 'ListItem', position: 2, name: 'Services',             item: `https://thelimore.com/${locale}/services`                           },
        { '@type': 'ListItem', position: 3, name: 'Corporate Chauffeur',  item: `https://thelimore.com/${locale}/services/corporate-chauffeur`       },
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

export default async function CorporateChauffeurPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <CCHero        locale={locale} />
        <CCProposition locale={locale} />
        <CCFeatures    locale={locale} />
        <CCProcess     locale={locale} />
        <CCIndustries  locale={locale} />
        <CCCTA         locale={locale} />
      </main>
    </>
  )
}