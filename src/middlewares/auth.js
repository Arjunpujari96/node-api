const { Sequelize, Model, DataTypes } = require("sequelize");
const Op = Sequelize.Op
const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.jwtAuth = async (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization
        let headerType = String(token).split(' ')[0].trim();
        let headertoken = String(token).split(' ')[1].trim();
       
        if (headerType == 'Bearer' && headertoken != '') {

            await User.findOne({
                where: {
                 access_token: headertoken
                }
              }).then((result) =>{
                if(result.dataValues){
                  
                    jwt.verify(headertoken, process.env.JWT_SECRET, (err, decoded) => {
                      
                            if (err) {
                                response(res, true, ErrorCode.UNAUTHORIZED, {}, ErrorMessage.INVALID_TOKEN);
                            } else {
                                req.decoded = decoded;
                                req.userData = result.dataValues;
                                next();
                            }
                        })
                }
              }).catch((err) => {
                response(res, true, ErrorCode.UNAUTHORIZED, {}, ErrorMessage.INVALID_TOKEN);
              })
        } else {
            response(res, true, ErrorCode.UNAUTHORIZED, {}, ErrorMessage.INVALID_TOKEN);
        }
    } else {
        response(res, true, ErrorCode.UNAUTHORIZED, {}, ErrorMessage.INVALID_TOKEN);
    }
}