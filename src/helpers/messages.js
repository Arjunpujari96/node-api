/** 
 * @description All the Error messages that needed to be sent to Admin
 * @type {Object}
 */
module.exports.ErrorMessage = Object.freeze({

    INVALID_TOKEN: 'Session Expired',
    INTERNAL_ERROR: 'Internal Server Error',
    INVALID_CREDENTIAL: 'Invalid credential',
    SOMETHING_WRONG: 'Something went wrong!',
    EMAIL_NOT_REGISTERED: 'Email not registered',
    RESET_PASSWORD_EXPIRED: 'Token has been expire',
    WRONG_PASSWORD: 'Please enter valid password',
    UNAUTHORIZED: 'User is not authorized to Access the resource',
    BLOCK_DELETE_BY_ADMIN: "Sorry your account is Deleted/Blocked by Admin",
    SESSION_EXPIRE: 'Session Expired!',
    FIELD_VALIDATION: 'Field Validation Failed',
    EMAIL_EXIST: 'Email already exist',
    FORBIDDEN: 'User does not have access rights',
    COMPLETE_PROFILE: 'Please first complete your profile.',
    PASSWORD_NOT_MATCHED: 'Password and confirm password does not match.',
    DUPLICACY: 'Same email can not assign for multiple admin.',
    DATA_EXIST: 'Data already exist in system',
    DATA_NOT_EXIST: 'Data not exist in system',
    COURSE_NOT_REGISTERED: 'Student is not registered in this course.',
    INVALID_EMAIL: 'Invalid email',


    EMAIL: {
        required: 'Field is Required',
        validation: 'Not a Valid Email'
    },
    NAME: {
        required: 'Field is Required',
        validation: 'Not a Valid Name'
    },
    mobileNumber: {
        required: 'Field is Required',
        validation: 'Not a Valid Mobile Number'
    },
    PASSWORD: {
        required: 'Field is Required',
        validation: 'Not a Valid Password'
    },
    ID: {
        required: 'Field is Required',
        validation: 'Not a Valid Id'
    },
    GENERAL: {
        required: 'Field is Required',
        validation: 'Not a valid value'
    },

    SUPER_ADMIN: {
        'school_exist': 'School already exist.',
        'admin_exist': 'Admin already exist.'
    }
});

/** 
 * @description All the Success messages that needed to be sent to Admin
 * @type {Object}
 */
module.exports.SuccessMessage = Object.freeze({
    LOGIN_SUCCESS: 'You have successfully login.',
    LOGOUT_SUCCESS: 'You have successfully logout.',
    FORGET_SUCCESS: 'Password link has been send successfully',
    RESET_SUCCESS: 'Password changed successfully',
    USER_LIST_FETCH: 'User list fetch successfully',
    BUSINESS_REG_SUCCESS: 'Business regiter successfuly',
    BUSINESS_UPDATED_SUCCESS: 'Business details updated successfuly',
    BUSINESS_LISTING_FETCHED_SUCCESS: 'Business list fetched successfully',
    BUSINESS_DELETE_SUCCESS: 'Business deteted successfully',
    SUCCESS: 'Success',
    POST_SUCCESS: 'Data posted successfully.',
    UPDATE_POST_SUCCESS: 'Post updated successfully',
    USER_POST_DATA: 'Users posts list'
});