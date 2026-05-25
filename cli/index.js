#!/usr/bin/env node

const { Command } = require('commander');
const { execSync } = require('child_process');
const prompts = require('prompts');

const program = new Command();
let projectPath = '';
async function initProject() {
  console.log('欢迎使用项目初始化工具！');

  const opts = program.opts();

  // 询问用户输入和选择
  const response = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: '请输入项目名称:',
      validate: (name) => (name ? true : '项目名称不能为空'),
      initial: projectPath
    },
    {
      type: 'select',
      name: 'template',
      message: '请选择项目模板:',
      choices: [
        { title: 'JavaScript', value: 'javascript' },
        { title: 'TypeScript', value: 'typescript' }
      ],
      initial: opts.ts ? 1 : 0 // 默认 TypeScript
    },
    {
      type: 'select',
      name: 'tailwindCSS',
      message: 'Would you like to use Tailwind CSS?',
      choices: [
        { title: 'No', value: false },
        { title: 'Yes', value: true }
      ],
      initial: opts.tailwind ? 1 : 0 // 默认 TypeScript
    },
    {
      type: 'select',
      name: 'eslint',
      message: 'Would you like to use eslint',
      choices: [
        { title: 'No', value: false },
        { title: 'Yes', value: true }
      ],
      initial: opts.eslint ? 1 : 0 // 默认 eslint
    },
    {
      type: 'select',
      name: 'shadcnUI',
      message: 'Would you like to use Shadcn/ui?',
      choices: [
        { title: 'No', value: false },
        { title: 'Yes', value: true }
      ],
      initial: opts.shadcnUI ? 1 : 0 // 默认 shadcnUI
    }
  ]);

  // 项目初始化命令拼接
  const templateFlag = (response.template || opts.ts) === 'typescript' ? '--typescript' : '';
  const eslintFlag = response.eslint || opts.eslint ? '--eslint' : '';
  const tailwindCSS = response.tailwindCSS || opts.tailwind ? '--tailwind' : '';

  try {
    // 执行 Next.js 初始化命令
    console.log(`正在创建项目：${response.projectName}...`);
    execSync(
      `pnpm create next-app@latest ${response.projectName} ${templateFlag} ${eslintFlag} ${tailwindCSS} --turbopack --app --src-dir --import-alias "@/*"`,
      { stdio: 'inherit' }
    );

    // 切换到项目目录
    process.chdir(response.projectName);

    // 安装 shadcn/ui
    if (response.shadcnUI || opts.shadcnUI) {
      console.log('安装 shadcn/ui...');
      execSync('pnpm dlx shadcn@latest init -d', { stdio: 'inherit' });
    }

    console.log('项目初始化完成！');
    console.log(`请运行以下命令进入项目并启动开发服务器：`);
    console.log(`  cd ${response.projectName}`);
    console.log(`  pnpm dev`);
  } catch (error) {
    console.error('项目创建失败:', error.message);
  }
}

// 定义 CLI 命令
program
  .name('create-devnow-app')
  .description('创建一个 Next.js 项目')
  .argument('<project-name>', '项目名称')
  .option('--ts, --typescript', 'Initialize as a TypeScript project. (default)')
  .option('--tailwind', 'Initialize with Tailwind CSS config. (default)')
  .option('--eslint', 'Initialize with ESLint config.')
  .option('--shadcnUI', 'Enable ShadcnUi.')
  .action((name) => {
    projectPath = name;
    initProject();
  });

// 解析命令行参数
program.parse(process.argv);
