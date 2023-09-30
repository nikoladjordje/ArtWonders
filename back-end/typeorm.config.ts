import { Order } from 'src/order/models/order.entity';
import { Painting } from 'src/painting/models/painting.entity';
import { User } from 'src/user/models/user.entity';
import { DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mysecretpassword',
  database: 'paintings',
  entities: [Painting, Order, User],
  synchronize: true,
};
