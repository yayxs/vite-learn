[element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)

看到项目有`pnpm-lock.yaml` 使用 pnpm （注意 node 的版本）

```sh
git clone https://github.com/element-plus/element-plus-vite-starter
pnpm i
pnpm run dev
```

有几个现象:
1、终端几乎是秒开，“It's fast!” 从体验上来说是的
2、初次打开浏览器页面的时候，tab 加载了一会

控制台网络查看全部

![element-plus-vite-starter控制台图]

- 从类型看：加载的是 `script`、`png`、`svg+xml` ……
- 从状态看：有 101、200、304

可以看到控制台一下子加载了很多内容

先来看 `element-plus` 是怎么加载的

```js
请求地址： http://localhost:3000/node_modules/.vite/deps/element-plus_es.js?v=d96abe08
请求方法：GET
状态代码：200 ok 来自磁盘缓存


query 参数的 v=xxx 应该是一个随机标记
再来看看响应

import {


}from "/node_modules/.vite/deps/chunk-MQGLGLDI.js?v=d96abe08";
import "/node_modules/.vite/deps/chunk-2RTGWPUT.js?v=d96abe08";
import "/node_modules/.vite/deps/chunk-W2H2VHQC.js?v=d96abe08";
import "/node_modules/.vite/deps/chunk-45X4ZMQ3.js?v=d96abe08";
//# sourceMappingURL=element-plus_es.js.map

```

```js
请求：
http://localhost:3000/node_modules/.vite/deps/element-plus_es_components_config-provider_style_index.js?v=d96abe08
响应：
import "/node_modules/.vite/deps/chunk-XPLNBTON.js?v=d96abe08";

// node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/es/components/config-provider/style/index.mjs
import "/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/config-provider.scss";
//# sourceMappingURL=element-plus_es_components_config-provider_style_index.js.map


```

再来看看`.scss` 文件是怎么加载的

```js
请求地址：http://localhost:3000/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/button.scss

状态代码: 304 OK

响应：
import {createHotContext as __vite__createHotContext} from "/@vite/client";
import.meta.hot = __vite__createHotContext("/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/button.scss");
import {updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle} from "/@vite/client"
const __vite__id = "D:/yuanma/element-plus-vite-starter/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/button.scss"
const __vite__css = "中间的css省略"
__vite__updateStyle(__vite__id, __vite__css)
import.meta.hot.accept()
export default __vite__css
import.meta.hot.prune(()=>__vite__removeStyle(__vite__id))

```

阶段小结：单单从 `element-plus` 的浏览器加载感觉怪怪的。
不过可以看到很多的 `import语句`，这点很重要。

当浏览器加载到文件的时候

```html
<script type="module" src="/src/main.ts"></script>
```

然后控制台筛选到 `main.ts`,响应的结果：

```js
import { createApp } from '/node_modules/.vite/deps/vue.js?v=d96abe08'
import App from '/src/App.vue'
import '/src/styles/index.scss'
import '/__uno.css'
import '/node_modules/.pnpm/element-plus@2.2.19_vue@3.2.41/node_modules/element-plus/theme-chalk/src/message.scss'
const app = createApp(App)
app.mount('#app')
```

**在 vite 中，一个 import 语句代表一个 http 请求** （深入浅出 vite）

阶段小结：看到这儿已经可以了，有几点不一样的地方

1、浏览器会一下加载很多的文件
2、有的是来自磁盘缓存

有几个问题？
1、有关 vite 的打包问题，开发状态和正式上了生产有啥区别
2、上了上产环境也是这样吗，加载很多的文件
3、vite 为啥很快

为了形成对比，我打开我们公司线上的项目，来简单的对比一下

首先加载文档
