import GmailSVG from '@/components/icons/Gmail';
import TwitterSVG from '@/components/icons/Twitter';
import V2exSVG from '@/components/icons/V2ex';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import cn from 'clsx';
import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const SVG_CSS = 'dark:white blank h-[28px] w-[28px]';
const contactList = [
  {
    icon: <GitHubLogoIcon className={SVG_CSS} />,
    link: 'https://github.com/LaughingZhu'
  },
  {
    icon: <TwitterSVG class={SVG_CSS} />,
    link: 'https://x.com/ZhuLaughing'
  },
  {
    icon: <GmailSVG class={SVG_CSS} />,
    link: 'mailto:laughingzxc@gmail.com'
  },
  {
    icon: <V2exSVG class={SVG_CSS} />,
    link: 'https://www.v2ex.com/member/LaughingZhu'
  }
];

const threshold: number[] = [];
for (let i = 0; i < 1; i = i + 0.025) {
  threshold.push(i);
}

const About = () => {
  const { ref, entry } = useInView({
    threshold
  });

  const profileRadius = useMemo(() => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1) {
      return '50%';
    }
    const radius = entry.intersectionRatio * 50;
    return `${radius < 10 ? 10 : radius}%`;
  }, [entry?.intersectionRatio]);

  return (
    <div
      ref={ref}
      id='about'
      className='relative mx-auto flex w-[90%] max-w-[840px] flex-col items-center justify-center pt-28'
    >
      <div className={cn('group relative h-64 w-64 cursor-pointer')}>
        <img
          src='/logo.png'
          alt='profile'
          width={100}
          height={100}
          className='group-hover:rotate-y-180 absolute left-0 top-0 z-[1] h-full w-full transition-all duration-300'
          style={{
            borderRadius: profileRadius,
            backfaceVisibility: 'hidden'
          }}
        />
        <img
          src='/logo.png'
          alt='profile'
          width={100}
          height={100}
          className='group-hover:rotate-y-180 absolute left-0 top-0 h-full w-full transition-all duration-300'
          style={{
            borderRadius: profileRadius
          }}
        />
      </div>

      <div
        className={cn('spacing-word-1 font-BreeSerif text-2xl')}
        style={{
          wordSpacing: '0.25rem'
          // fontFamily: 'Bree Serif'
        }}
      >
        <div className='mb-10 mt-16 flex items-center justify-center gap-x-3'>
          {contactList.map((item, index) => (
            <a
              href={item.link}
              target='_blank'
              className='cursor-pointer rounded-lg border-2 border-black p-1 transition-all hover:scale-110 dark:border-white'
              key={index}
            >
              {item.icon}
            </a>
          ))}
        </div>
        Hello, I{"'"}m LaughingZhu, a Front End Developer with many years of experience. Welcome to
        my personal space!
        <div className='mt-6'>
          I focus on C-end project development, pursuing the ultimate aesthetic design and excellent
          user experience. In each project, I always maintain a high degree of enthusiasm and focus.
          I am usually keen to participate in open source projects and constantly explore
          cutting-edge technologies, and I am committed to creating truly extraordinary works that
          leave a mark worth remembering.
        </div>
        <div className='mt-6'>
          If you{"'"}d like to get to know me better, please to scroll down.
        </div>
      </div>
    </div>
  );
};

export default About;
