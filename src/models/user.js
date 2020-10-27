const { Sequelize, Model, DataTypes } = require("sequelize");
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Promise = require('bluebird')
const Op = Sequelize.Op

const sequelize = require('../database/connection');


const User = sequelize.define("user", {
    name: DataTypes.TEXT,
    email: {
      type: DataTypes.STRING,
      unique: true,
      required:true,
      trim:true,
      lovercase:true,
      allowNull: false,
      validator(value){
        if(!validator.isEmail(value)){
            throw new Error('Email is invalid')
        }
      }
    },
    mobile:{
      type: DataTypes.STRING,
      unique: true,
      required:false,
      allowNull:true
    },
    password:{
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i,
      required:true
    },
    is_active:{
      type: DataTypes.STRING,
      required:false,
    },
    user_type:{
      type: DataTypes.STRING,
      required:true
    },
    profile_picture:{
      type: DataTypes.STRING,
      required:false,
      allowNull:true
    },
    provider:{
      type: DataTypes.STRING,
      required:false,
      allowNull:true
    },
    provider_id:{
      type: DataTypes.STRING,
      required:false,
      allowNull:true
    },
    apple_id:{
      type: DataTypes.STRING,
      required:false,
      trim:true,
      allowNull:true
    },
    access_token:{
      type: DataTypes.STRING,
      required:false,
      trim:true,
      allowNull:true
    },
    device_type:{
      type: DataTypes.STRING,
      required:false,
      trim:true,
      allowNull:true
    },
    device_token:{
      type: DataTypes.STRING,
      required:false,
      trim:true,
      allowNull:true
    } 
},{
  timestamps:true,
});


User.getUserByEmail = async(email) => {
  return new Promise(function(resolve,reject) {   
      var user = User.findOne({
        where: {
          email: email
        },
        attributes: { exclude: ['access_token','createdAt','updatedAt','user_type'] }
      })
     if(user) resolve(user)
     reject(user)
  });
}


User.getUserByMobile = async(mobile) => {
  return new Promise(function(resolve) {   
      var user = User.findOne({
        where: {
          mobile: mobile
        }
      })
      resolve(user);
  });
}


User.createUser = async(userObj) => {
  var hashedPassword =  await bcrypt.hash(userObj.password, 8);
  return new Promise(function(resolve,reject) {
  var user =  User.create({
    name: userObj.name ,
    email: userObj.email, 
    mobile: userObj.mobile ,
    password: hashedPassword,
    user_type: userObj.user_type,
    profile_picture: userObj.profile_picture,
    device_type:userObj.device_type ,
    device_token:userObj.device_token
  })
  if(user) resolve(user);
     reject(err)
  })     
}


User.generateAuthToken = function(userObj) {
  return new Promise(function(resolve,reject) {
      let tokenData = { 
        id: userObj.id, name:userObj.name, email:userObj.email, mobile:userObj.mobile,timeStamp: Date.now()
      }
      var token = jwt.sign(tokenData, process.env.JWT_SECRET, {
          expiresIn: '1d'
      })
     if(token) resolve(token);
     reject(err)
  });
}

User.isUserExist = function(userObj) {
  return new Promise(function(resolve) {   
    var user =  User.findOne({
        where: {
          [Op.or]: [{ mobile: userObj.mobile }, { email: userObj.email }]
        }
      })
      resolve(user);
  });
}

User.updateTokenById = async (id,token) => {
  return new Promise(function(resolve,reject) { 
    User.update({ 
      access_token: token
    }, {
      where: {id: id}
    }).then((result) =>{
      resolve(result[0])
    }).catch((err) => {
      reject (err)
    })
  })
}

User.deleteUserById = async (id) => {
  return new Promise(function(resolve,reject) {   
    var deleteUser =  User.destroy({ 
      where: {id: id}
    })
     if(deleteUser) resolve(deleteUser)
     reject(err)
  });
}


module.exports = User

