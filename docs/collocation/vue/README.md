# 项目目录

::: warning
该配置适用于Vue2.x
:::

**我的常用目录结构**

```text
.
├─ node_modules
├─ public
├─ src
│  ├─ api
│  │  ├─ apis
│  │  │  └─ ...
│  │  ├─ http.js
│  │  └─ config.js
│  ├─ assets
│  ├─ components
│  ├─ router
│  ├─ store
│  │  ├─ modules
│  │  │  └─ ...
│  │  └─ index.js
│  ├─ utils
│  └─ views
│      └─ ...
├─ .browserslistrc
├─ .editorconfig
├─ .env.development
├─ .env.production
├─ .env.test
├─ .eslintrc.js
├─ .eslintignore
├─ .gitignore
├─ .prettierrc
├─ babel.config.js
├─ package.json
├─ postcss.config.js
├─ README.md
└─ vue.config.js
```

**文件介绍**
- `src/api/` axios配置，接口统一管理。

- `src/api/apis/` 接口文件夹，所有请求接口都以js文件放在这里。

- `src/api/http.js` axios封装

- `src/api/config.js` 将api文件汇总并导出

- `src/assets/` 资源存储`images`、`css`、`less`...

- `src/components/` 自定义组件

- `src/router/` 路由配置

- `src/store/` Vuex状态管理

- `src/store/modules/` Vuex模块化

- `src/store/index.js` Vuex配置

- `src/utils/` 自定义工具包

- `src/views/` 视图

- `.browserslistrc` 不同的前端工具之间共用目标浏览器和 node 版本的配置工具

-  `.editorconfig` 统一编辑器编码风格

- `.env.development` 环境变量-开发环境

- `.env.production` 环境变量-生产环境

- `.env.test` 环境变量-测试环境

- `.eslintrc.js` ESlint规则配置

- `.eslintignore` ESlint过滤器

- `.gitignore` git过滤器

- `.prettierrc` 代码格式化

- `babel.config.js` babel转换配置

- `package.json` 包管理文件

- `postcss.config.js` 移动端自适应css to rem 配置

- `README.md` 项目说明文档

- `vue.config.js` Vue配置
