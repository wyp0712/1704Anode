class Ajax {
  constructor() {
      // 创建核心对象
      this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
  }
  get(opts) {
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
                  if (this.xhr.status ==200) {
                      resolve(this.xhr.responseText)
                  } else {
                      reject()
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