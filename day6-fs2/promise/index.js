const fs = require('fs');
function getData(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, function(err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

getData('./a.json')
  .then(res => {
    let b =  JSON.parse( res.toString()).name
    return getData(b)
  })
  .then(list => {
    let c =  JSON.parse( list.toString()).name
    return getData(c)
  })
  .then(res => {
    let c =  JSON.parse( list.toString()).name
    return getData(c)
  })



// fs.readFile('./a.json', function(err, aJson) {
//   let b =  JSON.parse( aJson.toString()).name
//   fs.readFile(b, function(err, bJson) {
//     let c =  JSON.parse( aJson.toString()).name
//     fs.readFile(c, function(err, cJson) {
//       console.log(cJson)
//       fs.readFile(c, function(err, cJson) {
//         console.log(cJson)
//         fs.readFile(c, function(err, cJson) {
//           console.log(cJson)
//           fs.readFile(c, function(err, cJson) {
//             console.log(cJson)
//             fs.readFile(c, function(err, cJson) {
//               console.log(cJson)
//             })
//           })
//         })
//       })
//     })
//   })
// })























// function getJsonData(src) {
//   fs.readFile(src, function (err, data) {
//     let b = JSON.parse(data.toString()).name

//     fs.readFile(b, function (err, res) {
//       let c = JSON.parse(res.toString()).name

//       fs.readFile(c, function (err, cJson) {
//         console.log(cJson)
//       })
//     })
//   })
// }
// getJsonData('./a.json')


// function getData(src) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(src, function (err, data) {
//       if (err) {
//         reject(err)
//       }
//       resolve(data)
//     })
//   })
// }

// getData('a.json').then(res => {
//   console.log(res.toString())
// }) 



