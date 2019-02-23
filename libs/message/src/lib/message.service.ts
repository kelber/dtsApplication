import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import assuntos from './assuntos.json';
import messages from './messages.json';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { 
   
  }

  messages: any;
  createMessage(messages) {
    return this.http.post('./messages.json', messages);
  }

 



}
