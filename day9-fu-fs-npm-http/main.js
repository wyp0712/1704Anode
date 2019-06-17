//导入http模块

var http=require('http');
var util = require('util');

const movieJson = require('./movie.json');


function filterFn(page, size) {
  let a = movieJson.subjects.filter((n, index) => index > page * size && index <= (page + 1) * size)
  console.log(a.length, 'a-----1')
}

console.log(filterFn(2, 5));


// //导入url模块
// var url=require('url');

// http.createServer(function(request,response){

//     response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8

//     // //接收浏览器url
//     // var url_Obj=url.parse(request.url);
//     // //请求参数中有中文是推介，会自动处理中文问题,推介使用
//     // var url_Obj_Json=url.parse(request.url,true);
//     // // console.log(url_Obj_Json);

//     // var url_Obj_Json_str=JSON.stringify(url_Obj_Json.query);
//     // // console.log(url_Obj_Json_str);

//     // //解决http://127.0.0.1:3000/favicon.ico 引起的重复请求
//     // if(url_Obj_Json.path != "/favicon.ico"){
//     //     response.write(util.inspect(url.parse(request.url, true)));
//     // }

//     response.write("=======================================");
//     response.end();

// }).listen(3000);
// console.log("--HTTP NodeJS Connect--");
