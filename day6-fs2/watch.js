const fs = require('fs');
// let fileName = 'a.txt';
// fs.watch(fileName, (function () {
//   let count = 0;
//   return function () {
//     count++;
//     console.log("文件" + fileName + " 内容刚刚改变。。第" + count + "次");
//   };
// })());
// console.log("watching file...");

fs.rmdir('./src',function(err, res) {
  console.log()
})