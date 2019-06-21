//读文件后输出文件内容
var fs = require('fs');

fs.readFile('./text1.txt', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});


//嵌套回调，读一个文件后输出，再读另一个文件，注意文件是有序被输出的，先text1.txt后text2.txt
var fs = require('fs');

fs.readFile('./text1.txt', 'utf8', function (err, data) {
  console.log("text1 file content: " + data);
  fs.readFile('./text2.txt', 'utf8', function (err, data) {
    console.log("text2 file content: " + data);
  });
});



//callback hell

doSomethingAsync1(function () {
  doSomethingAsync2(function () {
    doSomethingAsync3(function () {
      doSomethingAsync4(function () {
        doSomethingAsync5(function () {
          // code...
        });
      });
    });
  });
});


//原生Primose顺序嵌套回调示例
var fs = require('fs')
var read = function (filename) {
  var promise = new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
  return promise;
}
read('./text1.txt')
  .then(function (data) {
    return read('./text2.txt');
  })
  .then(function (data) {
    console.log(data);
  });







async function readeFileFn() {

  let fileOne = await readeFileOne()
  let fileTwo = await readeFileTwo(fileOne)
  let fileThree = await readeFileThree(fileTwo)

  return fileThree
}