import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findAllUsers(): string[] {
    return ['ahmad', 'nour', 'haedr'];
  }

  @Get()
  createUser(): string {
    return 'Create User';
  }
}
