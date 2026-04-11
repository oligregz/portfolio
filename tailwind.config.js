/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-main': 'var(--color-bg-main)',
        'bg-surface': 'var(--color-bg-surface)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        'text-main': 'var(--color-text-main)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
      },
    },
  },
  plugins: [],
};
