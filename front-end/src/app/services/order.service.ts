import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderDto } from '../models/order';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  addOrder(order: OrderDto) {
    console.log(order);

    return this.httpClient.post<Order>(environment.api + '/order', order);
  }

  getOrdersByBuyer(id: number) {
    return this.httpClient.get<Order[]>(environment.api + '/order/' + id);
  }
}
