var express = require("express");
var router = express.Router();
var itemsCtrl = require("../../controllers/items");

/* GET /api/items */
router.post("/", itemsCtrl.create);
router.get("/:userId", itemsCtrl.index);
router.delete("/:id", itemsCtrl.delete);
router.put("/:id", itemsCtrl.update);
router.get("/:id", itemsCtrl.show);

module.exports = router;