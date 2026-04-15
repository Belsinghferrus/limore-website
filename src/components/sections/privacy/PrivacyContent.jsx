'use client'

const LAST_UPDATED = 'April 15, 2026'

const t = {
  en: {
    eyebrow:  'Legal',
    heading:  'Privacy Policy',
    updated:  `Last updated: ${LAST_UPDATED}`,
    intro:    'Limore ("we", "our", "us") is committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it. By using our services or website you agree to this policy.',
    sections: [
      {
        title: '1. Who We Are',
        body: [
          'Limore is a luxury ground transportation service operating globally. Our registered business address and data controller details are available on request via our contact page.',
        ],
      },
      {
        title: '2. Information We Collect',
        body: [
          'We collect information you provide directly to us:',
        ],
        list: [
          'Full name, email address, phone number when you make a booking or enquiry',
          'Company name and billing address for corporate accounts',
          'Payment information (processed securely via third-party gateways — we do not store card numbers)',
          'Pickup and drop-off addresses, flight numbers and travel preferences',
          'Communications you send to us via email, contact forms or phone',
        ],
        bodyAfter: [
          'We also collect data automatically when you use our website:',
        ],
        listAfter: [
          'IP address, browser type, device type and operating system',
          'Pages visited, time spent, referral source (via cookies and analytics)',
          'Approximate geographic location based on IP address',
        ],
      },
      {
        title: '3. How We Use Your Information',
        body: ['We use your personal data to:'],
        list: [
          'Process and manage your bookings and payments',
          'Send booking confirmations, chauffeur details and journey updates',
          'Respond to enquiries and provide customer support',
          'Send service-related communications and invoices',
          'Improve our platform, services and user experience',
          'Comply with legal obligations and prevent fraud',
          'Send marketing communications where you have opted in (you may opt out at any time)',
        ],
      },
      {
        title: '4. Legal Basis for Processing (GDPR)',
        body: [
          'For users in the European Economic Area (EEA), our legal basis for processing personal data is:',
        ],
        list: [
          'Contract performance — to fulfil your booking',
          'Legitimate interests — to improve our services and prevent fraud',
          'Legal obligation — to comply with applicable laws',
          'Consent — for marketing communications and non-essential cookies',
        ],
      },
      {
        title: '5. Sharing Your Information',
        body: [
          'We do not sell your personal data. We share it only where necessary:',
        ],
        list: [
          'With vetted local operator partners to fulfil your booking in the relevant city',
          'With payment processors (Stripe, etc.) to handle transactions securely',
          'With email and communication service providers to send booking updates',
          'With analytics providers (anonymised or pseudonymised data only)',
          'With legal authorities when required by law or court order',
        ],
        bodyAfter: [
          'All third parties are contractually required to protect your data and use it only for the specified purpose.',
        ],
      },
      {
        title: '6. International Transfers',
        body: [
          'Limore operates globally. Your data may be transferred to and processed in countries outside your jurisdiction, including countries that may have different data protection standards. Where we transfer data outside the EEA we ensure appropriate safeguards are in place including Standard Contractual Clauses approved by the European Commission.',
        ],
      },
      {
        title: '7. Data Retention',
        body: [
          'We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting and reporting requirements. Booking records are typically retained for 7 years. You may request deletion of your data at any time subject to our legal obligations.',
        ],
      },
      {
        title: '8. Cookies',
        body: [
          'Our website uses cookies and similar tracking technologies. We use:',
        ],
        list: [
          'Essential cookies — required for the website to function correctly',
          'Analytics cookies — to understand how visitors use our site (e.g. Google Analytics)',
          'Preference cookies — to remember your language and settings',
          'Marketing cookies — only with your consent',
        ],
        bodyAfter: [
          'You can manage cookie preferences via the cookie banner on your first visit or through your browser settings.',
        ],
      },
      {
        title: '9. Your Rights',
        body: [
          'Depending on your location you may have the following rights regarding your personal data:',
        ],
        list: [
          'Right to access — request a copy of the data we hold about you',
          'Right to rectification — request correction of inaccurate data',
          'Right to erasure — request deletion of your data',
          'Right to restriction — request we limit how we process your data',
          'Right to data portability — receive your data in a structured format',
          'Right to object — object to processing based on legitimate interests or for marketing',
          'Right to withdraw consent — at any time where processing is based on consent',
        ],
        bodyAfter: [
          'To exercise any of these rights please contact us at office@thelimore.com. We will respond within 30 days.',
        ],
      },
      {
        title: '10. Security',
        body: [
          'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction or alteration. This includes SSL/TLS encryption, access controls and regular security reviews. No method of transmission over the internet is 100% secure; however we strive to protect your information to the highest standard.',
        ],
      },
      {
        title: '11. Children',
        body: [
          'Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child please contact us immediately.',
        ],
      },
      {
        title: '12. Changes to This Policy',
        body: [
          `We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of our services after any changes constitutes acceptance of the revised policy. We will notify you of material changes via email where appropriate.`,
        ],
      },
      {
        title: '13. Contact',
        body: [
          'For any questions, concerns or data subject requests regarding this Privacy Policy please contact:',
        ],
        contact: [
          'Email: privacy@limore.com',
          'Response time: within 30 business days',
        ],
      },
    ],
  },

  ar: {
    eyebrow:  'قانوني',
    heading:  'سياسة الخصوصية',
    updated:  `آخر تحديث: ${LAST_UPDATED}`,
    intro:    'تلتزم ليمور بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه ما نجمعه من معلومات وكيف نستخدمها وحقوقك المتعلقة بها.',
    sections: [
      { title: '1. من نحن', body: ['ليمور هي خدمة نقل فاخرة تعمل على مستوى عالمي. تفاصيل عنواننا المسجل ومراقب البيانات متاحة عند الطلب.'] },
      {
        title: '2. المعلومات التي نجمعها',
        body: ['نجمع المعلومات التي تقدمها مباشرة:'],
        list: ['الاسم الكامل والبريد الإلكتروني ورقم الهاتف عند الحجز', 'اسم الشركة وعنوان الفوترة للحسابات المؤسسية', 'معلومات الدفع (معالجة بأمان عبر جهات خارجية)', 'عناوين الاستلام والتسليم وأرقام الرحلات وتفضيلات السفر'],
      },
      { title: '3. كيف نستخدم معلوماتك', body: ['نستخدم بياناتك الشخصية لـ:'], list: ['معالجة حجوزاتك ومدفوعاتك', 'إرسال تأكيدات الحجز وتفاصيل السائق', 'الرد على استفساراتك وتقديم الدعم', 'تحسين منصتنا وخدماتنا', 'الامتثال للالتزامات القانونية'] },
      { title: '4. مشاركة معلوماتك', body: ['لا نبيع بياناتك الشخصية. نشاركها فقط عند الضرورة:'], list: ['مع شركاء المشغلين المحليين لإتمام حجزك', 'مع معالجي الدفع', 'مع مزودي خدمات الاتصالات', 'مع السلطات القانونية عند الاقتضاء'] },
      { title: '5. حقوقك', body: ['اعتمادا على موقعك قد تملك الحقوق التالية:'], list: ['الحق في الوصول', 'الحق في التصحيح', 'الحق في الحذف', 'الحق في تقييد المعالجة', 'الحق في الاعتراض'], bodyAfter: ['للممارسة أي من هذه الحقوق تواصل معنا عبر privacy@limore.com'] },
      { title: '6. التواصل', body: ['لأي استفسارات تتعلق بهذه السياسة:'], contact: ['البريد الإلكتروني: privacy@limore.com', 'وقت الاستجابة: 30 يوم عمل'] },
    ],
  },

  fr: {
    eyebrow:  'Mentions Legales',
    heading:  'Politique de Confidentialite',
    updated:  `Derniere mise a jour : ${LAST_UPDATED}`,
    intro:    'Limore s\'engage a proteger vos donnees personnelles. Cette politique explique quelles informations nous collectons, comment nous les utilisons et vos droits.',
    sections: [
      { title: '1. Qui Sommes-Nous', body: ['Limore est un service de transport de luxe openant mondialement. Nos coordonnees de responsable du traitement sont disponibles sur demande.'] },
      {
        title: '2. Informations Collectees',
        body: ['Nous collectons les informations que vous nous fournissez directement :'],
        list: ['Nom, email, telephone lors d\'une reservation', 'Nom de societe et adresse de facturation pour les comptes entreprises', 'Informations de paiement (traitees via des tiers securises)', 'Adresses de prise en charge et de destination, numeros de vol, preferences de voyage'],
      },
      { title: '3. Utilisation de Vos Informations', body: ['Nous utilisons vos donnees pour :'], list: ['Traiter vos reservations et paiements', 'Envoyer des confirmations et mises a jour', 'Repondre a vos demandes et assurer le support', 'Ameliorer notre plateforme et nos services', 'Respecter nos obligations legales'] },
      { title: '4. Partage de Vos Informations', body: ['Nous ne vendons pas vos donnees. Nous les partageons uniquement si necessaire :'], list: ['Avec des operateurs locaux pour executer votre reservation', 'Avec des processeurs de paiement', 'Avec des fournisseurs de services de communication', 'Avec les autorites legales si requis'] },
      { title: '5. Vos Droits', body: ['Selon votre localisation vous pouvez avoir les droits suivants :'], list: ['Droit d\'acces', 'Droit de rectification', 'Droit a l\'effacement', 'Droit a la limitation du traitement', 'Droit d\'opposition'], bodyAfter: ['Pour exercer ces droits contactez-nous a privacy@limore.com'] },
      { title: '6. Contact', body: ['Pour toute question relative a cette politique :'], contact: ['Email : privacy@limore.com', 'Delai de reponse : 30 jours ouvrables'] },
    ],
  },
}

