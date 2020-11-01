const Koa = require('koa');
const KoaRouter = require('koa-router');
const sendFile = require('koa-sendfile');
const path = require('path');
const serverless = require('serverless-http');

const app = new Koa()
const router = new KoaRouter()

// Routes
router.get(`/index`, async (ctx) => {
  await sendFile(ctx, path.join(__dirname, 'index.html'))
})

router.get(`/hello`, (ctx) => {
  ctx.body = "Hello World!";
})

app.use(router.allowedMethods()).use(router.routes());

// don't forget to export!
module.exports.app = serverless(app);
