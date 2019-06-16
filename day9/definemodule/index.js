/**
 * @param { 引入模块  并抛出模块 }
 * 
 */
const { exists } = require('./copyfile/copyfile');
const { del } = require('./del/del')
const { makedir } = require('./makejson/mkjson')
const { mkdir,rmdir,readdir,readFile,copyFile,unlink } = require('./promise/promise')


module.exports = {
  exists,
  del,
  makedir,
  mkdir,
  rmdir,
  readdir,
  readFile,
  copyFile,
  unlink
}

