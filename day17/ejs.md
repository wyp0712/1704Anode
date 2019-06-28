
console.log('fdsakfaks;)

1. ejs 模版引擎使用方法转为html使用方法

var ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


2. 模版ejs 后缀使用方法， 不需要引入ejs；
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


3. 
<!-- create application/x-www-form-urlencoded parser -->
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var createError = require('http-errors');
module.exports = function error(app) {
  <!-- // catch 404 and forward to error handler -->
  app.use(function (req, res, next) {
    next(createError(404));
  });

  <!-- // error handler -->
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    <!-- // render the error page -->
    res.status(err.status || 500);
    res.render('error');
  });
};

