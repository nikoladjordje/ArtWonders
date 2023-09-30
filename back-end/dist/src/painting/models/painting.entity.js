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
exports.Painting = void 0;
const order_entity_1 = require("../../order/models/order.entity");
const user_entity_1 = require("../../user/models/user.entity");
const typeorm_1 = require("typeorm");
let Painting = class Painting {
};
exports.Painting = Painting;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Painting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Painting.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Painting.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Painting.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Painting.prototype, "creation_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Painting.prototype, "medium", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Painting.prototype, "style", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Painting.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Painting.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Painting.prototype, "availability", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (owner) => owner.postedPaintings, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.User)
], Painting.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_entity_1.Order, (order) => order.painting),
    __metadata("design:type", order_entity_1.Order)
], Painting.prototype, "order", void 0);
exports.Painting = Painting = __decorate([
    (0, typeorm_1.Entity)()
], Painting);
//# sourceMappingURL=painting.entity.js.map