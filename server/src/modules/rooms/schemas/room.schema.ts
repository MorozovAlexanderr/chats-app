import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@users/schemas/user.schema';
import { Transform, Type } from 'class-transformer';
import mongoose, { HydratedDocument } from 'mongoose';

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

export const RoomSchema = SchemaFactory.createForClass(Room);
