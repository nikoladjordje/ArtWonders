import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Painting } from './models/painting.entity';
import { Repository } from 'typeorm';
import { PaintingDto } from './models/painting.dto';
import { UPLOAD_DESTINATION } from 'config';

@Injectable()
export class PaintingService {
  constructor(
    @InjectRepository(Painting)
    private paintingRepository: Repository<Painting>,
  ) {}
  public getAll() {
    return this.paintingRepository.find();
  }
  public getById(id: number) {
    return this.paintingRepository.findOneBy({ id: id });
  }
  public async create(paintingDto: PaintingDto, img: Express.Multer.File) {
    const painting = this.paintingRepository.create(paintingDto);
    if (img) {
      const { image } = painting;
      const fs = require('fs');

      if (image) {
        fs.unlinkSync(`${UPLOAD_DESTINATION}/${image}`);
      }

      painting.image = img.filename;
    }
    return await this.paintingRepository.save(painting);
  }
  public async delete(id: number) {
    return await this.paintingRepository.delete(id);
  }
  public async update(id: number, dto: PaintingDto) {
    return await this.paintingRepository.update(id, dto);
  }
}
