import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/VersePc_docs/',
  title: "VersePc Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '更新日志', link: '/development/changelogs/releases' },
      { text: '返回启动器网站', link: 'https://www.verselauncher.cn/#' },
    ],

    sidebar: [
      { text: '首页', link: '/' },
      {
        text: '新手入门',
        link: '/start/',
        items: [
          { text: '1. 下载和安装', link: '/start/install' },
          { text: '2. 基本功能', link: '/start/basic_functions' },
          {
            text: '3. 多人游戏',
            link: '/multiplayer/',
            items: [
              { text: '3.1 陶瓦联机', link: '/multiplayer/terracotta' },
              { text: '3.2 端口映射', link: '/multiplayer/port_mapping' },
            ]
          }
        ]
      },
      { 
        text: '协议',
        link: '/terms/LICENSE'
      }
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Redersha/VersePc_docs' }
    ],
    footer: {
      message: '基于 CC BY-SA 4.0 许可发布',
      copyright: '版权所有 © 2026 豆杰'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote: '请确认链接地址是否正确，或者返回首页继续浏览。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})