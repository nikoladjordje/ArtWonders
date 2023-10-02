import { createAction, props } from '@ngrx/store';
import { Painting, PaintingDto } from 'src/app/models/painting';
import { User } from 'src/app/models/user';

export const addPainting = createAction(
  'Add painting',
  props<{ painting: FormData }>()
);
export const addPaintingSuccess = createAction(
  'Add painting success',
  props<{ painting: Painting }>()
);

export const loadPaintings = createAction('Load paintings');
export const loadPaintingsSuccess = createAction(
  'Load paintings success',
  props<{ paintings: Painting[] }>()
);

export const loadUserPaintings = createAction(
  'Load user paintings',
  props<{ user: User }>()
);
export const loadUserPaintingsSuccess = createAction(
  'Load user paintings success',
  props<{ paintings: Painting[] }>()
);
