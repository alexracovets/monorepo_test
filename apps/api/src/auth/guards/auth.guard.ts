import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';


import { UserService } from 'src/user/user.service'

async function verifyToken(token: string, jwtService: JwtService) {
  try {
    const payload = await jwtService.verifyAsync(token);
    return payload;
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      throw new UnauthorizedException('Token expired');
    }
    throw new UnauthorizedException('Invalid token');
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(
		private readonly userService: UserService,
		private jwtService: JwtService,
	) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest<Request>();
			const authHeader = req.headers.authorization;
		
			if (!authHeader?.startsWith('Bearer ')) {
			  throw new ForbiddenException('No token');
			}
		
			const token = authHeader.split(' ')[1];
			const payload = await verifyToken(token, this.jwtService);
			
			const userId = payload.id;
			
			const user = await this.userService.findById(userId);
			if (!user) throw new ForbiddenException('User not found');
		
			req.user = user; // передаємо далі, щоб Authorized міг взяти

		return true
	}
}
