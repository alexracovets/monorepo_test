import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'

import { ROLES_KEY } from '../decorators/roles.decorator'
import { UserType } from 'generated/prisma'

// Extend Express Request interface to include 'user'
declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}

@Injectable()
export class RolesGuard implements CanActivate {
	public constructor(private readonly reflector: Reflector) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const roles = this.reflector.getAllAndOverride<UserType[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass()
		])
		const request = context.switchToHttp().getRequest()

		if (!roles) return true

		if (!roles.includes(request.user.type)) {
			throw new ForbiddenException(
				'Недостатньо прав. У вас немає доступу до цього ресурсу.'
			)
		}

		return true
	}
}
