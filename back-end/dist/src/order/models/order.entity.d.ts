import { Painting } from 'src/painting/models/painting.entity';
import { User } from 'src/user/models/user.entity';
export declare class Order {
    id: number;
    orderDate: Date;
    painting: Painting;
    buyer: User;
}
