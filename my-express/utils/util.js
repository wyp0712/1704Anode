const fs = require('fs')


function readfile(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data.toString())
    })
  })
}


module.exports = {
  readfile
}