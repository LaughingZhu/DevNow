import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
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
    // 配置 ' ' 为不对任务图片进行优化，建议对未走cdn的图片进行优化开启
    // 参考： https://docs.astro.build/zh-cn/guides/images/#%E6%8E%88%E6%9D%83%E8%BF%9C%E7%A8%8B%E5%9B%BE%E5%83%8F
    domains: ['images.unsplash.com', 'cdn.laughingzhu.cn']
    // service: passthroughImageService()
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
      // Markdown 配置现在被忽略
      // extendMarkdownConfig: false,
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
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    isr: true
  })
});
