import type { MarkdownHeading } from 'astro';
import { type ClassValue, clsx } from 'clsx';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @description 格式化时间：兼容 Notion 数据返回的时间格式，对无效日期返回空字符串
 * @param dateTime
 * @returns
 **/
export function formatDate(dateTime: string) {
  try {
    return format(dateTime, 'yyyy-MM-dd HH:mm:ss');
  } catch {
    return '';
  }
}

// Notion 标题 depth 从 0 开始，而 Markdown 从 1 开始（h1=1），
// 加 2 是为了将 Notion depth=0 映射到 h2（depth=2），保持文章结构合理
const NOTION_HEADING_DEPTH_OFFSET = 2;

/**
 * @description 格式化标题: 兼容 Notion 数据 depth 从 0 开始的情况
 * @param heading
 * @returns
 **/
export function formatHeading(heading: MarkdownHeading[]) {
  if (heading.some((item) => item.depth === 0)) {
    return heading.map((item) => {
      return {
        ...item,
        depth: item.depth + NOTION_HEADING_DEPTH_OFFSET
      };
    });
  }
  return heading;
}
