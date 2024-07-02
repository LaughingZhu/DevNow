export interface Props {
  title: string;
  slug: string;
  color: 'green' | 'blue' | 'orange' | 'purple' | 'pink';
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: 'Technology',
    slug: 'technology',
    color: 'blue',
    description:
      'Keep up with the latest tech trends and learn about the latest innovations in software development, hardware design, cybersecurity, and more.'
  },
  {
    title: 'Book',
    slug: 'book',
    color: 'green',
    description: 'Something about Books'
  },
  {
    title: 'Blog',
    slug: 'blog',
    color: 'purple',
    description: 'Something about Blog posts'
  },
  {
    title: 'DevNow',
    slug: 'devnow',
    color: 'orange',
    description: 'Somthing about DevNow platform.'
  }
];
