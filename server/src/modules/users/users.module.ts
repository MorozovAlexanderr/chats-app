import { Module } from '@nestjs/common';
import { UsersService } from '@users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@users/schemas/user.schema';
import { generateHash } from '@utils/hashing';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.pre('save', function () {
            this.password = generateHash(this.password);
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
