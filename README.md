# element-plus-error-and-fix-demo

## Environment

NPM 8 <br>
Node 16.19

## Setup

```bash
npm install
npm run dev
```

## Live Demo

[element-plus-error-and-solution-demo](https://zhao1995chen.github.io/element-plus-error-and-solution-demo/)

## `Demo #14038`

> This is the bug reproduction for element-plus bug issue [#14038](https://github.com/element-plus/element-plus/issues/14038).

### Problems

#### < v2.3.4

After the first change is workable, other custom settings will be overwritten by the first inline style but not the custom setting.

#### >= v2.3.4

Each `el-select` will be overwritten by themselves inline style but not the custom setting.

> After tracing, found that the problem was reported [#11962](https://github.com/element-plus/element-plus/issues/11962) five months ago, appeared until v2.3.3, and was fixed on v2.3.4([#11973](https://github.com/element-plus/element-plus/pull/11973)).
> This is noted [here](https://github.com/element-plus/element-plus/issues/14038#issuecomment-1694325538).

### Steps to test

- Set `el-select` size by index.scss, `small` for `100px`, `default` for `200px`, `large` for `300px`.

#### Test Case

##### 1st Test Case

- After rendering the page and without any changes, `el-select <input>` height to be custom size `198px`.

##### 2nd Test Case

- After rendering the page, select `small` option, `el-select <input>` height to be custom size `98px`, not set by inline style.

##### 3rd Test Case

- After rendering the page, select `large` option, `el-select <input>` height to be custom size `298px`, not set by inline style.

##### 4th Test Case

- After rendering the page, select `large` option.
- Select `default` option, `el-select <input>` height to be custom size `198px`, not set by inline style.
- Select `small` option, `el-select <input>` height to be custom size `98px`, not set by inline style.

## `Demo #12609`

> This is the solution for element-plus bug issue [#12609](https://github.com/element-plus/element-plus/issues/12609).
