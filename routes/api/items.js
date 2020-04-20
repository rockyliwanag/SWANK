var express = require("express");
var router = express.Router();
var itemsCtrl = require("../../controllers/items");

/*---------- Public Routers ----------*/
router.get("/", itemsCtrl.index);

/*---------- Protected Routes ---------*/
router.use(require('../../config/auth'));
/* GET /api/items */
router.post("/", checkAuth, itemsCtrl.create);

router.delete("/:id", checkAuth, itemsCtrl.delete);
router.put("/:id", checkAuth, itemsCtrl.update);
router.get("/:id", checkAuth, itemsCtrl.show);

/*---------- Helper Functions ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({
        msg: 'Not Authorized'
    });
}

module.exports = router;