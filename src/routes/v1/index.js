const express = require('express');
const { AuthValidaterRequest} = require('../../middlewares/index');


const UserController = require('../../controllers/user_controller');

const router = express.Router();

// console.log("validateUserIsAdmin type:", typeof AuthValidaterRequest.validateUserIsAdmin);
// console.log("UserController.isAdmin type:", typeof UserController.isAdmin);




router.post('/signup',
    AuthValidaterRequest.validateUserAuth,
    UserController.create
)

router.post('/signin',
    AuthValidaterRequest.validateUserAuth,
    UserController.signIn
);


router.get('/isAuthenticated',
    UserController.isAuthenticated
);
router.get(
    '/isadmin',
    AuthValidaterRequest.validateUserIsAdmin,
    UserController.isAdmin
);



module.exports = router;