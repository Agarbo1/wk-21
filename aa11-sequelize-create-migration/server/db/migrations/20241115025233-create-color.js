'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Colors', {
      id: 'Sequelize.INTEGER PRIMARY KEY',
      name: 'Sequelize.STRING'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Colors')
  }
};
