/** 菜单 item */
export interface Menu {
  label: string;
  href: string;
  /** 移动端隐藏 */
  isMobileHide?: boolean;
  /** 新开窗口打开 */
  external?: boolean;
  /** 子菜单 */
  children?: { id: string; label: string }[];
}
