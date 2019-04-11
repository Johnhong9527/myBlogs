module.exports = {
  title: '看白鹿的博客',
  description: '只有敢于尝试,才能品味人生.',
  // base: '/myBlogs/',
  
  dest: 'dist',
  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png',
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    sidebarDepth: 3, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    repoLabel: '查看源码',
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      // { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
      {
        text: '前端',
        items: [
          {
            text: 'CSS',
            link: '/CSS/',
          },
          {
            text: 'flutter',
            link: '/FLUTTER/',
          },
          {
            text: 'GIT',
            link: '/GIT/',
          },
          
          {
            text: 'JavaScript',
            link: '/JavaScript/',
          },
          {
            text: 'react',
            link: '/REACT/',
          },
          {
            text: 'vue',
            link: '/VUE/',
          },
        ],
      },
      {
        text: '后台',
        items: [
          {
            text: 'node',
            link: '/NODE/',
          },
          {
            text: 'ubuntu',
            link: '/UBUNTU/',
          },
        ],
      }, // 外部链接
      {
        text: '其他',
        items: [
          {
            text: 'IDE',
            link: '/IDE/',
          },
          {
            text: '待了解',
            link: '/About/WHY.md',
          },
          {
            text: '面试',
            link: '/INTERVIEW/',
          },
          {
            text: '你好',
            link: '/hello/',
          },
        ],
      },
      // 下拉列表
      {
        text: 'GitHub',
        link: 'https://github.com/Johnhong9527',
        // items: [
        //   { text: 'GitHub地址', link: 'https://github.com/Johnhong9527' },
        //   /* {
        //     text: '算法仓库',
        //     link: 'https://github.com/OBKoro1/Brush_algorithm'
        //   } */
        // ]
      },
    ],
    sidebar: {
      '/CSS/': [
        '',
        'cases',
        '2018_10_21_01',
        '2018_10_21_02',
        '2018_10_21_03',
        '2018_10_21_04',
        '2018_10_21_05',
        'principle',
        '2019_04_11_01'
      ],
      '/FLUTTER/': [ '', '2018_10_25_01' ],
      '/GIT/': [ '', '2018_10_22_01', '2018_10_22_02', '2018_10_31_01' ],
      '/IDE/': [ '', '2018_10_28_01' ],
      '/INTERVIEW/': [ '', 'BasicAjax', 'HTTP', 'Terminology' ],
      '/JavaScript/': [
        '',
        // '01',
        '2018_10_29_02',
        '2018_10_28_01',
        '2018_11_02_01',
        '2018_11_02_02',
        '2018_11_02_03',
        '2018_11_02_04',
        '2018_11_02_05',
      ],
      '/NODE/': [ '', '01_nodejs_phantomjs_nodemailer', '2018_10_28_01' ],
      '/REACT/': [ '', '2018_11_02_01' ],
      '/UBUNTU/': [ '', '2018_10_28_01', '2018_10_28_02', '2018_10_28_03', '2019_01_11' ],
      '/VUE/': [
        '',
        '2018_10_31_01',
        '2018_10_31_02',
        '2018_11_02_01',
        '2018_11_02_02',
        '2018_11_02_03',
        '2018_11_02_04',
      ],
    },
    algolia: {
      apiKey: 'f155116ae3f199b1d79b55adf623b6d8',
      indexName: 'honghaitao',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@js': '/docs/.vuepress/components/js',
        '@alias': 'path/to/some/dir',
      },
    },
  },
  markdown: {
    module: {
      rules: [
        {
          test: /\.less$/,
          loader: 'less-loader', // compiles Less to CSS
        },
      ],
    },
    lineNumbers: true,
    // markdown-it-anchor 的选项
    // anchor: { permalink: false },
    // markdown-it-toc 的选项
    // toc: { includeLevel: [1, 2] },
    // config: md => {
    //   // 使用更多的 markdown-it 插件!
    //   md.use(require('markdown-it-xxx'))
    // }
  },
};
