import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageService } from './message.service';


@NgModule({
  imports: [
    CommonModule,
    MessageRoutingModule,
    HttpClientModule
  ],
  exports: [ MessageComponent, MessageListComponent, MessageDetailComponent],
  providers: [MessageService],
  declarations: [ MessageComponent, MessageListComponent, MessageDetailComponent ]
})
export class MessageModule {}
