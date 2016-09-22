var axios = require('axios');

var id = "9a89607ff96105f0de99486a36eac2c6";
var parm = "&type=accurate&APPID=" + id;
var units = "&units=metric";

function getCityWeather(city) {
	var api = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + parm + units;
	return axios.get(api);
}

function getLongRangeWeather(city) {
	var api = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + parm + '&cnt=5' + units;	
	return axios.get(api);
}

function getDateStamp(daysFromToday) {
	var yourDate = new Date(new Date().getTime() + ((daysFromToday * 24) * 60 * 60 * 1000 ));
	return yourDate;
}

var helpers = {
	getForecast: function (city) {
		return getCityWeather(city);
	},
	getLongRangeForecast: function(city) {
		return getLongRangeWeather(city);
	}
}

module.exports = helpers;

// https://home.openweathermap.org/api_keys
// 
// 9a89607ff96105f0de99486a36eac2c6

// Current Weather
// http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

// 5 Day Forecast
// http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5