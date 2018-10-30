module.exports = {
  title: '看白鹿的博客',
  description: '只有敢于尝试,才能品味人生.',
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
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      // { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
      {
        text: '博客',
        link: '/CSS/',
      }, // 外部链接
      {
        text: '导航',
        items: [
          {
            text: 'CSS',
            link: '/CSS/',
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
    sidebar: [
      {
        title: 'CSS',
        children: [
          '/CSS/',
          '/CSS/cases.md',
          '/CSS/2018_10_21_01.md',
          '/CSS/2018_10_21_02.md',
          '/CSS/2018_10_21_03.md',
          '/CSS/2018_10_21_04.md',
          '/CSS/2018_10_21_05.md',
          '/CSS/principle.md',
        ],
      },
      {
        title: 'flutter',
        children: ['/FLUTTER/2018_10_25_01.md'],
      },
      {
        title: 'GIT',
        children: ['/GIT/2018_10_22_01.md', '/GIT/2018_10_22_02.md'],
      },

      {
        title: 'IDE',
        children: ['/IDE/2018_10_28_01.md'],
      },
      {
        title: 'javascript',
        children: [
          '/JavaScript/one.md',
          '/JavaScript/2018_10_28_01.md',
          '/JavaScript/2018_10_29_02.md',
        ],
      },
      {
        title: 'NODE',
        children: [
          '/NODE/01_nodejs_phantomjs_nodemailer.md',
          '/NODE/2018_10_28_01.md',
        ],
      },
      {
        title: 'ubuntu',
        children: [
          '/UBUNTU/2018_10_28_01.md',
          '/UBUNTU/2018_10_28_02.md',
          '/UBUNTU/2018_10_28_03.md',
        ],
      },
    ],
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

/*
## 侧边栏组(sidebar groups)
[
  {
    title: 'vue',
    // collapsable: false,
    children: [
      '/VUE/',
      '/VUE/three',
      '/VUE/four'
    ]
  },
  {
    title: 'js',
    children: [
      '/JS/',
      '/JS/one',
      '/JS/two'
    ]
  }
]

##
'/JS/': [
  {
    title: 'js的',
    children: [
      '/JS/',
      '/JS/one',
      '/JS/two'
    ]
  },  {
    title: 'js',
    children: [
      '/JS/',
      '/JS/one',
      '/JS/two'
    ]
  }
]

*/


