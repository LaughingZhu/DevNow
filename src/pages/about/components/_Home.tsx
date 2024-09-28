import { DoubleArrowDownIcon } from '@radix-ui/react-icons';
import cn from 'clsx';
import { useCallback, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const threshold: number[] = [];
for (let i = 0; i < 1; i = i + 0.025) {
  threshold.push(i);
}

const Home = () => {
  const { ref, entry } = useInView({
    threshold
  });

  const lineOpacity = useCallback(
    (threshold: number) => {
      if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1) {
        return 1;
      }
      return entry.intersectionRatio < threshold
        ? 0
        : (entry.intersectionRatio - threshold) / (1 - threshold);
    },
    [entry?.intersectionRatio]
  );

  const lineTranslate = useCallback(
    (threshold: number, translateX: number) => {
      if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1) {
        return 'translateX(0px)';
      }
      return `translateX(${entry.intersectionRatio < threshold ? translateX : (1 - (entry?.intersectionRatio - threshold) / (1 - threshold)) * translateX}px)`;
    },
    [entry?.intersectionRatio]
  );

  const scrollDownOpacity = useMemo(() => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1) {
      return 1;
    }
    return entry?.intersectionRatio < 0.5 ? 0 : (entry?.intersectionRatio - 0.5) / 0.5;
  }, [entry?.intersectionRatio]);

  return (
    <div
      id={'home'}
      ref={ref}
      style={{ height: 'calc(100vh - 76px)' }}
      className='relative flex w-full select-none flex-col items-center justify-center overflow-hidden'
    >
      <div
        className={cn(
          'max-w-screen-sm:text-[3em] max-w-screen-md:text-[5em] break-all text-center font-[Monoton] text-[6rem] transition-all duration-200'
        )}
        style={{
          opacity: lineOpacity(0.6),
          transform: lineTranslate(0.6, 100)
        }}
      >
        Welcome
      </div>
      <div
        className={cn(
          'mt-8 break-all text-center font-[Monoton] text-8xl transition-all duration-200'
        )}
        style={{
          opacity: lineOpacity(0.5),
          transform: lineTranslate(0.5, -100)
        }}
      >
        To &nbsp;&nbsp; My &nbsp;&nbsp; Space
      </div>
      <div
        className={cn(
          'mt-8 flex items-end justify-center break-all text-center font-[Monoton] text-8xl transition-all duration-200'
        )}
        style={{
          opacity: lineOpacity(0.4),
          transform: lineTranslate(0.4, 100)
        }}
      >
        <span>I{"'"}m</span>
        <div
          className='relative ml-4 flex scale-90 items-center rounded-xl border-dashed'
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 20px 0px'
          }}
        >
          Zhu
          <div className="absolute left-0 top-0 z-[1] h-full w-full rounded-xl bg-[url('/background.png')] bg-[length:100px_100px] bg-repeat opacity-15"></div>
          <div className='absolute left-0 top-0 z-[0] h-full w-full rounded-xl bg-[#E9EFEC] opacity-60'></div>
        </div>
      </div>

      <div className='absolute bottom-10 flex justify-center'>
        <div
          className='flex animate-bounce flex-col items-center justify-center transition-all'
          style={{
            opacity: scrollDownOpacity
          }}
        >
          <div className='mb-1'>Scroll Down</div>
          <DoubleArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Home;
