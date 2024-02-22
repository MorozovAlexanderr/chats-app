import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@users/users.module';
import { AuthModule } from '@auth/auth.module';
import { RoomsModule } from '@rooms/rooms.module';
import { MessagesModule } from '@messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    UsersModule,
    AuthModule,
    RoomsModule,
    MessagesModule,
  ],
})
export class AppModule {}
