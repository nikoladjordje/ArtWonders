import { createAction, props } from '@ngrx/store';
import { LoginUser, RegisterUser, User } from 'src/app/models/user';

export const registerUser = createAction(
  'Register user',
  props<{ user: RegisterUser }>()
);
export const registerUserSuccess = createAction('Register user success');
export const registerUserFailure = createAction('Register user failure');

export const loginUser = createAction(
  'Log in user',
  props<{ email: string; password: string }>()
);
export const loginUserSuccess = createAction(
  'Login user success',
  props<{ user: LoginUser }>()
);
export const loginUserFailure = createAction(
  'Login user failure',
  props<{ error: string }>()
);

export const logout = createAction('Log out');

export const updateProfile = createAction(
  'Update profile',
  props<{user: FormData}>()
);

export const updateProfileSuccess = createAction(
  'Update profile succes',
  props<{user: User}>()
);
