// src/lib/sanity/index.js
import { createClient } from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '06v8a1hb',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})


const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export function getImageUrl(imageField, width = 1200) {
  if (!imageField?.asset) return null
  return urlFor(imageField).width(width).auto('format').url()
}

export function getLqip(imageField) {
  return imageField?.asset?.metadata?.lqip || null
}