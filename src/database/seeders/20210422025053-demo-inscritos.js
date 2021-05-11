"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Inscritos", [
      {
        ci: "8788490",
        nombreCompleto: "Luis Daniel",
        apellidoPaterno: "Choque",
        apellidoMaterno: "Garcia",
        categoriaExamen: "A",
        tipoExamen: "T/P",
        fechaUltimoExamen: '2021-04-23',
        edad: 30,
        
      },
      {
        ci: "8969886",
        nombreCompleto: "Juan Luis",
        apellidoPaterno: "Mendoza",
        apellidoMaterno: "Ramirez",
        categoriaExamen: "M",
        tipoExamen: "P",
        fechaUltimoExamen: '2021-04-23',
        edad: 22,
        
      },
      {
        ci: "6987225",
        nombreCompleto: "Daniela",
        apellidoPaterno: "Rodriguez",
        apellidoMaterno: "Galarza",
        categoriaExamen: "C",
        tipoExamen: "P",
        fechaUltimoExamen: '2021-04-23',
        edad: 33,
        
      },
      {
        ci: "8807955",
        nombreCompleto: "Juana Maria",
        apellidoPaterno: "Sanchez",
        apellidoMaterno: "Castillo",
        categoriaExamen: "A",
        tipoExamen: "T/P",
        fechaUltimoExamen: '2021-04-23',
        edad: 40,
        
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Inscritos", null, {});
  },
};
