import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto, UserUpdateDto } from './models/user.dto';
import * as bcrypt from 'bcryptjs';
import { UPLOAD_DESTINATION } from 'config';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async register(userDto: UserDto): Promise<User | undefined> {
    if (!userDto.email || !userDto.password) {
      throw new BadRequestException('MissingFields');
    }

    if (await this.findOne(userDto.email)) {
      throw new BadRequestException('EmailAlreadyRegistered');
    }

    const hashedPassword = await bcrypt.hash(userDto.password, 10);

    const user = new User();

    user.username = userDto.username;
    user.name = userDto.name;
    user.lastName = userDto.lastName;
    user.email = userDto.email;
    user.password = hashedPassword;
    user.phone = userDto.phone;
    user.address = userDto.address;

    return await this.userRepository.save(user);
  }

  public async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email: email } });
  }

  public async findUser(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  public async updateUser(user: UserUpdateDto, picture: Express.Multer.File) {
    const pom: User = await this.userRepository.findOne({
      where: { id: user.id },
    });
    if (!pom) {
      throw new BadRequestException('InvalidUser');
    }

    pom.username = user.username;
    pom.name = user.name;
    pom.lastName = user.lastName;
    pom.email = user.email;
    pom.phone = user.phone;
    pom.address = user.address;
    pom.role = user.role;

    if (picture) {
      const { profilePicture } = pom;
      const fs = require('fs');

      if (profilePicture) {
        fs.unlinkSync(`${UPLOAD_DESTINATION}/${profilePicture}`);
      }

      pom.profilePicture = picture.filename;
    }

    if (!(await this.userRepository.update(user.id, pom))) {
      return { success: false };
    }

    return pom;
  }

  public async deleteUser(id: number) {
    return await this.userRepository.delete(id);
  }
}
