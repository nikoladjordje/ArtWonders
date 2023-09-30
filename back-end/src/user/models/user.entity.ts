import { Role } from 'src/enums/role.enum';
import { Order } from 'src/order/models/order.entity';
import { Painting } from 'src/painting/models/painting.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  profilePicture: string;

  @Column({ type: 'text', nullable: false })
  username: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  lastName: string;

  @Column({ type: 'text', nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'text', nullable: false, default: Role.User })
  role: Role;

  @Column({ type: 'text', nullable: false })
  phone: string;

  @Column({ type: 'text', nullable: false })
  address: string;

  @OneToMany(() => Order, (order: Order) => order.buyer)
  orders: Order[];

  @OneToMany(() => Painting, (painting: Painting) => painting.owner)
  postedPaintings: Painting[];
}
