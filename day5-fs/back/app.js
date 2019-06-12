/**
 * @param { fs }
 * 
 */

const fs = require('fs');

fs.readFile('./style/index.css', function (err, data) {
  // console.log(data.toString(), 'data')
})
const data = fs.readFileSync('./style/index.css') // 会产生阻塞效果
// console.log(data, 'data')

let styleList = '.box {background: red}'

// fs.appendFile("./style/index.css", styleList,function(err){});

fs.appendFileSync('./style/san.txt', styleList)

// function writeFileFn(i) {
//   fs.appendFileSync('./style/san.txt', `${i}`)
// }


// let n = 10;
// //输入n,n为等腰三角形的行数
// for (let i = 1; i <= n; i++) {
//   // 外循环控制等腰三角形的行数
//   for (let j = n - 1; j >= i; j--) {
//     //打印等腰三角形每行前的空格数
//     fs.appendFileSync('./style/san.txt', ' ')
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     //输出等腰三角形
//     fs.appendFileSync('./style/san.txt', '*')
//   }
//   fs.appendFileSync('./style/san.txt', '\n')
//   // 换行
// }

for (let i = 0; i < 10; i++) {
  // for(let j = 9; j > i; j--) {
  //   fs.appendFileSync('./style/index.css', ' ')
  // }
  for (let k = 0; k < 2 * i - 1; k++) {
    fs.appendFileSync('./style/index.css', '*')
  }
  fs.appendFileSync('./style/index.css', '\n')
}

// 判断文件是否存在
fs.exists('./app.js', function (err) {
  console.log(err, 'err')
});

// 文件信息      
fs.stat('./app.js', function (err, stats) {
  //判断是否是目录；是返回true；不是返回false；
  console.log(stats.isFile())
  //    判断是否是文件；是返回true、不是返回false；
  console.log(stats.isDirectory())
})

