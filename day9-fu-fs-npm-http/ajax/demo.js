class Ajax {

  constructor() {
    this.xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
  }

  get(opts) {

    return new Promise((resolve, reject) => {
      const defaults = {
        async: true,
        dataType: 'json'
      }
      const options = Object.assign({}, defaults, opts);
      // 打开连接
      this.xhr.open('get', options.url, options.async);
      // 发送请求数据
      this.xhr.send(null)
      // readyState
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState === 4) {
          if (this.xhr.status === 200) {
            console.log(typeof JSON.parse(this.xhr.responseText))
            resolve( JSON.parse(this.xhr.responseText))
          } else {
            reject()
          }
        }
      }
    })
  }

  post(opts) {
    return new Promise((resolve, reject) => {
      const defaults = {
        async: true,
        dataType: 'json'
      }
      const options = Object.assign({}, defaults, opts);
      // 打开连接
      this.xhr.open('post', options.url, options.async);
      let data = typeof options.data == 'string' ? options.data : this.format(options.data)
      
      this.xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
      // 发送请求数据
      this.xhr.send(data)

      // readyState
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState === 4) {
          if (this.xhr.status === 200) {
            console.log(typeof JSON.parse(this.xhr.responseText))
            resolve( JSON.parse(this.xhr.responseText))
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

const ajax = new Ajax()