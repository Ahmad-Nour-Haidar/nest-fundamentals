import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['ahmad', 'nour', 'haedr'];
  }

  @Get()
  findOne(): string {
    return 'Create User';
  }

  @Post()
  crete(): string {
    return 'Create User';
  }

  @Patch()
  update(): string {
    return 'Update User';
  }

  @Delete()
  remove(): string {
    return 'Remove User';
  }
}
