// "use strict";
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const Promise = require('bluebird')
const Joi = require('joi');
const lodash = require('lodash');
const {
    validateParams
} = require('../../middlewares/validators');


/**
 * @function signup
 * @param {object} req
 * @param {object} res
 * @description  User Registration Function
 * @author Arjun Singh Pujari
 */

 exports.register = async (req,res) => {
     try{
        let reqData = req.body;
        var isexist = await User.isUserExist(req.body);
        if(isexist && isexist.email == reqData.email){
            response(res, false, ErrorCode.ALREADY_EXIST, {}, "Email address has already been taken", '');
        }
        else if(isexist && isexist.mobile == reqData.mobile){
            response(res, false, ErrorCode.ALREADY_EXIST, {}, "Mobile number has already been taken", '');
        }else{
           var user_details = await User.createUser(reqData)
                if(user_details){
                    var token = await User.generateAuthToken(user_details)._rejectionHandler0
                    var updatetoken = await User.updateTokenById(user_details.dataValues.id,token)      
                    if(updatetoken){
                        response(res, true, SuccessCode.SUCCESSFULLY_CREATED, {user_details,token}, 'User registered successfully');
                    }
                }
        }
     }catch(err){
        if(user_details) await User.deleteUserById(user_details.dataValues.id)
        response(res, false, ErrorCode.INTERNAL_ERROR, err, "User registration failed");
     }
 }


 

 /**
 * @function login
 * @param {object} req
 * @param {object} res
 * @description  User Login Function
 * @author Arjun Singh Pujari
 */
 
 exports.login =  async (req,res) => {
    try{
        let reqData = req.body;
        var user_details = await User.getUserByEmail(reqData.email)
        if(user_details.dataValues){
                var result = await bcrypt.compare(reqData.password, user_details.dataValues.password)
               
                if(result){
                    var token = await User.generateAuthToken(user_details)
                    var updatetoken = await User.updateTokenById(user_details.dataValues.id,token)     
                    if(updatetoken){
                        response(res, true, SuccessCode.SUCCESS, {user_details,token}, 'User Login successfully');
                    }else{
                        response(res, false, ErrorCode.INTERNAL_ERROR, {}, "Account Login Failed");
                    }
                } else {
                    response(res, true, ErrorCode.INVALID_CREDENTIAL, {}, ErrorMessage.WRONG_PASSWORD);
                }
        }else{
            response(res, false, ErrorCode.INVALID_CREDENTIAL, {}, "Account not exist", '');
        }
    }catch(err){
        console.log(err)
        response(res, false, ErrorCode.INTERNAL_ERROR, err, "Account Login Failed");
    }
 }

/**
 * @function updatePassword
 * @param {object} req
 * @param {object} res
 * @description  User account password udpate function
 * @author Arjun Singh Pujari
 */

 exports.changePassword = async(req,res) => {
        console.log('middleware add successfully')
 }