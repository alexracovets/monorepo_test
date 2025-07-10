import { applyDecorators, UseGuards } from '@nestjs/common'

import { AuthGuard } from '../guards/auth.guard'

import { Roles } from './roles.decorator'
import { UserType } from 'generated/prisma'
import { RolesGuard } from '../guards/roles.guard'

export function Authorization(...roles: UserType[]) {
	if (roles.length > 0) {
		return applyDecorators(
			Roles(...roles),
			UseGuards(AuthGuard, RolesGuard)
		)
	}

	return applyDecorators(UseGuards(AuthGuard))
}
