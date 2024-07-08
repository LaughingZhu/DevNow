import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 配置项
export const DEFAULT_GRID_COLUMNS = {
  1: 'md:grid-cols-1 xl:grid-cols-1',
  2: 'md:grid-cols-2 xl:grid-cols-2',
  3: 'md:grid-cols-3 xl:grid-cols-3',
  4: 'md:grid-cols-4 xl:grid-cols-4',
  5: 'md:grid-cols-5 xl:grid-cols-5',
  6: 'md:grid-cols-6 xl:grid-cols-6',
  7: 'md:grid-cols-7 xl:grid-cols-7',
  8: 'md:grid-cols-8 xl:grid-cols-8'
};
