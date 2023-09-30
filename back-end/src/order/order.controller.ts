import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './models/order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  public getOrders() {
    return this.orderService.getAll();
  }
  @Get(':id')
  public getOrder(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.getById(id);
  }
  @Post()
  public addOrder(@Body() dto: OrderDto) {
    return this.orderService.create(dto);
  }
  @Delete(':id')
  public deleteOrder(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.delete(id);
  }
  @Put(':id')
  public updateOrder(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: OrderDto,
  ) {
    return this.orderService.update(id, dto);
  }
}
