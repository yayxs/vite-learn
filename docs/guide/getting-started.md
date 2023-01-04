`vite` 在`github`上可以看到一些社区中常见的[开发者](https://github.com/orgs/vitejs/people)。看一下`github组织` 中的[repositories](https://github.com/orgs/vitejs/repositories?q=&type=all&language=&sort=stargazers)。有`vite`官方的仓库：可以看看源码大致是怎么实现的；有 `awesome-vite` 一些很棒的 vite 项目：可以找一些用在自己的开发项目中；`create-vite-app`: 在[搭建](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project) vite 项目时候可以看到模板的实现细节；还有`docs-es` `docs-cn` 官方的文档；以 `vite-plugin-xx` 开头的官方的 **vite 插件**

从官方组织中可以得到以下信息：

- vue 社区中 `antfu` `patak` `sodatea`…… 在开发
- vite 是前端的一个工具，有可能和打包有关，推测和`webpack` 有关
- 已经有一些成熟的轮子，拿来即用
- 中英文文档和其他语言的文档已经基本完备
- 有`create-vite-app` 推测和 `create-react-app` 有关
- 可能有插件的概念，推测和 `rollup` 有某种关联

在看官方的文档之前（docs-es/docs-cn）还要在`github` 上待一会，按照 [vite most stars](https://github.com/search?o=desc&q=vite&s=stars&type=Repositories) 大约 55,041 repository results

- 需要排除 `vitess`: 这是一个 ` MySQL.`有关的仓库
- `vue-vben-admin` `vue-pure-admin` `electron-vite-vue` `vue-admin-box` `fast-vue3` `v3-admin-vite` :需要留意，推测能从这些项目学习怎么配置 `vite`
- `vitest` :推测是一个测试的框架
- `unplugin-xx` :这种仓库，有可能提供了一种 帮我们自动化加载插件 plugin 的能力
- `vite plugin` :项目的名字包含这两个关键字，会不会与我们说的插件机制有关
- [element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)：这个需要特别留意，可以用来学习 `element plus ` 结合 `vite` 怎么写
- `vscode-vite`: 有关 vite 在 vscode 中的插件
- `juejin-book-vite`:《深入浅出 Vite》掘金小册代码示例仓库
  阶段小结：
  1、vite 仓库的数量还比较少，但是像 mock 能力已经有插件，可以用于生产
  2、有一些 admin 的项目模板，但是需要阅读源码鉴别是否可以直接用于企业项目
