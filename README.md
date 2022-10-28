## 一些资料数据

|    维度    | 文章量 |   时间   |
| :--------: | :----: | :------: |
| juejin-tag |  1052  |          |
| juejin-tag |  1097  | 20221028 |

## 构建工具是前端的一环

打包的概念：使用工具抓取、处理源码模块串联 在浏览器中运行
很长时间启动开发服务器 HMR 文件修改的效果几秒钟反映在浏览器
越来越多的 JS 工具使用编译型语言编写
启动先抓取并构建你的整个应用，

- browserify(X)
- grunt(X)
- webpack(10%)
- rollup(20%)
- parcel(x)
- vite(70%)

## 解决前端的问题

|                      痛点                       |         详解         |   达到的目的   |      现有方案      |
| :---------------------------------------------: | :------------------: | :------------: | :----------------: |
|                   模块化需求                    | ESM CommonJS AMD CMD | 兼容模块的规划 |  一些模块化的方案  |
|            兼容浏览器、编译高级语法             |        ts tsx        |                | sass\ts\img\font\  |
|                线上代码质量问题                 |    安全性、兼容性    |                |   压缩、语法降级   |
| 开发效率 项目的冷启动、二次启动时间、热更新时间 |                      |                |        HMR         |

- 模块化的需求：探索一些模块化的方案
- 语法转译：
  - sass
  - tsc
  - babel
- 产物

  - terser 压缩混淆
  - tree shaking

- 提效
  - 构建工具的本身
  - `no-bundle`

## webpack 目前的问题

- 项目冷启动递归打包整个项目的依赖树
- JS 性能问题

## 而 Vite

- 被应用在大型项目中
- 启动的性能非常快
- 在开发阶段基于浏览器原生的 ESM 支持`no-bundle`服务(开发阶段：基于原生浏览器)
- 第三方库：使用 esbuild

|     模块化     |                   语法转译                   |        产物         | 其他 |
| :------------: | :------------------------------------------: | :-----------------: | :--: |
| 基于原生的 ESM | vite 内置 TypeScript JSX Sass 高级语法的支持 | rollup+terser+babel |      |

生产环境：vite 基于 rollup 打包
开发阶段：不打包、开发模块按需编译

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
```

vite 依赖和源码
什么是依赖/第三方的（node_modules 中）：开发时候不会变动的纯 JS vite 使用`esbuild`
什么是源码/业务代码：jsx css vue 需要转换 原生的 esm 浏览器直接接管打包程序的部分工作 **no-bundle**

## core

- 第三方中的 commonjs
- add eslint
- 分析报告
- 兼容旧的浏览器

### 项目根目录的 index.html

开发阶段 vite 是个服务器，`index.html` 是 vite 项目的入口文件
vite 也有根目录的概念 服务文件的位置

### 静态资源

- 图片 png\jpeg\webp\avif\gif\svg

css 预处理器 sass scss less stylus
css modules 将 css 类名处理成哈希值
css 后处理器 postcss
css in js
vite 底层调用 css 预处理器 vite 按需加载没有内置这些工具库
静态资源处理：图片 JSON （本身不是模块）
vite 中的 HMR 在原生 ESM 上执行 编辑一个文件时
vite 同时利用 http 头部来加速整个页面重新加载 源码模块的请求进行协商缓存 依赖模块进行强缓存
嵌套的导入会导致额外的网络往返，生产环境下发布未打包的 ESM 仍然效率低下 将代码 tree-shaking 懒加载和 chunk 分割
vite 提倡不打包的构建工具 开发时候模块按需编译 不用先打包完再加载

- 源代码 业务代码 对于源代码而言
- 第三方的依赖 node_modules 代码 vite 选择打包 esbuild 依赖编译速度

vite 底层使用的构建引擎：esbuild rollup
开发阶段的依赖预构建，需要在应用启动前进行打包并且转换为 ESM 格式
esbuild 不支持降级到 es5 代码
esbuild 转译 ts 或者 jsx 的能力通过 vite 插件提供
替换原来的 babel 或者 tsc
vite 用作生产环境打包的核心工具，也直接决定了 vite 插件机制的设计 vite 到底基于 rollup
Rollup 在 vite 中的重要性不亚于 Esbuil
css 代码分割
开发阶段：vite 借鉴了 WMR
vite 同时利用 HTTP 头来加速整个页面的重新加载
依赖进行强制缓存
npm 依赖解析和预构建

```js
import { foo } from 'dep'
```

**预构建** 统一转换为 ESM 格式

vite 天然支持 .ts 文件

vite 为 Vue

- vue3 单文件组件
- vue3 jsx 支持
- vue 2.7
- vue <2.7

## 完整的生态

- [ ] css
  - [ ] 原生 css
  - [ ] css 预处理器 sass less
  - [ ] css modules
  - [ ] postcss
  - [ ] css in js
  - [ ] 原子化 css tailwind windicss
- [ ] 代码规范
  - [ ] eslint
  - [ ] prettier
  - [ ] Stylelint

## 名词

| 名词 |                                              |
| :--: | :------------------------------------------: |
| tsc  | tsc ts 官方的编译命令：编译 ts 代码 类型检查 |
