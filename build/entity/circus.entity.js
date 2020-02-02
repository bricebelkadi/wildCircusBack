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
var ticket_entity_1 = require("./ticket.entity");
var show_entity_1 = require("./show.entity");
var Circus = /** @class */ (function () {
    function Circus() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: 'int' }),
        __metadata("design:type", Number)
    ], Circus.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 25, nullable: false }),
        __metadata("design:type", String)
    ], Circus.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({ type: 'decimal', nullable: true }),
        __metadata("design:type", String)
    ], Circus.prototype, "X", void 0);
    __decorate([
        typeorm_1.Column({ type: 'decimal', nullable: true }),
        __metadata("design:type", String)
    ], Circus.prototype, "Y", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255, nullable: true }),
        __metadata("design:type", String)
    ], Circus.prototype, "picture", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ticket_entity_1.Ticket; }, function (ticket) { return ticket.circus; }),
        __metadata("design:type", Array)
    ], Circus.prototype, "tickets", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return show_entity_1.Show; }, function (show) { return show.circus; }),
        __metadata("design:type", Array)
    ], Circus.prototype, "shows", void 0);
    Circus = __decorate([
        typeorm_1.Entity('circus')
    ], Circus);
    return Circus;
}());
exports.Circus = Circus;
