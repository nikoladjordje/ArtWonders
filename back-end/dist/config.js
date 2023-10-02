"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_CONF = exports.UPLOAD_DESTINATION = exports.ROOT_PATH = exports.JWT_EXPIRATION = exports.JWT_SECRET = exports.SALT_ROUNDS = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
exports.SALT_ROUNDS = 12;
exports.JWT_SECRET = {
    secret: 'rwa-project',
};
exports.JWT_EXPIRATION = {
    time: '1d',
};
exports.ROOT_PATH = '/home/nikola/ArtWonders/back-end/uploads';
exports.UPLOAD_DESTINATION = './uploads';
exports.FILE_CONF = {
    storage: (0, multer_1.diskStorage)({
        destination: exports.UPLOAD_DESTINATION,
        filename: (req, file, cb) => {
            const name = (0, uuid_1.v4)();
            const ext = file.originalname.split('.').pop();
            cb(null, `${name}.${ext}`);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new common_1.BadRequestException('InvalidImageType'), false);
        }
        cb(null, true);
    },
};
//# sourceMappingURL=config.js.map