import type { MarkdownHeading } from 'astro';
import { type ClassValue, clsx } from 'clsx';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @description 格式化时间： 兼容 Notion 数据返回的时间格式
 * @param dateTime
 * @returns
 **/
export function formatDate(dateTime: string) {
  const beijingTimeString = format(dateTime, 'yyyy-MM-dd HH:mm:ss');
  return beijingTimeString;
}

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
        depth: item.depth + 2
      };
    });
  }
  return heading;
}
