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
  return function (
    tree: any,
    {
      data: { astro }
    }: {
      data: {
        astro: any;
      };
    }
  ) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    astro.frontmatter.estReadingTime = readingTime.minutes;
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
