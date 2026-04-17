


// import '@/styles/globals.css'
// import { Inter } from 'next/font/google'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
// import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
// import CookieBanner from '@/components/ui/CookieBanner'
// import BookingNudge from '@/components/ui/BookingNudge'
// import Script from 'next/script'

// // ─── Fonts via next/font (no layout shift, no extra CDN request) ───────────────
// const inter = Inter({
//   subsets:  ['latin'],
//   display:  'swap',
//   variable: '--font-inter',
// })

// // ─── Supported locales ─────────────────────────────────────────────────────────
// const localeMap = {
//   en: { lang: 'en', dir: 'ltr' },
//   ar: { lang: 'ar', dir: 'rtl' },
//   fr: { lang: 'fr', dir: 'ltr' },
// }

// // ─── Metadata ──────────────────────────────────────────────────────────────────
// export async function generateMetadata({ params }) {
//   const { locale } = await params
//   const titles = {
//     en: 'Limore - Global Luxury Chauffeur Service',
//     ar: 'ليمور-— خدمة السائق الفاخرة العالمية',
//     fr: 'Limore - Service de Chauffeur Luxe Mondial',
//   }
//   const descriptions = {
//     en: 'Premium chauffeur-driven limousine service across global cities. Executive, discreet, and always on time.',
//     ar: 'خدمة ليموزين فاخرة بسائق خاص في المدن العالمية. تنفيذية، سرية، وفي الموعد دائمًا.',
//     fr: 'Service de limousine haut de gamme avec chauffeur dans les grandes villes mondiales.',
//   }
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thelimore.com'

//   return {
//     title: {
//       default:  titles[locale]  || titles.en,
//       template: '%s | Limore',
//     },
//     description: descriptions[locale] || descriptions.en,
//     metadataBase: new URL(baseUrl),
//     alternates: {
//       canonical: `${baseUrl}/${locale}`,
//       languages: {
//         en: `${baseUrl}/en`,
//         ar: `${baseUrl}/ar`,
//         fr: `${baseUrl}/fr`,
//       },
//     },
//     openGraph: {
//       title:       titles[locale] || titles.en,
//       description: descriptions[locale] || descriptions.en,
//       url:         `${baseUrl}/${locale}`,
//       siteName:    'Limore',
//       locale:      locale,
//       type:        'website',
//       images: [
//         {
//           url:    `${baseUrl}/limore1.jpg`,
//           width:  1200,
//           height: 630,
//           alt:    'Limore — Luxury Chauffeur Service',
//         },
//       ],
//     },
//     twitter: {
//       card:        'summary_large_image',
//       title:       titles[locale] || titles.en,
//       description: descriptions[locale] || descriptions.en,
//       images:      [`${baseUrl}/limore1.jpg`],
//     },
//     robots: {
//       index:          true,
//       follow:         true,
//       googleBot: {
//         index:             true,
//         follow:            true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet':       -1,
//       },
//     },
//     icons: {
//       icon:  '/favico.svg',
//       apple: '/favico.svg',
//     },
//   }
// }

// // ─── Layout ────────────────────────────────────────────────────────────────────
// export default async function LocaleLayout({ children, params }) {
//   const { locale } = await params
//   const { lang, dir } = localeMap[locale] || localeMap.en
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://limore.ae'

//   return (
//     <html
//       lang={lang}
//       dir={dir}
//       className={inter.variable}
//       suppressHydrationWarning
//     >
//       <head>


//       {/* <Script
//   src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
//   strategy="beforeInteractive"
// /> */}



// {/* This is the one */}
//       {/* <Script
//   id="google-maps"
//   strategy="beforeInteractive"
//   src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&v=weekly&loading=async`}
// /> */}

//         {/* Preconnect for Cormorant Garamond — loaded via CDN in globals.css */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

//         {/* Preconnect Sanity CDN */}
//         <link rel="preconnect" href="https://cdn.sanity.io" />

