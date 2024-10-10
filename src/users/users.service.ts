import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { v4 as uuidV4 } from 'uuid';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  private readonly users: UserEntity[] = [];

  findUsers(): UserEntity[] {
    return this.users;
  }

  findUserById(id: string): UserEntity {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): UserEntity {
    const user: UserEntity = {
      ...createUserDto,
      id: uuidV4(),
    };
    this.users.push(user);
    return user;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): UserEntity {
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0) {
      this.users[index] = { ...this.users[index], ...updateUserDto };
    }
    console.log(id);
    console.log(index);
    console.log({ ...this.users[index], ...updateUserDto });
    return this.users[index];
  }

  deleteUser(id: string): void {
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
}
