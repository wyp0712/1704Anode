const http = require('http');
const url = require('url')
http.createServer((req, res) => {
    let oUrl = url.parse(req.url);
    let pathname = oUrl.pathname.slice(0,-1);
    console.log(pathname)
    switch(pathname) {
        case '/get':
            res.end('123')
        break;
    }
}).listen(8000, ()=>{
    console.log('http://localhost:8000')
})