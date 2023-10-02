import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Painting, PaintingDto } from '../models/painting';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaintingService {
  constructor(private httpClient: HttpClient) {}

  addPainting(painting: FormData) {
    painting.forEach((value, key) => {
      console.log(`Key: ${key}, Value: ${value}`);
    });
    return this.httpClient.post<Painting>(
      environment.api + '/painting',
      painting
    );
  }

  getAll() {
    return this.httpClient.get<Painting[]>(environment.api + '/painting');
  }

  deletePainting(id: number) {
    return this.httpClient.delete<any>(environment.api + '/painting/' + id);
  }

  updatePainting(painting: Painting) {
    return this.httpClient.put<Painting>(environment.api + '/painting', {
      ...painting,
    });
  }
  getPaintingsByOwner(id: number) {
    return this.httpClient.get<Painting[]>(environment.api + '/painting/' + id);
  }
}
