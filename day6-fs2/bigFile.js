/**
 * 读取大文件
 */
const fs = require('fs')
const path = require('path');
const color = require('colors');

let rs = fs.createReadStream('./惊奇队长.mkv');

// console.log(rs, 'rs')
let ws = fs.createWriteStream('./aa.mkv');

let srcFile = path.join(__dirname, './惊奇队长.mkv')
let destFile = path.join(__dirname, './a.mkv')
// console.log(srcFile, 'src')
// console.log(destFile.red, 'destFile')
console.time('amzing')

fs.stat(srcFile, function(err, stat) {
    const size = stat.size
    let num = 0;
   rs.on('data', function(buffer) {
       num += buffer.length;
       const percent = ( num / size  * 100 ).toFixed(2);
       console.log(percent + '%');
   })
   rs.on('end', function() {
    console.timeEnd('amzing')
   })
})
rs.pipe(ws)
