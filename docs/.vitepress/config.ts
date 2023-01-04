import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
export default withMermaid(
  defineConfig({
    lang: 'en-US',
    title: 'Vite',
    description: '前端诗人-Vite学习',

    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

    markdown: {
      headers: {
        level: [0, 0]
      }
    },

    themeConfig: {
      nav: nav(),

      sidebar: {
        '/guide/': sidebarGuide()
      },

      editLink: {
        pattern: 'https://github.com/yayxs/vite-learn/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/yayxs/vite-learn' }
      ],

      footer: {
        message: '一些读书笔记',
        copyright: 'Copyright © 2023-present vanlee'
      }

      // algolia: {
      //   appId: '8J64VVRP8K',
      //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      //   indexName: 'vitepress'
      // },

      // carbonAds: {
      //   code: 'CEBDT27Y',
      //   placement: 'vuejsorg'
      // }
    }
  })
)

function nav() {
  return [
    { text: 'Guide', link: '/guide/element-plus', activeMatch: '/guide/' }
    // {
    //   text: '',
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/yayxs/vite-learn/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/yayxs/vite-learn/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Some Analysis',
      collapsible: true,
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Element Plus', link: '/guide/element-plus' }

        // { text: 'Configuration', link: '/guide/configuration' },
        // { text: 'Deploying', link: '/guide/deploying' }
      ]
    }
  ]
}
