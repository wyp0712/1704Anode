/**
 *  npm 上传 下载
 * 
 *  1. 生成包管理文件 npm init
 *  2. main: index.js
 *  3. npm login 账号 - 密码 - 邮箱
 *  4. npm publish
 *  
 *  更新包： 更改版本号 version: 1.0.1
 *  npm publish
 *  
 */


/**
 * 
 * @param { fs：文件 文件夹 判断 }
 * @param { 文件 }
 * 
 * 1. 读 
 * fs.readFile( path, 'utf-8', function(err, data) {})
 * 
 * 2. 写
 * fs.writeFile( path, function(err, data) {} )
 * 
 * 3. 追加   转字符串 JSON.stringify(content)
 * fs.appendFile( path, '', function(err, data) {} )
 * 
 * 4. 删除
 * fs.unlink(path, function(err, data) {})
 * 
 * 5. 拷贝
 * fs.copyFile(path, copyname, function(err, data) {})
 * 
 *  let arg = [ '' ,function() {}]
 * 
 *  fs[item](path, ...[])
 * 
 * 
 * 
 * 
 * @param { 文件夹 }
 * 
 * 1. 创建文件夹
 *  fs.mkdir(path, function(err, data) {}) 
 * 
 * 2. 读文件夹 
 * fs.readdir(path, function(err,data) {})
 * 
 * 3. 删除文件夹
 * fs.rmdir(path, function(err, data) {})
 * 
 * @param { 判断是否存在  判断是文件文件夹   }
 * 
 * 1. fs.exist(path, funciton(exists) { })
 * 2. fs.stat(path, function(err, stat) { 
 *       stat.isFile()
 *       stat.isDirectory()  
 *    })
 */


  /**
   * 
   * __dirname 绝对路径
   * @param { 工具类 path url  querystring }
   * 
   * 1. path.parse(src)  {  }
   * 2. path.format({})  ''
   * 3. path.join(path, item)
   * 4. path.resolve(src)
   * 5. path.extname(src)  后缀名
   * 
   * 
  */

 /** 
  * 
  *  1. 根据一个json 文件生成一个文件夹目录
  * 
  *  2. 根据一个文件夹目录，生成一个json 数据
  * 
  *  3. 根据一个文件夹目录src， 复制一个相同的文件夹dist 小文件 大文件 深拷贝
  *  
  *  4. 封装一个promise
  * 
 */

const fs = require('fs');
const path = require('path');
const config = require('./config.json');
// 生成文件夹
const makeDir = (config) => {
 let exist = fs.existsSync(config.dirname);
 if (exist) {
    return;
 } else {
   fs.mkdirSync(config.dirname)
 }
 config.children.forEach(item => {
   if (item.dirname) {
    let _src = config.dirname + '/' + item.dirname;
    item.dirname = path.join( config.dirname, item.dirname);
    makeDir(item)
   } else {
     fs.writeFileSync(path.join( config.dirname, item.filename), 'h')
   }
 })
}

makeDir(config)


// 根据传入的src的路径去 copy文件
const copy = (src, dist) => {
  fs.readdir(src, function (err, paths) {
    paths.forEach(item => {
      // 拼接路径
      let _src = src + '/' + item,
        _dist = dist + '/' + item
      // 判断是文件还是文件夹
      fs.stat(_src, function (err, stat) {
        if (stat.isFile()) {
          // 这个是读文件写文件
          // fs.readFile(_src, function(err, data) {
          //   fs.writeFile(_dist, data, function(err, data) {
          //     console.log('success')
          //   })
          // })  

          // 如果有大文件的话 可以用这个更快 大文件
          fs.createReadStream(_src).pipe(fs.createWriteStream(_dist))
          // let read = fs.createReadStream(_src);
          // let write = fs.createWriteStream(_dist);
          // read.pipe(write);

        } else if (stat.isDirectory()) {
          // 如果是文件夹，递归调用重新创建文件夹，拷贝文件
          exists(_src, _dist, copy)
        }
      })
    })
  })
}

// 判断dist
const exists = (src, dist) => {
  fs.exists(dist, function (exists) {
    if (exists) {
      copy && copy(src, dist)
    } else {
      fs.mkdir(dist, function (err, data) {
        // console.log('文件夹创建成功')
        copy && copy(src, dist)
      })
    }
  })
}

// exists(__dirname + '/src', __dirname + '/dist')

module.exports = {
  exists
}





