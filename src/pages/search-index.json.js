/*
 * @Date: 2024-10-05 20:28:37
 * @LastEditors: LaughingZhu 474268433@qq.com
 * @LastEditTime: 2024-10-06 14:25:03
 * @Description:
 */
import { latestPosts } from '@/utils/content';
import lunr from 'lunr';
import MarkdownIt from 'markdown-it';
const stemmerSupport = await import('lunr-languages/lunr.stemmer.support.js');
const zhPlugin = await import('lunr-languages/lunr.zh.js');
// 初始化 stemmer 支持
stemmerSupport.default(lunr);
// 初始化中文插件
zhPlugin.default(lunr);
const md = new MarkdownIt();

let documents = latestPosts.map((post) => {
  return {
    slug: post.id,
    title: post.data.title,
    description: post.data.desc,
    content: md.render(post.body)
  };
});
export const LunrIdx = lunr(function () {
  this.use(lunr.zh);
  this.ref('slug');
  this.field('title');
  this.field('description');
  this.field('content');
  // This is required to provide the position of terms in
  // in the index. Currently position data is opt-in due
  // to the increase in index size required to store all
  // the positions. This is currently not well documented
  // and a better interface may be required to expose this
  // to consumers.
  // this.metadataWhitelist = ['position'];

  documents.forEach((doc) => {
    this.add(doc);
  }, this);
});

export async function GET() {
  return new Response(JSON.stringify(LunrIdx), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
