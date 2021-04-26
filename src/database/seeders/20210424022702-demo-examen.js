'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Examens", [
      {
        tipo: "Transporte pesado",
        fecha: '2021-04-23',
      },
      {
        tipo: "Transporte público",
        fecha: '2021-04-23',
      },
      {
        tipo: "Transporte pesado",
        fecha: '2021-04-23',
      },
      {
        tipo: "Transporte privado",
        fecha: '2021-04-23',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Examens", null, {});
  }
};
