import CookiesContent from '@/components/sections/cookies/CookiesContent'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    en: 'Cookie Policy — Limore',
    ar: 'سياسة ملفات تعريف الارتباط — ليمور',
    fr: 'Politique de Cookies — Limore',
  }
  const descriptions = {
    en: 'Learn how Limore uses cookies and similar tracking technologies on its website and platform.',
    ar: 'تعرف على كيفية استخدام ليمور لملفات تعريف الارتباط وتقنيات التتبع المماثلة.',
    fr: 'Decouvrez comment Limore utilise les cookies et technologies de suivi similaires.',
  }
  return {
    title:       titles[locale]       || titles.en,
    description: descriptions[locale] || descriptions.en,
  }
}

export default async function CookiesPage({ params }) {
  const { locale } = await params
  return (
    <main>
      <CookiesContent locale={locale} />
    </main>
  )
}