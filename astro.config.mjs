/*
 * @Date: 2024-09-11 14:14:13
 * @LastEditors: LaughingZhu 474268433@qq.com
 * @LastEditTime: 2024-09-24 08:36:21
 * @Description:
 */
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import AutoImport from 'astro-auto-import';
import embeds from 'astro-embed/integration';
import { defineConfig } from 'astro/config';
import rehypePluginImageNativeLazyLoading from 'rehype-plugin-image-native-lazy-loading';
import config from './src/config/index';
import { remarkReadingTime } from './src/utils/all';
import { asideAutoImport, astroAsides } from './src/utils/MAside';

const PUBLIC_SENTRY_DNS = process.env.PUBLIC_SENTRY_DNS;
const PUBLIC_SENTRY_TOKEN = process.env.PUBLIC_SENTRY_TOKEN;

// https://astro.build/config
export default defineConfig({
  site: config.homePage,
  image: {
    // 配置 ' ' 为不对任务图片进行优化，建议对未走cdn的图片进行优化开启
    // 参考： https://docs.astro.build/zh-cn/guides/images/#%E6%8E%88%E6%9D%83%E8%BF%9C%E7%A8%8B%E5%9B%BE%E5%83%8F
    domains: ['images.unsplash.com']
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
  // 预获取策略： https://docs.astro.build/zh-cn/guides/prefetch/#%E9%BB%98%E8%AE%A4%E9%A2%84%E8%8E%B7%E5%8F%96%E7%AD%96%E7%95%A5
  prefetch: {
    prefetchAll: true
  },
  integrations: [
    AutoImport({
      imports: [asideAutoImport]
    }),
    astroAsides(),
    embeds(),
    mdx({
      // Markdown 配置现在被忽略
      // extendMarkdownConfig: false,
      shikiConfig: {
        experimentalThemes: {
          dark: 'material-theme-darker'
        },
        wrap: true
      },
      drafts: true
      // gfm: false
    }),
    sitemap({
      serialize(item) {
        if (/posts/.test(item.url)) {
          item.changefreq = 'daily';
          item.lastmod = new Date();
          item.priority = 0.9;
        }
        return item;
      }
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
      enabled: false
    },
    isr: true
  })
});
