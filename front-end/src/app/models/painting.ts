import { Order } from './order';
import { User } from './user';

export interface Painting {
  id: number;
  title: string;
  artist: string;
  description: string;
  creation_date: string;
  medium: string;
  style: string;
  price: number;
  image: string;
  availability: boolean;
  owner: User;
  order: Order;
  ownerId: number;
  orderId: number;
}
export interface PaintingDto {
  title: string;
  artist: string;
  description: string;
  creation_date: string;
  medium: string;
  style: string;
  price: number;
  image: string;
  availability: boolean;
  ownerId: number | null;
  orderId: number | null;
}
