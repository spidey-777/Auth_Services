const express = require('express');
const {AuthValidaterRequest} = require('../../middlewares/index')

const UserContoller = require('../../controllers/user_controller');

const router = express.Router();


router.post('/signup',
    AuthValidaterRequest.validateUserAuth,
    UserContoller.create
)

router.post('/signin',
    AuthValidaterRequest.validateUserAuth,
    UserContoller.signIn
);


router.get('/isAuthenticated',
    UserContoller.isAuthenticated
)


module.exports = router;