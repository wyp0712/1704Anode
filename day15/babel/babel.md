<!-- Babel 是一个 JavaScript 编译器。 -->

# 主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

语法转换
通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
源码转换 (codemods)

// Babel 输入： ES2015 箭头函数
[1, 2, 3].map((n) => n + 1);


// Babel 输出： ES5 语法实现的同等功能
[1, 2, 3].map(function(n) {
  return n + 1;
});


整个配置过程包括：

1. 下包
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill

2. 
在项目的根目录下创建一个命名为 babel.config.js 的配置文件，其内容为：

const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };

运行此命令将 src 目录下的所有代码编译到 lib 目录：

./node_modules/.bin/babel src --out-dir lib


CLI 命令行的基本用法：

npm install --save-dev @babel/core


const babel = require("@babel/core");
babel.transform("code", optionsObject);

CLI 命令行工具：

@babel/cli 是一个能够从终端（命令行）使用的工具。下面是其安装命令和基本用法：
npm install --save-dev @babel/core @babel/cli
./node_modules/.bin/babel src --out-dir lib