import ATHero     from '@/components/sections/services/airport-transfers/ATHero'
import ATProcess  from '@/components/sections/services/airport-transfers/ATProcess'
import ATFeatures from '@/components/sections/services/airport-transfers/ATFeatures'
import ATCoverage from '@/components/sections/services/airport-transfers/ATCoverage'
import ATCTA      from '@/components/sections/services/airport-transfers/ATCTA'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    en: 'Airport Transfers — Limore Global Luxury Chauffeur',
    ar: 'نقل المطار — ليمور للسائق الفاخر العالمي',
    fr: 'Transferts Aéroport — Limore Chauffeur Luxe Mondial',
  }
  const descriptions = {
    en: 'Flight-tracked luxury airport transfers with meet and greet service. Available 24/7 across 8 global cities. No delays. No compromise.',
    ar: 'نقل مطار فاخر مع تتبع الرحلات وخدمة الاستقبال والترحيب. متاح على مدار الساعة في 8 مدن عالمية.',
    fr: 'Transferts aéroport de luxe avec suivi de vol et service d\'accueil. Disponible 24h/24 dans 8 villes mondiales.',
  }
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  }
}

export default async function AirportTransfersPage({ params }) {
  const { locale } = await params
  return (
    <main>
      <ATHero     locale={locale} />
      <ATProcess  locale={locale} />
      <ATFeatures locale={locale} />
      <ATCoverage locale={locale} />
      <ATCTA      locale={locale} />
    </main>
  )
}