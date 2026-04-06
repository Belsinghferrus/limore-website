import CorporateHero           from '@/components/sections/corporate/CorporateHero'
import CorporateLogos          from '@/components/sections/corporate/CorporateLogos'
import CorporateWhy            from '@/components/sections/corporate/CorporateWhy'
import CorporateBookingSystem  from '@/components/sections/corporate/CorporateBookingSystem'
import CorporateAccountManager from '@/components/sections/corporate/CorporateAccountManager'
import CorporateBilling        from '@/components/sections/corporate/CorporateBilling'
import CorporateIndustries     from '@/components/sections/corporate/CorporateIndustries'
import CorporateEnquiry        from '@/components/sections/corporate/CorporateEnquiry'

export async function generateMetadata({ params }) {
  const { locale } = await params
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
  const m = meta[locale] || meta.en
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    openGraph: { title: m.title, description: m.description, type: 'website' },
    alternates: {
      canonical: `https://thelimore.com/${locale}/corporate`,
      languages: {
        en: 'https://thelimore.com/en/corporate',
        ar: 'https://thelimore.com/ar/corporate',
        fr: 'https://thelimore.com/fr/corporate',
      },
    },
  }
}

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Limore Corporate Chauffeur Solutions',
    description: 'Dedicated corporate ground transport accounts with global coverage, dedicated account managers, and managed monthly billing for enterprise clients.',
    provider: { '@type': 'Organization', name: 'Limore', url: 'https://thelimore.com' },
    serviceType: 'Corporate Chauffeur Service',
    areaServed: 'Worldwide',
    audience: {
      '@type': 'Audience',
      audienceType: 'Corporate, Financial Institutions, Luxury Brands, Event Agencies',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default async function CorporatePage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd />
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