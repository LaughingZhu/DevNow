import type { Menu } from '@type/menu';
import { getAllCategories } from '@utils/content';
const allCategories = getAllCategories();

export const LEFT_MENU: Menu[] = [
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Category',
    href: '/category',
    isMobileHide: true,
    children: allCategories
  }
];
export const RIGHT_MENU: Menu[] = [
  {
    label: 'Sponsor',
    href: '/sponsor'
  },
  {
    label: 'Github',
    href: 'https://github.com/LaughingZhu/DevNow',
    external: true
  }
];
export const MOBILE_MENU: Menu[] = [...LEFT_MENU, ...RIGHT_MENU].filter(
  (item) => !item.isMobileHide
);
