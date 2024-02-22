import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@users/schemas/user.schema';
import { Message } from 'modules/messages/schemas/message.schems';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
  ) {}

  createMessage(content: string, roomId: string, creator: User) {
    const message = new this.messageModel({ content, roomId, creator });
    return message.save();
  }

  getMessages(roomId: string) {
    return this.messageModel
      .find({
        roomId,
      })
      .populate('creator');
  }
}
