module.exports = {
    purge: {
        content: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.js',
        ],
        options: {
            whitelistPatterns: [/svg.*/, /fa.*/]
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#2E2FE3',
                secondary: '#1414B8',
                tertiary: '#090934',
                accent: '#fcba12',
                base: '#f7edd4',
                xivbase: '#404040',
                xivtop: '#636363',
                xivring: '#FFD700',
                blogbg: '#e2ddd3'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
