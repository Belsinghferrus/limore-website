import FleetHero   from '@/components/sections/fleet/FleetHero'
import FleetFilter from '@/components/sections/fleet/FleetFilter'
import FleetGrid   from '@/components/sections/fleet/FleetGrid'
import FleetCTA    from '@/components/sections/fleet/FleetCTA'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const meta = {
    en: {
      title: 'Our Fleet | Luxury Chauffeur Vehicles — Limore',
      description: 'Browse the Limore fleet — Mercedes S-Class, Rolls-Royce Phantom, Range Rover Vogue, Maybach, BMW 7 Series and more. Executive, premium, SUV, ultra luxury, electric and group vehicles available across 8 global cities.',
      keywords: 'luxury chauffeur fleet, Mercedes S-Class hire, Rolls-Royce chauffeur, Range Rover chauffeur, Maybach hire Dubai, luxury car service',
    },
    ar: {
      title: 'أسطولنا | مركبات سائق فاخرة — ليمور',
      description: 'تصفح أسطول ليمور — مرسيدس فئة S، رولز رويس فانتوم، رنج روفر فوج، مايباخ، BMW الفئة السابعة والمزيد.',
      keywords: 'أسطول سائق فاخر، استئجار مرسيدس فئة S، سائق رولز رويس، سائق رنج روفر',
    },
    fr: {
      title: 'Notre Flotte | Véhicules Chauffeur Luxe — Limore',
      description: 'Parcourez la flotte Limore — Mercedes Classe S, Rolls-Royce Phantom, Range Rover Vogue, Maybach, BMW Série 7 et plus.',
      keywords: 'flotte chauffeur luxe, location Mercedes Classe S, chauffeur Rolls-Royce, chauffeur Range Rover',
    },
  }
  const m = meta[locale] || meta.en
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    openGraph: { title: m.title, description: m.description, type: 'website' },
    alternates: {
      canonical: `https://thelimore.com/${locale}/fleet`,
      languages: {
        en: 'https://thelimore.com/en/fleet',
        ar: 'https://thelimore.com/ar/fleet',
        fr: 'https://thelimore.com/fr/fleet',
      },
    },
  }
}

function JsonLd({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Limore Luxury Fleet',
    description: 'Premium chauffeur vehicles available for corporate and private hire.',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Mercedes-Benz S-Class', url: `https://thelimore.com/${locale}/fleet/mercedes-s-class` },
      { '@type': 'ListItem', position: 2, name: 'Rolls-Royce Phantom',   url: `https://thelimore.com/${locale}/fleet/rolls-royce-phantom` },
      { '@type': 'ListItem', position: 3, name: 'Range Rover Vogue',     url: `https://thelimore.com/${locale}/fleet/range-rover-vogue` },
      { '@type': 'ListItem', position: 4, name: 'Mercedes-Maybach S 680',url: `https://thelimore.com/${locale}/fleet/mercedes-maybach` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default async function FleetPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd locale={locale} />
      <main>
        <FleetHero   locale={locale} />
        {/* <FleetFilter locale={locale} /> */}
        <FleetGrid   locale={locale} />
        <FleetCTA    locale={locale} />
      </main>
    </>
  )
}