import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sentry from "@sentry/astro";
import { defineConfig, squooshImageService } from 'astro/config';
import rehypePluginImageNativeLazyLoading from 'rehype-plugin-image-native-lazy-loading';
import { remarkReadingTime } from './src/utils/all';
const PUBLIC_SENTRY_DNS = import.meta.env.PUBLIC_SENTRY_DNS
const PUBLIC_SENTRY_TOKEN = import.meta.env.PUBLIC_SENTRY_TOKEN
console.log(import.meta.env, '-------env')
// https://astro.build/config
export default defineConfig({
  site: 'https://devnow.laughingzhu.cn',
  image: {
    domains: ['astro.build'],
    remotePatterns: [{
      protocol: 'https'
    }],
    service: squooshImageService()
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypePluginImageNativeLazyLoading],
    // extendDefaultPlugins: true,
    drafts: true,
    // 语法高亮
    shikiConfig: {
      theme: 'material-theme-darker',
      wrap: true
    }
  },
  optimizeDeps: {
    exclude: ['@astrojs/react-client']
  },
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      experimentalThemes: {
        dark: 'material-theme-darker'
      },
      wrap: true
    },
    drafts: true
  }),
  sitemap({
    entryLimit: 10000
  }),
  tailwind(),
  react(),
  sentry({
    dsn: PUBLIC_SENTRY_DNS,
    sourceMapsUploadOptions: {
      project: "javascript-astro",
      authToken: PUBLIC_SENTRY_TOKEN,
    },
  })],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});