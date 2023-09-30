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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaintingController = void 0;
const common_1 = require("@nestjs/common");
const painting_service_1 = require("./painting.service");
const painting_dto_1 = require("./models/painting.dto");
let PaintingController = class PaintingController {
    constructor(paintingService) {
        this.paintingService = paintingService;
    }
    getPaintings() {
        return this.paintingService.getAll();
    }
    getPainting(id) {
        return this.paintingService.getById(id);
    }
    addPainting(dto) {
        return this.paintingService.create(dto);
    }
    deletePainting(id) {
        return this.paintingService.delete(id);
    }
    updatePainting(id, dto) {
        return this.paintingService.update(id, dto);
    }
};
exports.PaintingController = PaintingController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaintingController.prototype, "getPaintings", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaintingController.prototype, "getPainting", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [painting_dto_1.PaintingDto]),
    __metadata("design:returntype", void 0)
], PaintingController.prototype, "addPainting", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaintingController.prototype, "deletePainting", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, painting_dto_1.PaintingDto]),
    __metadata("design:returntype", void 0)
], PaintingController.prototype, "updatePainting", null);
exports.PaintingController = PaintingController = __decorate([
    (0, common_1.Controller)('painting'),
    __metadata("design:paramtypes", [painting_service_1.PaintingService])
], PaintingController);
//# sourceMappingURL=painting.controller.js.map