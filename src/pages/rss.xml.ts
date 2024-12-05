import rss from '@astrojs/rss';
import config from '@config/index';
import { latestPosts } from '@utils/content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
const md = new MarkdownIt();
export async function GET(context: any) {
  const doc = latestPosts.slice(0, 10);
  return rss({
    // 输出的 xml 中的`<title>`字段
    title: config.description,
    // 输出的 xml 中的`<description>`字段
    description: config.description,
    site: context.site,
    // remove Astro 的 RSS 摘要默认生成带尾部斜杠的链接
    trailingSlash: false,
    items: doc.map((post) => ({
      ...post.data,
      content: sanitizeHtml(md.render(post.body || ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
      pubDate: post.data.publishDate,
      link: `/posts/${post.id}/`
    }))
  });
}
