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
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(): string {
    return 'Remove User';
  }
}
