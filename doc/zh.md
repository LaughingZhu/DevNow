## 🚀Hello There

[English](/README.md)

DevNow 是一个精简的开源技术博客项目模版，支持 Vercel 一键部署，支持评论、搜索等功能，欢迎大家体验。

## [🔗 官网直达](https://www.laughingzhu.cn/) <-- Demo

<div align="center">

<img src="https://r2.laughingzhu.cn/72853b50f2bfc17fbf7d3341d79b7e4f-df75d4.webp" alt="Screenshot" />

<hr/>

<h3 align="center">
 ⭐ Leave a star if you like this project! ⭐️
</h3>

[![用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/LaughingZhu/DevNow)

</div>

## 📌 Features

- ✅ 适配移动端
- ✅ SEO & OpenGraph
- ✅ 支持 Markdown & MDX
- ✅ 语法高亮
- ✅ 图片压缩
- ✅ 主题色
- ✅ 代码复制
- ✅ 支持 Sitemap
- ✅ 支持 RSS Feed 订阅
- ✅ 📝 草稿模式
- ✅ 🔍 文章搜索
- ✅ 支持 Comments (Giscus)
- ✅ 支持分页
- ✅ 🦙 Tina CMS

## ⚙️ 技术栈

- Astro
- TypeScript
- Tailwind CSS
- Mdx (大家在投稿时，可以有优先使用.mdx)
- Vercel 部署

## 👨🏻‍💻 部署

1. Clone or [fork](https://github.com/danielcgilibert/blog-template/fork) the repository:

```bash
git@github.com:LaughingZhu/DevNow.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. build 构建生成环境

```bash
pnpm build
```

## 📐 Vercel 环境变量配置

[在这里](https://vercel.com/docs/projects/environment-variables) 配置相关环境变量

```js
// Giscus 评论相关
PUBLIC_GISCUS_REPO_ID;
PUBLIC_GISCUS_REPO;

// Google analytics 相关
PUBLIC_GOOGLE_ANALYTICS_ID;

// Sentry 相关
PUBLIC_SENTRY_DNS;
PUBLIC_SENTRY_TOKEN;
```

> 📢 注意：
>
> **Giscus 评论功能** 需要在 config/index 中开启相关的功能，默认打开。
>
> 如果是自己私有部署的话，需要把这些环境变量在 .env 中更新

## 评论配置 [Giscus](https://giscus.app/zh-CN)

提供一个评论服务。

- 1.状态
  在 src/config 中配置 **giscus: true**

- 2.配置环境变量
  .env 中配置 **PUBLIC_GISCUS_REPO_ID、PUBLIC_GISCUS_REPO、和 PUBLIC_GISCUS_CATEGORY_ID** 即可
  也可以在类似Vercel上配置相关的环境变量，[具体详情](https://vercel.com/docs/projects/environment-variables)

## 无头CMS（Tina CMS）

具体可参考：[Tina CMS 配置](https://www.laughingzhu.cn/posts/tina-cms)

## 🗂️ 添加分类

如果想要添加新的分类,可以在 src/data/categories.ts 数组中添加对应的即可，如下：

```ts
export const categories: Category[] = [
  {
    title: 'Tech',
    slug: 'tech',
    color: 'blue',
    description:
      'tech category'
  },
  { new category here } <---
]
```

## Sponsors：（感谢大家的支持，排名不分先后）

<img src='https://r2.laughingzhu.cn/11a4546cbebfb285c418aa0a60080434-2c9ce1.webp' alt='Sponsors' />

## 可以通过这里来赞助我

<div align="center">
<img src="https://r2.laughingzhu.cn/8df0d597-93dc-44a4-9e93-ebd02f74e695.JPG" alt="Buy Me A Coffee" width="174" />

<img src="https://r2.laughingzhu.cn/c88193fc-14ea-4236-a3f8-13b6ef736182.JPG" alt="Buy Me A Coffee" width="174" />
</div>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=laughingzhu/devnow&type=Date)](https://star-history.com/#laughingzhu/devnow&Date)
