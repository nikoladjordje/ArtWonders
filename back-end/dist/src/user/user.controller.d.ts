/// <reference types="multer" />
import { UserService } from './user.service';
import { UserDto, UserUpdateDto } from './models/user.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class UserController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    register(userDto: UserDto): Promise<import("./models/user.entity").User>;
    login(req: any): Promise<{
        user: import("./models/user.entity").User;
        accessToken: string;
    }>;
    getUser(id: number): Promise<import("./models/user.entity").User>;
    updateUser(user: UserUpdateDto, profilePicture: Express.Multer.File): Promise<import("./models/user.entity").User | {
        success: boolean;
    }>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
