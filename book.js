var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs/',
    title: '代码收集',

    // Enforce use of GitBook v3
    gitbook: '3.1.1',

    // Use the "official" theme
    plugins: [
        'theme-official@2.1.1',
        '-sharing',
        '-fontsettings',
        'sitemap',
        '-search',
        'styles-less',
        'search-pro',
    ],
    styles: {
        website: './styles/website.css',
        ebook: '/styles/ebook.css',
        pdf: '/styles/pdf.css',
        mobi: '/styles/mobi.css',
        epub: '/styles/epub.css',
    },
    variables: {
        version: pkg.version,
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://blog.honghaitao.net/',
        },
        'search-pro': {
            cutWordLib: 'nodejieba',
            defineWord: ['小需求', '基础建设'],
        },
    },
};
