import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: {
            light: '#F7F7F8',
            dark: '#0C0C0E',
          },
          surface: {
            light: '#FFFFFF',
            dark: '#141416',
          },
          elevated: {
            light: '#FAFAFC',
            dark: '#1B1B1E',
          },
          border: {
            light: '#E5E5E7',
            dark: '#242427',
          },
          separator: {
            light: '#E5E5E7',
            dark: '#242427',
          },
          text: {
            primary: {
              light: '#171717',
              dark: '#F5F5F7',
            },
            secondary: {
              light: '#777777',
              dark: '#8E8E93',
            },
            tertiary: {
              light: '#9E9EA4',
              dark: '#636366',
            },
          },
          accent: {
            DEFAULT: '#6D9FEA',
            hover: '#5A8FD9',
            subtle: 'rgba(109, 159, 234, 0.12)',
            glow: 'rgba(109, 159, 234, 0.25)',
          },
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
      letterSpacing: {
        display: '-0.024em',
        subhead: '-0.012em',
        caps: '0.05em',
      },
      boxShadow: {
        'apple-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'apple-card': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'apple-hover': '0 8px 24px -4px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'apple-modal': '0 20px 48px -8px rgba(0, 0, 0, 0.16), 0 8px 16px -4px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        apple: '14px',
        'apple-lg': '18px',
        'apple-xl': '22px',
      },
    },
  },
  plugins: [],
};

export default config;
