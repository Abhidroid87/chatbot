import React from 'react';
import { useTheme } from '../theme/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className="container">
      {/* ...existing code... */}
    </div>
  );
}