"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var specialty_repository_1 = require("../repository/specialty.repository");
var typeorm_1 = require("typeorm");
var abstract_service_1 = require("../core/abstract.service");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
var SpecialtyService = /** @class */ (function (_super) {
    __extends(SpecialtyService, _super);
    function SpecialtyService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.repository = typeorm_1.getCustomRepository(specialty_repository_1.SpecialtyRepository);
        return _this;
    }
    return SpecialtyService;
}(abstract_service_1.AbstractService));
exports.SpecialtyService = SpecialtyService;
