const scale = [0, 4, 8, 16, 32, 64];

export default {
  breakpoints: [450, 1024, 1280],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightgrey: '#f6f6ff',
  },
  space: {
    ...scale,
    xs: scale[1],
    sm: scale[2],
    md: scale[3],
    lg: scale[4],
    xl: scale[5],
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
};
