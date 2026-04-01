import HeroSection from '@/components/sections/home/HeroSection'
import TrustBar from '@/components/sections/home/TrustBar'
import AboutStatement from '@/components/sections/home/AboutStatement'
import ServicesSection from '@/components/sections/home/ServicesSection'
import WhyLimore from '@/components/sections/home/WhyLimore'
import GlobalCoverage from '@/components/sections/home/GlobalCoverage'
import ClientSection from '@/components/sections/home/ClientSection'
import CtaBanner from '@/components/sections/home/CtaBanner'

const meta = {
  en: {
    title: 'Limore - Global Luxury Chauffeur Service',
    description: 'Premium chauffeur service across Dubai, London, Paris, New York and Singapore. Corporate, airport transfers and private jet services.',
  },
  ar: {
    title: 'ليمور - خدمة السائق الفاخرة عالميا',
    description: 'خدمة سائق فاخرة في دبي ولندن وباريس ونيويورك وسنغافورة.',
  },
  fr: {
    title: 'Limore - Service Chauffeur Luxe Mondial',
    description: 'Service chauffeur premium a Dubai, Londres, Paris, New York et Singapour.',
  },
}

export async function generateMetadata({ params }) {
  const locale = (await params).locale
  return meta[locale] || meta.en
}

export default async function HomePage({ params }) {
  const locale = (await params).locale

  return (
    <>
      <HeroSection locale={locale} />
      <TrustBar locale={locale} />
      <AboutStatement locale={locale} />
      <ServicesSection locale={locale} />
      <WhyLimore locale={locale} />
      <GlobalCoverage locale={locale} />
      <ClientSection locale={locale} />
      <CtaBanner locale={locale} />
    </>
  )
}