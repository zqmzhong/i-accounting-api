const Koa = require('koa');
const serverless = require('serverless-http');
const router = require('./router');

const app = new Koa();
app.use(router.routes()).use(router.allowedMethods());

module.exports.app = serverless(app);
