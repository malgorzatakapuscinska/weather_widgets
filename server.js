var express=require('express');
var request=require('request');
var path=require('path');

var app = express();

/*app.use(express.static('build'));*/
/*app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});*/

/*app.get('/src/containers/cloudly.png', function(req, res){
  console.log(__dirname);
  res.sendFile(__dirname + '/src/containers/cloudly.png')
});*/

app.get('/api/:cityname', function(req, res){
  console.log("request from " + request.param.cityname);
});



var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
  console.log(port);
  console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);
});
