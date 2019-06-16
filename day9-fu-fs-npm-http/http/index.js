/**
 * http 内置模块  const http = require('http')
 */

 const http = require('http');
 const fs = require('fs')
 const qs = require('querystring'); // 

 let server = http.createServer((req, res) => {
     console.log(111)
     if (req.url === '/favicon.ico') {
         res.end('123');
         return;
     }
    let ourl = req.url.slice(2); // uname=xxx&upwd=xxx&adf=xxx
    let urlObj = qs.parse(ourl);
    let userArr = JSON.parse(fs.readFileSync('./user.json', 'utf-8'));
    if (urlObj.uname) {
        userArr.push(urlObj)
    }
    
    fs.writeFileSync('./user.json', JSON.stringify(userArr))
    let con = fs.readFileSync('./index.html', 'utf-8')
    res.end(con)
 })
 server.listen(8000, () => {
    console.log('server is in http://localhost:8000')
 })