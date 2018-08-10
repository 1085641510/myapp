const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const path = require('path');

app.use(bodyParser());

var projectDir = path.resolve('D:/project/wangpengqiang_iaf/iaf_om_console');
app.use(koaStatic(projectDir));

const router = require('./router.js');

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
