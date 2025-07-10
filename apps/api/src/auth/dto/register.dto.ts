import { ApiProperty } from '@nestjs/swagger'
import {
	IsEmail,
	IsPhoneNumber,
	IsNotEmpty,
	IsString,
	MinLength,
	Validate,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
	IsOptional,
	IsBoolean,
	IsUUID,
	Length
} from 'class-validator'

export class RegisterPhysicalDto {
  @IsPhoneNumber('UA', { message: 'Некоректний формат телефону.' })
  @ApiProperty({ example: '+380501234567', description: 'Телефон користувача' })
  phone: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Шевченко', description: 'Прізвище' })
  lastName: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Тарас', description: 'Імʼя' })
  firstName: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Григорович', description: 'По батькові' })
  middleName: string

  @IsEmail()
  @ApiProperty({ example: 'user@example.com', description: 'Email' })
  email: string

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Київ', required: false })
  city?: string

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Київська', required: false })
  region?: string

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'https://facebook.com/username', required: false })
  website?: string

  @IsOptional()
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Файл (волонтерський документ)',
    required: false,
  })
  volunteerDoc?: any
}
export class SendOtpDto {
  @IsPhoneNumber('UA', { message: 'Невірний формат номера телефону' })
  @IsNotEmpty()
  @ApiProperty({ example: '+380501234567' })
  phone: string
}
export class VerifyOtpDto {
  @IsPhoneNumber('UA')
  @IsNotEmpty()
  @ApiProperty({ example: '+380501234567' })
  phone: string

  @Length(4, 4)
  @IsNotEmpty()
  @ApiProperty({ example: '9999' })
  code: string
}

export class RegisterLegalDto {
  @IsPhoneNumber('UA')
  @ApiProperty({ example: '+380501234567', description: 'Телефон' })
  phone: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'ТОВ “Добро”', description: 'Назва організації' })
  organizationName: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '12345678', description: 'Код ЄДРПОУ' })
  edrpouCode: string

  @IsUUID()
  @ApiProperty({ example: 'organization-type-uuid', description: 'ID типу організації' })
  organizationTypeId: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Іван Іванович', description: 'Контактна особа' })
  contactPerson: string

  @IsEmail()
  @ApiProperty({ example: 'org@example.com', description: 'Email організації' })
  email: string

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'https://site.com', required: false })
  website: string

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Київ', required: false })
  city: string

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Київська', required: false })
  region: string

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'вул. Хрещатик, 1', required: false })
  street: string

  @IsOptional()
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Файл (неприбутковість)',
    required: false,
  })
  nonprofitDoc?: any

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    example: true,
    description: 'Чи використовує ЕДО через Вчасно',
    required: false,
  })
  usesEDOViaVchasno?: boolean
}

export class RegisterLocalUserDto {
  @IsEmail()
  @ApiProperty({ example: 'admin@example.com', description: 'Email користувача' })
  email: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '123456', description: 'Пароль' })
  password: string
}
