/// <reference types="multer" />
export declare const SALT_ROUNDS = 12;
export declare const JWT_SECRET: {
    secret: string;
};
export declare const JWT_EXPIRATION: {
    time: string;
};
export declare const ROOT_PATH = "/home/nikola/ArtWonders/back-end/uploads";
export declare const UPLOAD_DESTINATION = "./uploads";
export declare const FILE_CONF: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: any, cb: any) => any;
};
