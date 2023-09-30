"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const order_entity_1 = require("./src/order/models/order.entity");
const painting_entity_1 = require("./src/painting/models/painting.entity");
const user_entity_1 = require("./src/user/models/user.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'paintings',
    entities: [painting_entity_1.Painting, order_entity_1.Order, user_entity_1.User],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map