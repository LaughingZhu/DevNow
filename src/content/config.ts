import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
// 接入 Notion 数据源，需要将下面的注释去掉
// import { notionLoader } from 'notion-astro-loader';
const SCHEMA = z.object({
  title: z.string(),
  desc: z.string(),
  // 是否是草稿
  draft: z.boolean().optional(),
  // 分类
  category: z.string().trim(),
  // 作者
  author: z.string().trim(),
  // 标签
  tags: z.array(z.string()),
  // 封面图
  image: z.string().optional(),
  // 发布时间
  publishDate: z.string().transform((str) => new Date(str)),
  // 是否置顶
  pin: z.boolean().optional()
});

const Docs = defineCollection({
  // add glob loader : https://github.com/withastro/astro/pull/11398
  loader: glob({
    pattern: ['**/[^_]*.md', '**/[^_]*.mdx'],
    base: './src/content/doc',
    generateId: ({ entry, data }) => {
      if (data.slug) {
        return data.slug as string;
      }
      return entry.replace(/\.[^/.]+$/, '');
    }
  }),
  schema: SCHEMA
});
// 接入 Notion 数据源，需要将下面的注释去掉
// export const NotionDocs = defineCollection({
//   loader: notionLoader({
//     auth: import.meta.env.PUBLIC_NOTION_TOKEN,
//     database_id: import.meta.env.PUBLIC_NOTION_DATABASE_ID
//   })
// });

export const collections = {
  doc: Docs
  // 如果需要接入 Notion 数据源，需要将下面的注释去掉
  // notion: NotionDocs
};

/** 文档类型 */
export type DOC_TYPE = z.infer<typeof SCHEMA>;
