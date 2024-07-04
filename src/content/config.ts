import { defineCollection, z } from 'astro:content';
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
  schema: SCHEMA
});

export const collections = {
  doc: Docs
};

/** 文档类型 */
export type DOC_TYPE = z.infer<typeof SCHEMA>;
