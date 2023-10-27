import { AuthService } from '@auth/auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from '@auth/auth.controller';
import { UsersModule } from '@users/users.module';
import { LocalStrategy } from '@auth/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@auth/strategies/jwt.strategy';

@Module({
  imports: [UsersModule, JwtModule.register({})],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
