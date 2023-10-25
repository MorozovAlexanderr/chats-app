import { AuthService } from '@auth/auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from '@users/users.module';
import { LocalStrategy } from '@auth/strategies/local.strategy';

@Module({
  imports: [UsersModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
