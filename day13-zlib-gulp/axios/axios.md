# Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

## 从浏览器中创建 XMLHttpRequests
## 从 node.js 创建 http 请求
## 支持 Promise API
## 拦截请求和响应
## 转换请求数据和响应数据
## 取消请求
## 自动转换 JSON 数据
## 客户端支持防御 XSRF

使用：
npm install axios

cdn引入：
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>


# 执行 GET 请求

## 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

## 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


# 执行 POST 请求
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


# 执行多个并发请求

function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));