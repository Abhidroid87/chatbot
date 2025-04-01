import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { themeConfig } from '../theme/themeConfig';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const colors = themeConfig[theme];

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        padding: '0.5rem',
        borderRadius: '50%',
        border: `1px solid ${colors.border}`,
        background: colors.surface,
        color: colors.text,
        cursor: 'pointer'
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};
