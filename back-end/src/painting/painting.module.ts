import { Module } from '@nestjs/common';
import { PaintingController } from './painting.controller';
import { PaintingService } from './painting.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Painting } from './models/painting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Painting])],
  controllers: [PaintingController],
  providers: [PaintingService],
})
export class PaintingModule {}
