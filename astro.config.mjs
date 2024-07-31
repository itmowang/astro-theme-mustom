import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

const myTheme = {
  "name": "mockup-code",
  "type": "dark",
  "colors": {
    "background": "#282c34",
    "text": "#abb2bf",
    // Define other colors as needed
  },
  "tokenColors": [
    {
      "name": "Comment",
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "foreground": "#5c6370"
      }
    },
    // Add other token colors as needed
  ]
};

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', 
  markdown: {
    shikiConfig: {
      theme: "ayu-dark",
      langs: ["javascript", "typescript", "html", "css", "json","shell"],
      transformers:[ {
        pre(node, line, col) {
          node.properties.class = "mockup-code";
        },
      },]
    },
  },
  integrations: [mdx(), sitemap(), tailwind()]
}); 