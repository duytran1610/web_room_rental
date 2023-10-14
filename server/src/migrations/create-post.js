'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      labelCode: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      attributeID: {
        type: Sequelize.STRING
      },
      categoryCode: {
        type: Sequelize.STRING
      },
      priceCode: {
        type: Sequelize.STRING
      },
      areaCode: {
        type: Sequelize.STRING
      },
      provinceCode: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      userID: {
        type: Sequelize.STRING
      },
      overviewID: {
        type: Sequelize.STRING
      },
      imageID: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Posts');
  }
};