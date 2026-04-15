import PartnerHero from '@/components/sections/partner/PartnerHero.jsx'
import PartnerWhy from '@/components/sections/partner/PartnerWhy'
import PartnerRequirements from '@/components/sections/partner/PartnerRequirements'
import PartnerStandards from '@/components/sections/partner/PartnerStandards'
import PartnerApply from '@/components/sections/partner/PartnerApply'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    en: 'Partner With Limore — Global Operator Network',
    ar: 'شراكة مع ليمور — شبكة المشغلين العالمية',
    fr: 'Partenaire de Limore — Reseau Mondial d\'Operateurs',
  }
  const descriptions = {
    en: 'Join Limore\'s global ground transport network. We partner with elite local operators in Paris, Milan, and beyond to deliver world-class chauffeur service.',
    ar: 'انضم إلى شبكة ليمور العالمية للنقل البري. نتعاون مع مشغلين محليين متميزين في باريس وميلانو وما بعدهما.',
    fr: 'Rejoignez le reseau mondial de transport de Limore. Nous collaborons avec des operateurs locaux d\'elite a Paris, Milan et au-dela.',
  }
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  }
}

export default async function PartnerPage({ params }) {
  const { locale } = await params
  return (
    <main>
      <PartnerHero locale={locale} />
      <PartnerWhy locale={locale} />
      <PartnerRequirements locale={locale} />
      <PartnerStandards locale={locale} />
      <PartnerApply locale={locale} />
    </main>
  )
}