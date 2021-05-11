"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Evaluacions", [
      {
        idInscrito: 1,
        idEvaluador: 1,
        fecha: '2021-04-23',
        notaTeorico: 5,
        notaPractico: 6,
        sePresento: true
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Evaluacions", null, {});
  },
};