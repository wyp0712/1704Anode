const axios = require('axios')
// console.log(axios)

// 创建一个axios实例
let instance = axios.create({
  baseURL: 'http://39.105.187.138:3000',
  timeout: 1000,
})

instance('/movie', {
  method: 'get',
  params: {
    page: 0,
    size: 1
  },
}).then(res => {
  console.log(res.data)
})


















// let instance = axios.create({
//   baseURL: 'http://39.105.187.138:3000',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// })

// instance('/movie', {
//   method: 'get',
//   params: {
//     page:0,
//     size:2
//   }
// }).then(res => {
//   console.log(res.data, 'res')
// })