import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Order } from 'src/app/models/order';
import * as OrderActions from './order.actions';

export interface OrderState extends EntityState<Order> {}

export const orderAdapter = createEntityAdapter<Order>();

const initialState: OrderState = orderAdapter.getInitialState({});

export const orderReducer = createReducer(
  initialState,
  on(OrderActions.addOrderSuccess, (state, { order }) =>
    orderAdapter.addOne(order, state)
  ),
  on(OrderActions.loadOrdersSuccess, (state, { orders }) =>
    orderAdapter.setAll(orders, state)
  )
);
