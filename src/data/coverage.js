export const regions = [
    {
      id: 'middle-east',
      label: { en: 'Middle East', ar: 'الشرق الأوسط', fr: 'Moyen-Orient' },
      color: '#C41E1E',
      countries: [
        {
          id: 'uae', flag: '🇦🇪',
          name: { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة', fr: 'Émirats Arabes Unis' },
          cities: [
            { en: 'Dubai',       ar: 'دبي',        fr: 'Dubaï' },
            { en: 'Abu Dhabi',   ar: 'أبوظبي',     fr: 'Abou Dabi' },
            { en: 'Sharjah',     ar: 'الشارقة',    fr: 'Charjah' },
          ],
        },
        {
          id: 'saudi', flag: '🇸🇦',
          name: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية', fr: 'Arabie Saoudite' },
          cities: [
            { en: 'Riyadh',  ar: 'الرياض', fr: 'Riyad' },
            { en: 'Jeddah',  ar: 'جدة',    fr: 'Djeddah' },
            { en: 'NEOM',    ar: 'نيوم',   fr: 'NEOM' },
          ],
        },
        {
          id: 'bahrain', flag: '🇧🇭',
          name: { en: 'Bahrain', ar: 'البحرين', fr: 'Bahreïn' },
          cities: [{ en: 'Manama', ar: 'المنامة', fr: 'Manama' }],
        },
        {
          id: 'kuwait', flag: '🇰🇼',
          name: { en: 'Kuwait', ar: 'الكويت', fr: 'Koweït' },
          cities: [{ en: 'Kuwait City', ar: 'مدينة الكويت', fr: 'Koweït City' }],
        },
        {
          id: 'oman', flag: '🇴🇲',
          name: { en: 'Oman', ar: 'عُمان', fr: 'Oman' },
          cities: [{ en: 'Muscat', ar: 'مسقط', fr: 'Mascate' }],
        },
        {
          id: 'qatar', flag: '🇶🇦',
          name: { en: 'Qatar', ar: 'قطر', fr: 'Qatar' },
          cities: [{ en: 'Doha', ar: 'الدوحة', fr: 'Doha' }],
        },
        {
          id: 'yemen', flag: '🇾🇪',
          name: { en: 'Yemen', ar: 'اليمن', fr: 'Yémen' },
          cities: [{ en: 'Sanaa', ar: 'صنعاء', fr: 'Sanaa' }],
        },
        {
          id: 'egypt', flag: '🇪🇬',
          name: { en: 'Egypt', ar: 'مصر', fr: 'Égypte' },
          cities: [
            { en: 'Cairo',       ar: 'القاهرة',   fr: 'Le Caire' },
            { en: 'Alexandria',  ar: 'الإسكندرية', fr: 'Alexandrie' },
          ],
        },
        {
          id: 'turkey', flag: '🇹🇷',
          name: { en: 'Turkey', ar: 'تركيا', fr: 'Turquie' },
          cities: [
            { en: 'Istanbul', ar: 'إسطنبول', fr: 'Istanbul' },
            { en: 'Ankara',   ar: 'أنقرة',   fr: 'Ankara' },
          ],
        },
        {
          id: 'jordan', flag: '🇯🇴',
          name: { en: 'Jordan', ar: 'الأردن', fr: 'Jordanie' },
          cities: [{ en: 'Amman', ar: 'عمّان', fr: 'Amman' }],
        },
        {
          id: 'azerbaijan', flag: '🇦🇿',
          name: { en: 'Azerbaijan', ar: 'أذربيجان', fr: 'Azerbaïdjan' },
          cities: [{ en: 'Baku', ar: 'باكو', fr: 'Bakou' }],
        },
        {
          id: 'uzbekistan', flag: '🇺🇿',
          name: { en: 'Uzbekistan', ar: 'أوزبكستان', fr: 'Ouzbékistan' },
          cities: [{ en: 'Tashkent', ar: 'طشقند', fr: 'Tachkent' }],
        },
        {
          id: 'georgia', flag: '🇬🇪',
          name: { en: 'Georgia', ar: 'جورجيا', fr: 'Géorgie' },
          cities: [{ en: 'Tbilisi', ar: 'تبليسي', fr: 'Tbilissi' }],
        },
      ],
    },
    {
      id: 'europe',
      label: { en: 'Europe', ar: 'أوروبا', fr: 'Europe' },
      color: '#1E3A8A',
      countries: [
        {
          id: 'uk', flag: '🇬🇧',
          name: { en: 'United Kingdom', ar: 'المملكة المتحدة', fr: 'Royaume-Uni' },
          cities: [
            { en: 'London',   ar: 'لندن',    fr: 'Londres' },
            { en: 'Scotland', ar: 'اسكتلندا', fr: 'Écosse' },
          ],
        },
        {
          id: 'france', flag: '🇫🇷',
          name: { en: 'France', ar: 'فرنسا', fr: 'France' },
          cities: [
            { en: 'Paris', ar: 'باريس', fr: 'Paris' },
            { en: 'Nice',  ar: 'نيس',   fr: 'Nice' },
          ],
        },
        {
          id: 'switzerland', flag: '🇨🇭',
          name: { en: 'Switzerland', ar: 'سويسرا', fr: 'Suisse' },
          cities: [
            { en: 'Geneva', ar: 'جنيف',  fr: 'Genève' },
            { en: 'Zurich', ar: 'زيورخ', fr: 'Zurich' },
          ],
        },
        {
          id: 'italy', flag: '🇮🇹',
          name: { en: 'Italy', ar: 'إيطاليا', fr: 'Italie' },
          cities: [
            { en: 'Milan',  ar: 'ميلان',  fr: 'Milan' },
            { en: 'Venice', ar: 'البندقية', fr: 'Venise' },
            { en: 'Rome',   ar: 'روما',   fr: 'Rome' },
          ],
        },
        {
          id: 'germany', flag: '🇩🇪',
          name: { en: 'Germany', ar: 'ألمانيا', fr: 'Allemagne' },
          cities: [
            { en: 'Berlin',    ar: 'برلين',    fr: 'Berlin' },
            { en: 'Frankfurt', ar: 'فرانكفورت', fr: 'Francfort' },
          ],
        },
        {
          id: 'austria', flag: '🇦🇹',
          name: { en: 'Austria', ar: 'النمسا', fr: 'Autriche' },
          cities: [{ en: 'Vienna', ar: 'فيينا', fr: 'Vienne' }],
        },
        {
          id: 'spain', flag: '🇪🇸',
          name: { en: 'Spain', ar: 'إسبانيا', fr: 'Espagne' },
          cities: [
            { en: 'Madrid',    ar: 'مدريد',    fr: 'Madrid' },
            { en: 'Barcelona', ar: 'برشلونة',  fr: 'Barcelone' },
            { en: 'Ibiza',     ar: 'إيبيزا',   fr: 'Ibiza' },
          ],
        },
        {
          id: 'greece', flag: '🇬🇷',
          name: { en: 'Greece', ar: 'اليونان', fr: 'Grèce' },
          cities: [
            { en: 'Athens', ar: 'أثينا',    fr: 'Athènes' },
            { en: 'Mykonos', ar: 'ميكونوس', fr: 'Mykonos' },
          ],
        },
        {
          id: 'monaco', flag: '🇲🇨',
          name: { en: 'Monaco / Monte Carlo', ar: 'موناكو / مونت كارلو', fr: 'Monaco / Monte-Carlo' },
          cities: [
            { en: 'Monaco',      ar: 'موناكو',     fr: 'Monaco' },
            { en: 'Monte Carlo', ar: 'مونت كارلو', fr: 'Monte-Carlo' },
          ],
        },
        {
          id: 'montenegro', flag: '🇲🇪',
          name: { en: 'Montenegro', ar: 'الجبل الأسود', fr: 'Monténégro' },
          cities: [{ en: 'Podgorica', ar: 'بودغوريتسا', fr: 'Podgorica' }],
        },
        {
          id: 'poland', flag: '🇵🇱',
          name: { en: 'Poland', ar: 'بولندا', fr: 'Pologne' },
          cities: [{ en: 'Warsaw', ar: 'وارسو', fr: 'Varsovie' }],
        },
      ],
    },
    {
      id: 'asia',
      label: { en: 'Asia', ar: 'آسيا', fr: 'Asie' },
      color: '#065F46',
      countries: [
        {
          id: 'japan', flag: '🇯🇵',
          name: { en: 'Japan', ar: 'اليابان', fr: 'Japon' },
          cities: [{ en: 'Tokyo', ar: 'طوكيو', fr: 'Tokyo' }],
        },
        {
          id: 'china', flag: '🇨🇳',
          name: { en: 'China', ar: 'الصين', fr: 'Chine' },
          cities: [
            { en: 'Beijing',  ar: 'بكين',    fr: 'Pékin' },
            { en: 'Shanghai', ar: 'شنغهاي',  fr: 'Shanghai' },
          ],
        },
        {
          id: 'south-korea', flag: '🇰🇷',
          name: { en: 'South Korea', ar: 'كوريا الجنوبية', fr: 'Corée du Sud' },
          cities: [{ en: 'Seoul', ar: 'سيول', fr: 'Séoul' }],
        },
        {
          id: 'taiwan', flag: '🇹🇼',
          name: { en: 'Taiwan', ar: 'تايوان', fr: 'Taïwan' },
          cities: [{ en: 'Taipei', ar: 'تايبيه', fr: 'Taipei' }],
        },
        {
          id: 'hongkong', flag: '🇭🇰',
          name: { en: 'Hong Kong', ar: 'هونغ كونغ', fr: 'Hong Kong' },
          cities: [{ en: 'Hong Kong', ar: 'هونغ كونغ', fr: 'Hong Kong' }],
        },
        {
          id: 'singapore', flag: '🇸🇬',
          name: { en: 'Singapore', ar: 'سنغافورة', fr: 'Singapour' },
          cities: [{ en: 'Singapore', ar: 'سنغافورة', fr: 'Singapour' }],
        },
        {
          id: 'malaysia', flag: '🇲🇾',
          name: { en: 'Malaysia', ar: 'ماليزيا', fr: 'Malaisie' },
          cities: [{ en: 'Kuala Lumpur', ar: 'كوالا لمبور', fr: 'Kuala Lumpur' }],
        },
        {
          id: 'thailand', flag: '🇹🇭',
          name: { en: 'Thailand', ar: 'تايلاند', fr: 'Thaïlande' },
          cities: [{ en: 'Bangkok', ar: 'بانكوك', fr: 'Bangkok' }],
        },
      ],
    },
    {
      id: 'russia-cis',
      label: { en: 'Russia & CIS', ar: 'روسيا ورابطة الدول المستقلة', fr: 'Russie & CEI' },
      color: '#7C3AED',
      countries: [
        {
          id: 'russia', flag: '🇷🇺',
          name: { en: 'Russia', ar: 'روسيا', fr: 'Russie' },
          cities: [{ en: 'Moscow', ar: 'موسكو', fr: 'Moscou' }],
        },
      ],
    },
    {
      id: 'americas',
      label: { en: 'Americas', ar: 'الأمريكتان', fr: 'Amériques' },
      color: '#B45309',
      countries: [
        {
          id: 'usa', flag: '🇺🇸',
          name: { en: 'United States', ar: 'الولايات المتحدة', fr: 'États-Unis' },
          cities: [
            { en: 'Los Angeles', ar: 'لوس أنجلوس', fr: 'Los Angeles' },
            { en: 'Las Vegas',   ar: 'لاس فيغاس',  fr: 'Las Vegas' },
            { en: 'New York',    ar: 'نيويورك',     fr: 'New York' },
            { en: 'Miami',       ar: 'ميامي',       fr: 'Miami' },
          ],
        },
      ],
    },
    {
      id: 'india',
      label: { en: 'India', ar: 'الهند', fr: 'Inde' },
      color: '#D97706',
      countries: [
        {
          id: 'india', flag: '🇮🇳',
          name: { en: 'India', ar: 'الهند', fr: 'Inde' },
          cities: [
            { en: 'Mumbai',     ar: 'مومباي',    fr: 'Mumbai' },
            { en: 'Delhi',      ar: 'دلهي',      fr: 'Delhi' },
            { en: 'Rajasthan',  ar: 'راجستان',   fr: 'Rajasthan' },
            { en: 'Pune',       ar: 'بونه',      fr: 'Pune' },
            { en: 'Kerala',     ar: 'كيرالا',    fr: 'Kerala' },
          ],
        },
      ],
    },
  ]
  
  // Flat list of all cities for stats counter
  export const allCities = regions.flatMap(r => r.countries.flatMap(c => c.cities))
  export const allCountries = regions.flatMap(r => r.countries)
  export const cityCount    = allCities.length
  export const countryCount = allCountries.length
  export const regionCount  = regions.length