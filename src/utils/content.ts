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

/**
 * @desc { 获取所有的分类 }
 */
export const getAllCategories = async (): Promise<
  {
    label: string;
    id: string;
  }[]
> => {
  return latestPosts.map((post) => {
    const category = categories.find((item) => item.slug === post.data.category);
    return {
      label: category?.title || 'DevNow',
      id: category?.slug || 'DevNow'
    };
  });
};
