var express=require('express');
var request=require('request');
var rp=require('request-promise');
const uuid=require('uuid');
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

app.get('/api/:id/:cityname', function(req, res){
  console.log("request from " + req.params.cityname);
  console.log("widget id is " + req.params.id);
  let cityData={}; // stores data of city with id=req.params.id
  let cityName = req.params.cityname;
  let city = req.params.cityname;
  cityData.id = req.params.id;
  cityData.name=cityName;
  console.log(cityData);

  let options = {
    uri: 'http://worldclockapi.com/api/json/cet/now?callback=mycallback',
    json: true
  };

  rp(options)
    .then (function(body) {
      console.log(body.currentDateTime);
      cityData.date = body.currentDateTime.slice(0,10);
      cityData.time = body.currentDateTime.slice(11, 16);
      console.log(cityData);

    })
    .catch (function(error) {
      console.log(error);
    });


  console.log(city);
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
    const APIquery = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}")and u="c"`;
    const URL = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
      APIquery
    )}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
    let options1 = {
      uri: URL ,
      json: true
    }


   rp(options1)
      .then(function(response){
        console.log("the body is");
        console.log(response.query.results.channel.item);
        cityData.name = response.query.results.channel.location.city;
        cityData.country = response.query.results.channel.location.country;
        cityData.humidity = response.query.results.channel.item.condition.text;
        cityData.temperature = response.query.results.channel.item.condition.temp;
        cityData.url = response.query.results.channel.item.link.slice(63,115);
        console.log(cityData);
        res.send(cityData);
      })
      .catch(function(error){
        console.log(error);
      });
      console.log("Value of citydata before end of app.get");
      console.log(cityData);
  });



var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
  console.log(port);
  console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);
});
