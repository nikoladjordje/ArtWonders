import { Order } from 'src/order/models/order.entity';
import { User } from 'src/user/models/user.entity';
export declare class Painting {
    id: number;
    title: string;
    artist: string;
    description: string;
    creation_date: string;
    medium: string;
    style: string;
    price: number;
    image_url: string;
    availability: boolean;
    owner: User;
    order: Order;
}
