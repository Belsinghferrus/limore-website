import CCHero        from '@/components/sections/services/corporate-chauffeur/CCHero'
import CCProposition from '@/components/sections/services/corporate-chauffeur/CCProposition'
import CCFeatures    from '@/components/sections/services/corporate-chauffeur/CCFeatures'
import CCProcess     from '@/components/sections/services/corporate-chauffeur/CCProcess'
import CCIndustries  from '@/components/sections/services/corporate-chauffeur/CCIndustries'
import CCCTA         from '@/components/sections/services/corporate-chauffeur/CCCTA'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    en: 'Corporate Chauffeur Services — Limore Global Luxury',
    ar: 'خدمات السائق المؤسسي — ليمور الفاخرة العالمية',
    fr: 'Services Chauffeur Corporate — Limore Luxe Mondial',
  }
  const descriptions = {
    en: 'Dedicated corporate chauffeur services for global businesses. Dedicated account managers, same-day dispatch, monthly invoicing, and complete confidentiality across 8 cities.',
    ar: 'خدمات سائق مؤسسي مخصصة للشركات العالمية. مديرو حسابات مخصصون وإرسال في نفس اليوم وفوترة شهرية وسرية تامة.',
    fr: 'Services chauffeur corporate pour les entreprises mondiales. Gestionnaires dédiés, dispatch le jour même, facturation mensuelle et confidentialité totale.',
  }
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  }
}

export default async function CorporateChauffeurPage({ params }) {
  const { locale } = await params
  return (
    <main>
      <CCHero        locale={locale} />
      <CCProposition locale={locale} />
      <CCFeatures    locale={locale} />
      <CCProcess     locale={locale} />
      <CCIndustries  locale={locale} />
      <CCCTA         locale={locale} />
    </main>
  )
}