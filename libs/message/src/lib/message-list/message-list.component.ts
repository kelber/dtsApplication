import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class Message {
  id: number;
  name: string;
  email: string;
  assunto: string;
  phone: string;
  message: string;
  created: string;
}


@Component({
  selector: 'msg-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})



export class MessageListComponent implements OnInit {
  messages: Observable<Message[]>;

  
  constructor(private msgService: MessageService, private http: HttpClient) {
    this.messages = http.get<Message[]>('/api/messages');



  }

  ngOnInit() {


  }


}
