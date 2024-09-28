/*
 * @Date: 2024-09-27 23:25:15
 * @LastEditors: LaughingZhu 474268433@qq.com
 * @LastEditTime: 2024-09-27 23:56:51
 * @Description:
 */
import type { TagCloudOptions } from '@frank-mayer/react-tag-cloud';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import cn from 'clsx';
import { useEffect } from 'react';

const stackList = [
  'Html',
  'Css',
  'JavaScript',
  'TypeScript',
  'Vue',
  'React',
  'Next.js',
  'Vite',
  'Webpack',
  'Pnpm',
  'Npm',
  'Yarn',
  'Shadcn/ui',
  'WeChat',
  'Cloudflare',
  'MiniProgram',
  'Taro',
  'Git',
  'ECharts',
  'SVG',
  'Canvas',
  'Node',
  'VSCode',
  'ESLint',
  'TailwindCss',
  'Sass',
  'Less',
  'Prisma',
  'Vercel',
  'Axios',
  'I18N',
  'Lodash',
  'Zustand',
  'Mobx',
  'PostCss',
  'SSR',
  'Pinia',
  'Figma',
  'Astro',
  'Markdown'
];

const Stack = () => {
  useEffect(() => {
    const elList = document.getElementsByClassName('tagcloud--item');
    if (elList.length) {
      Array.from(elList).forEach((el) => {
        (el as HTMLSpanElement).style.fontSize = '25px';
        (el as HTMLSpanElement).style.fontFamily = 'Bree Serif';
      });
    }
  }, []);

  return (
    <div id='stack' className='mx-auto mt-32 w-[90%] max-w-[1040px] pt-40'>
      <div className={cn('w-full text-center font-Monoton text-6xl')}>My Stack</div>

      <div
        className='relative mx-auto mt-24 flex aspect-square w-full items-center justify-center rounded-3xl font-BreeSerif'
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 15px 0px'
        }}
      >
        <TagCloud
          className='select-none font-BreeSerif'
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: (w.innerWidth * 0.9 > 920 ? 920 : w.innerWidth * 0.9) * 0.5,
            maxSpeed: 'normal'
          })}
          onClickOptions={{ passive: true }}
        >
          {stackList}
        </TagCloud>
        <div className="absolute left-0 top-0 z-[0] h-full w-full rounded-3xl bg-[url('/background.png')] bg-[length:100px_100px] bg-repeat opacity-15"></div>
      </div>
    </div>
  );
};

export default Stack;
