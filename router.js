const Router = require('koa-router');
const router = new Router();

const login = require('./router/login.js');
const index = require('./router/index.js');


router.use(login.routes());
router.use(index.routes());
module.exports = router;