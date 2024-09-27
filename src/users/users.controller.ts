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
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

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
  crete(@Body() createUserDto: CreateUserDto) {
    return createUserDto.userName;
  }

  @Patch()
  update(
    @Param('username') username: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return updateUserDto;
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(): string {
    return 'Remove User';
  }
}
