const Router = require('koa-router');
const router = new Router();
const debug = require('../config/debugConfig');
const routeDebug = debug('app:route');

router.get('/scc/webscan/v1/087090c648064e0a8d8c243780ad91bf/vssscan/users/mask', function (ctx, next) {
    routeDebug(`${ctx.request.method} ${ctx.request.url}`)
    ctx.body = { "is_open": false }
})

router.get('/scc/webscan/v1/087090c648064e0a8d8c243780ad91bf/webscan/monitor/inform', function (ctx, next) {
    routeDebug(`${ctx.request.method} ${ctx.request.url}`)
    console.log(ctx.request.body)
    ctx.body = {
        "telephone": "",
        "sms_mode": 2,
        "email": "12131231515@qq.com",
        "email_mode": 1
    }
})

module.exports = router;