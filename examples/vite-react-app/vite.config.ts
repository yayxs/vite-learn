import { win32, posix, resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// console.log(path.join(__dirname, 'src')) // D:\gh-code\vite-learn-new\examples\vite-react-app\src

// @see https://github.com/rollup/plugins/blob/master/packages/pluginutils/src/normalizePath.ts
const normalizePath = (filename: string) => {
  console.log('--', win32.sep, posix.sep)
  const str = filename.split(win32.sep).join(posix.sep)
  console.log('str', str)
  return str
}

const p = normalizePath(resolve('./src/a.scss'))

console.log('p', p)

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    // https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions
    // css 预处理器的选项
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${p}";`
      }
    }
  },
  plugins: [react()] // 官方的react插件
})
