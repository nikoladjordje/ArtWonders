import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderDto } from '../models/order';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  addOrder(order: OrderDto) {
    return this.httpClient.post<OrderDto>(environment.api + '/order', order);
  }
}
