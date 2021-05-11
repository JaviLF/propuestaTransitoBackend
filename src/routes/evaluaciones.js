"use strict";
const express = require("express");
const EvaluacionesService = require("../app/services/evaluacionService");
const router = express.Router();

router.get("", async (request, response) => {
  const allEvaluacion = await EvaluacionesService.getAllEvaluaciones(
    request,
    response
  );
  response.send(allEvaluacion);
});

router.get("/:id", async (request, response) => {
  const evaluacion = await EvaluacionesService.getEvaluacionById(
    request.params.id
  );
  response.send(evaluacion);
});

router.post("", async (request, response) => {
  const newEvaluacion = await EvaluacionesService.registerEvaluacion(
    request,
    response
  );
  response.send(newEvaluacion);
});

module.exports = router;