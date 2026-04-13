// src/lib/translations.js
//imore Traveler Magazine
const blogTranslations = {
    en: {
      eyebrow:           'Perspectives & Insights',
      pageTitle:         'Limore Travel',
      pageTitleItalic:   'Magazine',
      noArticles:        'No articles yet.',
      readArticle:       'Read Article',
      read:              'Read',
      breadcrumbJournal: 'Magazine',
      breadcrumbArticle: 'Article',
      by:                'By',
      minRead:           'min read',
      backToAll:         '← All Articles',
      relatedEyebrow:    'Further Reading',
      relatedTitle:      'You May Also Like',
    },
    ar: {
      eyebrow:           'آراء ورؤى',
      pageTitle:         'مجلة',
      pageTitleItalic:   'ليمور',
      noArticles:        'لا مقالات حتى الآن.',
      readArticle:       'اقرأ المقال',
      read:              'اقرأ',
      breadcrumbJournal: 'المدونة',
      breadcrumbArticle: 'مقال',
      by:                'بقلم',
      minRead:           'دقيقة قراءة',
      backToAll:         '→ جميع المقالات',
      relatedEyebrow:    'مزيد من القراءة',
      relatedTitle:      'قد يعجبك أيضاً',
    },
    fr: {
      eyebrow:           'Perspectives & Actualités',
      pageTitle:         'Le Magazine',
      pageTitleItalic:   'Limore',
      noArticles:        "Aucun article pour l'instant.",
      readArticle:       "Lire l'article",
      read:              'Lire',
      breadcrumbJournal: 'Blog',
      breadcrumbArticle: 'Article',
      by:                'Par',
      minRead:           'min de lecture',
      backToAll:         '← Tous les articles',
      relatedEyebrow:    'À lire aussi',
      relatedTitle:      'Vous aimerez peut-être',
    },
  }
  
  export function getBlogTranslations(locale) {
    return blogTranslations[locale] || blogTranslations.en
  }