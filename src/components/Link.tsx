/*
 * @Date: 2024-09-28 00:03:05
 * @LastEditors: LaughingZhu 474268433@qq.com
 * @LastEditTime: 2024-09-28 00:08:17
 * @Description:
 */
import type { FC } from 'react';

interface IProps {
  href: string;
}

const Link: FC<IProps> = ({ href }) => {
  return (
    <a
      href={href}
      className='duration-600 linear break-all bg-[image:linear-gradient(#373633,#373633),linear-gradient(#373633,#373633)] bg-[length:100%_1px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat pb-0.5 transition-[background-size] hover:bg-[length:100%_1px,100%_2px]'
      target='_blank'
    >
      {href}
    </a>
  );
};

export default Link;
