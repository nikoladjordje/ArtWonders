import { UserService } from './user.service';
import { UserDto } from './models/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(userDto: UserDto): Promise<import("./models/user.entity").User>;
}
