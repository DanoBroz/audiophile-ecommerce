/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
            fontFamily: {
                manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
