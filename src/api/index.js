const Router = require('koa-router');
const dictionaries = require('./dictionaries');

const router = new Router();

router.get('/api/categories', dictionaries.categories);
router.get('/api/categories/:categoryId/bodystyles', dictionaries.bodystyles);
router.get('/api/categories/:categoryId/bodystyles/_group', dictionaries.bodyGroups);
router.get('/api/categories/:categoryId/brands', dictionaries.brands);
router.get('/api/categories/:categoryId/brands/:brandId/models', dictionaries.models);
router.get('/api/categories/:categoryId/brands/:brandId/models/_group', dictionaries.modelGroups);
router.get('/api/states', dictionaries.states);
router.get('/api/states/:stateId/cities', dictionaries.cities);
router.get('/api/categories/:categoryId/gearboxes', dictionaries.gearboxes);
router.get('/api/categories/:categoryId/driverTypes', dictionaries.driverTypes);
router.get('/api/fuel', dictionaries.fuelTypes);
router.get('/api/categories/:categoryId/options', dictionaries.autoOptions);
router.get('/api/colors', dictionaries.colors);
router.get('/api/manufacturer', dictionaries.manufacturer_country);

module.exports = router;
