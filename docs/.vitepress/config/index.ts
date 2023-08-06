import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cain",
  lang: 'zn-CN',
  titleTemplate: 'keep in mind',
  description: "记录一切的地方",
  themeConfig: {
    siteTitle: 'Go home', // 站点名字
    logo: '/gezi.svg',
    aside: 'left', // rendering of aside container to 左右
    outline: 'deep', // markdown 侧边导航栏
    // outlineTitle: 'page top', // 导航栏顶部的文字
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EvilIrving', ariaLabel: 'cool link' },
      { icon: 'github', link: 'http://yomuki.com/' },
    ],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Cain'
    // },
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full', // 'short'
        timeStyle: 'medium' // 'short'
      }
    },
    docFooter: {
      prev: 'prev',
      next: 'next'
    },
    returnToTopLabel:'back top', //  only displayed in the mobile view
    externalLinkIcon:true, // 展示外部链接小尖头
    search: {
      provider: 'local'
    }
  },
  ignoreDeadLinks: true,
  // base: '/cain-s-blog/'
})
