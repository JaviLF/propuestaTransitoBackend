"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Evaluadors", [
      {
        ci: "8788490",
        nombreCompleto: "Luis Daniel",
        apellidoPaterno: "Choque",
        apellidoMaterno: "Garcia",
        gradoPolicial: "Sbtte",
        fechaAlta: '2021-04-23',
        fechaBaja: '2021-04-23'
      },
      {
        ci: "8969886",
        nombreCompleto: "Juan Luis",
        apellidoPaterno: "Mendoza",
        apellidoMaterno: "Ramirez",
        gradoPolicial: "Cnl. DESP",
        fechaAlta: '2021-04-23',
        fechaBaja: '2021-04-23',
      },
      {
        ci: "6987225",
        nombreCompleto: "Daniela",
        apellidoPaterno: "Rodriguez",
        apellidoMaterno: "Galarza",
        gradoPolicial: "Cbo",
        fechaAlta: '2021-04-23',
        fechaBaja: '2021-04-23',
      },
      {
        ci: "8807955",
        nombreCompleto: "Juana Maria",
        apellidoPaterno: "Sanchez",
        apellidoMaterno: "Castillo",
        gradoPolicial: "Pol",
        fechaAlta: '2021-04-23',
        fechaBaja: '2021-04-23',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Evaluadors", null, {});
  },
};
