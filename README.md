# 🔧 Fork 版本说明

本仓库是对 [CorentinTh/it-tools](https://github.com/CorentinTh/it-tools) 的 **个人 fork**，在原有功能基础上进行了增强和扩展，主要增加了以下功能：

1. **HTML 格式化增强**

   * 支持自定义缩进大小（1\~8）和缩进字符（空格/Tab）
   * 可选择是否换行属性
   * 可选择是否保留原始换行
   * 实时预览与一键复制格式化后的 HTML

2. **前端 HTML 压缩工具**

   * 支持去除多余空格和删除注释
   * 实时预览与一键复制压缩后的 HTML
   * 简单高效，便于快速优化前端 HTML 文件

> ⚠️ 注意：本版本仅为个人 fork，功能与原仓库存在差异，原作者功能与更新请参考原项目。

功能添加代码由[ChatGPT](https://chatgpt.com)完成，Dockerfile重写由[Claude](https://claude.ai) (Sonnet 4)完成。

以下为原始项目README：

<picture>
    <source srcset="./.github/logo-dark.png" media="(prefers-color-scheme: light)">
    <source srcset="./.github/logo-white.png" media="(prefers-color-scheme: dark)">
    <img src="./.github/logo-dark.png" alt="logo">
</picture>

Useful tools for developer and people working in IT. [Have a look !](https://it-tools.tech).

## Functionalities and roadmap

Please check the [issues](https://github.com/CorentinTh/it-tools/issues) to see if some feature listed to be implemented.

You have an idea of a tool? Submit a [feature request](https://github.com/CorentinTh/it-tools/issues/new/choose)!

## Self host

Self host solutions for your homelab

**From docker hub:**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 corentinth/it-tools:latest
```

**From github packages:**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 ghcr.io/corentinth/it-tools:latest
```

**Other solutions:**

- [Cloudron](https://www.cloudron.io/store/tech.ittools.cloudron.html)
- [Tipi](https://www.runtipi.io/docs/apps-available)
- [Unraid](https://unraid.net/community/apps?q=it-tools)

## Contribute

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with the following extensions:

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)

with the following settings:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "i18n-ally.localesPaths": ["locales", "src/tools/*/locales"],
  "i18n-ally.keystyle": "nested"
}
```

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Create a new tool

To create a new tool, there is a script that generate the boilerplate of the new tool, simply run:

```sh
pnpm run script:create:tool my-tool-name
```

It will create a directory in `src/tools` with the correct files, and a the import in `src/tools/index.ts`. You will just need to add the imported tool in the proper category and develop the tool.

## Contributors

Big thanks to all the people who have already contributed!

[![contributors](https://contrib.rocks/image?repo=corentinth/it-tools&refresh=1)](https://github.com/corentinth/it-tools/graphs/contributors)

## Credits

Coded with ❤️ by [Corentin Thomasset](https://corentin.tech?utm_source=it-tools&utm_medium=readme).

This project is continuously deployed using [vercel.com](https://vercel.com).

Contributor graph is generated using [contrib.rocks](https://contrib.rocks/preview?repo=corentinth/it-tools).

<a href="https://www.producthunt.com/posts/it-tools?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-it&#0045;tools" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=345793&theme=light" alt="IT&#0032;Tools - Collection&#0032;of&#0032;handy&#0032;online&#0032;tools&#0032;for&#0032;devs&#0044;&#0032;with&#0032;great&#0032;UX | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
<a href="https://www.producthunt.com/posts/it-tools?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-it&#0045;tools" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=345793&theme=light&period=daily" alt="IT&#0032;Tools - Collection&#0032;of&#0032;handy&#0032;online&#0032;tools&#0032;for&#0032;devs&#0044;&#0032;with&#0032;great&#0032;UX | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## License

This project is under the [GNU GPLv3](LICENSE).
