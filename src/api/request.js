const request = require('request-promise');
const { setCache } = require('../redis_client');
const debug = require('debug')('http');

function getOptionsWithKey(options, uri) {
	if (!options.qs)
		options.qs = {};

	Object.assign(options.qs, { api_key: process.env.API_KEY });
	return Object.assign(options, { uri });
}

module.exports = (options, { state }) => {
	let uri = options.uri || options;

	if (!uri.startsWith('http'))
		uri = process.env.BASE_URL + uri;

	debug('requesting %s', uri);

	return request(typeof options === 'string' ? uri : getOptionsWithKey(options, uri))
		.then(data => {
			setCache(state.hashKey, data);
			return data;
		});
}
