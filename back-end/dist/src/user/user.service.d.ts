/// <reference types="multer" />
import { User } from './models/user.entity';
import { Repository } from 'typeorm';
import { UserDto, UserUpdateDto } from './models/user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    register(userDto: UserDto): Promise<User | undefined>;
    findOne(email: string): Promise<User | undefined>;
    findUser(id: number): Promise<User>;
    updateUser(user: UserUpdateDto, picture: Express.Multer.File): Promise<User | {
        success: boolean;
    }>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
