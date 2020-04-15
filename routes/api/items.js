var express = require('express');
var router = express.Router();
var itemsCtrl = require('../../controllers/items');

/* GET /api/items */
router.post('/', itemsCtrl.create);


module.exports = router;