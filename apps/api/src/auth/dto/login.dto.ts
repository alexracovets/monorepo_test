import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginRequest {
  @ApiProperty({
    description: 'Електронна пошта',
    example: 'example@gmail.com',
  })
  @IsString({ message: '' })
  @IsNotEmpty({ message: '' })
  @IsEmail({}, { message: '' })
  email: string;

  @ApiProperty({
    description: 'Пароль від аккаунта',
    example: '123456',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: '' })
  @IsNotEmpty({ message: '' })
  @MinLength(6, { message: '' })
  @MaxLength(128, { message: '' })
  password: string;
}
