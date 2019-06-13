/**
 * 读取大文件
 */

const fs = require('fs')
let rs = fs.createReadStream('./movie.wmv');
let ws = fs.createWriteStream('./src/movie.wmv');
rs.pipe(ws)

rs.on('data', (chunk) => {
   // console.log(chunk)
   // chunk 每一段小流  buffer
   if (!ws.write(chunk)) {
       rs.pause()
   }
   // console.log(ws.write(chunk))  // 返回是否写入完成
})

ws.on('drain', () => {
    console.log('写完一小段')
    rs.resume()
})

   rs.on('end', () => {
       console.log(123)
   })