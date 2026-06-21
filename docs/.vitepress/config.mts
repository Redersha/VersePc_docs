import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/VersePc_docs/',
  title: "VersePc Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '返回启动器网站', link: 'https://www.verselauncher.cn/#' },
    ],

    sidebar: [
      { text: '文档与教程',
        link: '/' ,
        items: [
          {
            text: '新手入门',
            link: '/start/',
            items: [
              { text: '下载和安装', link: '/start/install' },
              { text: '基本功能', link: '/start/basic_functions' },
            ]
          },
          {
            text: '多人游戏',
            link: '/multiplayer/',
            items: [
              { text: '陶瓦联机', link: '/multiplayer/terracotta' },
              { text: '端口映射', link: '/multiplayer/port_mapping' },
            ]
          }
        ]
      },
      { text: '协议',
        link:'/terms/LICENSE' ,
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Redersha/VersePc_docs' }
    ]
  }
})
