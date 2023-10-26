import { defineConfig, normalizePath } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'path'
// vite plugin
import legacy from '@vitejs/plugin-legacy'
import windi from 'vite-plugin-windicss'

const variablePath = normalizePath(path.resolve('./src/variable.scss'))

// 共享配置 root
function createRootStr() {
  let defaultRoot = process.cwd()
  return defaultRoot
}
// gen plugins
function createPlugins() {
  const vitePlugins = [
    {
      enforce: 'pre',
      ...mdx()
    },
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    windi()
  ]
  return vitePlugins
}
// 共享配置 别名

function resolveAlias() {
  let ret = {
    '@assets': path.join(__dirname, 'src/assets')
  }
  return ret
}
export default defineConfig({
  root: createRootStr(),
  plugins: createPlugins(),
  resolve: {
    alias: resolveAlias()
  },
  css: {
    postcss: {
      plugins: []
    },
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    }
  },
  optimizeDeps: {
    // 强制预构建
    include: ['lodash-es', 'vue']
  }
})
