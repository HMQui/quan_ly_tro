/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            screens: {
                mobile: '360px',
            },
        },
    },
    plugins: [],
};
