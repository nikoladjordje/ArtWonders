import { createAction, props } from '@ngrx/store';
import { Order, OrderDto } from 'src/app/models/order';

export const addOrder = createAction('Add order', props<{ order: OrderDto }>());
export const addOrderSuccess = createAction(
  'Add order success',
  props<{ order: OrderDto }>()
);
