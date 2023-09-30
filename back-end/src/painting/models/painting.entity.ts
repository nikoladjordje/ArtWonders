import { Order } from 'src/order/models/order.entity';
import { User } from 'src/user/models/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Painting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column()
  description: string;

  @Column()
  creation_date: string;

  @Column()
  medium: string;

  @Column()
  style: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  image: string;

  @Column()
  availability: boolean;

  @OneToMany(() => User, (owner: User) => owner.postedPaintings, {
    onDelete: 'CASCADE',
  })
  owner: User;

  @OneToOne(() => Order, (order: Order) => order.painting)
  order: Order;
}
