
const axios = require('axios');

axios.get('http://39.105.187.138:3000/movie', {
 params: {
   page:1,
   size:1
 }
})

axios.post('http://39.105.187.138:3000/login', {
  user: 'devin',
  pwd: 123
})


axios({
  url: '/movie',
  method: 'get',
  params: {
    page:1,
    size:1
  },
  proxy: {
    host: '127.0.0.1',
    port: 8000
  }
}).then(res => {
  console.log(res.data, 'res')
})


function getUserAccount() {
  return axios.get('http://39.105.187.138:3000/movie', {
    params: {
      page:1,
      size:1
    }
   })
}

function getUserPermissions() {
  return axios.post('http://39.105.187.138:3000/login', {
    user: 'devin',
    pwd: 123
  })
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
    // console.log(acct.data)
    // console.log(perms.data)
  }));