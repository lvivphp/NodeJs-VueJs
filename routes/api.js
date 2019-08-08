var express = require('express');
var router = express.Router();

var MainCtrl = require('../controllers/Main');
var ProductCtrl = require('../controllers/Product');

router.get('/product', ProductCtrl.index);
router.get('/product/:id', ProductCtrl.view);
router.post('/product', ProductCtrl.add);
router.put('/product/:id', ProductCtrl.edit);
router.delete('/product/:id', ProductCtrl.delete);

module.exports = router;