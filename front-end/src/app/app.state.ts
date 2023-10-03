import { OrderState } from './store/order/order.reducer';
import { PaintingState } from './store/painting/painting.reducer';
import { UserState } from './store/user/user.reducer';

export interface AppState {
  user: UserState;
  painting: PaintingState;
  order: OrderState;
}
