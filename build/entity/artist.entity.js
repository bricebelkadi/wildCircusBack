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
var specialty_entity_1 = require("./specialty.entity");
var performance_entity_1 = require("./performance.entity");
var Artist = /** @class */ (function () {
    function Artist() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: 'int' }),
        __metadata("design:type", Number)
    ], Artist.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50, nullable: false }),
        __metadata("design:type", String)
    ], Artist.prototype, "firstname", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50, nullable: false }),
        __metadata("design:type", String)
    ], Artist.prototype, "lastname", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50, nullable: false }),
        __metadata("design:type", String)
    ], Artist.prototype, "artistName", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return specialty_entity_1.Specialty; }, function (specialty) { return specialty.artists; }),
        __metadata("design:type", specialty_entity_1.Specialty)
    ], Artist.prototype, "specialty", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return performance_entity_1.Performance; }, function (performance) { return performance.artists; }, { cascade: true }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Artist.prototype, "performances", void 0);
    Artist = __decorate([
        typeorm_1.Entity('artist')
    ], Artist);
    return Artist;
}());
exports.Artist = Artist;
