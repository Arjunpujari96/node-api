const express = require('express')
const router = express.Router()
const Joi = require('joi');
const lodash = require('lodash');

// Request Middlewares
const {
    jwtAuth
} = require('../../middlewares/auth');

// Controller functions
const {
    register,
    login,
    changePassword
} = require('../../controllers/user/user.controller')

const {
    validateParams
} = require('../../middlewares/validators');





router.post(
    '/register',validateParams({

        email: Joi.string().email({ tlds: { allow: false } }),
        password: Joi.string().min(6).trim().required(),
        mobile:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        profile_picture:Joi.string().trim(),
        user_type:Joi.string().valid('2', '3'),
        device_type:Joi.string().valid('1', '2'),
        device_token:Joi.string().trim(),
    
        }),
    register
);

router.post(
    '/login',
    validateParams({

        email: Joi.string().email({ tlds: { allow: false } }),
        password: Joi.string().length(6).required()
    
        }),
    login
);

router.post(
    '/uploadProfilePicture',
       validateParams({
        user_id: Joi.integer().required(),
        profile_url: Joi.string().required()
        }),
    login
);

router.post(
    '/sendOtp',
       validateParams({
        email: Joi.string().email({ tlds: { allow: false } })
        }),
    sendOtp
);


router.post(
    '/validateOtp',
       validateParams({
        otp: Joi.integer().required(),
        email: Joi.string().email({ tlds: { allow: false } })
        }),
    validateOtp
);

router.post(
    '/changePassword',
    jwtAuth,
    changePassword
)


module.exports = router
