import { User } from './models/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './models/user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    register(userDto: UserDto): Promise<User | undefined>;
    findOne(email: string): Promise<User | undefined>;
    findUser(id: number): Promise<User>;
}
