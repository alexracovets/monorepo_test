import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserService {
	public constructor(private readonly prisma: PrismaService) {}

	public async findById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			}
		})

		if (!user) {
      throw new NotFoundException(
        'Користувача не знайдено. Будь ласка, перевірте введені дані.'
      )
		}

		return user
	}

	public async findByPhone(phone: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				phone
			},
		})

		return user
	}

}
