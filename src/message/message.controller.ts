import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Post, Req, Res } from '@nestjs/common';
import { MessageDTO } from 'src/message/dto/message.dto';
import { MessageService } from 'src/message/message.service';

@Controller('messages')
export class MessageController {

    constructor(private _messageService: MessageService){}

    @Get()
    async getMessage(@Res() res){

        const result = await this._messageService.getMessages();
        return res.status(HttpStatus.OK).json({
            message:'OK',
            data: result
        })
    }

    @Post()
    async createMessage(@Req() req, @Body() message : MessageDTO, @Res() res){

        const result = await this._messageService.createMessage(message);

        if(!result)  throw new NotFoundException('Mensaje no creado');
        return res.status(HttpStatus.OK).json({
            message:'Message creado éxistosamente',
            data: result
        });
    }


    @Delete('/:id')
    async deleteMessageById(@Req() req, @Res() res ){
        const result = this._messageService.deleteMessageById(req.params.id);

        if(!result) throw new NotFoundException('Mensaje no encontrado');
        
        return res.status(HttpStatus.OK).json({
            message:'Mensaje eliminado con éxito',
            data: result
        });
    }

}
