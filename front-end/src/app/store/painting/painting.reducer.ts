import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Painting } from 'src/app/models/painting';
import * as PaintingActions from './painting.actions';

export interface PaintingState extends EntityState<Painting> {}

export const paintingAdapter = createEntityAdapter<Painting>();

const initialState: PaintingState = paintingAdapter.getInitialState({});

export const paintingReducer = createReducer(
  initialState,
  on(PaintingActions.addPaintingSuccess, (state, { painting }) =>
    paintingAdapter.addOne(painting, state)
  ),
  on(PaintingActions.loadPaintingsSuccess, (state, { paintings }) =>
    paintingAdapter.setAll(paintings, state)
  ),
  on(PaintingActions.loadUserPaintingsSuccess, (state, { paintings }) => {
    const newState = paintingAdapter.removeAll(state);
    return paintingAdapter.addMany(paintings, newState);
  })
);
