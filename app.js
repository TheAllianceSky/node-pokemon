/**
 * Module dependencies.
 */

var express = require('express'),
    engine = require('ejs-locals'),
    http = require('http'),
    path = require('path');
           var io = require('socket.io');

var app = express();
app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.engine('ejs', engine);
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('dell'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res){
    res.render('login', {
      locals: {
        page: {
          title: "Concept : Pokemon HTML5/CSS3/NodeJS Game : please login"
          
        }
      }
    });
});
app.get('/game', function(req, res){
    res.render('game', {
      locals: {
        page: {
          title: "POKEMON HTML5/JS/CSS/NODEJS EXAMPLE"
        }
      }
    });
});

http.createServer(app).listen(process.env.PORT || 3000, function() {
  console.log("Express server listening on port " + app.get('port'));
});
