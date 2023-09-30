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
import { PaintingService } from './painting.service';
import { PaintingDto } from './models/painting.dto';

@Controller('painting')
export class PaintingController {
  constructor(private paintingService: PaintingService) {}
  @Get()
  public getPaintings() {
    return this.paintingService.getAll();
  }
  @Get(':id')
  public getPainting(@Param('id', ParseIntPipe) id: number) {
    return this.paintingService.getById(id);
  }
  @Post()
  public addPainting(@Body() dto: PaintingDto) {
    return this.paintingService.create(dto);
  }
  @Delete(':id')
  public deletePainting(@Param('id', ParseIntPipe) id: number) {
    return this.paintingService.delete(id);
  }
  @Put(':id')
  public updatePainting(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: PaintingDto,
  ) {
    return this.paintingService.update(id, dto);
  }
}