//         {/* Favicon */}
//         <link rel="icon"             href="/favico.svg" sizes="any" />
//         <link rel="icon"             href="/favico.svg"    type="image/svg+xml" />
//         <link rel="apple-touch-icon" href="/favico.svg" />
//         <link rel="manifest"         href="/manifest.json" />

//         {/* Theme color */}
//         <meta name="theme-color" content="#080808" />
//         <meta name="color-scheme" content="dark" />

//         {/* Canonical + hreflang (redundant with generateMetadata but belt-and-suspenders) */}
//         <link rel="canonical" href={`${baseUrl}/${locale}`} />
//         <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
//         <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar`} />
//         <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
//         <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />

//         {/* Inline consent-aware analytics — runs before React hydrates */}
//         {/* <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function() {
//                 try {
//                   var consent = JSON.parse(localStorage.getItem('limore_cookie_consent') || 'null');
//                   if (consent && consent.analytics) {
//                     window.dataLayer = window.dataLayer || [];
//                     function gtag(){ window.dataLayer.push(arguments); }
//                     gtag('js', new Date());
//                     gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || ''}');
//                     var s = document.createElement('script');
//                     s.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || ''}';
//                     s.async = true;
//                     document.head.appendChild(s);
//                   }
//                 } catch(e) {}
//               })();
//             `,
//           }}
//         /> */}


//       </head>

//       <body>

//         <Navbar locale={locale} />

//         <main id="main-content">
//           {children}
//         </main>

//         <Footer locale={locale} />

//         {/* ── Floating UI — rendered after main content, lowest z-index first ── */}
//         <BookingNudge    locale={locale} />   {/* z-index: 9997 */}
//         <CookieBanner    locale={locale} />   {/* z-index: 9998 */}
//         <FloatingWhatsApp locale={locale} />  {/* z-index: 9999 */}
//       </body>
//     </html>
//   )
// }





import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import CookieBanner from '@/components/ui/CookieBanner'
import BookingNudge from '@/components/ui/BookingNudge'
import SkipLink from '@/components/layout/SkipLink'

// ─── Fonts ─────────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// ─── Constants ─────────────────────────────────────────────────────────────────
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thelimore.com'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-N2JZKYFXG8'
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-58BK26CW'

const localeMap = {
  en: { lang: 'en', dir: 'ltr' },
  ar: { lang: 'ar', dir: 'rtl' },
  fr: { lang: 'fr', dir: 'ltr' },
}

// ─── Layout Metadata (fallback — pages override via their own generateMetadata) ─
export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'Limore | Global Luxury Chauffeur Service',
    ar: 'ليمور | خدمة السائق الفاخرة العالمية',
    fr: 'Limore | Service de Chauffeur Luxe Mondial',
  }
  const descriptions = {
    en: 'Premium luxury chauffeur service across Dubai, London, Paris, New York and Singapore. VIP airport transfers, corporate travel and private car with driver worldwide.',
    ar: 'خدمة سائق فاخرة في دبي ولندن وباريس ونيويورك وسنغافورة. نقل مطار VIP وسفر مؤسسي وسيارة خاصة مع سائق حول العالم.',
    fr: 'Service chauffeur luxe premium a Dubai, Londres, Paris, New York et Singapour. Transferts aeroport VIP, voyage affaires et voiture privee avec chauffeur dans le monde.',
  }

  const title = titles[locale] || titles.en
  const description = descriptions[locale] || descriptions.en
  const ogImage = `${BASE_URL}/images/limore1.jpg`
  const ogLocale = locale === 'ar' ? 'ar_AE' : locale === 'fr' ? 'fr_FR' : 'en_AE'

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: '%s | Limore',
    },
    description,
    keywords: 'luxury chauffeur service Dubai, chauffeur service Dubai, VIP chauffeur Dubai, executive chauffeur service UAE, premium chauffeur service Dubai, luxury airport transfer Dubai, corporate chauffeur services Dubai, worldwide chauffeur service',
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'en': `${BASE_URL}/en`,
        'ar': `${BASE_URL}/ar`,
        'fr': `${BASE_URL}/fr`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: 'Limore',
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Limore — Luxury Chauffeur Service',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@limore',
      creator: '@limore',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-16x16.png', sizes: '16x16' },
        { url: '/favicon-32x32.png', sizes: '32x32' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180' },
      ],
      shortcut: '/favicon.ico',
    },
    manifest: '/manifest.json',
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    },
  }
}

