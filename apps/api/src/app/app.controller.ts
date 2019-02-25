import { Controller, Get } from '@nestjs/common';

import { AppService, Ticket } from './app.service';
import { MessagesService, Message } from './messages/messages.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private msgService: MessagesService) {}

  @Get('messages')
  getMessages(): Message[] {
    return this.msgService.getMessages();
  }

 
 
  // @Get()
  // getData(): string {
  //   return this.appService.getData();
  // }

}
