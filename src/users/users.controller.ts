import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  INestApplication,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuidV4 } from 'uuid';

@Controller('users')
export class UsersController {
  private readonly users: UserEntity[] = [];

  @Get()
  find(): UserEntity[] {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string): UserEntity {
    return this.users.find((user) => user.id === id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user: UserEntity = {
      ...createUserDto,
      id: uuidV4(),
    };
    this.users.push(user);
    return user;
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
