var router = require('express').Router();
var ratesCtrl = require('../controllers/rates');

router.post('/:id/rate', ratesCtrl.rate);

module.exports = router;