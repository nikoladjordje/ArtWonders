import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { OrderDto } from 'src/app/models/order';
import { Painting } from 'src/app/models/painting';
import { User } from 'src/app/models/user';
import { addOrder } from 'src/app/store/order/order.actions';
import {
  addPainting,
  loadPaintings,
} from 'src/app/store/painting/painting.actions';
import { loadPaintingList } from 'src/app/store/painting/painting.selector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss'],
})
export class PaintingComponent implements OnInit {
  paintings$: Observable<Painting[]> = of([]);
  user: User | null = null;
  imgPath: string = environment.api;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.user = state.user.user;
    });
    this.store.dispatch(loadPaintings());
    this.paintings$ = this.store.select(loadPaintingList);
  }

  orderDate: string = '';

  submitOrder(painting: any) {
    if (this.user) {
      const orderData: OrderDto = {
        orderDate: new Date(this.orderDate),
        painting: painting,
        buyer: this.user,
      };
      console.log(orderData);
      this.store.dispatch(addOrder({ order: orderData }));
      // addOrder(orderData);
    }
  }
}
