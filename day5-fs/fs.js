const fs = require('fs');

/* 读文件 */
// fs.readFile('./config.json', (err, data) => {
  // console.log(data.toString(), 'data')
/* 写文件 */
//   fs.writeFile('./a.txt',data, function() {})
// })
let data = fs.readFileSync('./back/app.js')  
console.log(data, 'dta')

/* 追加文件内容 */
// for(var i = 0; i < 5; i++) {
//   fs.appendFile('./a.txt','*', function() {})
// }

fs.appendFileSync('./a.json', '*')

/* 删除文件 */
// fs.unlink('./a.txt', function(err, res) {
//   console.log(err)
// })
fs.unlinkSync('./a.json')

/* 文件夹 */
// fs.mkdir('./src', function(err, res) {
//   console.log(err, res)
// })
// fs.mkdirSync('./src')

/* 删文件夹; 只能删除空文件夹 */
// fs.rmdir('./src', function(err,data) {})
// 读文件夹 => 只读一级，只读自己的直接子元素  返回文件名组成的数组
// fs.readdir('./back', function(err, paths) {
//   console.log(paths)
// })


let stat = fs.statSync('./back')
console.log(stat.isDirectory())
console.log(stat.isFile())
/* 判断文件夹 */
fs.stat('./back', function(err, stat) {
  // console.log(stat) // 文件或者文件夹信息
  // console.log(stat.isFile()) // 判断是不是文件
  // console.log(stat.isDirectory()) // 判断文件夹
})

/* 判断文件是否存在; 文件和文件夹都支持 */
fs.exists('./back', function(exists) {
  console.log(exists, 'exist')
})

let res = fs.existsSync('./back')
console.log(res, 'res')















