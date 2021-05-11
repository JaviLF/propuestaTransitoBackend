const { Evaluacion } = require("../models");
const { Evaluador } = require("../models");
const { Inscrito } = require("../models");

const evaluacionService = {
  getAllEvaluaciones: async (request, response) => {
    const evaluaciones = await Evaluacion.findAll({
		attributes: { exclude: ["idInscrito", "idEvaluador"] },
      include: [
        {
          model: Inscrito,
          as: "inscrito"
        },
				{
          model: Evaluador,
          as: "evaluador"
        }
      ],
		});
    return { response: evaluaciones.map((x) => x.dataValues) };
  },
  getEvaluacionById: async evaluacionId => {
    let evaluacion = await Evaluacion.findByPk(evaluacionId, {
			attributes: { exclude: ["idInscrito", "idEvaluador"] },
			include: [
				{
					model: Inscrito,
					as: "inscrito"
				},
				{
					model: Evaluador,
					as: "evaluador"
				}
			],
		});
    return { response: evaluacion };
  },
  registerEvaluacion: async (request, response) =>{
    const newEvaluacion = await Evaluacion.create(request.body);
    return { response: newEvaluacion };
  },
};

module.exports = evaluacionService;