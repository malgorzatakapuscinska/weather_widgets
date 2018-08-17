var express=require('express');
var request=require('request');
var path=require('path');
var cors=require('cors');
var app = express();

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.get('/api/:cityname', function(req, res){
  console.log("request from " + req.params.cityname);
  /*request('http://worldclockapi.com/api/json/cet/now?callback=mycallback', {json: true}, function(err, res, body){
    console.log('error:', err); // Print the error if one occurred
    console.log('statusCode:', res && res.statusCode);
    console.log('body:', body); // Print the HTML for the Google homepage.
  });*/

  let city = req.params.cityname;
  console.log(city);
  let apiResponse = 1;
  /*function getCity (city) {
    let cityUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22'+ city +'%22&format=json';
    request(cityUrl, function( err, res, body){
        console.log(err);
        console.log("the body is");
        console.log(body);
        var apiResponse = body.query.results.channel.item;
        console.log(apiResponse);
    })
  }*/

    const APIquery = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")`;
    const URL = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
      APIquery
    )}&format=json`;

    function getWeatherData(city) {


      const APIquery = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")`;
      const URL = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
        APIquery
      )}&format=json`;
   request(URL, function( err, res, body, ){
        console.log(err);
        console.log("the body is");
        console.log(res.body);
    });

    console.log(response);
    return response;
    };

   apiResponse = getWeatherData(city);
  console.log(apiResponse);
  res.send({apiresponse: apiResponse});
  });



var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
  console.log(port);
  console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);
});
