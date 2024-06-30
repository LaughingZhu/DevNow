import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

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
