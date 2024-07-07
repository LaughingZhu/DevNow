## 🚀Hello Here

DevNow 是一个精简的开源技术博客项目，支持 Vercel 一键部署，支持评论、搜索等功能，欢迎大家fork使用。

**DevNow** 目前承载着一个能够精准捕捉科技与开发领域精华内容的平台。

我们致力于打造一个 **轻量级、高效率** 的内容平台，让科技与开发领域的动态快速、准确地呈现在你的面前。

官网直达： <https://devnow.laughingzhu.cn/>

![展示](https://cdn.laughingzhu.cn/DevNow/hJB0pNu4AeZKlnEhgAnyn.png-thumb)

## 支持的功能

- ✅ 适配移动端
- ✅ SEO & OpenGraph
- ✅ 支持 Markdown & MDX
- ✅ 语法高亮
- ✅ 图片压缩
- ✅ 主题色
- ✅ 代码复制
- ✅ 支持 Sitemap
- ✅ 支持 RSS Feed 订阅
- ✅ 草稿模式
- ✅ 🔍文章搜索
- ✅ 支持 Comments (Giscus)
- ✅ 支持分页

## 迭代计划

- 🆙 分享模块
- 🆙 等待 Issue、Pr 中

## 技术栈

- Astro
- TypeScript
- Tailwind CSS
- Mdx (大家在投稿时，可以有优先使用.mdx)
- Vercel 部署

## Who am i?

**DevNow** 是一个致力于为开发者和科技爱好者提供高质量内容的周刊网站。我们深知你的时间宝贵，因此每周都会精心筛选并汇总近期最值得关注的科技新闻、开发趋势、实用工具和技术深度解析，将它们浓缩成一篇内容丰富、易于消化的周刊，助你轻松掌握行业动态。

## 为什么选择 DevNow？

- **高效便捷**： 无需花费大量时间浏览各类网站和博客，**DevNow** 将精华内容一网打尽，让你在短时间内快速了解行业动态。
- **内容优质**： 我们注重内容的深度和广度，涵盖了从人工智能、云计算到前端开发、后端架构等多个热门领域。
- **专业视角**： 由经验丰富的开发者和技术编辑团队精心筛选和撰写，保证内容的专业性和深度。
- **持续更新**： 每周定期更新，确保你始终走在科技前沿。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=laughingzhu/devnow&type=Date)](https://star-history.com/#laughingzhu/devnow&Date)

**做大做强，再创辉煌！**

**欢迎投稿、加入 DevNow 社区，与我们一起探讨科技的未来！**

**支持 DevNow 就给俺来个Star吧！**

## Vercel 一键部署

### 1、Vercel部署

[![用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/LaughingZhu/DevNow)

### [2.添加环境变量](https://vercel.com/docs/projects/environment-variables)

```js
// doc seach 相关

PUBLIC_SEARCH_APP_ID;
PUBLIC_SEARCH_API_KEY;

// Giscus 评论相关

PUBLIC_GISCUS_REPO_ID;
PUBLIC_GISCUS_REPO;

// Google analytics 相关

PUBLIC_GOOGLE_ANALYTICS_ID;

// Sentry 相关
PUBLIC_SENTRY_DNS;
PUBLIC_SENTRY_TOKEN;
```

> **Giscus 评论功能** 和 **DocSearch 需** 需要在 config/index 中开启相关的功能，默认打开。

## 相关配置

### [Giscus](https://giscus.app/zh-CN)

提供一个评论服务。

- 1.状态
  在 src/config 中配置 **giscus: true**

- 2.配置环境变量
  .env 中配置 **PUBLIC_GISCUS_REPO_ID、PUBLIC_GISCUS_REPO** 即可
  也可以在类似Vercel上配置相关的环境变量，[具体详情](https://vercel.com/docs/projects/environment-variables)

### [DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch)

提供一个快捷的搜索服务。

- 1.状态
  在 src/config 中配置 **search: true**

- 2.配置环境变量
  .env 中配置 **PUBLIC_SEARCH_APP_ID、PUBLIC_SEARCH_API_KEY** 即可
  也可以在类似Vercel上配置相关的环境变量，[具体详情](https://vercel.com/docs/projects/environment-variables)
