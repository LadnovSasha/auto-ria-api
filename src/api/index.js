const Router = require('koa-router');
const dictionaries = require('./dictionaries');
const { cache } = require('../middlewares');
const router = new Router({ prefix: '/api'});

router
	.use(cache.getCached)
	.get('/search', dictionaries.search)
	.get('/info', dictionaries.info)
	.get('/categories', dictionaries.categories)
	.get('/categories/:categoryId/bodystyles', dictionaries.bodystyles)
	.get('/categories/:categoryId/bodystyles/_group', dictionaries.bodyGroups)
	.get('/categories/:categoryId/brands', dictionaries.brands)
	.get('/categories/:categoryId/brands/:brandId/models', dictionaries.models)
	.get('/categories/:categoryId/brands/:brandId/models/_group', dictionaries.modelGroups)
	.get('/states', dictionaries.states)
	.get('/states/:stateId/cities', dictionaries.cities)
	.get('/categories/:categoryId/gearboxes', dictionaries.gearboxes)
	.get('/categories/:categoryId/driverTypes', dictionaries.driverTypes)
	.get('/fuel', dictionaries.fuelTypes)
	.get('/categories/:categoryId/options', dictionaries.autoOptions)
	.get('/colors', dictionaries.colors)
	.get('/manufacturer', dictionaries.manufacturer_country)
	.use(cache.saveToCache)

module.exports = router;
