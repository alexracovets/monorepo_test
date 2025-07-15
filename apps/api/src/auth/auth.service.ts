import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
  Inject,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { hash, verify } from 'argon2'
import { Request, Response } from 'express'
import { JwtPayload } from './interfaces/jwt.interface'
import { isDev } from 'src/utils/is-dev.util'

import { RegisterPhysicalDto , RegisterLegalDto ,RegisterLocalUserDto, VerifyOtpDto } from './dto/register.dto'
import { LoginRequest } from './dto/login.dto'
import { User } from 'generated/prisma'
import { TurbosmsService } from 'src/turbosms/turbosms.service'
import { randomInt } from 'crypto'

const MAX_ATTEMPTS = 3
const BLOCK_TIME = 300 // 5 хв
const OTP_TTL = 300 // 5 хв

@Injectable()
export class AuthService {
  private readonly JWT_ACCESS_TOKEN_TTL: string
  private readonly JWT_REFRESH_TOKEN_TTL: string
  private readonly COOKIE_DOMAIN: string

  constructor(
    @Inject('REDIS_CLIENT') private redis,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private config: ConfigService,
    private readonly turbosms: TurbosmsService,

  ) {
    this.JWT_ACCESS_TOKEN_TTL = config.getOrThrow('JWT_ACCESS_TOKEN_TTL')
    this.JWT_REFRESH_TOKEN_TTL = config.getOrThrow('JWT_REFRESH_TOKEN_TTL')
    this.COOKIE_DOMAIN = config.getOrThrow('COOKIE_DOMAIN')
  }

  // ======= OTP =======
  private otpKey = (phone: string) => `otp:${phone}`
  private attemptsKey = (phone: string) => `otp:attempts:${phone}`
  private blockKey = (phone: string) => `otp:blocked:${phone}`
  private verifiedPhoneKey = (phone: string) => `otp:verified:${phone}`

  async sendOtp(phone: string) {
    const isBlocked = await this.redis.exists(this.blockKey(phone))
    if (isBlocked) {
      return { success: false, reason: 'Заблоковано за перевищення спроб' }
    }
    const code = randomInt(1000, 9999).toString();



    await this.redis.set(this.otpKey(phone), code, 'EX', OTP_TTL)
    await this.redis.del(this.attemptsKey(phone))
    await this.redis.del(this.blockKey(phone))

    const message = `Ваш код підтвердження: ${code}`;
    await this.turbosms.sendSms(phone, message);

    return { success: true }
  }
  async verifyOtpComplex(dto: VerifyOtpDto, res: Response) {
    const verifyStatus = await this.verifyOtp(dto.phone, dto.code)
    if (!verifyStatus.success) {
      throw new UnauthorizedException(verifyStatus)
    }
    let user: User;
    const existUser = await this.prisma.user.findUnique({
      where: { phone: dto.phone },
    })
    if (existUser) {
      user = existUser
    } else {
      const newUser = await this.prisma.user.create({
        data: {
          type: 'LIMITED',
          phone: dto.phone,
        },
      })
      user = newUser
    }
    const token = this.auth(res, user.id)
    return {
      token: token.accessToken,
      type: user.type,
    }
  }


  private async verifyOtp(phone: string, code: string) {
    const successResult = {
      success: true,
      message: 'Телефон підтверджено',
    }
    if (isDev(this.config)) return successResult;
    const isBlocked = await this.redis.exists(this.blockKey(phone))
    if (isBlocked) {
      return { success: false, reason: 'Заблоковано за перевищення спроб' }
    }

    const stored = await this.redis.get(this.otpKey(phone))
    if (!stored || stored !== code) {
      const attempts = await this.redis.incr(this.attemptsKey(phone))
      if (attempts === 1) {
        await this.redis.expire(this.attemptsKey(phone), OTP_TTL)
      }

      if (attempts >= MAX_ATTEMPTS) {
        await this.redis.set(this.blockKey(phone), '1', 'EX', BLOCK_TIME)
        await this.redis.del(this.attemptsKey(phone))
      }

      return {
        success: false,
        reason: 'Невірний код',
        attemptsLeft: MAX_ATTEMPTS - attempts,
      }
    }

    await this.redis.del(this.otpKey(phone))
    await this.redis.del(this.attemptsKey(phone))
    await this.redis.set(this.verifiedPhoneKey(phone), '1', 'EX', 600) // 10 хв

    return successResult
  }
  private async afterVerifyOtp(phone: string) {

  }

  async isPhoneVerified(phone: string) {
    const value = await this.redis.get(this.verifiedPhoneKey(phone))
    return value === '1'
  }

