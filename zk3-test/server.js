const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');
let str = '';

let server = http.createServer((req,res) => {
    //既要处理静态文件（有后缀名），处理接口（没有后缀名）

    // /  ---> index.html  
    console.log(url.parse(req.url))
    let pathname = url.parse(req.url).pathname;

    if(pathname === '/favicon.ico'){
        res.end('')  //buffer 字符串
    }

    pathname = pathname === '/' ? './index.html' : pathname;

    let extname = path.extname(pathname);

    if(extname){
        //读文件
        // fs.readFile
        // path.join(__dirname,'./public',pathname)
        let absPath = path.join(__dirname,'./public',pathname);
        if(fs.existsSync(absPath)){
            //存在
            let con = fs.readFileSync(absPath);
            res.end(con);
        }else{
            //不存在
            res.end('此文件不存在')
        }
    }else{
        
        //接口
        switch (pathname) {
            case '/api/yan': //验证码
                str = '';
                for(let i = 0;i<4;i++){
                    str += Math.round(Math.random()*9)
                }
                res.end(JSON.stringify({code:1,data:str}));
                break;
            case '/api/login':{//登录
                //获取前端post传递的参数
                let postStr = '';
                req.on('data',(chunk) => {
                    postStr += chunk;
                })

                req.on('end',() => {
                    console.log(postStr);
                    let params = JSON.parse(postStr);
                    let userlist = JSON.parse(fs.readFileSync('./mock/userlist.json','utf-8'));

                    //判断验证码是否正确
                    //用户名或密码有误
                    //登录成功
                    if(params.yan != str){
                        return res.end(JSON.stringify({code:0,msg:'验证码错误'}))
                    }
                    let isSuccess = userlist.some(item => item.username === params.username && item.pwd === params.pwd*1);
                    if(isSuccess){
                        res.end(JSON.stringify({code:1,msg:'登录成功'}))
                    }else{
                        res.end(JSON.stringify({code:2,msg:'用户名或密码有误'}))
                    }
                })
                break; 
            }
            case '/api/registry':{ //注册
                let regiStr = '';
                req.on('data',(chunk) => {
                    regiStr += chunk
                })
                req.on('end',() => {
                    let params = JSON.parse(regiStr);

                    let userlist = JSON.parse(fs.readFileSync('./mock/userlist.json','utf-8'));

                    let isHas = userlist.some(item => item.username === params.username);
                    console.log(params);
                    if(isHas){
                        res.end(JSON.stringify({code:2,msg:'此用户已注册'}))
                    }else{
                        userlist.push(params);
                        fs.writeFileSync('./mock/userlist.json',JSON.stringify(userlist));
                        res.end(JSON.stringify({code:1,msg:'注册成功'}))
                    }
                })
                break;
            }
            case '/api/list':{
                let userlist = JSON.parse(fs.readFileSync('./mock/userlist.json','utf-8'));
                res.end(JSON.stringify({code:1,data:userlist}))
                break;
            }
            case '/api/del':{
                let params = qs.parse(url.parse(req.url).query);   
                let userlist = JSON.parse(fs.readFileSync('./mock/userlist.json','utf-8'));
                let ind = userlist.findIndex(item => item.username === params.name);

                userlist.splice(ind,1);
                fs.writeFileSync('./mock/userlist.json',JSON.stringify(userlist),'utf-8');
                res.end(JSON.stringify({code:1,msg:'删除成功'}))
            }
            default:
                break;
        }
    }

})

server.listen(3000,() => {
    console.log("服务启动成功")
})

