import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

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
