const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const qs = require('querystring')

http.createServer((req, res) => {
    var mime = {
        "css": "text/css",
        "gif": "image/gif",
        "html": "text/html",
        "ico": "image/x-icon",
        "jpeg": "image/jpeg",
        "jpg": "image/jpeg",
        "js": "text/javascript",
        "json": "application/json",
        "pdf": "application/pdf",
        "png": "image/png",
        "svg": "image/svg+xml",
        "swf": "application/x-shockwave-flash",
        "tiff": "image/tiff",
        "txt": "text/plain",
        "wav": "audio/x-wav",
        "wma": "audio/x-ms-wma",
        "wmv": "video/x-ms-wmv",
        "xml": "text/xml",
        "manifest": "text/cache-manifest"
    };

    let oUrl = url.parse(req.url);
    let pathname = oUrl.pathname;
        pathname = decodeURI(pathname);
    pathname = pathname == '/' ? 'index.html' : pathname;
    let extname = path.extname(pathname).slice(1);
    console.log(extname, 'extbame')


    if (extname) {// 文件
        if (extname == 'ico') {
            res.end('123');
            return;
        }
  
        console.log(mime[extname], 'mime.extname')

        let con = fs.readFileSync(path.join(__dirname , pathname))
        res.writeHead(200, {'Content-type': `text/${mime[extname]};charset=utf-8`})
        res.end(con)
    } else {
        switch(pathname) {
            case '/register':
                // 获取前端发送过来的数据
                let str = "";
                req.on('data', (chunk) => {
                    str+=chunk
                })
                req.on('end', () => {
                    let obj = qs.parse(str);
                    let userArr = JSON.parse(fs.readFileSync('./user.json')) // []
                    let isExists = userArr.some(item => {
                        return item.uname == obj.uname
                    })
                    if (isExists) {
                        // code: 1 msg:"用户名存在"
                        // code: 0 msg: "注册成功"
                        res.end(JSON.stringify({code: 1,msg: "用户名已存在"}))
                        // res.end('登录失败')
                    } else {
                        userArr.push(obj);
                        fs.writeFileSync('./user.json', JSON.stringify(userArr));
                        res.end(JSON.stringify({code: 0, msg: "注册成功"}))
                    }
                    res.end('123')
                })

            break;
            case '/login':
             console.log(req.url, 'url')
             res.end(req.url)
            break;   
        }
    }
}).listen(5555, ()=> {
    console.log('http://localhost:5555')
})