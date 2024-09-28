import Link from '@components/Link';
import cn from 'clsx';

const projectList = [
  {
    img: 'https://r2.laughingzhu.cn/3bcbae51ddcea2cdf738a11c2556a5cd-48f5c9.webp',
    title: 'DevNow',
    link: 'https://www.laughingzhu.cn/',
    github: 'https://github.com/LaughingZhu/DevNow',
    desc: 'DevNow is a minimal open source tech blog project template, support Vercel one-click deployment, support comments, search, etc., welcome everyone to experience.',
    feature:
      '· Mobile responsive \n · SEO & OpenGraph \n · Markdown & MDX support \n · Syntax highlighting \n · Image optimization \n · Dark mode \n · Copy code block \n · Sitemap support \n · RSS Feed support \n · Reading Time \n · Draft mode \n · Seach \n · Comments by Giscus \n · Pagination \n · Headless CMS by 🦙 Tina CMS'
  },
  {
    img: 'https://r2.laughingzhu.cn/804b3b870967316934c0763948c2a351-d4acc0.webp',
    title: 'Sudoku',
    desc: "Are you ready to challenge your mind and sharpen your problem-solving skills? The Sudoku Cup is your ultimate destination for all things Sudoku. Whether you're a beginner or a seasoned pro, our platform offers a wide range of puzzles tailored to different skill levels.",
    feature:
      '· Difficulty Levels: Select from various difficulty settings to match your skill level \n · Daily Challenges: Enjoy new puzzles every day for added excitement \n · Friends Functionality: Challenge friends and see who scores the highest \n · Undo & Erase: Easily correct mistakes with undo and erase options \n · Notes & Hints: Use notes for possible solutions and hints for guidance.'
  },
  {
    img: '/src/assets/work.svg',
    title: 'My Work',
    desc: 'The above are open source projects that I develop in my spare time. At work, I am a front-end development engineer mainly responsible for C-end projects, focusing on media and e-commerce industry. My work involves multiple platforms, including PC, mobile, mini program and APP. Brands worked and served include Converse, Coach, UA, and DJCars.',
    maxWidth: '170px'
  }
];

const Projects = () => {
  return (
    <div id='project' className='relative mt-32 w-full pt-40'>
      <div className={cn('w-full text-center font-Monoton text-6xl')}>Projects</div>

      <div className='relative w-full'>
        <div
          className='relative mx-auto mt-20 w-[90%] max-w-[1040px] rounded-3xl'
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 15px 0px'
          }}
        >
          <div className='relative z-[2]'>
            {projectList.map((project, index) => (
              <div
                className={cn('relative flex flex-col gap-x-4 px-10 py-12 md:flex-row', {
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                })}
                key={index}
                style={{
                  wordSpacing: '0.2rem'
                }}
              >
                <div className={cn('w-full flex-1 font-BreeSerif md:w-1/2')}>
                  <div className='text-center text-4xl font-black'>{project.title}</div>

                  <img
                    src={project.img}
                    className='max-600:block mx-auto my-5 hidden h-auto w-full rounded-xl'
                    style={{
                      maxWidth: project.maxWidth || 'auto'
                    }}
                    alt='projectImage'
                    width={200}
                    height={200}
                  />

                  {project.link && (
                    <div className='mt-2 flex flex-col text-base md:flex-row'>
                      <span className='w-16 shrink-0 font-semibold'>Link: </span>
                      <Link href={project.link} />
                    </div>
                  )}
                  {project.github && (
                    <div className='mt-2 flex flex-col text-base md:flex-row'>
                      <span className='w-16 shrink-0 font-semibold'>Github: </span>
                      <Link href={project.github} />
                    </div>
                  )}
                  <div className='mt-2 flex flex-col text-base md:flex-row'>
                    <span className='w-16 shrink-0 font-semibold'>Desc: </span>
                    <span>{project.desc}</span>
                  </div>
                  {project.feature && (
                    <div className='mt-2 flex flex-col text-base md:flex-row'>
                      <span className='w-16 shrink-0 font-semibold'>Feature: </span>
                      <span className='whitespace-pre-line'>{project.feature}</span>
                    </div>
                  )}
                </div>

                <div className='max-600:hidden sticky top-20 mt-8 flex h-fit w-full shrink-0 justify-center md:mt-0 md:w-1/2'>
                  <img
                    src={project.img}
                    width={200}
                    height={200}
                    className='h-fit w-full rounded-xl'
                    alt='projectImg'
                    style={{
                      maxWidth: project.maxWidth || 'auto'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 z-[0] h-full w-full rounded-3xl bg-[url('/background.png')] bg-[length:100px_100px] bg-repeat opacity-15"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
