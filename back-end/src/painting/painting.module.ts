import { Module } from '@nestjs/common';
import { PaintingController } from './painting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Painting } from './models/painting.entity';
import { PaintingService } from './painting.service';

@Module({
  imports: [TypeOrmModule.forFeature([Painting])],
  controllers: [PaintingController],
  providers: [PaintingService],
})
export class PaintingModule {}
