
const fs = require('fs');
const path = require('path');

const fsArr = ['mkdir', 'rmdir', 'readdir', 'readFile', 'copyFile', 'unlink']

fsArr.forEach(item => {
  module.exports[item] = function (pathname, copyname = '') {
    let arg = [function (err, data) {
      if (err) {
        reject(err)
        return;
      }
      resolve(data || '')
    }]
    item === 'copyFile' ? arg.unshift(copyname) : null;
    item === 'readFile' ? arg.unshift('utf-8') : null;
    fs[item]('path', ...arg)
  }
})

// ['writeFile', 'appendFile']




// fs.mkdir('path', function(err, data) {

// })
// fs.readFile('path','utf-8', function(err, data) {

// })

// fs.copyFile('path1', 'path2', function(err, data) {

// })

// mkdir( 'path', ...['utf-8', function() {}])

console.log(...['utf-8', function () { }])