  // ======= РЕЄСТРАЦІЯ КОРИСТУВАЧІВ =======

  async registerPhysical(dto: RegisterPhysicalDto, res: Response, phone: string) {
    
    const { email } = dto
    const exists = await this.prisma.user.findFirst({
      where: { OR: [{ phone }, { physicalPerson: { email } }] },
    })

    if (exists) {
      throw new ConflictException('Користувач з таким телефоном або email вже існує')
    }

    const user = await this.prisma.user.create({
      data: {
        type: 'PHYSICAL',
        phone,
        physicalPerson: {
          create: {
            phone,
            email,
            lastName: dto.lastName,
            firstName: dto.firstName,
            middleName: dto.middleName,
            city: dto.city,
            region: dto.region,
            website: dto.website,
            volunteerDocBytes: dto.volunteerDoc, // потрібно обробити файл перед цим
          },
        },
      },
    })

    return this.auth(res, user.id)
  }

  async registerLegal(dto: RegisterLegalDto, res: Response) {
    const { phone, email, edrpouCode } = dto

    const exists = await this.prisma.user.findFirst({
      where: { OR: [{ phone }, { legalEntity: { email } }] },
    })

    if (exists) {
      throw new ConflictException('Користувач з таким телефоном або email вже існує')
    }

    const user = await this.prisma.user.create({
      data: {
        type: 'LEGAL',
        phone,
        legalEntity: {
          create: {
            phone,
            email,
            contactPerson: dto.contactPerson,
            organizationName: dto.organizationName,
            edrpouCode: dto.edrpouCode,
            organizationTypeId: dto.organizationTypeId,
            city: dto.city,
            region: dto.region,
            street: dto.street,
            website: dto.website,
            nonprofitDocBytes: dto.nonprofitDoc,
            usesEDOViaVchasno: dto.usesEDOViaVchasno ?? false,
          },
        },
      },
    })

    return this.auth(res, user.id)
  }

  async registerLocal(dto: RegisterLocalUserDto, res: Response) {
    const exists = await this.prisma.user.findFirst({
      where: {
        localUser: {
          email: dto.email,
        },
      },
    })

    if (exists) {
      throw new ConflictException('Користувач з таким email вже існує')
    }

    const passwordHash = await hash(dto.password)

    const user = await this.prisma.user.create({
      data: {
        type: 'LOCAL',
        localUser: {
          create: {
            email: dto.email,
            // password: passwordHash,
            isSuperAdmin: false,
          },
        },
      },
    })

    return this.auth(res, user.id)
  }

  async validate(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('Користувач не знайдений');
    }

    return user;
  }

  // ======= ЛОГІН =======

  async login(res: Response, dto: LoginRequest) {
    const user = await this.prisma.localUser.findUnique({
      where: { email: dto.email },
      include: { user: true },
    })

    // if (!user || !user.password) {
    //   throw new NotFoundException('Користувач не знайдений')
    // }

    // const isValid = await verify(user.password, dto.password)

    // if (!isValid) {
    //   throw new UnauthorizedException('Невірний пароль')
    // }

    return this.auth(res, user.userId)
  }

  // ======= REFRESH TOKEN =======

  async refresh(req: Request, res: Response) {
    const refreshToken = req.cookies['refreshToken']
    if (!refreshToken) throw new UnauthorizedException()

    const payload: JwtPayload = await this.jwtService.verifyAsync(refreshToken)

    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    })

    if (!user) throw new NotFoundException('Користувач не знайдений')

    return this.auth(res, user.id)
  }

  // ======= LOGOUT =======

  async logout(res: Response) {
    this.setCookie(res, 'refreshToken', new Date(0))
    return true
  }

  // ======= TOKEN GENERATION =======

  private auth(res: Response, id: string) {
    const { accessToken, refreshToken } = this.generateTokens(id)

    this.setCookie(res, refreshToken, new Date(Date.now() + 1000 * 60 * 60 * 8)) // 8 годин

    return { accessToken }
  }

  private generateTokens(id: string) {
    const payload: JwtPayload = { id }

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_ACCESS_TOKEN_TTL,
    })

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_REFRESH_TOKEN_TTL,
    })

    return { accessToken, refreshToken }
  }

  private setCookie(res: Response, value: string, expires: Date) {
    res.cookie('refreshToken', value, {
      httpOnly: true,
      domain: this.COOKIE_DOMAIN,
      expires,
      secure: !isDev(this.config),
      sameSite: isDev(this.config) ? 'none' : 'lax',
    })
  }
}
