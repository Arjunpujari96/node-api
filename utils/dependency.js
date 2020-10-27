let {
    apiResponse
} = require('../src/helpers/responseHandler')
global.response = apiResponse;


let {
    SuccessMessage,
    ErrorMessage
} = require('../src/helpers/messages')
global.SuccessMessage = SuccessMessage;
global.ErrorMessage = ErrorMessage;


let {
    SuccessCode,
    ErrorCode
} = require('../src/helpers/statusCodes')
global.SuccessCode = SuccessCode;
global.ErrorCode = ErrorCode;