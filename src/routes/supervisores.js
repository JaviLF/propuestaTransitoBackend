"use strict";
const express = require("express");
const SupervisoresService = require("../app/services/supervisorService");
const router = express.Router();

router.get("", async (request, response) => {
  const allSupervisores = await SupervisoresService.getAllSupervisores(
    request,
    response
  );
  response.send(allSupervisores);
});

router.get("/:id", async (request, response) => {
  const inscrito = await SupervisoresService.getSupervisorById(
    request.params.id
  );
  response.send(inscrito);
});

router.post("", async (request, response) => {
  const newSupervisor = await SupervisoresService.registerSupervisor(
    request,
    response
  );
  response.send(newSupervisor);
});

module.exports = router;