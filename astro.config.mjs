import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://agustinminzoni.com',
  integrations: [
    tailwind(),
    robotsTxt()
  ]
})
