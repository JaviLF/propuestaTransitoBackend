const { Evaluador } = require("../models");
//const InscritoDTO = require("../dtos/inscritodto");

const evaluadorService = {
  getAllEvaluadores: async (request, response) => {
    const evaluadores = await Evaluador.findAll();
    return { response: evaluadores.map((x) => x.dataValues) };
  },
  getEvaluadorById: async evaluadorId => {
    let evaluador = await Evaluador.findByPk(evaluadorId, {});
    return { response: evaluador };
  },
  registerEvaluador: async (request, response) =>{
    const newEvaluador = await Evaluador.create(request.body);
    return { response: newEvaluador };
  },
};

module.exports = evaluadorService;