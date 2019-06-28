/**
 *  
 *  @param { http }
 * 
 */


const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const querystring = require('querystring')

http.createServer(processRequest).listen(3000, () => { console.log(3000) })

function processRequest(req, res) {
  /**
   *  
   * 判断是静态文件 还是接口  通过后缀名判断 
   * 静态文件 .html .js .jpg
   * 接口  没有后缀名的就是接口  
   * 
   */

  const MIME = {
    'html': 'text/html',
    'jpg': 'img/jpg',
    'js': 'text/javascript'
  }

  const urlpath = req.url;
  const pathname = url.parse(urlpath).pathname; // 获取请求地址 eg: /admin
  const method = req.method; // 获取请求方式

  // 获取后缀名   /index.html   /admin
  const extname = path.extname(pathname).slice(1)
  let filepath = path.join(__dirname, 'src', pathname)
   
  let getparams = querystring.parse(req.url.split('?')[1]) // k1=v1&k2=v2
     
  console.log(filepath, 'filepath')
  
  let contentType = MIME[extname]
  
  if (extname) { // 静态文件
    // if (extname === 'ico') {
    //   res.end(1)
    //   return 
    // }
    streamfile(filepath, contentType)
  } else { // 接口
    /**
    * 1. 接收参数  get参数  post参数
    * 2. 根据接收的参数 去返回给前端数据
    **/  
    if (method === 'GET' && pathname === '/list') {

    }
    if (method === 'GET' && pathname === '/login') {
      let { user,pwd } = getparams
        fs.readFile('./mock/user.json', (err, data) => {
          if(err) throw err;
          let list = JSON.parse(data.toString())
          let flag = list.some(item => {
            return item.user == user && item.pwd == pwd
          })
          if (flag) {
            res.end('success')
          } else {
            res.end('fail')
          }
        })
    }
  }

  // 读文件 写文件
  function streamfile(filepath, contentType) {
    let stream = fs.createReadStream(filepath)
    stream.pipe(res)
  }
}
