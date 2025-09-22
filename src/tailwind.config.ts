
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
            '0%': { 'stroke-dasharray': '0, 1000', opacity: '0' },
            '50%': { 'stroke-dasharray': '500, 1000', opacity: '1' },
            '100%': { 'stroke-dasharray': '1000, 1000', opacity: '1' },
        },
        'script-glow': {
            '0%': { opacity: '0', filter: 'drop-shadow(0 0 2px hsl(var(--primary)))' },
            '50%': { opacity: '1', filter: 'drop-shadow(0 0 10px hsl(var(--primary)))' },
            '100%': { opacity: '0', filter: 'drop-shadow(0 0 2px hsl(var(--primary)))' },
        },
         'line-draw': {
          from: {
            'stroke-dashoffset': '1000',
          },
          to: {
            'stroke-dashoffset': '0',
          },
        },
        'karma-rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'karma-particle': {
          '0%': { opacity: '0', r: '1' },
          '20%': { opacity: '1', r: 'var(--size, 2px)' },
          '80%': { opacity: '1', r: 'var(--size, 2px)' },
          '100%': { opacity: '0', r: '1' },
        },
        'chariot-wheel-rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'blueprint-draw': {
          from: { 'stroke-dashoffset': '1000' },
          to: { 'stroke-dashoffset': '0' },
        },
        'blueprint-glow': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.5)' },
        },
         'shivalingam-appear': {
          '0%': { opacity: '0', transform: 'scale(0.5) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(0.6) translateY(0)' },
        },
        'prana-flow': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fire-flicker': {
          '0%, 100%': { transform: 'scaleY(1) skewX(-5deg)', opacity: '0.9' },
          '20%': { transform: 'scaleY(2.2) skewX(20deg)', opacity: '1' },
          '40%': { transform: 'scaleY(0.8) skewX(-20deg)', opacity: '0.8' },
          '60%': { transform: 'scaleY(2.0) skewX(15deg)', opacity: '1' },
          '80%': { transform: 'scaleY(0.9) skewX(-15deg)', opacity: '0.9' },
        },
        'sparks-fly': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
          '100%': { transform: 'translateY(-120px) translateX(var(--tx, 0))', opacity: '0' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'move-across-sky': {
          '0%': { transform: 'translate(250px, 50px)' },
          '100%': { transform: 'translate(-50px, 50px)' },
        },
        'aura-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        'prana-particle': {
          '0%': { opacity: '0', transform: 'translate(var(--start-x), var(--start-y))' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translate(var(--end-x), var(--end-y))' },
        },
        'blockage-pulse': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1) rotate(5deg)', opacity: '1' },
        },
        'healing-light-appear': {
          '0%, 50%': { opacity: '0', transform: 'scaleY(0)' },
          '70%': { opacity: '0.7', transform: 'scaleY(1)' },
          '100%': { opacity: '0', transform: 'scaleY(1)' },
        },
        'yantra-pulse': {
          '0%, 100%': { 'stroke-opacity': '0.7' },
          '50%': { 'stroke-opacity': '1' },
        },
        'particle-flow': {
          '0%': { transform: 'translate(var(--start-x), var(--start-y))', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translate(var(--end-x), var(--end-y))', opacity: '0' },
        },
        'focus-pulse': {
          '0%, 100%': { r: '8', opacity: '0.8' },
          '50%': { r: '12', opacity: '1' },
        },
        'thought-flow': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'mantra-fade': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        'coin-fall': {
            '0%': { transform: 'translateY(-20px)', opacity: '0' },
            '20%': { opacity: '1' },
            '90%': { opacity: '1' },
            '100%': { transform: 'translateY(var(--translate-y, 100px))', opacity: '0' },
        },
        'divine-wave': {
          '0%': { r: '10', 'stroke-width': '1.5', opacity: '1' },
          '100%': { r: '50', 'stroke-width': '0', opacity: '0' },
        },
        'subtle-shimmer': {
          '0%, 100%': { opacity: '0.2', transform: 'rotate(0deg)' },
          '50%': { opacity: '0.6', transform: 'rotate(180deg)' },
        },
        'negative-jag': {
          '0%, 100%': { transform: 'translate(var(--start-x), var(--start-y))', opacity: '0.8' },
          '50%': { transform: 'translate(var(--end-x), var(--end-y))', opacity: '0.8' },
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
         'line-draw': 'line-draw 3s ease-out forwards',
        'karma-rotate': 'karma-rotate var(--duration, 20s) linear infinite',
        'karma-particle': 'karma-particle 8s ease-in-out infinite',
        'chariot-wheel-rotate': 'chariot-wheel-rotate 20s linear infinite',
        'blueprint-draw': 'blueprint-draw 1.5s ease-out forwards',
        'blueprint-glow': 'blueprint-glow 3s ease-in-out infinite',
        'shivalingam-appear': 'shivalingam-appear 1.5s ease-out forwards',
        'prana-flow': 'prana-flow 5s ease-in-out infinite',
        'fire-flicker': 'fire-flicker 0.8s ease-in-out infinite',
        'sparks-fly': 'sparks-fly linear infinite',
        'star-twinkle': 'star-twinkle 4s ease-in-out infinite',
        'move-across-sky': 'move-across-sky 40s linear infinite alternate',
        'aura-pulse': 'aura-pulse 6s ease-in-out infinite',
        'prana-particle': 'prana-particle var(--duration, 8s) linear infinite var(--delay, 0s)',
        'blockage-pulse': 'blockage-pulse 3s ease-in-out infinite',
        'healing-light-appear': 'healing-light-appear 5s ease-in-out infinite 3s',
        'yantra-pulse': 'yantra-pulse 4s ease-in-out infinite',
        'particle-flow': 'particle-flow var(--duration, 5s) ease-in-out infinite var(--delay, 0s)',
        'focus-pulse': 'focus-pulse 4s ease-in-out infinite',
        'thought-flow': 'thought-flow 6s ease-in-out infinite',
        'mantra-fade': 'mantra-fade 8s ease-in-out infinite',
        'coin-fall': 'coin-fall var(--duration, 4s) ease-in-out infinite var(--delay, 0s)',
        'divine-wave': 'divine-wave 6s ease-out infinite',
        'subtle-shimmer': 'subtle-shimmer linear infinite alternate',
        'negative-jag': 'negative-jag ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
