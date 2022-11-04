/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            screens: {
                '2xl': '1110px',
            },
        },
        extend: {
            colors: {
                Black: {
                    light: '#101010',
                    dark: '#000000',
                },
                White: {
                    shade: '#fafafa',
                },
                Red: {
                    dark: 'CD2C2C',
                },
                Blue: {
                    light: '#F1F1F1',
                },
                Orange: {
                    light: '#fbaf85',
                    dark: '#D87D4A',
                },
            },
        },
    },
    plugins: [],
}
