import { Painting } from 'src/painting/models/painting.entity';
import { User } from 'src/user/models/user.entity';

export class OrderDto {
  id: number;
  orderDate: Date;
  buyer: User;
  painting: Painting;
}
