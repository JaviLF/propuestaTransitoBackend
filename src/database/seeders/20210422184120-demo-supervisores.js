"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Supervisors", [
      {
        nombreCompleto: "Luis Daniel",
        apellidoPaterno: "Choque",
        apellidoMaterno: "Garcia",
        ci: "8788490",
      },
      {
        nombreCompleto: "Juan Luis",
        apellidoPaterno: "Mendoza",
        apellidoMaterno: "Ramirez",
        ci: "8969886",
      },
      {
        nombreCompleto: "Daniela",
        apellidoPaterno: "Rodriguez",
        apellidoMaterno: "Galarza",
        ci: "6987225",
      },
      {
        nombreCompleto: "Juana Maria",
        apellidoPaterno: "Sanchez",
        apellidoMaterno: "Castillo",
        ci: "8807955",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Supervisors", null, {});
  },
};
