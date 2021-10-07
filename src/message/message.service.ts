import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IMessage } from 'src/message/interfaces/message.interface';
import { MessageDTO } from 'src/message/dto/message.dto';

@Injectable()
export class MessageService {

    constructor(@InjectModel('Message') private MessageModel: Model<IMessage>){}

    async getMessages(): Promise<IMessage[]>{
        const result = await this.MessageModel.find()
        return result;
    }

    async createMessage(msg:MessageDTO): Promise<IMessage>{
        const message = new this.MessageModel(msg);
        return message.save();
    }
    
    async deleteMessageById(id:string): Promise<IMessage>{
        const result = await this.MessageModel.findByIdAndDelete(id)
        return result;
    }

}
