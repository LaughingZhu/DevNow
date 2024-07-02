import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
const parser = new MarkdownIt();
export async function GET(context: any) {
  const doc = await getCollection('doc');
  return rss({
    // 输出的 xml 中的`<title>`字段
    title: 'DevNow — 开发技术周刊',
    // 输出的 xml 中的`<description>`字段
    description: 'DevNow — 开发技术周刊',
    // 从端点上下文获取项目“site”
    // https://docs.astro.build/zh-cn/reference/api-reference/#contextsite
    site: context.site,
    trailingSlash: false,
    // 输出的 xml 中的`<item>`数组
    // 有关使用内容集合和 glob 导入的示例，请参阅“生成`items`”部分
    items: doc.map((post) => ({
      // content: post.render(),
      // customData: post.data.customData,
      // 从 `slug` 属性计算出 RSS 链接
      // 这个例子假设所有的文章都被渲染为 `/blog/[slug]` 路由
      ...post.data,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
      pubDate: post.data.publishDate,
      link: `/posts/${post.slug}/`
    }))
    // (可选) 注入自定义 xml
    // customData: `<language>en-en</language>`,
  });
}
