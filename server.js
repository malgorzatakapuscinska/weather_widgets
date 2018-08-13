var express=require('express');
var axios=require('axios');
var request=require('request');
var path=require('path');
var cors=require('cors');
var app = express();
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

/*app.use(express.static('build'));*/
/*app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});*/

/*app.get('/src/containers/cloudly.png', function(req, res){
  console.log(__dirname);
  res.sendFile(__dirname + '/src/containers/cloudly.png')
});*/

app.get('/api/:cityname', function(req, res){
  console.log("request from " + req.params.cityname);
  /*request('http://worldclockapi.com/api/json/cet/now?callback=mycallback', {json: true}, function(err, res, body){
    console.log('error:', err); // Print the error if one occurred
    console.log('statusCode:', res && res.statusCode);
    console.log('body:', body); // Print the HTML for the Google homepage.
  });*/

  let city = req.params.cityname;
  console.log(city);
  function getCity (city) {
    let cityUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22'+ city +'%22&format=json';
    request(cityUrl, function( err, res, body){
        console.log(err);
        console.log("the body is");
        console.log(body);
        /* var apiResponse = body.query.results.channel.item;
        console.log(apiResponse);*/
    });
  }
  getCity(city);
  /*axios.get('http://worldclockapi.com/api/json/cet/now?callback=mycallback', )
    .then(res, function(){console.log("to jest odpowiedź na zapytanie "+ req.params.cityname +  " " + res)})
    .catch(err => {console.log(err);})*/ //not working
    let searchtext = "(select%20woeid%20from%20geo.places(1)%20where%20text=%27"+city + "                                                                                                                                                                                                                                                                                                                                                                                                                                           %27)";
    let url = "https://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20woeid%20in%20" +  searchtext + "&format=json";

    request(url, function( err, res, body){
        console.log(err);
        console.log("the body is");
        console.log(body);
        /* var apiResponse = body.query.results.channel.item;
        console.log(apiResponse);*/
    });
   /* console.log(apiResponse);
    res.send(apiResponse);*/
  });



var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
  console.log(port);
  console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);
});
