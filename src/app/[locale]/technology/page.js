import { buildMeta } from '@/lib/seo'

import TechHero      from '@/components/sections/technology/TechHero'
import TechTracking  from '@/components/sections/technology/TechTracking'
import TechDispatch  from '@/components/sections/technology/TechDispatch'
import TechDashboard from '@/components/sections/technology/TechDashboard'
import TechCTA       from '@/components/sections/technology/TechCTA'

const OG_IMAGE = 'https://thelimore.com/images/limore7.jpg'

const meta = {
  en: {
    title:       'Limore Technology | Real-Time Chauffeur Tracking, Global Dispatch & Client Dashboard | Limore',
    description: 'Limore runs on real-time GPS tracking, global dispatch infrastructure and a dedicated client dashboard built for corporate-grade reliability. Sub-2 second location refresh, 40+ cities connected, 24/7 dispatch uptime.',
    keywords:    'chauffeur tracking technology, real-time chauffeur tracking Dubai, luxury chauffeur dispatch system, corporate chauffeur platform UAE, client chauffeur dashboard, live GPS chauffeur Dubai, global dispatch chauffeur service, professional chauffeur service Dubai, executive chauffeur service UAE, reliable chauffeur service Dubai airport, chauffeur technology platform, premium chauffeur service Dubai',
  },
  ar: {
    title:       'تكنولوجيا ليمور — تتبع السائق في الوقت الفعلي، الإرسال العالمي ولوحة تحكم العميل | ليمور',
    description: 'تعمل ليمور بتتبع GPS في الوقت الفعلي وبنية إرسال عالمية ولوحة تحكم مخصصة للعملاء مصممة لموثوقية على مستوى الشركات. تحديث موقع أقل من ثانيتين، 40+ مدينة مترابطة، تشغيل إرسال 24/7.',
    keywords:    'تكنولوجيا تتبع السائق، تتبع سائق في الوقت الفعلي دبي، نظام إرسال سائق فاخر، منصة سائق مؤسسي الإمارات، لوحة تحكم عميل السائق',
  },
  fr: {
    title:       'Technologie Limore | Suivi Chauffeur Temps Reel, Dispatch Mondial & Tableau de Bord | Limore',
    description: 'Limore fonctionne avec un suivi GPS en temps reel, une infrastructure de dispatch mondiale et un tableau de bord client dedie pour une fiabilite de niveau entreprise. Actualisation de position en moins de 2 secondes, 40+ villes connectees, disponibilite dispatch 24/7.',
    keywords:    'technologie suivi chauffeur, suivi chauffeur temps reel Dubai, systeme dispatch chauffeur luxe, plateforme chauffeur corporate UAE, tableau de bord client chauffeur, GPS chauffeur Dubai, service chauffeur professionnel Dubai',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/technology',
      locale,
      ogImage: OG_IMAGE,
    }),
    keywords,
  }
}

function JsonLd({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'SoftwareApplication',
    name:       'Limore Precision Mobility Platform',
    description:'Real-time GPS chauffeur tracking, global dispatch infrastructure and a dedicated corporate client dashboard. Sub-2 second location refresh across 40+ cities worldwide.',
    url:        `https://thelimore.com/${locale}/technology`,
    image:      OG_IMAGE,
    applicationCategory: 'BusinessApplication',
    operatingSystem:     'Web, iOS, Android',
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
    featureList: [
      'Real-time GPS tracking with sub-2 second refresh',
      'Global dispatch across 40+ cities',
      '24/7 dispatch uptime',
      'Live ETA recalculation during traffic',
      'Push notifications on chauffeur departure',
      'Corporate client dashboard with booking history',
      'PDF invoice management by date, city and cost centre',
      'Team access with role-based permissions',
      'Journey history and route replay',
      'Chauffeur preference management',
    ],
    audience: {
      '@type':      'Audience',
      audienceType: 'Corporate Clients, Travel Managers, Executive Assistants, VIP Private Clients',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Location Refresh Rate', value: 'Sub-2 seconds'       },
      { '@type': 'PropertyValue', name: 'Cities Connected',      value: '40+'                  },
      { '@type': 'PropertyValue', name: 'Dispatch Uptime',       value: '24/7 — 99.9% SLA'    },
      { '@type': 'PropertyValue', name: 'Dashboard Access',      value: 'Corporate & frequent clients' },
      { '@type': 'PropertyValue', name: 'Invoice Export',        value: 'PDF — filterable by date, city, cost centre' },
    ],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',       item: `https://thelimore.com/${locale}`             },
        { '@type': 'ListItem', position: 2, name: 'Technology', item: `https://thelimore.com/${locale}/technology`  },
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

export default async function TechnologyPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <TechHero      locale={locale} />
        <TechTracking  locale={locale} />
        <TechDispatch  locale={locale} />
        <TechDashboard locale={locale} />
        <TechCTA       locale={locale} />
      </main>
    </>
  )
}