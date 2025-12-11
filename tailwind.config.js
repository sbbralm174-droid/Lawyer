/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3D91',
          50: '#E6EDFC',
          100: '#C3D6FA',
          200: '#8CB3F5',
          300: '#558FEF',
          400: '#1E6CE9',
          500: '#0B3D91',
          600: '#09337A',
          700: '#072863',
          800: '#051E4C',
          900: '#041535',
        },
        accent: {
          DEFAULT: '#C47A2C',
          50: '#FAEFE2',
          100: '#F4DEC0',
          200: '#EAC08B',
          300: '#E0A256',
          400: '#D58421',
          500: '#C47A2C',
          600: '#A86725',
          700: '#8C541F',
          800: '#704118',
          900: '#542E11',
        },
        neutral: {
          dark: '#0F1724',
          mid: '#475569',
          light: '#F8FAFC',
          card: '#FBFBFE',
        },
        // Add dark mode colors
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': ['18px', { lineHeight: '1.6' }],
        'h1': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['22px', { lineHeight: '1.4', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      // Add background images for dark mode if needed
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #111827 0%, #1f2937 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}