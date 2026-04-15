'use client'

const LAST_UPDATED = 'April 16, 2026'

const t = {
  en: {
    eyebrow:  'Legal',
    heading:  'Terms & Conditions',
    updated:  `Last updated: ${LAST_UPDATED}`,
    intro:    'These Terms & Conditions govern your use of Limore\'s services, website and platform. By making a booking or using any Limore service you agree to be bound by these terms. Please read them carefully.',
    sections: [
      {
        title: '1. Definitions',
        body: [
          '"Limore", "we", "us" or "our" refers to the Limore company and its authorised operators.',
          '"Client", "you" or "your" refers to any individual, company or agent making a booking or using our services.',
          '"Booking" refers to any confirmed ground transportation request made through our platform, account manager or contact channels.',
          '"Chauffeur" refers to the professional driver assigned to fulfil a booking, whether employed directly by Limore or by a vetted partner operator.',
        ],
      },
      {
        title: '2. Bookings & Confirmation',
        body: [
          'A booking is only confirmed upon receipt of written confirmation from Limore via email or the client dashboard. Verbal requests or enquiries do not constitute a confirmed booking.',
          'Clients are responsible for providing accurate pickup location, destination, passenger count, flight number (where applicable) and any special requirements at the time of booking.',
          'Limore reserves the right to decline any booking at its sole discretion.',
        ],
      },
      {
        title: '3. Pricing & Payment',
        body: [
          'All prices are quoted inclusive of the chauffeur, vehicle, tolls, airport fees and standard waiting time unless otherwise stated. Gratuity is at the discretion of the client.',
          'Additional charges may apply for: waiting time beyond the included allowance, additional stops, out-of-hours service, special requests and vehicle upgrades.',
          'Payment is due as specified in the booking confirmation. Corporate accounts may be invoiced on agreed credit terms.',
          'All prices are in the currency specified at the time of booking. International clients are responsible for any currency conversion fees charged by their bank.',
        ],
        list: [
          'Waiting time included: 60 minutes for international flights, 30 minutes for domestic flights, 15 minutes for all other pickups',
          'Additional waiting time is charged per 15-minute increment at the rate specified in your booking',
          'No-show fee applies if the client cannot be located after the included waiting time has elapsed',
        ],
      },
      {
        title: '4. Cancellations & Amendments',
        body: [
          'Cancellation and amendment policies vary by booking type and are confirmed in your booking details. The general policy is as follows:',
        ],
        list: [
          'Cancellation more than 24 hours before pickup: full refund',
          'Cancellation 12-24 hours before pickup: 50% charge',
          'Cancellation less than 12 hours before pickup: 100% charge',
          'No-show (client not present): 100% charge',
          'Amendments to pickup time or location: accepted free of charge up to 4 hours before pickup, subject to availability',
        ],
        bodyAfter: [
          'Limore reserves the right to apply a different cancellation policy for bookings made during peak periods, special events or for long-distance or multi-day engagements. This will be communicated at the time of booking.',
        ],
      },
      {
        title: '5. Chauffeur & Vehicle',
        body: [
          'Limore will assign the most appropriate vehicle and chauffeur for your booking based on your requirements and availability. Specific vehicle or chauffeur requests will be accommodated where possible but are not guaranteed.',
          'The chauffeur will arrive at the agreed pickup location at the agreed time. Limore monitors all flights and will adjust pickup times for delayed flights at no extra charge.',
          'Clients may not request the chauffeur to violate any traffic laws, operate outside the agreed scope of the booking or behave in a manner inconsistent with Limore\'s standards.',
        ],
      },
      {
        title: '6. Client Conduct',
        body: [
          'Clients and passengers are expected to behave respectfully toward the chauffeur and the vehicle at all times.',
        ],
        list: [
          'Smoking (including e-cigarettes) is strictly prohibited in all Limore vehicles',
          'Consumption of food or beverages may be restricted in certain vehicle classes',
          'Damage to the vehicle caused by the client or their passengers will be charged at full repair cost plus a vehicle downtime fee',
          'Limore reserves the right to terminate a journey without refund if the chauffeur determines that continued service would pose a risk to the vehicle or their safety',
        ],
      },
      {
        title: '7. Liability',
        body: [
          'Limore\'s liability is limited to the cost of the booking in question. We are not liable for indirect, consequential or special damages including but not limited to missed flights, missed meetings or any losses arising from late arrival due to circumstances outside our control.',
          'Circumstances outside our control include but are not limited to: traffic incidents, extreme weather, road closures, acts of government, strikes and other force majeure events.',
          'Limore carries appropriate vehicle liability insurance as required by law in each operating jurisdiction. Details are available on request.',
        ],
      },
      {
        title: '8. Luggage & Personal Property',
        body: [
          'Clients are responsible for their own luggage and personal belongings. Limore will make reasonable efforts to assist with luggage handling.',
          'Items left in a vehicle will be held for 7 days and reasonable efforts will be made to contact the client. Limore accepts no liability for lost, damaged or stolen personal property.',
        ],
      },
      {
        title: '9. Subcontracting',
        body: [
          'Limore may fulfil bookings through vetted partner operators in cities where we do not operate directly. In such cases, Limore acts as the booking agent and service standard guarantor. The partner operator becomes the service provider and carrier. Limore is not liable for the acts or omissions of partner operators beyond the service standards they are contractually required to meet.',
        ],
      },
      {
        title: '10. Intellectual Property',
        body: [
          'All content on the Limore website and platform including text, images, logos, design and software is the property of Limore or its licensors and is protected by applicable intellectual property laws.',
          'You may not reproduce, distribute, modify or create derivative works from any Limore content without prior written permission.',
        ],
      },
      {
        title: '11. Platform Use',
        body: [
          'You agree to use the Limore website and platform only for lawful purposes. You must not:',
        ],
        list: [
          'Use the platform to make fraudulent or speculative bookings',
          'Attempt to gain unauthorised access to any part of the platform',
          'Use automated tools to scrape, extract or monitor content',
          'Upload or transmit any malicious code, virus or harmful content',
          'Impersonate any person or entity',
        ],
      },
      {
        title: '12. Governing Law & Disputes',
        body: [
          'These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or in connection with these Terms shall first be subject to good-faith negotiation between the parties.',
          'If a dispute cannot be resolved through negotiation within 30 days, either party may refer the matter to binding arbitration under the rules of the London Court of International Arbitration (LCIA).',
          'Nothing in this clause prevents either party from seeking urgent injunctive relief from any court of competent jurisdiction.',
        ],
      },
      {
        title: '13. Amendments to These Terms',
        body: [
          'Limore reserves the right to update these Terms & Conditions at any time. The "Last updated" date at the top of this page reflects the most recent revision. Your continued use of our services after any changes constitutes acceptance of the revised terms.',
          'For corporate clients with signed service agreements, contractual terms in that agreement take precedence over these general Terms & Conditions.',
        ],
      },
      {
        title: '14. Contact',
        body: [
          'For any questions regarding these Terms & Conditions please contact:',
        ],
        contact: [
          'Email: office@thelimore.com',
          'Response time: within 30 business days',
        ],
      },
    ],
  },

  ar: {
    eyebrow:  'قانوني',
    heading:  'الشروط والأحكام',
    updated:  `آخر تحديث: ${LAST_UPDATED}`,
    intro:    'تحكم هذه الشروط والأحكام استخدامك لخدمات ليمور وموقعها الإلكتروني ومنصتها. باستخدام أي خدمة من خدمات ليمور أو إجراء حجز، فإنك توافق على الالتزام بهذه الشروط.',
    sections: [
      { title: '1. التعريفات', body: ['"ليمور" تشير إلى شركة ليمور ومشغليها المعتمدين.', '"العميل" يشير إلى أي فرد أو شركة يجري حجزا أو يستخدم خدماتنا.', '"الحجز" يشير إلى أي طلب نقل مؤكد عبر منصتنا أو مدير حسابنا.'] },
      { title: '2. الحجوزات والتأكيد', body: ['يتم تأكيد الحجز فقط عند استلام تأكيد كتابي من ليمور عبر البريد الإلكتروني.', 'يتحمل العملاء مسؤولية تقديم معلومات دقيقة عند الحجز.'] },
      { title: '3. الأسعار والدفع', body: ['تشمل جميع الأسعار السائق والمركبة والرسوم القياسية ما لم يُذكر خلاف ذلك.', 'قد تطبق رسوم إضافية لوقت الانتظار الإضافي والتوقفات الإضافية.'], list: ['وقت انتظار مشمول: 60 دقيقة للرحلات الدولية، 30 دقيقة للمحلية، 15 دقيقة لباقي الحجوزات', 'رسوم عدم الحضور تطبق بعد انتهاء وقت الانتظار المشمول'] },
      { title: '4. الإلغاء والتعديل', body: ['تختلف سياسات الإلغاء حسب نوع الحجز. السياسة العامة:'], list: ['إلغاء قبل 24 ساعة: استرداد كامل', 'إلغاء قبل 12-24 ساعة: رسوم 50%', 'إلغاء قبل أقل من 12 ساعة: رسوم كاملة', 'عدم الحضور: رسوم كاملة'] },
      { title: '5. سلوك العميل', body: ['يُتوقع من العملاء التصرف باحترام في جميع الأوقات.'], list: ['يُحظر التدخين في جميع مركبات ليمور', 'الأضرار التي يسببها العميل تُحتسب بالتكلفة الكاملة للإصلاح', 'لليمور الحق في إنهاء الرحلة إذا شكّل الاستمرار خطرا'] },
      { title: '6. المسؤولية', body: ['تقتصر مسؤولية ليمور على تكلفة الحجز المعني. لسنا مسؤولين عن الأضرار غير المباشرة بما في ذلك فوات الرحلات أو الاجتماعات.'] },
      { title: '7. القانون الحاكم', body: ['تخضع هذه الشروط لقوانين إنجلترا وويلز. يجب حل النزاعات أولا عبر التفاوض بحسن نية خلال 30 يوما.'] },
      { title: '8. التواصل', body: ['للاستفسار عن هذه الشروط:'], contact: ['البريد الإلكتروني: legal@limore.com', 'وقت الاستجابة: 30 يوم عمل'] },
    ],
  },

  fr: {
    eyebrow:  'Mentions Legales',
    heading:  'Conditions Generales',
    updated:  `Derniere mise a jour : ${LAST_UPDATED}`,
    intro:    'Les presentes Conditions Generales regissent votre utilisation des services, du site web et de la plateforme de Limore. En effectuant une reservation ou en utilisant un service Limore, vous acceptez d\'etre lie par ces conditions.',
    sections: [
      { title: '1. Definitions', body: ['"Limore", "nous" designe la societe Limore et ses operateurs autorises.', '"Client", "vous" designe toute personne ou societe effectuant une reservation ou utilisant nos services.', '"Reservation" designe toute demande de transport confirmee via notre plateforme ou gestionnaire de compte.'] },
      { title: '2. Reservations et Confirmation', body: ['Une reservation est confirmee uniquement a reception d\'une confirmation ecrite de Limore par email.', 'Les clients sont responsables de fournir des informations exactes lors de la reservation.'] },
      { title: '3. Tarifs et Paiement', body: ['Tous les prix comprennent le chauffeur, le vehicule, les peages et le temps d\'attente standard sauf mention contraire.', 'Des frais supplementaires peuvent s\'appliquer pour le temps d\'attente additionnel, les arrets supplementaires et les demandes speciales.'], list: ['Temps d\'attente inclus : 60 min vols internationaux, 30 min vols domestiques, 15 min autres', 'Des frais de non-presentation s\'appliquent apres le temps d\'attente inclus'] },
      { title: '4. Annulations et Modifications', body: ['Les politiques d\'annulation varient selon le type de reservation. Politique generale :'], list: ['Annulation plus de 24h avant : remboursement integral', 'Annulation 12-24h avant : facturation de 50%', 'Annulation moins de 12h avant : facturation totale', 'Non-presentation : facturation totale'] },
      { title: '5. Conduite du Client', body: ['Les clients et passagers doivent se comporter avec respect a tout moment.'], list: ['Interdiction de fumer dans tous les vehicules Limore', 'Les dommages causes par le client seront factures au cout total de reparation', 'Limore se reserve le droit de mettre fin a un trajet en cas de risque'] },
      { title: '6. Responsabilite', body: ['La responsabilite de Limore est limitee au cout de la reservation concernee. Nous ne sommes pas responsables des dommages indirects, notamment les vols manques ou pertes liees a un retard.'] },
      { title: '7. Droit Applicable', body: ['Les presentes Conditions sont regies par le droit anglais et gallois. Les litiges seront d\'abord soumis a une negociation de bonne foi dans les 30 jours.'] },
      { title: '8. Contact', body: ['Pour toute question relative aux presentes Conditions :'], contact: ['Email : legal@limore.com', 'Delai de reponse : 30 jours ouvrables'] },
    ],
  },
}

export default function TermsContent({ locale = 'en' }) {
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

      {/* BODY CONTENT — alternating BLACK / WHITE */}
      {content.sections.map((sec, i) => {
        const isDark = i % 2 === 0
        const bg     = isDark ? '#080808' : '#FAFAF8'
        const head   = isDark ? '#F8F7F4' : '#0A0A0A'
        const body   = isDark ? 'rgba(248,247,244,0.45)' : 'rgba(10,10,10,0.55)'
        const dot    = isDark ? 'rgba(196,30,30,0.7)' : '#C41E1E'
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

              {/* Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
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