const gulp = require('gulp');
const sass = require('gulp-sass');
const mincss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const server = require('gulp-webserver');
const url = require('url');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
/**
 * 编译scss
 * 压缩css
 * 自动添加前缀  gulp-autoprefixer
 * 
 * es6=>es5
 * 压缩
 * 
 * gulp-webserver  创建web服务器
 * body-parser  处理post发过来的参数
 */

 gulp.task('css', () => {
     return gulp.src('./src/scss/**/*.scss') // ** 代表0个或多（1）个文件夹
     .pipe(sass())
     .pipe(mincss())
     .pipe(autoprefixer({
         browsers: ['last 2 versions']
     }))
     .pipe(gulp.dest('./dist/css'))
 })

 gulp.task('js', () => {
     return gulp.src(['./src/js/**/*.js', '!./src/js/libs/*.min.js'])
     .pipe(babel({
         presets: ['@babel/env']
     }))
     .pipe(uglify())
     .pipe(gulp.dest('./dist/js'))
 })

 gulp.task('watch', () => {
     gulp.watch('./src/js/*.js', gulp.series('js'))
     gulp.watch('./src/scss/*.scss', gulp.series('css'))
 })

 // 将一些任务一起执行
 gulp.task('builder', gulp.series('css', 'js', 'watch'))


 // 创建一个任务，起服务
 gulp.task('server', () => {
     return gulp.src('./src')
     .pipe(server({
         port: 8888,
        //  open: true, // 自动打开浏览器
        //  fallback: 'main.html', // 指定默认找的首页页面
         livereload: true, // 热更新   更新前端的  慢
         middleware: [
            bodyParser.urlencoded(), 
            (req, res, next) => {
            let oUrl = url.parse(req.url);
            let pathname = oUrl.pathname;
            pathname = pathname == '/' ? 'index.html' : pathname;
            let extname = path.extname(pathname);
            if (extname) { // 文件
                if (extname == '.ico') {
                    res.end('123');
                    return;
                }
                let con = fs.readFileSync(path.join(__dirname, 'src', pathname))
                res.end(con)
            } else { // 接口
                switch(pathname) {
                    case '/post':
                        console.log(req.body)
                    break;
                }
            }
         }
        ]
     }))
 })