// ─── Org Schema (sitewide) ─────────────────────────────────────────────────────
function OrgSchema({ locale }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Limore',
    url: BASE_URL,
    logo: `${BASE_URL}/images/limore-logo.png`,
    description: 'Global luxury chauffeur service operating across Dubai, London, Paris, New York, Singapore and 60+ cities worldwide.',
    foundingDate: '2023',
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'London' },
      { '@type': 'City', name: 'Paris' },
      { '@type': 'City', name: 'New York' },
      { '@type': 'City', name: 'Singapore' },
      { '@type': 'City', name: 'Zurich' },
      { '@type': 'City', name: 'Milan' },
      { '@type': 'City', name: 'Abu Dhabi' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Reservations',
      availableLanguage: ['English', 'Arabic', 'French'],
      hoursAvailable: 'Mo-Su 00:00-24:00',
    },
    sameAs: [
      'https://www.instagram.com/limorefleets',
      'https://www.linkedin.com/company/limore-fleets/',
      'https://twitter.com/Limore_Fleets',
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── GTM noscript (body open) ──────────────────────────────────────────────────
function GtmNoScript() {
  if (!GTM_ID) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}

// ─── Layout ────────────────────────────────────────────────────────────────────
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  const { lang, dir } = localeMap[locale] || localeMap.en

  return (
    <html
      lang={lang}
      dir={dir}
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        {/* ── Org Schema ── */}
        <OrgSchema locale={locale} />

        {/* ── Font preconnects (Cormorant loaded via globals.css CDN) ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Sanity CDN preconnect ── */}
        <link rel="preconnect" href="https://cdn.sanity.io" />

        {/* ── Manifest + theme ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#080808" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />

        {/* ── Belt-and-suspenders hreflang (Next.js also injects these via alternates) ── */}
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en`} />
        <link rel="alternate" hrefLang="ar" href={`${BASE_URL}/ar`} />
        <link rel="alternate" hrefLang="fr" href={`${BASE_URL}/fr`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/en`} />

        {/* ── GTM head snippet (consent-gated — fires only after cookie consent) ── */}
        {GTM_ID && (
          <Script
            id="gtm-head"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}

        {/* ── GA4 direct (only if GTM_ID not set — avoids double-firing) ── */}
        {GA_ID && !GTM_ID && (
          <>
            <Script
              id="ga4-src"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){ window.dataLayer.push(arguments); }
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure',
                  });
                `,
              }}
            />
          </>
        )}
      

        {/* ── Consent-aware analytics loader (reads cookie banner decision) ── */}
        <Script
          id="consent-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var consent = JSON.parse(sessionStorage.getItem('limore_cookie_consent') || 'null');
                  if (consent && consent.analytics && '${GA_ID}') {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ window.dataLayer.push(arguments); }
                    gtag('consent', 'update', {
                      analytics_storage: 'granted',
                      ad_storage: consent.marketing ? 'granted' : 'denied',
                    });
                  } else {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ window.dataLayer.push(arguments); }
                    gtag('consent', 'default', {
                      analytics_storage: 'denied',
                      ad_storage: 'denied',
                      wait_for_update: 500,
                    });
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>

      <body>
        {/* GTM noscript fallback */}
        <GtmNoScript />
        <SkipLink />
        {/* Skip to content — accessibility */}


        <Navbar locale={locale} />

        <main id="main-content">
          {children}
        </main>

        <Footer locale={locale} />

        {/* ── Floating UI — z-index stacked intentionally ── */}
        <BookingNudge locale={locale} />  {/* z: 9997 */}
        <CookieBanner locale={locale} />  {/* z: 9998 */}
        <FloatingWhatsApp locale={locale} />  {/* z: 9999 */}
      </body>
    </html>
  )
}