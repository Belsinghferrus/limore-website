import Limore360Hero       from '@/components/sections/limore360/Limore360Hero'
import Limore360What       from '@/components/sections/limore360/Limore360What'
import Limore360Plans      from '@/components/sections/limore360/Limore360Plans'
import Limore360Benefits   from '@/components/sections/limore360/Limore360Benefits'
import Limore360HowItWorks from '@/components/sections/limore360/Limore360HowItWorks'
import Limore360Apply      from '@/components/sections/limore360/Limore360Apply'
import LimoreSolutions from '@/components/sections/limore360/LimoreSolution'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const meta = {
    en: {
      title: 'Limore 360 - Premium Chauffeur Membership Programme',
      description: 'Join Limore 360. A private membership giving you pre-purchased hours, fixed pricing, priority dispatch, and a dedicated account manager. 20h, 50h, or fully custom.',
      keywords: 'luxury chauffeur membership, private driver subscription, corporate chauffeur retainer, Limore 360, executive travel membership',
    },
    ar: {
      title: 'ليمور ٣٦٠ — برنامج عضوية السائق المميز',
      description: 'انضم إلى ليمور ٣٦٠. عضوية خاصة تمنحك ساعات مسبقة الدفع وأسعاراً ثابتة وأولوية الحجز ومدير حساب مخصص.',
      keywords: 'عضوية سائق فاخر، اشتراك سائق خاص، ليمور ٣٦٠',
    },
    fr: {
      title: 'Limore 360 — Programme d\'Abonnement Chauffeur Premium',
      description: 'Rejoignez Limore 360. Un abonnement privé offrant des heures prépayées, des tarifs fixes, la priorité de réservation et un account manager dédié.',
      keywords: 'abonnement chauffeur luxe, retainer chauffeur privé, Limore 360',
    },
  }
  const m = meta[locale] || meta.en
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    openGraph: { title: m.title, description: m.description, type: 'website' },
    alternates: {
      canonical: `https://thelimore.com/${locale}/limore-360`,
      languages: {
        en: 'https://thelimore.com/en/limore-360',
        ar: 'https://thelimore.com/ar/limore-360',
        fr: 'https://thelimore.com/fr/limore-360',
      },
    },
  }
}

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Limore 360 Membership',
    description: 'Premium chauffeur membership programme with pre-purchased hours, fixed pricing, priority dispatch, and dedicated account management.',
    brand: { '@type': 'Brand', name: 'Limore' },
    offers: [
      { '@type': 'Offer', name: 'Limore 360 — 20 Hours', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Limore 360 — 50 Hours', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Limore 360 — Custom',   priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default async function Limore360Page({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd />
      <main>
        <Limore360Hero        locale={locale} />
        <Limore360What        locale={locale} />
        <Limore360Benefits    locale={locale} />
        <Limore360HowItWorks  locale={locale} />
        <LimoreSolutions     locale={locale} />
        <Limore360Plans       locale={locale} />
       
        <Limore360Apply       locale={locale} />
      </main>
    </>
  )
}