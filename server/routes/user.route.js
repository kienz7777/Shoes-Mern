const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

// Validation
const {
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid');

// Load controller
router.post('/register',controller.registerController);
router.post('/activation',controller.activationController);
router.post('/login',validLogin,controller.loginController);
router.put('/password/forget',forgotPasswordValidator,controller.forgetController);
router.put('/password/reset',resetPasswordValidator,controller.resetController);
router.put('/password/change',controller.changePasswordController);

// Google and Facebook Login
router.post('/googlelogin', controller.googleController);
router.post('/facebooklogin',controller.facebookController);

module.exports = router;

