'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Evaluacions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idInscrito: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      idEvaluador: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      notaTeorico: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      notaPractico: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sePresento: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Evaluacions");
  }
};
