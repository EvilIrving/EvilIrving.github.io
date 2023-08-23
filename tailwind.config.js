const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'media', // media or class
    purge: {
        //   enabled: process.env.NODE_ENV === 'production',
        content: [
            './docs/.vitepress/**/*.{js,jsx,ts,tsx,vue}',
        ],
        options: {
            safelist: ['html', 'body'],
        },

    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        plugin(function ({ addVariant }) {
            addVariant('child', '&section')
        })
    ],
    theme: {
        extend: {
            maxWidth: {
                '1/3': '33.33333%',
            }
        }
    },
    variants: {
        extend: {
            textOpacity: ['dark']
        }
    }


}