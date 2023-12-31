"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaintingModule = void 0;
const common_1 = require("@nestjs/common");
const painting_controller_1 = require("./painting.controller");
const typeorm_1 = require("@nestjs/typeorm");
const painting_entity_1 = require("./models/painting.entity");
const painting_service_1 = require("./painting.service");
let PaintingModule = class PaintingModule {
};
exports.PaintingModule = PaintingModule;
exports.PaintingModule = PaintingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([painting_entity_1.Painting])],
        controllers: [painting_controller_1.PaintingController],
        providers: [painting_service_1.PaintingService],
    })
], PaintingModule);
//# sourceMappingURL=painting.module.js.map