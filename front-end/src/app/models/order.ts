import { Painting } from './painting';
import { User } from './user';

export interface Order {
  id: number;
  orderDate: Date;
  painting: Painting;
  buyer: User;
}

export interface OrderDto {
  orderDate: Date;
  painting: Painting;
  buyer: User;
}
