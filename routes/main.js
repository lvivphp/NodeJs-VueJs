var express = require('express');
var router = express.Router();

var MainCtrl = require('../controllers/Main');
var ProductCtrl = require('../controllers/Product');

router.get('/', MainCtrl.index);

module.exports = router;