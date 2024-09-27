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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): UserEntity {
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0) {
      this.users[index] = { ...this.users[index], ...updateUserDto };
    }
    console.log(id);
    console.log(index);
    console.log({ ...this.users[index], ...updateUserDto });
    return this.users[index];
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
}
