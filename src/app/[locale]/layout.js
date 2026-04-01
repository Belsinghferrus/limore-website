import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: {
    default: 'Limore - Global Luxury Chauffeur Service',
    template: '%s | Limore',
  },
  description: 'Premium chauffeur-driven limousine service across global cities.',
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params 
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  )
}