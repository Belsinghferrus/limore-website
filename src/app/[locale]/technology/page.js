import TechHero      from '@/components/sections/technology/TechHero'
import TechTracking  from '@/components/sections/technology/TechTracking'
import TechDispatch  from '@/components/sections/technology/TechDispatch'
import TechDashboard from '@/components/sections/technology/TechDashboard'
import TechCTA       from '@/components/sections/technology/TechCTA'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    en: 'Technology — Limore Precision Mobility Platform',
    ar: 'التكنولوجيا — منصة ليمور للتنقل الدقيق',
    fr: 'Technologie — Plateforme de Mobilite de Precision Limore',
  }
  const descriptions = {
    en: 'Limore runs on real-time tracking, global dispatch infrastructure and a dedicated client dashboard built for corporate-grade reliability.',
    ar: 'تعمل ليمور بتتبع في الوقت الفعلي وبنية إرسال عالمية ولوحة تحكم مخصصة للعملاء مصممة لموثوقية على مستوى الشركات.',
    fr: 'Limore fonctionne avec un suivi en temps reel, une infrastructure de dispatch mondiale et un tableau de bord client dedie pour une fiabilite de niveau entreprise.',
  }
  return {
    title:       titles[locale]       || titles.en,
    description: descriptions[locale] || descriptions.en,
  }
}

export default async function TechnologyPage({ params }) {
  const { locale } = await params
  return (
    <main>
      <TechHero      locale={locale} />  {/* BLACK  */}
      <TechTracking  locale={locale} />  {/* WHITE  */}
      <TechDispatch  locale={locale} />  {/* BLACK  */}
      <TechDashboard locale={locale} />  {/* WHITE  */}
      <TechCTA       locale={locale} />  {/* BLACK  */}
    </main>
  )
}