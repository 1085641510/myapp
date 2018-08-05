const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


const router = require('./router.js');

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
