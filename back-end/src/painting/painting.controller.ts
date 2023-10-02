import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PaintingDto } from './models/painting.dto';
import { PaintingService } from './painting.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FILE_CONF } from 'config';

@Controller('painting')
export class PaintingController {
  constructor(private paintingService: PaintingService) {}
  @Get()
  public getPaintings() {
    return this.paintingService.getAll();
  }
  @Get(':id')
  public getPainting(@Param('id', ParseIntPipe) id: number) {
    return this.paintingService.getByUserId(id);
    // return this.paintingService.getById(id);
  }
  @Post()
  @UseInterceptors(FileInterceptor('image', FILE_CONF))
  public addPainting(
    @Body() dto: PaintingDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    console.log('painting controller:' + dto.availability);
    return this.paintingService.create(dto, image);
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
