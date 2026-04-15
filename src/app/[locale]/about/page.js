import { buildMeta } from '@/lib/seo'

import AboutHero    from '@/components/sections/about/AboutHero'
import AboutMission from '@/components/sections/about/AboutMission'
import AboutStory   from '@/components/sections/about/AboutStory'
import AboutValues  from '@/components/sections/about/AboutValues'
import AboutTeam    from '@/components/sections/about/AboutTeam'
import AboutGlobal  from '@/components/sections/about/AboutGlobal'
import AboutCTA     from '@/components/sections/about/AboutCTA'

const OG_IMAGE = 'https://thelimore.com/images/limore2.jpg'

const meta = {
  en: {
    title:       'About Limore - Premium Chauffeur Service Trusted Globally',
    description: 'Limore is a global luxury chauffeur company trusted by corporations, luxury brands and private clients in Dubai, London, Paris and beyond. Learn our story, mission and standards.',
  },
  ar: {
    title:       'عن ليمور — خدمة سائق فاخرة موثوقة عالميا',
    description: 'ليمور شركة سائق فاخرة عالمية موثوقة من الشركات والعلامات التجارية الفاخرة والعملاء الخاصين في دبي ولندن وباريس وما بعدهما. تعرف على قصتنا ومهمتنا ومعاييرنا.',
  },
  fr: {
    title:       'A Propos de Limore — Service Chauffeur Luxe de Confiance Mondiale',
    description: 'Limore est une societe mondiale de chauffeurs de luxe approuvee par les entreprises, les marques de luxe et les clients prives a Dubai, Londres, Paris et au-dela.',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description } = meta[locale] || meta.en

  return buildMeta({
    title,
    description,
    path:    '/about',
    locale,
    ogImage: OG_IMAGE,
  })
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