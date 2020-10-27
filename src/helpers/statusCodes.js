/** 
 * @description All the Error code that needed to be sent to User
 * @type {Object}
*/
module.exports.ErrorCode = Object.freeze({
    'NO_CONTENT_FOUND':204,
    'BAD_REQUEST': 400,
    'INVALID_CREDENTIAL':401,
    'EMAIL_NOT_FOUND':402,
    'FORBIDDEN':403,
    'NOT_FOUND':404,
    'VALIDATION_FAILED':422,
    'UNAUTHORIZED': 499,
    'SOMETHING_WRONG': 500,
    'INTERNAL_ERROR': 501,
    'ALREADY_EXIST':409 
});

/** 
 * @description All the Success code that needed to be sent to User
 * @type {Object}
*/
module.exports.SuccessCode = Object.freeze({
    'SUCCESS': 200,
    'SUCCESSFULLY_CREATED':201
});