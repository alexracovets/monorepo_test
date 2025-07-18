import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch
} from '@nestjs/common'
import { UserService } from './user.service'
import { Authorization } from 'src/auth/decorators/auth.decorator'
import { Authorized } from 'src/auth/decorators/authorized.decorator'
import { UserType } from 'generated/prisma'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get('profile')
	public async findProfile(@Authorized('id') userId: string) {
		return this.userService.findById(userId)
	}

	@Authorization(UserType.LOCAL)
	@HttpCode(HttpStatus.OK)
	@Get('by-id/:id')
	public async findById(@Param('id') id: string) {
		return this.userService.findById(id)
	}

	// @Authorization()
	// @HttpCode(HttpStatus.OK)
	// @Patch('profile')
	// public async updateProfile(
	// 	@Authorized('id') userId: string,
	// 	@Body() dto: UpdateUserDto
	// ) {
	// 	return this.userService.update(userId, dto)
	// }
}
