import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['dark'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        // Financial Dashboard Design System Colors
        dashboard: {
          // Dark theme backgrounds
          black: '#000000',
          'gray-950': '#0a0a0a',
          'gray-900': '#171717',
          'gray-800': '#262626',
          'gray-700': '#404040',
          'gray-600': '#525252',
          'gray-500': '#737373',
          'gray-400': '#a3a3a3',
          'gray-300': '#d4d4d4',
          'gray-200': '#e5e5e5',
          'gray-100': '#f5f5f5',
          'gray-50': '#fafafa',
          // Purple accent system
          purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7', // Primary purple
            600: '#9333ea',
            700: '#7c3aed',
            800: '#6b21a8',
            900: '#581c87',
            950: '#3b0764',
          },
          // Yellow/Lime accent system
          yellow: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15', // Bright yellow/lime
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
            950: '#422006',
          },
          // Semantic colors
          success: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          warning: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          error: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ['Space Grotesk', ...fontFamily.sans],
      },
      fontSize: {
        // Financial Dashboard Typography Scale
        'display-2xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }], // 72px
        'display-xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }], // 60px
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }], // 48px
        'display-md': [
          '2.25rem',
          { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' },
        ], // 36px
        'display-sm': [
          '1.875rem',
          { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' },
        ], // 30px
        'heading-xl': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 24px
        'heading-lg': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px
        'heading-md': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }], // 18px
        'heading-sm': ['1rem', { lineHeight: '1.5', fontWeight: '600' }], // 16px
        'body-xl': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'body-lg': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-md': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        'body-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }], // 12px
        'label-lg': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }], // 14px
        'label-md': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }], // 12px
        'label-sm': ['0.6875rem', { lineHeight: '1.4', fontWeight: '500' }], // 11px
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      boxShadow: {
        // Enhanced shadows for dashboard cards
        card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        cardHover: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        cardFocus: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
};

export default config;
