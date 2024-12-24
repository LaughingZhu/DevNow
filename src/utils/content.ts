import { categories } from '@data/category';
import { getCollection } from 'astro:content';

// 如果需要接入 Notion 数据源，需要将下面的注释去掉
// export const getNotionDocs = (await getCollection('notion')).map((item) => {
//   return {
//     id: item.id,
//     body: item.rendered?.html ?? '',
//     data: {
//       title: richTextToPlainText(item.data.properties.title.rich_text),
//       desc: richTextToPlainText(item.data.properties.desc.rich_text),
//       category: item.data.properties.category.select?.name || '',
//       author: richTextToPlainText(item.data.properties.author.rich_text),
//       tags: item.data.properties.tags.rich_text[0].plain_text.split(','),
//       image: item.data.properties.image.url,
//       publishDate: item.data.properties.publishDate.created_time,
//       pin: false
//     },
//     rendered: item.rendered,
//     filePath: item.id,
//     collection: item.collection
//   };
// });

// Only return posts without `draft: true` in the frontmatter
export const latestPosts = [
  ...(await getCollection('doc', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  }))
  // 如果需要接入 Notion 数据源，需要将下面的注释去掉
  // ...getNotionDocs
].sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());

/**
 * 根据分类筛选最新帖子
 * @param category 分类字符串，用于筛选帖子
 * @returns 返回一个数组，包含所有与分类匹配的帖子
 */
export const filterPostsByCategory = async (category = '') => {
  return latestPosts.filter((post) => post.data.category.toLowerCase() === category);
};

export const filterPostsByTag = async (tag = '') => {
  return latestPosts.filter((post) =>
    post.data.tags.map((item) => item.toLowerCase()).includes(tag)
  );
};

export interface ALL_CATEGORY_TYPE {
  label: string;
  id: string;
  children: { label: string; id: string }[];
}
/**
 * @desc { 获取所有的分类 }
 */
export const getAllCategories = async (): Promise<ALL_CATEGORY_TYPE[]> => {
  const map = new Map<
    string,
    { label: string; id: string; children: { label: string; id: string }[] }
  >();

  latestPosts.forEach((post) => {
    const category = categories.find((item) => item.slug === post.data.category);
    if (!category) {
      return;
    } else if (!map.has(category.slug)) {
      map.set(category.slug, {
        label: category.title || 'DevNow',
        id: category.slug || 'DevNow',
        children: []
      });
    }

    const target = map.get(category.slug);
    if (!target) return;
    target.children.push({
      label: post.data.title,
      id: post.id
    });
    map.set(category.slug, target);
  });

  return [...map.values()].sort((a, b) => a.label.localeCompare(b.label));
};
