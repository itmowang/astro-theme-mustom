import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', 
  outDir: "docs",
  markdown: {
    shikiConfig: {
      theme: "ayu-dark",
      langs: ["javascript", "typescript", "html", "css", "json","shell"],
      transformers:[ {
        pre(node) {
          node.properties.class = "mockup-code";
        },
      },]
    },
  },
  integrations: [mdx(), sitemap(), tailwind()]
}); 