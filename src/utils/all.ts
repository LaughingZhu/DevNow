import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';
import config from '/src/config/index';

/** Format Date */
export const getFormattedDate = (date: string | number | Date) =>
  date
    ? new Date(date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : '';

/** Estimated Reading time */
export function remarkReadingTime() {
  return function (tree: unknown, { data }: any) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}

/** Check if an Image Path is Relative or Absolute */
export const checkImageUrl = (image: string | URL, url: string | URL | undefined): string => {
  try {
    new URL(image);
    return image as string;
  } catch (error) {
    return new URL(image, url).toString();
  }
};

// 格式化图片cdn链接
export const formatImageUrl = (url = '') => {
  if (!url) return '';
  return url.startsWith('http') ? url : `${config.img_host}/${url}-thumb`;
};
