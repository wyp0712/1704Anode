class Ajax {
  constructor() {
    // 创建请求数据对象
    this.xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  }
  get(opt) {
    // const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    return new Promise((resolve, reject) => {
      const defaults = {
        async: true, // 默认异步
        dataType: 'json',
        type: 'get',
        data: null
      }
      // 合并参数
      const options = Object.assign({}, defaults, opt);
      let data = typeof options.data === 'string' ? options.data : this.format(options.data)
      // 连接 method url, async
      this.xhr.open(options.type, options.url + '?' + data, options.async);
      // 发送
      this.xhr.send(null)
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState === 4) { // 判断异步调用完毕
          if (this.xhr.status === 200) { // 判断异步调用完成
            resolve(JSON.parse(this.xhr.responseText))
          }
        }
      }
    })
  }

  post(opt) {
    // const this.xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    return new Promise((resolve, reject) => {
      const defaults = {
        async: true, // 默认异步
        dataType: 'json',
        type: 'post',
        data: null
      }
      // 合并参数
      const options = Object.assign({}, defaults, opt);
      let data = typeof options.data === 'string' ? options.data : this.format(options.data)
      // 连接 method url, async
      this.xhr.open(options.type, options.url, options.async);
      this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      // 发送  'user=syf&pwd=123'
      this.xhr.send(data)
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState === 4) { // 判断异步调用完毕
          if (this.xhr.status === 200) { // 判断异步调用完成
            resolve(JSON.parse(this.xhr.responseText))
          }
        }
      }
    })
  }
  format(data) {
    if (data) {
      return Object.entries(data).map(item => {
        return item[0] + '=' + item[1]
      }).join('&')
    }
  }
}

let ajax = new Ajax()


// const data = {
//   page: 1,
//   size: 5
// }

//  'page=1&size=5'

//  console.log(Object.entries(data))
//  let list = Object.entries(data).map(item => {
//    return item[0] + '=' + item[1]
//  }).join('&')
//  console.log(list, 'list')

