import { AuthService } from '@auth/auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from '@auth/auth.controller';
import { UsersModule } from '@users/users.module';
import { LocalStrategy } from '@auth/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@auth/strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
        },
      }),
    }),
  ],
  exports: [AuthService],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
