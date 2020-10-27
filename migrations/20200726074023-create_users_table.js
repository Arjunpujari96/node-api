'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull:true,
        defaultValue: null,
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      email_verified_at:{
        type: Sequelize.DATE,
        allowNull:true,
        defaultValue: null,
      },
      mobile:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      password:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      profile_picture:{
        type: Sequelize.STRING,
        allowNull:true,
        defaultValue: null,
      },
      user_type:{
        type: Sequelize.ENUM('1', '2','3'),
        allowNull:false,
        defaultValue: '2',
        comment: "1- super admin, 2 - instructor, 3 - student"
      },
      is_active:{
        type: Sequelize.ENUM('0','1'),
        allowNull:false,
        defaultValue: '1',
        comment: "0- not active, 1 - active"
      },
      device_type:{
        type: Sequelize.ENUM('1', '2'),
        allowNull:true,
        defaultValue: null,
        comment: "1- android, 2 - ios"
      },
      device_token:{
        type: Sequelize.STRING,
        allowNull:true,
        defaultValue: null,
      },
      apple_id:{
        type: Sequelize.STRING,
        allowNull:true,
        defaultValue: null,
      },
      provider:{
        type: Sequelize.STRING,
        allowNull:true,
        defaultValue: null,
      },
      provider_id:{
        type: Sequelize.STRING,
        allowNull:true,
        defaultValue: null,
      },
      access_token:{
        type: Sequelize.STRING(500),
        allowNull:true,
        defaultValue: null,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull:true,
        defaultValue: null,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
