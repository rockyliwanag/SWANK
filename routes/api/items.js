var express = require("express");
var router = express.Router();
var itemsCtrl = require("../../controllers/items");

/* GET /api/items */
router.post("/", itemsCtrl.create);
router.get("/", itemsCtrl.index);
router.delete("/:id", itemsCtrl.delete);

module.exports = router;
