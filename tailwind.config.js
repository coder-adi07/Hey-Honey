/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F4E7CE',
          300: '#E7CE9E',
          400: '#E5B34F', // Golden Honey
          500: '#C58A32', // Honey Amber
          600: '#B88A43', // Muted Gold Accent
          700: '#9C6A28',
          800: '#69461B',
          900: '#392719', // Deep Brown Typography
        },
        cream: {
          50: '#FFFDF8', // Soft Ivory
          100: '#F8F4EB', // Warm Cream
          200: '#EFE8D8',
          300: '#E5DDC9',
        },
        charcoal: {
          900: '#29251F', // Dark Charcoal
          800: '#3B362F',
          700: '#534D44',
          600: '#6E665B',
        }
      },
      fontFamily: {
        condensed: ['var(--font-condensed)', 'Open Sans Condensed', 'Open Sans', 'sans-serif'],
        sans: ['var(--font-sans)', 'Source Sans 3', 'Source Sans Pro', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(57, 39, 25, 0.08)',
        'premium-hover': '0 25px 50px -12px rgba(197, 138, 50, 0.16)',
        'card': '0 4px 20px -2px rgba(57, 39, 25, 0.05)',
      }
    },
  },
  plugins: [],
};
