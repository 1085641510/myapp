const Router = require('koa-router');
const router = new Router();

router.get('/login',function(ctx,next){
    ctx.body = "hello"
})

module.exports = router;