const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const errorHandler = require('koa-better-error-handler');
const koa404Handler = require('koa-404-handler');
const serverless = require('serverless-http');
const router = require('./router');

const app = new Koa();

// override koa's undocumented error handler
app.context.onerror = errorHandler();
// specify that this is our api
app.context.api = true;

app.use(koa404Handler);
app.use(bodyParser());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

module.exports.app = serverless(app);
