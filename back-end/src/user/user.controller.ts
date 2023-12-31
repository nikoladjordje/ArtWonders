import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
  ParseIntPipe,
  Put,
  UseInterceptors,
  UploadedFile,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UserUpdateDto } from './models/user.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { FILE_CONF } from 'config';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  public register(@Body() userDto: UserDto) {
    return this.userService.register(userDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get(':id')
  public async getUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  @UseInterceptors(FileInterceptor('profilePicture', FILE_CONF))
  public updateUser(
    @Body() user: UserUpdateDto,
    @UploadedFile() profilePicture: Express.Multer.File,
  ) {
    return this.userService.updateUser(user, profilePicture);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  @Roles(Role.User)
  public deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
