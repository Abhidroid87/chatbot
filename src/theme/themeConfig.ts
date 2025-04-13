export const themeConfig = {
  light: {
    background: '#ffffff',
    text: '#1a1a1a',
    primary: '#007AFF',
    secondary: '#5856D6',
    surface: '#f5f5f5',
    border: '#e0e0e0'
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    surface: '#2c2c2c',
    border: '#404040'
  }
};

export type ThemeColors = typeof themeConfig.light;
