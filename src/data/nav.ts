interface Menu {
  label: string;
  href: string;
  /** 移动端隐藏 */
  isMobileHide?: boolean;
  /** 新开窗口打开 */
  external?: boolean;
}

export const LEFT_MENU: Menu[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  }
];
export const RIGHT_MENU: Menu[] = [
  // {
  //   label: 'Category',
  //   href: '/category'
  // },
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
