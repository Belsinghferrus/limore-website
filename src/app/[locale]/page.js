import { buildMeta } from '@/lib/seo'

import HeroSection     from '@/components/sections/home/HeroSection'
import TrustBar        from '@/components/sections/home/TrustBar'
import AboutStatement  from '@/components/sections/home/AboutStatement'
import ServicesSection from '@/components/sections/home/ServicesSection'
import WhyLimore       from '@/components/sections/home/WhyLimore'
import GlobalCoverage  from '@/components/sections/home/GlobalCoverage'
import ClientSection   from '@/components/sections/home/ClientSection'
import CtaBanner       from '@/components/sections/home/CtaBanner'

const OG_IMAGE = 'https://thelimore.com/images/limore1.jpg'

const meta = {
  en: {
    title:       'Limore | Luxury Chauffeur Service Dubai, London, Paris & Worldwide',
    description: 'Premium luxury chauffeur service in Dubai, London, Paris, New York and Singapore. VIP airport transfers, corporate travel, executive chauffeur hire and private car with driver worldwide.',
  },
  ar: {
    title:       'ليمور | خدمة السائق الفاخرة في دبي ولندن وباريس وعالميا',
    description: 'خدمة سائق فاخرة في دبي ولندن وباريس ونيويورك وسنغافورة. نقل مطار VIP، سفر مؤسسي، تأجير سائق تنفيذي وسيارة خاصة مع سائق حول العالم.',
  },
  fr: {
    title:       'Limore | Service Chauffeur Luxe a Dubai, Londres, Paris et dans le Monde',
    description: 'Service chauffeur luxe premium a Dubai, Londres, Paris, New York et Singapour. Transferts aeroport VIP, voyage d\'affaires, location de chauffeur executif et voiture privee avec chauffeur dans le monde entier.',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description } = meta[locale] || meta.en

  return buildMeta({
    title,
    description,
    path:    '',
    locale,
    ogImage: OG_IMAGE,
  })
}

export default async function HomePage({ params }) {
  const { locale } = await params

  return (
    <>
      <HeroSection     locale={locale} />
      <TrustBar        locale={locale} />
      <AboutStatement  locale={locale} />
      <WhyLimore       locale={locale} />
      <ServicesSection locale={locale} />
      <GlobalCoverage  locale={locale} />
      <ClientSection   locale={locale} />
      <CtaBanner       locale={locale} />
    </>
  )
}