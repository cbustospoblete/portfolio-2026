import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Modern 2026 "Digital Noir" Palette
        primary: '#6366f1', // Electric Indigo
        'primary-glow': '#818cf8',
        'background-light': '#f8fafc', // Slate 50
        'background-dark': '#020203', // Deepest Black/Blue
        'surface-dark': '#0a0a0c', // Slightly lighter surface
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'glass-bg': 'rgba(10, 10, 12, 0.6)'
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'Helvetica Neue', 'Arial']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': 'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(56, 189, 248, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.15) 0px, transparent 50%)',
      }
    }
  },
  plugins: []
} satisfies Config