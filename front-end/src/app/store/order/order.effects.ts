import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PaintingService } from 'src/app/services/painting.service';
import { UserService } from 'src/app/services/user.service';
import * as OrderActions from './order.actions';
import { Order, OrderDto } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private orderService: OrderService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  addPainting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.addOrder),
      mergeMap(({ order }) =>
        this.orderService.addOrder(order).pipe(
          map((order: Order) => {
            this.snackBar.open('Successsfuly created order', 'Ok', {
              duration: 3000,
            });
            return OrderActions.addOrderSuccess({ order });
          }),
          catchError(({ error }) => {
            this.snackBar.open(error, 'Close', { duration: 3000 });
            return of({ type: 'Load error' });
          })
        )
      )
    )
  );
  loadMyPainting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      mergeMap(({ user }) =>
        this.orderService.getOrdersByBuyer(user.id).pipe(
          map((orders) => OrderActions.loadOrdersSuccess({ orders: orders })),
          catchError(({ error }) => {
            this.snackBar.open(error, 'Close', { duration: 3000 });
            return of({ type: 'Load error' });
          })
        )
      )
    )
  );
}
