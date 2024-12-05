/*
 * @Date: 2024-10-05 20:28:37
 * @LastEditors: LaughingZhu 474268433@qq.com
 * @LastEditTime: 2024-10-06 14:25:34
 * @Description:
 */
import { latestPosts } from '@/utils/content';

let documents = latestPosts.map((post) => {
  return {
    slug: post.id,
    title: post.data.title,
    description: post.data.desc,
    content: post.body,
    category: post.data.category
  };
});

export async function GET() {
  return new Response(JSON.stringify(documents), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
