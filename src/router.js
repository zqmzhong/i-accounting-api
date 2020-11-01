const router = require('koa-router')();
const healthService = require('./service/health-check');

router.get(`/index`, healthService.index);
router.get(`/health`, healthService.health);

module.exports = router;
