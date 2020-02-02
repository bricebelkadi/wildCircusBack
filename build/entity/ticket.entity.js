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
var customer_entity_1 = require("./customer.entity");
var circus_entity_1 = require("./circus.entity");
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: 'int' }),
        __metadata("design:type", Number)
    ], Ticket.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return circus_entity_1.Circus; }, function (circus) { return circus.tickets; }),
        __metadata("design:type", circus_entity_1.Circus)
    ], Ticket.prototype, "circus", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 15, nullable: false }),
        __metadata("design:type", String)
    ], Ticket.prototype, "color", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255, nullable: false }),
        __metadata("design:type", String)
    ], Ticket.prototype, "icon", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return customer_entity_1.Customer; }, function (customer) { return customer.tickets; }),
        __metadata("design:type", Array)
    ], Ticket.prototype, "customers", void 0);
    Ticket = __decorate([
        typeorm_1.Entity('ticket')
    ], Ticket);
    return Ticket;
}());
exports.Ticket = Ticket;
