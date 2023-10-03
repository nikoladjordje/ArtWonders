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
exports.PaintingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const painting_entity_1 = require("./models/painting.entity");
const typeorm_2 = require("typeorm");
const config_1 = require("../../config");
let PaintingService = class PaintingService {
    constructor(paintingRepository) {
        this.paintingRepository = paintingRepository;
    }
    getAll() {
        return this.paintingRepository.find();
    }
    getById(id) {
        return this.paintingRepository.findOneBy({ id: id });
    }
    async getByUserId(id) {
        let paintings = await this.paintingRepository.find({
            where: { owner: { id: id } },
        });
        return paintings;
    }
    async create(paintingDto, img) {
        console.log('paintingdto service:' + paintingDto.availability);
        const painting = this.paintingRepository.create(paintingDto);
        if (img) {
            const { image } = painting;
            const fs = require('fs');
            if (image) {
                fs.unlinkSync(`${config_1.UPLOAD_DESTINATION}/${image}`);
            }
            painting.image = img.filename;
            painting.availability = true;
        }
        return await this.paintingRepository.save(painting);
    }
    async delete(id) {
        return await this.paintingRepository.delete(id);
    }
    async update(id, dto) {
        return await this.paintingRepository.update(id, dto);
    }
    async updateAvailability(id, dto) {
        console.log(dto.availability);
        dto.availability = false;
        await this.paintingRepository.update(id, dto);
    }
};
exports.PaintingService = PaintingService;
exports.PaintingService = PaintingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(painting_entity_1.Painting)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaintingService);
//# sourceMappingURL=painting.service.js.map