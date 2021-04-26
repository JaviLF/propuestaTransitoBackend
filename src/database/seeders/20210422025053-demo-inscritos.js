"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Inscritos", [
      {
        ci: "8788490",
        nombreCompleto: "Luis Daniel",
        apellidoPaterno: "Choque",
        apellidoMaterno: "Garcia",
        codigoInscripcion: "cbbo12542185",
        intentos: 3,
        
      },
      {
        ci: "8969886",
        nombreCompleto: "Juan Luis",
        apellidoPaterno: "Mendoza",
        apellidoMaterno: "Ramirez",
        codigoInscripcion: "cbbo68432135",
        intentos: 0,
        
      },
      {
        ci: "6987225",
        nombreCompleto: "Daniela",
        apellidoPaterno: "Rodriguez",
        apellidoMaterno: "Galarza",
        codigoInscripcion: "cbbo6561321",
        intentos: 5,
        
      },
      {
        ci: "8807955",
        nombreCompleto: "Juana Maria",
        apellidoPaterno: "Sanchez",
        apellidoMaterno: "Castillo",
        codigoInscripcion: "cbbo651646516",
        intentos: 3,
        
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Inscritos", null, {});
  },
};
