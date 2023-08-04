/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@kvraamkey/core/dist/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                default: {
                    DEFAULT: 'hsl(var(--default))',
                    foreground: 'hsl(var(--default-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
            },
        },
    },
    plugins: [],
};
