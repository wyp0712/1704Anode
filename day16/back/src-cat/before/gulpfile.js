const gulp = require('gulp')
const webserver = require('gulp-webserver')

gulp.task('webserver', () => {
  return gulp.src('./src')
    .pipe(webserver({
      port: 8000,
      livereload: true,
      open: true,
      proxies: [
        {
          source: '/api', // 代理
          target: 'http://localhost:9000' // 代理目标
        }
      ],
      // 
      middleware: function (req, res, next) {
        // console.log(req.method)
        //  // 前端  前端 + 工程师 =>  前端工程师  
        // const address = url.parse(req.url).pathname;
        // if (address === '/admin') {
        //   res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'})
        //   res.end("fail")
        // }
        next()
      }
    }))
})


gulp.watch('webserver')
