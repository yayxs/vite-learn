import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import Components from 'unplugin-vue-components/vite'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

const wrapperEnv = (envConf)=>{
  console.log('envconf',envConf)
  console.log(Object.keys(envConf))
  let ret = {}

}

export function createVitePlugins(){
  const vitePlugins = [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ]
  return vitePlugins
}

// export function createProxy(){
//   const ret = {}
//   for (const [prefix, target] of list) {
//     const isHttps = httpsRE.test(target);

//     // https://github.com/http-party/node-http-proxy#options
//     ret[prefix] = {
//       target: target,
//       changeOrigin: true,
//       ws: true,
//       rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
//       // https is require secure=false
//       ...(isHttps ? { secure: false } : {}),
//     };
//   }
//   return ret;
// }
export default defineConfig(({command, mode})=>{
  const root = process.cwd()
  console.log('root',root)
  // const env = loadEnv(mode,root)
  // const viteEnv = wrapperEnv(env);
  const idBuild = command === 'build'
  return {
    root,
    plugins:createVitePlugins(),
    server:{
      https: true,
      host: true,
      port: 3000,
      // Load proxy configuration from .env
      // proxy: createProxy(),
    },
   
  }
})