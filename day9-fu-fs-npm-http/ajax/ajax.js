class Ajax {
  constructor() {
    // 创建核心对象
    this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
  }
  get(opts) {
    console.log(opts, 'opts-------1')
    return new Promise((resolve, reject) => {
      let defaults = {
        async: true,
        dataType: 'json'
      }
      let options = Object.assign({}, defaults, opts);
      // 打开连接
      this.xhr.open('get', options.url, options.async);
      // 发送数据请求
      this.xhr.send(null);
      
      // 监听readyState
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState == 4) { // 异步调用完成
          if (this.xhr.status == 200) { // 异步调用成功
            console.log(JSON.parse(this.xhr.responseText))
            resolve(JSON.parse(this.xhr.responseText))
          } else {
            reject("异步调用出错/n返回的HTTP状态码为:"+xmlHttpRequest.status + "/n返回的HTTP状态信息为:" + xmlHttpRequest.statusText)
          }
        }
      }
    })
  }
  post(opts) {
    return new Promise((resolve, reject) => {
      let defaults = {
        async: true,
        dataType: 'json'
      }
      let options = Object.assign({}, defaults, opts);
      console.log(options)
      // 打开连接
      this.xhr.open('post', options.url, options.async);
      let data = typeof options.data == 'string' ? options.data : this.format(options.data)
      this.xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
      // 发送
      this.xhr.send(data); // send 只能写字符串格式 {uname: "zzz", age: "111"}   xxx=xxx&xxx=xxx
      // 监听
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState == 4) {
          if (this.xhr.status == 200) {
            resolve(this.xhr.responseText)
          } else {
            reject()
          }
        }
      }
    })
  }
  format(data) {
    return Object.entries(data).map(item => {
      return item[0] + '=' + item[1]
    }).join('&')
  }
}
let ajax = new Ajax()
