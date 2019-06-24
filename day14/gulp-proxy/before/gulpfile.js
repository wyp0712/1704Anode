const gulp = require('gulp');
const server = require('gulp-webserver');

gulp.task('server', () => {
    return gulp.src('./src')
    .pipe(server({
        port: 8889,
        proxies: [
            {
                source: '/get', // 需要被代理的接口名
                target: 'http://localhost:8000/get'
            }
        ]
    }))
})

/**
 * 
 *   ajax({
 *     "url": '/api/checkcode'
 *    })
 *   "url": '/api/get'
 *   "url": '/api/post'
 *   "url": '/api/checkcode'
 * 
 *  后端  java http://localhost:5000/
 * 
 *   代码 ngix node proxies： {
 *        source: '/api'
 *        target: 'http://localhost:5000/'
 *      }
 * 
 *  前端  node服务 框架 http://localhost:8000/
 * 
 * 
 */