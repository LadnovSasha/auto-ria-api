const { getCache, setCache } = require('../redis_client');
const crypto = require('crypto');
const debug = require('debug')('http');

function createHash(value) {
	return crypto.createHash('md5').update(value).digest('hex');
}

module.exports = async (ctx, next) => {
	ctx.state.hashKey = createHash(ctx.req.url);
	const data = await getCache(ctx.state.hashKey);

	if (data) {
		debug('returning cached value');
		ctx.body = data;
	} else {
		await next();
	}
}
