require('dotenv').config();
const Koa = require('koa');
const middlewares = require('./middlewares');
const router = require('./api');

const app = new Koa();

app.use(middlewares.error);
app.use(middlewares.cache);
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(process.env.PORT);
