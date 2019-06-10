#### 模块
当我们的应用过于大时，会出现变量污染，代码不好维护，所以我们需要将代码拆成多个模块，通过模块的抛出和引入来组合成完整的项目

#### 模块的发展历史
- 无模块时代
- 闭包和自执行函数
- cmd amd commonjs

#### cmd amd
应用于浏览器
cmd：sea.js
amd: require.js


#### commonjs


#### nodejs 模块
- 内置模块
    http fs path url querystring...
- 用户模块
    - 第三方模块  https://www.npmjs.com/package/npm
    - 自定义模块

#### npm
npm node package manager  nodejs的包管理器
npm init 将文件夹初始化为npm管理的文件
package.json 包描述文件
```
下载：
    开发依赖  devDependencies
    npm install 包名 --save-dev       (development)
    npm i 包名 -D
    线上依赖  dependencies
    npm install 包名 --save
    npm i 包名 -S
```

