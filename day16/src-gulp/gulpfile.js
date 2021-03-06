const gulp = require('gulp')
// const concat = require('gulp-concat')
// const sass = require('gulp-sass');
// const mincss = require('gulp-clean-css');  // 压缩css
const webserver = require('gulp-webserver');
const url = require('url')
const path = require('path')
const querystring = require('querystring')

// gulp.task('sass', () => {
//   return gulp.src('./src/style/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./dist/style'))
// })

// gulp.task('concat', () => {
//   return gulp.src('./src/style/*.scss')
//     .pipe(sass())
//     .pipe(concat('all.css'))
//     .pipe(mincss())
//     .pipe(gulp.dest('./dist/style'))
// })

// gulp.task('scripts', function () {
//   return gulp.src('./src/js/*.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('./dist/js'));
// });


gulp.task('server', () => { 
  return new Promise(function(resolve, reject) {
    console.log("HTTP Server Started");
    resolve();
  });
});

gulp.task('webserver', () => {
  gulp.src('./src')
    .pipe(webserver({
      livereload:true,
      port: 8080,
      host: 'localhost',
      open: true,
      proxies: [
        {
          source: '/api', 
          target: 'http://jsonplaceholder.typicode.com'
        }
      ],
      middleware: function (req, res, next) {
        const pathname = url.parse(req.url).pathname
        if (pathname === '/address') {
          res.end('jfkdsfdsafasdfsadfaa world')
        }
        next()
      }
    }))
})

gulp.task('default', gulp.series('webserver', (done) => done()))

