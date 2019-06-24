


使用babel:

1. npm init 生成包管理文件package.json

2. npm install babel-cli --save-dev
   npm install babel-preset-env --save-dev

3. type ull> .babelrc

   {
     presets: ["env"],
     ignore: [""] // 配置忽略文件
     "minified":true,   // 压缩
     "plugins": [   // 插件
        "transform-decorators-legacy",
        "transform-class-properties"
      ]
   }

4.  在包管理文件中，添加一个scripts字段  
    通过 npm run 字段 运行文件

    scripts: {
      "build": "babel src -d dist"
    }
    npm run build





