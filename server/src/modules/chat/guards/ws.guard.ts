import { AuthService } from '@auth/auth.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { AuthSocketClient } from 'modules/chat/interfaces/auth-socket-client.interface';

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const client = context.switchToWs().getClient<AuthSocketClient>();

      const authToken = client.handshake.auth.token.split(' ')[1];
      const user = await this.authService.verifyUser(authToken);

      client.user = user;

      return Boolean(user);
    } catch (err) {
      throw new WsException(err.message);
    }
  }
}
