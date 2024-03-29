var express = require('express');
var router = express.Router();
var usersCtrl = require('../../controllers/users');

/*---------- Public Routers ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ---------*/

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({
        msg: 'Not Authorized'
    });
}


module.exports = router;