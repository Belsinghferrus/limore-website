'use client'

const LAST_UPDATED = 'April 16, 2026'

const t = {
  en: {
    eyebrow: 'Legal',
    heading: 'Cookie Policy',
    updated: `Last updated: ${LAST_UPDATED}`,
    intro:   'Limore uses cookies and similar technologies on our website and platform. This Cookie Policy explains what cookies are, which ones we use, why we use them and how you can control them.',

    sections: [
      {
        title: '1. What Are Cookies',
        body: [
          'Cookies are small text files placed on your device when you visit a website. They allow the website to recognise your device on subsequent visits and store certain information about your preferences or actions.',
          'Similar technologies include web beacons, pixels, local storage and session storage. This policy covers all such technologies collectively referred to as "cookies".',
        ],
      },
      {
        title: '2. Types of Cookies We Use',
        body: ['We use four categories of cookies on the Limore website:'],
        table: [
          { type: 'Essential',    purpose: 'Required for the website to function. Cannot be disabled.',                                       examples: 'Session management, security tokens, login state',         canDisable: 'No'  },
          { type: 'Analytics',    purpose: 'Help us understand how visitors use our site so we can improve it.',                              examples: 'Google Analytics, page views, session duration, referral', canDisable: 'Yes' },
          { type: 'Preferences',  purpose: 'Remember your settings and preferences across visits.',                                           examples: 'Language selection, currency, accessibility settings',      canDisable: 'Yes' },
          { type: 'Marketing',    purpose: 'Used to deliver relevant advertisements and track campaign effectiveness. Only with your consent.', examples: 'Google Ads, Meta Pixel, LinkedIn Insight Tag',             canDisable: 'Yes' },
        ],
      },
      {
        title: '3. Specific Cookies We Use',
        body: ['The following table lists the primary cookies set on the Limore website:'],
        cookieTable: [
          { name: 'limore_session',   category: 'Essential',   duration: 'Session',   purpose: 'Maintains your authenticated session' },
          { name: 'limore_locale',    category: 'Preference',  duration: '1 year',    purpose: 'Stores your preferred language' },
          { name: 'limore_currency',  category: 'Preference',  duration: '1 year',    purpose: 'Stores your preferred currency display' },
          { name: '_ga',              category: 'Analytics',   duration: '2 years',   purpose: 'Google Analytics — distinguishes unique users' },
          { name: '_ga_*',            category: 'Analytics',   duration: '2 years',   purpose: 'Google Analytics — persists session state' },
          { name: '_gid',             category: 'Analytics',   duration: '24 hours',  purpose: 'Google Analytics — distinguishes users' },
          { name: '_fbp',             category: 'Marketing',   duration: '3 months',  purpose: 'Meta Pixel — tracks conversions from Facebook' },
          { name: 'li_sugr',          category: 'Marketing',   duration: '3 months',  purpose: 'LinkedIn Insight Tag — tracks LinkedIn campaign visits' },
          { name: 'cookie_consent',   category: 'Essential',   duration: '1 year',    purpose: 'Stores your cookie consent preferences' },
        ],
      },
      {
        title: '4. Third-Party Cookies',
        body: [
          'Some cookies on our website are set by third-party services we use. These third parties have their own privacy and cookie policies which govern how they use the information they collect.',
        ],
        list: [
          'Google Analytics — analytics and performance measurement (policies.google.com)',
          'Google Ads — conversion tracking and remarketing (policies.google.com)',
          'Meta Pixel — Facebook and Instagram ad conversion tracking (facebook.com/privacy)',
          'LinkedIn Insight Tag — B2B campaign tracking (linkedin.com/legal/privacy-policy)',
        ],
        bodyAfter: [
          'Limore does not control these third-party cookies. You can opt out of third-party advertising cookies via the Digital Advertising Alliance (youronlinechoices.eu) or by managing your preferences in the cookie banner.',
        ],
      },
      {
        title: '5. How Long Cookies Are Stored',
        body: [
          'Cookies are either session cookies or persistent cookies:',
        ],
        list: [
          'Session cookies — exist only while your browser is open and are deleted when you close it',
          'Persistent cookies — remain on your device for a set period (days, months or years) or until you delete them',
        ],
        bodyAfter: [
          'The duration of each specific cookie is listed in Section 3 above.',
        ],
      },
      {
        title: '6. Your Cookie Choices',
        body: [
          'When you first visit the Limore website you will be shown a cookie consent banner. You can choose to accept all cookies, reject non-essential cookies, or customise your preferences by category.',
          'You can change your preferences at any time by clicking the "Cookie Preferences" link in the footer of any page.',
          'You can also control cookies directly through your browser settings:',
        ],
        list: [
          'Google Chrome: Settings > Privacy and Security > Cookies and other site data',
          'Safari: Preferences > Privacy > Manage Website Data',
          'Firefox: Options > Privacy & Security > Cookies and Site Data',
          'Microsoft Edge: Settings > Cookies and site permissions',
        ],
        bodyAfter: [
          'Please note that disabling essential cookies will affect the functionality of the Limore website and may prevent you from completing bookings or accessing your account.',
        ],
      },
      {
        title: '7. Do Not Track',
        body: [
          'Some browsers include a "Do Not Track" (DNT) feature that signals websites you do not want to be tracked. Our website does not currently respond to DNT signals as there is no consistent industry standard for how they should be interpreted. You can use the cookie consent banner to manage your tracking preferences instead.',
        ],
      },
      {
        title: '8. Cookies and Children',
        body: [
          'Our website is not directed at individuals under 18. We do not knowingly use cookies to collect personal data from children.',
        ],
      },
      {
        title: '9. Changes to This Policy',
        body: [
          'We may update this Cookie Policy from time to time as our use of cookies changes or in response to regulatory requirements. The "Last updated" date at the top of this page reflects the most recent revision. We encourage you to review this page periodically.',
        ],
      },
      {
        title: '10. Contact',
        body: ['For questions about our use of cookies please contact:'],
        contact: [
          'Email: office@thelimore.com',
          'Response time: within 30 business days',
        ],
      },
    ],
  },

  ar: {
    eyebrow: 'قانوني',
    heading: 'سياسة ملفات تعريف الارتباط',
    updated: `آخر تحديث: ${LAST_UPDATED}`,
    intro:   'تستخدم ليمور ملفات تعريف الارتباط وتقنيات مماثلة على موقعنا الإلكتروني. توضح هذه السياسة ما هي ملفات تعريف الارتباط وأيها نستخدم ولماذا وكيف يمكنك التحكم فيها.',
    sections: [
      { title: '1. ما هي ملفات تعريف الارتباط', body: ['ملفات تعريف الارتباط هي ملفات نصية صغيرة تُوضع على جهازك عند زيارة موقع ويب. تتيح للموقع التعرف على جهازك في الزيارات اللاحقة وتخزين معلومات معينة.'] },
      { title: '2. أنواع ملفات تعريف الارتباط', body: ['نستخدم أربع فئات من ملفات تعريف الارتباط:'], list: ['الضرورية — مطلوبة لعمل الموقع ولا يمكن تعطيلها', 'التحليلية — تساعدنا على فهم كيفية استخدام الزوار للموقع', 'التفضيلية — تتذكر إعداداتك وتفضيلاتك', 'التسويقية — لتقديم إعلانات ذات صلة وتتبع فعالية الحملات'] },
      { title: '3. خياراتك', body: ['عند زيارتك الأولى ستظهر لافتة موافقة على ملفات تعريف الارتباط. يمكنك قبول الكل أو رفض غير الضروري أو تخصيص تفضيلاتك.', 'يمكنك تغيير تفضيلاتك في أي وقت عبر رابط "تفضيلات ملفات تعريف الارتباط" في تذييل أي صفحة.'] },
      { title: '4. التواصل', body: ['للاستفسار عن استخدامنا لملفات تعريف الارتباط:'], contact: ['البريد الإلكتروني: office@thelimore.com', 'وقت الاستجابة: 30 يوم عمل'] },
    ],
  },

  fr: {
    eyebrow: 'Mentions Legales',
    heading: 'Politique de Cookies',
    updated: `Derniere mise a jour : ${LAST_UPDATED}`,
    intro:   'Limore utilise des cookies et technologies similaires sur son site web et sa plateforme. Cette politique explique ce que sont les cookies, lesquels nous utilisons, pourquoi et comment les controler.',
    sections: [
      { title: '1. Qu\'est-ce qu\'un Cookie', body: ['Les cookies sont de petits fichiers texte places sur votre appareil lors de la visite d\'un site web. Ils permettent au site de reconnaitre votre appareil lors des visites suivantes.'] },
      { title: '2. Types de Cookies Utilises', body: ['Nous utilisons quatre categories de cookies :'], list: ['Essentiels — necessaires au fonctionnement du site, non desactivables', 'Analytiques — nous aident a comprendre comment les visiteurs utilisent notre site', 'De preference — memorisent vos parametres et preferences', 'Marketing — pour diffuser des publicites pertinentes, avec votre consentement uniquement'] },
      { title: '3. Vos Choix', body: ['Lors de votre premiere visite une banniere de consentement apparaitra. Vous pouvez accepter tous les cookies, refuser les non essentiels ou personnaliser vos preferences.', 'Vous pouvez modifier vos preferences a tout moment via le lien "Preferences cookies" dans le pied de page.'] },
      { title: '4. Contact', body: ['Pour toute question relative a notre utilisation des cookies :'], contact: ['Email : office@thelimore.com', 'Delai de reponse : 30 jours ouvrables'] },
    ],
  },
}

