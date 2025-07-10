import { forwardRef, Module } from '@nestjs/common'

import { UserController } from './user.controller'
import { UserService } from './user.service'
import { AuthModule } from 'src/auth/auth.module'
import { AuthGuard } from 'src/auth/guards/auth.guard'

@Module({
	imports: [forwardRef(() => AuthModule)],
	controllers: [UserController],
	providers: [UserService, AuthGuard],
	exports: [UserService],
})
export class UserModule {}