export default function PrivacyContent({ locale = 'en' }) {
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

      {/* BODY CONTENT — alternating BLACK / WHITE per section */}
      {content.sections.map((sec, i) => {
        const isDark = i % 2 === 0
        const bg     = isDark ? '#080808' : '#FAFAF8'
        const head   = isDark ? '#F8F7F4' : '#0A0A0A'
        const body   = isDark ? 'rgba(248,247,244,0.45)' : 'rgba(10,10,10,0.55)'
        const dot    = isDark ? 'rgba(196,30,30,0.6)' : '#C41E1E'
        const rule   = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(10,10,10,0.07)'

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
            <div style={{ maxWidth: '820px' }}>

              {/* Section title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '2px', height: '18px', backgroundColor: '#C41E1E', flexShrink: 0 }} />
                <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.8rem,1.1vw,0.9rem)', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: head, margin: 0 }}>
                  {sec.title}
                </h2>
              </div>

              {/* Body paragraphs */}
              {sec.body?.map((para, j) => (
                <p key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.82rem,1.05vw,0.92rem)', fontWeight: 300, color: body, lineHeight: 1.95, margin: '0 0 16px', maxWidth: '720px' }}>
                  {para}
                </p>
              ))}

              {/* List */}
              {sec.list && (
                <ul style={{ listStyle: 'none', margin: '4px 0 16px', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
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

              {/* List after bodyAfter */}
              {sec.listAfter && (
                <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {sec.listAfter.map((item, j) => (
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
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 300, color: 'rgba(248,247,244,0.2)', letterSpacing: '0.1em', margin: 0 }}>
          {`© ${new Date().getFullYear()} Limore. All rights reserved.`}
        </p>
      </section>
    </>
  )
}