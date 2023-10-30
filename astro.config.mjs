import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Vite',
      social: {
        github: 'https://github.com/yayxs/vite-learn'
      },
      sidebar: [
        {
          label: '指引',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: '为什么选Vite', link: '/guides/why/' },
            { label: '和X的不同', link: '/guides/comparisons/' },
            { label: 'Vite是什么', link: '/guides/what/' }
          ]
        },
        {
          label: '扩展链接',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'github', link: '/link/github/' },
            { label: 'docs', link: '/link/docs/' }
          ]
        }
      ]
    })
  ]
})
