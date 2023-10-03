import { Order } from './models/order.entity';
import { Repository } from 'typeorm';
import { OrderDto } from './models/order.dto';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    getAll(): Promise<Order[]>;
    getById(id: number): Promise<Order>;
    getByUserId(id: number): Promise<Order[]>;
    create(orderDto: OrderDto): Promise<Order>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, dto: OrderDto): Promise<import("typeorm").UpdateResult>;
}
