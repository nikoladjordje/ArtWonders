import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './models/order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { PaintingDto } from 'src/painting/models/painting.dto';
import { PaintingService } from 'src/painting/painting.service';

@Controller('order')
export class OrderController {
  constructor(
    private orderService: OrderService,
    private paintingService: PaintingService,
  ) {}
  @Get()
  public getOrders() {
    return this.orderService.getAll();
  }
  @Get(':id')
  public getOrder(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.getByUserId(id);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  public addOrder(@Body() dto: OrderDto) {
    const paintingDto: PaintingDto = {
      title: dto.painting.title,
      artist: dto.painting.artist,
      description: dto.painting.description,
      creation_date: dto.painting.creation_date,
      medium: dto.painting.medium,
      style: dto.painting.style,
      price: dto.painting.price,
      image: dto.painting.image,
      availability: false,
      owner: dto.painting.owner,
    };
    console.log(paintingDto);

    const a = this.paintingService.update(dto.painting.id, paintingDto);
    return this.orderService.create(dto);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  @Roles(Role.User)
  public deleteOrder(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.delete(id);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(':id')
  @Roles(Role.User)
  public updateOrder(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: OrderDto,
  ) {
    return this.orderService.update(id, dto);
  }
}
