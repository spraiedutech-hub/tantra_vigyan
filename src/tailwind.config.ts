
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-noto-sans-kannada)', 'var(--font-noto-sans)', 'sans-serif'],
        headline: ['var(--font-noto-sans-kannada)', 'var(--font-noto-sans)', 'serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-slow-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'animated-border': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px hsl(var(--primary)))' },
          '50%': { filter: 'drop-shadow(0 0 15px hsl(var(--primary)))' },
        },
        'pulse-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 7px hsl(var(--accent)))', opacity: '0.9' },
          '50%': { filter: 'drop-shadow(0 0 20px hsl(var(--accent)))', opacity: '1' },
        },
        'pulse-glow-strong': {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px hsl(var(--primary)))', opacity: '1' },
          '50%': { filter: 'drop-shadow(0 0 25px hsl(var(--primary)))', opacity: '0.7' },
        },
        'fiery-border-glow': {
          '0%, 100%': {
            'box-shadow': 'inset 0 0 10px 5px hsl(var(--destructive) / 0.1), inset 0 0 20px 10px hsl(var(--primary) / 0.08)',
          },
          '50%': {
            'box-shadow': 'inset 0 0 15px 8px hsl(var(--destructive) / 0.15), inset 0 0 30px 15px hsl(var(--primary) / 0.12)',
          },
        },
        'chakra-spin': {
          'from': { transform: 'rotate(0deg) scale(0.95)' },
          'to': { transform: 'rotate(360deg) scale(0.95)' },
        },
        'chakra-spin-slow': {
          'from': { transform: 'rotate(0deg) scale(1)' },
          'to': { transform: 'rotate(360deg) scale(1)' },
        },
        'chakra-spin-slow-reverse': {
            'from': { transform: 'rotate(360deg) scale(1)' },
            'to': { transform: 'rotate(0deg) scale(1)' },
        },
        'chakra-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        'chakra-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 3px currentColor)' },
          '50%': { filter: 'drop-shadow(0 0 8px currentColor)' },
        },
        'float-fade': {
          '0%, 100%': { opacity: '0', transform: 'translateY(5px)' },
          '50%': { opacity: '0.8', transform: 'translateY(-5px)' },
        },
        'random-letter-fade': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        'logo-fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'background-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'sadhana-rotate': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
        },
        'sadhana-rotate-reverse': {
            from: { transform: 'rotate(360deg)' },
            to: { transform: 'rotate(0deg)' },
        },
        'sadhana-breathe-outer': {
            '0%, 100%': { transform: 'scale(1) rotate(var(--tw-rotate))' },
            '50%': { transform: 'scale(0.85) rotate(calc(var(--tw-rotate) + 5deg))' },
        },
        'sadhana-breathe-inner': {
            '0%, 100%': { transform: 'scale(1) rotate(var(--tw-rotate))' },
            '50%': { transform: 'scale(0.75) rotate(calc(var(--tw-rotate) - 5deg))' },
        },
        'knowledge-wave': {
          '0%': { r: '20', opacity: '1' },
          '100%': { r: '150', opacity: '0' },
        },
        'knowledge-line-flow': {
          '0%': { strokeDashoffset: '120' },
          '100%': { strokeDashoffset: '0' },
        },
        'knowledge-particle': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        'unfurl': {
            '0%': { transform: 'scaleY(0)' },
            '100%': { transform: 'scaleY(1)' },
        },
        'script-glow': {
            '0%': { opacity: '0', filter: 'drop-shadow(0 0 2px hsl(var(--primary)))' },
            '50%': { opacity: '1', filter: 'drop-shadow(0 0 10px hsl(var(--primary)))' },
            '100%': { opacity: '0', filter: 'drop-shadow(0 0 2px hsl(var(--primary)))' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'rotate': 'rotate 30s linear infinite',
        'rotate-slow': 'rotate-slow 60s linear infinite forwards',
        'rotate-slow-reverse': 'rotate-slow-reverse 45s linear infinite',
        'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'animated-border': 'animated-border 4s linear infinite',
        'glow': 'glow 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
        'pulse-glow-strong': 'pulse-glow-strong 3s ease-in-out infinite',
        'fiery-border-glow': 'fiery-border-glow 8s ease-in-out infinite',
        'chakra-spin': 'chakra-spin 10s linear infinite',
        'chakra-spin-slow': 'chakra-spin-slow 20s linear infinite',
        'chakra-spin-slow-reverse': 'chakra-spin-slow-reverse 25s linear infinite',
        'chakra-pulse': 'chakra-pulse 4s ease-in-out infinite',
        'chakra-glow': 'chakra-glow 5s ease-in-out infinite',
        'float-fade': 'float-fade 7s ease-in-out infinite',
        'random-letter-fade': 'random-letter-fade 5s ease-in-out infinite',
        'logo-fade-in': 'logo-fade-in 1.5s ease-out forwards',
        'background-zoom': 'background-zoom 10s ease-out forwards',
        'sadhana-rotate': 'sadhana-rotate 30s linear infinite',
        'sadhana-rotate-reverse': 'sadhana-rotate-reverse 35s linear infinite',
        'sadhana-breathe-outer': 'sadhana-breathe-outer 8s ease-in-out infinite',
        'sadhana-breathe-inner': 'sadhana-breathe-inner 8s ease-in-out infinite',
        'knowledge-wave': 'knowledge-wave 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'knowledge-line-flow': 'knowledge-line-flow 8s linear infinite',
        'knowledge-particle': 'knowledge-particle 5s ease-in-out infinite',
        'unfurl': 'unfurl 2s ease-out forwards',
        'script-glow': 'script-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
