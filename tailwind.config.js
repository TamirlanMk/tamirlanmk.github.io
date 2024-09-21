import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': '#1A1A1A',
                'white': '#FFFFFF',
                'primary': '#3f0893',
                'primary-dark': '#2f0278',
            }
        },
        fontFamily: {
            'sans': ['"Stolzl"', ...defaultTheme.fontFamily.sans],
            'primary': ['Stolzl', 'sans-serif'],
            'secondary': ['Stolzl Book', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '20px',
            screens: {
                xs: '400px',
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1340px',
            },
        },
        screens: {
            'xs': '440px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
}

