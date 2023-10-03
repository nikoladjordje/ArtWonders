import { Module } from '@nestjs/common';
import { Order } from './models/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PaintingService } from 'src/painting/painting.service';
import { Painting } from 'src/painting/models/painting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Painting])],
  controllers: [OrderController],
  providers: [OrderService, PaintingService],
})
export class OrderModule {}
