/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      fontSize: {
        '15px': '15px',
      },
      colors: {
        // Primary colors
        'soft-cyan': 'hsl(174, 77%, 80%)',
        'strong-cyan': 'hsl(174, 86%, 45%)',
        'light-grayish-red': 'hsl(14, 92%, 95%)',
        'light-red': 'hsl(15, 100%, 70%)',
        'pale-blue': 'hsl(226, 100%, 87%)',
        // Neutral colors
        'white': 'hsl(0, 0%, 100%)',
        'very-pale-blue': 'hsl(230, 100%, 99%)',
        'light-grayish-blue': {
          DEFAULT: 'hsl(224, 65%, 95%)', // Default shade
          'toggle': 'hsl(223, 50%, 87%)', // Differentiate if needed
        },
        'grayish-blue': 'hsl(225, 20%, 60%)',
        'dark-desaturated-blue': 'hsl(227, 35%, 25%)',
      },
    },
  },
  plugins: [],
}

