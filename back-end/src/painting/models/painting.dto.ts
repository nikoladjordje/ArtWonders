import { User } from 'src/user/models/user.entity';

export class PaintingDto {
  title: string;
  artist: string;
  description: string;
  creation_date: string;
  medium: string;
  style: string;
  price: number;
  image: string;
  availability: boolean;
  owner: User;
}