// Category badge colors
const CATEGORY_COLORS = {
  Essential:  { bg: 'rgba(34,197,94,0.08)',   text: '#16a34a',  border: 'rgba(34,197,94,0.2)'   },
  Preference: { bg: 'rgba(59,130,246,0.08)',  text: '#2563eb',  border: 'rgba(59,130,246,0.2)'  },
  Analytics:  { bg: 'rgba(249,115,22,0.08)',  text: '#ea580c',  border: 'rgba(249,115,22,0.2)'  },
  Marketing:  { bg: 'rgba(196,30,30,0.08)',   text: '#C41E1E',  border: 'rgba(196,30,30,0.2)'   },
}

function CategoryBadge({ label }) {
  const c = CATEGORY_COLORS[label] || CATEGORY_COLORS.Essential
  return (
    <span style={{
      fontFamily:      'Inter, sans-serif',
      fontSize:        '9px',
      fontWeight:      500,
      letterSpacing:   '0.12em',
      textTransform:   'uppercase',
      color:           c.text,
      backgroundColor: c.bg,
      border:          `1px solid ${c.border}`,
      padding:         '3px 8px',
      whiteSpace:      'nowrap',
    }}>
      {label}
    </span>
  )
}

export default function CookiesContent({ locale = 'en' }) {
  const content = t[locale] || t.en
  const isRTL   = locale === 'ar'

  return (
    <>
      {/* HERO BAND — BLACK */}
      <section
        style={{
          backgroundColor: '#050505',
          padding:         'clamp(120px,14vw,160px) clamp(24px,6vw,96px) clamp(56px,8vw,80px)',
          direction:       isRTL ? 'rtl' : 'ltr',
        }}
      >
        <p style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C41E1E', marginBottom: '16px' }}>
          {content.eyebrow}
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.4rem,6vw,6rem)', fontWeight: 300, color: '#F8F7F4', margin: '0 0 20px', lineHeight: 1, letterSpacing: '-0.02em' }}>
          {content.heading}
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 400, letterSpacing: '0.14em', color: 'rgba(248,247,244,0.22)', margin: 0 }}>
          {content.updated}
        </p>
      </section>

      {/* INTRO BAND — WHITE */}
      <section
        style={{
          backgroundColor: '#FAFAF8',
          padding:         'clamp(48px,6vw,80px) clamp(24px,6vw,96px)',
          direction:       isRTL ? 'rtl' : 'ltr',
          borderBottom:    '1px solid rgba(10,10,10,0.06)',
        }}
      >
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize:   'clamp(1.1rem,1.8vw,1.45rem)',
          fontWeight: 300,
          fontStyle:  'italic',
          color:      'rgba(10,10,10,0.65)',
          lineHeight: 1.75,
          maxWidth:   '760px',
          margin:     0,
        }}>
          {content.intro}
        </p>
      </section>

      {/* BODY SECTIONS */}
      {content.sections.map((sec, i) => {
        const isDark = i % 2 === 0
        const bg     = isDark ? '#080808' : '#FAFAF8'
        const head   = isDark ? '#F8F7F4' : '#0A0A0A'
        const body   = isDark ? 'rgba(248,247,244,0.45)' : 'rgba(10,10,10,0.55)'
        const dot    = isDark ? 'rgba(196,30,30,0.7)' : '#C41E1E'
        const rule   = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(10,10,10,0.07)'
        const cellBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(10,10,10,0.015)'
        const border = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(10,10,10,0.07)'

        return (
          <section
            key={sec.title}
            style={{
              backgroundColor: bg,
              padding:         'clamp(40px,5vw,64px) clamp(24px,6vw,96px)',
              direction:       isRTL ? 'rtl' : 'ltr',
              borderBottom:    `1px solid ${rule}`,
            }}
          >
            <div style={{ maxWidth: '900px' }}>

              {/* Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                <div style={{ width: '2px', height: '18px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
                <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.8rem,1.1vw,0.9rem)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: head, margin: 0 }}>
                  {sec.title}
                </h2>
              </div>

              {/* Body */}
              {sec.body?.map((para, j) => (
                <p key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.82rem,1.05vw,0.92rem)', fontWeight: 300, color: body, lineHeight: 1.95, margin: '0 0 14px', maxWidth: '720px' }}>
                  {para}
                </p>
              ))}

              {/* Category summary table (Section 2) */}
              {sec.table && (
                <div style={{ overflowX: 'auto', marginTop: '8px', marginBottom: '8px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '520px' }}>
                    <thead>
                      <tr>
                        {['Type', 'Purpose', 'Examples', 'Can Disable'].map((h) => (
                          <th key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: head, padding: '10px 14px', textAlign: 'left', borderBottom: `1px solid ${border}`, opacity: 0.7 }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.map((row, j) => (
                        <tr key={j} style={{ backgroundColor: j % 2 === 0 ? 'transparent' : cellBg }}>
                          <td style={{ padding: '12px 14px', borderBottom: `1px solid ${border}`, verticalAlign: 'top' }}>
                            <CategoryBadge label={row.type} />
                          </td>
                          <td style={{ padding: '12px 14px', fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.74rem,0.9vw,0.82rem)', fontWeight: 300, color: body, lineHeight: 1.7, borderBottom: `1px solid ${border}`, verticalAlign: 'top' }}>
                            {row.purpose}
                          </td>
                          <td style={{ padding: '12px 14px', fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.72rem,0.88vw,0.8rem)', fontWeight: 300, color: body, lineHeight: 1.7, borderBottom: `1px solid ${border}`, verticalAlign: 'top', opacity: 0.8 }}>
                            {row.examples}
                          </td>
                          <td style={{ padding: '12px 14px', borderBottom: `1px solid ${border}`, verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 400, color: row.canDisable === 'No' ? 'rgba(248,247,244,0.25)' : '#C41E1E', letterSpacing: '0.08em' }}>
                              {row.canDisable}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Specific cookies table (Section 3) */}
              {sec.cookieTable && (
                <div style={{ overflowX: 'auto', marginTop: '8px', marginBottom: '8px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '580px' }}>
                    <thead>
                      <tr>
                        {['Cookie Name', 'Category', 'Duration', 'Purpose'].map((h) => (
                          <th key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: head, padding: '10px 14px', textAlign: 'left', borderBottom: `1px solid ${border}`, opacity: 0.7 }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.cookieTable.map((row, j) => (
                        <tr key={j} style={{ backgroundColor: j % 2 === 0 ? 'transparent' : cellBg }}>
                          <td style={{ padding: '11px 14px', borderBottom: `1px solid ${border}`, verticalAlign: 'top' }}>
                            <code style={{ fontFamily: 'monospace', fontSize: '11px', color: isDark ? 'rgba(248,247,244,0.55)' : 'rgba(10,10,10,0.6)', backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(10,10,10,0.05)', padding: '2px 6px', letterSpacing: '0.02em' }}>
                              {row.name}
                            </code>
                          </td>
                          <td style={{ padding: '11px 14px', borderBottom: `1px solid ${border}`, verticalAlign: 'top' }}>
                            <CategoryBadge label={row.category} />
                          </td>
                          <td style={{ padding: '11px 14px', fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.72rem,0.88vw,0.8rem)', fontWeight: 300, color: body, borderBottom: `1px solid ${border}`, verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                            {row.duration}
                          </td>
                          <td style={{ padding: '11px 14px', fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.74rem,0.9vw,0.82rem)', fontWeight: 300, color: body, lineHeight: 1.7, borderBottom: `1px solid ${border}`, verticalAlign: 'top' }}>
                            {row.purpose}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* List */}
              {sec.list && (
                <ul style={{ listStyle: 'none', margin: '8px 0 14px', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {sec.list.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: '4px' }} aria-hidden="true">
                        <circle cx="6" cy="6" r="5" stroke={dot} strokeWidth="1" opacity="0.5"/>
                        <circle cx="6" cy="6" r="2" fill={dot}/>
                      </svg>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.78rem,1vw,0.88rem)', fontWeight: 300, color: body, lineHeight: 1.8 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Body after list */}
              {sec.bodyAfter?.map((para, j) => (
                <p key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.82rem,1.05vw,0.92rem)', fontWeight: 300, color: body, lineHeight: 1.95, margin: '8px 0 0', maxWidth: '720px' }}>
                  {para}
                </p>
              ))}

              {/* Contact block */}
              {sec.contact && (
                <div style={{
                  marginTop:       '16px',
                  border:          `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(10,10,10,0.09)'}`,
                  padding:         '20px 24px',
                  display:         'flex',
                  flexDirection:   'column',
                  gap:             '8px',
                  backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(10,10,10,0.02)',
                }}>
                  {sec.contact.map((line, j) => (
                    <span key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.78rem,1vw,0.86rem)', fontWeight: j === 0 ? 400 : 300, color: j === 0 ? '#C41E1E' : body, letterSpacing: j === 0 ? '0.02em' : 0 }}>
                      {line}
                    </span>
                  ))}
                </div>
              )}

            </div>
          </section>
        )
      })}

      {/* FOOTER BAND — BLACK */}
      <section
        style={{
          backgroundColor: '#050505',
          padding:         'clamp(40px,5vw,64px) clamp(24px,6vw,96px)',
          direction:       isRTL ? 'rtl' : 'ltr',
          borderTop:       '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 300, color: 'rgba(248,247,244,0.2)', letterSpacing: '0.1em', margin: 0 }}>
            {`© ${new Date().getFullYear()} Limore. All rights reserved.`}
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Privacy Policy', href: `/${locale}/privacy` },
              { label: 'Terms',          href: `/${locale}/terms`   },
              { label: 'Contact',        href: `/${locale}/contact` },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 300, color: 'rgba(248,247,244,0.2)', letterSpacing: '0.12em', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(248,247,244,0.55)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.2)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}