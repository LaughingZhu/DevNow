import * as React from 'react';

export function ThemeSwitch() {
  const [theme, setThemeState] = React.useState<'theme-light' | 'dark' | 'system'>('theme-light');

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : 'theme-light');
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);

  const onHandleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setThemeState(!e.target.checked ? 'dark' : 'theme-light');
  }, []);

  return (
    <div className='flex items-center'>
      <label className='theme'>
        <input type='checkbox' checked={theme == 'theme-light'} onChange={onHandleChange} />
        <span className='slider'></span>
      </label>
    </div>
  );
}
