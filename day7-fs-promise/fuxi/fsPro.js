const fs = require('fs');
const path = require('path');
const fsArr = ['mkdir', 'rmdir', 'readdir', 'readFile', 'copyFile', 'unlink']
// 遍历数组
fsArr.forEach(item => {
  module.exports[item] = function (pathname, copyname = '') {
    pathname = path.resolve(pathname)
    copyname = path.resolve(copyname)
    // if (fs.existsSync(pathname)) { 
    return new Promise((resolve, reject) => {
      // 判断传入的路径是否存在，不存在提醒用户
      if (fs.existsSync(pathname)) {
        let arg = [function (err, data) {
          if (err) {
            reject(err)
            return;
          }
          resolve(data || '')
        }]
        // readFile copyFile 有第二个参数，其他的没有，所以对这两个进行判断
        // fs.readFile( path, 'utf-8', function() {})
        item === 'readFile' ? arg.unshift('utf-8') : null
        item === 'copyFile' ? arg.unshift(copyname) : null
        fs[item](pathname, ...arg)
      } else {
        console.log('当前路径不存在')
        resolve('当前路径不存在')
      }
    })
  }
})

// ['writeFile', 'appendFile'].forEach(item => {
//   return new Promise((resolve, reject) => {

//     // fs[item]()
//   })
// })

