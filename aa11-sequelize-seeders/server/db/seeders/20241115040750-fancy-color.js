'use strict';
const { Colors } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Colors.bulkCreate(
      {
        name: "perywinkle",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "veridian",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
