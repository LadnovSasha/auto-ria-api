require('dotenv').config();
const Koa = require('koa');
const middlewares = require('./middlewares');
const apiRoutes = require('./api');

const app = new Koa();

app.use(middlewares.error);

app.use(apiRoutes.routes())
app.use(apiRoutes.allowedMethods())

const server = app.listen(process.env.PORT);
