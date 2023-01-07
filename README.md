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

## Terser 的问题

js 开发的压缩器
在 webpack 或者 rollup 中作为一个 Plugin 来完成代码打包后的压缩混淆工作
涉及大量的 AST 造成重复解析工作
js 语言的

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

## 双引擎

## ESbuild

依赖预编译、TS 语法转译、代码压缩
esbuild 不支持降级到 es5 代码
不支持 `const enum` 语法 单独使用语法 在`esbuild` 中直接抛出
不支持`Code Splitting`
TS\JSX\ esbuild 转译 ts 或者 jsx 的能力通过 vite 插件提供
生产环境下默认的压缩工具

vite 底层调用 css 预处理器 vite 按需加载没有内置这些工具库
静态资源处理：图片 JSON （本身不是模块）

vite 底层使用的构建引擎：esbuild rollup
开发阶段的依赖预构建，需要在应用启动前进行打包并且转换为 ESM 格式

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

## 名词

| 名词 |                                              |
| :--: | :------------------------------------------: |
| tsc  | tsc ts 官方的编译命令：编译 ts 代码 类型检查 |
