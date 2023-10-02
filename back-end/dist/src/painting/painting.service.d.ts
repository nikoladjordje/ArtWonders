/// <reference types="multer" />
import { Painting } from './models/painting.entity';
import { Repository } from 'typeorm';
import { PaintingDto } from './models/painting.dto';
export declare class PaintingService {
    private paintingRepository;
    constructor(paintingRepository: Repository<Painting>);
    getAll(): Promise<Painting[]>;
    getById(id: number): Promise<Painting>;
    getByUserId(id: number): Promise<Painting[]>;
    create(paintingDto: PaintingDto, img: Express.Multer.File): Promise<Painting>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, dto: PaintingDto): Promise<import("typeorm").UpdateResult>;
}
