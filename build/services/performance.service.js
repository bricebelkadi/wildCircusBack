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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var performance_repository_1 = require("../repository/performance.repository");
var typeorm_1 = require("typeorm");
var abstract_service_1 = require("../core/abstract.service");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
var PerformanceService = /** @class */ (function (_super) {
    __extends(PerformanceService, _super);
    function PerformanceService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.repository = typeorm_1.getCustomRepository(performance_repository_1.PerformanceRepository);
        return _this;
    }
    PerformanceService.prototype.getAllWithRelations = function () {
        return this.repository.find({ relations: ['show', 'specialty'] });
    };
    PerformanceService.prototype.getOnePerformance = function (id) {
        return this.repository.findOne(id, { relations: ['artists', 'artists.specialty', 'show', 'specialty'] });
    };
    PerformanceService.prototype.putAnArray = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, obj_1, perf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, obj_1 = obj;
                        _a.label = 1;
                    case 1:
                        if (!(_i < obj_1.length)) return [3 /*break*/, 4];
                        perf = obj_1[_i];
                        return [4 /*yield*/, this.repository.update(perf.id, perf)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PerformanceService.prototype.getPerformanceOfShow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.repository.createQueryBuilder('performance').
                        leftJoinAndSelect('performance.show', 'show').
                        leftJoinAndSelect('performance.specialty', 'specialty').
                        leftJoinAndSelect('performance.artists', 'artist').
                        where('performance.show.id = :id', { id: id }).
                        orderBy('performance.startTime', 'ASC').
                        getMany()];
            });
        });
    };
    PerformanceService.prototype.update = function (idElement, element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.update(idElement, element)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.repository.findOne(idElement, { relations: ['artists', 'artists.specialty', 'show', 'specialty'] })];
                }
            });
        });
    };
    return PerformanceService;
}(abstract_service_1.AbstractService));
exports.PerformanceService = PerformanceService;
