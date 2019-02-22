import { Component, OnInit } from '@angular/core';
import { FormGroup, } from '@angular/forms';



declare var $: any;
declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('select').formSelect();
    M.textareaAutoResize($('#message'));

  }

}
