/**
 * @param { http服务端 }
 * 
 * 
 * 
 */

/* 

  http请求概述：
 

*/

/**
* @接收一个带参数的http请求
* @param {127.0.0.1:3000/http_get?name=小小沉沉&password=qwer}
* @param {一般会有两次请求  另一次为http://127.0.0.1:3000/favicon.ico 这个是浏览器自动发起的请求，需要特殊处理}
*
*/



/*

Node中的Http
Node中提供了http模块，其中封装了高效的http服务器和http客户端 
http.server是一个基于事件的HTTP服务器，内部是由c++实现的，接口由JavaScript封装 
http.request是一个HTTP客户端工具。用户向服务器发送数据。 
下面就来分别得介绍一下http的服务端和客户端

const http = require('http');
const net  = require('net');
const util = require('util');


http.createServer(function(req,res){
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write("we are is content");
    res.end("fdsa");

}).listen(3000);

http.createServer(function(req,res){
    console.log(req.httpVersion);
    console.log(req.socket);
    console.log(req.headers);
    console.log(req.method);
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write("we are is content");
    res.end("fdsa");
}).listen(8080);

3.获取GET请求内容
由于GET请求直接被嵌入在路径中,URL完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET的参数，Nodejs的url模块中的parse函数提供了这个功能
4.获得POST请求内容
POST请求的内容全部都在请求体中，http.ServerRequest并没有一个属性内容为请求体，
原因是等待请求体传输可能是一件耗时的工作。
譬如上传文件。恶意的POST请求会大大消耗服务器的资源。
所以Nodejs是不会解析请求体，当你需要的时候，需要手动来做。 
简单的看一下代码：



5.http.ServerResponse返回客户端信息
决定了用户最终能到的结果，它是由http.Server的request事件发送的，作为第二个参数传递。一般为response或res 
主要的三个函数： 
response.writeHead(statusCode,[headers])：向请求的客户端发送响应头。 
statusCode是HTTP的状态码，如200为成功，404未找到等。 
headers是一个类似关联数组的对象，表示响应头的每个属性。 
response.write(data,[encoding]) 向请求客户端发送相应内容，data是buffer或字符串，encoding为编码 
response.end([data],[encoding]) 结束响应，告知用户所有发送已经完成，当所有要返回的内容发送完毕，该函数必须被调用一次，如果不调用，客户端永远处于等待状态




*/

const http = require('http');
const url = require('url');
const querystring = require('querystring') // querystring用于处理URL中的查询字符串
const util = require('util')

http.createServer(function (req, res) {


  // if (req.url !== '/favicon.ico'){
    
  // }
  if (req.method === 'GET') {

    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    // res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    console.log('req:',req.method)
    console.log(req.url)
  }

  res.end('hello world')

  // let post = '';
  // req.on('data', (chunk) => {
  //   console.log(chunk, 'chunk')
  //   post += chunk;
  //   console.log(post, 'post----1')
  // });
  // req.on('end', () => {
  //   //将字符串变为json的格式
  //   console.log(post, 'post')
  //   post = querystring.parse(post);
  //   //向前端返回字符串
  //   console.log(post, 'post')
  //   res.end(util.inspect(post));
  // });
  // res.end('hwllo world')


  // console.log(req.httpVersion);
  // // console.log(req.socket);
  // // console.log(req.headers);
  // console.log(req.method);

  // console.log(querystring.parse(url.parse(req.url).path.slice(2)).name)
  // let { name, age} = querystring.parse(url.parse(req.url).path.slice(2));
  // console.log(name, age, '-------1')

  // if (req.url === '/favicon.ico') {
  //   res.end('123')
  // }

  // res.writeHead(404,{'Content-Type':'text/plain'})
  // res.write("we are is content");
  // res.end("fdsa");
}).listen(8080, () => {
  console.log(8080)
});


// let pos = '{\n\t"name":"123",\n\t"age":12\n\t\n}';

// console.log(JSON.parse(pos), 'post')

