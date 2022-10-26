import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'path'
// vite plugin
import windi from 'vite-plugin-windicss'

let rootStr = process.cwd()

console.log('-----', rootStr)

rootStr = path.join(__dirname, 'src')
console.log('===', rootStr)

const variablePath = normalizePath(path.resolve('./src/variable.scss'))
export default defineConfig({
  root: process.cwd(),
  plugins: [react(), windi()],
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
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
  }
})
