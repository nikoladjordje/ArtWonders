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
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PaintingDto } from './models/painting.dto';
import { PaintingService } from './painting.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FILE_CONF } from 'config';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/auth/roles.decorator';

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
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  // @Roles(Role.User)
  @UseInterceptors(FileInterceptor('image', FILE_CONF))
  public addPainting(
    @Body() dto: PaintingDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    console.log('painting controller:' + dto.availability);
    return this.paintingService.create(dto, image);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  @Roles(Role.User)
  public deletePainting(@Param('id', ParseIntPipe) id: number) {
    return this.paintingService.delete(id);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(':id')
  @Roles(Role.User)
  public updatePainting(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: PaintingDto,
  ) {
    return this.paintingService.update(id, dto);
  }
}
