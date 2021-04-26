"use strict";
const express = require("express");
const ExamenesService = require("../app/services/examService");
const router = express.Router();

router.get("", async (request, response) => {
  const allExamenes = await ExamenesService.getAllExamenes(
    request,
    response
  );
  response.send(allExamenes);
});

router.get("/:id", async (request, response) => {
  const inscrito = await ExamenesService.getExamenById(
    request.params.id
  );
  response.send(inscrito);
});

router.post("", async (request, response) => {
  const newExamen = await ExamenesService.registerExamen(
    request,
    response
  );
  response.send(newExamen);
});

module.exports = router;