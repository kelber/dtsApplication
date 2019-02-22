import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, AsyncValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';




declare var $: any;
declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  messageForm: FormGroup;
  regexLetters = '^[a-záàâãéèêíïóôõöúçñ ]+$';
  emailPattern = '/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i';

  assuntos = [
    { id: 1, title: 'Orçamento' },
    { id: 2, title: 'Dúvida' },
    { id: 3, title: 'Elogio' },
    { id: 4, title: 'Reclamação' }
  ];

  constructor(private router: Router, private fb: FormBuilder ) {
    this.messageForm = this.fb.group({
      name: ['',  Validators.required  ],
      email: ['', Validators.required ],
      assunto: [''],
      phone: ['', Validators.required ],
      message: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500) ]) ]


    });
   }



  ngOnInit() {
    $('select').formSelect();
    M.textareaAutoResize($('#message'));
    $('textarea#message').characterCounter();


  }


  onSubmit(messageForm) {
    console.log('sended', messageForm.value);
    
    console.log('assuntos,', messageForm.assunto);

  }





}
