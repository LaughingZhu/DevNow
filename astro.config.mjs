import db from "@astrojs/db";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import rehypePluginImageNativeLazyLoading from 'rehype-plugin-image-native-lazy-loading';
import { remarkReadingTime } from './src/utils/all';
const PUBLIC_SENTRY_DNS = process.env.PUBLIC_SENTRY_DNS;
const PUBLIC_SENTRY_TOKEN = process.env.PUBLIC_SENTRY_TOKEN;

// https://astro.build/config
export default defineConfig({
  site: 'https://devnow.laughingzhu.cn',
  experimental: {
    // 在静态模式下构建时，启用内容集合的持久性缓存。
    contentCollectionCache: true
  },
  image: {
    domains: ['astro.build'],
    remotePatterns: [{
      protocol: 'https'
    }]
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypePluginImageNativeLazyLoading],
    drafts: true,
    // 语法高亮
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme-darker',
      wrap: true
    }
  },
  optimizeDeps: {
    exclude: ['@astrojs/react-client']
  },
  integrations: [
    mdx({
      shikiConfig: {
        experimentalThemes: {
          dark: 'material-theme-darker'
        },
        wrap: true
      },
      drafts: true,
      gfm: false
    }),
    sitemap({
      entryLimit: 10000
    }),
    tailwind(),
    react()
  // sentry({
  //   dsn: PUBLIC_SENTRY_DNS,
  //   sourceMapsUploadOptions: {
  //     project: "javascript-astro",
  //     authToken: PUBLIC_SENTRY_TOKEN,
  //   },
  // })
    ,
    db()
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    isr: true
  })
});