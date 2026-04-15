// import PartnerHero from '@/components/sections/partner/PartnerHero.jsx'
// import PartnerWhy from '@/components/sections/partner/PartnerWhy'
// import PartnerRequirements from '@/components/sections/partner/PartnerRequirements'
// import PartnerStandards from '@/components/sections/partner/PartnerStandards'
// import PartnerApply from '@/components/sections/partner/PartnerApply'

// export async function generateMetadata({ params }) {
//   const { locale } = await params
//   const titles = {
//     en: 'Partner With Limore — Global Operator Network',
//     ar: 'شراكة مع ليمور — شبكة المشغلين العالمية',
//     fr: 'Partenaire de Limore — Reseau Mondial d\'Operateurs',
//   }
//   const descriptions = {
//     en: 'Join Limore\'s global ground transport network. We partner with elite local operators in Paris, Milan, and beyond to deliver world-class chauffeur service.',
//     ar: 'انضم إلى شبكة ليمور العالمية للنقل البري. نتعاون مع مشغلين محليين متميزين في باريس وميلانو وما بعدهما.',
//     fr: 'Rejoignez le reseau mondial de transport de Limore. Nous collaborons avec des operateurs locaux d\'elite a Paris, Milan et au-dela.',
//   }
//   return {
//     title: titles[locale] || titles.en,
//     description: descriptions[locale] || descriptions.en,
//   }
// }

// export default async function PartnerPage({ params }) {
//   const { locale } = await params
//   return (
//     <main>
//       <PartnerHero locale={locale} />
//       <PartnerWhy locale={locale} />
//       <PartnerRequirements locale={locale} />
//       <PartnerStandards locale={locale} />
//       <PartnerApply locale={locale} />
//     </main>
//   )
// }


import { buildMeta } from '@/lib/seo'

import PartnerHero         from '@/components/sections/partner/PartnerHero.jsx'
import PartnerWhy          from '@/components/sections/partner/PartnerWhy'
import PartnerRequirements from '@/components/sections/partner/PartnerRequirements'
import PartnerStandards    from '@/components/sections/partner/PartnerStandards'
import PartnerApply        from '@/components/sections/partner/PartnerApply'

const OG_IMAGE = 'https://thelimore.com/images/limore8.jpg'

const meta = {
  en: {
    title:       'Partner With Limore | Join the Global Luxury Chauffeur Operator Network | Limore',
    description: 'Join Limore\'s global ground transport network. We partner with elite local chauffeur operators in Dubai, Paris, Milan, London and beyond to deliver world-class luxury chauffeur service. Apply to become a Limore partner operator.',
    keywords:    'chauffeur operator partner, luxury chauffeur network, global ground transport partner, join chauffeur network, chauffeur franchise Dubai, partner chauffeur service UAE, luxury transport operator, chauffeur business partner, ground transport network worldwide, elite chauffeur operator',
  },
  ar: {
    title:       'شراكة مع ليمور — انضم إلى شبكة مشغلي السائق الفاخر العالمية | ليمور',
    description: 'انضم إلى شبكة ليمور العالمية للنقل البري. نتعاون مع مشغلين محليين متميزين في دبي وباريس وميلانو ولندن وما بعدهما لتقديم خدمة سائق فاخرة على مستوى عالمي.',
    keywords:    'شريك مشغل سائق، شبكة سائق فاخر، شريك نقل بري عالمي، انضم لشبكة سائق، شراكة خدمة سائق الإمارات',
  },
  fr: {
    title:       'Partenaire Limore | Rejoignez le Reseau Mondial d\'Operateurs Chauffeur Luxe | Limore',
    description: 'Rejoignez le reseau mondial de transport de Limore. Nous collaborons avec des operateurs locaux d\'elite a Dubai, Paris, Milan, Londres et au-dela pour offrir un service chauffeur luxe de classe mondiale.',
    keywords:    'operateur partenaire chauffeur, reseau chauffeur luxe, partenaire transport mondial, rejoindre reseau chauffeur, franchise chauffeur Dubai, partenaire service chauffeur UAE, operateur transport luxe',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/partner',
      locale,
      ogImage: OG_IMAGE,
    }),
    keywords,
  }
}

function JsonLd({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'Organization',
    name:       'Limore Global Operator Network',
    description:'Limore partners with elite local chauffeur operators worldwide to deliver a consistent luxury ground transport standard across 60+ cities.',
    url:        `https://thelimore.com/${locale}/partner`,
    logo:       'https://thelimore.com/images/limore-logo.png',
    sameAs: [
      'https://www.instagram.com/limore',
      'https://www.linkedin.com/company/limore',
    ],
    member: {
      '@type':       'OrganizationRole',
      roleName:      'Partner Operator',
      description:   'Elite local ground transport operators vetted and certified to deliver Limore service standards.',
    },
    areaServed: [
      { '@type': 'City',    name: 'Dubai'     },
      { '@type': 'City',    name: 'London'    },
      { '@type': 'City',    name: 'Paris'     },
      { '@type': 'City',    name: 'Milan'     },
      { '@type': 'City',    name: 'Zurich'    },
      { '@type': 'City',    name: 'New York'  },
      { '@type': 'City',    name: 'Singapore' },
      { '@type': 'City',    name: 'Tokyo'     },
    ],
    knowsAbout: [
      'Luxury Chauffeur Service',
      'Corporate Ground Transport',
      'VIP Airport Transfers',
      'Executive Transport',
      'Global Mobility Management',
    ],
    contactPoint: {
      '@type':           'ContactPoint',
      contactType:       'Partner Enquiries',
      url:               `https://thelimore.com/${locale}/partner#apply`,
      availableLanguage: ['English', 'Arabic', 'French'],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',    item: `https://thelimore.com/${locale}`          },
        { '@type': 'ListItem', position: 2, name: 'Partner', item: `https://thelimore.com/${locale}/partner`  },
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

export default async function PartnerPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <PartnerHero         locale={locale} />
        <PartnerWhy          locale={locale} />
        <PartnerRequirements locale={locale} />
        <PartnerStandards    locale={locale} />
        <PartnerApply        locale={locale} />
      </main>
    </>
  )
}