import TermsContent from '@/components/sections/terms/TermsContent'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    en: 'Terms & Conditions — Limore',
    ar: 'الشروط والأحكام — ليمور',
    fr: 'Conditions Generales — Limore',
  }
  const descriptions = {
    en: 'Limore Terms & Conditions — the rules that govern your use of our services and platform.',
    ar: 'شروط وأحكام ليمور — القواعد التي تحكم استخدامك لخدماتنا ومنصتنا.',
    fr: 'Conditions generales Limore — les regles qui regissent votre utilisation de nos services.',
  }
  return {
    title:       titles[locale]       || titles.en,
    description: descriptions[locale] || descriptions.en,
  }
}

export default async function TermsPage({ params }) {
  const { locale } = await params
  return (
    <main>
      <TermsContent locale={locale} />
    </main>
  )
}