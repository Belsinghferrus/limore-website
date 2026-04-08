import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { postSchema } from './src/lib/sanity/schemas/post'

export default defineConfig({
  name: 'limore',
  title: 'Limore CMS',
  projectId: '06v8a1hb',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [postSchema],
  },
})