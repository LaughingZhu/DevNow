// 配置项
export const DEFAULT_GRID_COLUMNS: { [key: number]: string } = {
  1: 'md:grid-cols-1 xl:grid-cols-1',
  2: 'md:grid-cols-2 xl:grid-cols-2',
  3: 'md:grid-cols-3 xl:grid-cols-3',
  4: 'md:grid-cols-4 xl:grid-cols-4',
  5: 'md:grid-cols-5 xl:grid-cols-5',
  6: 'md:grid-cols-6 xl:grid-cols-6',
  7: 'md:grid-cols-7 xl:grid-cols-7',
  8: 'md:grid-cols-8 xl:grid-cols-8'
};

export default {
  /** 网站配置信息 start */
  title: 'DevNow',
  author: 'LaughingZhu',
  description: 'DevNow — 开发技术周刊',
  keywords: 'DevNow 开源技术博客项目。目前承载着一个技术新闻、开发weekly，每周一上午发布~',
  logo: 'https://r2.laughingzhu.cn/40850814d71699ef09fda435802bfe02-58f0d8.png',
  homePage: 'https://devnow.laughingzhu.cn',
  githubId: 'LaughingZhu',
  repo: 'LaughingZhu/DevNow',
  ico: 'https://r2.laughingzhu.cn/2191381389b808c9183a74c11f1280d6-c01e93.ico',
  /** 网站配置信息  end */

  cdn: 'https://cdn.laughingzhu.cn/',
  // giscus comment status
  giscus: true,
  // use DocSearch?
  // doc: https://docsearch.algolia.com/docs/what-is-docsearch
  search: true,
  // pagntion 配置
  pageSize: 18,
  /** 首页默认列数 */
  default_column: 3,
  /** 是否显示版权声明，默认不显示 */
  show_copyright_info: false,
  /** 域名备案信息开关, 为 '' 空则不显示 */
  foot_site_info: ''
};
