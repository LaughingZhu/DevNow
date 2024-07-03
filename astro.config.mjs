import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig, squooshImageService } from 'astro/config';
import rehypePluginImageNativeLazyLoading from 'rehype-plugin-image-native-lazy-loading';
import { remarkReadingTime } from './src/utils/all';

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
  integrations: [
    mdx({
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
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});