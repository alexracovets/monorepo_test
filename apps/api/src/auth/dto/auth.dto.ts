import { ApiProperty } from '@nestjs/swagger';
import { UserType } from 'generated/prisma';

export class AuthResponse {
  @ApiProperty({
    description: 'JWT access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;
  @ApiProperty({
    enum: UserType,
    description: 'Тип користувача',
    example: UserType.LIMITED,
  })
  userType: UserType;
}
