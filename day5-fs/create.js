const fs = require('fs');
const config = require('./config.json');


// fs.mkdirSync('./src/dist')


/**
 *  @func [创建项目文件夹]
 * 
 *  1. 判断有没有这个文件夹
 *  2. 没有的创建文件夹
 *  3. 遍历子文件，创建文件或者文件夹
 */
const makeDir = (config) => {
  // 判断有没有这个文件夹 src
  let flag = fs.existsSync(config.dirname)
  if (!flag) {
    // 没有去创建文件夹
    fs.mkdirSync(config.dirname)
  }
  // 遍历子数据 创建 src/css  src/js  
  config.children.forEach(item => {
    if (item.dirname) { // 判断是不是文件夹的名字
      item.dirname = config.dirname + '/' + item.dirname
      makeDir(item)
    } else {
      // 如果是filename 就创建文件
      fs.writeFileSync(config.dirname + '/' + item.filename)
    }
  })
}

makeDir(config)

/**
 *  @function [复制文件夹src->dist]
 * 1. 判断是文件夹还是文件  const stat = fs.statSync() stat.isDirectory() //
 * 2. 如果是文件夹   读文件夹 
 * 3. 如果是文件 读文件 写文件
 * 
 * */
// const copyDir = (src, dist) => {
//   const stat = fs.statSync(src)
//   if (stat.isDirectory()) {

//   } 
// }
// copyDir('./src', './dist', copy)

// function copy(src, dist) {

// }


// 读文件夹
fs.readdir('./src', function(err, paths) {
    
    paths.forEach(item => {
        const stat = fs.statSync('./src/'+ item) 

        if(stat.isDirectory()) {
     
        } else {
       
        }
    })
})


function copy(src, dist) {

}










// fs.readdir('./back', (err, paths) => {
//   // console.log(err, paths)
//   paths.forEach(item => {
//     // console.log(fs.statSync('./back/'+ item))
//     const stat = fs.statSync('./back/' + item)
//     // console.log(stat, 'stat')
//      console.log(stat.isDirectory())
//   })
// })


