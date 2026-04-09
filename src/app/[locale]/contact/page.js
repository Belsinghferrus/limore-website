import ContactHero        from '@/components/sections/contact/ContactHero'
import ContactBookingForm from '@/components/sections/contact/ContactBookingForm'
import ContactCTA         from '@/components/sections/contact/ContactCTA'
import ContactFAQ         from '@/components/sections/contact/ContactFAQ'
import ContactWhatsApp    from '@/components/sections/contact/ContactWhatsApp'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const meta = {
    en: {
      title:       'Contact & Bookings | Executive Chauffeur Reservations — Limore',
      description: 'Book your Limore chauffeur, enquire about Limore 360 membership, or contact our corporate mobility team. Available 24/7 across Dubai and worldwide.',
      keywords:    'contact limore, chauffeur booking, executive car reservation, limore 360 enquiry, corporate chauffeur dubai',
    },
    ar: {
      title:       'اتصل بنا والحجوزات | حجوزات السائق التنفيذي — ليمور',
      description: 'احجز سائقك من ليمور، أو استفسر عن عضوية ليمور 360، أو تواصل مع فريق التنقل المؤسسي لدينا. متاح على مدار الساعة.',
      keywords:    'اتصل بليمور، حجز سائق، سيارة تنفيذية، ليمور 360',
    },
    fr: {
      title:       'Contact & Réservations | Chauffeur Exécutif — Limore',
      description: 'Réservez votre chauffeur Limore, renseignez-vous sur l\'adhésion Limore 360 ou contactez notre équipe de mobilité corporate. Disponible 24h/24.',
      keywords:    'contact limore, réservation chauffeur, voiture executive, limore 360, chauffeur dubai',
    },
  }
  const m = meta[locale] || meta.en
  return {
    title:       m.title,
    description: m.description,
    keywords:    m.keywords,
    openGraph: {
      title:       m.title,
      description: m.description,
      type:        'website',
    },
    alternates: {
      canonical: `https://thelimore.com/${locale}/contact`,
      languages: {
        en: 'https://thelimore.com/en/contact',
        ar: 'https://thelimore.com/ar/contact',
        fr: 'https://thelimore.com/fr/contact',
      },
    },
  }
}

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'ContactPage',
    name:       'Limore — Contact & Bookings',
    description:'Book executive chauffeur services, enquire about Limore 360 membership, or contact the Limore corporate mobility team.',
    url:        'https://thelimore.com/en/contact',
    provider: {
      '@type': 'Organization',
      name:    'Limore',
      url:     'https://thelimore.com',
      contactPoint: {
        '@type':            'ContactPoint',
        telephone:          '+971-50-000-0000',
        contactType:        'Reservations',
        availableLanguage:  ['English', 'Arabic', 'French'],
        hoursAvailable:     'Mo-Su 00:00-24:00',
      },
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function ContactPage({ params }) {
  const { locale } = await params
  return (
    <>
      <JsonLd />
      <main>
        <ContactHero        locale={locale} />
        <ContactBookingForm locale={locale} />
        <ContactCTA         locale={locale} />
        <ContactFAQ         locale={locale} />
        <ContactWhatsApp    locale={locale} />
      </main>
    </>
  )
}