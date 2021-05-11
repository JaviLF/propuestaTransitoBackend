"use strict";
const express = require("express");
const EvaluadoresService = require("../app/services/evaluadorService");
const router = express.Router();

router.get("", async (request, response) => {
  const allEvaluadores = await EvaluadoresService.getAllEvaluadores(
    request,
    response
  );
  response.send(allEvaluadores);
});

router.get("/:id", async (request, response) => {
  const evaluador = await EvaluadoresService.getEvaluadorById(
    request.params.id
  );
  response.send(evaluador);
});

router.post("", async (request, response) => {
  const newEvaluador = await EvaluadoresService.registerEvaluador(
    request,
    response
  );
  response.send(newEvaluador);
});

module.exports = router;