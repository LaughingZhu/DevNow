import type { Category } from '@type/category';

export const categories: Category[] = [
  {
    title: '发电厂',
    slug: 'power-station',
    color: '#ff4d4f',  // 活力红色，表示热情澎湃
    description: '就是siga的发癫。'
  },
  {
    title: '教程分享',
    slug: 'tutorials',
    color: '#52c41a',  // 生机绿色，代表成长与分享
    description: '原创或搬运的各类实用教程。'
  },
  {
    title: '学习笔记',
    slug: 'study-notes',
    color: '#1890ff',  // 知性蓝色，象征专注与智慧
    description: '记录个人学习历程、心得体会、知识积累。'
  },
  {
    title: '前言快讯',
    slug: 'news-flash',
    color: '#722ed1',  // 高贵紫色，表示洞察与视野
    description: '追踪热点事件，分享时事动态，带来及时的资讯更新与个人见解。'
  }
];
