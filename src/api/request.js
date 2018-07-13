const request = require('request-promise');
const RequestError = require('../errors/request');
const { setCache } = require('../redis_client');
const debug = require('debug')('http');

const autoRiaRequest = request.defaults({
	timeout: 60000,
	qs: { api_key: process.env.API_KEY },
	baseUrl: process.env.BASE_URL,
});

module.exports = (uri, options) => {
	debug('requesting %s', uri || options.uri);
	return autoRiaRequest(uri, options)
		.catch(err => {
			debug('Error requesting auto ria: %s', err.message);
			throw new RequestError(400, 'Failed to perform a request');
		});
}
