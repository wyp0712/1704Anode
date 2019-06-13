const fs = require('fs');
const path = require('path');
const colors = require('colors');
// 用于连接路径
const destFile = path.join(__dirname, './dist.mkv');
const srcFile = path.join(__dirname, '/惊奇队长.mkv');

console.time('amazing')
fs.stat(srcFile, function (err, stat) {
  let size = stat.size;
  // fs.readFile(srcFile, function(err, data) {
  //   fs.writeFile(destFile, data, function() {
  //     console.timeEnd('amazing')
  //   })
  // })
  const readStream = fs.createReadStream(srcFile);
  const writeStream = fs.createWriteStream(destFile);
  // let copyLen = 0;
  // readStream.on('data', function(buffer) {
  //   copyLen += buffer.length;
  //   const percent = (copyLen / size * 100).toFixed(2);
  //   console.log(percent + '%')
  // })
  // readStream.on('end', function() {
  //   console.timeEnd('amazing')
  // })
  readStream.pipe(writeStream)
  console.timeEnd('amazing')
})



// console.time('copying')

// fs.stat(srcFile, (err, stat) => {
//   const fileSize = stat.size;
//   const readStream = fs.createReadStream(srcFile);
//   const writeStream = fs.createWriteStream(destFile)
//   let bytes = 0;

//   readStream.on('data', (buffer) => {
//     bytes+=buffer.length;
//     const percent = (( bytes / fileSize ) * 100 ).toFixed(2);
//     // console.log(percent+ '%')
//   })

//   readStream.on('end', () => {
//     console.timeEnd('copying')
//   })
//   readStream.pipe(writeStream)


//   // fs.readFile(srcFile, function(err, res) {
//   //   fs.writeFile(destFile, res, function() {
//   //     console.timeEnd('copying');
//   //   })
//   // })
// })

// fs.stat(sourceFile, (err, stat) => {
//   const fileSize = stat.size;
//   let bytesCopied = 0;
//   const readStream = fs.createReadStream(sourceFile);
//   readStream.on('data', (buffer) => {
//     bytesCopied += buffer.length;
//     const porcentage = ((bytesCopied / fileSize) * 100).toFixed(3);
//     // console.log(porcentage + '%');
//   });
//   readStream.on('end', () => {
//     // console.timeEnd('copying');
//   });
//   readStream.pipe(fs.createWriteStream(destFile));
// });