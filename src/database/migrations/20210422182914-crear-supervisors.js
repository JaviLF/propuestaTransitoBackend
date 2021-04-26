'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Supervisors", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombreCompleto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellidoPaterno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellidoMaterno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ci: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Supervisors");
  }
};
