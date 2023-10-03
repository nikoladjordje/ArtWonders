import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { loadOrders } from 'src/app/store/order/order.actions';
import { loadOrdersList } from 'src/app/store/order/order.selector';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent {
  order$: Observable<Order[]> = of([]);
  user: User | null = null;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.user = state.user.user;
    });
    if (this.user) this.store.dispatch(loadOrders({ user: this.user }));
    this.order$ = this.store.select(loadOrdersList);
    this.order$.subscribe((orders) => {
      console.log('Paintings:', orders);
    });
  }
}
