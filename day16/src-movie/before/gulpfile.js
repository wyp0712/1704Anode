const gulp = require('gulp')
const webserver = require('gulp-webserver')


gulp.task('webserver', () => {
  return gulp.src('./src')
  .pipe(webserver({
    port: 8888,
    livereload: true,
    open:true,
    proxies: [{
      source: '/api',
      target: 'http://localhost:9999'
    }]
  }))
})

gulp.watch('webserver')