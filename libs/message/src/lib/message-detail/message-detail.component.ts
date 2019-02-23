import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

declare var $: any;
declare var M: any;

@Component({
  selector: 'msg-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

  constructor(private msgService: MessageService, private router: Router) { }

  message: any;
  ngOnInit() {
    this.message = JSON.parse(localStorage.getItem('data'));
    console.log(typeof(this.message));
    console.log(this.message);
  }

  delete(message) {
    localStorage.removeItem('data');
    M.toast({html: 'Mensagem removida com sucesso!', classes: 'rounded'});
    this.router.navigate(['/register']);

  }

}
