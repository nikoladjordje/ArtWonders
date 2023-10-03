import { createAction, props } from '@ngrx/store';
import { Order, OrderDto } from 'src/app/models/order';
import { User } from 'src/app/models/user';

export const addOrder = createAction('Add order', props<{ order: OrderDto }>());
export const addOrderSuccess = createAction(
  'Add order success',
  props<{ order: Order }>()
);

export const loadOrders = createAction('Load Orders', props<{ user: User }>());
export const loadOrdersSuccess = createAction(
  'Load Orders success',
  props<{ orders: Order[] }>()
);
