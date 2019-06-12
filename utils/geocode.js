const request = require('request');
const MAPBOX_KEY = process.env.MAPBOX_KEY;

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + MAPBOX_KEY;

	// 1st param in request = url; 2nd = function to run. 'json:true' says to automatically parse JSON body data. response = data received
		// from HTTP request (in JSON format)
	request({ url: url, json: true }, (error, response) => {
		if (error) {
			// 1st argument = error to pass to callback function; 2nd argument = data (here, it's undefined)
			callback('Unable to connect to location services!', undefined);
		} else if (response.body.features.length === 0) {
			callback('Unable to find location! Try another search.', undefined);
		} else {
			callback(undefined, {
				latitude: response.body.features[0].center[0],
				longitude: response.body.features[0].center[1],
				location: response.body.features[0].place_name
			})
		}
	})
}

module.exports = geocode;

