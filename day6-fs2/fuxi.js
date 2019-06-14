/**
 * 
 * @param { class fs }
 * 
 * 文件  
 * 
 *  读：
 *  删
 *  
 * 
 * 
 * 
 * 文件夹
 * 
 * 
 * 
 */

const fs = require('fs');
const colors = require('colors')
const config = require('./config.json');

// console.log('hello world'.bold.blue)
// console.log(process)

const makeDir = (config) => {
  fs.exists(config.dirname, function (exists) {
    if (!exists) {
      fs.mkdir(config.dirname, function () {
      })
    }
    config.children.forEach(item => {
      if (item.dirname) {
        item.dirname = config.dirname + '/' + item.dirname;
        makeDir(item)
      } else {
        fs.writeFile(config.dirname + '/' + item.filename, `this is ${item.filename}`, function () {

        })
      }
    })
  })
}
// makeDir(config)



// 文件

// 1. 读取
//  fs.readFile('./config.json', function(err, data) {
//    console.log(data) // buffer  data.toString()
//  })

//  let data = fs.readFileSync('./unlink-demo.txt')

// 2. 删除文件
//  fs.unlink('./unlink-demo.txt', function(err,data){
//     console.log()
//  })
//  fs.unlinkSync()

// 3. 追加内容
//  fs.appendFile('./unlink-demo.txt','*', function(err, data) {
//    console.log(err, data)
//  })

//  let data = fs.appendFileSync('./unlink-demo.txt', 'hello world')

// 4. 创建
//  fs.writeFile('./abc.txt','hello ：shanghai',function() {

//  })

//  fs.readFile('./unlink-demo.txt', function(err, data) {
//    fs.writeFile('./abc.txt', data, function(err, list) {

//    })
//  })


//  fs.writeFileSync('')


// 文件夹

//  1. 创建
// fs.mkdir('./demo/app', function () {
//   fs.writeFile('./demo/app/index.js', '', function () {

//   })
// })

// fs.mkdirSync('./demo/app')
// 2. 删除 --> 空文件
//  fs.unlinkSync('./demo/app/index.js')
//  fs.rmdir('./demo/app', function() {

//  })
//  3. 读文件夹  只能读一级 路径数组
// fs.readdir('./demo', function (err, paths) {
//   // console.log(paths)
//   fs.readdir('./demo/app', function (err, p) {
//     // console.log(p)
//     let src = './demo/app/' + p
//     console.log(src.red, 'src')
//     fs.writeFile(src, '我是王琪', function() {

//     })
//   })
// })

// let paths = fs.readdirSync('./demo')
// console.log(paths)



// 判断文件是否存在  回调参数 就一个
//  fs.exists('./demo/css', function(exists) {
//     console.log(exists)
//     if (!exists) {
//       fs.mkdir('./demo/css', function() {

//       })
//     }
//  })

// let exists = fs.existsSync('./demo')

// 判断文件 文件夹  

// 获取当前文件或者文件夹的信息
//  fs.stat('./demo/css', function(err, stat) {
//     console.log(stat, 'stat')
//     // isFile()  isDirectory()
//     if (stat.isFile()) {
//           // fs.writeFile()
//     } else  if (stat.isDirectory()) {
//         //  callback()
//     }
//  })

// 拷贝函数
const copy = (src, dist) => {
  fs.readdir(src, (err, paths) => {  // src 
    // [ ad.js index.html ] 
    paths.forEach(item => {
      // 获取路径
      let _src = src + '/' + item,
        _dist = dist + '/' + item;
      fs.stat(_src, (err, stat) => {
        if (stat.isFile()) {
          // createReadStream
          let readestream = fs.createReadStream(_src)
          let writestream = fs.createWriteStream(_dist)
          readestream.pipe(writestream)
        } else if (stat.isDirectory()) {
          exists(_src, _dist, copy)
        }
      })
    })
  })
}

// 判断 dist 存在不存在 函数
const exists = (src, dist, copy) => {
  fs.exists(dist, function (exists) {
    if (exists) { // 存在
      copy && copy(src, dist) // 拷贝
    } else { // 不存在
      fs.mkdir(dist, function () {
        copy && copy(src, dist) // 拷贝
      })
    }
  })
}
exists(__dirname + '/src', __dirname + '/dist', copy)
















