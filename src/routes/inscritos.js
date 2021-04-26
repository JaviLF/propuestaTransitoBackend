"use strict";
const express = require("express");
const SignedUpStudentsService = require("../app/services/signedUpStudentService");
const router = express.Router();
const signedUpStudentService = require("../app/services/signedUpStudentService");

router.get("", async (request, response) => {
  const allSignedUpStudents = await SignedUpStudentsService.getAllSignedUpStudents(
    request,
    response
  );
  response.send(allSignedUpStudents);
});

router.get("/:id", async (request, response) => {
  const inscrito = await SignedUpStudentsService.getSignedUpStudetById(
    request.params.id
  );
  response.send(inscrito);
});

router.post("", async (request, response) => {
  const newSignedUp = await SignedUpStudentsService.registerSignedUpStudent(
    request,
    response
  );
  response.send(newSignedUp);
});

module.exports = router;
