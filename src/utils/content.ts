import { categories } from '@data/category';
import { getCollection } from 'astro:content';

// Only return posts without `draft: true` in the frontmatter

export const latestPosts = (
  await getCollection('doc', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  })
).sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());

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
