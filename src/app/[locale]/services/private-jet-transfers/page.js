import PJHero     from '@/components/sections/services/private-jet/PJHero'
import PJStandard from '@/components/sections/services/private-jet/PJStandard'
import PJProcess  from '@/components/sections/services/private-jet/PJProcess'
import PJFBOs     from '@/components/sections/services/private-jet/PJFBOs'
import PJCTA      from '@/components/sections/services/private-jet/PJCTA'

export async function generateMetadata({ params }) {
  const { locale } = await params

  const meta = {
    en: {
      title: 'Private Jet Transfer Service | Tarmac to Destination — Limore',
      description: 'Luxury chauffeur transfers for private jet passengers. Direct tarmac coordination, FBO access, flight monitoring, and discreet ground transport from aircraft to destination across Dubai, London, Paris, Geneva and 4 more cities.',
      keywords: 'private jet transfer, FBO chauffeur service, tarmac pickup, private aviation ground transport, luxury jet transfer Dubai, private jet chauffeur London, FBO transfer service',
    },
    ar: {
      title: 'خدمة نقل الطائرات الخاصة | من المدرج إلى الوجهة — ليمور',
      description: 'نقل فاخر بالسائق لركاب الطائرات الخاصة. تنسيق مباشر على المدرج والوصول إلى مجمعات الطيران الخاص ومراقبة الرحلات ونقل أرضي سري.',
      keywords: 'نقل الطائرة الخاصة, خدمة سائق مجمع الطيران, استقبال على المدرج, نقل أرضي فاخر',
    },
    fr: {
      title: 'Service Transfert Jet Privé | Du Tarmac à la Destination — Limore',
      description: 'Transferts chauffeur luxe pour passagers jet privé. Coordination directe sur le tarmac, accès FBO, suivi de vol et transport terrestre discret vers la destination.',
      keywords: 'transfert jet privé, service chauffeur FBO, prise en charge tarmac, transport aviation privée luxe',
    },
  }

  const m = meta[locale] || meta.en

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    openGraph: {
      title: m.title,
      description: m.description,
      type: 'website',
    },
    alternates: {
      canonical: `https://thelimore.com/${locale}/services/private-jet-transfers`,
      languages: {
        en: 'https://thelimore.com/en/services/private-jet-transfers',
        ar: 'https://thelimore.com/ar/services/private-jet-transfers',
        fr: 'https://thelimore.com/fr/services/private-jet-transfers',
      },
    },
  }
}

function JsonLd({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: locale === 'ar'
      ? 'خدمة نقل الطائرات الخاصة'
      : locale === 'fr'
      ? 'Service Transfert Jet Privé'
      : 'Private Jet Transfer Service',
    provider: {
      '@type': 'Organization',
      name: 'Limore',
      url: 'https://thelimore.com',
    },
    description: 'Luxury chauffeur transfers for private jet passengers. Tarmac coordination, FBO access, real-time flight monitoring, and discreet ground transport across global cities.',
    areaServed: ['Dubai', 'Abu Dhabi', 'London', 'Paris', 'Geneva', 'Zurich', 'Frankfurt', 'Riyadh'],
    serviceType: 'Private Jet Chauffeur Transfer',
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