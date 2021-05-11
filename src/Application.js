"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const inscritos = require("./routes/inscritos");
const evaluadores = require("./routes/evaluadores");
const evaluaciones = require("./routes/evaluaciones");
const examenes = require("./routes/examenes");
const ROUTE_URL = "/api";

class Application {
  constructor() {
    this.express = express();
    this.setUpCors();
    this.setUpExpress();
    this.setUpRoutes();
    this.setUpNotFoundRoute();
    this.setUpPort();
  }

  setUpRoutes() {
    this.express.use(ROUTE_URL + "/inscritos", inscritos);
    this.express.use(ROUTE_URL + "/evaluadores", evaluadores);
    this.express.use(ROUTE_URL + "/evaluaciones", evaluaciones);
    this.express.use(ROUTE_URL + "/examenes", examenes);
  }

  setUpExpress() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  setUpPort() {
    this.express.set("port", process.env.PORT || 8000);
  }

  setUpNotFoundRoute() {
    this.express.use((request, response, next) => {
      const error = new Error("Resource not found");
      error.status = 404;
      next(error);
    });
  }

  setUpCors() {
    this.express.use(cors());
  }
}

module.exports = new Application().express;
