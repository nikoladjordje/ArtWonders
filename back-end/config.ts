import { BadRequestException } from '@nestjs/common';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

export const SALT_ROUNDS = 12;
export const JWT_SECRET = {
  secret: 'rwa-project',
};
export const JWT_EXPIRATION = {
  time: '1d',
};

export const UPLOAD_DESTINATION = './uploads';
export const FILE_CONF = {
  storage: diskStorage({
    destination: UPLOAD_DESTINATION,
    filename: (req, file, cb) => {
      const name = uuidv4();
      const ext = file.originalname.split('.').pop();
      cb(null, `${name}.${ext}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new BadRequestException('InvalidImageType'), false);
    }
    cb(null, true);
  },
};
