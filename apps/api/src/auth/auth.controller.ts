import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common'
import type { Request, Response } from 'express'
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'

import { AuthService } from './auth.service'
import { AuthResponse } from './dto/auth.dto'
import { LoginRequest } from './dto/login.dto'

import { RegisterPhysicalDto,RegisterLegalDto, RegisterLocalUserDto, SendOtpDto, VerifyOtpDto } from './dto/register.dto'
import { Recaptcha } from '@nestlab/google-recaptcha'
import { Authorization } from './decorators/auth.decorator'
import { UserType } from 'generated/prisma'
import { Authorized } from './decorators/authorized.decorator'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Recaptcha()
  @Post('send-otp')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Надсилання OTP-коду' })
  @ApiOkResponse({ description: 'Код надіслано успішно' })
  @ApiBadRequestResponse({ description: 'Користувач заблокований' })
  async sendOtp(@Body() dto: SendOtpDto) {
    return await this.authService.sendOtp(dto.phone)
  }

  @Post('verify-otp')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: AuthResponse })
  @ApiOperation({ summary: 'Перевірка OTP-коду' })
  @ApiOkResponse({ description: 'OTP-код підтверджено' })
  @ApiBadRequestResponse({ description: 'Невірний код або користувач заблокований' })
  async verifyOtp(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: VerifyOtpDto
  ) {
    return await this.authService.verifyOtpComplex(dto, res)
  }


  @ApiOperation({
    summary: 'Реєстрація фізичної особи',
  })
  @Authorization(UserType.LIMITED)
  @ApiOkResponse({ type: AuthResponse })
  @ApiBadRequestResponse({ description: 'Некоректні вхідні дані' })
  @ApiConflictResponse({ description: 'Користувач з таким телефоном або email вже існує' })
  @Post('register/physical')
  @HttpCode(HttpStatus.CREATED)
  async registerPhysical(
    @Res({ passthrough: true }) res: Response,
    @Authorized('phone') phone: string,
    @Body() dto: RegisterPhysicalDto,
  ) {
    return await this.authService.registerPhysical(dto, res, phone)
  }

  @ApiOperation({
    summary: 'Реєстрація юридичної особи',
  })
  @Authorization(UserType.LIMITED)
  @ApiOkResponse({ type: AuthResponse })
  @ApiBadRequestResponse({ description: 'Некоректні вхідні дані' })
  @ApiConflictResponse({ description: 'Користувач з таким телефоном або email вже існує' })
  @Post('register/legal')
  @HttpCode(HttpStatus.CREATED)
  async registerLegal(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: RegisterLegalDto,
  ) {
    return await this.authService.registerLegal(dto, res)
  }

  @ApiOperation({
    summary: 'Реєстрація локального адміністратора',
  })
  @Authorization(UserType.LIMITED)
  @ApiOkResponse({ type: AuthResponse })
  @ApiBadRequestResponse({ description: 'Некоректні вхідні дані' })
  @ApiConflictResponse({ description: 'Користувач з таким email вже існує' })
  @Post('register/local')
  @HttpCode(HttpStatus.CREATED)
  async registerLocal(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: RegisterLocalUserDto,
  ) {
    return await this.authService.registerLocal(dto, res)
  }

  @ApiOperation({
    summary: 'Вхід в систему',
    description: 'Авторизує користувача та віддає токен доступу.',
  })
  @ApiOkResponse({ type: AuthResponse })
  @ApiBadRequestResponse({ description: 'Некоректні вхідні дані' })
  @ApiNotFoundResponse({ description: 'Користувач не знайдений' })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: LoginRequest,
  ) {
    return await this.authService.login(res, dto)
  }

  @ApiOperation({
    summary: 'Оновлення токена доступу',
  })
  @ApiOkResponse({ type: AuthResponse })
  @ApiUnauthorizedResponse({ description: 'Недійсний або прострочений refresh-токен' })
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.refresh(req, res)
  }

  @ApiOperation({
    summary: 'Вихід з системи',
  })
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Res({ passthrough: true }) res: Response) {
    return await this.authService.logout(res)
  }
}
