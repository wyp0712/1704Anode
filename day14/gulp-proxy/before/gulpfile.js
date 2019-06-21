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