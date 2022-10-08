import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

let rootStr = process.cwd()

console.log('-----', rootStr)

rootStr = path.join(__dirname, 'src')
console.log('===', rootStr)
// https://vitejs.dev/config/
export default defineConfig({
  root: rootStr,
  plugins: [react()],
})
