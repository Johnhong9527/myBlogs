var pkg = require("./package.json");

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: "./docs/",
    title: "代码收集",

    // Enforce use of GitBook v3
    gitbook: "3.1.1",

    // Use the "official" theme
    plugins: [
        "theme-official@2.1.1",
        "-sharing",
        "-fontsettings",
        "sitemap",
        "-search",
        "search-pro",
    ],

    variables: {
        version: pkg.version,
    },

    pluginsConfig: {
        sitemap: {
            hostname: "https://toolchain.gitbook.com",
        },
        "search-pro": {
            cutWordLib: "nodejieba",
            defineWord: ["小需求", "基础建设"],
        },
    },
};
