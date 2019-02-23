import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  savedLocal: any;
  messages: any = {};

  msg: any;
  mensagens = [];

  constructor(private http: HttpClient) { }


  createMessage(obj: any) {
    this.savedLocal = localStorage.setItem('data', JSON.stringify(obj.value));
  }


 }
