import { Painting } from 'src/painting/models/painting.entity';
import { User } from 'src/user/models/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderDate: Date;

  @OneToOne(() => Painting, (order: Painting) => order, {
    onDelete: 'CASCADE',
  })
  painting: Painting;

  @ManyToOne(() => User, (owner: User) => owner.orders, { onDelete: 'CASCADE' })
  buyer: User;
}
