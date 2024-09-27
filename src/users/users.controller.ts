import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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
  crete(@Body() userData: any): string {
    return userData;
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
