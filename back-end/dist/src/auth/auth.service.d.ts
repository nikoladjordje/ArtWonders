import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/models/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: User): Promise<{
        user: User;
        accessToken: string;
    }>;
}
