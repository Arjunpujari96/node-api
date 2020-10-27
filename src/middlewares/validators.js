const Joi = require('joi');
const lodash = require('lodash');


/**
 * @function ValidateParams
 * @param {object} req
 * @description  Validate all request parameter
 * @author Arjun Singh Pujari
 */

const validateParams = function (paramSchema) {
    return async (req, res, next) => {
        const schema = Joi.object().keys(paramSchema);
        const paramSchemaKeys = Object.keys(paramSchema);
        let requestParamObj = {};
        for (let key of paramSchemaKeys){
            requestParamObj[key] = lodash.get(req.body, key);
        }
        try{
           await schema.validateAsync(requestParamObj);
          
        } catch (err) {
            return response(res, false, ErrorCode.BAD_REQUEST, err.name,err.message);
        }
        next();
    }
};


module.exports = {
    validateParams: validateParams
};