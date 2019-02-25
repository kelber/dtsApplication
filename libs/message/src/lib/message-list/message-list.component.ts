import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
// import { Message } from '../message.model';



@Component({
  selector: 'msg-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

    messages: any[];
  // messages: Message[];
  // messages: any[];
  // messages = [];
  // messages = [
  //   { id: 1, name: 'A', email: 'a@gmail.com', assunto: 'Elogio', phone: '11111111', message: 'aaaaaaaaaaaaaa ', created: '240/2/2019'},
  //   { id: 2, name: 'B', email: 'a@gmail.com', assunto: 'Elogio', phone: '11111111', message: 'bbbbbbbbbbbbbbbbb', created: '24/02/2019'},
  //   { id: 3, name: 'C', email: 'a@gmail.com', assunto: 'Elogio', phone: '11111111', message: 'cccccccccccccccc', created: '24/022/019'},
  //   { id: 4, name: 'D', email: 'a@gmail.com', assunto: 'Elogio', phone: '11111111', message: 'ddddddddddddddd', created: '24/02/2019' },
  // ];
  constructor(private msgService: MessageService) {
    this.messages = this.msgService.getMessages();

  }

  ngOnInit() {
  //   this.msgService.getMessages().subscribe(data => {
  //     console.log('data', typeof data, data);
  //      this.messages = data;
  //    });

  }


}
