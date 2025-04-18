// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                bangers: ['Bangers', 'cursive'],
            },
        },
    },
    // make sure you’re pointing to the right files for purge/content:
    content: [
        './src/**/*.{js,jsx,ts,tsx,html}',
    ],
    plugins: [
    ],
};
