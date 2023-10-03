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
const painting_dto_1 = require("./models/painting.dto");
const painting_service_1 = require("./painting.service");
const platform_express_1 = require("@nestjs/platform-express");
const config_1 = require("../../config");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const role_enum_1 = require("../enums/role.enum");
const roles_decorator_1 = require("../auth/roles.decorator");
let PaintingController = class PaintingController {
    constructor(paintingService) {
        this.paintingService = paintingService;
    }
    getPaintings() {
        return this.paintingService.getAll();
    }
    getPainting(id) {
        return this.paintingService.getByUserId(id);
    }
    addPainting(dto, image) {
        console.log('painting controller:' + dto.availability);
        return this.paintingService.create(dto, image);
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
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', config_1.FILE_CONF)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [painting_dto_1.PaintingDto, Object]),
    __metadata("design:returntype", void 0)
], PaintingController.prototype, "addPainting", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.User),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaintingController.prototype, "deletePainting", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.User),
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