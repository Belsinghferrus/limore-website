import AboutHero    from '@/components/sections/about/AboutHero'
import AboutMission from '@/components/sections/about/AboutMission'
import AboutStory   from '@/components/sections/about/AboutStory'
import AboutValues  from '@/components/sections/about/AboutValues'
import AboutTeam    from '@/components/sections/about/AboutTeam'
import AboutGlobal  from '@/components/sections/about/AboutGlobal'
import AboutCTA     from '@/components/sections/about/AboutCTA'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    en: 'About Limore — Global Luxury Chauffeur Service',
    ar: 'عن ليمور — خدمة السائق الفاخرة العالمية',
    fr: 'À Propos de Limore — Service Chauffeur Luxe Mondial',
  }
  const descriptions = {
    en: 'Learn about Limore, the global precision mobility partner trusted by corporations, luxury brands and private clients across the world.',
    ar: 'تعرف على ليمور، شريك التنقل الدقيق العالمي الموثوق به من قبل الشركات والعلامات الفاخرة.',
    fr: 'Découvrez Limore, le partenaire mondial de mobilité de précision approuvé par les entreprises et marques de luxe.',
  }
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  }
}

export default async function AboutPage({ params }) {
  const { locale } = await params
  return (
    <main>
      <AboutHero    locale={locale} />
      <AboutMission locale={locale} />
      <AboutStory   locale={locale} />
      <AboutValues  locale={locale} />
      <AboutTeam    locale={locale} />
      <AboutGlobal  locale={locale} />
      <AboutCTA     locale={locale} />
    </main>
  )
}