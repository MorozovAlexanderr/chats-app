import { CreateMessageDto } from '@messages/dto/create-message.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@users/schemas/user.schema';
import { plainToClass } from 'class-transformer';
import { Message } from 'modules/messages/schemas/message.schems';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
  ) {}

  async createMessage(createMessageDto: CreateMessageDto, creator: User) {
    const message = await this.messageModel.create({
      ...createMessageDto,
      creator,
    });
    return plainToClass(Message, message.toJSON());
  }

  getMessages(roomId: string) {
    return this.messageModel
      .find({
        roomId,
      })
      .sort({ createdAt: 'asc' })
      .populate('creator');
  }
}
