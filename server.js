var express=require('express');
var https=require('https');
var path=require('path');

var app = express();

/*app.use(express.static('build'));*/
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

/*app.get('/cloudly.png', function(req, res){
  res.sendFile(__dirname + '/src/containers/cloudly.png')
});*/



var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
  console.log(port);
  console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);
});
