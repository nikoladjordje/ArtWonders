import { Role } from 'src/enums/role.enum';

export class UserDto {
  id: number;
  username: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

export interface UserUpdateDto {
  id: number;
  profilePicture: string;
  username: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  role: Role;
  address: string;
}
