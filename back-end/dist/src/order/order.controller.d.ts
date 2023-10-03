import { OrderService } from './order.service';
import { OrderDto } from './models/order.dto';
import { PaintingService } from 'src/painting/painting.service';
export declare class OrderController {
    private orderService;
    private paintingService;
    constructor(orderService: OrderService, paintingService: PaintingService);
    getOrders(): Promise<import("./models/order.entity").Order[]>;
    getOrder(id: number): Promise<import("./models/order.entity").Order[]>;
    addOrder(dto: OrderDto): Promise<import("./models/order.entity").Order>;
    deleteOrder(id: number): Promise<import("typeorm").DeleteResult>;
    updateOrder(id: number, dto: OrderDto): Promise<import("typeorm").UpdateResult>;
}
