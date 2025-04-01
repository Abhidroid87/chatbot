import React from 'react';
import { ThemeProvider } from '../theme/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ThemeToggle />
        {children}
      </div>
    </ThemeProvider>
  );
};
