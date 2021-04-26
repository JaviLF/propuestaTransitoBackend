const { Inscrito } = require("../models");
const InscritoDTO = require("../dtos/inscritodto");
const { request, response } = require("../../Application");

const SignedUpStudentsService = {
  getAllSignedUpStudents: async (request, response) => {
    const singnedUpStudents = await Inscrito.findAll();
    return { response: singnedUpStudents.map((x) => x.dataValues) };
  },
  getSignedUpStudetById: async inscritoId => {
    let egresade = await Inscrito.findByPk(inscritoId, {});
    return { response: egresade };
  },
  registerSignedUpStudent: async (request, response) =>{
    const newSignedUp = await Inscrito.create(request.body);
    return { response: new InscritoDTO(newSignedUp) };
  },
};

module.exports = SignedUpStudentsService;
