const request = require('request');
const DARKSKY_KEY = process.env.DARKSKY_KEY;

const forecast = (latitude, longitude, callback) => {
	const url = "https://api.darksky.net/forecast/" + DARKSKY_KEY + "/" + latitude + "," + longitude;

	request({ url: url, json: true }, (error, response) => {
		// Low-level OS error (eg, no internet or API down)
		if (error) {
			callback('Unable to connect to weather service', undefined);
		} else if (response.body.error) {
			callback('Unable to find location', undefined);
		} else {
			callback(undefined, 
				response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.'
			)
		}
	})
}

module.exports = forecast;