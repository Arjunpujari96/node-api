const { Sequelize } = require('sequelize');
require('dotenv').config()

const  sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    operatorsAliases:false
  });

  try {
    sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    throw new error()
    console.error('Unable to connect to the database: ', error);
  }

module.exports = sequelize