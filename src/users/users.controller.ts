import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create_user.dto';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['ahmad', 'nour', 'haedr'];
  }

  @Get(':username')
  findOne(@Param('username') username: string): string {
    return username;
  }

  @Post()
  crete(@Body() userData: CreateUserDto) {
    return userData.userName;
  }

  @Patch()
  update(): string {
    return 'Update User';
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(): string {
    return 'Remove User';
  }
}
