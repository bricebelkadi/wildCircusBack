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
var circus_entity_1 = require("./circus.entity");
var performance_entity_1 = require("./performance.entity");
var Show = /** @class */ (function () {
    function Show() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: 'int' }),
        __metadata("design:type", Number)
    ], Show.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp', nullable: true }),
        __metadata("design:type", Date)
    ], Show.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255, nullable: false, default: 'Show' }),
        __metadata("design:type", String)
    ], Show.prototype, "title", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return circus_entity_1.Circus; }, function (circus) { return circus.shows; }),
        __metadata("design:type", circus_entity_1.Circus)
    ], Show.prototype, "circus", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return performance_entity_1.Performance; }, function (performance) { return performance.show; }, { cascade: true }),
        __metadata("design:type", Array)
    ], Show.prototype, "performances", void 0);
    Show = __decorate([
        typeorm_1.Entity('show')
    ], Show);
    return Show;
}());
exports.Show = Show;
