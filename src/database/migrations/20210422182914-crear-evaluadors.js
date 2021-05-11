'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Evaluadors", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ci: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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
      gradoPolicial: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fechaAlta: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fechaBaja: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Supervisors");
  }
};
