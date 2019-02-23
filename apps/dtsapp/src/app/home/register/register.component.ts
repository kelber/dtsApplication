import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '@dtsapp/message/src/lib/message.service';

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

  // todo: from microservice API
   assuntos: any[] = [
    { id: 1, title: 'Orçamento' },
    { id: 2, title: 'Dúvida' },
    { id: 3, title: 'Elogio' },
    { id: 4, title: 'Reclamação' }
  ];

  
  constructor(private router: Router, private fb: FormBuilder, private msgService: MessageService ) {
    this.myForm();     
  }

   myForm() {
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
    if(messageForm.valid) {
      console.log('CERTO =>', messageForm);
      this.msgService.createMessage(messageForm)
      M.toast({html: 'Mensagem cadastrada com sucesso!', classes: 'rounded'});
      this.router.navigate(['/home']);

    } else {
      console.log('errado', messageForm.value);

    }


  }





}
