'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      otp: {
        type: Sequelize.STRING
      },
      otp_expires: {
        type: Sequelize.DATE
      },
      isVerified: {
        type: Sequelize.BOOLEAN
      },
      role: {
        type: Sequelize.STRING,
        validate: {
          isIn: [['isOwner', 'isAdmin', 'isRegular']]
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};