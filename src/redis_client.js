const redis = require('redis');
const { promisify } = require('util');
const debug = require('debug')('redis');

const client = redis.createClient({
	host: process.env.REDIS_HOST
});

const setAsync = promisify(client.set).bind(client);
const getAsync = promisify(client.get).bind(client);

client.on('connect', () => {
	debug('connected to redis server');
});

client.on('error', (err) => {
	debug(err);
});

module.exports = {
	getCache: key => {
		debug('Requesting cached value by key %s', key);
		return getAsync(key).catch(err => client.emit('error', err))
	},
	setCache: (key, value) => {
		debug('Caching request %s', key);
		return setAsync(key, value, 'PX', process.env.CACHE_LIFETIME)
			.catch(err => client.emit('error', err))
	},
};
