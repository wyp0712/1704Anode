/**
 * 通过require引入的模块，有缓存的，更改的时候更改的就是缓存内的，下次再次使用require引入之前的文件时，会先从缓存内取
 */
let a = require('./exports.js');

console.log(a) // 
// a.address = '北京';

// delete require.cache[require.resolve('./exports.js')]
// let b = require('./exports.js');
// console.log(b)