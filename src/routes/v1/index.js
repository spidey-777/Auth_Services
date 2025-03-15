const express = require('express');

const UserContoller = require('../../controllers/user_controller');

const router = express.Router();


router.post('/signup',UserContoller.create)

module.exports = router;