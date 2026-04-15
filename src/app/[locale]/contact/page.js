import { buildMeta } from '@/lib/seo'

import ContactHero        from '@/components/sections/contact/ContactHero'
import ContactBookingForm from '@/components/sections/contact/ContactBookingForm'
import ContactCTA         from '@/components/sections/contact/ContactCTA'
import ContactFAQ         from '@/components/sections/contact/ContactFAQ'
import ContactWhatsApp    from '@/components/sections/contact/ContactWhatsApp'

const OG_IMAGE = 'https://thelimore.com/images/limore9.jpg'

const meta = {
  en: {
    title:       'Book a Chauffeur | 24/7 Luxury Chauffeur Reservations Dubai & Worldwide | Limore',
    description: 'Book your Limore luxury chauffeur online. VIP airport transfers, executive corporate travel, hourly hire and on-demand chauffeur service in Dubai and worldwide. Available 24/7.',
    keywords:    'book chauffeur Dubai, luxury chauffeur reservation, hire chauffeur Dubai, VIP airport transfer booking, executive car reservation Dubai, chauffeur on demand UAE, corporate chauffeur booking, private driver Dubai, contact limore, limore 360 enquiry',
  },
  ar: {
    title:       'احجز سائقا — حجوزات سائق فاخر 24/7 في دبي وعالميا | ليمور',
    description: 'احجز سائقك الفاخر من ليمور عبر الإنترنت. نقل مطار VIP، سفر مؤسسي تنفيذي، تأجير بالساعة وخدمة سائق عند الطلب في دبي وحول العالم. متاح على مدار الساعة.',
    keywords:    'حجز سائق دبي، حجز سائق فاخر، استئجار سائق دبي، حجز نقل مطار VIP، حجز سيارة تنفيذية دبي، سائق عند الطلب الإمارات',
  },
  fr: {
    title:       'Reserver un Chauffeur | Reservations 24h/24 Dubai et Mondial | Limore',
    description: 'Reservez votre chauffeur de luxe Limore en ligne. Transferts aeroport VIP, voyage d\'affaires executif, location a l\'heure et service chauffeur a la demande a Dubai et dans le monde entier.',
    keywords:    'reserver chauffeur Dubai, reservation chauffeur luxe, louer chauffeur Dubai, transfert aeroport VIP, reservation voiture executive Dubai, chauffeur a la demande UAE',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const { title, description, keywords } = meta[locale] || meta.en

  return {
    ...buildMeta({
      title,
      description,
      path:    '/contact',
      locale,
      ogImage: OG_IMAGE,
    }),
    keywords,
  }
}

function JsonLd({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'ContactPage',
    name:       'Limore — Book a Chauffeur',
    description:'Book executive luxury chauffeur services, VIP airport transfers, corporate travel and on-demand chauffeur hire in Dubai and worldwide.',
    url:        `https://thelimore.com/${locale}/contact`,
    provider: {
      '@type':  'Organization',
      name:     'Limore',
      url:      'https://thelimore.com',
      logo:     'https://thelimore.com/images/limore-logo.png',
      sameAs: [
        'https://www.instagram.com/limore',
        'https://www.linkedin.com/company/limore',
      ],
      contactPoint: {
        '@type':           'ContactPoint',
        telephone:         '+971-50-000-0000',
        contactType:       'Reservations',
        availableLanguage: ['English', 'Arabic', 'French'],
        hoursAvailable:    'Mo-Su 00:00-24:00',
        areaServed:        ['AE', 'GB', 'FR', 'US', 'SG'],
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',    item: `https://thelimore.com/${locale}`         },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `https://thelimore.com/${locale}/contact` },
      ],
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
      <JsonLd locale={locale} />
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