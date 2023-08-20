module.exports = {
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
    ],
    theme: {
        extend: {
            maxWidth: {
                '1/3': '33.33333%',
            }
        }
    }

}