import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

const myTheme = {
  name: 'my-theme',
  settings: [
    {
      scope: ['comment'],
      settings: {
        foreground: '#888'
      }
    },
  ]
}
// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', 
  markdown: {
    shikiConfig: {
      theme: 'vitesse-light',
      transformers: [
        myTransformer
      ]
    },
  },
  integrations: [mdx(), sitemap(), tailwind()]
}); 