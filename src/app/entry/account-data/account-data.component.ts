import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { validatorCaracters } from '../formValidator';

import { MarvelService } from './../../services/marvel.service';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css']
})
export class AccountDataComponent implements OnInit {

  pass = 'visibility';
  typePass = 'password';
  nickname = '';
  formAccount!: FormGroup;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MarvelService
  ) { }

  ngOnInit(): void {
    this.formAccount = this.formBuilder.group({
      nickname:[
        ''
        ,[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
          validatorCaracters
        ]
      ],
      firstName:[
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ]],
      lastName:[
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ]],

      email:[null, [Validators.required, Validators.email]],
      contact:[
        null,
        [
          Validators.required
        ]
      ],
      password:[
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
        ]
      ]
    })
  }

  verSenha(){

    if(this.pass == 'visibility'){

      this.pass = 'visibility_off';
      this.typePass = 'text'

    }else{

      this.pass='visibility';
      this.typePass = 'password'

    }
  }

  nextRegistration(){
    const dataAccount = {
      nickname: this.formAccount.get('nickname')?.value,
      firstname: this.formAccount.get('firstName')?.value,
      lastname: this.formAccount.get('lastName')?.value,
      email: this.formAccount.get('email')?.value,
      contact: this.formAccount.get('contact')?.value,
      password: this.formAccount.get('password')?.value

    }

    this.service.cadastrandoAccount(dataAccount);
    this.router.navigate(['/payment']);
  }

}
