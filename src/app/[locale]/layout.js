// import '@/styles/globals.css'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
// import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
// import CookieBanner from '@/components/ui/CookieBanner'
// import BookingNudge from '@/components/ui/BookingNudge'

// export const metadata = {
//   title: {
//     default: 'Limore - Global Luxury Chauffeur Service',
//     template: '%s | Limore',
//   },
//   description: 'Premium chauffeur-driven limousine service across global cities.',
// }

// export default async function LocaleLayout({ children, params }) {
//     const { locale } = await params 
//   return (
//     <html lang={locale}>
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//       </head>
//       <body>
//         <Navbar locale={locale} />
//         <main>{children}</main>
//         <Footer locale={locale} />
//         <FloatingWhatsApp locale={locale} /> 
//         <CookieBanner locale={locale} /> 
//         <BookingNudge locale={locale} /> 
//       </body>
//     </html>
//   )
// }




import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import CookieBanner from '@/components/ui/CookieBanner'
import BookingNudge from '@/components/ui/BookingNudge'

// ─── Fonts via next/font (no layout shift, no extra CDN request) ───────────────
const inter = Inter({
  subsets:  ['latin'],
  display:  'swap',
  variable: '--font-inter',
})

// ─── Supported locales ─────────────────────────────────────────────────────────
const localeMap = {
  en: { lang: 'en', dir: 'ltr' },
  ar: { lang: 'ar', dir: 'rtl' },
  fr: { lang: 'fr', dir: 'ltr' },
}

// ─── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    en: 'Limore - Global Luxury Chauffeur Service',
    ar: 'ليمور-— خدمة السائق الفاخرة العالمية',
    fr: 'Limore - Service de Chauffeur Luxe Mondial',
  }
  const descriptions = {
    en: 'Premium chauffeur-driven limousine service across global cities. Executive, discreet, and always on time.',
    ar: 'خدمة ليموزين فاخرة بسائق خاص في المدن العالمية. تنفيذية، سرية، وفي الموعد دائمًا.',
    fr: 'Service de limousine haut de gamme avec chauffeur dans les grandes villes mondiales.',
  }
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thelimore.com'

  return {
    title: {
      default:  titles[locale]  || titles.en,
      template: '%s | Limore',
    },
    description: descriptions[locale] || descriptions.en,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        fr: `${baseUrl}/fr`,
      },
    },
    openGraph: {
      title:       titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url:         `${baseUrl}/${locale}`,
      siteName:    'Limore',
      locale:      locale,
      type:        'website',
      images: [
        {
          url:    `${baseUrl}/limore1.jpg`,
          width:  1200,
          height: 630,
          alt:    'Limore — Luxury Chauffeur Service',
        },
      ],
    },
    twitter: {
      card:        'summary_large_image',
      title:       titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      images:      [`${baseUrl}/limore1.jpg`],
    },
    robots: {
      index:          true,
      follow:         true,
      googleBot: {
        index:             true,
        follow:            true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet':       -1,
      },
    },
    icons: {
      icon:  '/favico.svg',
      apple: '/favico.svg',
    },
  }
}

// ─── Layout ────────────────────────────────────────────────────────────────────
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  const { lang, dir } = localeMap[locale] || localeMap.en
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://limore.ae'

  return (
    <html
      lang={lang}
      dir={dir}
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect for Cormorant Garamond — loaded via CDN in globals.css */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preconnect Sanity CDN */}
        <link rel="preconnect" href="https://cdn.sanity.io" />

        {/* Favicon */}
        <link rel="icon"             href="/favico.svg" sizes="any" />
        <link rel="icon"             href="/favico.svg"    type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favico.svg" />
        <link rel="manifest"         href="/manifest.json" />

        {/* Theme color */}
        <meta name="theme-color" content="#080808" />
        <meta name="color-scheme" content="dark" />

        {/* Canonical + hreflang (redundant with generateMetadata but belt-and-suspenders) */}
        <link rel="canonical" href={`${baseUrl}/${locale}`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />

        {/* Inline consent-aware analytics — runs before React hydrates */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var consent = JSON.parse(localStorage.getItem('limore_cookie_consent') || 'null');
                  if (consent && consent.analytics) {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ window.dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || ''}');
                    var s = document.createElement('script');
                    s.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || ''}';
                    s.async = true;
                    document.head.appendChild(s);
                  }
                } catch(e) {}
              })();
            `,
          }}
        /> */}


      </head>

      <body>
      
        <Navbar locale={locale} />

        <main id="main-content">
          {children}
        </main>

        <Footer locale={locale} />

        {/* ── Floating UI — rendered after main content, lowest z-index first ── */}
        <BookingNudge    locale={locale} />   {/* z-index: 9997 */}
        <CookieBanner    locale={locale} />   {/* z-index: 9998 */}
        <FloatingWhatsApp locale={locale} />  {/* z-index: 9999 */}
      </body>
    </html>
  )
}