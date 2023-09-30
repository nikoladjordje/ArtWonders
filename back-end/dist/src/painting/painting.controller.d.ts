import { PaintingService } from './painting.service';
import { PaintingDto } from './models/painting.dto';
export declare class PaintingController {
    private paintingService;
    constructor(paintingService: PaintingService);
    getPaintings(): Promise<import("./models/painting.entity").Painting[]>;
    getPainting(id: number): Promise<import("./models/painting.entity").Painting>;
    addPainting(dto: PaintingDto): Promise<import("./models/painting.entity").Painting>;
    deletePainting(id: number): Promise<import("typeorm").DeleteResult>;
    updatePainting(id: number, dto: PaintingDto): Promise<import("typeorm").UpdateResult>;
}
