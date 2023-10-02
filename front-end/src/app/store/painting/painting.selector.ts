import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Painting } from 'src/app/models/painting';
import { selectUser } from '../user/user.selector';

export const selectPaintingFeature = createSelector(
  (state: AppState) => state.painting,
  (painting) => painting
);

export const selectCurrentUser = createSelector(
  (state: AppState) => state.user,
  (user) => user
);

export const loadPaintingList = createSelector(
  selectPaintingFeature,
  (painting) =>
    painting.ids
      .map((id) => painting.entities[id])
      .filter((painting) => painting !== null)
      .map((painting) => <Painting>painting)
);

export const loadUserPaintingList = createSelector(
  selectCurrentUser,
  selectPaintingFeature,
  (user, painting) =>
    painting.ids
      .map((id) => painting.entities[id])
      .filter((painting) => painting !== null)
      .map((painting) => <Painting>painting)
);
