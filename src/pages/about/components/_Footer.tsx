/*
 * @Date: 2024-09-28 08:54:02
 * @LastEditors: LaughingZhu 474268433@qq.com
 * @LastEditTime: 2024-09-29 08:59:59
 * @Description:
 */
import FaceSVG from '@/components/icons/Face';
import cn from 'clsx';
export default function Footer() {
  return (
    <div
      className='relative mx-auto flex w-[90%] max-w-[840px] flex-col items-center justify-center py-56'
      style={{
        wordSpacing: '0.25rem'
      }}
    >
      <div className='relative'>
        <FaceSVG class={cn('twinkle-display h-20 w-20 dark:text-white')} />
        <FaceSVG class={cn('twinkle-style h-20 w-20 dark:text-white')} />
      </div>
      <span className={cn('mt-6 font-BreeSerif text-2xl')}>
        {
          "Thank you very much for visiting my personal website! I'm passionate about making new friends and am more than happy to communicate about various industry topics or emerging technologies. Feel free to reach out to me with any questions you may have or if you'd like to discuss anything in any direction. thanks!"
        }
      </span>

      <div className='mt-8 text-[12px] text-gray-500'>
        this page created by <a href='https://github.com/LHRUN/one-space'>one-space</a>
      </div>
    </div>
  );
}
