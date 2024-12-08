/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
      },
      fontSize: {
        'xs-scaled': '0.686rem',    // 11px * 0.686
        'sm-scaled': '0.784rem',    // 14px * 0.686
        'base-scaled': '0.882rem',  // 16px * 0.686
        'lg-scaled': '0.98rem',     // 18px * 0.686
        'xl-scaled': '1.176rem',    // 20px * 0.686
      },
      spacing: {
        'scaled-1': '0.196rem',     // 4px * 0.686
        'scaled-2': '0.392rem',     // 8px * 0.686
        'scaled-3': '0.588rem',     // 12px * 0.686
        'scaled-4': '0.784rem',     // 16px * 0.686
        'scaled-5': '0.98rem',      // 20px * 0.686
        'scaled-6': '1.176rem',     // 24px * 0.686
      },
    },
  },
  plugins: [],
  safelist: [
    // Add dynamic color classes to safelist
    {
      pattern: /(bg|text|border)-(blue|green|purple|orange|red|yellow)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
};