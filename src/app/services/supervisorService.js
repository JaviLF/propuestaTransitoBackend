const { Supervisor } = require("../models");
//const InscritoDTO = require("../dtos/inscritodto");

const supervisorService = {
  getAllSupervisores: async (request, response) => {
    const supervisores = await Supervisor.findAll();
    return { response: supervisores.map((x) => x.dataValues) };
  },
  getSupervisorById: async supervisorId => {
    let supervisor = await Supervisor.findByPk(supervisorId, {});
    return { response: supervisor };
  },
  registerSupervisor: async (request, response) =>{
    const newSupervisor = await Supervisor.create(request.body);
    return { response: newSupervisor };
  },
};

module.exports = supervisorService;