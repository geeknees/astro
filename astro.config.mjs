import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://geeknees.github.io',
  base: '/astro',
  integrations: [mdx(), sitemap()]
})
