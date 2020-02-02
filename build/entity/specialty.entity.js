"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var artist_entity_1 = require("./artist.entity");
var performance_entity_1 = require("./performance.entity");
var Specialty = /** @class */ (function () {
    function Specialty() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: 'int' }),
        __metadata("design:type", Number)
    ], Specialty.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 25, nullable: false }),
        __metadata("design:type", String)
    ], Specialty.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({ type: 'text', nullable: false }),
        __metadata("design:type", String)
    ], Specialty.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255, nullable: true }),
        __metadata("design:type", String)
    ], Specialty.prototype, "picture", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return artist_entity_1.Artist; }, function (artist) { return artist.specialty; }),
        __metadata("design:type", Array)
    ], Specialty.prototype, "artists", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return performance_entity_1.Performance; }, function (performance) { return performance.specialty; }),
        __metadata("design:type", Array)
    ], Specialty.prototype, "performances", void 0);
    Specialty = __decorate([
        typeorm_1.Entity('specialty')
    ], Specialty);
    return Specialty;
}());
exports.Specialty = Specialty;
