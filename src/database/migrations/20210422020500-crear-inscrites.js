"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Inscritos", {
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
      categoriaExamen: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tipoExamen: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fechaUltimoExamen: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      edad: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Inscritos");
  },
};
