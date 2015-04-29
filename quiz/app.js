@@ -4,6 +4,7 @@ var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
+var partials = require('express-partials');
var routes = require('./routes/index');
@@ -13,6 +14,7 @@ var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
+app.use(partials());
// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(favicon(__dirname + '/public/favicon.ico'));
