import * as mongoosePaginate from 'mongoose-paginate-v2';
import mongoose, { HydratedDocument } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@users/schemas/user.schema';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  @Type(() => User)
  members: User[];
}

export const RoomSchema =
  SchemaFactory.createForClass(Room).plugin(mongoosePaginate);
