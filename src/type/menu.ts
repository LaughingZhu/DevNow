/** 菜单子项（支持二级嵌套） */
export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

/** 菜单 item */
export interface Menu {
  label: string;
  href: string;
  /** 移动端隐藏 */
  isMobileHide?: boolean;
  /** 新开窗口打开 */
  external?: boolean;
  /** 子菜单 */
  children?: MenuItem[];
}
