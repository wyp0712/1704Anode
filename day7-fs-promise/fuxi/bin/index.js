
//  "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "dev": "node index.js"
// },
// 包管理文件  srcript : 添加npm 启动命令
// npm   npm run dev


const fs = require('fs');

// 文件  文件夹  判断

/*
  1. 创建文件 
    fs.writeFile()
*/

// fs.writeFile()
// fs.readFile() // buffer
// fs.copyFile()
// fs.appendFile()
// fs.unlink()

// 文件夹
// fs.mkdir() // 创建
// fs.rmdir() // removeDir
// fs.readdir() // 读 function(err, paths)
// fs.exists('./path', function(exists) {})
// fs.stat('./', function(err, stat) {
//   stat.isFile()
//   stat.isDirectory()
// })


/**
 * @param { 创建文件夹 拷贝文件夹(大文件拷贝) 删除文件夹 promise封装fs }
 * 
 * 
 */

 const { mkdir,rmdir, readdir,readFile,copyFile,unlink } = require('../fsPro');



 const makeDir = () => {
   /** 
    * 1. 检测src 在不在 
    * 2. 遍历数据创建
    * 3. 不在就创建 文件和文件夹 dirname  filename
    * 
    * */ 
 }
 // 拷贝
//  1. src dist 
/**
 * 1. 判断dist  创建
 * 2. 读文件夹  判断是文件夹还是文件
 * 
 */
 /**
  * 删除： 
  * 1. 先删除文件 然后删除文件夹
  * 2. 同步删除
  * 
  */
  /**
   * 1. 回调
   * 2. promise
   * 3. async
   * 
   */
   /**
    * 
    * npm 上传
    * 
    */










