import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from './message.model';

// import 'messages' from './messages.json';

import msgJson from './messages.json';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MessageService {

  savedLocal: any;
  messages = [
    { id: 1, name: 'A', email: 'a@gmail.com', assunto: 'Elogio', phone: '11111111', message: 'aaaaaaaaaaaaaa ', created: '11/12/2011'},
    { id: 2, name: 'B', email: 'a@gmail.com', assunto: 'Elogio', phone: '11111111', message: 'bbbbbbbbbbbbbbbbb', created: '11/12/2011'},
    { id: 3, name: 'C', email: 'a@gmail.com', assunto: 'Elogio', phone: '11111111', message: 'cccccccccccccccc', created: '11/12/2011'},
    { id: 4, name: 'D', email: 'a@gmail.com', assunto: 'Elogio', phone: '11111111', message: 'ddddddddddddddd', created: '11/12/2011' },
  ];

   constructor(private http: HttpClient) { }


  createMessage(obj: any) {
    this.savedLocal = localStorage.setItem('data', JSON.stringify(obj.value));
  }

  getMessages() { 
    return this.messages;
  }


 }
