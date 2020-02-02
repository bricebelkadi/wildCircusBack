"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var abstract_controller_1 = require("../core/abstract.controller");
var circus_service_1 = require("../services/circus.service");
/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
exports.CircusController = function (app) {
    var service = new circus_service_1.CircusService();
    var router = express_1.Router();
    router = abstract_controller_1.commonController(service, router);
    app.use('/circus', router);
};
