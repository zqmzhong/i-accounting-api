const Koa = require('koa');
const serverless = require('serverless-http');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./router');

const app = new Koa();
app.use(bodyParser());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

module.exports.app = serverless(app);
