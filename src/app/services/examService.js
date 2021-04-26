const { Examen } = require("../models");


const examenService = {
  getAllExamenes: async (request, response) => {
    const examenes = await Examen.findAll();
    return { response: examenes.map((x) => x.dataValues) };
  },
  getExamenById: async examenId => {
    let examen = await Examen.findByPk(examenId, {});
    return { response: examen };
  },
  registerExamen: async (request, response) =>{
    const newExamen = await Examen.create(request.body);
    return { response: newExamen };
  },
};

module.exports = examenService;