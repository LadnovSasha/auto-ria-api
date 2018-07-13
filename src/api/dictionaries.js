const request = require('./request');

function repaceCaptures(path, captures) {
	if (!captures)
		return path;

	const values = [].concat(captures);
	return path.replace(/:[a-z, 0-9]+/gi, () => values.splice(0, 1))
}

async function rawResponse(path, ctx, next) {
	let uri = repaceCaptures(path, ctx.captures);
	const response = await request(uri, { qs: ctx.query });
	ctx.body = response;

	return next();
}

module.exports = {
	states: async (...args) => await rawResponse('/states', ...args),
	search: async (...args) => await rawResponse('/search', ...args),
	info: async (...args) => await rawResponse('/info', ...args),
	cities: async (...args) => await rawResponse('/states/:id/cities', ...args),
	fuelTypes: async (...args) => await rawResponse('/type', ...args),
	colors: async (...args) => await rawResponse('/colors', ...args),
	manufacturer_country: async (...args) => await rawResponse('/countries', ...args),
	categories: async (...args) => await rawResponse('/categories', ...args),
	bodystyles: async (...args) => await rawResponse('/categories/:id/bodystyles', ...args),
	bodyGroups: async (...args) => await rawResponse('/categories/:id/bodystyles/_group', ...args),
	brands: async (...args) => await rawResponse('/categories/:id/marks', ...args),
	models: async (...args) => await rawResponse('/categories/:id/marks/:id/models', ...args),
	modelGroups: async (...args) => await rawResponse('/categories/:id/marks/:id/models?_group', ...args),
	gearboxes: async (...args) => await rawResponse('/categories/:id/gearboxes', ...args),
	driverTypes: async (...args) => await rawResponse('/categories/:id/driverTypes', ...args),
	autoOptions: async (...args) => await rawResponse('/categories/:id/auto_options', ...args),
}
