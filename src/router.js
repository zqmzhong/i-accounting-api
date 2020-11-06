const router = require('koa-router')();
const healthService = require('./service/health-check');
const billService = require('./service/bill');

router.get(`/index`, healthService.index);
router.get(`/health`, healthService.health);

router.get('/bills', billService.getAllBills);
router.get('/bill/:id', billService.getBillById);
router.post('/bill', billService.createBill);

module.exports = router;
