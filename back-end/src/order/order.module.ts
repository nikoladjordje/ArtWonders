import { Module } from '@nestjs/common';
import { Order } from './models/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
