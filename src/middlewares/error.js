const debug = require('debug')('http');

module.exports = async (ctx, next) => {
	try {
		await next();
	} catch(err) {
		debug('Endpoint error: %s', ctx.req.url);
		debug(err);
		ctx.status = err.status || 500;
		ctx.body = 'Server error';
	}
}
