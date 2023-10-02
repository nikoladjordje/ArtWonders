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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./models/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("../../config");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async register(userDto) {
        if (!userDto.email || !userDto.password) {
            throw new common_1.BadRequestException('MissingFields');
        }
        if (await this.findOne(userDto.email)) {
            throw new common_1.BadRequestException('EmailAlreadyRegistered');
        }
        const hashedPassword = await bcrypt.hash(userDto.password, 10);
        const user = new user_entity_1.User();
        user.username = userDto.username;
        user.name = userDto.name;
        user.lastName = userDto.lastName;
        user.email = userDto.email;
        user.password = hashedPassword;
        user.phone = userDto.phone;
        user.address = userDto.address;
        return await this.userRepository.save(user);
    }
    async findOne(email) {
        return this.userRepository.findOne({ where: { email: email } });
    }
    async findUser(id) {
        return this.userRepository.findOne({ where: { id: id } });
    }
    async updateUser(user, picture) {
        const pom = await this.userRepository.findOne({
            where: { id: user.id },
        });
        if (!pom) {
            throw new common_1.BadRequestException('InvalidUser');
        }
        pom.username = user.username;
        pom.name = user.name;
        pom.lastName = user.lastName;
        pom.email = user.email;
        pom.phone = user.phone;
        pom.address = user.address;
        pom.role = user.role;
        if (picture) {
            const { profilePicture } = pom;
            const fs = require('fs');
            if (profilePicture) {
                fs.unlinkSync(`${config_1.UPLOAD_DESTINATION}/${profilePicture}`);
            }
            pom.profilePicture = picture.filename;
        }
        if (!(await this.userRepository.update(user.id, pom))) {
            return { success: false };
        }
        return pom;
    }
    async deleteUser(id) {
        return await this.userRepository.delete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map