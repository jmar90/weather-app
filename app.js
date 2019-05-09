const request = require('request');

// url: At end, you have API key followed by latitude & longitude followed by optional query strings
const url = 'https://api.darksky.net/forecast/KEY/37.8267,-122.4233?units=si';

// 1st param = url; 2nd = fn to run. Response = data received from HTTP request (JSON format).
// The weather info is stored in body of request.
// Use json method to have request automatically parse JSON body data
request({ url: url, json: true }, (error, response) => {
	let temp = response.body.currently.temperature;
	let rain = response.body.currently.precipProbability;
	let todaySummary = response.body.daily.data[0].summary;
	console.log(todaySummary + ' It is currently ' + temp + ' degrees out. There is a ' + rain + '% chance of rain');
})