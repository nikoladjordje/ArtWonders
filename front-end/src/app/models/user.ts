import { Roles } from '../enums/role';
export interface User {
  id: number;
  profilePicture: string;
  username: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: Roles;
}
export interface RegisterUser {
  username: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

export interface LoginUser {
  user: User;
  accessToken: string;
}
