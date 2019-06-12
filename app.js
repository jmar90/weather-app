const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Call geocode function
geocode('Boston', (error, data) => {
	console.log('Error: ', error);
	console.log('Data: ', data);
})

// Call weather function
forecast(-71.0596, 42.3605, (error, data) => {
	console.log('Error: ', error);
	console.log('Data: ', data);
})