import { useState, useEffect } from 'react';

import {
  LabelToggleTheme,
  MoonToggleTheme,
  SunToggleTheme,
} from './ToggleTheme.styled';

function ToggleTheme() {
  const [theme, setTheme] = useState(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    return localStorage.getItem('theme') || (systemTheme ? 'dark' : 'light');
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const { body } = document;
    body.dataset.theme = theme;
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <LabelToggleTheme className="switcher">
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={theme === 'dark'}
      />
      {theme === 'dark' ? <MoonToggleTheme /> : <SunToggleTheme />}
    </LabelToggleTheme>
  );
}

export default ToggleTheme;
