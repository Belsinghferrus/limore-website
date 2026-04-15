import PrivacyContent from '@/components/sections/privacy/PrivacyContent'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    en: 'Privacy Policy — Limore',
    ar: 'سياسة الخصوصية — ليمور',
    fr: 'Politique de Confidentialite — Limore',
  }
  const descriptions = {
    en: 'Limore Privacy Policy — how we collect, use and protect your personal data.',
    ar: 'سياسة خصوصية ليمور — كيف نجمع بياناتك الشخصية ونستخدمها ونحميها.',
    fr: 'Politique de confidentialite Limore — comment nous collectons, utilisons et protegeon vos donnees personnelles.',
  }
  return {
    title:       titles[locale]       || titles.en,
    description: descriptions[locale] || descriptions.en,
  }
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params
  return (
    <main>
      <PrivacyContent locale={locale} />
    </main>
  )
}