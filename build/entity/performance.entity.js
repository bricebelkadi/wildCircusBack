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
var show_entity_1 = require("./show.entity");
var specialty_entity_1 = require("./specialty.entity");
var Performance = /** @class */ (function () {
    function Performance() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: 'int' }),
        __metadata("design:type", Number)
    ], Performance.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return artist_entity_1.Artist; }, function (artist) { return artist.performances; }),
        __metadata("design:type", Array)
    ], Performance.prototype, "artists", void 0);
    __decorate([
        typeorm_1.Column({ type: 'int', nullable: true, default: 0 }),
        __metadata("design:type", Number)
    ], Performance.prototype, "startTime", void 0);
    __decorate([
        typeorm_1.Column({ type: 'int', nullable: true, default: 0 }),
        __metadata("design:type", Number)
    ], Performance.prototype, "duration", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return show_entity_1.Show; }, function (show) { return show.performances; }),
        __metadata("design:type", show_entity_1.Show)
    ], Performance.prototype, "show", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return specialty_entity_1.Specialty; }, function (specialty) { return specialty.performances; }),
        __metadata("design:type", specialty_entity_1.Specialty)
    ], Performance.prototype, "specialty", void 0);
    Performance = __decorate([
        typeorm_1.Entity('performance')
    ], Performance);
    return Performance;
}());
exports.Performance = Performance;
