import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 255)
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(2, 255)
  readonly country: string;
}
