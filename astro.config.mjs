import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://agustinminzoni.com',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt()
  ]
})
