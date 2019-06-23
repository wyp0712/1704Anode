

const fs = require('fs')

function readfile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

module.exports = {
  readfile
}
