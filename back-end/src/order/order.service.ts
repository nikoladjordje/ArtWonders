import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './models/order.entity';
import { Repository } from 'typeorm';
import { OrderDto } from './models/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}
  public getAll() {
    return this.orderRepository.find();
  }
  public getById(id: number) {
    return this.orderRepository.findOneBy({ id: id });
  }
  public async create(orderDto: OrderDto) {
    const order = this.orderRepository.create(orderDto);
    return await this.orderRepository.save(order);
  }
  public async delete(id: number) {
    return await this.orderRepository.delete(id);
  }
  public async update(id: number, dto: OrderDto) {
    return await this.orderRepository.update(id, dto);
  }
}
