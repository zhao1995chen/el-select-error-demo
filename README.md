# el-select-error-demo

> This is the bug reproduction for element-plus bug issue [#14038](https://github.com/element-plus/element-plus/issues/14038).

## Problem

### < v2.3.4

After the first change is workable, other custom settings will be overwritten by the first inline style but not the custom setting.

### >= v2.3.4

Each `el-select` will be overwritten by themselves inline style but not the custom setting.

> After tracing, found that the problem was reported [#11962](https://github.com/element-plus/element-plus/issues/11962) five months ago, appeared until v2.3.3, and was fixed on v2.3.4([#11973](https://github.com/element-plus/element-plus/pull/11973)).
> This is noted [here](https://github.com/element-plus/element-plus/issues/14038#issuecomment-1694325538).

## Environment

NPM 8 <br>
Node 16.19

## Setup

```bash
npm install
npm run dev
```

## Live Demo

[el-select-error-demo](https://zhao1995chen.github.io/el-select-error-demo/)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
