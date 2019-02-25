import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController {

    constructor(private msgServices: MessagesService) {}
    @Get('messages')
    getMessages() {
        return this.msgServices.getMessages();
        // return 'MESSAGES';
    }

    

   
}
