const Router = require('koa-router');
const router = new Router();
const debug = require('../config/debugConfig');
const routeDebug = debug('app:route');

router.post('/scc/webscan/v1/087090c648064e0a8d8c243780ad91bf/webscan/sendMessage',function(ctx,next){
    routeDebug(`${ctx.request.method} ${ctx.request.url}`);
   console.log(ctx.request.body)
    ctx.body = "this is index"
})

module.exports = router;