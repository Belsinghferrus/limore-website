// sanity/schemas/post.js
// Add postSchema to your schemaTypes array in sanity.config.js

export const postSchema = {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'object',
        fields: [
          { name: 'en', title: 'English', type: 'string', validation: (R) => R.required() },
          { name: 'ar', title: 'Arabic',  type: 'string' },
          { name: 'fr', title: 'French',  type: 'string' },
        ],
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title.en', maxLength: 96 },
        validation: (R) => R.required(),
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'object',
        fields: [
          { name: 'en', title: 'English', type: 'text', rows: 3 },
          { name: 'ar', title: 'Arabic',  type: 'text', rows: 3 },
          { name: 'fr', title: 'French',  type: 'text', rows: 3 },
        ],
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'object',
            fields: [
              { name: 'en', type: 'string', title: 'English' },
              { name: 'ar', type: 'string', title: 'Arabic' },
              { name: 'fr', type: 'string', title: 'French' },
            ],
          },
        ],
      },
      {
        name: 'category',
        title: 'Category',
        type: 'object',
        description: 'Short label shown on cards',
        fields: [
          { name: 'en', title: 'English', type: 'string' },
          { name: 'ar', title: 'Arabic',  type: 'string' },
          { name: 'fr', title: 'French',  type: 'string' },
        ],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
        initialValue: 'The Limore Team',
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        options: { dateFormat: 'YYYY-MM-DD', timeStep: 60 },
        validation: (R) => R.required(),
      },
      {
        name: 'readTime',
        title: 'Read Time (minutes)',
        type: 'number',
        initialValue: 5,
      },
      {
        name: 'featured',
        title: 'Featured Post',
        type: 'boolean',
        description: 'Pins to the hero slot on the listing page',
        initialValue: false,
      },
      {
        name: 'body',
        title: 'Body',
        type: 'object',
        fields: [
          {
            name: 'en', title: 'English',
            type: 'array',
            of: [
              { type: 'block' },
              {
                type: 'image',
                options: { hotspot: true },
                fields: [
                  { name: 'alt',     type: 'string', title: 'Alt Text' },
                  { name: 'caption', type: 'string', title: 'Caption'  },
                ],
              },
            ],
          },
          {
            name: 'ar', title: 'Arabic',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
          },
          {
            name: 'fr', title: 'French',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
          },
        ],
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'object',
        fields: ['en', 'ar', 'fr'].map((lang) => ({
          name: lang,
          title: lang.toUpperCase() + ' SEO',
          type: 'object',
          fields: [
            { name: 'metaTitle',       type: 'string', title: 'Meta Title' },
            { name: 'metaDescription', type: 'text',   title: 'Meta Description', rows: 2 },
          ],
        })),
      },
    ],
  
    preview: {
      select: { title: 'title.en', media: 'coverImage', date: 'publishedAt' },
      prepare({ title, media, date }) {
        return {
          title: title || 'Untitled Post',
          subtitle: date ? new Date(date).toLocaleDateString('en-GB') : 'No date',
          media,
        }
      },
    },
  
    orderings: [{
      title: 'Published (Newest First)',
      name:  'publishedAtDesc',
      by:    [{ field: 'publishedAt', direction: 'desc' }],
    }],
  }
  
  export default postSchema