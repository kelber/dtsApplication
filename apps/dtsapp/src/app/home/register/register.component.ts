import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, AsyncValidator } from '@angular/forms';
import { Router } from '@angular/router';




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
      name: ['' ],
      email: ['', Validators.required ],
      assunto: [''],
      message: ['', Validators.required ]

    });
   }





  ngOnInit() {
    $('select').formSelect();
    M.textareaAutoResize($('#message'));
    $('textarea#message').characterCounter();

    console.log('assuntos,', this.assuntos);

  }


  onSubmit(messageForm) {
    console.log('sended', messageForm.value);

  }





}
