import { Role } from 'src/enums/role.enum';
import { Order } from 'src/order/models/order.entity';
import { Painting } from 'src/painting/models/painting.entity';
export declare class User {
    id: number;
    profilePicture: string;
    username: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    phone: string;
    address: string;
    orders: Order[];
    postedPaintings: Painting[];
}
