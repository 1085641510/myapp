const Router = require('koa-router');
const router = new Router();

const login = require('./router/login.js');

router.use(login.routes());

module.exports = router;